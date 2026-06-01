// Humble TX service area page — Harris County, petrochemical corridor, construction, and fleet equipment.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/humble_hero_img.webp";

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

export default function HumbleServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Humble, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for construction, fleet & industrial equipment in Humble TX and north Harris County. Veteran-owned. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/humble-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair Humble TX, hydraulic repair north Harris County, construction equipment hydraulic repair Humble, hydraulic cylinder repacking Humble TX, fleet hydraulic repair Humble Texas" />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Humble, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for construction, fleet & industrial equipment in Humble TX and north Harris County. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/humble-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment in Humble TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair in Humble, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves equipment operators in Humble, TX and north Harris County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Humble sits along US-59 at the northern edge of Houston — a dense industrial and commercial corridor where construction crews, fleet operators, and petrochemical support equipment are working year-round.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* HERO BODY COPY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            The Lake Houston area and the US-59 / Beltway 8 interchange keep a constant flow
            of excavators, dump trucks, and utility equipment moving through Humble. When a
            cylinder blows a seal on a job site or fleet route, downtime costs pile up fast.
            We focus on accurate diagnosis and fast turnarounds — pressure tested before the
            cylinder ever leaves our shop.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 40 minutes northwest of Humble via US-59 and
            TX-99. Drop-offs welcome, and pickup and delivery is available for north Harris
            County operators who need logistical support.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Construction, fleets, industrial, and municipal — we repair it all.">
            Equipment We Service in the Humble Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Construction & Excavation Equipment",
                text: "Active development along US-59 and around Lake Houston keeps excavators, bulldozers, compactors, and cranes on job sites throughout the Humble area. We repair boom, arm, bucket, and blade cylinders with fast turnarounds so crews stay productive.",
              },
              {
                title: "Commercial Fleets & Dump Trucks",
                text: "Aggregate haulers, dump trailers, and roll-off trucks serving the Humble corridor run telescopic cylinders that cycle hard every day. We rebuild multi-stage cylinders with the correct seals for each stage and full pressure testing before return.",
              },
              {
                title: "Waste & Refuse Equipment",
                text: "Rear-loader compactors and trash trucks serving north Harris County neighborhoods put constant demand on hydraulic cylinders. We specialize in waste fleet cylinder repair and rebuilds that keep collection routes running on schedule.",
              },
              {
                title: "Utility & Municipal Equipment",
                text: "Boom trucks, backhoes, and public works equipment operating in and around Humble need reliable hydraulic repair support. We work with commercial and municipal accounts with consistent turnaround times.",
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
              "Pickup & Delivery — North Harris County Area",
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
          <SectionTitle>Questions from Humble & North Harris County Operators</SectionTitle>
          {[
            {
              q: "How far is your shop from Humble?",
              a: "We're in Magnolia, TX — about 40 minutes northwest of Humble via US-59 and TX-99. Humble-area customers are welcome to drop off cylinders directly, or we can arrange pickup and delivery for fleet accounts and commercial operators.",
            },
            {
              q: "Can you handle high-cycle cylinders from dump trucks and refuse fleets?",
              a: "Yes. Telescopic and single-stage cylinders from dump trucks and rear-loader compactors are some of our most common repairs. We rebuild them with the correct seals for each stage and pressure test through the full stroke before returning.",
            },
            {
              q: "How do I get a quote without making the drive first?",
              a: "Text or email us a photo of the cylinder — front, side, and the damaged area — along with the bore size and what equipment it came off of. We can usually get you a ballpark estimate the same day so you can decide before making the trip.",
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
