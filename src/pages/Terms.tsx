import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

const sections = [
  {
    h: "Agreement to these terms",
    p: [
      `By accessing or using this website (goldenstatewindows.com), you agree to these Terms of Use and to our Privacy Policy and Cookie Policy. If you do not agree, please do not use the site.`,
    ],
  },
  {
    h: "Informational content — not an offer",
    p: [
      "Everything on this website — service descriptions, project photos, timelines, and statements such as potential energy savings — is general information about our business, provided for marketing purposes. It is not a binding offer, quote, or guarantee.",
      "Every home and project is different. Actual pricing, scope, schedule, and expected results are determined only after an in-home consultation, and the terms of any project are set exclusively by a signed written contract between you and us.",
    ],
  },
  {
    h: "Consultations and quote requests",
    p: [
      "Submitting the contact form or calling us requests a free, no-obligation consultation. It does not create a contract and does not obligate you or us in any way.",
    ],
  },
  {
    h: "Warranties on our work",
    p: [
      "Warranty coverage for products and workmanship is defined in the written contract and warranty documents you receive for your project. Any warranty summaries on this website do not expand or modify those documents.",
    ],
  },
  {
    h: "Reviews and testimonials",
    p: [
      "Reviews and testimonials shown on or linked from this site (including Yelp and Google reviews displayed through the Trustindex widget, and video testimonials) are the opinions of individual customers. Experiences vary, and past results are not a promise of identical results for your project. We do not edit third-party reviews.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      `The content, design, text, graphics, and logos on this site belong to ${SITE.legalName} or its licensors. You may view and share the site for personal, non-commercial purposes; any other copying or republication requires our written permission.`,
    ],
  },
  {
    h: "Third-party sites and embeds",
    p: [
      "This site links to and embeds services we do not control — such as Yelp, Google, Facebook, and Trustindex. Their content, availability, and policies are their own, and we are not responsible for them.",
    ],
  },
  {
    h: "The website is provided “as is”",
    p: [
      "We work to keep the site accurate and available, but we cannot promise it will always be error-free or uninterrupted. To the fullest extent permitted by law, we disclaim implied warranties regarding the website itself. This section concerns the website only — it does not affect the workmanship and product warranties provided under a signed project contract.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of this website.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of the State of California. Any dispute relating to this website will be resolved in the courts located in San Mateo County, California.",
    ],
  },
  {
    h: "Changes to these terms",
    p: [
      "We may update these Terms of Use from time to time. The date at the top of this page shows when they were last revised; continued use of the site after a change means you accept the updated terms.",
    ],
  },
  {
    h: "Contact us",
    p: [
      `Questions about these Terms of Use? Contact ${SITE.name} at ${SITE.email} or ${SITE.phone}.`,
    ],
  },
];

const TermsPage = () => {
  return (
    <>
      <Seo
        title="Terms of Use | Golden State Windows"
        description="The terms that govern use of the Golden State Windows website, including how site content relates to project contracts, warranties, and reviews."
        path="/terms"
        jsonLd={breadcrumbLd("Terms of Use", "/terms")}
      />
      <PageHeader
        eyebrow="Legal"
        index="07 / TERMS"
        title={<>Terms of <span className="italic font-normal text-primary">Use</span>.</>}
        description="How this website may be used — and how the information here relates to the written contract that governs an actual project."
      />

      <section className="container-tight py-14 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-12">Last updated: July 3, 2026</p>
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
          These terms are provided for general information and should be reviewed by legal counsel before launch.
        </p>
      </section>
    </>
  );
};

export default TermsPage;
