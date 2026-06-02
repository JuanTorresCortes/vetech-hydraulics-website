// Shared visual tokens — hero-matched industrial palette.
// All colors, card styles, and section wrappers flow from these so the hero and
// the rest of the page share the same design language.
import { styled } from "@mui/system";

export const industrialColors = {
  hydraulicRed: "#CC0000",
  hydraulicRedDark: "#A80000",
  gunmetal: "#080808",
  gunmetalLight: "#111111",
  steel: "rgba(255,255,255,0.08)",
  steelStrong: "rgba(255,255,255,0.16)",
  text: "#F0F0F0",
  mutedText: "rgba(200,200,200,0.72)",
};

export const fullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

export const containerSx = {
  px: { xs: 2, sm: 3, md: 4 },
};

export const containedWidthSx = {
  maxWidth: 1120,
  mx: "auto",
};

// Section spacing — keeps vertical rhythm consistent across all pages.
export const sectionBase = (theme) => ({
  ...fullBleed,
  position: "relative",
  paddingBlock: theme.spacing(7),
  overflow: "hidden",
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  [theme.breakpoints.up("lg")]: { paddingBlock: theme.spacing(12) },
  // Thin red-accented separator line at the bottom of each section
  "&::after": {
    content: '""',
    position: "absolute",
    left: "max(24px, calc((100vw - 1120px) / 2))",
    right: "max(24px, calc((100vw - 1120px) / 2))",
    bottom: 0,
    height: 1,
    pointerEvents: "none",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), rgba(204,0,0,0.5), rgba(255,255,255,0.1), transparent)",
  },
});

export const eyebrowSx = {
  color: industrialColors.hydraulicRed,
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontSize: { xs: 11.5, md: 12.5 },
  lineHeight: 1.25,
};

export const headlineSx = {
  fontFamily: "'Oswald', sans-serif",
  color: industrialColors.text,
  fontWeight: 700,
  fontSize: {
    xs: "clamp(26px, 6.5vw, 38px)",
    md: "clamp(34px, 3.6vw, 52px)",
  },
  lineHeight: 1.0,
  letterSpacing: "-0.01em",
  textTransform: "uppercase",
  textWrap: "balance",
};

export const bodyCopySx = {
  color: industrialColors.mutedText,
  fontSize: { xs: 14.5, md: 16 },
  lineHeight: 1.75,
};

// Hero-matched card: near-black glass with backdrop blur + subtle white border.
export const industrialCardSx = {
  borderRadius: "4px",
  bgcolor: "rgba(18,18,22,0.82)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
  transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
  "&:hover": {
    transform: { md: "translateY(-5px)" },
    borderColor: "rgba(204,0,0,0.38)",
    boxShadow:
      "0 28px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
  },
};

// Primary CTA — red filled, matches hero "CALL NOW" button.
export const primaryCtaSx = {
  px: { xs: 3, md: 4 },
  py: 1.35,
  borderRadius: "2px",
  bgcolor: "#CC0000",
  color: "#fff",
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  border: "none",
  boxShadow: "0 12px 28px rgba(204,0,0,0.28)",
  "&:hover": {
    bgcolor: "#A80000",
    transform: "translateY(-1px)",
    boxShadow: "0 16px 36px rgba(204,0,0,0.38)",
  },
};

// Secondary CTA — outlined, matches hero "VIEW SERVICES" button.
export const secondaryCtaSx = {
  px: { xs: 3, md: 4 },
  py: 1.35,
  borderRadius: "2px",
  color: "#F0F0F0",
  borderColor: "rgba(255,255,255,0.3)",
  bgcolor: "transparent",
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  "&:hover": {
    borderColor: "rgba(255,255,255,0.7)",
    bgcolor: "rgba(255,255,255,0.06)",
    transform: "translateY(-1px)",
  },
};

// Near-black section backgrounds — alternating tones so adjacent sections read as distinct.
export const PageSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0a0a0a",
}));

export const PageAltSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0e0e0e",
}));

// Grid-pattern overlay used on key content sections for the industrial texture.
export const industrialSectionSx = {
  position: "relative",
  background:
    "radial-gradient(circle at 10% 12%, rgba(204,0,0,0.10), transparent 30%), linear-gradient(180deg, #080808 0%, #0e0e0e 50%, #080808 100%)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.18,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 18%, rgba(0,0,0,0.5) 78%, transparent 100%)",
  },
};

export const industrialAltSectionSx = {
  ...industrialSectionSx,
  background:
    "radial-gradient(circle at 90% 12%, rgba(204,0,0,0.08), transparent 28%), linear-gradient(180deg, #0e0e0e 0%, #080808 50%, #0e0e0e 100%)",
};

export const innerContainerSx = {
  ...containerSx,
  position: "relative",
  zIndex: 1,
};
