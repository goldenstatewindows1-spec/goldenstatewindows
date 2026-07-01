import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/site";

const base = SITE.url.replace(/\/$/, "");

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Use "/" for home. */
  path: string;
  noindex?: boolean;
  /** Optional JSON-LD structured data (object or array of objects). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Per-route <head> tags for JS-rendering crawlers (Google/Bing).
 * Brand-level Open Graph / Twitter tags and the core LocalBusiness JSON-LD live
 * statically in index.html so non-JS social scrapers still get a share card.
 */
export const Seo = ({ title, description, path, noindex, jsonLd }: SeoProps) => {
  const canonical = `${base}${path === "/" ? "" : path}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};
