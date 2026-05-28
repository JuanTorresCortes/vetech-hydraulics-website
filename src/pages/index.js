// src/pages/index.js
// Home page: introduces Vetech, highlights core repair services, trust signals, service area coverage, FAQs, and primary CTAs.
// SEO values and business schema are intentionally centralized near the page root so future edits do not get buried in section markup.
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import SeoHead from "../components/SeoHead";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/system";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialCardSx,
  industrialColors,
  primaryCtaSx,
  secondaryCtaSx,
  sectionBase,
} from "../utils/visualStyles";
import { businessSchema } from "../utils/seoData";
import { BUSINESS } from "../config/business";
import backHoe from "../image/backHoe.webp";
import map from "../image/map.webp";
import ConsultationButton from "../components/ConsultationButton";
import { motion } from "framer-motion";
import repackImg from "../image/repackImg.webp";
import repairImg from "../image/repairImg.webp";
import mobileImg from "../image/mobileImg.webp";
import hero1 from "../image/hero1.webp";
import VeteranOwnershipSection from "@/components/VeteranOwnershipSection";

/* ------------------------------ Styled UI ------------------------------ */

const FullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const HeroSection = styled(Box)(({ theme }) => ({
  ...FullBleed,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "radial-gradient(circle at 18% 22%, rgba(183,28,28,0.28) 0%, rgba(183,28,28,0) 32%), linear-gradient(135deg, #02060A 0%, #071522 38%, #0D2334 70%, #02060A 100%)",
  color: "#fff",
  position: "relative",
  textAlign: "left",
  padding: 0,
  overflow: "hidden",

  // Desktop / large screens
  minHeight: "92vh",

  // Large laptops
  [theme.breakpoints.down("xl")]: {
    minHeight: "90vh",
  },

  // Laptops / landscape tablets
  [theme.breakpoints.down("lg")]: {
    minHeight: "88vh",
  },

  // Tablets
  [theme.breakpoints.down("md")]: {
    minHeight: "82svh",
  },

  // Phones
  [theme.breakpoints.down("sm")]: {
    minHeight: "78svh",
  },

  // Very small phones (old iPhones / SE)
  "@media (max-width: 321px)": {
    minHeight: "100svh",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
    backgroundSize: "46px 46px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 74%)",
    zIndex: 1,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    left: "6%",
    right: "6%",
    bottom: 0,
    height: "1px",
    pointerEvents: "none",
    background:
      "linear-gradient(90deg, transparent, rgba(185,197,205,0.75), rgba(183,28,28,0.9), rgba(185,197,205,0.75), transparent)",
    zIndex: 3,
  },
}));

const Section = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0F2331",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0B1B27",
}));

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    <Typography component="h2" variant="h3" sx={headlineSx}>
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          ...bodyCopySx,
          mt: 1.25,
          maxWidth: 820,
          mx: "auto",
          textWrap: "balance",
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

// Image cards (16:9). Card already clips via overflow:hidden, so radius here should be 0.
const CardImage = ({
  alt = "Hydraulic cylinder repair service image",
  src = backHoe,
}) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%", // 16:9
      borderRadius: 0,
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy"
      quality={82}
      placeholder="blur"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

const CardImageMap = ({ alt = "service area map", src = map }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%",
      borderRadius: 0,
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 40vw"
      loading="lazy"
      quality={82}
      placeholder="blur"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

const lowerSectionBgSx = {
  position: "relative",
  background:
    "radial-gradient(circle at 10% 12%, rgba(215,25,32,0.11), transparent 28%), radial-gradient(circle at 92% 18%, rgba(110,193,255,0.075), transparent 26%), linear-gradient(180deg, #050A0F 0%, #0A1721 48%, #06111A 100%)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.28,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.86) 18%, rgba(0,0,0,0.48) 78%, transparent 100%)",
  },
};

const lowerAltSectionBgSx = {
  ...lowerSectionBgSx,
  background:
    "radial-gradient(circle at 86% 16%, rgba(110,193,255,0.07), transparent 28%), radial-gradient(circle at 12% 84%, rgba(215,25,32,0.075), transparent 26%), linear-gradient(180deg, #07131D 0%, #091925 50%, #050D14 100%)",
};

const lowerPanelSx = {
  ...industrialCardSx,
  position: "relative",
  height: "100%",
  overflow: "hidden",
  p: { xs: 2.5, md: 3 },
  bgcolor: "rgba(8,19,28,0.92)",
  backgroundImage:
    "linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.018) 52%, rgba(215,25,32,0.022))",
  border: `1px solid ${industrialColors.steel}`,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 3,
    background:
      "linear-gradient(90deg, rgba(215,25,32,0.92), rgba(190,202,212,0.22), transparent)",
    pointerEvents: "none",
  },
};

const lowerTitleSx = {
  color: industrialColors.text,
  fontWeight: 950,
  fontSize: { xs: 18, md: 20 },
  lineHeight: 1.16,
  letterSpacing: "-0.02em",
};

const lowerBodySx = {
  color: industrialColors.mutedText,
  lineHeight: 1.72,
  fontSize: { xs: 14.5, md: 15.5 },
};

const redBadgeSx = {
  display: "inline-grid",
  placeItems: "center",
  width: 44,
  height: 44,
  borderRadius: 2,
  color: "#fff",
  bgcolor: "rgba(215,25,32,0.16)",
  border: "1px solid rgba(215,25,32,0.38)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 22px rgba(215,25,32,0.16)",
};

// Homepage repair cards: edit these entries when photos or featured service examples change.
const recentRepairs = [
  {
    title: "Excavator Boom Cylinder Rebuild",
    summary:
      "Full teardown, seal replacement, rod cleanup, and bench pressure testing before return to the fleet.",
    equipment: "Excavator",
    status: "Pressure Tested",
    image: repairImg,
    alt: "Hydraulic cylinder repair example for an excavator boom cylinder rebuild",
  },
  {
    title: "Fleet Dump Cylinder Repack",
    summary:
      "Commercial cylinder repack focused on leak control, fast turnaround, and dependable daily route uptime.",
    equipment: "Fleet Truck",
    status: "Repacked",
    image: repackImg,
    alt: "Hydraulic cylinder repacking example for a fleet dump cylinder",
  },
  {
    title: "Loader Rod & Gland Repair",
    summary:
      "Rod finish inspection, component repair, and seal-fit checks to improve service life under heavy load.",
    equipment: "Wheel Loader",
    status: "Rod Polished",
    image: backHoe,
    alt: "Hydraulic rod repair example for heavy equipment loader cylinder service",
  },
  {
    title: "Job-Site Pull, Repair & Return",
    summary:
      "Pickup coordination, shop rebuild, and return support for operators who need equipment moving again quickly.",
    equipment: "Construction Equipment",
    status: "Weld Repaired",
    image: mobileImg,
    alt: "Mobile hydraulic repair example for job-site cylinder turnaround",
  },
];

