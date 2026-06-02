import { Html, Head, Main, NextScript } from "next/document";

// Document-level tags that should apply before React renders any page content.
export default function Document() {
  return (
    // SEO FIX: lang attribute ensures screen readers and crawlers identify language
    <Html lang="en">
      <Head>
        {/* SEO FIX: charSet declared at document level for crawlers */}
        <meta charSet="utf-8" />
        {/* SEO FIX: theme-color for browser chrome on mobile */}
        <meta name="theme-color" content="#080808" />
        <meta name="author" content="Vetech Hydraulics" />
        <meta name="robots" content="index, follow" />

        {/* Favicon suite — covers all browsers, devices, and PWA installs */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* SEO FIX: Google Fonts moved from CSS @import to document <Head> — eliminates render-blocking @import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* SEO FIX: crossOrigin required for fonts.gstatic.com preconnect */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />

        {/* LCP preload is page-specific — moved to HeroSection.jsx via next/image priority prop.
            Global preload here would fire on all 26 pages and waste bandwidth on non-homepage routes. */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
