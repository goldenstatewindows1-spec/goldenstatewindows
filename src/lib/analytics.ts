// Google Analytics 4 (gtag.js) bootstrap.
// The remote script is loaded from index.html; this module replaces Google's
// usual inline snippet because the site's CSP (script-src 'self') forbids
// inline scripts. Consent: analytics runs unless the visitor declines via the
// cookie banner — Decline flips Google Consent Mode to denied and sets the
// ga-disable flag, Accept re-enables collection.

const GA_ID = "G-Z1CXHX9HKB";
const CONSENT_KEY = "gsw-cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/* eslint-disable prefer-rest-params */
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the Arguments object itself, not a spread copy.
  window.dataLayer.push(arguments);
}
/* eslint-enable prefer-rest-params */

const setDisabled = (disabled: boolean) => {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = disabled;
};

export function initAnalytics() {
  if (typeof window === "undefined") return;
  let declined = false;
  try {
    declined = localStorage.getItem(CONSENT_KEY) === "declined";
  } catch {
    /* storage unavailable — treat as not declined */
  }
  setDisabled(declined);
  gtag("consent", "default", {
    analytics_storage: declined ? "denied" : "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  setDisabled(!granted);
  gtag("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
}
