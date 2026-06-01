// Huntsville TX service area page — Walker County, agriculture, timber, and state/university equipment.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/huntsville_hero_img.webp";

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

export default function HuntsvilleServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Huntsville, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for agriculture, timber & construction equipment in Huntsville TX and Walker County. Veteran-owned. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/huntsville-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair Huntsville TX, hydraulic repair Walker County Texas, agriculture hydraulic repair Huntsville, hydraulic cylinder repacking Huntsville TX, timber equipment hydraulic repair Walker County" />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Huntsville, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for agriculture, timber & construction equipment in Huntsville TX and Walker County. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/huntsville-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Huntsville TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Huntsville, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves equipment operators in Huntsville, TX and Walker County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Huntsville sits along I-45 in the heart of the Piney Woods — a region with active timber operations, agriculture, and a strong base of construction and municipal equipment that depends on working hydraulics every day.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* HERO BODY COPY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Walker County&apos;s mix of pine timber, cattle ranching, and state facility
            operations means a wide variety of equipment is in service year-round. From
            forestry skidders and log loaders to ranch tractors and highway department graders,
            the hydraulic cylinders on that equipment deal with the kind of real-world conditions
            — mud, heat, heavy loads — that wear out seals fast.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 3, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 45 minutes south of Huntsville via I-45.
            Pickup and delivery is available for Walker County customers who need help
            getting cylinders to and from our shop.
          </Typography>
          <ConsultationButton />
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="From pine timber to cattle ranches — we repair what keeps Walker County moving.">
            Equipment We Service in the Huntsville Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Timber & Forestry Equipment",
                text: "Walker County is pine timber country. Skidders, log loaders, feller-bunchers, and forestry mulchers working the woods around Huntsville deal with constant shock loads and moisture exposure. We rebuild forestry cylinders that standard shops won't touch.",
              },
              {
                title: "Agriculture & Ranch Equipment",
                text: "Tractors, hay equipment, livestock chutes, and loader attachments for the cattle and farming operations throughout Walker County. When a ranch cylinder goes down mid-season, we move fast to get it back in service.",
              },
              {
                title: "Construction & Highway Equipment",
                text: "I-45 corridor construction and county road projects keep excavators, bulldozers, motor graders, and compactors busy in and around Huntsville. We service boom, arm, bucket, and blade cylinders for contractors working these jobs.",
              },
              {
                title: "Municipal & Institutional Equipment",
                text: "Huntsville has a significant base of government and institutional operations. Road department graders, backhoes, utility trucks, and maintenance equipment all rely on hydraulic systems that need dependable repair support.",
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
              "Pickup & Delivery — Walker County Area",
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
          <SectionTitle>Questions from Huntsville & Walker County Operators</SectionTitle>
          {[
            {
              q: "How far is your shop from Huntsville?",
              a: "We're in Magnolia, TX — about 45 minutes south of Huntsville via I-45. We also offer pickup and delivery for Walker County customers who can't transport the cylinder themselves. Call or text us to work out the logistics.",
            },
            {
              q: "Can you repair forestry cylinders with hard-to-find seals?",
              a: "Yes. Timber and forestry equipment often has non-standard cylinders with seals that aren't in regular kits. We custom-source seals and can fabricate wear components when OEM parts aren't available through normal channels.",
            },
            {
              q: "What's the fastest way to get a quote without driving down?",
              a: "Text us a photo of the cylinder — front, side, and the damaged area — along with the bore size and what equipment it came off. We can typically turn around a ballpark estimate the same day so you know what you're dealing with before making the trip.",
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
