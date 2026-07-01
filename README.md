# Golden State Windows

Marketing website for **Golden State Windows** — window replacement, installation, and siding services across the San Francisco Bay Area.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3** + **shadcn/ui** (Radix primitives)
- **React Router 6** (client-side routing)
- **Supabase** (contact / lead capture)
- **Vercel** (hosting)

## Prerequisites

- Node.js 20+ (LTS)
- npm 10+

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:8080
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon / publishable key (safe for the browser) |

Only `VITE_`-prefixed variables are exposed to the client bundle. Server-only secrets must never use the `VITE_` prefix.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (port 8080) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run the test suite (Vitest) |

## Deployment (Vercel)

- Framework preset: **Vite** (auto-detected)
- Build command: `npm run build`
- Output directory: `dist`
- SPA deep-link routing is handled by `vercel.json` rewrites.
- Set the environment variables above in the Vercel project settings (Production / Preview / Development).

## Project structure

```
src/
  pages/            Route pages (Home, Services, Gallery, About, Contact, Privacy, NotFound)
  components/site/  Layout & chrome (Navbar, Footer, SiteLayout, PageHeader, Seo)
  components/ui/    shadcn/ui components
  lib/site.ts       Central business data (NAP, hours, ratings, services)
public/             Static assets (robots.txt, sitemap.xml, og-image, llms.txt)
```

## Business data

All company details (name, address, phone, hours, ratings, service areas) live in a single source of truth: [`src/lib/site.ts`](src/lib/site.ts). Update values there rather than in individual components.
