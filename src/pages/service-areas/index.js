// src/pages/service-areas/index.js

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import backHoe from "../../image/backHoe.webp";

/* --------------------------------- Layout -------------------------------- */

// Full-width hero with background image (borrowed from services.js)
const Hero = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "48vh",
  display: "flex",
  alignItems: "flex-end",
  color: "#fff",
}));

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

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 800,
        fontSize: {
          xs: "clamp(22px, 6vw, 32px)",
          md: "clamp(28px, 3vw, 40px)",
        },
        textWrap: "balance",
      }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* --------------------------- JSON-LD Service Schema ---------------------- */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hydraulic Cylinder Repair & Repacking",
  provider: {
    "@type": "LocalBusiness",
    name: "Vetech Hydraulics",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montgomery",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    "Montgomery TX",
    "Conroe TX",
    "The Woodlands TX",
    "Magnolia TX",
    "Willis TX",
    "New Caney TX",
    "Splendora TX",
    "Humble TX",
    "Atascocita TX",
    "Tomball TX",
    "Spring TX",
    "Navasota TX",
  ],
  serviceType:
    "Hydraulic cylinder repair, repacking, rod polishing, welding, testing",
};

/* --------------------------------- Page ---------------------------------- */

export default function ServiceAreasOverview() {
  /* 1) List of all service-area city names */
  const cityNames = [
    "Montgomery",
    "Conroe",
    "The Woodlands",
    "Magnolia",
    "Tomball",
    "Spring",
    "Willis",
    "New Caney",
    "Splendora",
    "Humble",
    "Atascocita",
    "Millican",
    "Navasota",
    "Washington",
    "Anderson",
    "Apolonia",
    "Richards",
    "Whitehall",
    "Fields Store",
    "Hempstead",
    "Prairie View",
    "Pine Island",
    "Buckhorn",
    "Waller",
    "Plantersville",
    "Pinebrook",
    "Todd Mission",
    "Fetzer",
    "Bobville",
    "Karen",
    "Pinehurst",
    "Stagecoach",
    "Rose Hill",
    "Kohrville",
    "Porter Heights",
    "Grangerland",
    "Klein",
    "Westfield",
    "Panorama Village",
    "Ada",
    "Waverly",
    "New Waverly",
    "Patton Village",
    "Roman Forest",
    "Plum Grove",
    "Cleveland",
    "North Cleveland",
    "Westcott",
    "Eastgate",
    "Huffman",
  ];

  /* 2) Focus “building blocks” so you can tweak them in one place */
  const focusParts = [
    "Hydraulic cylinder repair & repacking",
    "Telescopic cylinder repair",
    "Trash truck hydraulic repair",
    "Construction & farm equipment cylinders",
    "On-site pull/install support when needed",
    "Pickup and delivery options",
  ];

  // 3) Combined focus string that every area uses
  const combinedFocus = focusParts.join(" • ");

  /*
    4) Helper to generate URL slug from city name.
       Special-case “The Woodlands” since the file name drops “the”.
  */
  const slugFromCity = (city) => {
    if (city === "The Woodlands") return "woodlands";
    return city
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  /*
    5) Final areas array used by the cards.
       Each city gets the same focus text and a path that matches its page.
  */
  const areas = cityNames.map((city) => {
    const slug = slugFromCity(city);
    return {
      city,
      focus: combinedFocus,
      path: `/service-areas/${slug}-tx-hydraulic-cylinder-repair`,
    };
  });

  return (
    <>
      <Head>
        <title>
          Service Areas | Hydraulic Cylinder Repair | Vetech Hydraulics
        </title>
        <meta
          name="description"
          content="See how local service area pages help you get faster hydraulic cylinder repair in Montgomery, Magnolia, Conroe, Willis, The Woodlands, and across the North Houston area."
        />
        {/* TODO: replace with real production domain */}
        <link rel="canonical" href="https://your-domain.com/service-areas" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Head>

      {/* =============================== HERO =============================== */}
      <Hero>
        {/* Background image */}
        <Image
          src={backHoe}
          alt="Hydraulic equipment working near Lake Conroe"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Dark gradient overlay for text readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Hero content */}
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 26, md: 40 },
              textWrap: "balance",
              mb: 1,
            }}
          >
            Hydraulic Cylinder Repair Service Areas
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              maxWidth: 620,
              mb: 2,
            }}
          >
            Coverage across Montgomery, Conroe, The Woodlands, Magnolia and
            surrounding North Houston communities — with pickup, delivery, and
            fast turnaround for trash trucks and heavy equipment.
          </Typography>
          <ConsultationButton />
        </Container>
      </Hero>

      {/* =============================== INTRO =============================== */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: 26, md: 34 },
              textWrap: "balance",
              mb: 2,
            }}
          >
            How local service areas benefit you
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              maxWidth: { md: "70%" },
            }}
          >
            Local, veteran-owned hydraulic cylinder repair that keeps your trash
            trucks, heavy equipment, and rental fleets making money. These
            service area pages make it easier for you to get fast answers,
            accurate quotes, and dependable support in Montgomery County and the
            greater North Houston region.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <ConsultationButton>
              Call now for fast turnaround
            </ConsultationButton>
          </Box>
        </Container>
      </Section>

      {/* ======================= WHY THESE PAGES HELP ======================= */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Fewer delays. Cleaner installs. Longer-lasting cylinders.">
            Why these pages help your business
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Faster responses",
                text: "Each page shows pickup options, turnaround times, and the exact cylinder work we do in your city so you can get back on route faster.",
              },
              {
                title: "Better pricing clarity",
                text: "Local details let us give tighter estimates on seal kits, rod polish, and repacking for trash trucks, excavators, and rental equipment.",
              },
              {
                title: "Local SEO visibility",
                text: "Pages for Montgomery, Magnolia, Conroe, Willis, The Woodlands, and surrounding towns help nearby crews find a veteran-owned shop instead of waiting on distant vendors.",
              },
              {
                title: "Less downtime",
                text: "By setting expectations on logistics, testing, and communication, you lose fewer hours coordinating cylinder repair and reinstalling equipment.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ========================= WHAT TO EXPECT FLOW ====================== */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Clear steps from first call to reinstall">
            What to expect when you contact us
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Share your cylinder photos",
                text: "Send quick pictures of the rod, gland, and any leaks. We confirm dimensions and quote the repack or repair with honest pricing.",
              },
              {
                title: "Plan pickup or drop-off",
                text: "Choose drop-off at the shop or schedule local pickup around Montgomery, Magnolia, Conroe, Willis, The Woodlands, or greater Houston.",
              },
              {
                title: "Repack, polish, and test",
                text: "We reseal telescopic, single-acting, and double-acting cylinders with quality seals, light welding, and pressure testing before delivery.",
              },
              {
                title: "Install with confidence",
                text: "You get a clean, tested cylinder plus guidance for reinstall so you avoid repeat downtime and keep routes on schedule.",
              },
            ].map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography
                      sx={{ color: "#6EC1FF", fontWeight: 800, mb: 0.5 }}
                    >
                      Step {index + 1}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {step.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ========================= SERVICE AREA CARDS ======================= */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="One place to find your closest hydraulic help">
            Service areas
          </SectionTitle>

          <Grid container spacing={3}>
            {areas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent
                    sx={{
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {area.city}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {area.focus}
                    </Typography>
                    <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
                    {area.path ? (
                      <Button
                        component={Link}
                        href={area.path}
                        variant="outlined"
                        sx={{
                          color: "#6EC1FF",
                          borderColor: "rgba(110,193,255,0.4)",
                          textTransform: "none",
                          fontWeight: 700,
                          alignSelf: "flex-start",
                        }}
                      >
                        View {area.city} details
                      </Button>
                    ) : (
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 600,
                        }}
                      >
                        Call for {area.city} scheduling
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ================= SURROUNDING TOWNS / EXTRA CONTEXT ================ */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="If you’re on this map, we probably service your area.">
            Surrounding towns & communities we serve
          </SectionTitle>

          <Typography
            sx={{ color: "rgba(255,255,255,0.8)", mb: 2, maxWidth: 900 }}
          >
            Beyond our core cities, we regularly service equipment from a wide
            radius around Lake Conroe and North Houston. Pickup and delivery
            options are available on a case-by-case basis, especially for large
            or heavy cylinders.
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
            Willis • New Waverly • Panorama Village • Grangerland • Porter
            Heights • New Caney • Splendora • Patton Village • Roman Forest •
            Plum Grove • Cleveland • North Cleveland • Humble • Atascocita •
            Tomball • Spring • Klein • Kohrville • Waller • Prairie View • Pine
            Island • Fields Store • Todd Mission • Pinehurst • Stagecoach • Rose
            Hill • Plantersville • Navasota • Anderson • Richards • Millican •
            Washington and more across the wider Lake Conroe and North Houston
            corridor.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 1 }}>
              Not sure if you&apos;re in our service area?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
              Send us a quick text with your location and a picture of your
              cylinder — we&apos;ll let you know how we can help and what pickup
              / delivery options look like.
            </Typography>
          </Box>
        </Container>
      </Section>

      {/* =============================== FAQ ================================ */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Quick answers for equipment owners in Montgomery County and Houston">
            FAQ
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                q: "How do service area pages help me?",
                a: "They give city-specific pickup options, turnaround times, and cylinder types we handle so you get accurate pricing and less downtime.",
              },
              {
                q: "Do you only work in Montgomery County?",
                a: "We serve Montgomery, Magnolia, Conroe, Willis, The Woodlands, and the greater Houston area with flexible logistics for trash trucks and heavy equipment.",
              },
              {
                q: "Which cylinders do you repair?",
                a: "Telescopic, single-acting, double-acting, trash truck packer and sweep cylinders, excavator boom and stick cylinders, and more.",
              },
              {
                q: "What makes a faster turnaround possible?",
                a: "Clear photos up front, local pickup/drop-off, quality seals, rod polish, and bench testing so reinstall goes smooth the first time.",
              },
              {
                q: "Can you help me decide if a cylinder is worth repairing?",
                a: "Yes. We inspect rods, pistons, and packing sets, then give honest recommendations so you avoid unnecessary spend and keep equipment earning.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {item.q}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {item.a}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ============================= FINAL CTA ============================ */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{ color: "#fff", fontWeight: 900, mb: 1 }}
          >
            Call now for fast hydraulic cylinder repair
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
            Veteran-owned, local, and focused on keeping your equipment earning
            with clean, tested cylinders and honest communication.
          </Typography>
          <ConsultationButton>Get a quote today</ConsultationButton>
        </Container>
      </AltSection>
    </>
  );
}

/* ------------------------------ Meta export ------------------------------ */

export const meta = {
  title: "Service Areas | Hydraulic Cylinder Repair | Vetech Hydraulics",
  description:
    "See how local service area pages help you get faster hydraulic cylinder repair in Montgomery, Magnolia, Conroe, Willis, The Woodlands, and the greater North Houston area.",
};
