import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { Picture, type PictureSource } from "@/components/site/Picture";
import { breadcrumbLd } from "@/lib/jsonld";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

// Real project photos: src/assets/portfolio/portfolio-NN.jpg, imported as
// responsive <picture> payloads (AVIF/WebP/JPEG via vite-imagetools) and paired,
// in filename order, with the captions below. To add/replace a project, drop a
// numbered image in that folder and add a caption at the matching position.
const modules = import.meta.glob("../assets/portfolio/*.jpg", { eager: true, import: "default" });
const images = Object.keys(modules)
  .sort()
  .map((key) => modules[key] as PictureSource);

const captions: { title: string; tag: string }[] = [
  { title: "White Double-Hung Windows", tag: "Window Replacement" },
  { title: "Redwood-Framed Picture Windows", tag: "Window Replacement" },
  { title: "Sage-Green Casement Windows", tag: "Window Replacement" },
  { title: "Victorian Bay Window", tag: "Window Replacement" },
  { title: "Full-Home Window Replacement", tag: "Window Replacement" },
  { title: "Sliding Glass Patio Door", tag: "Door Installation" },
  { title: "Arched Windows on Stucco", tag: "Window Replacement" },
  { title: "Victorian Bay Windows", tag: "Window Replacement" },
  { title: "White-Trim Casement Windows", tag: "Window Replacement" },
  { title: "White Vinyl Sliding Windows", tag: "Window Replacement" },
  { title: "Clad-Wood Bay Window", tag: "Window Replacement" },
  { title: "Patio Slider & Transom", tag: "Door Installation" },
  { title: "Vinyl Slider & Double-Hung", tag: "Window Replacement" },
  { title: "White Grid Slider Window", tag: "Window Replacement" },
  { title: "Interior Bay Window", tag: "Window Replacement" },
  { title: "Arched Windows & Entry Door", tag: "Door Installation" },
  { title: "White Bay Window", tag: "Window Replacement" },
  { title: "Black-Framed Windows", tag: "Window Replacement" },
  { title: "Wood Double-Hung Windows", tag: "Window Replacement" },
  { title: "Picture Window Wall", tag: "Window Replacement" },
  { title: "Victorian Window Replacement", tag: "Window Replacement" },
  { title: "White Vinyl Slider Window", tag: "Window Replacement" },
  { title: "Arched Window Replacement", tag: "Window Replacement" },
  { title: "Coastal Bay Window", tag: "Window Replacement" },
  { title: "Bay Window Replacement", tag: "Window Replacement" },
  { title: "Double-Hung Wood Windows", tag: "Window Replacement" },
  { title: "Slider Window Upgrade", tag: "Window Replacement" },
  { title: "Bay Window Interior", tag: "Window Replacement" },
  { title: "Garden Patio Door", tag: "Door Installation" },
  { title: "Best of Daly City · 2021", tag: "Award" },
];

const projects = images.map((img, i) => ({
  img,
  ...(captions[i] ?? { title: "Window Project", tag: "Window Replacement" }),
}));

const GalleryPage = () => {
  return (
    <>
      <Seo
        title="Project Gallery | Bay Area Window & Siding Work | Golden State Windows"
        description="Real window replacement, siding, and door projects from the 8,000+ Bay Area homes Golden State Windows has serviced since 1989."
        path="/gallery"
        jsonLd={breadcrumbLd("Gallery", "/gallery")}
      />
      <PageHeader
        eyebrow="Selected Work"
        index="02 / PORTFOLIO"
        title={<>A record of <span className="italic font-normal text-primary">precision</span> across the Bay.</>}
        description={`Real window, siding, and door projects from the ${SITE.homesServedLabel} homes Golden State Windows has serviced across the ${SITE.serviceAreaLabel} since ${SITE.foundedYear}.`}
      />

      <section className="container-tight py-14">
        {/* Masonry tile — natural aspect ratios, no cropping */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((p, i) => (
            <figure
              key={i}
              className="group relative mb-4 overflow-hidden bg-surface break-inside-avoid"
            >
              <Picture
                image={p.img}
                alt={`${p.title} — ${p.tag} by Golden State Windows in the San Francisco Bay Area`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-1.5">
                  {p.tag}
                </span>
                <h3 className="text-base font-light tracking-tight leading-snug">{p.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">Ready to add your home to our portfolio?</p>
          <Button asChild size="lg"><Link to="/contact">Start Your Project</Link></Button>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
