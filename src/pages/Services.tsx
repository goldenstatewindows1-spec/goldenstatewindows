import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { Picture } from "@/components/site/Picture";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import door from "@/assets/services-door.jpg";
import energy from "@/assets/services-energy.jpg";

const services = [
  {
    code: "01",
    title: "Window Replacement",
    img: gallery2,
    desc: "Full-frame and pocket window replacement using structural silicone sealant technology. We work with vinyl, fiberglass, aluminum, and clad-wood systems from the industry's most respected manufacturers.",
    bullets: [
      "Casement, double-hung, awning, picture, and bay configurations",
      "Custom sizing — never off-the-shelf compromises",
      "Lead and asbestos certified removal",
      "Same-day weatherproofing on every install",
    ],
  },
  {
    code: "02",
    title: "Siding",
    img: gallery4,
    desc: "Durable, weather-tight siding that protects your home from the Bay Area's coastal climate and transforms its exterior. Installed by our own crews to the same standard as our window work.",
    bullets: [
      "Fiber-cement, engineered wood, and vinyl siding systems",
      "Moisture barriers and proper flashing at every penetration",
      "Color-matched trim and finish carpentry",
      "Coordinated with window replacement for a seamless exterior",
    ],
  },
  {
    code: "03",
    title: "Energy-Efficient Windows",
    img: energy,
    desc: "Double-pane, gas-filled, low-E glass conversions and Title-24 compliance. Energy-efficient windows can lower heating and cooling costs by up to 30% while keeping your home quieter and more comfortable.",
    bullets: [
      "ENERGY STAR Most Efficient certified products",
      "PG&E rebate paperwork handled in-house",
      "Custom solar-gain modeling for your microclimate",
      "Argon-filled, low-E double-pane glass units",
    ],
  },
  {
    code: "04",
    title: "Door Installation",
    img: door,
    desc: "Entry, patio, and sliding door systems engineered for security, thermal performance, and smooth, silent operation. Our door specialists are certified on every major hardware platform.",
    bullets: [
      "Patio, French, sliding, and multi-slide pocket doors",
      "Multi-point locking and smart-lock integration",
      "Solid-core timber, fiberglass, and steel construction",
      "ADA-compliant thresholds available",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Seo
        title="Window Replacement, Siding & Doors in the Bay Area | Golden State Windows"
        description="Expert window replacement, siding, energy-efficient windows, and door installation across the San Francisco Bay Area. Licensed, bonded & insured. Free consultation."
        path="/services"
        jsonLd={breadcrumbLd("Services", "/services")}
      />
      <PageHeader
        eyebrow="Capabilities"
        index="01 / SERVICES"
        title={<>Window replacement, siding &amp; <span className="italic font-normal text-primary">energy</span> upgrades.</>}
        description={`From single-window replacements to full siding packages, every project across the ${SITE.serviceAreaLabel} is approached with the same engineering rigor — by our own in-house crews.`}
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
                  <Picture
                    image={s.img}
                    alt={`${s.title} in the San Francisco Bay Area by Golden State Windows`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
