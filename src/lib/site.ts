// Central source of truth for all business details.
// Update values HERE rather than in individual components.
//
// Items marked TODO need a real value confirmed by the client before launch.

const FOUNDED_YEAR = 1989;
const CURRENT_YEAR = new Date().getFullYear();

export const SITE = {
  // Identity
  name: "Golden State Windows",
  shortName: "Golden State Windows",
  legalName: "Golden State Windows",
  tagline: "The Bay Area's Largest & Most Trusted Window Company Since 1989",
  description:
    "Golden State Windows is the San Francisco Bay Area's largest and most trusted window replacement, installation, and siding company. Serving 8,000+ homes since 1989 with 100% in-house crews.",

  // Contact
  phone: "(800) 748-6448",
  phoneHref: "tel:+18007486448",
  email: "info@goldenstatewindows.com",
  emailHref: "mailto:info@goldenstatewindows.com",

  // Address (keep NAP identical everywhere it appears)
  street: "1517 Palmette Ave",
  city: "Pacifica",
  state: "CA",
  zip: "94044",
  country: "US",
  address: "1517 Palmette Ave, Pacifica, CA 94044",
  cityState: "Pacifica, CA",
  geo: { lat: 37.636, lng: -122.4869 }, // TODO: refine to the exact rooftop coordinates

  // Company facts
  foundedYear: FOUNDED_YEAR,
  yearsInBusiness: CURRENT_YEAR - FOUNDED_YEAR,
  yearsBadge: `${Math.floor((CURRENT_YEAR - FOUNDED_YEAR) / 5) * 5}+`, // rounded, e.g. "35+"
  homesServed: 8000,
  homesServedLabel: "8,000+",

  // Reputation (real Yelp figures)
  rating: 4.8,
  reviewCount: 393,
  reviewPlatform: "Yelp",
  reviewsUrl: "https://www.yelp.com/biz/golden-state-windows-pacifica",

  // Credentials
  license: "Licensed, Bonded & Insured",
  licenseNumber: "972301", // California CSLB

  // Hours
  hours: "Mon–Sat 10AM–8PM · Sun 10AM–5PM",
  hoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      days: ["Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],

  // Service areas (Bay Area, Peninsula-first around the Pacifica HQ)
  serviceAreaLabel: "San Francisco Bay Area",
  serviceAreas: [
    "Pacifica",
    "Daly City",
    "South San Francisco",
    "San Bruno",
    "Millbrae",
    "Burlingame",
    "San Mateo",
    "Redwood City",
    "San Francisco",
    "Palo Alto",
    "Mountain View",
    "San Jose",
    "Fremont",
    "Oakland",
    "Berkeley",
    "Marin County",
  ],

  // External profiles (used for JSON-LD sameAs and review links)
  social: {
    yelp: "https://www.yelp.com/biz/golden-state-windows-pacifica",
    // TODO: add facebook / instagram URLs if the business has them
  },

  // Canonical production URL (used for SEO canonicals, sitemap, JSON-LD)
  url: "https://goldenstatewindows.com",
};

export type SiteData = typeof SITE;
