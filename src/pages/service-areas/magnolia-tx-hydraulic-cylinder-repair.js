// Magnolia TX — home base city page with hero image and full expanded content.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/magnolia_hero_img.webp";

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

export default function MagnoliaServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Magnolia, TX | Vetech Hydraulics</title>
        <meta name="description" content="Veteran-owned hydraulic cylinder repair in Magnolia, TX — our home base. Fast repacking, rebuilds & pressure testing for ag, construction & fleet equipment. Call (936) 249-6042." />
        <meta name="keywords" content="hydraulic cylinder repair Magnolia TX, hydraulic repair Magnolia Texas, hydraulic cylinder repacking Magnolia TX, hydraulic service Magnolia TX 77354" />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/magnolia-tx-hydraulic-cylinder-repair`} />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Magnolia, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Veteran-owned hydraulic cylinder repair in Magnolia, TX. Fast repacking, rebuilds & pressure testing. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/magnolia-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Magnolia TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Magnolia, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Magnolia is our home. Veteran-owned and based right here in the 77354 — we repair hydraulic cylinders for local builders, land-clearing crews, ag operations, and equipment owners who need fast, honest service without a long drive.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* ABOUT */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Vetech Hydraulics is based in Magnolia, TX — so when local equipment goes down, you're not waiting on a shop two counties away. We repair hydraulic cylinders for the full range of equipment that keeps Magnolia running: tractors and loader attachments on the farms along FM 1774, excavators and bulldozers on the residential and commercial job sites pushing north from 249, and fleet equipment from operators working the whole corridor.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            Every cylinder we repair is pressure tested before it leaves the shop. That's not a sales line — it's how we confirm the rebuild held before your equipment goes back to work.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="From local farms to job sites — we repair what keeps Magnolia working.">
            Equipment We Service in Magnolia
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { title: "Agriculture & Land Equipment", text: "Tractors, loader attachments, hay equipment, and tillage tools for the farms and rural properties throughout the Magnolia area. We repack and rebuild ag cylinders that have taken a full season of work." },
              { title: "Construction & Land Clearing", text: "Residential growth along SH-249 and FM 1488 keeps excavators, bulldozers, and skid steers busy around Magnolia. We repair boom, arm, bucket, and blade cylinders for local contractors and crews." },
              { title: "Dump Trucks & Trailers", text: "Telescopic hoist cylinders on dump trucks and aggregate trailers running local jobs cycle hard every day. We rebuild multi-stage cylinders with the correct seals and full pressure testing." },
              { title: "Fleet & Commercial Equipment", text: "Fleet operators, utility trucks, and commercial equipment based in Magnolia benefit from being close to the shop. Drop it off in the morning — most repacks are ready the next day." },
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
            {["Cylinder Repacking & Seal Replacement", "Rod Polishing & Reconditioning", "Weld Repair — Mounts, Eyes & Barrel Ends", "Full Cylinder Teardown & Rebuild", "Telescopic Cylinder Repair", "Bench Pressure Testing", "Same-Day Drop-Off Available — Magnolia Location", "Photo Estimates — Text a Picture for a Same-Day Quote"].map((item) => (
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
          <SectionTitle>Questions from Magnolia Equipment Owners</SectionTitle>
          {[
            { q: "How fast can you turn around a repair for a local Magnolia customer?", a: "Most single-stage cylinder repacks are done in 24–48 hours once we have the cylinder and the correct seals in hand. Local drop-offs are welcome during business hours — text ahead with photos and we can often have seals staged before you arrive." },
            { q: "Do you work on older or custom cylinders?", a: "Yes. Older tractors and specialty equipment often have cylinders where standard kits don't fit. We custom-source seals and can fabricate wear components when OEM parts are no longer available." },
            { q: "Can I just text a photo for a quote?", a: "Absolutely. Text us a photo of the cylinder — front, side, and the damaged area — plus the bore size and what it came off of. We'll get you a ballpark estimate the same day so you know what you're dealing with before dropping it off." },
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
