import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";

const faqs = [
  { q: "How long does a typical window installation take?", a: "Most full-home replacements are completed in 2–5 days depending on the number of openings. We'll provide a precise timeline in your itemized estimate." },
  { q: "Do you handle permits?", a: "Yes. All city and county permitting is handled in-house at no additional charge. We're familiar with every Bay Area municipality's requirements." },
  { q: "What's the warranty?", a: "A full lifetime warranty on every window we install, transferable to a new owner. Manufacturer warranties on materials range from 20 years to lifetime depending on the product." },
  { q: "Do you offer financing?", a: "Yes — we offer flexible financing options. Ask your consultant about current plans and terms at your free consultation." },
  { q: "Are you licensed and insured?", a: `Yes. ${SITE.license}, with full workers' comp coverage. Documentation is available on request.` },
];

const projectTypes = [
  { value: "windows", label: "Window Replacement" },
  { value: "siding", label: "Siding" },
  { value: "energy", label: "Energy-Efficient Windows" },
  { value: "doors", label: "Door Installation" },
  { value: "multiple", label: "Multiple Services" },
];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine((v) => v.replace(/\D/g, "").length >= 7, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  city: z.string().trim().min(2, "Please enter your city").max(120),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().trim().max(4000).optional(),
  // Honeypot — must stay empty. Bots that auto-fill it are silently dropped.
  company: z.string().max(0).optional(),
});

type LeadForm = z.infer<typeof leadSchema>;

const fieldError = "text-xs text-destructive mt-1.5";
const inputBase = "bg-background border-white/20 h-12";

const ContactPage = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", phone: "", email: "", city: "", projectType: "", message: "", company: "" },
  });

  const onSubmit = async (values: LeadForm) => {
    // Honeypot tripped → pretend success, insert nothing.
    if (values.company) return;

    if (!supabase) {
      setError("root", {
        message: `Something went wrong on our end. Please call us at ${SITE.phone}.`,
      });
      return;
    }

    const { error } = await supabase.from("leads").insert({
      name: values.name,
      email: values.email,
      phone: values.phone,
      city: values.city || null,
      project_type: values.projectType || null,
      message: values.message?.trim() || null,
      source: "website",
    });

    if (error) {
      setError("root", {
        message: `We couldn't submit your request. Please try again or call us at ${SITE.phone}.`,
      });
      return;
    }

    reset();
    toast({
      title: "Quote request received",
      description: "A senior consultant will be in touch within one business day.",
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Begin a Project"
        index="04 / CONTACT"
        title={<>Request your free <span className="italic font-normal text-primary">consultation</span>.</>}
        description="Tell us about your project. A senior consultant will visit your home, assess your goals, and provide a fully itemized estimate."
      />

      <section className="container-tight py-14 grid lg:grid-cols-12 gap-16">
        {/* Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface/40 border border-white/5 p-8 lg:p-12">
            <span className="eyebrow">Request Form</span>
            <h2 className="mt-3 text-3xl font-light tracking-tight mb-8">Tell us about your project</h2>

            {isSubmitSuccessful ? (
              <div className="border border-primary/30 bg-primary/5 p-8 text-center" role="status">
                <div className="size-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                  <Check className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-2">Request received</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you. A senior consultant will be in touch within one business day. Need to reach us sooner?{" "}
                  <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                {/* Honeypot: hidden from users, tempting to bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Full Name</Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      maxLength={120}
                      className={inputBase}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                    />
                    {errors.name && <p id="name-error" role="alert" className={fieldError}>{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(415) 555-0100"
                      maxLength={40}
                      className={inputBase}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone")}
                    />
                    {errors.phone && <p id="phone-error" role="alert" className={fieldError}>{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={200}
                    className={inputBase}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && <p id="email-error" role="alert" className={fieldError}>{errors.email.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">City</Label>
                    <Input
                      id="city"
                      autoComplete="address-level2"
                      placeholder="Pacifica"
                      maxLength={120}
                      className={inputBase}
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? "city-error" : undefined}
                      {...register("city")}
                    />
                    {errors.city && <p id="city-error" role="alert" className={fieldError}>{errors.city.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project Type</Label>
                    <Controller
                      name="projectType"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger
                            id="projectType"
                            className={inputBase}
                            aria-invalid={!!errors.projectType}
                            aria-describedby={errors.projectType ? "projectType-error" : undefined}
                          >
                            <SelectValue placeholder="Select…" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((t) => (
                              <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.projectType && <p id="projectType-error" role="alert" className={fieldError}>{errors.projectType.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project Details</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    maxLength={4000}
                    placeholder="Approximate number of openings, timeline, anything we should know…"
                    className="bg-background border-white/20"
                    {...register("message")}
                  />
                </div>

                {errors.root && (
                  <p role="alert" className="text-sm text-destructive">{errors.root.message}</p>
                )}

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Request Consultation"}
                  </Button>
                  <p className="mt-4 text-[11px] text-muted-foreground">
                    We respect your privacy. No spam, no shared data. Response within one business day.
                  </p>
                </div>
              </form>
            )}
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
              <a href={SITE.emailHref} className="flex items-start gap-4 group">
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
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Address</div>
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
