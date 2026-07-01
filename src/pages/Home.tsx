import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, Phone, Shield, Award, Wrench, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/site/Seo";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-window.jpg";
import galleryEnergy from "@/assets/services-energy.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const trust = [
  { label: "Established", value: `Since ${SITE.foundedYear}` },
  { label: "Homes Served", value: SITE.homesServedLabel },
  { label: `${SITE.reviewPlatform} Rating`, value: `${SITE.rating}★ · ${SITE.reviewCount}` },
  { label: "Warranty", value: "Lifetime" },
];

const services = [
  {
    code: "SYSTEM_01",
    title: "Window Replacement",
    desc: "Full-frame and pocket window replacement using high-performance, energy-efficient glass built for the Bay Area climate.",
    img: gallery2,
  },
  {
    code: "SYSTEM_02",
    title: "Siding",
    desc: "Durable, weather-tight siding that protects your home and transforms its exterior — installed by our own crews.",
    img: gallery4,
  },
  {
    code: "SYSTEM_03",
    title: "Energy-Efficient Windows",
    desc: "ENERGY STAR and Title-24 compliant windows that can lower heating and cooling costs by up to 30%.",
    img: galleryEnergy,
  },
];

const process = [
  { n: "01", t: "Consultation", d: "A free, no-obligation on-site assessment with a senior project consultant." },
  { n: "02", t: "Measurement", d: "Precise custom measurements, material selection, and energy modeling for your home." },
  { n: "03", t: "Installation", d: "Certified in-house crews, meticulous alignment, and full job-site protection." },
  { n: "04", t: "Lifetime Warranty", d: `Every window backed by a full lifetime warranty from a company trusted since ${SITE.foundedYear}.` },
];

const HomePage = () => {
  return (
    <>
      <Seo
        title="Golden State Windows | Bay Area Window Replacement & Siding Since 1989"
        description="Golden State Windows is the San Francisco Bay Area's largest and most trusted window replacement, installation, and siding company. 8,000+ homes since 1989, 4.8★ on Yelp, full lifetime warranty. Free consultation: (800) 748-6448."
        path="/"
      />
      <Helmet>
        {/* Preload the LCP hero image so the browser fetches it before React mounts. */}
        <link rel="preload" as="image" href={heroImg} />
      </Helmet>
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
                  <span className="eyebrow">San Francisco Bay Area · Since {SITE.foundedYear}</span>
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.95] text-balance">
                  Bay Area <span className="italic font-normal text-primary">window replacement</span> &amp; siding, since {SITE.foundedYear}.
                </h1>
                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[52ch]">
                  Golden State Windows has served over {SITE.homesServedLabel} Bay Area homes since {SITE.foundedYear} — expert
                  window replacement, installation, and siding, with every window backed by a full lifetime warranty.
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
                  alt="Energy-efficient window replacement in a modern San Francisco Bay Area home"
                  width={1080}
                  height={1350}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <div className="size-1.5 bg-primary rounded-full animate-pulse-soft" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                      Bay Area Window Replacement
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
              <span className="eyebrow">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                Windows, siding, and energy upgrades.<br />
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
                    alt={`${s.title} services in the San Francisco Bay Area`}
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
                    Learn More <span className="sr-only">about {s.title}</span> <ArrowRight className="size-3" />
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
              For over three decades we've installed in the region's most challenging environments — coastal salt air,
              fault-zone seismic codes, and hillside microclimates. Every job is engineered, never assembled.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/5">
            {[
              { i: Shield, t: "Lifetime Warranty", d: "Every window is backed by a full lifetime warranty, for as long as you own the home." },
              { i: Award, t: "Title-24 Certified", d: "Every install meets or exceeds California's energy standards." },
              { i: Wrench, t: "In-House Crews", d: "We never subcontract. The team that quotes is the team that installs." },
              { i: Leaf, t: "Energy Efficient", d: "ENERGY STAR windows that can cut heating and cooling costs by up to 30%." },
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

      {/* REVIEWS / SOCIAL PROOF */}
      <section className="container-tight py-14 lg:py-20">
        <div className="relative overflow-hidden bg-surface border border-white/5">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
            <div className="space-y-6">
              <span className="eyebrow">Client Record</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-balance">
                The highest-rated window company in the Bay Area.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Golden State Windows holds a {SITE.rating}-star rating across {SITE.reviewCount} {SITE.reviewPlatform} reviews —
                the highest of any Bay Area window company — earned over {SITE.yearsInBusiness} years and {SITE.homesServedLabel} homes.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild variant="outline" size="lg">
                  <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer">
                    Read Reviews on {SITE.reviewPlatform} <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:pl-12 lg:border-l border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-light tracking-tighter text-primary">{SITE.rating}</div>
                <div>
                  <div className="flex gap-1 text-primary mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-primary" />
                    ))}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {SITE.reviewCount} {SITE.reviewPlatform} reviews
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {["Highest Yelp rating of any Bay Area window company", `Over ${SITE.homesServedLabel} homes serviced`, "Full lifetime warranty on every window"].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
                Schedule your free window consultation.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A senior consultant will visit your home, assess your goals, and provide a transparent itemized estimate.
              </p>
            </div>
            <div className="space-y-4 lg:pl-12 lg:border-l border-white/10">
              {["No high-pressure sales", "Free, no-obligation estimate", "Same-week scheduling available"].map((b) => (
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
