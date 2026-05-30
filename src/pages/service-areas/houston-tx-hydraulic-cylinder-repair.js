// Houston TX service area page — largest nearby metro, targeting fleets, construction, and industrial equipment.
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

export default function HoustonServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair Near Houston, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair for Houston-area fleets, construction, and industrial equipment. Veteran-owned shop in Magnolia TX. Call (936) 249-6042 for a fast quote."
        />
        <link rel="canonical" href={`${BUSINESS.siteUrl}/service-areas/houston-tx-hydraulic-cylinder-repair`} />
        <meta name="keywords" content="hydraulic cylinder repair Houston TX, hydraulic cylinder repair near Houston, hydraulic repair north Houston, fleet hydraulic repair Houston TX, construction equipment hydraulic repair Houston" />
        <meta property="og:title" content="Hydraulic Cylinder Repair Near Houston, TX | Vetech Hydraulics" />
        <meta property="og:description" content="Hydraulic cylinder repair for Houston-area fleets, construction, and industrial equipment. Veteran-owned shop in Magnolia TX. Call (936) 249-6042." />
        <meta property="og:url" content={`${BUSINESS.siteUrl}/service-areas/houston-tx-hydraulic-cylinder-repair`} />
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
            Hydraulic Cylinder Repair Near Houston, Texas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Vetech Hydraulics is a veteran-owned hydraulic cylinder repair shop serving the
            greater Houston area from our facility in Magnolia, TX — approximately 45 minutes
            northwest of downtown Houston via US-290. We specialize in hydraulic cylinder
            repacking, rod reconditioning, and pressure-tested rebuilds for construction
            equipment, commercial fleets, and industrial machinery operating throughout
            the Houston metro.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 2, lineHeight: 1.75 }}>
            Houston runs some of the most demanding hydraulic equipment in the country —
            from petrochemical plant machinery and port equipment to the construction fleets
            building out the metro&apos;s ongoing expansion. When a cylinder fails, the cost
            of downtime on a Houston job site or fleet route far exceeds the cost of the
            repair. We focus on fast, accurate diagnosis and reliable rebuilds so your
            equipment gets back to work without the long waits.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 780, mb: 3, lineHeight: 1.75 }}>
            We accept drop-offs from Houston-area customers and offer pickup and delivery
            for fleets and operators who need logistical support. Text a photo of your
            cylinder for a same-day quote — no shop visit required to get started.
          </Typography>
          <ConsultationButton />
        </Container>
      </AltSection>

      {/* EQUIPMENT */}
      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle subtitle="Construction, fleet, industrial, and municipal — we repair it all.">
            Equipment We Service for Houston-Area Customers
          </SectionTitle>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Construction & Excavation Equipment",
                text: "Houston's construction boom keeps excavators, bulldozers, cranes, and compactors running around the clock. We repair boom, arm, bucket, blade, and outrigger cylinders for contractors across the metro — fast turnaround so crews don't sit idle.",
              },
              {
                title: "Commercial Fleets & Dump Trucks",
                text: "Dump trucks, roll-off trucks, flatbed equipment, and utility vehicles operating Houston routes depend on telescopic and single-stage cylinders that cycle constantly. We rebuild these with correct stage-specific seals and full pressure testing.",
              },
              {
                title: "Waste & Refuse Equipment",
                text: "Trash trucks and rear-loader compactors running Houston residential and commercial routes put extreme demand on hydraulic cylinders. We specialize in waste fleet cylinder repair and rebuilds that keep collection schedules on track.",
              },
              {
                title: "Industrial & Plant Equipment",
                text: "Hydraulic cylinders on plant maintenance equipment, scissor lifts, dock levelers, and industrial machinery throughout the Houston area need the same precision repair as heavy construction equipment. We handle the full range.",
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
          <SectionTitle subtitle="Every repair pressure tested before it leaves the shop.">
            Our Repair Services for Houston Customers
          </SectionTitle>
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {[
              "Cylinder Repacking & Seal Replacement",
              "Rod Polishing & Reconditioning",
              "Weld Repair — Mounts, Eyes & Barrel Ends",
              "Full Cylinder Teardown & Rebuild",
              "Telescopic Cylinder Repair",
              "Bench Pressure Testing",
              "Pickup & Delivery — Houston Metro Area",
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
          <SectionTitle>Questions from Houston-Area Equipment Operators</SectionTitle>
          {[
            {
              q: "How far is Vetech Hydraulics from Houston?",
              a: "We're in Magnolia, TX — about 45 minutes northwest of downtown Houston via US-290. Houston-area customers drop off cylinders directly at the shop, or we can arrange pickup and delivery for fleet accounts and operators who need logistical help.",
            },
            {
              q: "Do you work with Houston construction and fleet companies on a recurring basis?",
              a: "Yes. We support commercial accounts with consistent turnaround times and straightforward pricing. If you run a fleet or manage equipment for a contractor, reach out and we can discuss how to structure the relationship so your equipment gets prioritized.",
            },
            {
              q: "Can I get a quote without driving out to Magnolia first?",
              a: "Absolutely. Text or email a photo of the cylinder — front, side, and damaged area — along with bore size and what it came off of. We'll get you a ballpark estimate the same day so you can make an informed decision before making the trip.",
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
