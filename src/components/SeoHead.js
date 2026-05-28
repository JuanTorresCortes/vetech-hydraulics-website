// Central SEO helper for pages that do not need custom next/head markup.
// Pass page-specific title, description, path, and optional schema while this component handles canonical/Open Graph defaults.
import Head from "next/head";
import { BUSINESS } from "../config/business";

const SITE_URL = BUSINESS.siteUrl;
const DEFAULT_IMAGE = `${SITE_URL}/VTH-logo.png`;

export default function SeoHead({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="Vetech Hydraulics veteran-owned hydraulic cylinder repair"
      />
      <meta property="og:site_name" content="Vetech Hydraulics" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
