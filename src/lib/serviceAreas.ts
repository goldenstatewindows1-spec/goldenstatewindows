// Per-city service-area content for local SEO landing pages (/service-areas/:slug).
// Copy is city-specific and factual — company-wide figures (8,000+ homes, 4.8/393
// Yelp) are never reattributed to a single city, and there is no local office
// besides the Daly City HQ. Update a city's copy HERE.

export interface ServiceAreaFaq {
  q: string;
  a: string;
}

export interface ServiceAreaSection {
  heading: string;
  body: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  /** Honest proximity to the Daly City HQ, shown as an eyebrow/tag. */
  distance: string;
  metaTitle: string;
  metaDescription: string;
  h1Lead: string;
  /** The accented (italic) word(s) inside the h1. */
  h1Highlight: string;
  h1Tail: string;
  intro: string;
  sections: ServiceAreaSection[];
  faqs: ServiceAreaFaq[];
  ctaLine: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "pacifica",
    name: "Pacifica",
    county: "San Mateo County",
    distance: "~10 min from our Daly City HQ",
    metaTitle: "Pacifica Window & Siding Installation | Golden State Windows",
    metaDescription:
      "Coastal-grade window replacement, siding & doors for Pacifica, CA — built for fog and salt air. Family-run since 1989, licensed & insured. Free in-home consultation.",
    h1Lead: "Window & Siding Installation Built for ",
    h1Highlight: "Pacifica",
    h1Tail: " Coastal Living",
    intro:
      "Pacifica's homes sit right on the Pacific, and the coast is hard on them — fog, salt air, and wind-driven rain wear ordinary windows out fast. Golden State Windows knows this coastline well: our shop is just north in Daly City, only minutes away. Since 1989 we've installed coastal-grade windows, siding, and doors here, with 100% in-house crews and no subcontractors.",
    sections: [
      {
        heading: "Engineered for Salt, Fog & Coastal Wind",
        body: "Homes a few blocks from the Pacific take a beating that inland houses never see. Persistent fog, salt-laden air, and wind-driven rain corrode hardware, work moisture behind siding, and wear out seals faster. That's why our Pacifica installations lean on moisture-tight, weatherproof detailing and corrosion-resistant hardware. We handle full-frame and pocket window replacement in vinyl, fiberglass, aluminum, and clad-wood, plus fiber-cement, engineered-wood, and vinyl siding built to stand up to the coast. Energy-efficient, Title-24 and ENERGY STAR windows can also cut heating and cooling costs by up to roughly 30%.",
      },
      {
        heading: "A Contractor Who Knows the Coast",
        body: "Based just north in Daly City, we're minutes from Pacifica — not a crew dispatched from across the Bay. Golden State Windows has served 8,000+ homes across the San Francisco Bay Area since 1989, earning a 4.8/5 rating over 393 Yelp reviews. Every job is done by our own licensed, bonded, and insured in-house crews, never subcontractors, with permits handled in-house. Entry, patio, French, and sliding doors round out the work, and it all starts with a free, no-obligation in-home consultation.",
      },
    ],
    faqs: [
      {
        q: "Do you serve all of Pacifica?",
        a: "Yes. We install throughout Pacifica, from Sharp Park down to Linda Mar. Our shop is just north in Daly City, only minutes away, so scheduling visits and follow-up along the coast is easy.",
      },
      {
        q: "How do you handle Pacifica's fog and salt air?",
        a: "We design coastal installations around moisture-tight, weatherproof detailing and corrosion-resistant hardware, then pair them with siding and windows chosen to resist salt air and wind-driven rain. Proper weatherproofing is what keeps coastal homes dry, sealed, and lasting far longer here.",
      },
      {
        q: "Do you handle permits and all the work yourselves?",
        a: "Yes. We use 100% in-house crews, no subcontractors, and handle permits in-house. Golden State Windows is licensed, bonded, and insured. It all begins with a free, no-obligation in-home consultation in Pacifica.",
      },
    ],
    ctaLine: "Book a free, no-obligation in-home consultation anywhere in Pacifica.",
  },
  {
    slug: "daly-city",
    name: "Daly City",
    county: "San Mateo County",
    distance: "Our home base",
    metaTitle: "Daly City Window Replacement & Siding | Golden State Windows",
    metaDescription:
      "Golden State Windows is based in Daly City, CA — window replacement, siding & doors built for the fog and wind. Family-run since 1989, in-house crews, licensed & insured. Free in-home consultation.",
    h1Lead: "Windows built for the fog and wind of ",
    h1Highlight: "Daly City",
    h1Tail: "",
    intro:
      "Few Bay Area cities test a window like Daly City does. The near-constant coastal fog and wind that roll in off the Pacific push moisture and drafts through any gap they can find. Golden State Windows engineers replacements to seal tight against that weather — and because Daly City is our home base, we know exactly what your home is up against.",
    sections: [
      {
        heading: "Westlake Homes, Sealed and Warmer",
        body: "Much of Daly City is dense mid-century housing, and the Westlake district's Henry Doelger tract homes are a case in point — many still carry their original single-pane windows. Those panes leak heat and let the damp in. Full-frame and pocket replacements in vinyl, fiberglass, aluminum, or clad-wood, built to Title-24 and ENERGY STAR standards, can cut heating and cooling costs by up to about 30%. We also install fiber-cement, engineered-wood, and vinyl siding, plus entry, patio, French, and sliding doors.",
      },
      {
        heading: "A Contractor You Can Stand Behind",
        body: "Golden State Windows has been family-run since 1989, more than 30 years spent installing across the Bay Area — and Daly City is home. Every job runs on our own 100% in-house crews — no subcontractors — and we handle permits ourselves. We're licensed, bonded, and insured. It starts with a free, no-obligation in-home consultation, where we measure, talk options, and give you a straight quote.",
      },
    ],
    faqs: [
      {
        q: "Do you serve all of Daly City?",
        a: "Yes. We install throughout Daly City, from the Westlake tract homes to newer construction across the city — and since Daly City is our home base, scheduling visits and follow-up here couldn't be easier.",
      },
      {
        q: "Will new windows really help with the fog, wind, and cold?",
        a: "They can make a real difference. Energy-efficient, Title-24 and ENERGY STAR windows seal out drafts and moisture and can cut heating and cooling costs by up to around 30% — a meaningful upgrade for older single-pane homes in Daly City's damp, windy climate.",
      },
      {
        q: "Do you handle permits for Daly City projects?",
        a: "Yes. Permits are handled in-house as part of the job. Our own crews do the installation start to finish, with no subcontractors, so you deal with one accountable team from consultation through final inspection.",
      },
    ],
    ctaLine: "Book a free, no-obligation in-home consultation anywhere in Daly City.",
  },
  {
    slug: "south-san-francisco",
    name: "South San Francisco",
    county: "San Mateo County",
    distance: "Minutes from our Daly City HQ",
    metaTitle: "South San Francisco Window Replacement | Golden State Windows",
    metaDescription:
      "Window replacement, siding, and door installation in South San Francisco, CA. Family-run since 1989, in-house crews, licensed & insured. Book a free in-home consultation.",
    h1Lead: "Weather-Tight Windows & Doors for ",
    h1Highlight: "South San Francisco",
    h1Tail: " Homes",
    intro:
      "The Industrial City sits right on the bay, and that means marine air and steady wind test every seal on your house. Golden State Windows installs replacement windows, siding, and doors built to keep South San Francisco homes tight, quiet, and comfortable, year after year. We're a family-run contractor based just north in Daly City, and every project runs on our own crews.",
    sections: [
      {
        heading: "Built for Bayside Weather",
        body: "South San Francisco's mix of older and mid-century homes wasn't built for today's wind-driven marine air, and drafty single-pane windows show it first. We replace them with full-frame or pocket units in vinyl, fiberglass, aluminum, or clad-wood, sealed for a weather-tight fit against the bay breeze. Energy-efficient, Title-24 and ENERGY STAR windows can trim heating and cooling costs by up to about 30%. We also install fiber-cement, engineered-wood, and vinyl siding, plus entry, patio, French, and sliding doors.",
      },
      {
        heading: "Why South San Francisco Chooses Golden State",
        body: "We've installed windows, siding, and doors across the Bay Area since 1989, more than 30 years of hands-on work with a 4.8/5 rating across 393 Yelp reviews. Our own licensed, bonded, and insured crews do the work, no subcontractors. We handle permits in-house, so your project stays on schedule. It all starts with a free, no-obligation in-home consultation.",
      },
    ],
    faqs: [
      {
        q: "Do you serve all of South San Francisco?",
        a: "Yes. We service homes throughout South San Francisco and the surrounding Peninsula from our Daly City headquarters, just a short drive south. There's no local showroom to visit; instead, we come to you for a free in-home consultation and measure everything on site.",
      },
      {
        q: "Which windows hold up best against bay wind and marine air?",
        a: "For South San Francisco's exposed, bayside conditions, we fit properly sealed vinyl, fiberglass, aluminum, or clad-wood windows. Energy-efficient Title-24 and ENERGY STAR options add weather resistance while cutting heating and cooling costs by up to about 30%.",
      },
      {
        q: "Do you handle permits for South San Francisco projects?",
        a: "Yes. We handle permits in-house as part of the job, so you don't have to coordinate with the city yourself. Our own crews manage the full installation from start to finish, and we're licensed, bonded, and insured.",
      },
    ],
    ctaLine: "Book a free, no-obligation in-home consultation anywhere in South San Francisco.",
  },
  {
    slug: "san-mateo",
    name: "San Mateo",
    county: "San Mateo County",
    distance: "A short drive down the Peninsula",
    metaTitle: "San Mateo Window Replacement & Siding | Golden State Windows",
    metaDescription:
      "Window replacement, siding & door installation in San Mateo, CA. Custom-fit windows for craftsman to modern homes, in-house crews, licensed & insured. Free consultation.",
    h1Lead: "Window replacement built for ",
    h1Highlight: "San Mateo",
    h1Tail: " homes of every era.",
    intro:
      "San Mateo is one of the larger mid-Peninsula cities, and its housing shows it — early-1900s craftsman homes sit blocks from mid-century and modern builds. That range is exactly why off-the-shelf windows rarely fit. Golden State Windows measures, sizes, and material-matches every opening, so a new install reads as original to the house — not bolted on.",
    sections: [
      {
        heading: "Matched to your home, not a catalog",
        body: "No two San Mateo blocks are alike, so we don't treat them alike. On a craftsman we'll match sightlines and trim; on a mid-century or modern build we'll hold clean lines and larger glass. We install full-frame and pocket replacements in vinyl, fiberglass, aluminum, and clad-wood, plus fiber-cement, engineered-wood, and vinyl siding and entry, patio, French, and sliding doors. Title-24 and ENERGY STAR options can trim heating and cooling costs by up to about 30%. Permits are handled in-house.",
      },
      {
        heading: "Why San Mateo homeowners choose us",
        body: "Golden State Windows has been family-run since 1989, with 8,000+ Bay Area homes serviced and a 4.8/5 rating across 393 Yelp reviews. Every job is run by our own crews — no subcontractors. We're licensed, bonded, and insured, and San Mateo is a straightforward drive from our Daly City headquarters. Start with a free, no-obligation in-home consultation.",
      },
    ],
    faqs: [
      {
        q: "Do you service all of San Mateo?",
        a: "Yes. We serve San Mateo throughout San Mateo County from our Daly City headquarters, an easy drive down the Peninsula. There's no local showroom — we come to you for a free, no-obligation in-home consultation and handle measurement, installation, and permits from there.",
      },
      {
        q: "Can you match windows on an older craftsman home?",
        a: "Absolutely. San Mateo's early-1900s craftsman homes often need custom sizing and careful material matching. We measure each opening and select from vinyl, fiberglass, aluminum, or clad-wood so replacements suit the home's era rather than looking retrofitted.",
      },
      {
        q: "Will new windows lower my energy bills?",
        a: "They can. Our energy-efficient, Title-24-compliant ENERGY STAR windows are built to cut heating and cooling costs by up to roughly 30%, depending on your home. We'll walk through the right glass and frame options during your free in-home consultation in San Mateo.",
      },
    ],
    ctaLine: "Book a free, no-obligation in-home consultation anywhere in San Mateo.",
  },
  {
    slug: "san-bruno",
    name: "San Bruno",
    county: "San Mateo County",
    distance: "Minutes down the Peninsula",
    metaTitle: "San Bruno Window Replacement & Siding | Golden State Windows",
    metaDescription:
      "Window replacement, siding, and door installation in San Bruno, CA. Family-run since 1989, in-house crews, licensed & insured. Book a free in-home consultation.",
    h1Lead: "Window Replacement & Energy Upgrades in ",
    h1Highlight: "San Bruno",
    h1Tail: "",
    intro:
      "San Bruno's hillside neighborhoods take a steady beating from Peninsula wind, and much of the city's older housing stock still runs on single-pane glass that leaks heat and rattles in a gust. Golden State Windows replaces those tired windows with tight, energy-efficient units built to hold up on an exposed lot. We're based just up the Peninsula in Daly City, and we've been doing this since 1989.",
    sections: [
      {
        heading: "Built for San Bruno Homes",
        body: "Wind exposure and aging frames are the two issues we see most across San Bruno, from the flats near SFO to the streets climbing the hillsides. We install full-frame and pocket replacements in vinyl, fiberglass, aluminum, and clad-wood, plus Title-24 and ENERGY STAR windows that can cut heating and cooling costs by up to about 30 percent. We also handle fiber-cement, engineered-wood, and vinyl siding, and entry, patio, French, and sliding doors to finish the exterior. Permits are managed in-house.",
      },
      {
        heading: "Why Golden State Windows",
        body: "We're a family-run contractor, licensed, bonded, and insured, with a 4.8 out of 5 rating across 393 Yelp reviews and more than 8,000 Bay Area homes behind us. Every job is done by our own 100% in-house crews, never subcontractors, so the people who quote your San Bruno project are the ones who complete it. Consultations are free and no-obligation.",
      },
    ],
    faqs: [
      {
        q: "Do you serve all of San Bruno?",
        a: "Yes. We cover San Bruno top to bottom, from the neighborhoods near SFO to the hillside streets, working out of our Daly City headquarters nearby. There's no local showroom to visit; instead we come to you for a free in-home consultation and measurement.",
      },
      {
        q: "Will new windows help with San Bruno's wind and drafts?",
        a: "They should. Replacing aging single-pane windows with tight, energy-efficient units cuts drafts and noise and can lower heating and cooling costs by up to about 30 percent. On San Bruno's wind-exposed lots, a properly sealed full-frame replacement makes a noticeable difference in comfort.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Golden State Windows is licensed, bonded, and insured, and has been family-run since 1989. All work is completed by our own in-house crews rather than subcontractors, so accountability stays with us from quote to finish.",
      },
    ],
    ctaLine: "Book a free, no-obligation in-home consultation anywhere in San Bruno.",
  },
  {
    slug: "burlingame",
    name: "Burlingame",
    county: "San Mateo County",
    distance: "A short Peninsula drive",
    metaTitle: "Burlingame Window Replacement & Siding | Golden State Windows",
    metaDescription:
      "Window replacement, siding & door installation in Burlingame, CA. Clad-wood & custom-matched windows for character homes. Licensed & insured. Free consult: (800) 748-6448.",
    h1Lead: "Windows Built to Honor ",
    h1Highlight: "Burlingame's",
    h1Tail: " Character Homes",
    intro:
      "Behind Burlingame's tree-lined streets sit some of the Peninsula's most distinctive homes — craftsman, Tudor, and Spanish-revival among them. Replacing windows here isn't about swapping glass; it's about protecting the details that give a house its character. Golden State Windows brings custom-matched, clad-wood craftsmanship to that work, just a short Peninsula drive from our Daly City headquarters.",
    sections: [
      {
        heading: "Preserving Burlingame's Architecture",
        body: "On older Burlingame homes, a poorly matched window reads instantly — the wrong profile, sightline, or muntin pattern flattens a facade that took decades to earn its character. We specialize in clad-wood and custom-matched windows that keep the look of craftsman, Tudor, and Spanish-revival homes intact while delivering modern performance underneath. For homeowners updating without altering original openings, pocket replacement preserves existing trim; full-frame replacement lets us correct problems down to the studs. We also install fiber-cement and engineered-wood siding, plus entry, patio, and French doors chosen to suit the home.",
      },
      {
        heading: "Why Homeowners Choose Golden State Windows",
        body: "Family-run since 1989, we've serviced more than 8,000 Bay Area homes and hold a 4.8/5 rating across 393 Yelp reviews. Every project is completed by our own 100% in-house crews — no subcontractors handling your home. We're licensed, bonded, and insured, and we manage permits in-house so the process stays simple for you. It starts with a free, no-obligation in-home consultation, where we measure, assess, and match materials to your home before any work begins.",
      },
    ],
    faqs: [
      {
        q: "Can you match windows to my older Burlingame home?",
        a: "Yes. Character homes are our focus here — we use clad-wood and custom-matched windows to replicate the profiles, sightlines, and details of craftsman, Tudor, and Spanish-revival houses, so the upgrade reads as original rather than added on.",
      },
      {
        q: "Do you serve Burlingame from a local office?",
        a: "We serve Burlingame from our Daly City headquarters, a short Peninsula drive away. There's no separate Burlingame showroom, but our in-house crews cover the city directly and start every project with a free in-home consultation.",
      },
      {
        q: "Will new windows lower my energy bills?",
        a: "They can. Our energy-efficient, Title-24 and ENERGY STAR windows are built to cut heating and cooling costs by up to roughly 30 percent, while improving comfort and quieting the street noise common on Burlingame's busier corridors.",
      },
    ],
    ctaLine: "Book a free, no-obligation in-home consultation anywhere in Burlingame.",
  },
];

export const getServiceArea = (slug?: string): ServiceArea | undefined =>
  SERVICE_AREAS.find((a) => a.slug === slug);
