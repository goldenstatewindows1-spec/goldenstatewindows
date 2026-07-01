import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical window installation take?", a: "Most full-home replacements are completed in 2–5 days depending on the number of openings. We'll provide a precise timeline in your itemized estimate." },
  { q: "Do you handle permits?", a: "Yes. All city and county permitting is handled in-house at no additional charge. We're familiar with every Bay Area municipality's requirements." },
  { q: "What's the warranty?", a: "Lifetime craftsmanship warranty on every install, transferable to a new owner one time. Manufacturer warranties on materials range from 20 years to lifetime depending on the product." },
  { q: "Do you offer financing?", a: "Yes — we offer flexible financing options. Ask your consultant about current plans and terms at your free consultation." },
  { q: "Are you licensed and insured?", a: `Yes. ${SITE.license}, with full workers' comp coverage. Documentation is available on request.` },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Quote request received",
      description: "A senior consultant will be in touch within one business day.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Begin a Project"
        index="04 / CONTACT"
        title={<>Request your free <span className="italic font-normal text-primary">consultation</span>.</>}
        description="Tell us about your project. A senior consultant will visit your home, assess your goals, and provide a fully itemized estimate within 48 hours."
      />

      <section className="container-tight py-14 grid lg:grid-cols-12 gap-16">
        {/* Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface/40 border border-white/5 p-8 lg:p-12">
            <span className="eyebrow">Request Form</span>
            <h2 className="mt-3 text-3xl font-light tracking-tight mb-8">Tell us about your project</h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Smith" className="bg-background border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="(415) 555-0100" className="bg-background border-white/10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-background border-white/10 h-12" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">City</Label>
                  <Input id="city" name="city" required placeholder="Palo Alto" className="bg-background border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project Type</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-white/10 h-12">
                      <SelectValue placeholder="Select…" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="windows">Window Replacement</SelectItem>
                      <SelectItem value="doors">Door Installation</SelectItem>
                      <SelectItem value="energy">Energy Upgrade</SelectItem>
                      <SelectItem value="custom">Custom Architectural</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project Details</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Approximate number of openings, timeline, anything we should know…" className="bg-background border-white/10" />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitted}>
                  {submitted ? <><Check className="size-4" /> Received</> : "Request Consultation"}
                </Button>
                <p className="mt-4 text-[11px] text-muted-foreground">
                  We respect your privacy. No spam, no shared data. Response within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Side info */}
        <aside className="lg:col-span-5 space-y-12">
          <div>
            <span className="eyebrow">Direct Contact</span>
            <div className="mt-6 space-y-5">
              <a href={SITE.phoneHref} className="flex items-start gap-4 group">
                <div className="size-10 border border-white/10 flex items-center justify-center group-hover:border-primary/60 group-hover:text-primary transition-colors">
                  <Phone className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</div>
                  <div className="technical-mono text-foreground group-hover:text-primary transition-colors">{SITE.phone}</div>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                <div className="size-10 border border-white/10 flex items-center justify-center group-hover:border-primary/60 group-hover:text-primary transition-colors">
                  <Mail className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">{SITE.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="size-10 border border-white/10 flex items-center justify-center">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Service Area</div>
                  <div className="text-foreground">{SITE.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 border border-white/10 flex items-center justify-center">
                  <Clock className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Hours</div>
                  <div className="text-foreground">{SITE.hours}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Credentials</span>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-muted-foreground">Warranty</span>
                <span className="technical-mono">Lifetime</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-muted-foreground">{SITE.reviewPlatform} Rating</span>
                <span className="technical-mono">{SITE.rating}★ · {SITE.reviewCount}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-muted-foreground">Homes Serviced</span>
                <span className="technical-mono">{SITE.homesServedLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">In Business Since</span>
                <span className="technical-mono">{SITE.foundedYear}</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="bg-surface/40 border-t border-white/5">
        <div className="container-tight py-14 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">Common questions, answered.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-white/5">
              {faqs.map((f, i) => (
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
        </div>
      </section>
    </>
  );
};

export default ContactPage;
