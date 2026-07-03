// Snapshot prerender: after `vite build`, render each static route in a headless
// browser and save the fully-rendered HTML into dist/. The app itself is NOT
// changed (it stays a normal CSR SPA) — this only adds static HTML for crawlers
// and AI bots. Also renders dist/404.html so Vercel serves unknown URLs with a
// real 404 status (vercel.json has no SPA rewrite; routing is filesystem-based).
//
// IMPORTANT: because there is no SPA fallback rewrite, a build without these
// snapshot files would break direct loads of inner routes. So if prerendering
// fails, we FAIL THE BUILD (exit 1) — on Vercel the previous deployment simply
// stays live, which is safer than shipping a broken one.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";

const DIST = "dist";
const PORT = 4183;
const ROUTES = [
  "/", "/services", "/gallery", "/about", "/contact", "/thank-you", "/privacy", "/cookies",
  "/service-areas",
  "/service-areas/pacifica",
  "/service-areas/daly-city",
  "/service-areas/south-san-francisco",
  "/service-areas/san-mateo",
  "/service-areas/san-bruno",
  "/service-areas/burlingame",
  "/reviews",
];
// Any unmatched path renders the NotFound page; Vercel serves dist/404.html
// with HTTP 404 for URLs that don't match a file.
const NOT_FOUND_ROUTE = "/404";

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
  ".avif": "image/avif", ".woff2": "font/woff2", ".ico": "image/x-icon",
  ".txt": "text/plain", ".xml": "application/xml",
};

// Static server for dist with directory-index and SPA fallback to index.html.
// Snapshots are written only AFTER all routes render, so every render starts
// from the clean CSR shell (never from another route's snapshot).
const server = createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = join(DIST, urlPath);
    const s = await stat(filePath).catch(() => null);
    if (s && s.isDirectory()) filePath = join(filePath, "index.html");
    if (!existsSync(filePath)) filePath = join(DIST, "index.html"); // SPA fallback
    const data = await readFile(filePath);
    res.setHeader("Content-Type", MIME[extname(filePath)] || "application/octet-stream");
    res.end(data);
  } catch {
    res.statusCode = 404;
    res.end("not found");
  }
});

// Acquire a headless browser. In serverless build envs (Vercel/Lambda) a normal
// Chromium can't launch — the container lacks the shared libs it needs
// (libnspr4.so etc.). There we use @sparticuz/chromium, a Chromium build that
// bundles those libs; locally we use the full puppeteer (bundled Chromium).
const isServerless = !!(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NETLIFY);

async function launchBrowser() {
  if (isServerless) {
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteerCore = (await import("puppeteer-core")).default;
    chromium.setGraphicsMode = false; // no GPU/WebGL needed for HTML snapshots
    return puppeteerCore.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  const puppeteer = (await import("puppeteer")).default;
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
}

await new Promise((resolve) => server.listen(PORT, resolve));

let browser;
let failed = false;
try {
  browser = await launchBrowser();

  const jobs = [
    ...ROUTES.map((route) => ({
      route,
      outPath: route === "/" ? join(DIST, "index.html") : join(DIST, route, "index.html"),
    })),
    { route: NOT_FOUND_ROUTE, outPath: join(DIST, "404.html") },
  ];

  const outputs = [];
  for (const { route, outPath } of jobs) {
    const page = await browser.newPage();
    // Keep build renders out of Google Analytics, and don't load third-party
    // embeds (Facebook video iframes) during prerender — the iframe tags still
    // ship in the snapshot; this only keeps networkidle2 fast and deterministic.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (/googletagmanager\.com|google-analytics\.com|analytics\.google\.com|facebook\.com|facebook\.net|fbcdn\.net|trustindex\.io/.test(req.url())) {
        return req.abort();
      }
      return req.continue();
    });
    // Don't capture the cookie banner (client-only) in the static snapshot.
    await page.evaluateOnNewDocument(() => {
      try { localStorage.setItem("gsw-cookie-consent", "accepted"); } catch (e) { /* noop */ }
    });
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle2", timeout: 45000 });
    await page.waitForSelector("#root h1, #root main", { timeout: 20000 });
    // Freeze animations so the DOM settles, then REMOVE the style tag before
    // serializing — otherwise it ships in the HTML and kills all animations
    // for real visitors.
    const freeze = await page.addStyleTag({
      content: "*,*::before,*::after{animation:none!important;transition:none!important}",
    });
    await new Promise((r) => setTimeout(r, 150));
    await freeze.evaluate((el) => el.remove());

    const html = await page.content();
    outputs.push({ route, outPath, html });
    await page.close();
  }

  // All rendered from the clean shell — now persist.
  for (const { route, outPath, html } of outputs) {
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
    console.log(`[prerender] ${route.padEnd(36)} -> ${outPath} (${(html.length / 1024).toFixed(1)} KiB)`);
  }
  console.log(`[prerender] done: ${outputs.length}/${jobs.length} pages.`);
} catch (e) {
  failed = true;
  console.error("[prerender] FAILED — failing the build (no SPA rewrite fallback exists):", e.message);
} finally {
  if (browser) await browser.close();
  server.close();
}

if (failed) process.exit(1);
