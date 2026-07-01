import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import gallery2 from "@/assets/gallery-2.jpg";
import door from "@/assets/services-door.jpg";
import energy from "@/assets/services-energy.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const services = [
  {
    code: "01",
    title: "Window Replacement",
    img: gallery2,
    desc: "Full-frame and pocket replacements using structural silicone sealant technology. We work with vinyl, fiberglass, aluminum, and clad-wood systems from the industry's most respected manufacturers.",
    bullets: [
      "Casement, double-hung, awning, picture, and bay configurations",
      "Custom sizing — never off-the-shelf compromises",
      "Lead and asbestos certified removal",
      "Same-day weatherproofing on every install",
    ],
  },
  {
    code: "02",
    title: "Door Installation",
    img: door,
    desc: "Entry, patio, and interior systems engineered for security, thermal performance, and silent operation. Our door specialists are certified on every major hardware platform.",
    bullets: [
      "Pivot, French, sliding, and multi-slide pocket doors",
      "Multi-point locking and smart-lock integration",
      "Solid-core timber, fiberglass, and steel construction",
      "ADA-compliant thresholds available",
    ],
  },
  {
    code: "03",
    title: "Energy Efficient Upgrades",
    img: energy,
    desc: "Triple-pane gas-filled conversions, advanced low-E coatings, and Title-24 compliance. Average client sees a 28% reduction in HVAC costs within the first year.",
    bullets: [
      "ENERGY STAR Most Efficient certification",
      "PG&E rebate paperwork handled in-house",
      "Custom solar gain modeling for your microclimate",
      "Lifetime seal-failure warranty",
    ],
  },
  {
    code: "04",
    title: "Custom Architectural Glazing",
    img: gallery1,
    desc: "For new construction and major remodels. Floor-to-ceiling walls of glass, structural skylights, and curved glazing engineered to your architect's specifications.",
    bullets: [
      "Direct collaboration with architects and GCs",
      "Hurricane and seismic-rated systems",
      "Acoustic glazing for high-traffic locations",
      "Concierge project management",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        index="01 / SERVICES"
        title={<>Engineered systems for <span className="italic font-normal text-primary">every</span> opening.</>}
        description="From single-window replacements to full architectural glazing packages, every project is approached with the same engineering rigor."
      />

      <section className="container-tight py-14">
        <div className="space-y-32">
          {services.map((s, i) => (
            <article
              key={s.code}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="aspect-[4/3] bg-surface overflow-hidden group">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="technical-mono text-primary text-sm">{s.code}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="space-y-3 pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild>
                    <Link to="/contact">Discuss Your Project <ArrowRight className="size-4" /></Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
