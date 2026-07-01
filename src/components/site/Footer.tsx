import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface/40 mt-32">
      <div className="container-tight py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-9 bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
                GS
              </div>
              <span className="text-base font-semibold uppercase">
                {SITE.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Precision-engineered window and door installation for the Bay
              Area's most demanding homes. Licensed, insured, and proven for
              over two decades.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="size-4 text-primary" />
                <span className="technical-mono">{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="size-4 text-primary" />
                {SITE.email}
              </a>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="size-4 text-primary" />
                {SITE.address}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Services", "Portfolio", "About", "Contact"].map(
                (label) => {
                  const to =
                    label === "Home"
                      ? "/"
                      : label === "Portfolio"
                      ? "/gallery"
                      : `/${label.toLowerCase()}`;
                  return (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-5">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {SITE.serviceAreas.slice(0, 8).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-5">Credentials</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-primary mb-0.5">
                  License
                </span>
                {SITE.license}
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-primary mb-0.5">
                  Insurance
                </span>
                $5M General Liability
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-primary mb-0.5">
                  Hours
                </span>
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Designed & Engineered in the Bay Area</p>
        </div>
      </div>
    </footer>
  );
};
