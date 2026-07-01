import { SITE } from "./site";

const base = SITE.url.replace(/\/$/, "");

/** Build a BreadcrumbList JSON-LD for an inner page (Home > Page). */
export function breadcrumbLd(name: string, path: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name, item: `${base}${path}` },
    ],
  };
}
