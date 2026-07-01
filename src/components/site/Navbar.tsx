import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close the mobile menu on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled && !open
          ? "bg-background/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container-tight h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="size-9 bg-primary flex items-center justify-center font-bold text-primary-foreground tracking-tighter text-sm">
            GS
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold uppercase tracking-tight">
              {SITE.name}
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              {SITE.cityState} · Est. {SITE.foundedYear}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-xs font-semibold uppercase tracking-[0.2em] transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE.phoneHref}
            className="hidden md:flex items-center gap-2 text-sm font-medium technical-mono text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="size-3.5" />
            {SITE.phone}
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Request Quote</Link>
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden size-11 flex items-center justify-center border border-white/10 relative z-50 hover:border-primary/50 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Full-screen mobile menu (rendered outside the header so `fixed inset-0`
          fills the viewport instead of being trapped by the header's backdrop-filter). */}
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 lg:hidden bg-background animate-fade-in"
        >
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--gradient-hero)" }}
          />

          <div className="relative h-full pt-24 pb-10 flex flex-col container-tight overflow-y-auto">
            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center">
              {links.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  style={{ animationDelay: `${i * 55}ms` }}
                  className={({ isActive }) =>
                    cn(
                      "animate-fade-up group flex items-center justify-between py-4 border-b border-white/5 text-3xl font-light tracking-tight transition-colors",
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    )
                  }
                >
                  <span>{l.label}</span>
                  <ArrowRight className="size-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </NavLink>
              ))}
            </nav>

            {/* CTA + contact */}
            <div
              className="space-y-6 pt-8 animate-fade-up"
              style={{ animationDelay: `${links.length * 55}ms` }}
            >
              <Button asChild size="lg" className="w-full">
                <Link to="/contact">
                  Request a Free Quote <ArrowRight className="size-4" />
                </Link>
              </Button>

              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-3 text-xl technical-mono text-foreground hover:text-primary transition-colors"
              >
                <Phone className="size-5 text-primary" />
                {SITE.phone}
              </a>

              {/* Reviews + contact icons */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 h-11 border border-white/15 rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Star className="size-4 fill-primary text-primary" />
                  <span className="technical-mono">{SITE.rating}</span>
                  <span className="text-muted-foreground">on {SITE.reviewPlatform}</span>
                </a>
                <a
                  href={SITE.emailHref}
                  aria-label="Email us"
                  className="size-11 flex items-center justify-center border border-white/15 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Mail className="size-4" />
                </a>
              </div>

              {/* Hours + address */}
              <div className="text-center text-[11px] uppercase tracking-[0.15em] text-muted-foreground space-y-1.5 pt-2">
                <div>{SITE.hours}</div>
                <div>{SITE.address}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
