// src/pages/service-areas/anderson-tx-hydraulic-cylinder-repair.js

import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";

/* ------------------------------ Full-bleed Layout ------------------------------ */
const FullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const Hero = styled(Box)(({ theme }) => ({
  ...FullBleed,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  minHeight: "70vh",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: 0,
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: { minHeight: "62vh" },
  [theme.breakpoints.down("md")]: { minHeight: "58svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "52svh" },
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
  <Box sx={{ textAlign: "center", mb: 5 }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 900,
        fontSize: {
          xs: "clamp(22px, 6.2vw, 34px)",
          md: "clamp(28px, 3vw, 42px)",
        },
        textWrap: "balance",
        lineHeight: 1.1,
      }}
    >
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          color: "rgba(255,255,255,0.78)",
          mt: 1,
          maxWidth: 900,
          mx: "auto",
          textWrap: "balance",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* ------------------------------ JSON-LD (Unique per page) ------------------------------ */
const serviceSchemaAnderson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hydraulic Cylinder Repair in Anderson, TX",
  serviceType:
    "Hydraulic cylinder repair, repacking, resealing, rod inspection, testing",
  provider: {
    "@type": "LocalBusiness",
    name: "Vetech Hydraulics",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montgomery",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    {
      "@type": "City",
      name: "Anderson",
      addressRegion: "TX",
      addressCountry: "US",
    },
    {
      "@type": "AdministrativeArea",
      name: "Grimes County",
      addressRegion: "TX",
      addressCountry: "US",
    },
    { "@type": "City", name: "Navasota", addressRegion: "TX" },
    { "@type": "City", name: "Plantersville", addressRegion: "TX" },
  ],
};

export default function AndersonServicePage() {
  return (
    <>
      <Head>
        <title>
          Hydraulic Cylinder Repair in Anderson, TX | Vetech Hydraulics
        </title>
        <meta
          name="description"
          content="Hydraulic cylinder repair in Anderson, TX with repacking, resealing, rod inspection, and pressure-tested rebuilds. Text a photo for a fast quote and turnaround."
        />
        <link
          rel="canonical"
          href="https://your-domain.com/service-areas/anderson-tx-hydraulic-cylinder-repair"
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchemaAnderson)}
        </script>
      </Head>

      {/* ============================== HERO ============================== */}
      <Hero>
        <Image
          src="/images/service-areas/anderson/hero.webp"
          alt="Heavy equipment working in the Anderson, Texas area"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.25) 85%)",
          }}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto", textAlign: "center" }}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "clamp(26px, 7vw, 36px)", md: 48 },
                lineHeight: 1.05,
                textWrap: "balance",
                mb: 1.25,
              }}
            >
              Hydraulic Cylinder Repair in Anderson, Texas
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.86)",
                maxWidth: 900,
                mx: "auto",
                mb: 2.5,
                lineHeight: 1.7,
                fontSize: { xs: 14.5, sm: 16 },
                textWrap: "balance",
              }}
            >
              Pressure-tested cylinder repacking and repair support for Grimes
              County equipment owners — built around clean rebuilds, honest
              recommendations, and downtime reduction.
            </Typography>

            <ConsultationButton />
          </Box>
        </Container>
      </Hero>

      {/* ============================== LOCAL CONTEXT + TRUST ============================== */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="A little about Anderson — and how we support working equipment across Grimes County.">
              Serving Anderson, Grimes County, and Nearby Communities
            </SectionTitle>

            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3.5 },
                    borderRadius: 3,
                    bgcolor: "#102A3A",
                    border: "1px solid rgba(255,255,255,0.07)",
                    height: "100%",
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
                    Anderson is built on hard work
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    Anderson is a small Texas community and the county seat of
                    Grimes County, where accountability still matters and word
                    travels fast. Around here, equipment matters — whether
                    you’re running land work, construction projects, ranch
                    operations, or fleet support. When a cylinder fails, it
                    doesn’t just leak oil — it costs time, schedules, and money.
                  </Typography>
                  <Divider
                    sx={{ my: 2.5, borderColor: "rgba(255,255,255,0.12)" }}
                  />

                  <Typography sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
                    What we do for Anderson-area customers
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    If your cylinder is leaking, bypassing, or losing force, we
                    help you take the next right step. Our process is simple:
                    clean teardown, correct seal selection, inspection for root
                    cause (rod damage, scoring, contamination), and verification
                    through testing so your reinstall is dependable.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: { xs: 220, sm: 280, md: "100%" },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    bgcolor: "#0E2635",
                  }}
                >
                  <Image
                    src="/images/service-areas/anderson/side.webp"
                    alt="Hydraulic cylinder repair support near Anderson, TX"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 70%)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      left: 16,
                      right: 16,
                      bottom: 16,
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                      Built for real-world uptime
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>
                      Clean rebuilds • Fair pricing • Tested results
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AltSection>

      {/* ============================== SERVICES ============================== */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Focused cylinder work built around reliability and clear communication.">
              Cylinder Repair Services for Anderson, TX
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  title: "Cylinder Repacking & Resealing",
                  text: "Replace seals, wipers, wear rings, and packing sets to stop leaks and restore performance — done clean and measured, not rushed.",
                },
                {
                  title: "Root-Cause Inspection",
                  text: "Repeat leaks often come from rod scoring, barrel damage, contamination, or misalignment. We look for the cause — not just the symptom.",
                },
                {
                  title: "Rod & Surface Evaluation",
                  text: "We evaluate rod condition and sealing surfaces that destroy seal life. If outside machine work is needed, we explain options clearly.",
                },
                {
                  title: "Bench Testing Before Return",
                  text: "We verify leak-free operation and smooth function before the cylinder goes back into service.",
                },
              ].map((item, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      bgcolor: "#102A3A",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <CardContent sx={{ color: "#fff" }}>
                      <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.85)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 2,
                  maxWidth: 900,
                  mx: "auto",
                }}
              >
                Fastest way to get started: text a few photos of the cylinder
                (rod, gland, ports, and leak area) plus any known dimensions. We
                respond with the best next step and a realistic ballpark.
              </Typography>
              <ConsultationButton />
            </Box>
          </Box>
        </Container>
      </Section>

      {/* ============================== FAQ ============================== */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Quick answers for Anderson and Grimes County equipment owners.">
              FAQ
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  q: "Do you support customers in Anderson even if you’re based in Montgomery?",
                  a: "Yes. We regularly help customers across nearby counties. Send your location and cylinder photos, and we’ll confirm the quickest path forward.",
                },
                {
                  q: "What cylinder types do you repair?",
                  a: "Single-acting and double-acting cylinders, many equipment and truck applications, and common jobsite cylinders. If you’re unsure, send photos and we’ll identify it.",
                },
                {
                  q: "What do you need for a quote?",
                  a: "Clear photos of the rod, gland, ports, and leak area, plus any tag info and basic dimensions if you have them.",
                },
                {
                  q: "My cylinder keeps eating seals — can you help?",
                  a: "Yes. That usually points to rod damage, contamination, misalignment, or the wrong seal setup. We inspect for root cause and correct it when possible.",
                },
              ].map((item, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      bgcolor: "#102A3A",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <CardContent sx={{ color: "#fff" }}>
                      <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                        {item.q}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.85)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.a}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Divider
              sx={{
                my: { xs: 4, md: 5 },
                borderColor: "rgba(255,255,255,0.12)",
              }}
            />

            <Box sx={{ textAlign: "center" }}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  mb: 1,
                  fontSize: { xs: 24, sm: 28, md: 32 },
                  textWrap: "balance",
                }}
              >
                Get a fast quote for Anderson-area cylinder repair
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 3,
                  maxWidth: 900,
                  mx: "auto",
                }}
              >
                Send photos and your location — we’ll respond with the best next
                step, a clear estimate, and a plan to minimize downtime.
              </Typography>
              <ConsultationButton>Get a quote</ConsultationButton>
            </Box>
          </Box>
        </Container>
      </AltSection>
    </>
  );
}

/* ------------------------------ Meta export ------------------------------ */
export const meta = {
  title: "Hydraulic Cylinder Repair in Anderson, TX | Vetech Hydraulics",
  description:
    "Hydraulic cylinder repair in Anderson, TX with repacking, resealing, rod inspection, and pressure-tested rebuilds. Text a photo for a fast quote and turnaround.",
};
