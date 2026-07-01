import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone, Shield, Award, Wrench, Leaf, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-window.jpg";
import galleryDoor from "@/assets/services-door.jpg";
import galleryEnergy from "@/assets/services-energy.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const trust = [
  { label: "Licensed", value: SITE.license },
  { label: "Insured", value: "$5M Liability" },
  { label: "Experience", value: `${SITE.yearsInBusiness}+ Years` },
  { label: "Financing", value: "0% APR Available" },
];

const services = [
  {
    code: "SYSTEM_01",
    title: "Window Replacement",
    desc: "Full-frame extraction and high-performance replacement using structural silicone sealant technology.",
    img: gallery2,
  },
  {
    code: "SYSTEM_02",
    title: "Door Installation",
    desc: "Custom-pivot, French, and multi-slide entry systems with millimetric alignment for effortless operation.",
    img: galleryDoor,
  },
  {
    code: "SYSTEM_03",
    title: "Energy Upgrades",
    desc: "Triple-pane gas-filled conversions providing superior thermal isolation and Title-24 compliance.",
    img: galleryEnergy,
  },
];

const process = [
  { n: "01", t: "Consultation", d: "On-site assessment with a senior project consultant. Free, no-obligation." },
  { n: "02", t: "Engineering", d: "Custom measurements, material selection, and energy modeling for your home." },
  { n: "03", t: "Installation", d: "Certified crew, 14-point alignment protocol, full job-site protection." },
  { n: "04", t: "Warranty", d: "Lifetime craftsmanship warranty backed by 22 years in the Bay Area." },
];

const testimonials = [
  { name: "Margaret L.", city: "Atherton", quote: "The level of precision and the cleanliness of the install crew set a new standard for what I expect from contractors." },
  { name: "David & Yuki K.", city: "Palo Alto", quote: "We replaced 18 windows. Energy bills dropped 34% the following winter. Worth every dollar." },
  { name: "Sandra R.", city: "San Francisco", quote: "They restored our 1908 Victorian's bay windows with modern glazing. You'd never know they weren't original." },
];

const HomePage = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

        <div className="container-tight relative pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-10 animate-fade-up">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="size-2 bg-primary rounded-full animate-pulse-soft" />
                  <span className="eyebrow">Bay Area · Precision Glazing</span>
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.95] text-balance">
                  Engineering <span className="italic font-normal text-primary">transparency</span> for the modern home.
                </h1>
                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[52ch]">
                  Specialized window and door installation for the Bay Area's most demanding homes. Performance-tested, masterfully installed, lifetime-warrantied.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Request Free Quote <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={SITE.phoneHref}>
                    <Phone className="size-4" />
                    {SITE.phone}
                  </a>
                </Button>
              </div>

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/5">
                {trust.map((t) => (
                  <div key={t.label} className="pt-6">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1.5 font-semibold">
                      {t.label}
                    </div>
                    <div className="text-sm text-foreground/80 technical-mono">{t.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 animate-fade-in">
              <div className="relative aspect-[4/5] bg-surface overflow-hidden group shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.6)]">
                <img
                  src={heroImg}
                  alt="Modern Bay Area home with floor-to-ceiling architectural windows at twilight"
                  width={1080}
                  height={1350}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <div className="size-1.5 bg-primary rounded-full animate-pulse-soft" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                      Atherton Modern Residence · 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface/40 border-y border-white/5">
        <div className="container-tight py-14 lg:py-20 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <div className="max-w-xl space-y-4">
              <span className="eyebrow">Installation Matrix</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                Three core disciplines.<br />
                <span className="text-muted-foreground">One uncompromising standard.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:text-primary-glow flex items-center gap-2"
            >
              View All Services <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {services.map((s) => (
              <div
                key={s.code}
                className="group bg-background p-8 lg:p-10 flex flex-col min-h-[520px] hover:bg-surface transition-colors duration-500"
              >
                <div className="text-primary font-mono text-[11px] tracking-tight mb-8">
                  {s.code} / {s.title.split(" ")[0].toUpperCase()}
                </div>
                <div className="aspect-[4/3] bg-surface mb-8 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-light uppercase tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <Link
                    to="/services"
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-2"
                  >
                    Analyze Specs <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-tight py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Why Golden State</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight leading-tight">
              The standard the Bay Area demands.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For 22 years we've installed in the region's most challenging environments — coastal salt air, fault-zone seismic codes, hillside microclimates. Every job is engineered, never assembled.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/5">
            {[
              { i: Shield, t: "Lifetime Warranty", d: "Craftsmanship guaranteed for as long as you own the home." },
              { i: Award, t: "Title-24 Certified", d: "Every install meets or exceeds California energy standards." },
              { i: Wrench, t: "In-House Crews", d: "We never subcontract. The team that quotes is the team that installs." },
              { i: Leaf, t: "Energy Verified", d: "Average 28% reduction in heating and cooling costs post-install." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="bg-background p-8 hover:bg-surface transition-colors">
                <Icon className="size-6 text-primary mb-6" />
                <h3 className="text-base font-semibold uppercase tracking-wide mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface/40 border-y border-white/5">
        <div className="container-tight py-14 lg:py-20">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">The Process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
              From consultation to lifetime warranty.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-white/5">
            {process.map((p) => (
              <div key={p.n} className="bg-background p-8 lg:p-10 hover:bg-surface transition-colors">
                <div className="text-primary technical-mono text-sm mb-8">{p.n}</div>
                <h3 className="text-xl font-light uppercase tracking-tight mb-4">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-tight py-14 lg:py-20">
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <span className="eyebrow">Client Record</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
              Trusted across the peninsula.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-primary" />
            ))}
            <span className="ml-3 text-xs uppercase tracking-widest text-muted-foreground">
              4.9 / 5 · 340+ Reviews
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-background p-10 flex flex-col gap-8">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-primary" />
                ))}
              </div>
              <blockquote className="text-base font-light leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-white/5">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {t.city}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-14 lg:py-20">
        <div className="relative overflow-hidden bg-surface border border-white/5">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative grid lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
            <div className="space-y-6">
              <span className="eyebrow">Begin a Project</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-balance">
                Schedule your no-obligation consultation.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A senior consultant will visit your home, assess your goals, and provide a transparent itemized estimate within 48 hours.
              </p>
            </div>
            <div className="space-y-4 lg:pl-12 lg:border-l border-white/10">
              {["No high-pressure sales", "Fixed-price guarantee", "Same-week scheduling available"].map((b) => (
                <div key={b} className="flex items-center gap-4">
                  <div className="size-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-sm">{b}</span>
                </div>
              ))}
              <div className="flex flex-wrap gap-4 pt-6">
                <Button asChild size="lg">
                  <Link to="/contact">Free Quote <ArrowRight className="size-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={SITE.phoneHref}><Phone className="size-4" /> Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
