import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { CookieBanner } from "./CookieBanner";

const CONSENT_KEY = "gsw-cookie-consent";

// Scroll to top on every route change (via Lenis when active, else native).
const ScrollReset = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);
  return null;
};

export const SiteLayout = () => {
  // Effect-based so the server and first client render match (no hydration mismatch).
  // The banner is a fixed overlay that doesn't move the floating buttons → no CLS.
  const [cookieOpen, setCookieOpen] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setCookieOpen(true);
    } catch {
      /* localStorage unavailable (private mode) — skip the banner */
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore storage errors */
    }
    setCookieOpen(false);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollReset />

      <FloatingActions />
      {cookieOpen && (
        <CookieBanner
          onAccept={() => decide("accepted")}
          onDecline={() => decide("declined")}
        />
      )}
    </div>
  );
};
