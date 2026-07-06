import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { Picture } from "@/components/site/Picture";
import { breadcrumbLd } from "@/lib/jsonld";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { SERVICE_AREAS } from "@/lib/serviceAreas";
import hero from "@/assets/hero-window.jpg";

const AREA_SLUG = new Map(SERVICE_AREAS.map((a) => [a.name, a.slug]));

const stats = [
  { v: `Since ${SITE.foundedYear}`, l: "In Business" },
  { v: SITE.homesServedLabel, l: "Homes Serviced" },
  { v: `${SITE.rating}★`, l: `${SITE.reviewCount} ${SITE.reviewPlatform} Reviews` },
  { v: "100%", l: "In-House Crews" },
];

const values = [
  { t: "Engineered, never assembled", d: "Every install begins with measurement, modeling, and material selection. We earn the work by treating it as engineering, not handywork." },
  { t: "No subcontractors. Ever.", d: "The crew that walks your home on day one is the crew that finishes it. Continuity is non-negotiable." },
  { t: "Transparent pricing", d: "Fixed-price contracts. Itemized line-items. No change-order surprises after the deposit clears." },
];

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About Golden State Windows | Bay Area Window Company Since 1989"
        description="Since 1989, Golden State Windows has been the Bay Area's most trusted window and siding company — 8,000+ homes, 100% in-house crews, licensed, bonded & insured."
        path="/about"
        jsonLd={breadcrumbLd("About", "/about")}
      />
      <PageHeader
        eyebrow="About"
        index="03 / FIRM"
        title={<>The Bay Area's most trusted <span className="italic font-normal text-primary">window</span> company.</>}
        description={`Founded in ${SITE.foundedYear}, ${SITE.name} has spent more than three decades installing windows, siding, and doors across the San Francisco Bay Area — trusted by over ${SITE.homesServedLabel} homes.`}
      />

      {/* Story */}
      <section className="container-tight py-14 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] bg-surface overflow-hidden">
            <Picture image={hero} alt="Golden State Windows installation on a San Francisco Bay Area home" sizes="(min-width: 1024px) 45vw, 100vw" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6 space-y-6">
          <span className="eyebrow">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">From a single truck to the Bay Area's standard.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our founder started installing windows on the San Francisco Peninsula in {SITE.foundedYear}. The promise was
            simple: do work he'd be proud to put his name on. More than three decades later, that same standard governs
            every project — whether it's a single sash on a Victorian or 60 openings on a new-construction estate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're 100% employee-led. Every measurement, every install, every follow-up is handled by people on our
            payroll. That continuity is what lets us hold every job to the same exacting standard.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface/40 border-y border-white/5">
        <div className="container-tight py-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8 lg:p-10">
              <div className="text-4xl md:text-5xl font-light tracking-tighter text-primary mb-3">{s.v}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-tight py-14">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">Operating Principles</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
            Three rules we don't bend.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {values.map((v, i) => (
            <div key={v.t} className="bg-background p-10">
              <div className="technical-mono text-primary text-sm mb-8">0{i + 1}</div>
              <h3 className="text-xl font-light uppercase tracking-tight mb-4">{v.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="container-tight pb-14">
        <div className="border border-white/5 p-10 lg:p-16">
          <span className="eyebrow">Coverage</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight mb-8">Where we work.</h2>
          <div className="flex flex-wrap gap-3">
            {SITE.serviceAreas.map((a) => {
              const slug = AREA_SLUG.get(a);
              const cls =
                "px-4 py-2 border border-white/10 text-sm text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors";
              return slug ? (
                <Link key={a} to={`/service-areas/${slug}`} className={cls}>
                  {a}
                </Link>
              ) : (
                <span key={a} className={`${cls} cursor-default`}>
                  {a}
                </span>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild><Link to="/contact">Request a Free Quote</Link></Button>
            <Button asChild variant="outline"><Link to="/service-areas">Browse Service Areas</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
