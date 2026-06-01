// Spring TX — dense suburban/industrial mix, I-45 & SH-99, construction and fleet equipment.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/spring_hero_img.webp";

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

export default function SpringServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Spring, TX | Vetech Hydraulics</title>
        <meta name="description" content="Hydraulic cylinder repair for construction, fleet & commercial equipment in Spring TX along the I-45 and SH-99 corridors. Veteran-owned. Call (936) 249-6042." />
        <meta name="keywords" content="hydraulic cylinder repair Spring TX, hydraulic repair Spring Texas, hydraulic cylinder repacking Spring TX, construction equipment hydraulic repair Spring, fleet hydraulic repair Spring TX" />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/spring-tx-hydraulic-cylinder-repair`} />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Spring, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for construction, fleet & commercial equipment in Spring TX. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/spring-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Spring TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Spring, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves Spring, TX and the I-45 / SH-99 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds for construction crews, commercial fleets, and equipment operators throughout the area.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* BODY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Spring sits along I-45 at the northern edge of Houston — a dense mix of residential growth, commercial development, and industrial activity that keeps a constant flow of construction equipment, dump trucks, and utility vehicles in service. The SH-99 Grand Parkway has accelerated growth in the area, adding to the volume of heavy equipment working the Spring corridor.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 30 minutes from Spring via SH-99. Drop-offs are welcome, and we offer pickup and delivery for fleet accounts and operators who need logistical support getting cylinders to the shop.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Construction, fleets, waste equipment, and commercial — we service it all.">
            Equipment We Service in the Spring Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { title: "Construction & Excavation Equipment", text: "Active residential and commercial development along SH-99 and I-45 keeps excavators, cranes, compactors, and skid steers working Spring job sites constantly. We repair boom, arm, bucket, and blade cylinders with fast turnarounds." },
              { title: "Commercial Fleets & Dump Trucks", text: "Aggregate haulers, roll-off trucks, and materials delivery vehicles operating Spring routes depend on hoist cylinders that have to perform every load. We rebuild and pressure test telescopic and single-stage cylinders." },
              { title: "Waste & Refuse Equipment", text: "Rear-loader compactors and trash trucks serving Spring-area residential routes put heavy demand on hydraulic cylinders. We repair and rebuild waste fleet cylinders to keep collection schedules running." },
              { title: "Utility & Service Equipment", text: "Boom trucks, bucket trucks, and utility service vehicles operating throughout the Spring area rely on hydraulic systems that have to work without fail. We service a wide range of utility equipment cylinders." },
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
            {["Cylinder Repacking & Seal Replacement", "Rod Polishing & Reconditioning", "Weld Repair — Mounts, Eyes & Barrel Ends", "Full Cylinder Teardown & Rebuild", "Telescopic Cylinder Repair", "Bench Pressure Testing", "Pickup & Delivery — Spring & North Houston Area", "Photo Estimates — Text a Picture for a Same-Day Quote"].map((item) => (
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
          <SectionTitle>Questions from Spring Area Equipment Operators</SectionTitle>
          {[
            { q: "How far is Vetech Hydraulics from Spring?", a: "We're in Magnolia, TX — about 30 minutes from Spring via SH-99. Drop-offs are welcome anytime during business hours, and we offer pickup and delivery for fleet accounts who need logistical help." },
            { q: "Can you handle construction cylinder repairs with fast turnaround?", a: "Most single-stage repacks are done in 24–48 hours once we have the cylinder and seals. Text a photo ahead of time and we can often stage seals before you arrive — which speeds things up significantly." },
            { q: "Do you work with construction contractors on an ongoing basis?", a: "Yes. If you manage equipment for a GC or run a crew, reach out and we can discuss turnaround expectations and account structure so your cylinders get handled efficiently." },
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
