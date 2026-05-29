// Central SEO helper for pages that do not need custom next/head markup.
// Pass page-specific title, description, path, and optional ogImage while this component handles canonical/Open Graph defaults.
// ogImage accepts a root-relative path like "/cover-image.png" or "/og/repair.webp".
// Omit ogImage to fall back to the logo.
import Head from "next/head";
import { BUSINESS } from "../config/business";

const SITE_URL = BUSINESS.siteUrl;
const DEFAULT_OG_IMAGE = `${SITE_URL}/VTH-logo.png`;

export default function SeoHead({
  title,
  description,
  path = "/",
  ogImage,
  type = "website",
  keywords,
}) {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
  // Build an absolute URL — OG image tags must be fully qualified for crawlers.
  const ogImageUrl = ogImage ? `${SITE_URL}${ogImage}` : DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta
        property="og:image:alt"
        content="Vetech Hydraulics veteran-owned hydraulic cylinder repair"
      />
      <meta property="og:site_name" content="Vetech Hydraulics" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
