import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

/** Fixed call button (always visible, animated) + scroll-to-top (appears on scroll). */
export const FloatingActions = ({ bannerVisible }: { bannerVisible: boolean }) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed right-4 md:right-6 z-40 flex flex-col items-center gap-3 transition-[bottom] duration-300",
        bannerVisible ? "bottom-44 md:bottom-6" : "bottom-6"
      )}
    >
      {/* Scroll to top — fades in after scrolling down */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={cn(
          "size-11 rounded-full bg-surface border border-white/15 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        )}
      >
        <ArrowUp className="size-5" />
      </button>

      {/* Call button — always visible, with a pulsing ring + ringing icon */}
      <a
        href={SITE.phoneHref}
        aria-label={`Call ${SITE.name} at ${SITE.phone}`}
        className="relative size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_8px_28px_-6px_rgba(59,130,246,0.55)] hover:scale-105 active:scale-95 transition-transform"
      >
        <span
          className="absolute inset-0 rounded-full bg-primary opacity-40 animate-ping"
          aria-hidden="true"
        />
        <Phone className="size-6 relative gsw-wiggle" />
      </a>
    </div>
  );
};
