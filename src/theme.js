// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const industrial = {
  red: "#D71920",
  redDark: "#B9151B",
  gunmetal: "#07131D",
  steel: "rgba(190,202,212,0.22)",
  text: "#F7FAFC",
  muted: "rgba(231,238,244,0.76)",
};

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: industrial.red,
      dark: industrial.redDark,
      contrastText: "#fff",
    },
    secondary: { main: "#6EC1FF" },
    background: {
      default: "#050D14",
      paper: "#0A1721",
    },
    text: {
      primary: industrial.text,
      secondary: industrial.muted,
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      'Inter, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    allVariants: {
      textRendering: "optimizeLegibility",
    },
    h1: {
      fontWeight: 950,
      lineHeight: 0.98,
      letterSpacing: "-0.055em",
      textTransform: "uppercase",
      fontSize: "clamp(34px, 10vw, 52px)",
      "@media (min-width:600px)": {
        fontSize: "clamp(42px, 8vw, 66px)",
      },
      "@media (min-width:900px)": {
        fontSize: "clamp(52px, 5.6vw, 78px)",
      },
    },
    h2: {
      fontWeight: 950,
      lineHeight: 1.04,
      letterSpacing: "-0.04em",
      fontSize: "clamp(25px, 6.5vw, 36px)",
      "@media (min-width:900px)": {
        fontSize: "clamp(34px, 3.6vw, 50px)",
      },
    },
    h3: {
      fontWeight: 950,
      lineHeight: 1.06,
      letterSpacing: "-0.035em",
      fontSize: "clamp(24px, 5.5vw, 34px)",
      "@media (min-width:900px)": {
        fontSize: "clamp(30px, 3vw, 42px)",
      },
    },
    h6: {
      fontWeight: 950,
      lineHeight: 1.14,
      letterSpacing: "-0.02em",
    },
    body1: {
      lineHeight: 1.72,
    },
    body2: {
      lineHeight: 1.68,
    },
    button: {
      fontWeight: 950,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#050D14",
          color: industrial.text,
        },
        "::selection": {
          backgroundColor: "rgba(215,25,32,0.38)",
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
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
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition:
            "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        containedPrimary: {
          backgroundColor: industrial.red,
          border: "1px solid rgba(255,255,255,0.16)",
          boxShadow:
            "0 18px 38px rgba(215,25,32,0.28), inset 0 1px 0 rgba(255,255,255,0.24)",
          "&:hover": {
            backgroundColor: industrial.redDark,
            boxShadow:
              "0 22px 44px rgba(215,25,32,0.34), inset 0 1px 0 rgba(255,255,255,0.22)",
          },
        },
        outlined: {
          color: industrial.text,
          borderColor: "rgba(185,197,205,0.42)",
          backgroundColor: "rgba(255,255,255,0.035)",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.74)",
            backgroundColor: "rgba(255,255,255,0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "rgba(9,23,35,0.9)",
          border: `1px solid ${industrial.steel}`,
          boxShadow:
            "0 22px 58px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
