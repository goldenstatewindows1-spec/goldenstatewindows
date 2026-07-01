import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import { RouteError } from "@/components/site/RouteError";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Privacy = lazy(() => import("./pages/Privacy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        {
          // Pathless route so an error renders inside the layout (Navbar/Footer stay).
          errorElement: <RouteError />,
          children: [
            { path: "/", element: <Home /> },
            { path: "/services", element: <Services /> },
            { path: "/gallery", element: <Gallery /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/thank-you", element: <ThankYou /> },
            { path: "/privacy", element: <Privacy /> },
            { path: "/cookies", element: <CookiePolicy /> },
            { path: "*", element: <NotFound /> },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  },
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
