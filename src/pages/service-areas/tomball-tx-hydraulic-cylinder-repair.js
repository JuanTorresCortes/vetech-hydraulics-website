// Tomball TX — SH-249 corridor, agriculture, oil history, and active construction.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/tomball_hero_img.webp";

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

export default function TomballServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Tomball, TX | Vetech Hydraulics</title>
        <meta name="description" content="Hydraulic cylinder repair for agriculture, construction & fleet equipment in Tomball TX along the SH-249 corridor. Veteran-owned. Call (936) 249-6042 for a fast quote." />
        <meta name="keywords" content="hydraulic cylinder repair Tomball TX, hydraulic repair Tomball Texas, hydraulic cylinder repacking Tomball, agriculture hydraulic repair Tomball TX, construction equipment hydraulic repair Tomball" />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/tomball-tx-hydraulic-cylinder-repair`} />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Tomball, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for agriculture, construction & fleet equipment in Tomball TX. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/tomball-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Tomball TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Tomball, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves Tomball, TX and the SH-249 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Agriculture, construction, and fleet equipment — veteran-owned, based in Magnolia about 20 minutes away.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* BODY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Tomball has a unique character — a community with deep agricultural and oil-patch roots that has grown into one of the most active commercial corridors northwest of Houston. The SH-249 tollway expansion has accelerated construction activity, and the surrounding area still has working farms, ranch properties, and industrial operations that run hydraulic equipment year-round.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia — about 20 minutes from Tomball via FM 2920 or SH-249. Drop-offs welcome, and we can arrange pickup and delivery for operators who need it.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Agriculture, construction, and fleet equipment along the SH-249 corridor.">
            Equipment We Service in the Tomball Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { title: "Agriculture & Ranch Equipment", text: "Tractors, loader attachments, hay equipment, and livestock handling chutes for the farms and rural properties between Tomball and Magnolia. We repack and rebuild ag cylinders that have worked a full season." },
              { title: "Construction & Land Clearing", text: "SH-249 corridor growth keeps excavators, bulldozers, and skid steers busy. We repair boom, arm, bucket, and blade cylinders for contractors working Tomball-area residential and commercial projects." },
              { title: "Dump Trucks & Aggregate Haulers", text: "Telescopic hoist cylinders on dump trucks serving Tomball job sites cycle hard every day. We rebuild multi-stage cylinders with correct seals for each stage and full pressure testing before return." },
              { title: "Commercial Fleet & Work Trucks", text: "Fleet operators based in the Tomball area benefit from having the shop nearby. Utility trucks, service vehicles, and commercial equipment with hydraulic systems get the same quality repair as heavy iron." },
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
            {["Cylinder Repacking & Seal Replacement", "Rod Polishing & Reconditioning", "Weld Repair — Mounts, Eyes & Barrel Ends", "Full Cylinder Teardown & Rebuild", "Telescopic Cylinder Repair", "Bench Pressure Testing", "Pickup & Delivery — Tomball & SH-249 Corridor", "Photo Estimates — Text a Picture for a Same-Day Quote"].map((item) => (
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
          <SectionTitle>Questions from Tomball Equipment Operators</SectionTitle>
          {[
            { q: "How far is your shop from Tomball?", a: "We're in Magnolia — about 20 minutes from Tomball via FM 2920 or SH-249. Drop-offs are welcome during business hours. We also offer pickup and delivery for operators who need it." },
            { q: "Can you repair cylinders for older ranch and ag equipment?", a: "Yes. Older farm and ranch equipment often has cylinders where standard seal kits don't apply. We custom-source seals and fabricate wear components when OEM parts are no longer available." },
            { q: "What's the best way to get a fast quote?", a: "Text a photo of the cylinder — front, side, and the damaged area — plus the bore size and what equipment it came off of. We can usually send a ballpark estimate the same day so you know what you're looking at before dropping it off." },
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