// Trust feature cards explain why commercial customers should choose the shop beyond price alone.
const commercialTrustFeatures = [
  {
    title: "Pressure Tested Repairs",
    text: "Cylinder repairs are checked for leak-free performance before return so operators can reinstall with confidence.",
    Icon: VerifiedIcon,
  },
  {
    title: "Fast Turnaround",
    text: "Repair coordination is built around reducing downtime and getting critical equipment back in service faster.",
    Icon: SpeedIcon,
  },
  {
    title: "Veteran-Owned Service",
    text: "Professional communication, accountability, and disciplined workmanship guide every customer interaction.",
    Icon: MilitaryTechIcon,
  },
  {
    title: "Fleet & Heavy Equipment Experience",
    text: "Support for construction equipment, waste fleets, municipal units, loaders, excavators, and industrial machinery.",
    Icon: PrecisionManufacturingIcon,
  },
  {
    title: "Pickup & Delivery Options",
    text: "Practical logistics support helps contractors and fleet managers keep repair work moving without unnecessary delays.",
    Icon: LocalShippingIcon,
  },
  {
    title: "Commercial-Grade Workmanship",
    text: "Every rebuild is approached with the reliability standards expected by crews, operators, and commercial accounts.",
    Icon: EngineeringIcon,
  },
];

