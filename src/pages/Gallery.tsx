import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-window.jpg";
import door from "@/assets/services-door.jpg";

const projects = [
  { img: g1, title: "Atherton Modern Residence", tag: "Full Replacement", year: "2024", area: "Atherton" },
  { img: hero, title: "Twilight Hill House", tag: "Custom Glazing", year: "2024", area: "San Francisco" },
  { img: g2, title: "Indoor-Outdoor Pavilion", tag: "Multi-Slide Doors", year: "2023", area: "Palo Alto" },
  { img: g4, title: "Marin Hilltop Retreat", tag: "Panoramic Windows", year: "2024", area: "Marin" },
  { img: g3, title: "Victorian Restoration", tag: "Heritage Glazing", year: "2023", area: "San Francisco" },
  { img: door, title: "Pivot Entry Statement", tag: "Door Installation", year: "2024", area: "Cupertino" },
];

const GalleryPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        index="02 / PORTFOLIO"
        title={<>A record of <span className="italic font-normal text-primary">precision</span> across the Bay.</>}
        description="A small selection from over 4,200 completed installations. Every project is photographed by our in-house documentation team."
      />

      <section className="container-tight py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((p) => (
            <figure key={p.title} className="group bg-background relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={p.img}
                  alt={p.title}
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
                  <span className="text-[10px] technical-mono text-muted-foreground">· {p.year}</span>
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
