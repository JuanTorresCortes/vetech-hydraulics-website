// Cleveland TX service area page — Liberty/San Jacinto County, timber, oil field, Big Thicket region, US-59/SH-105 corridor.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/cleveland_hero_img.webp";

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

export default function ClevelandServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Cleveland, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for timber, oil field, construction & agriculture equipment in Cleveland TX and the Liberty/San Jacinto County area. Veteran-owned. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/cleveland-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair Cleveland TX, hydraulic repair Liberty County Texas, oil field hydraulic cylinder repair Cleveland TX, timber forestry hydraulic repair Cleveland Texas, hydraulic cylinder repacking San Jacinto County" />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Cleveland, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for timber, oil field, construction & agriculture equipment in Cleveland TX and the Liberty/San Jacinto County area. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/cleveland-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Cleveland TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Cleveland, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves equipment operators in Cleveland, TX and the surrounding Liberty and San Jacinto County area with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Cleveland sits at the intersection of US-59 and SH-105 — the eastern gateway to the Big Thicket region, where timber operations, oil field service equipment, and agriculture run alongside steady construction activity.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* HERO BODY COPY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            The industries concentrated around Cleveland put real demands on hydraulic equipment.
            Timber and forestry operations in the Big Thicket push skidders, feller bunchers, and
            log loaders through constant cycles in wet, debris-heavy conditions that wear seals
            down faster than almost any other environment. Oil field service equipment — workover
            rigs, vacuum trucks, and pipe-handling machinery — runs hard on tight field schedules
            where a leaking cylinder means a crew standing idle.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 45–50 minutes from Cleveland via SH-105 west
            through Coldspring or via US-59 north to TX-99. Drop-offs are welcome at our shop,
            and pickup and delivery is available for Liberty and San Jacinto County customers
            who need help moving cylinders.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Timber, oil field, construction, and agriculture — we service it all.">
            Equipment We Service in the Cleveland Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Timber & Forestry Equipment",
                text: "Feller bunchers, skidders, log loaders, and forestry mulchers working the Big Thicket and San Jacinto County timber tracts cycle cylinders in conditions — moisture, bark debris, and constant shock loads — that destroy inferior seals. We rebuild forestry cylinders with compounds matched to the environment.",
              },
              {
                title: "Oil Field Service Equipment",
                text: "Workover rigs, vacuum trucks, pipe-handling equipment, and well service vehicles operating in Liberty County oil fields depend on hydraulic cylinders that cannot fail mid-job. We repair and pressure test oil field cylinders with the urgency that field schedules require.",
              },
              {
                title: "Construction & Land Clearing",
                text: "Residential and commercial growth along the US-59 and SH-105 corridors keeps excavators, bulldozers, and skid steers working around Cleveland. We service boom, arm, bucket, and blade cylinders with fast turnarounds that keep job sites on schedule.",
              },
              {
                title: "Agriculture & Ranch Equipment",
                text: "Farms and ranches throughout Liberty and San Jacinto County run tractors, hay equipment, loader attachments, and livestock handling gear that depend on hydraulic systems built to take seasonal punishment. We rebuild ag cylinders right and pressure test before they go back to work.",
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
              "Pickup & Delivery — Liberty & San Jacinto County Area",
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
          <SectionTitle>Questions from Cleveland & Liberty/San Jacinto County Operators</SectionTitle>
          {[
            {
              q: "Do you repair cylinders from oil field service equipment?",
              a: "Yes. Workover rig cylinders, vacuum truck hydraulics, and pipe-handling equipment are all in our wheelhouse. Oil field schedules are tight — we prioritize diagnosis and quote turnaround so you know what you're dealing with before a job gets pushed.",
            },
            {
              q: "Can you handle forestry and timber equipment seals?",
              a: "Absolutely. Forestry cylinders — feller bunchers, skidders, log loaders — work in some of the harshest conditions for hydraulic seals. We select seal compounds appropriate for the debris, moisture, and shock load environment so the rebuild lasts.",
            },
            {
              q: "How far is your shop from Cleveland?",
              a: "We're in Magnolia, TX — about 45–50 minutes from Cleveland via SH-105. Drop-offs are welcome at the shop, and we offer pickup and delivery for Liberty and San Jacinto County customers who can't transport the cylinder themselves.",
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
