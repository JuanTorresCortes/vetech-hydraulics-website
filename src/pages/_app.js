import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import theme from "../theme.js";
import PhoneButton from "@/components/PhoneButton";

// GA4 Measurement ID — set NEXT_PUBLIC_GA_ID in your .env.local (dev) and
// Vercel environment variables (production). Scripts are skipped if unset.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Send a pageview hit to GA4 on every client-side route change.
function sendPageview(url) {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
}

// App shell: keeps global theming, navigation, mobile call CTA, and footer consistent across every route.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Fire on subsequent client-side navigations (initial pageview is handled by the gtag config script).
    const handleRouteChange = (url) => sendPageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Google Analytics 4 — only loads when NEXT_PUBLIC_GA_ID is defined */}
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
      <Component {...pageProps} />
      {/* Fixed mobile call bar lives outside pages so page content does not need to duplicate it. */}
      <PhoneButton />
      <Footer />
    </ThemeProvider>
  );
}
