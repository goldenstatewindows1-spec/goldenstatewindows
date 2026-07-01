import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container-tight h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-9 bg-primary flex items-center justify-center font-bold text-primary-foreground tracking-tighter text-sm">
            GS
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold uppercase tracking-tight">
              {SITE.name}
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Daly City · Est. 1989
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
            className="lg:hidden size-10 flex items-center justify-center border border-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-tight py-6 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 px-4 text-sm font-semibold uppercase tracking-[0.2em] border-l-2",
                    isActive
                      ? "border-primary text-primary bg-white/5"
                      : "border-transparent text-muted-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-4 py-3 px-4 text-sm technical-mono text-primary border-t border-white/5"
            >
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
