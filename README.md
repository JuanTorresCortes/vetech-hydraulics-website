# Vetech Hydraulics Website

Next.js website for Vetech Hydraulics, a veteran-owned hydraulic cylinder repair company serving North Houston, Montgomery, Conroe, Magnolia, The Woodlands, Tomball, and surrounding areas.

## Tech Stack

- **Next.js Pages Router** for file-based routing in `src/pages`
- **React** for component-based UI
- **Material UI** for layout primitives, responsive styling, and component theming
- **Emotion** as the styling engine used by Material UI
- **Framer Motion** for subtle CTA and interaction animations
- **Resend** for contact form email delivery
- **ESLint** for code quality checks
- **next/image** for optimized local and public image rendering

## Main Features

- Premium industrial responsive design for a hydraulic repair brand
- Homepage conversion sections with trust signals, service highlights, FAQs, and quote CTAs
- Services page for hydraulic cylinder repair, repacking, rod work, weld repair, pressure testing, and pickup/delivery support
- Fleet Support page for commercial accounts and uptime-focused repair workflows
- Service Areas index plus city landing pages for local hydraulic cylinder repair searches
- Case Studies system backed by reusable data and dynamic detail routes
- Contact form with Resend owner notification and customer auto-reply email delivery
- SEO metadata, canonical URLs, Open Graph tags, and LocalBusiness JSON-LD
- `sitemap.xml` and `robots.txt` for crawl discovery
- Responsive desktop navigation and mobile drawer navigation
- Accessibility and performance considerations including semantic headings, focus styles, reduced-motion handling, and optimized images

## Folder Structure Overview

```text
src/
  pages/                 Next.js Pages Router routes, including API routes
  components/            Shared layout, SEO, CTA, navigation, footer, and reusable page sections
  data/                  Case study data used by listing and dynamic detail pages
  utils/                 SEO structured data and shared visual style tokens
  image/                 Imported local image assets used by next/image
  styles/                Global CSS variables, reset styles, focus states, and motion preferences
public/                  Public assets, logo files, robots.txt, sitemap.xml, and service-area images
scripts/                 Node scripts for generating or rebuilding service-area pages
```

### Important Route Groups

- `src/pages/index.js` — homepage sections and primary conversion content
- `src/pages/services.js` — service cards, workflow content, and service CTAs
- `src/pages/fleet-support.js` — fleet/commercial support content and process cards
- `src/pages/service-areas/index.js` — service-area directory and local-market content
- `src/pages/service-areas/*-tx-hydraulic-cylinder-repair.js` — city-specific landing pages
- `src/pages/case-studies/index.js` — case-study listing page
- `src/pages/case-studies/[slug].js` — dynamic case-study detail route
- `src/pages/api/contact.js` — server-side contact form email handler

## Environment Variables

The contact form requires these variables in local development and production:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key used by Resend to send contact emails. |
| `CONTACT_FROM` | Verified sender address, for example `Vetech Forms <forms@notifications.vetech-hydraulics.com>`. Must be on a Resend-verified domain/subdomain. |
| `CONTACT_TO` | Business inbox that receives owner notifications from the contact form. |

Create a local `.env.local` file when testing the contact form locally. Do not commit secrets.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run quality checks:

```bash
npm run lint
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Deployment Notes

- Recommended deployment platform: **Vercel**.
- Production domain: `https://www.vetechhydraulics.com`.
- Add `RESEND_API_KEY`, `CONTACT_FROM`, and `CONTACT_TO` to the deployment environment before using the contact form in production.
- Verify the Resend sender domain before launch so owner notifications and customer auto-replies are delivered reliably.
- Run `npm run lint` and `npm run build` before deployment.

## SEO Notes

- Canonical domain is `https://www.vetechhydraulics.com`.
- Shared SEO tags are handled by `src/components/SeoHead.js` for most pages.
- Local business structured data is stored in `src/utils/seoData.js`.
- `public/sitemap.xml` lists public pages, service-area pages, and case-study pages.
- `public/robots.txt` points crawlers to the production sitemap.
- Service-area pages target city-specific hydraulic cylinder repair searches; keep their URLs stable once indexed.
- Case-study pages are generated from `src/data/caseStudies.js`; update sitemap entries when adding or renaming case-study slugs.

## Content Update Guide

### Homepage Sections

Edit `src/pages/index.js` for homepage hero content, featured repair cards, trust sections, FAQs, service-area previews, and homepage CTA placement.

### Service Cards

Edit the data arrays in `src/pages/services.js` when service offerings, workflow steps, equipment lists, or quality points change.

### Fleet Support Content

Edit `src/pages/fleet-support.js` for commercial service cards, industry cards, process steps, and fleet-oriented CTAs.

### Service Areas

- Edit `src/pages/service-areas/index.js` for the service-area directory, priority city cards, and regional support content.
- Edit individual files in `src/pages/service-areas/` for city-specific landing-page copy.
- Keep `public/sitemap.xml` synchronized when adding, removing, or renaming service-area pages.

### Case Studies

Add or update case studies in `src/data/caseStudies.js`. Each case study needs a unique `slug`, page metadata, image, summary, problem, process steps, testing note, and outcome. The listing and dynamic detail pages read from this data.

### Logo and Assets

- Imported page imagery lives in `src/image/`.
- Public assets, logos, service-area images, `robots.txt`, and `sitemap.xml` live in `public/`.
- Replace example repair/case-study imagery with real job photos over time while preserving useful `alt` text.

### Contact Info

Update visible contact details where they appear in shared components and page content, including:

- `src/components/Navbar.js`
- `src/components/Footer.js`
- `src/components/PhoneButton.jsx`
- `src/components/ConsultationButton.jsx`
- `src/pages/contact.js`
- `src/utils/seoData.js`

### Structured Data

Update `src/utils/seoData.js` when business hours, contact details, service areas, owner/founder information, or verified profile URLs change. Keep structured data aligned with the website, Google Business Profile, and other public listings.

## Scripts

### `scripts/generate-service-area-pages.js`

Generates missing secondary city service-area pages in `src/pages/service-areas/`. Run this after adding new cities to the script's `AREAS` list. Existing files are skipped so hand-edited pages are not overwritten.

```bash
node scripts/generate-service-area-pages.js
```

### `scripts/rebuild-core-service-areas.js`

Rebuilds core city service-area pages from a shared template and overwrites the matching files in `src/pages/service-areas/`. Run this only when the core city template or core city copy needs to be regenerated. Review the diff carefully afterward.

```bash
node scripts/rebuild-core-service-areas.js
```

After running either script, review changed pages and update `public/sitemap.xml` when public URLs change.

## Quality Checks

Before deployment, run:

```bash
npm run lint
npm run build
```

If dependency installation fails in CI or a local environment, verify npm registry access and reinstall dependencies before trusting build results.

## Maintenance Notes

- Replace example repair and case-study imagery with real job photos over time.
- Keep `public/sitemap.xml` updated when adding, removing, or renaming public pages.
- Verify business hours and contact details before launch and after any operational change.
- Keep Google Business Profile and social profile URLs updated in `src/utils/seoData.js` when verified.
- Keep phone numbers, CTA SMS links, and form destination emails aligned across components and environment variables.
