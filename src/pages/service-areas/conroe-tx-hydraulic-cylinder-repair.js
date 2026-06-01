// Conroe TX — largest nearby city, diverse heavy equipment, I-45 corridor.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/conroe_hero_img.webp";

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

export default function ConroeServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Conroe, TX | Vetech Hydraulics</title>
        <meta name="description" content="Hydraulic cylinder repair for construction, fleets & industrial equipment in Conroe TX. Veteran-owned shop in Magnolia. Call (936) 249-6042 for a fast quote." />
        <meta name="keywords" content="hydraulic cylinder repair Conroe TX, hydraulic repair Conroe Texas, hydraulic cylinder repacking Conroe, construction equipment hydraulic repair Conroe TX, fleet hydraulic repair Conroe" />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/conroe-tx-hydraulic-cylinder-repair`} />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Conroe, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for construction, fleets & industrial equipment in Conroe TX. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/conroe-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Conroe TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Conroe, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves Conroe and the surrounding I-45 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds for construction fleets, dump trucks, waste equipment, and industrial machinery. Veteran-owned, based in Magnolia — about 20 minutes away.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* BODY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Conroe is the county seat of Montgomery County and one of the fastest-growing cities in Texas. The I-45 corridor through Conroe carries a constant mix of construction equipment, commercial fleets, dump trucks, and municipal machinery — all of it dependent on hydraulic cylinders that get hard use every day.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            When a cylinder blows on a Conroe job site or fleet route, downtime costs add up fast. We focus on accurate diagnosis, honest quotes, and fast turnarounds — every cylinder pressure tested before it goes back to work.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Construction, fleets, waste equipment, and industrial — we service it all.">
            Equipment We Service in the Conroe Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { title: "Construction & Excavation Equipment", text: "Active development throughout Conroe and south Montgomery County keeps excavators, bulldozers, compactors, and cranes on job sites year-round. We repair boom, arm, bucket, and blade cylinders with fast turnarounds." },
              { title: "Waste & Refuse Equipment", text: "Trash trucks and rear-loader compactors servicing Conroe-area routes put extreme demand on hydraulic cylinders. We specialize in waste fleet cylinder repair and rebuilds that keep collection schedules on track." },
              { title: "Dump Trucks & Aggregate Haulers", text: "Telescopic hoist cylinders on dump trucks running I-45 routes cycle hard under heavy loads every day. We rebuild these with the correct stage-specific seals and full pressure testing." },
              { title: "Municipal & County Equipment", text: "Road graders, backhoes, boom mowers, and public works equipment for the City of Conroe and Montgomery County operations. We support commercial and municipal accounts with reliable turnaround times." },
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
            {["Cylinder Repacking & Seal Replacement", "Rod Polishing & Reconditioning", "Weld Repair — Mounts, Eyes & Barrel Ends", "Full Cylinder Teardown & Rebuild", "Telescopic Cylinder Repair", "Bench Pressure Testing", "Pickup & Delivery — Conroe & Montgomery County", "Photo Estimates — Text a Picture for a Same-Day Quote"].map((item) => (
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
          <SectionTitle>Questions from Conroe Equipment Operators</SectionTitle>
          {[
            { q: "How far is your shop from Conroe?", a: "We're in Magnolia, TX — about 20 minutes from Conroe via FM 1488 or SH-105. Conroe-area customers are welcome to drop off directly, or we can arrange pickup and delivery for fleet accounts." },
            { q: "Can you handle high-cycle cylinders from waste fleets and dump trucks?", a: "Yes. Telescopic and single-stage cylinders from refuse trucks and dump trailers are among our most common repairs. We rebuild them with the correct seals for each stage and pressure test through the full stroke." },
            { q: "Do you work with commercial fleet accounts on a recurring basis?", a: "Yes. If you manage equipment for a contractor or operate a fleet, reach out and we can discuss turnaround expectations and how to structure the relationship so your equipment gets prioritized." },
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
