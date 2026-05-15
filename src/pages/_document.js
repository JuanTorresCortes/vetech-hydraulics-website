import { Html, Head, Main, NextScript } from "next/document";

// Document-level tags that should apply before React renders any page content.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Keep these global values stable; page-specific SEO belongs in SeoHead or page Head tags. */}
        <meta name="theme-color" content="#050D14" />
        <meta name="author" content="Vetech Hydraulics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
