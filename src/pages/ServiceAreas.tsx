import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { SERVICE_AREAS } from "@/lib/serviceAreas";

const ServiceAreasPage = () => {
  return (
    <>
      <Seo
        title="Service Areas | Bay Area Window Replacement | Golden State Windows"
        description="Golden State Windows serves the San Francisco Peninsula and greater Bay Area — Pacifica, Daly City, South San Francisco, San Mateo, San Bruno, Burlingame and beyond."
        path="/service-areas"
        jsonLd={breadcrumbLd("Service Areas", "/service-areas")}
      />
      <PageHeader
        eyebrow="Coverage"
        index="SERVICE AREAS"
        title={<>Serving the <span className="italic font-normal text-primary">Peninsula</span> & the Bay Area.</>}
        description={`Headquartered in ${SITE.city}, ${SITE.name} installs windows, siding, and doors across the San Francisco Bay Area. Explore our dedicated service-area pages for the cities we work in most.`}
      />

      <section className="container-tight py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICE_AREAS.map((a) => (
            <Link
              key={a.slug}
              to={`/service-areas/${a.slug}`}
              className="group bg-background p-8 lg:p-10 flex flex-col hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-primary mb-5">
                <MapPin className="size-4" />
                <span className="technical-mono text-[11px] uppercase tracking-widest">{a.county}</span>
              </div>
              <h2 className="text-2xl font-light tracking-tight mb-3 group-hover:text-primary transition-colors">
                {a.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.metaDescription}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-primary transition-colors">
                View {a.name} <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Wider coverage note */}
        <div className="mt-12 border border-white/5 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Beyond these cities</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-light tracking-tight text-balance">
              Don't see your city? We likely still cover it.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We serve the greater San Francisco Bay Area — from the Peninsula through the South Bay,
              East Bay, and Marin. Tell us where you are and we'll confirm coverage on a free consultation.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/contact">Request a Free Quote <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;
