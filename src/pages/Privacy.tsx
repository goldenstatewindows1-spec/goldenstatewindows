import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

const sections = [
  {
    h: "Information we collect",
    p: [
      "When you submit our contact or quote-request form, we collect the information you provide: your name, phone number, email address, city, project type, and any project details you choose to share.",
      "We do not knowingly collect information from anyone under the age of 18.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use the information you provide solely to respond to your inquiry, prepare an estimate, schedule a consultation, and communicate with you about your project. We do not sell or rent your personal information to anyone.",
    ],
  },
  {
    h: "How your information is stored and shared",
    p: [
      "Form submissions are stored securely with trusted service providers who host our website and database and deliver our email notifications. These providers process your information only on our behalf and are not permitted to use it for their own purposes.",
      "We may disclose information if required to do so by law.",
    ],
  },
  {
    h: "Your privacy rights (California residents)",
    p: [
      "Under the California Consumer Privacy Act (CCPA/CPRA), California residents have the right to know what personal information we hold about them, to request its deletion, and to correct inaccurate information. We do not sell personal information.",
      `To exercise any of these rights, contact us at ${SITE.email} or ${SITE.phone}.`,
    ],
  },
  {
    h: "Data retention",
    p: [
      "We retain lead and inquiry information for as long as necessary to serve you and to meet our legal and business obligations, after which it is deleted.",
    ],
  },
  {
    h: "Contact us",
    p: [
      `If you have any questions about this Privacy Policy or how your information is handled, contact ${SITE.name} at ${SITE.email}, ${SITE.phone}, or ${SITE.address}.`,
    ],
  },
];

const PrivacyPage = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Golden State Windows"
        description="How Golden State Windows collects, uses, and protects the information you share through our website and contact form."
        path="/privacy"
        jsonLd={breadcrumbLd("Privacy Policy", "/privacy")}
      />
      <PageHeader
        eyebrow="Legal"
        index="05 / PRIVACY"
        title={<>Privacy <span className="italic font-normal text-primary">Policy</span>.</>}
        description="Your privacy matters. This policy explains what we collect through this website and how we use it."
      />

      <section className="container-tight py-14 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-12">Last updated: July 1, 2026</p>
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold uppercase tracking-wide mb-4">{s.h}</h2>
              <div className="space-y-4">
                {s.p.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xs text-muted-foreground border-t border-white/5 pt-8">
          This policy is provided for general information and should be reviewed by legal counsel before publication.
        </p>
      </section>
    </>
  );
};

export default PrivacyPage;
