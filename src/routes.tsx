import type { ComponentType } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { RootLayout } from "./components/site/RootLayout";
import { RouteError } from "./components/site/RouteError";

// Adapt default-exported page components to react-router's `lazy` convention.
const page = (importer: () => Promise<{ default: ComponentType }>) => () =>
  importer().then((m) => ({ Component: m.default }));

export const routes: RouteRecord[] = [
  {
    element: <RootLayout />,
    children: [
      {
        // Pathless route so an error renders inside the layout (Navbar/Footer stay).
        errorElement: <RouteError />,
        children: [
          { index: true, lazy: page(() => import("./pages/Home")) },
          { path: "services", lazy: page(() => import("./pages/Services")) },
          { path: "gallery", lazy: page(() => import("./pages/Gallery")) },
          { path: "about", lazy: page(() => import("./pages/About")) },
          { path: "contact", lazy: page(() => import("./pages/Contact")) },
          { path: "thank-you", lazy: page(() => import("./pages/ThankYou")) },
          { path: "privacy", lazy: page(() => import("./pages/Privacy")) },
          { path: "cookies", lazy: page(() => import("./pages/CookiePolicy")) },
          { path: "*", lazy: page(() => import("./pages/NotFound")) },
        ],
      },
    ],
  },
];
