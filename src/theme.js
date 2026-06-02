// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const industrial = {
  red: "#CC0000",
  redDark: "#A80000",
  gunmetal: "#080808",
  steel: "rgba(255,255,255,0.08)",
  text: "#F0F0F0",
  muted: "rgba(200,200,200,0.72)",
};

// Oswald headings + Inter body — mirrors the hero's font stack site-wide.
const headingFont = "'Oswald', 'Inter', sans-serif";
const bodyFont = "'Inter', 'Helvetica Neue', Arial, sans-serif";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: industrial.red,
      dark: industrial.redDark,
      contrastText: "#fff",
    },
    secondary: { main: "#CC0000" },
    background: {
      default: "#080808",
      paper: "#111111",
    },
    text: {
      primary: industrial.text,
      secondary: industrial.muted,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: bodyFont,
    allVariants: {
      textRendering: "optimizeLegibility",
    },
    h1: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      fontSize: "clamp(34px, 10vw, 52px)",
      "@media (min-width:600px)": { fontSize: "clamp(42px, 8vw, 66px)" },
      "@media (min-width:900px)": { fontSize: "clamp(52px, 5.6vw, 78px)" },
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 1.0,
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      fontSize: "clamp(26px, 6.5vw, 38px)",
      "@media (min-width:900px)": { fontSize: "clamp(34px, 3.6vw, 52px)" },
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      fontSize: "clamp(22px, 5.5vw, 32px)",
      "@media (min-width:900px)": { fontSize: "clamp(28px, 3vw, 40px)" },
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: "0em",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: headingFont,
      fontWeight: 600,
      lineHeight: 1.12,
    },
    h6: {
      fontFamily: headingFont,
      fontWeight: 600,
      lineHeight: 1.14,
      letterSpacing: "0em",
    },
    body1: { lineHeight: 1.72 },
    body2: { lineHeight: 1.68 },
    button: {
      fontFamily: headingFont,
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#080808",
          color: industrial.text,
        },
        "::selection": {
          backgroundColor: "rgba(204,0,0,0.38)",
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("md")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 2,
          transition:
            "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease",
          "&:hover": { transform: "translateY(-1px)" },
        },
        containedPrimary: {
          backgroundColor: industrial.red,
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 12px 28px rgba(204,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
          "&:hover": {
            backgroundColor: industrial.redDark,
            boxShadow: "0 16px 36px rgba(204,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.16)",
          },
        },
        outlined: {
          color: industrial.text,
          borderColor: "rgba(255,255,255,0.28)",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.7)",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: "rgba(18,18,22,0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "4px !important",
          backgroundColor: "rgba(18,18,22,0.82)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(255,255,255,0.08)" },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
