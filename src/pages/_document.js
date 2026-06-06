import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

function createEmotionCache() {
  return createCache({ key: "css" });
}

export default function MyDocument({ emotionStyleTags }) {
  return (
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />

        {/* Emotion SSR: inject server-extracted styles so client class names match exactly */}
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhancedApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return { ...initialProps, emotionStyleTags };
};
