// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
  typography: {
    h1: {
      fontWeight: 800,
      lineHeight: 1.1,
      fontSize: "clamp(22px, 7.5vw, 32px)", // phones
      "@media (min-width:600px)": {
        fontSize: "clamp(28px, 6vw, 42px)", // small tablets
      },
      "@media (min-width:900px)": {
        fontSize: "clamp(36px, 5vw, 56px)", // tablets/desktop
      },
      "@media (min-width:1200px)": {
        fontSize: "64px", // large desktops
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
