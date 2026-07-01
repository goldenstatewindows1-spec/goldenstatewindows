import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from "lenis/react";
import App from "./App.tsx";
import "lenis/dist/lenis.css";
import "@fontsource-variable/outfit";
import "./index.css";

const tree = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Smooth (Lenis) scrolling on pointer devices; native scroll if the user
// prefers reduced motion. Touch devices keep native scroll by default.
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

createRoot(document.getElementById("root")!).render(
  prefersReducedMotion ? (
    tree
  ) : (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 }}>
      {tree}
    </ReactLenis>
  ),
);
