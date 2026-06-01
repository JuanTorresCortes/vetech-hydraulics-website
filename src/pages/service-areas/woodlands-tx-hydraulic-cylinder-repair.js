// The Woodlands TX — commercial fleets, corporate campus equipment, construction, and high-volume refuse routes.
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";
import heroImg from "./img/woodlands_hero_img.webp";

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

export default function WoodlandsServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair Near The Woodlands, TX | Vetech Hydraulics</title>
        <meta name="description" content="Hydraulic cylinder repair for construction, commercial fleets & refuse equipment near The Woodlands TX. Veteran-owned shop in Magnolia. Call (936) 249-6042." />
        <meta name="keywords" content="hydraulic cylinder repair The Woodlands TX, hydraulic repair Woodlands Texas, hydraulic cylinder repacking The Woodlands, construction equipment hydraulic repair Woodlands TX, fleet hydraulic repair The Woodlands" />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/woodlands-tx-hydraulic-cylinder-repair`} />
        <meta property="og:title" content="Hydraulic Cylinder Repair Near The Woodlands, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for construction, commercial fleets & refuse equipment near The Woodlands TX. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/woodlands-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <Box component="section" sx={{ position: "relative", minHeight: { xs: "60svh", md: "68vh" }, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "absolute", inset: 0, transformOrigin: "center center", animation: `${zoomOut} 8s ease-out forwards` }}>
          <Image src={heroImg} alt="Hydraulic equipment near The Woodlands TX" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(90deg, rgba(3,8,14,0.92) 0%, rgba(6,15,24,0.78) 48%, rgba(3,8,14,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }} />
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto", position: "relative", zIndex: 2, py: { xs: 10, md: 14 } }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "clamp(28px, 7vw, 40px)", md: "clamp(36px, 4vw, 52px)" }, textWrap: "balance", mb: 2, color: "#fff", lineHeight: 1.1 }}>
            Hydraulic Cylinder Repair Near The Woodlands, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, mb: 3, lineHeight: 1.75, fontSize: { xs: 15, md: 16 } }}>
            Vetech Hydraulics serves equipment operators near The Woodlands, TX with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Construction fleets, refuse equipment, and commercial vehicles — veteran-owned, based in Magnolia about 25 minutes away.
          </Typography>
          <ConsultationButton />
        </Container>
      </Box>

      {/* BODY */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            The Woodlands is one of the most commercially active communities in the Houston metro — a master-planned area with a high concentration of corporate offices, commercial development, and infrastructure that requires significant maintenance equipment. Construction crews, refuse fleets, and utility vehicles operate throughout The Woodlands corridor and need reliable hydraulic cylinder repair when systems fail.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, lineHeight: 1.75 }}>
            We&apos;re in Magnolia — about 25 minutes from The Woodlands via FM 1488. Drop-offs are welcome, and we offer pickup and delivery for fleet accounts operating in the area.
          </Typography>
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Construction, refuse fleets, commercial, and utility equipment.">
            Equipment We Service Near The Woodlands
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { title: "Construction & Excavation Equipment", text: "Ongoing commercial and residential development in and around The Woodlands keeps excavators, cranes, and compactors active. We repair boom, arm, bucket, and outrigger cylinders with fast turnarounds so crews stay on schedule." },
              { title: "Waste & Refuse Equipment", text: "Rear-loader compactors and trash trucks serving The Woodlands high-density residential and commercial routes cycle hard daily. We rebuild waste fleet cylinders to keep collection running on schedule." },
              { title: "Dump Trucks & Fleet Equipment", text: "Aggregate haulers, roll-off trucks, and materials vehicles operating Woodlands-area routes depend on telescopic hoist cylinders that have to perform every shift. We rebuild and pressure test these thoroughly." },
              { title: "Utility & Facility Equipment", text: "Boom trucks, scissor lifts, and maintenance equipment supporting The Woodlands commercial properties and infrastructure rely on hydraulic systems that can't go down unexpectedly. We service a wide range of utility cylinders." },
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
            {["Cylinder Repacking & Seal Replacement", "Rod Polishing & Reconditioning", "Weld Repair — Mounts, Eyes & Barrel Ends", "Full Cylinder Teardown & Rebuild", "Telescopic Cylinder Repair", "Bench Pressure Testing", "Pickup & Delivery — The Woodlands Area", "Photo Estimates — Text a Picture for a Same-Day Quote"].map((item) => (
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
          <SectionTitle>Questions from Woodlands Area Equipment Operators</SectionTitle>
          {[
            { q: "How far is Vetech Hydraulics from The Woodlands?", a: "We're in Magnolia — about 25 minutes from The Woodlands via FM 1488. Drop-offs are welcome during business hours. We also offer pickup and delivery for fleet accounts who need logistical support." },
            { q: "Can you support refuse fleet cylinder repairs on a recurring schedule?", a: "Yes. We work with commercial fleet accounts and can structure turnaround expectations so your waste route equipment gets prioritized. Reach out to discuss your fleet's needs and volume." },
            { q: "How do I get a quote without driving to the shop?", a: "Text or email a photo of the cylinder — front, side, and the damaged area — along with bore size and what it came off of. We'll get you a ballpark estimate the same day so you can plan before making the trip." },
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
