// New Caney TX service area page — Montgomery County, US-59 growth corridor, construction and residential development.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/newCaney_hero_img.webp";

const zoomOut = keyframes`
  from { transform: scale(1.07); }
  to   { transform: scale(1.0);  }
`;

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

export default function NewCaneyServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in New Caney, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for construction, agriculture & fleet equipment in New Caney TX and east Montgomery County. Veteran-owned. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/new-caney-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair New Caney TX, hydraulic repair Montgomery County Texas, construction equipment hydraulic repair New Caney, hydraulic cylinder repacking New Caney TX, agriculture hydraulic repair east Montgomery County" />
        <meta property="og:title" content="Hydraulic Cylinder Repair in New Caney, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for construction, agriculture & fleet equipment in New Caney TX and east Montgomery County. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/new-caney-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in New Caney TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in New Caney, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves equipment operators in New Caney, TX and east Montgomery County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. New Caney sits along US-59 in one of the fastest-growing corridors north of Houston — residential and commercial development has brought a significant concentration of construction equipment, dump trucks, and land-clearing machinery to the area.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* HERO BODY COPY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            East Montgomery County also has active agriculture and rural operations between
            the job sites — tractors, hay equipment, and ranch machinery that run alongside
            the construction boom. Whether it&apos;s a excavator with a leaking arm cylinder
            or a loader with a blown rod seal, we rebuild it right and pressure test it
            before it leaves the shop.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 35 minutes from New Caney via TX-99 or
            FM 1485. Pickup and delivery is available for Montgomery County customers
            who need help moving cylinders to and from the shop.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Construction, land clearing, agriculture, and fleet — we cover it all.">
            Equipment We Service in the New Caney Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Construction & Land Clearing Equipment",
                text: "New Caney's rapid growth keeps excavators, bulldozers, skid steers, and forestry mulchers busy clearing land for subdivisions and commercial projects. We repair boom, arm, bucket, blade, and mulcher head cylinders with turnarounds that keep crews on schedule.",
              },
              {
                title: "Dump Trucks & Aggregate Haulers",
                text: "Telescopic hoist cylinders on dump trucks serving east Montgomery County job sites cycle constantly under heavy loads. We rebuild multi-stage cylinders with the correct stage-specific seals and full pressure testing before return.",
              },
              {
                title: "Agriculture & Ranch Equipment",
                text: "Between the job sites, east Montgomery County still has working farms and ranches. Tractors, loaders, hay equipment, and livestock handling gear all have hydraulic cylinders that need the same quality repair as heavy construction equipment.",
              },
              {
                title: "Utility & Boom Equipment",
                text: "Utility trucks, boom lifts, and service vehicles operating throughout the New Caney area rely on hydraulic systems that have to work every time. We service a wide range of utility and aerial equipment cylinders.",
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
              "Pickup & Delivery — East Montgomery County Area",
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
          <SectionTitle>Questions from New Caney & East Montgomery County Operators</SectionTitle>
          {[
            {
              q: "How far is Vetech Hydraulics from New Caney?",
              a: "We're in Magnolia, TX — about 35 minutes from New Caney via TX-99 or FM 1485. We also offer pickup and delivery for east Montgomery County customers who can't transport the cylinder themselves.",
            },
            {
              q: "Can you handle same-week turnarounds for construction equipment?",
              a: "Most single-stage cylinder repacks are done in 24–48 hours once we have the cylinder and seals in hand. If you reach out early with photos and specs, we can often have seals staged before you drop off, which speeds things up significantly.",
            },
            {
              q: "Do you repair cylinders for land-clearing and forestry mulcher equipment?",
              a: "Yes. Mulcher head and land-clearing equipment cylinders deal with heavy debris impact and constant shock loads. We rebuild these with upgraded seal compounds when appropriate and pressure test them before they go back on the machine.",
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
