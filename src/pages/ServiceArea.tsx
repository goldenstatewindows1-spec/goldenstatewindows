import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";
import { getServiceArea, SERVICE_AREAS, type ServiceArea } from "@/lib/serviceAreas";

const base = SITE.url.replace(/\/$/, "");
const SERVICES = ["Window Replacement", "Siding", "Energy-Efficient Windows", "Door Installation"];

function buildJsonLd(area: ServiceArea) {
  const url = `${base}/service-areas/${area.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Window Replacement, Siding & Door Installation",
      url,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${base}/#business`,
        name: SITE.name,
        telephone: "+1-800-748-6448",
        url: base,
      },
      areaServed: {
        "@type": "City",
        name: area.name,
        containedInPlace: { "@type": "AdministrativeArea", name: area.county },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${base}/service-areas` },
        { "@type": "ListItem", position: 3, name: area.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: area.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

const ServiceAreaPage = () => {
  const { city } = useParams();
  const area = getServiceArea(city);

  if (!area) {
    return (
      <>
        <Seo
          title="Service Area Not Found | Golden State Windows"
          description="We couldn't find that service area."
          path={`/service-areas/${city ?? ""}`}
          noindex
        />
        <PageHeader
          eyebrow="Service Areas"
          title={<>Area not <span className="italic font-normal text-primary">found</span>.</>}
          description="That service area isn't listed yet — but we cover the whole San Francisco Bay Area."
        />
        <section className="container-tight py-14 flex flex-wrap gap-4">
          <Button asChild><Link to="/service-areas">View all service areas</Link></Button>
          <Button asChild variant="outline"><Link to="/contact">Request a Free Quote</Link></Button>
        </section>
      </>
    );
  }

  const others = SERVICE_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <Seo
        title={area.metaTitle}
        description={area.metaDescription}
        path={`/service-areas/${area.slug}`}
        jsonLd={buildJsonLd(area)}
      />
      <PageHeader
        eyebrow="Service Area"
        index={`${area.county.toUpperCase()} · ${area.distance.toUpperCase()}`}
        title={
          <>
            {area.h1Lead}
            <span className="italic font-normal text-primary">{area.h1Highlight}</span>
            {area.h1Tail}
          </>
        }
        description={area.intro}
      />

      {/* Editorial sections */}
      <section className="container-tight py-14">
        <div className="space-y-16">
          {area.sections.map((s, i) => (
            <article key={s.heading} className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="technical-mono text-primary text-sm mb-4">0{i + 1}</div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-balance">
                  {s.heading}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-surface/40 border-y border-white/5">
        <div className="container-tight py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <span className="eyebrow">What we install</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-light tracking-tight">
                Every service, throughout {area.name}.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">All services <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {SERVICES.map((name) => (
              <div key={name} className="bg-background p-6 flex items-start gap-3">
                <Check className="size-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-14 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight">
            {area.name} questions, answered.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-white/5">
            {area.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/5">
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="container-tight pb-14">
        <div className="border border-white/5 p-10 lg:p-16">
          <span className="eyebrow">Nearby</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-light tracking-tight mb-8">
            We also serve these Peninsula cities.
          </h2>
          <div className="flex flex-wrap gap-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                to={`/service-areas/${a.slug}`}
                className="px-4 py-2 border border-white/10 text-sm text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {a.name}
              </Link>
            ))}
            <Link
              to="/service-areas"
              className="px-4 py-2 border border-primary text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              All service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight pb-14">
        <div className="bg-surface/40 border border-white/5 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="size-4" />
              <span className="technical-mono text-xs uppercase tracking-widest">{area.name}, CA</span>
            </div>
            <p className="text-2xl md:text-3xl font-light tracking-tight text-balance">{area.ctaLine}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button asChild size="lg">
              <Link to="/contact">Request a Free Quote <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.phoneHref}>
                <Phone className="size-4" /> {SITE.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaPage;
