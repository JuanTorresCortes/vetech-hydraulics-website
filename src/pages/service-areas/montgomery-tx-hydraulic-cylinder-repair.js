// Montgomery TX — Lake Conroe area, ag, ranch, and construction equipment.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/montgomery_hero_img.webp";

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
    <Typography component="h2" variant="h3" sx={{ color: "#fff", fontWeight: 800, fontSize: { xs: "clamp(22px, 5.5vw, 32px)", md: "clamp(28px, 3vw, 40px)" }, textWrap: "balance" }}>
      {children}
    </Typography>
    {subtitle && <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>{subtitle}</Typography>}
  </Box>
);

export default function MontgomeryServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Montgomery, TX | Vetech Hydraulics</title>
        <meta name="description" content="Hydraulic cylinder repair for agriculture, ranch & construction equipment in Montgomery TX and the Lake Conroe area. Veteran-owned. Call (936) 249-6042 for a fast quote." />
        <meta name="keywords" content="hydraulic cylinder repair Montgomery TX, hydraulic repair Montgomery Texas, hydraulic cylinder repacking Montgomery TX, hydraulic hose repair Montgomery, Montgomery County hydraulic repair" />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/montgomery-tx-hydraulic-cylinder-repair`} />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Montgomery, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for agriculture, ranch & construction equipment in Montgomery TX. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/montgomery-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Montgomery TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Montgomery, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves Montgomery, TX and the Lake Conroe area with hydraulic cylinder repair, repacking, and pressure-tested rebuilds for agriculture, ranch, and construction equipment. Veteran-owned, based minutes away in Magnolia.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* BODY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Montgomery sits at the heart of Montgomery County — a mix of rural ranches, lake-area properties, and active construction that keeps a wide variety of hydraulic equipment running year-round. From hay equipment on the farms off SH-105 to excavators on the Lake Conroe-area development projects, the hydraulic systems on that equipment wear out and need dependable repair.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia — about 15 minutes from Montgomery via FM 1097 or SH-105. Most repacks are done in 24–48 hours. Text a photo and we can often have seals staged before you drop off.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Ranch, lake-area construction, and fleet equipment — we cover it all.">
            Equipment We Service in the Montgomery Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { title: "Agriculture & Ranch Equipment", text: "Tractors, hay equipment, loader attachments, livestock chutes, and irrigation systems for ranches and farms throughout Montgomery County. We rebuild ag cylinders that have taken a full season of use." },
              { title: "Construction & Lake Area Development", text: "Residential and commercial development around Lake Conroe keeps excavators, bulldozers, and graders busy. We service boom, arm, bucket, and blade cylinders with fast turnarounds." },
              { title: "Dump Trucks & Aggregate Haulers", text: "Telescopic hoist cylinders on dump trucks serving local job sites cycle hard every day. We rebuild multi-stage cylinders with correct seals and full pressure testing before return." },
              { title: "Utility & Municipal Equipment", text: "Road department equipment, backhoes, and public works machinery serving Montgomery and the surrounding area. We support commercial and municipal accounts with reliable turnaround times." },
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

      {/* SERVICES */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Pressure tested before return — every repair, every time.">Our Repair Services</SectionTitle>
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {["Cylinder Repacking & Seal Replacement", "Rod Polishing & Reconditioning", "Weld Repair — Mounts, Eyes & Barrel Ends", "Full Cylinder Teardown & Rebuild", "Telescopic Cylinder Repair", "Bench Pressure Testing", "Pickup & Delivery — Montgomery County Area", "Photo Estimates — Text a Picture for a Same-Day Quote"].map((item) => (
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
          <SectionTitle>Questions from Montgomery Area Operators</SectionTitle>
          {[
            { q: "How far is Vetech Hydraulics from Montgomery?", a: "We're in Magnolia — about 15 minutes from Montgomery via FM 1097 or SH-105. We also offer pickup and delivery for operators who can't transport the cylinder themselves." },
            { q: "Can you repair ranch and ag cylinders quickly during busy season?", a: "Yes. Text us a photo of the cylinder early and we can often have seals staged before you arrive — which cuts turnaround time significantly. We understand that ag downtime during planting or harvest costs more than the repair." },
            { q: "Do you work on older tractor cylinders where OEM parts are discontinued?", a: "Absolutely. We custom-source seals and can machine wear components for cylinders that don't have a current parts catalog. Older doesn't mean unrepairable." },
          ].map(({ q, a }) => (
            <Box key={q} sx={{ mb: 3 }}>
              <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: { xs: 16, md: 17 }, mb: 0.75 }}>{q}</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.72, fontSize: 15 }}>{a}</Typography>
              <Divider sx={{ mt: 3, borderColor: "rgba(190,202,212,0.12)" }} />
            </Box>
          ))}
          <Box sx={{ mt: 4, textAlign: "center" }}><ConsultationButton /></Box>
        </Container>
      </Section>
    </>
  );
}
