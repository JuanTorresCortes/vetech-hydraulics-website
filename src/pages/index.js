// src/pages/index.js
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { businessSchema } from "../utils/seoData";
import backHoe from "../image/backHoe.webp";
import map from "../image/map.webp";
import ConsultationButton from "../components/ConsultationButton";
import { motion } from "framer-motion";

/* ------------------------------ Styled UI ------------------------------ */

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  minHeight: "95vh",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: 0, // ❌ remove padding so the image hits the edges
  [theme.breakpoints.down("xl")]: { minHeight: "99vh" },
  [theme.breakpoints.down("lg")]: { minHeight: "92vh" },
  [theme.breakpoints.down("md")]: { minHeight: "78svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "65svh" },
  "@media (max-width: 321px)": { minHeight: "100svh" },
}));

const Section = styled("section")(({ theme }) => ({
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0F2331",
}));

const AltSection = styled("section")(({ theme }) => ({
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0B1B27",
}));

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
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
      <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

// Reusable image card using your backHoe placeholder
const CardImage = ({ alt = "Placeholder", src = backHoe }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%", // 16:9
      borderRadius: 2,
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

const CardImageMap = ({ alt = "service area map", src = map }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%", // 16:9
      borderRadius: 2,
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

/* --------------------------------- Page --------------------------------- */

export default function Home() {
  // Simple mount-only fade-up (no scroll listeners)
  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>Vetech Hydraulics | Hydraulic Cylinder Repair Experts</title>
        <meta
          name="description"
          content="Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance. Get expert service today!"
        />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Head>

      {/* ============================== HERO ============================== */}
      <HeroSection id="home">
        {/* Full-bleed background image */}
        <Image
          src={backHoe}
          alt="Backhoe working"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />

        {/* Full-bleed overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Edge-to-edge container (no maxWidth, no gutters) */}
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 3 }, // add a bit of side padding for content comfort
            pb: { xs: 3, sm: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <motion.div {...fadeUp}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "clamp(22px, 7.5vw, 32px)",
                  sm: "clamp(28px, 6vw, 42px)",
                  md: "clamp(36px, 5vw, 56px)",
                  lg: "64px",
                },
                lineHeight: { xs: 1.2, md: 1.1 },
                fontWeight: 800,
                textWrap: "balance",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
                color: "#fff",
                mb: 2,
              }}
            >
              Hydraulic Cylinder Repair in Montgomery, Texas.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            style={{ display: "inline-block" }}
          >
            <ConsultationButton />
          </motion.div>
        </Container>
      </HeroSection>

      {/* ============================ SERVICES ============================ */}
      <Section id="services">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }} // edge-to-edge bg, comfy content padding
        >
          <SectionTitle subtitle="Fast turnarounds. Tested. Warrantied.">
            Cylinder Repair Services
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Cylinder Repacking",
                blurb:
                  "Seal replacement, wipers, wear rings, and leak remediation for tie-rod and welded cylinders.",
              },
              {
                title: "Rod Polish & Chrome Prep",
                blurb:
                  "Minor rod refinishing and polish for better seal life. Chrome evaluation for send-out if needed.",
              },
              {
                title: "On-Site / Mobile Service",
                blurb:
                  "Pickup, delivery, or mobile pull/install options to minimize your equipment downtime.",
              },
            ].map((c, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  elevation={0}
                >
                  <CardImage />
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {c.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                      {c.blurb}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ========================== WHY CHOOSE US ========================= */}
      <AltSection id="why-us">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Built for contractors, fleet managers, and operators.">
            Why Choose Vetech Hydraulics
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              { k: "24/7", v: "Emergency Support" },
              { k: "Leak-Tested", v: "Before Delivery" },
              { k: "Pickup", v: "and Delivery Options" },
              { k: "Warranty", v: "on Repairs" },
            ].map((item, i) => (
              <Grid item xs={6} sm={3} key={i}>
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
                    sx={{ color: "#6EC1FF", fontWeight: 800, fontSize: 18 }}
                  >
                    {item.k}
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                    {item.v}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ============================= PROCESS ============================ */}
      <Section id="process">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Simple, transparent, and efficient.">
            Our Repair Process
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                step: "1",
                title: "Check-In & Inspect",
                txt: "Receive cylinder, clean, measure, and inspect components.",
              },
              {
                step: "2",
                title: "Quote & Approve",
                txt: "You get a written estimate for seals, parts, and labor.",
              },
              {
                step: "3",
                title: "Repack / Rebuild",
                txt: "Replace seals, wear items, and perform necessary machining.",
              },
              {
                step: "4",
                title: "Test & Deliver",
                txt: "Pressure test for leaks; return cylinder ready to reinstall.",
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
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5 }}>
                    {s.txt}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* =========================== SERVICE AREAS ======================== */}
      <AltSection id="areas">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Local pickup and delivery available.">
            Service Areas
          </SectionTitle>

          <Grid container spacing={3}>
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
                <Typography sx={{ fontWeight: 800, mb: 1 }}>Primary</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Montgomery • Conroe • The Woodlands • Magnolia • Tomball •
                  Cypress • Spring • North Houston
                </Typography>
                <Divider
                  sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
                />
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Industries
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Waste & Recycling, Construction, Agriculture, Logistics,
                  Manufacturing.
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
                <CardImageMap alt="Service area placeholder" />
                <CardContent sx={{ color: "#fff" }}>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                    Service-area map.
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
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}
        >
          <SectionTitle subtitle="Send a picture for a fast quote.">
            Ready to Get Your Cylinder Fixed?
          </SectionTitle>
          <ConsultationButton />
        </Container>
      </Section>

      {/* =============================== FAQ ============================== */}
      <AltSection id="faq">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle>FAQ</SectionTitle>

          {[
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
              >
                <Typography sx={{ fontWeight: 800 }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
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
