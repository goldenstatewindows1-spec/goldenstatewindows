// Snapshot prerender: after `vite build`, render each static route in a headless
// browser and save the fully-rendered HTML into dist/. The app itself is NOT
// changed (it stays a normal CSR SPA) — this only adds static HTML for crawlers
// and AI bots. If a headless browser isn't available, it falls back to the CSR
// build (exit 0) so a deploy is never broken by this step.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";

const DIST = "dist";
const PORT = 4183;
const ROUTES = ["/", "/services", "/gallery", "/about", "/contact", "/thank-you", "/privacy", "/cookies"];

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
  ".avif": "image/avif", ".woff2": "font/woff2", ".ico": "image/x-icon",
  ".txt": "text/plain", ".xml": "application/xml",
};

// Static server for dist with directory-index and SPA fallback to index.html.
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

let puppeteer;
try {
  puppeteer = (await import("puppeteer")).default;
} catch {
  console.warn("[prerender] puppeteer unavailable — keeping CSR build.");
  process.exit(0);
}

await new Promise((resolve) => server.listen(PORT, resolve));

let browser;
let ok = 0;
try {
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    // Don't capture the cookie banner (client-only) in the static snapshot.
    await page.evaluateOnNewDocument(() => {
      try { localStorage.setItem("gsw-cookie-consent", "accepted"); } catch (e) { /* noop */ }
    });
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle2", timeout: 45000 });
    await page.waitForSelector("#root h1, #root main", { timeout: 20000 });
    // Freeze animations so content is captured at its final state, then let helmet flush.
    await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important}" });
    await new Promise((r) => setTimeout(r, 150));

    const html = await page.content();
    const outPath = route === "/" ? join(DIST, "index.html") : join(DIST, route, "index.html");
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
    console.log(`[prerender] ${route.padEnd(12)} -> ${outPath} (${(html.length / 1024).toFixed(1)} KiB)`);
    ok++;
    await page.close();
  }
  console.log(`[prerender] done: ${ok}/${ROUTES.length} routes.`);
} catch (e) {
  console.warn(`[prerender] failed after ${ok} routes, keeping CSR build:`, e.message);
} finally {
  if (browser) await browser.close();
  server.close();
}
