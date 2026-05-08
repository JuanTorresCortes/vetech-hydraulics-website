// src/pages/index.js
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
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
import { styled } from "@mui/system";
import { businessSchema } from "../utils/seoData";
import backHoe from "../image/backHoe.webp";
import map from "../image/map.webp";
import ConsultationButton from "../components/ConsultationButton";
import { motion } from "framer-motion";
import repackImg from "../image/repackImg.webp";
import repairImg from "../image/repairImg.webp";
import mobileImg from "../image/mobileImg.webp";
import hero1 from "../image/hero1.webp";
import SdvobBadge from "@/components/SdvobBadge";
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
  ...FullBleed,
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0F2331",
  overflow: "hidden",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...FullBleed,
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0B1B27",
  overflow: "hidden",
}));

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 800,
        fontSize: {
          xs: "clamp(22px, 5.5vw, 32px)",
          md: "clamp(28px, 3vw, 40px)",
        },
        textWrap: "balance",
      }}
    >
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          color: "rgba(255,255,255,0.72)",
          mt: 1,
          fontSize: { xs: 14, md: 16 },
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

// Image cards (16:9). Card already clips via overflow:hidden, so radius here should be 0.
const CardImage = ({ alt = "Placeholder", src = backHoe }) => (
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
      style={{ objectFit: "cover" }}
    />
  </Box>
);

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
  const innerContainerSx = { px: { xs: 2, sm: 3, md: 4 } };

  return (
    <>
      <Head>
        <title>Vetech Hydraulics | Hydraulic Cylinder Repair Experts</title>
        <meta
          name="description"
          content="Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area."
        />

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
            pt: { xs: 18, sm: 20, md: 24 },
            pb: { xs: 6, sm: 8, md: 10 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div {...fadeUp}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.25,
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
                    fontSize: { xs: 11, sm: 12 },
                    fontWeight: 900,
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
                  Montgomery • North Houston
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
                    mb: 3.5,
                  }}
                >
                  Veteran-owned hydraulic cylinder repair for heavy equipment,
                  fleets, and commercial operations across Montgomery, Conroe,
                  Magnolia, The Woodlands, and North Houston.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mb: 4, alignItems: { xs: "stretch", sm: "center" } }}
                >
                  <Button
                    component={NextLink}
                    href="/contact"
                    variant="contained"
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
                    Request Service
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

                <Grid container spacing={1.25} sx={{ maxWidth: 820 }}>
                  {[
                    "Veteran-Owned",
                    "Fleet Service Capable",
                    "Pressure Tested Repairs",
                    "Pickup & Delivery Options",
                  ].map((badge) => (
                    <Grid item xs={12} sm={6} md={3} key={badge}>
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
                            fontSize: { xs: 13.5, md: 12.5, lg: 13.5 },
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
                    Cylinder repacking, component repair, and service support for
                    equipment that cannot sit idle.
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
              Fast turnarounds, tested repairs, and practical service options for
              commercial operators who need hydraulic equipment back in the field.
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

      {/* ========================== WHY CHOOSE US ========================= */}
      <AltSection id="why-us">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle subtitle="Built for contractors, fleet managers, and operators.">
            Why Choose Vetech Hydraulics
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                k: "Veteran-Owned & Operated SDVOSB Certified",
                v: "Hands-On Cylinder Expertise",
              },
              { k: "Leak-Tested", v: "Before Delivery" },
              { k: "Pickup", v: "and Delivery Options" },
              { k: "Warranty", v: "On All Repairs" },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    textAlign: "center",
                    bgcolor: "#0E2635",
                    border: "1px solid rgba(255,255,255,0.06)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#6EC1FF",
                      fontWeight: 800,
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: 1.25,
                    }}
                  >
                    {item.k}
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 700, mt: 0.75 }}>
                    {item.v}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ============= COMMON FAILURES ====================== */}
      <Section id="failures">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle subtitle="What typically goes wrong — and how we fix it.">
            Common Hydraulic Cylinder Failures We See Every Day
          </SectionTitle>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 2,
                  lineHeight: 1.7,
                  fontSize: { xs: 14.5, md: 16 },
                }}
              >
                Hydraulic cylinders work hard on trash trucks, excavators, skid
                steers, farm equipment, and industrial machines. Over time,
                heat, contamination, misalignment, and heavy use start to show
                up as the same repeat failures:
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Seal Failures & Leaks
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
              >
                Worn or damaged seals cause internal bypassing, external leaks,
                loss of power, and contamination. Age, wrong seal material, high
                temps, and scored rods/barrels all speed up seal failure.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Bent Rods & Scored Barrels
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
              >
                Side loading or poor alignment can bend rods and scratch the
                inside of the barrel. Once sealing surfaces are damaged, seals
                wear out quickly and leaks follow.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Rod Pitting & Corrosion
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
              >
                Outdoor and corrosive environments eat away at chrome. Pitting
                and rust tear seals, weaken the rod, and often require
                reconditioning or replacement.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: { xs: 0, md: 0 } }}
              >
                Piston Wear & Misalignment
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
              >
                When a cylinder is misaligned or running dry, the piston can
                wear unevenly and score the barrel. That leads to loss of
                efficiency, weak stroke, and shortened service life.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Slow or Erratic Operation
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
              >
                Cylinders that feel slow, jerky, or inconsistent are often
                dealing with low system pressure, fluid contamination, or
                internal bypassing from worn internal parts.
              </Typography>

              <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.15)" }} />

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 2,
                  lineHeight: 1.7,
                  fontSize: { xs: 14.5, md: 16 },
                }}
              >
                At Vetech Hydraulics, we don’t just throw seals at the problem.
                We look at why the cylinder failed so we can rebuild it to last
                longer and help you avoid repeat downtime.
              </Typography>

              <ConsultationButton />
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ========== CYLINDER REPAIR CAPABILITIES ============ */}
      <AltSection id="capabilities">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle subtitle="From small-bore to large telescopic cylinders.">
            Our Cylinder Repair Capabilities
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#0E2635",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Disassembly & Inspection
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  Every cylinder is fully torn down, cleaned, and inspected. We
                  measure rods, pistons, barrels, and glands to find the true
                  root cause of failure — not just the symptoms.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Machining & Restoration
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  We handle rod polishing, rod straightening, barrel honing,
                  thread repair, custom component fabrication, and more. Older
                  or discontinued cylinders can often be saved with in-house
                  machining.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Seal Selection & Replacement
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  We install high-quality seals matched to your pressure,
                  temperature, and fluid type — so your repair holds up in
                  real-world conditions.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#102A3A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Reassembly & Pressure Testing
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  Once rebuilt, each cylinder is reassembled to spec and
                  pressure-tested under load. We verify smooth operation,
                  correct stroke, and leak-free performance before it goes back
                  in service.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Fast Turnaround Times
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  Downtime is expensive. We move quickly — especially for local
                  contractors, trash fleets, and equipment owners who need
                  cylinders turned around in days, not weeks.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Photo & Measurement Quotes
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  Text or email a photo and some basic dimensions, and we can
                  usually give you a ballpark estimate before you even bring the
                  cylinder in.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* ============== REPAIR VS REPLACEMENT =============== */}
      <Section id="repair-vs-replace">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle subtitle="Helping you make the right call for your equipment and budget.">
            Repair vs. Replacement
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#102A3A",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, mb: 1, color: "#6EC1FF" }}
                  >
                    When Repair Makes Sense
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      mb: 1.5,
                      lineHeight: 1.7,
                    }}
                  >
                    In many cases, repairing your hydraulic cylinder is faster
                    and more cost-effective than replacing it:
                  </Typography>
                  <Box component="ul" sx={{ pl: "1.2rem", mt: 0, mb: 0 }}>
                    {[
                      "Seal leaks, minor rod pitting, and surface wear that can be corrected.",
                      "When OEM replacements are back-ordered or discontinued.",
                      "When you need a quick turnaround to get equipment back in service.",
                    ].map((txt, idx) => (
                      <Box component="li" key={idx} sx={{ mb: 0.75 }}>
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            lineHeight: 1.7,
                          }}
                        >
                          {txt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    For most cylinders we see, a proper rebuild gives you years
                    of additional service at a fraction of the cost of new.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#0E2635",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, mb: 1, color: "#6EC1FF" }}
                  >
                    When Replacement is the Better Option
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      mb: 1.5,
                      lineHeight: 1.7,
                    }}
                  >
                    Sometimes, a cylinder is too far gone, or the numbers simply
                    don’t add up:
                  </Typography>
                  <Box component="ul" sx={{ pl: "1.2rem", mt: 0, mb: 0 }}>
                    {[
                      "Severe barrel cracking or structural damage.",
                      "Rods that are heavily bent or beyond safe repair.",
                      "When repair cost approaches or exceeds the cost of a quality replacement.",
                    ].map((txt, idx) => (
                      <Box component="li" key={idx} sx={{ mb: 0.75 }}>
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            lineHeight: 1.7,
                          }}
                        >
                          {txt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    We’ll walk you through both options with honest pricing, so
                    you can decide what’s best for your operation — not ours.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ============================= PROCESS ============================ */}
      <Section id="process">
        <Container maxWidth="lg" sx={innerContainerSx}>
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
            ].map((s, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 3,
                    bgcolor: "#102A3A",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#fff",
                  }}
                >
                  <Typography sx={{ fontWeight: 800, color: "#6EC1FF" }}>
                    Step {s.step}
                  </Typography>
                  <Typography sx={{ fontWeight: 800, mt: 0.5 }}>
                    {s.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      mt: 0.5,
                      lineHeight: 1.7,
                    }}
                  >
                    {s.txt}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ========== QUALITY & TESTING ======================= */}
      <AltSection id="quality">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle subtitle="Your cylinders run under extreme pressure — we treat them that way.">
            Quality, Testing & Reliability
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#0E2635",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Pressure Testing
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  Every repaired cylinder is pressure-tested to verify it holds
                  and performs at proper operating pressures, with no leaks or
                  bypassing.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Micron-Level Measurements
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  We check rod, barrel, and gland tolerances with micrometers
                  and bore gauges to ensure components are in spec and will
                  support long-term seal life.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#102A3A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Clean Seal Installation
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  Seals are installed in a clean, controlled area to reduce
                  contamination — a leading cause of early failure.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Documentation on Request
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  Need proof for your QA system or customer? We can provide test
                  notes and repair details so you have a record of what was
                  done.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* =========================== SERVICE AREAS ======================== */}
      <AltSection id="areas">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle subtitle="Local pickup and delivery available.">
            Service Areas
          </SectionTitle>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#0E2635",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Primary Service Corridor
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  Montgomery • Conroe • The Woodlands • Magnolia • Tomball •
                  Spring • Willis • New Caney • Splendora • Humble • Atascocita
                </Typography>

                <Divider
                  sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
                />

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Additional Coverage Areas
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.7,
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
                  sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
                />

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Key Industries We Support
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  Waste & Recycling, Construction, Agriculture, Logistics,
                  Manufacturing and other hydraulic equipment operators across
                  the Lake Conroe / North Houston region.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#102A3A",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  overflow: "hidden",
                }}
                elevation={0}
              >
                <CardImageMap alt="Vetech Hydraulics service area map" />
                <CardContent sx={{ color: "#fff" }}>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                  >
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
      <Section id="quote">
        <Container
          maxWidth="lg"
          sx={{ ...innerContainerSx, textAlign: "center" }}
        >
          <SectionTitle subtitle="Send a picture for a fast quote.">
            Ready to Get Your Cylinder Fixed?
          </SectionTitle>
          <ConsultationButton />
        </Container>
      </Section>

      {/* =============================== FAQ ============================== */}
      <AltSection id="faq">
        <Container maxWidth="lg" sx={innerContainerSx}>
          <SectionTitle>FAQ</SectionTitle>

          {[
            {
              q: "How much does it cost to fix a hydraulic cylinder?",
              a: "Hydraulic cylinder repair costs vary widely, from $200-$400 for simple reseals (kits $20-$150, labor $100-$200+) to several hundred or even over $1,000 for complex telescopic cylinder repair, re-chroming, or tube re-sleeving, with shop labor often $120-$160/hour plus parts. At Vetech Hydraulics, we try to provide a fair price for our customers so we stay at a price range that dose not exceed 50% of the cost of OEM cylinder replacement. Each cylinder is unique, so we recommend getting a detailed quote based on your specific needs.",
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
          ].map((item, i) => (
            <Accordion
              key={i}
              disableGutters
              sx={{
                bgcolor: "#0E2635",
                color: "#fff",
                borderRadius: 2,
                mb: 2,
                border: "1px solid rgba(255,255,255,0.06)",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    my: 1,
                  },
                }}
              >
                <Typography sx={{ fontWeight: 800, lineHeight: 1.25 }}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
                >
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </AltSection>
    </>
  );
}
