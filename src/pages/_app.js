import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import "../styles/globals.css";
import theme from "../theme.js"; // Import your theme
import PhoneButton from "@/components/PhoneButton";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar /> {/* Navbar at the top */}
      <Component {...pageProps} />
      <PhoneButton /> {/* Mobile phone button */}
      <Footer /> {/* Footer at the bottom */}
    </ThemeProvider>
  );
}
