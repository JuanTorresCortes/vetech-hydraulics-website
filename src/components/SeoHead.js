// Central SEO helper for all pages.
// Pass page-specific title, description, path, and optional ogImage.
// ogImage accepts a root-relative path like "/cover-image.webp" or "/og/repair.webp".
// Pass schema (array of JSON-LD objects) to inject structured data.
// SEO FIX: Expanded to include robots, noIndex, og:site_name, twitter tags, and JSON-LD schema support
import Head from "next/head";
import { BUSINESS } from "../config/business";

const SITE_URL = BUSINESS.siteUrl;
// SEO FIX: Default OG image is the logo for pages that don't specify one
const DEFAULT_OG_IMAGE = `${SITE_URL}/VTH-logo.webp`;

export default function SeoHead({
  title,
  description,
  path = "/",
  ogImage,
  type = "website",
  keywords,
  // SEO FIX: noIndex prop allows individual pages to opt out of indexing (e.g. thank-you pages)
  noIndex = false,
  // SEO FIX: schema prop accepts an array of JSON-LD objects for structured data injection
  schema,
}) {
  // SEO FIX: canonical always uses the site URL + path to prevent duplicate content
  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
  // SEO FIX: OG image must be a fully-qualified absolute URL for crawlers and social platforms
  const ogImageUrl = ogImage ? `${SITE_URL}${ogImage}` : DEFAULT_OG_IMAGE;

  return (
    <Head>
      {/* SEO FIX: title capped at 60 chars — enforced by convention in each page's SeoHead call */}
      <title>{title}</title>
      {/* SEO FIX: description targeted at 150-160 chars for full SERP snippet */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* SEO FIX: robots meta — noIndex prop overrides default index/follow */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      {/* SEO FIX: canonical link prevents duplicate-content penalties */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta
        property="og:image:alt"
        content="Vetech Hydraulics veteran-owned hydraulic cylinder repair"
      />
      {/* SEO FIX: og:site_name improves brand display in social sharing previews */}
      <meta property="og:site_name" content="Vetech Hydraulics" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* SEO FIX: JSON-LD structured data injected inline when schema prop is provided */}
      {schema &&
        (Array.isArray(schema) ? schema : [schema]).map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
    </Head>
  );
}
