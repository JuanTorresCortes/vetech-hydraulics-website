import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import theme from "../theme.js";
import PhoneButton from "@/components/PhoneButton";
import createEmotionCache from "../utils/createEmotionCache";

// One shared cache for all client-side renders.
const clientSideEmotionCache = createEmotionCache();

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function sendPageview(url) {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
}

// emotionCache is injected server-side by _document.js getInitialProps.
// On the client it falls back to the shared clientSideEmotionCache.
export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => sendPageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Skip-to-main link for accessibility / Core Web Vitals */}
        <a
          href="#main-content"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            zIndex: 9999,
            background: "#080808",
            color: "#f0f0f0",
            padding: "8px 16px",
            textDecoration: "none",
            fontFamily: "Inter, sans-serif",
          }}
          onFocus={(e) => {
            e.currentTarget.style.left = "8px";
            e.currentTarget.style.top = "8px";
            e.currentTarget.style.width = "auto";
            e.currentTarget.style.height = "auto";
          }}
          onBlur={(e) => {
            e.currentTarget.style.left = "-9999px";
            e.currentTarget.style.width = "1px";
            e.currentTarget.style.height = "1px";
          }}
        >
          Skip to main content
        </a>

        {/* Google Analytics 4 — only loads when NEXT_PUBLIC_GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        <Navbar />
        <main id="main-content">
          <Component {...pageProps} />
        </main>
        <PhoneButton />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
