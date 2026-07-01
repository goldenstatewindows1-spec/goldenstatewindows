import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactLenis } from "lenis/react";
import { SiteLayout } from "./SiteLayout";

const queryClient = new QueryClient();

/**
 * App-wide providers + smooth scroll. Rendered as the root route element so it
 * wraps every page (and is captured during static prerendering).
 */
export const RootLayout = () => {
  // Disable smooth scroll for reduced-motion users. Computed in a lazy state
  // initializer (server → false), so the rendered DOM is identical on hydration.
  const [reduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: !reduce, syncTouch: false }}>
          <SiteLayout />
        </ReactLenis>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
