import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "lenis/dist/lenis.css";
import "@fontsource-variable/outfit";
import "./index.css";

// Static Site Generation: routes are prerendered to HTML at build time and
// hydrated on the client. Per-route head tags come from the <Head> component.
export const createRoot = ViteReactSSG({ routes });
