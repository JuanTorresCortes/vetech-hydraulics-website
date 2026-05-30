// Willis TX service area page — north Montgomery County, I-45 corridor, agriculture and lake area equipment.
import Head from "next/head";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import { BUSINESS } from "../../config/business";

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

export default function WillisServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Willis, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for agriculture, construction & fleet equipment in Willis TX and north Montgomery County. Veteran-owned. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/willis-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair Willis TX, hydraulic repair north Montgomery County, agriculture hydraulic repair Willis TX, hydraulic cylinder repacking Willis, construction equipment hydraulic repair Willis Texas" />
        <meta property="og:title" content="Hydraulic Cylinder Repair in Willis, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for agriculture, construction & fleet equipment in Willis TX and north Montgomery County. Veteran-owned. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/willis-tx-hydraulic-cylinder-repair`} />
        <meta property="og:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HERO */}
      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: 800, fontSize: { xs: "clamp(26px, 7vw, 36px)", md: "clamp(32px, 4vw, 46px)" }, textWrap: "balance", mb: 2, color: "#fff" }}
          >
            Hydraulic Cylinder Repair in Willis, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Vetech Hydraulics serves equipment operators in Willis, TX and north Montgomery
            County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds.
            Willis sits along I-45 north of Conroe — a stretch of the county where agriculture,
            rural land operations, and Lake Conroe-area construction keep a steady mix of
            equipment in service throughout the year.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            North Montgomery County has a strong agricultural base — cattle operations,
            hay production, and row crop farming that relies on tractors, loader attachments,
            and livestock handling equipment with hydraulic systems that take seasonal
            punishment. Add in the construction activity along I-45 and the lake area
            development, and there&apos;s a wide variety of equipment that needs dependable
            cylinder repair without a long drive to find it.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 3, lineHeight: 1.75 }}>
            We&apos;re in Magnolia, TX — about 25–30 minutes from Willis via TX-105 or I-45.
            Pickup and delivery is available for north Montgomery County customers who need
            help getting cylinders to and from the shop.
          </Typography>
          <ConsultationButton />
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Agriculture, construction, lake area, and county equipment — we cover it all.">
            Equipment We Service in the Willis Area
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Agriculture & Ranch Equipment",
                text: "Tractors, hay equipment, cattle handling chutes, loader attachments, and tillage implements for the farming and ranching operations throughout north Montgomery County. We rebuild ag cylinders that have taken a full season of field use.",
              },
              {
                title: "Construction & Earthmoving Equipment",
                text: "I-45 corridor development and Lake Conroe area projects keep excavators, bulldozers, motor graders, and skid steers working north of Conroe. We service boom, arm, bucket, and blade cylinders for contractors on these jobs.",
              },
              {
                title: "Dump Trucks & Trailers",
                text: "Aggregate and materials haulers running the I-45 corridor depend on telescopic hoist cylinders that cycle daily. We rebuild and pressure test these to prevent roadside failures that shut down a haul route.",
              },
              {
                title: "County & Utility Equipment",
                text: "Road graders, backhoes, boom mowers, and public works equipment serving Willis and north Montgomery County operations. We support commercial and municipal accounts with reliable turnaround times.",
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
              "Pickup & Delivery — North Montgomery County Area",
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
          <SectionTitle>Questions from Willis & North Montgomery County Operators</SectionTitle>
          {[
            {
              q: "How far is Vetech Hydraulics from Willis?",
              a: "We're in Magnolia, TX — about 25–30 minutes from Willis via TX-105 or I-45. We also offer pickup and delivery for north Montgomery County customers who can't transport the cylinder on their own.",
            },
            {
              q: "Can you repair ag cylinders quickly during planting or harvest season?",
              a: "Yes. We know farm equipment downtime during a tight weather window costs more than the repair. Text us a photo of the cylinder early and we can often have seals staged before you arrive — which cuts turnaround time significantly.",
            },
            {
              q: "Do you work on older tractor and ranch equipment cylinders?",
              a: "Absolutely. Older tractors and ranch equipment often have cylinders where standard kits don't fit. We custom-source seals and can machine or fabricate wear components when OEM parts aren't available anymore.",
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
