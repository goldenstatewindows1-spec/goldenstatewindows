import { Link, useLocation } from "react-router-dom";
import { useEffect, type CSSProperties } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/site/Seo";
import { SITE } from "@/lib/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page Not Found | Golden State Windows"
        description="The page you're looking for doesn't exist. Return to Golden State Windows — Bay Area window replacement and siding."
        path="/404"
        noindex
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

        <div className="container-tight relative min-h-[82vh] flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Animated "4 0 4" with a cracked window as the zero */}
            <div className="order-1 lg:order-2 flex items-center justify-center gap-2 md:gap-4 select-none">
              <span className="text-[6rem] md:text-[9rem] font-extralight leading-none text-foreground/20 gsw-flicker">
                4
              </span>

              <svg viewBox="0 0 120 150" className="w-24 md:w-32 gsw-float" aria-hidden="true">
                {/* Frame */}
                <rect x="8" y="8" width="104" height="134" rx="10" fill="hsl(var(--surface))" stroke="hsl(var(--primary))" strokeWidth="3" />
                <rect x="8" y="8" width="104" height="134" rx="10" fill="hsl(var(--primary) / 0.06)" />
                {/* Mullions */}
                <line x1="60" y1="10" x2="60" y2="140" stroke="hsl(var(--primary) / 0.35)" strokeWidth="2" />
                <line x1="10" y1="75" x2="110" y2="75" stroke="hsl(var(--primary) / 0.35)" strokeWidth="2" />
                {/* Crack (draws in) */}
                <path
                  d="M60 40 L52 60 L68 74 L56 96 L64 118"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="gsw-draw"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                />
                <path
                  d="M68 74 L88 82"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="gsw-draw"
                  style={{ strokeDasharray: 24, strokeDashoffset: 24, animationDelay: "0.9s" }}
                />
                {/* Falling glass shards */}
                <polygon points="55,98 61,100 57,108" fill="hsl(var(--primary))" className="gsw-shard" style={{ "--dx": "-6px", "--r": "-30deg", animationDelay: "1.4s" } as CSSProperties} />
                <polygon points="66,80 72,83 67,90" fill="hsl(var(--primary) / 0.7)" className="gsw-shard" style={{ "--dx": "8px", "--r": "35deg", animationDelay: "1.9s" } as CSSProperties} />
                <polygon points="60,116 65,118 61,125" fill="hsl(var(--primary) / 0.6)" className="gsw-shard" style={{ "--dx": "-4px", "--r": "20deg", animationDelay: "2.4s" } as CSSProperties} />
              </svg>

              <span
                className="text-[6rem] md:text-[9rem] font-extralight leading-none text-foreground/20 gsw-flicker"
                style={{ animationDelay: "1.5s" }}
              >
                4
              </span>
            </div>

            {/* Copy */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="flex items-center gap-3">
                <span className="size-2 bg-primary rounded-full animate-pulse-soft" />
                <span className="eyebrow">Error 404</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tighter leading-[0.95] text-balance">
                This page <span className="italic font-normal text-primary">cracked</span> under pressure.
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                The page you're looking for was moved or never existed. Let's get you back to something solid — like a
                free window consultation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/">Return Home <ArrowRight className="size-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={SITE.phoneHref}><Phone className="size-4" /> {SITE.phone}</a>
                </Button>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-3">
                {quickLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
