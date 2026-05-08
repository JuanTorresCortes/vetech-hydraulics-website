// src/pages/services.js
import SeoHead from "../components/SeoHead";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  bodyCopySx,
  containerSx,
  headlineSx,
  industrialCardSx,
  primaryCtaSx,
  sectionBase,
} from "../utils/visualStyles";
import cylinder4 from "../image/cylinder-4.webp";
import ConsultationButton from "../components/ConsultationButton";

/* ------------------------------ Styled UI ------------------------------ */
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
  minHeight: "68vh",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: 0,
  overflow: "hidden", // prevents tiny horizontal scroll from 100vw
  [theme.breakpoints.down("lg")]: { minHeight: "64vh" },
  [theme.breakpoints.down("md")]: { minHeight: "60svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "56svh" },
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

/* --------------------------------- Page -------------------------------- */

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services | Vetech Hydraulics"
        description="Hydraulic cylinder repair services focused on precision rebuilding, fair pricing, pressure testing, and minimizing downtime."
        path="/services"
      />

      <Box component="main">
        {/* ============================== HERO ============================== */}
        <Hero>
          <Image
            src={cylinder4}
            alt="Hydraulic equipment background"
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
              ...containerSx,
              pb: { xs: 4, md: 6 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box sx={{ maxWidth: 1120, mx: "auto" }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "clamp(26px, 7vw, 34px)", md: 48 },
                  lineHeight: 1.05,
                  textWrap: "balance",
                }}
              >
                Cylinder Repair Services
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  ...bodyCopySx,
                  maxWidth: 760,
                  mx: "auto",
                }}
              >
                Precision-driven hydraulic cylinder repair built to reduce
                leaks, improve seal life, and get equipment back in service fast
                — without surprises on pricing.
              </Typography>

              <Box sx={{ mt: 2.5 }}>
                <ConsultationButton />
              </Box>
            </Box>
          </Container>
        </Hero>

        {/* ============================= WHAT WE DO ============================= */}
        <Section>
          <Container maxWidth={false} disableGutters sx={containerSx}>
            <Box sx={{ maxWidth: 1120, mx: "auto" }}>
              <SectionTitle subtitle="A cylinder rebuild isn’t just “swap seals.” We rebuild with measurements, cleanliness, and real-world reliability in mind.">
                Cylinder Repair, Done the Right Way
              </SectionTitle>

              <Stack spacing={2.25} sx={{ color: "rgba(255,255,255,0.86)" }}>
                <Typography sx={bodyCopySx}>
                  At Vetech Hydraulics, our focus is simple: repair hydraulic
                  cylinders correctly, test them, and help you avoid repeat
                  downtime. We work with contractors, fleets, and equipment
                  owners who need dependable cylinders under pressure — not
                  guesswork.
                </Typography>

                <Typography sx={bodyCopySx}>
                  Our rebuild approach is precision-driven and detail-oriented.
                  We fully disassemble, clean, inspect, and measure critical
                  components. If we find the true cause of failure —
                  contamination, rod damage, barrel scoring, worn wear bands,
                  misalignment — we address it so your repair lasts longer.
                </Typography>

                <Typography sx={bodyCopySx}>
                  We don’t believe in overcharging, “upselling,” or marking up
                  materials just because we can. We look for the most affordable
                  solution that still protects quality. When an outside service
                  is required, we help you choose the best value option — and we
                  keep it transparent.
                </Typography>

                <Typography sx={bodyCopySx}>
                  Long-term, we’re building more than a shop — we’re building a
                  community network that helps local businesses save money and
                  improve uptime. Our priority is excellent service first.
                  Profit comes from doing the work right, not from hidden
                  markups.
                </Typography>
              </Stack>

              <Divider
                sx={{
                  my: { xs: 4, md: 5 },
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              />

              {/* Fair Pricing Promise */}
              <Box
                sx={{
                  ...industrialCardSx,
                  p: { xs: 2.5, sm: 3.5 },
                }}
              >
                <Typography
                  sx={{
                    color: "#6EC1FF",
                    fontWeight: 900,
                    fontSize: { xs: 16, sm: 18 },
                    mb: 1,
                  }}
                >
                  Our Fair Pricing Promise
                </Typography>

                <Grid container spacing={2}>
                  {[
                    {
                      k: "No upsells or pressure",
                      v: "We recommend what your cylinder needs — not what makes the ticket bigger.",
                    },
                    {
                      k: "Transparent materials",
                      v: "Seal kits, parts, and outside services are discussed up front.",
                    },
                    {
                      k: "Quality stays first",
                      v: "We don’t cut corners to chase a quick margin. Repairs are built to last.",
                    },
                    {
                      k: "Savings passed to you",
                      v: "We prioritize the best value solution without sacrificing reliability.",
                    },
                  ].map((item, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Box sx={{ pr: { sm: 2 } }}>
                        <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                          {item.k}
                        </Typography>
                        <Typography
                          sx={{ color: "rgba(255,255,255,0.82)", mt: 0.5 }}
                        >
                          {item.v}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Container>
        </Section>

        {/* ============================= PROCESS ============================= */}
        <AltSection>
          <Container maxWidth={false} disableGutters sx={containerSx}>
            <Box sx={{ maxWidth: 1120, mx: "auto" }}>
              <SectionTitle subtitle="Simple, transparent, efficient.">
                Our Repair Process
              </SectionTitle>

              <Grid container spacing={3}>
                {[
                  {
                    step: "1",
                    title: "Check-In & Inspect",
                    text: "Receive, clean, disassemble, and measure components to identify the true root cause of failure.",
                  },
                  {
                    step: "2",
                    title: "Quote & Approve",
                    text: "You get a clear estimate for seals, parts, and labor before work begins.",
                  },
                  {
                    step: "3",
                    title: "Repack / Rebuild",
                    text: "Install seals and wear items, address rod/barrel issues, and correct problems that shorten seal life.",
                  },
                  {
                    step: "4",
                    title: "Pressure Test & Deliver",
                    text: "Verify leak-free performance and smooth operation before returning your cylinder ready to install.",
                  },
                ].map((p, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Box
                      sx={{
                        ...industrialCardSx,
                        p: 3,
                        height: "100%",
                        color: "#fff",
                      }}
                    >
                      <Typography sx={{ color: "#6EC1FF", fontWeight: 900 }}>
                        Step {p.step}
                      </Typography>
                      <Typography sx={{ fontWeight: 900, mt: 0.5 }}>
                        {p.title}
                      </Typography>
                      <Typography
                        sx={{ color: "rgba(255,255,255,0.85)", mt: 0.75 }}
                      >
                        {p.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    maxWidth: 860,
                    mx: "auto",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  If you want a quick estimate, text us a photo and basic
                  dimensions. We’ll tell you what we think before you haul it
                  in.
                </Typography>
                <ConsultationButton />
              </Box>
            </Box>
          </Container>
        </AltSection>

        {/* ============================= COVERAGE CTA ============================= */}
        <Section>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ ...containerSx, textAlign: "center" }}
          >
            <Box sx={{ maxWidth: 1120, mx: "auto" }}>
              <SectionTitle subtitle="Montgomery, Magnolia, Conroe, Willis, The Woodlands, and greater Houston">
                See our service areas
              </SectionTitle>

              <Typography
                sx={{
                  ...bodyCopySx,
                  maxWidth: 760,
                  mx: "auto",
                  mb: 3,
                }}
              >
                Check coverage details, pickup options, and what to expect for
                your equipment so you can plan downtime and get back to work
                faster.
              </Typography>

              <Button
                component={Link}
                href="/service-areas"
                variant="contained"
                color="secondary"
                sx={{ ...primaryCtaSx, textTransform: "uppercase" }}
              >
                View service areas
              </Button>
            </Box>
          </Container>
        </Section>

        {/* ================================ CTA ================================ */}
        <Section>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ ...containerSx, textAlign: "center" }}
          >
            <Box sx={{ maxWidth: 1120, mx: "auto" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: 26, sm: 30, md: 36 },
                  textWrap: "balance",
                }}
              >
                Need a fast quote?
              </Typography>
              <ConsultationButton />
            </Box>
          </Container>
        </Section>
      </Box>
    </>
  );
}
