import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import theme from "../theme.js";
import PhoneButton from "@/components/PhoneButton";

// App shell: keeps global theming, navigation, mobile call CTA, and footer consistent across every route.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      {/* Fixed mobile call bar lives outside pages so page content does not need to duplicate it. */}
      <PhoneButton />
      <Footer />
    </ThemeProvider>
  );
}
