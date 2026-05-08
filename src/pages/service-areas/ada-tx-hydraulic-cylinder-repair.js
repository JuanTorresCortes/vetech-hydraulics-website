// src/pages/service-areas/ada-tx-hydraulic-cylinder-repair.js

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
const serviceSchemaAda = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hydraulic Cylinder Repair in Ada, TX",
  serviceType:
    "Hydraulic cylinder repair, repacking, resealing, rod polishing, testing",
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
    { "@type": "City", name: "Ada", addressRegion: "TX", addressCountry: "US" },
    {
      "@type": "AdministrativeArea",
      name: "Nolan County",
      addressRegion: "TX",
    },
    { "@type": "City", name: "Sweetwater", addressRegion: "TX" },
  ],
};

export default function AdaServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Ada, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair in Ada, TX with repacking, resealing, rod work, and pressure-tested rebuilds. Text a photo for a fast quote and turnaround."
        />
        <link
          rel="canonical"
          href="https://www.vetechhydraulics.com/service-areas/ada-tx-hydraulic-cylinder-repair"
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchemaAda)}
        </script>
      </Head>

      {/* ============================== HERO ============================== */}
      <Hero>
        <Image
          src="/images/service-areas/ada/hero.webp"
          alt="Heavy equipment working near Ada, Texas"
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
                textWrap: "balance",
                mb: 1.25,
              }}
            >
              Hydraulic Cylinder Repair in Ada, Texas
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.86)",
                maxWidth: 880,
                mx: "auto",
                mb: 2.5,
                lineHeight: 1.7,
                fontSize: { xs: 14.5, sm: 16 },
                textWrap: "balance",
              }}
            >
              Pressure-tested cylinder repacking and repair support for
              equipment owners near Ada and the Sweetwater area — built for
              reliability, fair pricing, and fast turnaround.
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
            <SectionTitle subtitle="A little about Ada — and how we support equipment owners in the area.">
              Serving Ada, Nolan County, and the Sweetwater Corridor
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
                    Ada has deep Texas roots
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    Ada was historically tied to railroad development southwest
                    of Sweetwater, and the area later became associated with the
                    Lake Trammell region. While the original community footprint
                    is small today, the work around Nolan County still depends
                    on machines that earn their keep — and cylinders that must
                    hold pressure without leaking.
                  </Typography>

                  <Divider
                    sx={{ my: 2.5, borderColor: "rgba(255,255,255,0.12)" }}
                  />

                  <Typography sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
                    What that means for your equipment
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    If you’re operating construction equipment, farm machinery,
                    or trucks in the Ada/Sweetwater area and a cylinder starts
                    leaking, bypassing, or losing power — we can help you plan a
                    repair that makes sense. Our focus is a clean rebuild,
                    correct seal selection, and verification through testing so
                    reinstall goes smooth.
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
                    src="/images/service-areas/ada/side.webp"
                    alt="Hydraulic cylinder repair support for equipment owners near Ada, Texas"
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
                      Built for real-world uptime
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

      {/* ============================== WHAT WE DO (Unique, but consistent) ============================== */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Focused cylinder work, built around reliability and fair pricing.">
              Cylinder Repair Services for Ada, TX
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  title: "Cylinder Repacking & Resealing",
                  text: "Replace seals, wipers, wear rings, and packing sets to stop leaks and restore performance — done clean and measured, not rushed.",
                },
                {
                  title: "Rod Inspection & Light Reconditioning",
                  text: "We look for scoring, pitting, and damage that kills seals early. If rod work is needed, we’ll explain options clearly.",
                },
                {
                  title: "Bench Testing & Verification",
                  text: "We verify leak-free operation and smooth performance before the cylinder goes back into service.",
                },
                {
                  title: "Straight Answers on Repair vs Replace",
                  text: "If a cylinder is too far gone, we’ll tell you. If it’s repairable, we’ll recommend the best-value path without unnecessary add-ons.",
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
                Fastest way to start: text a photo of the cylinder (rod, gland,
                and leak area) plus any known dimensions. We’ll respond with the
                next best step and a realistic ballpark.
              </Typography>
              <ConsultationButton />
            </Box>
          </Box>
        </Container>
      </Section>

      {/* ============================== FAQ (Ada-specific angles) ============================== */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Quick answers for equipment owners near Ada and Sweetwater.">
              FAQ
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  q: "Do you actually service the Ada area even though it’s small?",
                  a: "Yes. If you’re operating equipment near Ada, Sweetwater, or Nolan County, reach out. We’ll confirm logistics and the quickest way to get you back running.",
                },
                {
                  q: "What do you need to quote my cylinder?",
                  a: "Clear photos of the rod, gland, ports, and the leak area plus any known dimensions. If you have cylinder tag info, send that too.",
                },
                {
                  q: "Can you help if my cylinder keeps failing seals?",
                  a: "Yes. Repeat leaks usually trace back to rod damage, contamination, misalignment, or incorrect seal selection. We inspect for root cause, not just symptoms.",
                },
                {
                  q: "How do I know if I should repair or replace?",
                  a: "We’ll inspect the sealing surfaces and structure, then give an honest recommendation based on reliability and total cost — not upsells.",
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
                Get a fast quote for Ada-area cylinder repair
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
  title: "Hydraulic Cylinder Repair in Ada, TX | Vetech Hydraulics",
  description:
    "Hydraulic cylinder repair in Ada, TX with repacking, resealing, rod work, and pressure-tested rebuilds. Text a photo for a fast quote and turnaround.",
};
