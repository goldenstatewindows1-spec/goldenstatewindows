import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-window.jpg";
import door from "@/assets/services-door.jpg";

const projects = [
  { img: g1, title: "Full-Frame Window Replacement", tag: "Window Replacement", area: "Peninsula" },
  { img: hero, title: "Floor-to-Ceiling Glazing", tag: "Custom Windows", area: "San Francisco" },
  { img: g2, title: "Energy-Efficient Upgrade", tag: "Energy-Efficient Windows", area: "Palo Alto" },
  { img: g4, title: "Exterior Siding & Windows", tag: "Siding", area: "Marin County" },
  { img: g3, title: "Heritage Window Restoration", tag: "Window Replacement", area: "San Francisco" },
  { img: door, title: "Patio & Entry Doors", tag: "Door Installation", area: "Bay Area" },
];

const GalleryPage = () => {
  return (
    <>
      <Seo
        title="Project Gallery | Bay Area Window & Siding Work | Golden State Windows"
        description="See window replacement, siding, and door projects from the 8,000+ Bay Area homes Golden State Windows has serviced since 1989."
        path="/gallery"
        jsonLd={breadcrumbLd("Gallery", "/gallery")}
      />
      <PageHeader
        eyebrow="Selected Work"
        index="02 / PORTFOLIO"
        title={<>A record of <span className="italic font-normal text-primary">precision</span> across the Bay.</>}
        description={`Representative window, siding, and door projects from more than ${SITE.homesServedLabel} homes serviced across the ${SITE.serviceAreaLabel} since ${SITE.foundedYear}.`}
      />

      <section className="container-tight py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((p) => (
            <figure key={p.title} className="group bg-background relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.tag} in ${p.area}, San Francisco Bay Area`}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-light tracking-tight">{p.title}</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {p.area}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-muted-foreground mb-6">Ready to add your home to our portfolio?</p>
          <Button asChild size="lg"><Link to="/contact">Start Your Project</Link></Button>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