/* --------------------------------- Page --------------------------------- */

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Consistent inner container spacing across sections
  const innerContainerSx = containerSx;

  return (
    <>
      {/* Homepage SEO and local business schema; keep metadata values intentional because they affect search snippets. */}
      <SeoHead
        title="Vetech Hydraulics | Hydraulic Cylinder Repair Experts"
        description="Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area."
        path="/"
        ogImage="/cover-image.png"
      />
      <Head>
        {/* Safe: businessSchema is a trusted static object. JSON.stringify prevents injection. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>

      {/* ============================== HERO ============================== */}
      <HeroSection id="home">
        <Image
          src={hero1}
          alt="Heavy equipment and hydraulic-powered machinery serviced by Vetech Hydraulics"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            opacity: 0.24,
            filter: "contrast(1.12) saturate(0.72)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, rgba(2,6,10,0.98) 0%, rgba(2,6,10,0.9) 42%, rgba(7,21,34,0.62) 100%), linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.22) 70%)",
            zIndex: 1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            ...innerContainerSx,
            pt: { xs: 10, sm: 12, md: 24 },
            pb: { xs: 5, sm: 7, md: 10 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div {...fadeUp}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1.25,
                    maxWidth: "100%",
                    px: 1.75,
                    py: 0.9,
                    mb: 2.5,
                    borderRadius: "999px",
                    color: "#D6DEE6",
                    bgcolor: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(185,197,205,0.24)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontSize: { xs: 10.5, sm: 12 },
                    fontWeight: 900,
                    lineHeight: 1.35,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#D71920",
                      boxShadow: "0 0 18px rgba(215,25,32,0.9)",
                    }}
                  />
                  Based in Magnolia, TX • Serving Montgomery County & North Houston
                </Box>

                <Typography
                  component="h1"
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "clamp(34px, 10vw, 52px)",
                      sm: "clamp(44px, 8vw, 68px)",
                      md: "clamp(54px, 6vw, 82px)",
                    },
                    lineHeight: { xs: 0.98, md: 0.94 },
                    fontWeight: 950,
                    letterSpacing: { xs: "-0.045em", md: "-0.06em" },
                    textTransform: "uppercase",
                    textWrap: "balance",
                    color: "#F7FAFC",
                    mb: 2.5,
                    maxWidth: 940,
                    textShadow: "0 18px 42px rgba(0,0,0,0.55)",
                  }}
                >
                  PRECISION HYDRAULIC CYLINDER REPAIR
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(231,238,244,0.84)",
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    lineHeight: 1.65,
                    maxWidth: 760,
                    mb: { xs: 2.5, md: 3.5 },
                  }}
                >
                  Veteran-owned hydraulic cylinder repair for heavy equipment,
                  fleets, and commercial operations across Montgomery, Conroe,
                  Magnolia, The Woodlands, and North Houston.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mb: 1.5, alignItems: { xs: "stretch", sm: "center" } }}
                >
                  <Button
                    component="a"
                    href={BUSINESS.phoneTel}
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{
                      px: { xs: 3.5, md: 4.5 },
                      py: 1.55,
                      borderRadius: "10px",
                      bgcolor: "#D71920",
                      color: "#fff",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      boxShadow:
                        "0 18px 38px rgba(215,25,32,0.28), inset 0 1px 0 rgba(255,255,255,0.24)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      "&:hover": {
                        bgcolor: "#B9151B",
                        boxShadow:
                          "0 22px 44px rgba(215,25,32,0.34), inset 0 1px 0 rgba(255,255,255,0.22)",
                      },
                    }}
                  >
                    Call Now
                  </Button>

                  <Button
                    component={NextLink}
                    href="/services"
                    variant="outlined"
                    sx={{
                      px: { xs: 3.5, md: 4.5 },
                      py: 1.55,
                      borderRadius: "10px",
                      color: "#E7EEF4",
                      borderColor: "rgba(185,197,205,0.42)",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      bgcolor: "rgba(255,255,255,0.035)",
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.72)",
                        bgcolor: "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    View Services
                  </Button>
                </Stack>

                <Stack
                  spacing={0.35}
                  sx={{
                    mb: { xs: 2.75, md: 4 },
                    color: "rgba(231,238,244,0.84)",
                  }}
                >
                  <Typography
                    component="a"
                    href={BUSINESS.phoneTel}
                    sx={{
                      color: "#F7FAFC",
                      fontWeight: 950,
                      fontSize: { xs: 18, md: 20 },
                      lineHeight: 1.2,
                      textDecoration: "none",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {BUSINESS.phoneDisplay}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(231,238,244,0.72)",
                      fontWeight: 800,
                      fontSize: { xs: 13, md: 14 },
                      letterSpacing: "0.04em",
                    }}
                  >
                    {BUSINESS.hoursShort}
                  </Typography>
                </Stack>

                <Grid container spacing={1.25} sx={{ maxWidth: 820 }}>
                  {[
                    "Veteran-Owned",
                    "Fleet Service Capable",
                    "Pressure Tested Repairs",
                    "Pickup & Delivery Options",
                  ].map((badge) => (
                    <Grid item xs={6} sm={6} md={3} key={badge}>
                      <Box
                        sx={{
                          height: "100%",
                          px: 1.5,
                          py: 1.25,
                          borderRadius: 2,
                          bgcolor: "rgba(9,23,35,0.78)",
                          border: "1px solid rgba(185,197,205,0.18)",
                          boxShadow:
                            "inset 3px 0 0 #D71920, inset 0 1px 0 rgba(255,255,255,0.06)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#F7FAFC",
                            fontWeight: 900,
                            fontSize: {
                              xs: 12.5,
                              sm: 13.5,
                              md: 12.5,
                              lg: 13.5,
                            },
                            lineHeight: 1.25,
                          }}
                        >
                          {badge}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    ml: "auto",
                    maxWidth: 390,
                    borderRadius: 4,
                    p: 3,
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.035))",
                    border: "1px solid rgba(185,197,205,0.22)",
                    boxShadow:
                      "0 28px 80px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.12)",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 12,
                      borderRadius: 3,
                      border: "1px solid rgba(215,25,32,0.24)",
                      pointerEvents: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: 180,
                      mb: 3,
                      borderRadius: 3,
                      bgcolor: "rgba(0,0,0,0.32)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/VTH-logo.png"
                      alt="Vetech Hydraulics logo"
                      fill
                      sizes="390px"
                      style={{ objectFit: "contain", padding: "24px" }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      color: "#6EC1FF",
                      fontWeight: 900,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontSize: 12,
                      mb: 1,
                    }}
                  >
                    Industrial Repair Standard
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: 24,
                      lineHeight: 1.12,
                    }}
                  >
                    Built for uptime, tested before return.
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.72)",
                      mt: 1.5,
                      lineHeight: 1.65,
                    }}
                  >
                    Cylinder repacking, component repair, and service support
                    for equipment that cannot sit idle.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* ====================== VETERAN OWNERSHIP ======================= */}
      <VeteranOwnershipSection />

      {/* ============================ SERVICES ============================ */}
      <Section
        id="services"
        sx={{
          position: "relative",
          background:
            "radial-gradient(circle at 12% 0%, rgba(215,25,32,0.15), transparent 34%), linear-gradient(180deg, #071522 0%, #0B1B27 52%, #07131D 100%)",
        }}
      >
        <Container maxWidth="lg" sx={innerContainerSx}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              sx={{
                color: "#D71920",
                fontWeight: 950,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: { xs: 12, md: 13 },
                mb: 1.25,
              }}
            >
              CORE HYDRAULIC SERVICES
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                color: "#F7FAFC",
                fontWeight: 950,
                fontSize: {
                  xs: "clamp(26px, 7vw, 38px)",
                  md: "clamp(36px, 4vw, 54px)",
                },
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
                textWrap: "balance",
                maxWidth: 900,
                mx: "auto",
              }}
            >
              Cylinder Repair Built for Heavy Equipment, Fleets, and Job Sites
            </Typography>
            <Typography
              sx={{
                color: "rgba(231,238,244,0.74)",
                mt: 1.5,
                mx: "auto",
                maxWidth: 720,
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: 1.7,
              }}
            >
              Fast turnarounds, tested repairs, and practical service options
              for commercial operators who need hydraulic equipment back in the
              field.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {[
              {
                title: "Hydraulic Cylinder Repacking",
                blurb:
                  "Seal replacement to stop leaks and improve performance.",
                img: repackImg,
                alt: "Hydraulic cylinder repacking with new seals",
                tag: "Seal replacement",
              },
              {
                title: "Cylinder & Component Repair",
                blurb:
                  "Minor rod refinishing and polish for better seal life and we also weld and polish any damaged components to extend service life.",
                img: repairImg,
                alt: "Hydraulic cylinder component repair and rod polishing",
                tag: "Rod & component work",
              },
              {
                title: "Mobile / On-Site Service",
                blurb:
                  "Pickup, delivery, or mobile pull/install options to minimize your equipment downtime.",
                img: mobileImg,
                alt: "Mobile hydraulic service truck providing on-site cylinder support",
                tag: "Job-site support",
              },
            ].map((c) => (
              <Grid item xs={12} md={4} key={c.title}>
                <Card
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "rgba(9,23,35,0.9)",
                    backgroundImage:
                      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.015))",
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(190,202,212,0.18)",
                    boxShadow:
                      "0 22px 58px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                    transition:
                      "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background:
                        "linear-gradient(90deg, #D71920 0%, rgba(215,25,32,0.35) 45%, rgba(190,202,212,0.35) 100%)",
                      zIndex: 2,
                    },
                    "&:hover": {
                      transform: { md: "translateY(-6px)" },
                      borderColor: "rgba(215,25,32,0.42)",
                      boxShadow:
                        "0 28px 70px rgba(0,0,0,0.38), 0 0 0 1px rgba(215,25,32,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
                    },
                  }}
                  elevation={0}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardImage src={c.img} alt={c.alt} />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(3,7,11,0.82), rgba(3,7,11,0.12) 58%, rgba(3,7,11,0.0))",
                      }}
                    />
                    <Typography
                      sx={{
                        position: "absolute",
                        left: 18,
                        bottom: 16,
                        px: 1.25,
                        py: 0.65,
                        borderRadius: "999px",
                        color: "#F7FAFC",
                        bgcolor: "rgba(3,7,11,0.74)",
                        border: "1px solid rgba(190,202,212,0.22)",
                        fontWeight: 900,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontSize: 11,
                      }}
                    >
                      {c.tag}
                    </Typography>
                  </Box>

                  <CardContent
                    sx={{
                      color: "#fff",
                      p: { xs: 2.5, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 950,
                        mb: 1.15,
                        color: "#F7FAFC",
                        lineHeight: 1.14,
                        letterSpacing: "-0.02em",
                        fontSize: { xs: 21, md: 22 },
                      }}
                    >
                      {c.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(231,238,244,0.78)",
                        lineHeight: 1.7,
                        mb: 2.5,
                      }}
                    >
                      {c.blurb}
                    </Typography>

                    <Box sx={{ mt: "auto", pt: 1 }}>
                      <Button
                        component={NextLink}
                        href="/services"
                        variant="text"
                        sx={{
                          px: 0,
                          color: "#F7FAFC",
                          fontWeight: 950,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontSize: 12,
                          "&::before": {
                            content: '""',
                            width: 28,
                            height: 2,
                            mr: 1.25,
                            bgcolor: "#D71920",
                            boxShadow: "0 0 14px rgba(215,25,32,0.75)",
                          },
                          "&:hover": {
                            color: "#D71920",
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        View Services
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ======================= RECENT HYDRAULIC REPAIRS ======================= */}
      <AltSection
        id="recent-hydraulic-repairs"
        sx={{
          position: "relative",
          background:
            "radial-gradient(circle at 10% 12%, rgba(215,25,32,0.18), transparent 30%), radial-gradient(circle at 92% 18%, rgba(110,193,255,0.1), transparent 26%), linear-gradient(180deg, #050A0F 0%, #0A1721 46%, #06111A 100%)",
          "&::before": {
            content: '\"\"',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.34,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 18%, rgba(0,0,0,0.55) 78%, transparent 100%)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            alignItems="end"
            sx={{ mb: { xs: 4, md: 5 } }}
          >
            <Grid item xs={12} md={7.6}>
              <Typography
                sx={{
                  color: "#D71920",
                  fontWeight: 950,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontSize: { xs: 12, md: 13 },
                  mb: 1.25,
                }}
              >
                RECENT REPAIR WORK
              </Typography>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  color: "#F7FAFC",
                  fontWeight: 950,
                  fontSize: {
                    xs: "clamp(27px, 7vw, 40px)",
                    md: "clamp(38px, 4vw, 56px)",
                  },
                  lineHeight: 1.02,
                  letterSpacing: "-0.045em",
                  textWrap: "balance",
                  maxWidth: 880,
                }}
              >
                Built for Heavy Equipment. Restored for Reliability.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4.4}>
              <Typography
                sx={{
                  color: "rgba(231,238,244,0.78)",
                  lineHeight: 1.75,
                  fontSize: { xs: 14.5, md: 16 },
                }}
              >
                From cylinder rebuilds and repacking to rod repair, pressure
                testing, and fleet turnaround, Vetech Hydraulics brings
                veteran-owned workmanship to commercial equipment that needs to
                get back in service with confidence.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {recentRepairs.map((repair) => (
              <Grid item xs={12} sm={6} lg={3} key={repair.title}>
                <Card
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    borderRadius: 3,
                    bgcolor: "rgba(8,19,28,0.92)",
                    backgroundImage:
                      "linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.018))",
                    border: "1px solid rgba(185,197,205,0.2)",
                    boxShadow:
                      "0 24px 66px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08)",
                    transition:
                      "transform 190ms ease, border-color 190ms ease, box-shadow 190ms ease",
                    "&::after": {
                      content: '\"\"',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(135deg, rgba(215,25,32,0.16), transparent 26%, rgba(255,255,255,0.04) 100%)",
                      opacity: 0.7,
                    },
                    "&:hover": {
                      transform: { md: "translateY(-7px)" },
                      borderColor: "rgba(215,25,32,0.48)",
                      boxShadow:
                        "0 34px 82px rgba(0,0,0,0.44), 0 0 0 1px rgba(215,25,32,0.14), inset 0 1px 0 rgba(255,255,255,0.1)",
                    },
                    "&:hover .repair-image": {
                      transform: "scale(1.045)",
                    },
                  }}
                  elevation={0}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(185,197,205,0.16)",
                    }}
                  >
                    <Box
                      sx={{ position: "relative", width: "100%", pb: "68%" }}
                    >
                      <Image
                        src={repair.image}
                        alt={repair.alt}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        loading="lazy"
                        quality={82}
                        placeholder="blur"
                        className="repair-image"
                        style={{
                          objectFit: "cover",
                          transition: "transform 260ms ease",
                          filter: "saturate(0.74) contrast(1.12)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(2,6,10,0.88), rgba(2,6,10,0.14) 58%, rgba(2,6,10,0.2))",
                        }}
                      />
                    </Box>

                    {repair.status && (
                      <Typography
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          px: 1.35,
                          py: 0.65,
                          borderRadius: "999px",
                          bgcolor: "rgba(215,25,32,0.92)",
                          color: "#fff",
                          border: "1px solid rgba(255,255,255,0.22)",
                          boxShadow: "0 12px 26px rgba(0,0,0,0.32)",
                          fontWeight: 950,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontSize: 10.5,
                        }}
                      >
                        {repair.status}
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        position: "absolute",
                        right: 16,
                        bottom: 14,
                        color: "#D6DEE6",
                        fontWeight: 900,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontSize: 11,
                      }}
                    >
                      {repair.equipment}
                    </Typography>
                  </Box>

                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      p: { xs: 2.5, md: 2.75 },
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#F7FAFC",
                        fontWeight: 950,
                        lineHeight: 1.14,
                        letterSpacing: "-0.02em",
                        fontSize: { xs: 20, md: 21 },
                        mb: 1.15,
                      }}
                    >
                      {repair.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(231,238,244,0.76)",
                        lineHeight: 1.68,
                        fontSize: 14.5,
                      }}
                    >
                      {repair.summary}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              p: { xs: 2.5, md: 4 },
              borderRadius: 3,
              bgcolor: "rgba(9,23,35,0.86)",
              border: "1px solid rgba(185,197,205,0.2)",
              boxShadow:
                "0 24px 66px rgba(0,0,0,0.32), inset 4px 0 0 #D71920, inset 0 1px 0 rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
              gap: 2.5,
            }}
          >
            <Box>
              <Typography
                component="h3"
                sx={{
                  color: "#F7FAFC",
                  fontWeight: 950,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.08,
                  fontSize: { xs: 25, md: 34 },
                  mb: 0.9,
                }}
              >
                Need a Hydraulic Cylinder Rebuilt?
              </Typography>
              <Typography
                sx={{ color: "rgba(231,238,244,0.72)", lineHeight: 1.65 }}
              >
                Send details, photos, or fleet requirements and we will help map
                the fastest path to a dependable repair.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                component="a"
                href={BUSINESS.phoneTel}
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  px: 3.5,
                  py: 1.35,
                  borderRadius: "10px",
                  bgcolor: "#D71920",
                  fontWeight: 950,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 16px 34px rgba(215,25,32,0.28)",
                  "&:hover": { bgcolor: "#B9151B" },
                }}
              >
                Call Now
              </Button>
              <Button
                component={NextLink}
                href="/services"
                variant="outlined"
                sx={{
                  px: 3.5,
                  py: 1.35,
                  borderRadius: "10px",
                  color: "#F7FAFC",
                  borderColor: "rgba(185,197,205,0.42)",
                  bgcolor: "rgba(255,255,255,0.035)",
                  fontWeight: 950,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.74)",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                View Services
              </Button>
            </Stack>
          </Box>
        </Container>
      </AltSection>

      {/* ===================== FLEET & EQUIPMENT SUPPORT ===================== */}
      <AltSection
        id="fleet-equipment-support"
        sx={{
          position: "relative",
          background:
            "radial-gradient(circle at 86% 8%, rgba(215,25,32,0.16), transparent 30%), linear-gradient(180deg, #050D14 0%, #0A1823 48%, #06111A 100%)",
        }}
      >
        <Container maxWidth="lg" sx={innerContainerSx}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6.7}>
              <Typography
                sx={{
                  color: "#D71920",
                  fontWeight: 950,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontSize: { xs: 12, md: 13 },
                  mb: 1.25,
                }}
              >
                COMMERCIAL HYDRAULIC SUPPORT
              </Typography>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  color: "#F7FAFC",
                  fontWeight: 950,
                  fontSize: {
                    xs: "clamp(26px, 7vw, 38px)",
                    md: "clamp(36px, 4vw, 52px)",
                  },
                  lineHeight: 1.04,
                  letterSpacing: "-0.045em",
                  textWrap: "balance",
                  maxWidth: 860,
                }}
              >
                Supporting Fleets, Heavy Equipment, and Industrial Operations
                Across North Houston
              </Typography>
            </Grid>

            <Grid item xs={12} md={5.3}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  bgcolor: "rgba(9,23,35,0.82)",
                  border: "1px solid rgba(190,202,212,0.18)",
                  boxShadow:
                    "0 22px 58px rgba(0,0,0,0.26), inset 4px 0 0 rgba(215,25,32,0.82), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(231,238,244,0.82)",
                    lineHeight: 1.75,
                    fontSize: { xs: 15, md: 16 },
                  }}
                >
                  Vetech Hydraulics supports commercial hydraulic cylinder
                  repair needs with fleet uptime, fast turnaround, and reliable
                  service for contractors, municipalities, equipment owners, and
                  industrial operators — backed by veteran-owned professionalism
                  and clear communication.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 2.25, md: 3 }}
            sx={{ mt: { xs: 4, md: 5 } }}
          >
            {[
              {
                icon: "TT",
                title: "Trash Trucks",
                text: "Cylinder repair support for waste and recycling fleets where route uptime matters every day.",
              },
              {
                icon: "CE",
                title: "Construction Equipment",
                text: "Repair support for loaders, excavators, skid steers, lifts, and job-site hydraulic equipment.",
              },
              {
                icon: "AG",
                title: "Agriculture Equipment",
                text: "Practical cylinder service for tractors, implements, loaders, and ranch or farm machinery.",
              },
              {
                icon: "UM",
                title: "Utility / Municipal Fleets",
                text: "Reliable repair coordination for public works, utility crews, and municipal equipment programs.",
              },
              {
                icon: "IE",
                title: "Industrial Equipment",
                text: "Hydraulic cylinder repair for shop, plant, logistics, manufacturing, and material-handling operations.",
              },
              {
                icon: "FS",
                title: "Field Service Support",
                text: "Pickup, delivery, and mobile pull/install options to help reduce downtime when equipment cannot sit idle.",
              },
            ].map((industry) => (
              <Grid item xs={12} sm={6} md={4} key={industry.title}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 2.25, md: 2.5 },
                    borderRadius: 3,
                    bgcolor: "rgba(12,29,42,0.86)",
                    backgroundImage:
                      "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.012))",
                    border: "1px solid rgba(190,202,212,0.16)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                    transition:
                      "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                    "&:hover": {
                      transform: { md: "translateY(-5px)" },
                      borderColor: "rgba(215,25,32,0.4)",
                      boxShadow:
                        "0 22px 54px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.09)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 2,
                        display: "grid",
                        placeItems: "center",
                        color: "#fff",
                        bgcolor: "rgba(215,25,32,0.16)",
                        border: "1px solid rgba(215,25,32,0.38)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 20px rgba(215,25,32,0.13)",
                        fontWeight: 950,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {industry.icon}
                    </Box>
                    <Typography
                      sx={{
                        color: "#F7FAFC",
                        fontWeight: 950,
                        fontSize: { xs: 18, md: 19 },
                        lineHeight: 1.18,
                      }}
                    >
                      {industry.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "rgba(231,238,244,0.76)",
                      lineHeight: 1.7,
                      fontSize: 14.5,
                    }}
                  >
                    {industry.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              p: { xs: 2.75, md: 4 },
              borderRadius: 4,
              textAlign: "center",
              bgcolor: "rgba(3,7,11,0.52)",
              border: "1px solid rgba(190,202,212,0.18)",
              boxShadow:
                "0 24px 70px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <Typography
              component="h3"
              sx={{
                color: "#F7FAFC",
                fontWeight: 950,
                fontSize: { xs: 24, md: 34 },
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Need Fast Hydraulic Cylinder Support?
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              justifyContent="center"
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <Button
                component="a"
                href={BUSINESS.phoneTel}
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  px: { xs: 3.5, md: 4.5 },
                  py: 1.45,
                  borderRadius: "10px",
                  bgcolor: "#D71920",
                  color: "#fff",
                  fontWeight: 950,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow:
                    "0 18px 38px rgba(215,25,32,0.26), inset 0 1px 0 rgba(255,255,255,0.24)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  "&:hover": { bgcolor: "#B9151B" },
                }}
              >
                Call Now
              </Button>
              <Button
                component="a"
                href={BUSINESS.emailMailto}
                variant="outlined"
                startIcon={<EmailIcon />}
                sx={{
                  px: { xs: 3.5, md: 4.5 },
                  py: 1.45,
                  borderRadius: "10px",
                  color: "#E7EEF4",
                  borderColor: "rgba(190,202,212,0.44)",
                  fontWeight: 950,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  bgcolor: "rgba(255,255,255,0.035)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.72)",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Email Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </AltSection>

      {/* ========== WHY CONTRACTORS & FLEETS CHOOSE VETECH ========== */}
      <Section
        id="why-contractors-fleets-choose-vetech"
        sx={{
          position: "relative",
          background:
            "radial-gradient(circle at 8% 12%, rgba(215,25,32,0.16), transparent 30%), radial-gradient(circle at 92% 18%, rgba(110,193,255,0.1), transparent 26%), linear-gradient(180deg, #050D14 0%, #0A1721 48%, #07131D 100%)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.3,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 78%, transparent 100%)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            alignItems="end"
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            <Grid item xs={12} md={7.4}>
              <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                COMMERCIAL RELIABILITY
              </Typography>
              <Typography component="h2" variant="h3" sx={headlineSx}>
                Built Around Uptime, Reliability, and Professional Service
              </Typography>
            </Grid>
            <Grid item xs={12} md={4.6}>
              <Typography sx={bodyCopySx}>
                Vetech Hydraulics helps minimize downtime with pressure-tested
                repairs, clear communication, fast turnaround, and veteran-owned
                professionalism backed by commercial accountability.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2.25, md: 3 }}>
            {commercialTrustFeatures.map(({ title, text, Icon }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <Box
                  sx={{
                    ...industrialCardSx,
                    position: "relative",
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background:
                        "linear-gradient(90deg, #D71920, rgba(215,25,32,0.24), rgba(190,202,212,0.28))",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      mb: 2,
                      display: "grid",
                      placeItems: "center",
                      color: "#fff",
                      bgcolor: "rgba(215,25,32,0.14)",
                      border: "1px solid rgba(215,25,32,0.34)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.12), 0 18px 36px rgba(0,0,0,0.26), 0 0 22px rgba(215,25,32,0.16)",
                    }}
                  >
                    <Icon aria-hidden="true" sx={{ fontSize: 27 }} />
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      color: "#F7FAFC",
                      fontWeight: 950,
                      fontSize: { xs: 20, md: 21 },
                      lineHeight: 1.14,
                      letterSpacing: "-0.025em",
                      mb: 1.15,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(231,238,244,0.76)",
                      fontSize: 14.5,
                      lineHeight: 1.7,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              p: { xs: 2.75, md: 4 },
              borderRadius: 4,
              bgcolor: "rgba(3,7,11,0.56)",
              backgroundImage:
                "linear-gradient(135deg, rgba(215,25,32,0.13), transparent 34%, rgba(255,255,255,0.045))",
              border: "1px solid rgba(190,202,212,0.2)",
              boxShadow:
                "0 26px 72px rgba(0,0,0,0.32), inset 4px 0 0 rgba(215,25,32,0.9), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
              <Grid item xs={12} md={7.2}>
                <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                  COMMERCIAL RELIABILITY
                </Typography>
                <Typography
                  sx={{
                    color: "#F7FAFC",
                    fontWeight: 950,
                    fontSize: { xs: 24, md: 34 },
                    lineHeight: 1.12,
                    letterSpacing: "-0.035em",
                    textWrap: "balance",
                  }}
                >
                  Repair support for equipment that needs to stay working.
                </Typography>
                <Typography
                  sx={{
                    ...bodyCopySx,
                    mt: 1.25,
                    color: "rgba(231,238,244,0.72)",
                  }}
                >
                  Commercial reliability means clear repair direction,
                  pressure-tested work, and communication that helps contractors
                  and fleet managers plan downtime.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4.8}>
                <Stack
                  direction={{ xs: "column", sm: "row", md: "column" }}
                  spacing={1.5}
                  sx={{ alignItems: "stretch" }}
                >
                  <Button
                    component="a"
                    href={BUSINESS.phoneTel}
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={primaryCtaSx}
                  >
                    Call Now
                  </Button>
                  <Button
                    component="a"
                    href={BUSINESS.emailMailto}
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    sx={secondaryCtaSx}
                  >
                    Email Us
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* ========================== WHY CHOOSE US ========================= */}
      <AltSection id="why-us" sx={lowerAltSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="Built for contractors, fleet managers, and operators.">
            Why Choose Vetech Hydraulics
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                Icon: MilitaryTechIcon,
                k: "Veteran-Owned & Operated SDVOSB Certified",
                v: "Hands-On Cylinder Expertise",
              },
              { Icon: VerifiedIcon, k: "Leak-Tested", v: "Before Delivery" },
              {
                Icon: LocalShippingIcon,
                k: "Pickup",
                v: "and Delivery Options",
              },
              {
                Icon: PrecisionManufacturingIcon,
                k: "Warranty",
                v: "On All Repairs",
              },
            ].map(({ Icon, ...item }, i) => (
              <Grid item xs={12} sm={6} md={3} key={item.k}>
                <Box
                  sx={{
                    ...lowerPanelSx,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Box sx={redBadgeSx}>
                    <Icon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography sx={{ ...eyebrowSx, mb: 0.75 }}>
                      0{i + 1}
                    </Typography>
                    <Typography sx={lowerTitleSx}>{item.k}</Typography>
                    <Typography
                      sx={{ color: "#fff", fontWeight: 800, mt: 0.85 }}
                    >
                      {item.v}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ============= COMMON FAILURES ====================== */}
      <Section id="failures" sx={lowerSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="What typically goes wrong — and how we fix it.">
            Common Hydraulic Cylinder Failures We See Every Day
          </SectionTitle>

          <Box sx={{ ...lowerPanelSx, p: { xs: 2.5, md: 3.5 } }}>
            <Typography sx={{ ...lowerBodySx, mb: { xs: 2.5, md: 3 } }}>
              Hydraulic cylinders work hard on trash trucks, excavators, skid
              steers, farm equipment, and industrial machines. Over time, heat,
              contamination, misalignment, and heavy use start to show up as the
              same repeat failures:
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
              {[
                {
                  title: "Seal Failures & Leaks",
                  text: "Worn or damaged seals cause internal bypassing, external leaks, loss of power, and contamination. Age, wrong seal material, high temps, and scored rods/barrels all speed up seal failure.",
                },
                {
                  title: "Bent Rods & Scored Barrels",
                  text: "Side loading or poor alignment can bend rods and scratch the inside of the barrel. Once sealing surfaces are damaged, seals wear out quickly and leaks follow.",
                },
                {
                  title: "Rod Pitting & Corrosion",
                  text: "Outdoor and corrosive environments eat away at chrome. Pitting and rust tear seals, weaken the rod, and often require reconditioning or replacement.",
                },
                {
                  title: "Piston Wear & Misalignment",
                  text: "When a cylinder is misaligned or running dry, the piston can wear unevenly and score the barrel. That leads to loss of efficiency, weak stroke, and shortened service life.",
                },
                {
                  title: "Slow or Erratic Operation",
                  text: "Cylinders that feel slow, jerky, or inconsistent are often dealing with low system pressure, fluid contamination, or internal bypassing from worn internal parts.",
                },
              ].map((failure, i) => (
                <Grid item xs={12} md={i === 4 ? 12 : 6} key={failure.title}>
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 2, md: 2.25 },
                      borderRadius: 3,
                      bgcolor: "rgba(3,7,11,0.32)",
                      border: "1px solid rgba(190,202,212,0.16)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    <Typography
                      sx={{ ...lowerTitleSx, fontSize: { xs: 17, md: 18 } }}
                    >
                      {failure.title}
                    </Typography>
                    <Typography sx={{ ...lowerBodySx, mt: 0.9 }}>
                      {failure.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider
              sx={{
                my: { xs: 2.5, md: 3 },
                borderColor: "rgba(190,202,212,0.18)",
              }}
            />

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 3 }}
              alignItems={{ xs: "stretch", md: "center" }}
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  ...lowerBodySx,
                  color: "rgba(247,250,252,0.88)",
                  maxWidth: 760,
                }}
              >
                At Vetech Hydraulics, we don’t just throw seals at the problem.
                We look at why the cylinder failed so we can rebuild it to last
                longer and help you avoid repeat downtime.
              </Typography>
              <ConsultationButton />
            </Stack>
          </Box>
        </Container>
      </Section>

      {/* ========== CYLINDER REPAIR CAPABILITIES ============ */}
      <AltSection id="capabilities" sx={lowerAltSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="From small-bore to large telescopic cylinders.">
            Our Cylinder Repair Capabilities
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              [
                [
                  "Disassembly & Inspection",
                  "Every cylinder is fully torn down, cleaned, and inspected. We measure rods, pistons, barrels, and glands to find the true root cause of failure — not just the symptoms.",
                ],
                [
                  "Machining & Restoration",
                  "We handle rod polishing, rod straightening, barrel honing, thread repair, custom component fabrication, and more. Older or discontinued cylinders can often be saved with in-house machining.",
                ],
                [
                  "Seal Selection & Replacement",
                  "We install high-quality seals matched to your pressure, temperature, and fluid type — so your repair holds up in real-world conditions.",
                ],
              ],
              [
                [
                  "Reassembly & Pressure Testing",
                  "Once rebuilt, each cylinder is reassembled to spec and pressure-tested under load. We verify smooth operation, correct stroke, and leak-free performance before it goes back in service.",
                ],
                [
                  "Fast Turnaround Times",
                  "Downtime is expensive. We move quickly — especially for local contractors, trash fleets, and equipment owners who need cylinders turned around in days, not weeks.",
                ],
                [
                  "Photo & Measurement Quotes",
                  "Text or email a photo and some basic dimensions, and we can usually give you a ballpark estimate before you even bring the cylinder in.",
                ],
              ],
            ].map((panel, panelIndex) => (
              <Grid item xs={12} md={6} key={panelIndex}>
                <Box sx={{ ...lowerPanelSx, p: { xs: 2.5, md: 3.25 } }}>
                  <Typography sx={{ ...eyebrowSx, mb: 2 }}>
                    {panelIndex === 0
                      ? "Repair Standards"
                      : "Quote & Uptime Support"}
                  </Typography>
                  <Stack spacing={2.25}>
                    {panel.map(([title, text]) => (
                      <Box key={title}>
                        <Typography sx={lowerTitleSx}>{title}</Typography>
                        <Typography sx={{ ...lowerBodySx, mt: 0.75 }}>
                          {text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ============== REPAIR VS REPLACEMENT =============== */}
      <Section id="repair-vs-replace" sx={lowerSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="Helping you make the right call for your equipment and budget.">
            Repair vs. Replacement
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                label: "Preferred when practical",
                title: "When Repair Makes Sense",
                intro:
                  "In many cases, repairing your hydraulic cylinder is faster and more cost-effective than replacing it:",
                items: [
                  "Seal leaks, minor rod pitting, and surface wear that can be corrected.",
                  "When OEM replacements are back-ordered or discontinued.",
                  "When you need a quick turnaround to get equipment back in service.",
                ],
                close:
                  "For most cylinders we see, a proper rebuild gives you years of additional service at a fraction of the cost of new.",
              },
              {
                label: "Honest replacement guidance",
                title: "When Replacement is the Better Option",
                intro:
                  "Sometimes, a cylinder is too far gone, or the numbers simply don’t add up:",
                items: [
                  "Severe barrel cracking or structural damage.",
                  "Rods that are heavily bent or beyond safe repair.",
                  "When repair cost approaches or exceeds the cost of a quality replacement.",
                ],
                close:
                  "We’ll walk you through both options with honest pricing, so you can decide what’s best for your operation — not ours.",
              },
            ].map((option) => (
              <Grid item xs={12} md={6} key={option.title}>
                <Card sx={lowerPanelSx} elevation={0}>
                  <CardContent sx={{ p: 0, position: "relative", zIndex: 1 }}>
                    <Typography sx={{ ...eyebrowSx, mb: 1 }}>
                      {option.label}
                    </Typography>
                    <Typography variant="h6" sx={lowerTitleSx}>
                      {option.title}
                    </Typography>
                    <Typography sx={{ ...lowerBodySx, mt: 1.25, mb: 1.5 }}>
                      {option.intro}
                    </Typography>
                    <Box component="ul" sx={{ pl: "1.15rem", mt: 0, mb: 0 }}>
                      {option.items.map((txt) => (
                        <Box
                          component="li"
                          key={txt}
                          sx={{
                            mb: 0.75,
                            color: industrialColors.hydraulicRed,
                          }}
                        >
                          <Typography sx={lowerBodySx}>{txt}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Typography
                      sx={{
                        ...lowerBodySx,
                        color: "rgba(247,250,252,0.88)",
                        mt: 1.5,
                      }}
                    >
                      {option.close}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ============================= PROCESS ============================ */}
      <Section id="process" sx={lowerAltSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="Simple, transparent, and efficient.">
            Our Repair Process
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                step: "1",
                title: "Check-In & Inspect",
                txt: "Receive cylinder, clean, measure, and inspect components to identify the root cause of failure.",
              },
              {
                step: "2",
                title: "Quote & Approve",
                txt: "You get a clear estimate for seals, parts, and labor before we move forward.",
              },
              {
                step: "3",
                title: "Repack / Rebuild",
                txt: "Replace seals, wear items, and perform any required machining or rod/barrel work.",
              },
              {
                step: "4",
                title: "Test & Deliver",
                txt: "Pressure test, verify smooth operation, and return your cylinder ready to reinstall.",
              },
            ].map((s) => (
              <Grid key={s.step} item xs={12} sm={6} md={3}>
                <Box sx={lowerPanelSx}>
                  <Box
                    sx={{ ...redBadgeSx, mb: 2, fontWeight: 950, fontSize: 18 }}
                  >
                    {s.step}
                  </Box>
                  <Typography sx={lowerTitleSx}>{s.title}</Typography>
                  <Typography sx={{ ...lowerBodySx, mt: 0.9 }}>
                    {s.txt}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ========== QUALITY & TESTING ======================= */}
      <AltSection id="quality" sx={lowerSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="Your cylinders run under extreme pressure — we treat them that way.">
            Quality, Testing & Reliability
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              [
                "Pressure Testing",
                "Every repaired cylinder is pressure-tested to verify it holds and performs at proper operating pressures, with no leaks or bypassing.",
              ],
              [
                "Micron-Level Measurements",
                "We check rod, barrel, and gland tolerances with micrometers and bore gauges to ensure components are in spec and will support long-term seal life.",
              ],
              [
                "Clean Seal Installation",
                "Seals are installed in a clean, controlled area to reduce contamination — a leading cause of early failure.",
              ],
              [
                "Documentation on Request",
                "Need proof for your QA system or customer? We can provide test notes and repair details so you have a record of what was done.",
              ],
            ].map(([title, text], i) => (
              <Grid item xs={12} sm={6} md={3} key={title}>
                <Box sx={lowerPanelSx}>
                  <Typography sx={{ ...eyebrowSx, mb: 1 }}>
                    QA 0{i + 1}
                  </Typography>
                  <Typography sx={lowerTitleSx}>{title}</Typography>
                  <Typography sx={{ ...lowerBodySx, mt: 0.9 }}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* =========================== SERVICE AREAS ======================== */}
      <AltSection id="areas" sx={lowerAltSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle subtitle="Local pickup and delivery available.">
            Service Areas
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ ...lowerPanelSx, p: { xs: 2.5, md: 3.25 } }}>
                <Typography sx={lowerTitleSx}>
                  Primary Service Corridor
                </Typography>
                <Typography sx={{ ...lowerBodySx, mt: 0.9 }}>
                  Montgomery • Conroe • The Woodlands • Magnolia • Tomball •
                  Spring • Willis • New Caney • Splendora • Humble • Atascocita
                </Typography>

                <Divider
                  sx={{ my: 2.5, borderColor: "rgba(190,202,212,0.18)" }}
                />

                <Typography sx={lowerTitleSx}>
                  Additional Coverage Areas
                </Typography>
                <Typography
                  sx={{
                    ...lowerBodySx,
                    mt: 0.9,
                    fontSize: { xs: 14.5, md: 15 },
                    columnCount: { xs: 1, md: 2 },
                    columnGap: 4,
                  }}
                >
                  Millican • Navasota • Washington • Anderson • Apolonia •
                  Richards • Whitehall • Fields Store • Hempstead • Prairie View
                  • Pine Island • Buckhorn • Waller • Plantersville • Pinebrook
                  • Todd Mission • Fetzer • Bobville • Karen • Pinehurst •
                  Stagecoach • Rose Hill • Kohrville • Porter Heights •
                  Grangerland • Klein • Westfield • Panorama Village • Ada •
                  Waverly • New Waverly • Patton Village • Roman Forest • Plum
                  Grove • Cleveland • North Cleveland • Westcott • Eastgate •
                  Huffman
                </Typography>

                <Divider
                  sx={{ my: 2.5, borderColor: "rgba(190,202,212,0.18)" }}
                />

                <Typography sx={lowerTitleSx}>
                  Key Industries We Support
                </Typography>
                <Typography sx={{ ...lowerBodySx, mt: 0.9 }}>
                  Waste & Recycling, Construction, Agriculture, Logistics,
                  Manufacturing and other hydraulic equipment operators across
                  the Lake Conroe / North Houston region.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ ...lowerPanelSx, p: 0 }} elevation={0}>
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(190,202,212,0.18)",
                    position: "relative",
                  }}
                >
                  <CardImageMap alt="Vetech Hydraulics service area map" />
                </Box>
                <CardContent sx={{ color: "#fff", p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={lowerBodySx}>
                    Typical service radius for pickup, delivery, and on-site
                    support. If you&apos;re near this map, there&apos;s a good
                    chance we can help.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* =============================== CTA ============================== */}
      <Section id="quote" sx={lowerSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <Box
            sx={{
              ...lowerPanelSx,
              p: { xs: 3, md: 5 },
              textAlign: "center",
              backgroundImage:
                "radial-gradient(circle at 50% 0%, rgba(215,25,32,0.16), transparent 34%), linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.018))",
            }}
          >
            <SectionTitle subtitle="Send a picture for a fast quote.">
              Ready to Get Your Cylinder Fixed?
            </SectionTitle>
            <ConsultationButton />
          </Box>
        </Container>
      </Section>

      {/* =============================== FAQ ============================== */}
      <AltSection id="faq" sx={lowerAltSectionBgSx}>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, ...innerContainerSx }}
        >
          <SectionTitle>FAQ</SectionTitle>

          {[
            {
              q: "How much does it cost to fix a hydraulic cylinder?",
              a: "Hydraulic cylinder repair costs vary widely, from $200-$400 for simple reseals (kits $20-$150, labor $100-$200+) to several hundred or even over $1,000 for complex telescopic cylinder repair, re-chroming, or tube re-sleeving, with shop labor often $120-$160/hour plus parts. At Vetech Hydraulics, we try to provide a fair price for our customers so we stay at a price range that does not exceed 50% of the cost of OEM cylinder replacement. Each cylinder is unique, so we recommend getting a detailed quote based on your specific needs.",
            },
            {
              q: "How fast can you turn around a standard repack?",
              a: "Typical 24–72 hours depending on parts availability and queue. Emergency service available.",
            },
            {
              q: "Do you test cylinders before delivery?",
              a: "Yes. Every repair is pressure tested to verify no leaks and proper operation.",
            },
            {
              q: "Can you pick up my cylinder from a job site?",
              a: "We offer pickup and delivery in Montgomery County and surrounding areas. Mobile pull/install options available.",
            },
          ].map((item) => (
            <Accordion
              key={item.q}
              disableGutters
              sx={{
                bgcolor: "rgba(8,19,28,0.92)",
                backgroundImage:
                  "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.014))",
                color: "#fff",
                borderRadius: "14px !important",
                mb: 2,
                border: "1px solid rgba(190,202,212,0.2)",
                boxShadow:
                  "0 18px 44px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.07)",
                overflow: "hidden",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  borderColor: "rgba(215,25,32,0.42)",
                  boxShadow:
                    "0 24px 58px rgba(0,0,0,0.34), 0 0 0 1px rgba(215,25,32,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: industrialColors.hydraulicRed }}
                  />
                }
                sx={{
                  px: { xs: 2.25, md: 3 },
                  py: 0.75,
                  borderLeft: `3px solid ${industrialColors.hydraulicRed}`,
                  "& .MuiAccordionSummary-content": {
                    my: 1,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.25,
                    color: industrialColors.text,
                  }}
                >
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ px: { xs: 2.25, md: 3 }, pt: 0, pb: 2.5 }}
              >
                <Typography sx={lowerBodySx}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </AltSection>
    </>
  );
}
