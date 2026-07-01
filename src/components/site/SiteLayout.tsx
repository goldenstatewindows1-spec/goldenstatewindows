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
  // Initialize synchronously so the floating buttons don't reposition after mount (avoids CLS).
  const [cookieOpen, setCookieOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return !localStorage.getItem(CONSENT_KEY);
    } catch {
      return false;
    }
  });

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

      <FloatingActions bannerVisible={cookieOpen} />
      {cookieOpen && (
        <CookieBanner
          onAccept={() => decide("accepted")}
          onDecline={() => decide("declined")}
        />
      )}
    </div>
  );
};
