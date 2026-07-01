import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/site/Seo";
import { SITE } from "@/lib/site";

const steps = [
  { n: "01", t: "We review your request", d: "A senior consultant reviews your project details." },
  { n: "02", t: "We call you back", d: "Expect a call within one business day to schedule your visit." },
  { n: "03", t: "Free on-site estimate", d: "We measure, assess, and provide a transparent, itemized quote." },
];

const ThankYouPage = () => {
  return (
    <>
      <Seo
        title="Thank You | Golden State Windows"
        description="Thank you for your request. A Golden State Windows consultant will be in touch within one business day."
        path="/thank-you"
        noindex
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

        <div className="container-tight relative py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated checkmark */}
            <div className="gsw-pop inline-flex mb-10">
              <svg viewBox="0 0 110 110" className="w-24 h-24" aria-hidden="true">
                <circle cx="55" cy="55" r="48" fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary) / 0.35)" strokeWidth="3" />
                <path
                  d="M36 57 L50 71 L76 41"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="gsw-draw"
                  style={{ strokeDasharray: 62, strokeDashoffset: 62, animationDelay: "0.25s" }}
                />
              </svg>
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="size-2 bg-primary rounded-full animate-pulse-soft" />
              <span className="eyebrow">Request Received</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-[0.98] text-balance">
              Thank you. We'll be in <span className="italic font-normal text-primary">touch</span> shortly.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              Your request is in. A senior consultant from Golden State Windows will reach out within one business day to
              schedule your free, no-obligation consultation.
            </p>

            {/* What happens next */}
            <div className="mt-14 grid sm:grid-cols-3 gap-px bg-white/5 text-left">
              {steps.map((s) => (
                <div key={s.n} className="bg-background p-8">
                  <div className="technical-mono text-primary text-sm mb-6">{s.n}</div>
                  <h2 className="text-base font-semibold uppercase tracking-wide mb-3">{s.t}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">Back to Home <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Need to reach us sooner?{" "}
              <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 text-primary hover:underline">
                <Phone className="size-3.5" /> {SITE.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
