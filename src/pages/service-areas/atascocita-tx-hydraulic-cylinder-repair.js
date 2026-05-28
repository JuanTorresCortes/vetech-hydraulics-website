// src/pages/service-areas/atascocita-tx-hydraulic-cylinder-repair.js
// Service-area landing page: targets one local city while reusing the same repair promise, CTA pattern, and SEO structure as the rest of the area pages.
// If city coverage changes, keep this file, the service-area index, scripts, and sitemap in sync.

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
import { BUSINESS } from "../../config/business";

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
          lineHeight: 1.7,
          textWrap: "balance",
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* ------------------------------ JSON-LD ------------------------------ */
const serviceSchemaAtascocita = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hydraulic Cylinder Repair in Atascocita, TX",
  serviceType:
    "Hydraulic cylinder repair, repacking, resealing, rod inspection, pressure testing",
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
    { "@type": "City", name: "Atascocita", addressRegion: "TX" },
    { "@type": "City", name: "Humble", addressRegion: "TX" },
    { "@type": "City", name: "Kingwood", addressRegion: "TX" },
    {
      "@type": "AdministrativeArea",
      name: "Harris County",
      addressRegion: "TX",
    },
  ],
};

/* -------------------------------- Page -------------------------------- */

export default function AtascocitaServicePage() {
  return (
    <>
      <Head>
        <title>
          Hydraulic Cylinder Repair in Atascocita, TX | Vetech Hydraulics
        </title>
        <meta
          name="description"
          content="Hydraulic cylinder repair in Atascocita, TX with repacking, resealing, rod inspection, and pressure-tested rebuilds. Text photos for a fast quote and turnaround."
        />
        <link
          rel="canonical"
          href={`${BUSINESS.siteUrl}/service-areas/atascocita-tx-hydraulic-cylinder-repair`}
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchemaAtascocita)}
        </script>
      </Head>

      {/* ============================== HERO ============================== */}
      <Hero>
        <Image
          src="/images/service-areas/atascocita/hero.webp"
          alt="Hydraulic equipment and cylinder service work in the Greater Houston area"
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
              "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.25) 85%)",
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
                mb: 1.25,
                textWrap: "balance",
              }}
            >
              Hydraulic Cylinder Repair in Atascocita, Texas
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
              Pressure-tested cylinder repacking and repair support for
              Atascocita-area equipment owners — built for reliability, fair
              pricing, and minimal downtime for busy crews and local fleets.
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
            <SectionTitle subtitle="A fast-growing Greater Houston community where uptime matters.">
              Serving Atascocita, Humble, and the Lake Houston Corridor
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
                    Built on growth, work, and daily reliability
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    Atascocita is one of the fastest-growing communities in the
                    Greater Houston area, and that growth brings constant work:
                    construction, property maintenance, utilities, and service
                    fleets moving every day. Its name traces back to the
                    historic Atascocito outpost and road that helped connect
                    routes across East Texas long before modern highways.
                  </Typography>

                  <Divider
                    sx={{ my: 2.5, borderColor: "rgba(255,255,255,0.12)" }}
                  />

                  <Typography sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
                    What that means when a cylinder fails
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    In a high-pace area like Atascocita, downtime adds up fast.
                    A leaking cylinder doesn’t just make a mess — it slows
                    routes, delays jobs, and creates repeat breakdowns if the
                    root cause isn’t addressed. We focus on clean rebuilds,
                    correct seal selection, and verification through bench
                    testing so equipment goes back to work the right way.
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
                    src="/images/service-areas/atascocita/side.webp"
                    alt="Cylinder service and equipment support for Atascocita-area fleets"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 70%)",
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
                      Built for fleet uptime
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>
                      Clean rebuilds • Honest recommendations • Tested results
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
            <SectionTitle subtitle="Focused cylinder work, built around reliability and fair pricing.">
              Cylinder Repair Services for Atascocita, TX
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  title: "Cylinder Repacking & Resealing",
                  text: "Replace seals, wipers, wear rings, and packing sets to stop leaks and restore performance — done clean and measured, not rushed.",
                },
                {
                  title: "Rod Inspection & Seal-Life Corrections",
                  text: "We inspect for scoring, pitting, and conditions that cause repeat failures. If rod work is required, we explain options clearly.",
                },
                {
                  title: "Bench Testing & Verification",
                  text: "We verify leak-free operation and smooth performance before the cylinder goes back into service.",
                },
                {
                  title: "Straight Answers on Repair vs Replace",
                  text: "If a cylinder is too far gone, we’ll tell you. If it’s repairable, we recommend the best-value path without unnecessary add-ons.",
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
                  maxWidth: 950,
                  mx: "auto",
                }}
              >
                Fastest way to start: text a photo of the cylinder (rod, gland,
                ports, and leak area) plus any known dimensions. We’ll respond
                quickly with the best next step and a realistic ballpark.
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
            <SectionTitle subtitle="Quick answers for Atascocita-area equipment owners.">
              FAQ
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  q: "Do you service Atascocita even though your shop is based in Montgomery?",
                  a: "Yes. We regularly support customers across the North Houston region. Share your location and cylinder photos, and we’ll confirm the best logistics option.",
                },
                {
                  q: "What information helps you quote faster?",
                  a: "Clear photos of the cylinder (rod, gland, ports, and leak area), plus any tag information or basic dimensions if you have them.",
                },
                {
                  q: "Why do some cylinders keep blowing seals?",
                  a: "Repeat failures typically come from rod damage, contamination, misalignment, worn wear bands, or incorrect seal selection. We inspect for root cause, not just symptoms.",
                },
                {
                  q: "Can you tell me if it’s worth repairing?",
                  a: "Yes. We’ll inspect sealing surfaces and structure, then give an honest recommendation based on reliability and total cost — not upsells.",
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
                Get a fast quote for Atascocita cylinder repair
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 3,
                  maxWidth: 950,
                  mx: "auto",
                }}
              >
                Send photos and your location — we’ll respond with the best next
                step, a clear estimate, and a plan to reduce downtime for your
                crews and equipment.
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
  title: "Hydraulic Cylinder Repair in Atascocita, TX | Vetech Hydraulics",
  description:
    "Hydraulic cylinder repair in Atascocita, TX with repacking, resealing, rod inspection, and pressure-tested rebuilds. Text photos for a fast quote and turnaround.",
};
