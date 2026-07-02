import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

const sections = [
  {
    h: "What are cookies?",
    p: [
      "Cookies are small text files (and similar technologies like browser local storage) that a website stores on your device. They help the site function, remember your preferences, and understand how the site is used.",
    ],
  },
  {
    h: "How we use them",
    p: [
      "We keep our use of cookies to a minimum. We use strictly necessary and functional storage to make the site work and to remember your cookie choice so we don't ask again on every visit, plus Google Analytics to understand aggregate site traffic.",
      "We do not use cookies to build advertising profiles or to sell your data.",
    ],
  },
  {
    h: "Types of cookies we may use",
    list: [
      "Strictly necessary — required for the site to function and to remember your cookie-consent choice.",
      "Functional — remember basic preferences to improve your experience.",
      "Analytics — Google Analytics 4 (cookies such as _ga and _ga_*) helps us understand aggregate traffic — which pages are visited and how visitors move through the site — so we can improve it. Choosing “Decline” in the cookie banner turns analytics off; advertising features stay disabled either way.",
    ],
  },
  {
    h: "Managing cookies",
    p: [
      "You can accept or decline non-essential cookies using the banner shown on your first visit. You can also control or delete cookies through your browser settings at any time. Blocking some cookies may affect how parts of the site work.",
    ],
  },
  {
    h: "Third-party services",
    p: [
      "This site is hosted on Vercel and uses Supabase to receive contact-form submissions. These providers may set strictly necessary cookies or process limited technical data to deliver the service. We use Google Analytics 4 for aggregate traffic measurement (see above); you can opt out at any time. We do not run third-party advertising trackers.",
    ],
  },
  {
    h: "Contact us",
    p: [
      `Questions about this Cookie Policy? Contact ${SITE.name} at ${SITE.email} or ${SITE.phone}.`,
    ],
  },
];

const CookiePolicyPage = () => {
  return (
    <>
      <Seo
        title="Cookie Policy | Golden State Windows"
        description="How Golden State Windows uses cookies and similar technologies on this website, and how you can manage them."
        path="/cookies"
        jsonLd={breadcrumbLd("Cookie Policy", "/cookies")}
      />
      <PageHeader
        eyebrow="Legal"
        index="06 / COOKIES"
        title={<>Cookie <span className="italic font-normal text-primary">Policy</span>.</>}
        description="How this website uses cookies and similar technologies — and how you stay in control."
      />

      <section className="container-tight py-14 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-12">Last updated: July 2, 2026</p>
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold uppercase tracking-wide mb-4">{s.h}</h2>
              {s.p && (
                <div className="space-y-4">
                  {s.p.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              )}
              {s.list && (
                <ul className="space-y-3">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p className="mt-16 text-xs text-muted-foreground border-t border-white/5 pt-8">
          This policy is provided for general information and should be reviewed by legal counsel before launch.
        </p>
      </section>
    </>
  );
};

export default CookiePolicyPage;
