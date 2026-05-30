// Splendora TX service area page — US-59 corridor, Montgomery/Harris County line, rural and construction equipment.
import Head from "next/head";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";

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

const cardSx = {
  p: { xs: 2.5, md: 3 },
  borderRadius: 2,
  bgcolor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(190,202,212,0.14)",
  height: "100%",
};

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{ color: "#fff", fontWeight: 800, fontSize: { xs: "clamp(22px, 5.5vw, 32px)", md: "clamp(28px, 3vw, 40px)" }, textWrap: "balance" }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>{subtitle}</Typography>
    )}
  </Box>
);

export default function SplendoraServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Splendora, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for agriculture, construction & rural equipment in Splendora TX along the US-59 corridor. Veteran-owned. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/splendora-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair Splendora TX, hydraulic repair Splendora Texas, agriculture hydraulic repair Splendora, hydraulic cylinder repacking Splendora TX, construction equipment hydraulic repair US-59 corridor" />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Splendora, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for agriculture, construction & rural equipment in Splendora TX along the US-59 corridor. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/splendora-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: 800, fontSize: { xs: "clamp(26px, 7vw, 36px)", md: "clamp(32px, 4vw, 46px)" }, textWrap: "balance", mb: 2, color: "#fff" }}
          >
            Hydraulic Cylinder Repair in Splendora, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Vetech Hydraulics serves equipment operators in Splendora, TX and the surrounding
            US-59 corridor with hydraulic cylinder repair, repacking, and pressure-tested
            rebuilds. Splendora sits at the Montgomery and Harris County line — a rural stretch
            of US-59 where agriculture, logging, and construction equipment run alongside the
            ongoing residential and commercial growth pushing north from Houston.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Equipment in the Splendora area deals with the kind of conditions that wear out
            hydraulic seals fast — East Texas humidity, heavy clay soils, and the constant
            demands of land-clearing and rural operations. When a cylinder starts leaking on
            a job site or farm, we diagnose it fast, quote it honestly, and rebuild it to
            last — pressure tested before it leaves our hands.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 3, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 30–35 minutes from Splendora via TX-99 or
            FM 1485. Pickup and delivery is available for US-59 corridor customers who need
            help transporting cylinders to the shop.
          </Typography>
          <ConsultationButton />
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Rural, construction, and fleet equipment along the US-59 corridor.">
            Equipment We Service in the Splendora Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Agriculture & Rural Equipment",
                text: "Tractors, hay equipment, loader attachments, livestock handling chutes, and irrigation systems for the farms and ranches along the US-59 corridor. We repack and rebuild ag cylinders that have taken a full season of field punishment.",
              },
              {
                title: "Land Clearing & Forestry Equipment",
                text: "Splendora and the surrounding area still has active land clearing and timber operations. Mulchers, skidders, and forestry equipment deal with debris impact and moisture that shorten seal life. We rebuild these cylinders right.",
              },
              {
                title: "Construction Equipment",
                text: "Residential and commercial development along US-59 keeps excavators, bulldozers, compactors, and skid steers working the Splendora area. We service boom, arm, bucket, and blade cylinders with fast turnarounds for contractors.",
              },
              {
                title: "Dump Trucks & Hauling Equipment",
                text: "Dump trucks and aggregate trailers running US-59 routes depend on telescopic hoist cylinders that have to perform every load. We rebuild these with the correct seals for each stage and pressure test through the full stroke.",
              },
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item.title}>
                <Box sx={cardSx}>
                  <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: { xs: 17, md: 19 }, mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.72, fontSize: 15 }}>{item.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SERVICES LIST */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Pressure tested before return — every repair, every time.">
            Our Repair Services
          </SectionTitle>
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {[
              "Cylinder Repacking & Seal Replacement",
              "Rod Polishing & Reconditioning",
              "Weld Repair — Mounts, Eyes & Barrel Ends",
              "Full Cylinder Teardown & Rebuild",
              "Telescopic Cylinder Repair",
              "Bench Pressure Testing",
              "Pickup & Delivery — US-59 Corridor & Surrounding Area",
              "Photo Estimates — Text a Picture for a Same-Day Quote",
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 2, borderRadius: 2, bgcolor: "rgba(215,25,32,0.08)", border: "1px solid rgba(215,25,32,0.2)" }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#D71920", flexShrink: 0, boxShadow: "0 0 10px rgba(215,25,32,0.5)" }} />
                  <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: 14, md: 15 } }}>{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* FAQ */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "900px", mx: "auto" }}>
          <SectionTitle>Questions from Splendora & US-59 Corridor Operators</SectionTitle>
          {[
            {
              q: "How far is Vetech Hydraulics from Splendora?",
              a: "We're in Magnolia, TX — about 30–35 minutes from Splendora via TX-99 or FM 1485. We also offer pickup and delivery for US-59 corridor customers who can't transport the cylinder themselves.",
            },
            {
              q: "Can you repair cylinders from older farm and ranch equipment?",
              a: "Yes. Older tractors and rural equipment often have cylinders with discontinued OEM seals. We custom-source seals and can fabricate wear components to rebuild cylinders that don't have a current parts catalog.",
            },
            {
              q: "What's the quickest way to get a quote?",
              a: "Text us a photo of the cylinder — front, side, and the damaged area — along with the bore size and what it came off of. We can usually get a ballpark estimate back to you the same day without you having to make the drive first.",
            },
          ].map(({ q, a }) => (
            <Box key={q} sx={{ mb: 3 }}>
              <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: { xs: 16, md: 17 }, mb: 0.75 }}>{q}</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.72, fontSize: 15 }}>{a}</Typography>
              <Divider sx={{ mt: 3, borderColor: "rgba(190,202,212,0.12)" }} />
            </Box>
          ))}
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <ConsultationButton />
          </Box>
        </Container>
      </Section>
    </>
  );
}
