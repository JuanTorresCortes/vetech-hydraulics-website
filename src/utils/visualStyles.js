export const industrialColors = {
  hydraulicRed: "#D71920",
  hydraulicRedDark: "#B9151B",
  gunmetal: "#0A1721",
  gunmetalLight: "#102A3A",
  steel: "rgba(190,202,212,0.2)",
  steelStrong: "rgba(190,202,212,0.34)",
  text: "#F7FAFC",
  mutedText: "rgba(231,238,244,0.76)",
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

export const sectionBase = (theme) => ({
  ...fullBleed,
  position: "relative",
  paddingBlock: theme.spacing(7),
  overflow: "hidden",
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  [theme.breakpoints.up("lg")]: { paddingBlock: theme.spacing(12) },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "max(24px, calc((100vw - 1120px) / 2))",
    right: "max(24px, calc((100vw - 1120px) / 2))",
    bottom: 0,
    height: 1,
    pointerEvents: "none",
    background:
      "linear-gradient(90deg, transparent, rgba(190,202,212,0.24), rgba(215,25,32,0.42), rgba(190,202,212,0.24), transparent)",
  },
});

export const eyebrowSx = {
  color: industrialColors.hydraulicRed,
  fontWeight: 950,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontSize: { xs: 11.5, md: 12.5 },
  lineHeight: 1.25,
};

export const headlineSx = {
  color: industrialColors.text,
  fontWeight: 950,
  fontSize: {
    xs: "clamp(25px, 6.5vw, 36px)",
    md: "clamp(34px, 3.6vw, 50px)",
  },
  lineHeight: 1.04,
  letterSpacing: "-0.04em",
  textWrap: "balance",
};

export const bodyCopySx = {
  color: industrialColors.mutedText,
  fontSize: { xs: 14.5, md: 16 },
  lineHeight: 1.75,
};

export const industrialCardSx = {
  borderRadius: 3,
  bgcolor: "rgba(9,23,35,0.88)",
  backgroundImage:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.014))",
  border: `1px solid ${industrialColors.steel}`,
  boxShadow:
    "0 22px 58px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
  transition:
    "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
  "&:hover": {
    transform: { md: "translateY(-5px)" },
    borderColor: "rgba(215,25,32,0.42)",
    boxShadow:
      "0 30px 72px rgba(0,0,0,0.4), 0 0 0 1px rgba(215,25,32,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
  },
};

export const primaryCtaSx = {
  px: { xs: 3, md: 4 },
  py: 1.35,
  borderRadius: "10px",
  bgcolor: industrialColors.hydraulicRed,
  color: "#fff",
  fontWeight: 950,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow:
    "0 18px 38px rgba(215,25,32,0.28), inset 0 1px 0 rgba(255,255,255,0.24)",
  "&:hover": {
    bgcolor: industrialColors.hydraulicRedDark,
    transform: "translateY(-1px)",
    boxShadow:
      "0 22px 44px rgba(215,25,32,0.34), inset 0 1px 0 rgba(255,255,255,0.22)",
  },
};

export const secondaryCtaSx = {
  px: { xs: 3, md: 4 },
  py: 1.35,
  borderRadius: "10px",
  color: industrialColors.text,
  borderColor: "rgba(185,197,205,0.42)",
  bgcolor: "rgba(255,255,255,0.035)",
  fontWeight: 950,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  "&:hover": {
    borderColor: "rgba(255,255,255,0.74)",
    bgcolor: "rgba(255,255,255,0.08)",
    transform: "translateY(-1px)",
  },
};
