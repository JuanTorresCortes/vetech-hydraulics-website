// src/pages/services.js
// Services page: explains the main hydraulic repair offerings and the workflow customers can expect before contacting the shop.
// Edit the service cards and process arrays below when offerings change; keep SEO metadata values in the SeoHead block stable unless intentionally updating search copy.
import SeoHead from "../components/SeoHead";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import {
  bodyCopySx,
  containedWidthSx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialAltSectionSx,
  industrialCardSx,
  industrialColors,
  industrialSectionSx,
  innerContainerSx,
  PageAltSection,
  PageSection,
  primaryCtaSx,
  secondaryCtaSx,
} from "../utils/visualStyles";
import cylinder4 from "../image/cylinder-4.webp";

/* ------------------------------ Styled UI ------------------------------ */

const Section = PageSection;
const AltSection = PageAltSection;

const Hero = styled(Box)(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "74vh",
  color: "#fff",
  position: "relative",
  textAlign: "left",
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#080808",
  [theme.breakpoints.down("lg")]: { minHeight: "70vh" },
  [theme.breakpoints.down("md")]: { minHeight: "66svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "62svh" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.32,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "54px 54px",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.42), transparent 86%)",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "6%",
    right: "6%",
    bottom: 0,
    height: 1,
    pointerEvents: "none",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), rgba(204,0,0,0.72), rgba(255,255,255,0.55), transparent)",
    zIndex: 3,
  },
}));


const premiumCardSx = {
  ...industrialCardSx,
  position: "relative",
  height: "100%",
  overflow: "hidden",
  p: { xs: 2.5, md: 3 },
  bgcolor: "rgba(14,14,18,0.92)",
  backgroundImage:
    "linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.018) 52%, rgba(204,0,0,0.022))",
  border: `1px solid ${industrialColors.steel}`,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 3,
    background:
      "linear-gradient(90deg, rgba(204,0,0,0.92), rgba(255,255,255,0.22), transparent)",
    pointerEvents: "none",
  },
};

const cardTitleSx = {
  color: industrialColors.text,
  fontWeight: 700,
  fontSize: { xs: 18, md: 20 },
  lineHeight: 1.16,
  letterSpacing: "-0.02em",
};

const cardBodySx = {
  color: industrialColors.mutedText,
  lineHeight: 1.72,
  fontSize: { xs: 14.5, md: 15.5 },
};

const markerSx = {
  width: 44,
  height: 44,
  borderRadius: 2,
  display: "grid",
  placeItems: "center",
  color: "#fff",
  bgcolor: "rgba(204,0,0,0.16)",
  border: "1px solid rgba(204,0,0,0.38)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 22px rgba(204,0,0,0.16)",
  fontWeight: 700,
  letterSpacing: "0.06em",
  fontSize: 13,
};

const SectionTitle = ({ children, eyebrow, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    {eyebrow && (
      <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>{eyebrow}</Typography>
    )}
    <Typography component="h2" variant="h3" sx={headlineSx}>
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          ...bodyCopySx,
          mt: 1.25,
          maxWidth: 820,
          mx: "auto",
          textWrap: "balance",
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

// Service cards are data-driven so offering names and descriptions can be updated without touching the grid markup.
const services = [
  {
    code: "RP",
    title: "Hydraulic Cylinder Repacking",
    text: "Seal replacement and repacking for leaking cylinders, worn glands, and equipment that needs dependable daily uptime.",
  },
  {
    code: "CR",
    title: "Hydraulic Cylinder Repair",
    text: "Complete teardown, cleaning, inspection, component repair, and reassembly for heavy equipment and fleet cylinders.",
  },
  {
    code: "RD",
    title: "Rod Polishing & Repair",
    text: "Rod finish inspection, polishing, and repair support to protect seals and extend hydraulic cylinder service life.",
  },
  {
    code: "WR",
    title: "Weld Repair",
    text: "Commercial-grade weld repair support for mounts, eyes, and damaged cylinder components when repair is practical.",
  },
  {
    code: "PT",
    title: "Pressure Testing",
    text: "Bench pressure testing to verify leak-free performance, smooth operation, and proper function before return to service.",
  },
  {
    code: "PD",
    title: "Pickup & Delivery",
    text: "Pickup and delivery options around Montgomery County, North Houston, and nearby service areas to reduce downtime.",
  },
  {
    code: "JS",
    title: "Mobile / Job-Site Support",
    text: "Mobile pull/install and job-site coordination options for equipment that cannot sit idle or move easily.",
  },
  {
    code: "TC",
    title: "Telescopic Cylinder Repair",
    text: "Inspection, repacking, and repair guidance for multi-stage telescopic cylinders used on dump trailers and fleet equipment.",
  },
];

// Workflow steps set customer expectations from inspection through return-to-service.
const workflow = [
  ["01", "Inspect", "Clean, disassemble, and measure rods, barrels, glands, pistons, and seals to identify the root cause of failure."],
  ["02", "Quote", "Provide a clear repair path for seals, parts, labor, and any outside services before work begins."],
  ["03", "Repack / Repair", "Install quality seals and wear items, correct rod or barrel issues, and rebuild for real-world operating conditions."],
  ["04", "Pressure Test", "Verify the rebuilt cylinder under pressure for leaks, bypassing, smooth operation, and correct stroke."],
  ["05", "Return to Service", "Coordinate pickup, delivery, or job-site support so your heavy equipment or fleet can get back to work."],
];

// Equipment list keeps industry coverage visible for both customers and future content edits.
const equipment = [
  "Trash trucks",
  "Excavators",
  "Skid steers",
  "Dump trailers",
  "Construction equipment",
  "Agriculture equipment",
  "Industrial machinery",
];

// Quality points reinforce workmanship standards used throughout the services page.
const qualityPoints = [
  ["Pressure-Tested Repairs", "Every completed repair is tested to confirm leak control and reliable operation before delivery."],
  ["Clean Seal Installation", "Seals are installed with cleanliness and proper fit in mind to reduce early contamination failures."],
  ["Proper Measurement", "Critical components are checked so rod, barrel, gland, and piston issues are found before reassembly."],
  ["Commercial-Grade Workmanship", "Repairs are built for contractors, municipalities, fleet operators, and heavy equipment owners."],
  ["Veteran-Owned Accountability", "Clear communication, disciplined follow-through, and service-first standards guide every repair."],
];

/* --------------------------------- Page -------------------------------- */

export default function ServicesPage() {
  return (
    <>
      {/* Services SEO metadata is page-specific; do not change copy here unless intentionally updating search positioning. */}
      <SeoHead
        title="Hydraulic Cylinder Repair Services | Vetech Hydraulics"
        description="Cylinder repacking, rod repair, pressure testing & mobile service near Montgomery, Conroe & North Houston TX. Veteran-owned shop. Call (936) 344-1436."
        path="/services"
        ogImage="/og/repair.webp"
        keywords="hydraulic cylinder repair services Montgomery TX, hydraulic cylinder repacking, rod polishing, hydraulic pressure testing, mobile hydraulic service, North Houston hydraulic repair"
      />

      <Box component="div">
        {/* ============================== HERO ============================== */}
        {/* Hero introduces the full service offering before visitors reach individual service cards. */}
        <Hero>
          <Image
            src={cylinder4}
            alt="Hydraulic cylinder repair equipment used by Vetech Hydraulics in Montgomery TX"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 16% 30%, rgba(204,0,0,0.24), transparent 30%), radial-gradient(circle at 88% 18%,  transparent 28%), linear-gradient(90deg, rgba(8,8,10,0.94) 0%, rgba(5,14,22,0.82) 48%, rgba(8,8,10,0.66) 100%), linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.28))",
            }}
          />

          <Container
            maxWidth={false}
            disableGutters
            sx={{
              ...containerSx,
              py: { xs: 7, md: 10 },
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box sx={containedWidthSx}>
              <Box sx={{ maxWidth: 890 }}>
                <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                  HYDRAULIC CYLINDER SERVICES
                </Typography>

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: industrialColors.text,
                    fontWeight: 700,
                    fontSize: {
                      xs: "clamp(34px, 10vw, 54px)",
                      md: "clamp(54px, 5.8vw, 78px)",
                    },
                    lineHeight: 0.96,
                    letterSpacing: "-0.06em",
                    textWrap: "balance",
                  }}
                >
                  Heavy-Duty Hydraulic Cylinder Repair in Montgomery & North Houston TX
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    ...bodyCopySx,
                    maxWidth: 760,
                    fontSize: { xs: 15.5, md: 18 },
                    color: "rgba(220,220,220,0.84)",
                  }}
                >
                  Hydraulic cylinder repair, repacking, rod repair, pressure
                  testing, and service support for heavy equipment, fleets, and
                  job sites across Montgomery County and North Houston, TX.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: { xs: 3, md: 4 } }}
                >
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    sx={primaryCtaSx}
                  >
                    Request Service
                  </Button>
                  <Button
                    component={Link}
                    href="#equipment-support"
                    variant="outlined"
                    sx={secondaryCtaSx}
                  >
                    Fleet Support
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Hero>

        {/* ============================= MAIN SERVICES ============================= */}
        <Section sx={industrialSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="REPAIR CAPABILITIES"
                subtitle="A cylinder rebuild isn’t just “swap seals.” We rebuild with measurements, cleanliness, pressure testing, and real-world reliability in mind."
              >
                Cylinder Repair, Done the Right Way
              </SectionTitle>

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {services.map((service) => (
                  <Grid item xs={12} sm={6} md={3} key={service.title}>
                    <Box sx={premiumCardSx}>
                      <Box sx={markerSx}>{service.code}</Box>
                      <Typography sx={{ ...cardTitleSx, mt: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography sx={{ ...cardBodySx, mt: 1 }}>
                        {service.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Section>

        {/* ============================= WORKFLOW ============================= */}
        <AltSection sx={industrialAltSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="REPAIR WORKFLOW"
                subtitle="Simple, transparent, and efficient — from first inspection through tested return to service."
              >
                How We Repair Cylinders
              </SectionTitle>

              <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {workflow.map(([step, title, text]) => (
                  <Grid item xs={12} sm={6} md={4} key={step}>
                    <Box sx={premiumCardSx}>
                      <Box sx={{ ...markerSx, fontSize: 15 }}>{step}</Box>
                      <Typography sx={{ ...cardTitleSx, mt: 2 }}>
                        {title}
                      </Typography>
                      <Typography sx={{ ...cardBodySx, mt: 1 }}>
                        {text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </AltSection>

        {/* ============================= EQUIPMENT ============================= */}
        <Section id="equipment-support" sx={industrialSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                <Grid item xs={12} md={5.2}>
                  <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                    FLEET & EQUIPMENT SUPPORT
                  </Typography>
                  <Typography component="h2" variant="h3" sx={headlineSx}>
                    Equipment We Support
                  </Typography>
                  <Typography sx={{ ...bodyCopySx, mt: 1.5 }}>
                    Vetech Hydraulics supports hydraulic cylinder repair needs
                    for commercial fleets, contractors, agriculture operations,
                    and industrial machinery owners who need equipment back in
                    service quickly and confidently.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6.8}>
                  <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                    {equipment.map((item) => (
                      <Grid item xs={12} sm={6} key={item}>
                        <Box
                          sx={{
                            ...premiumCardSx,
                            p: { xs: 2, md: 2.25 },
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              bgcolor: industrialColors.hydraulicRed,
                              boxShadow: "0 0 18px rgba(204,0,0,0.46)",
                              flexShrink: 0,
                            }}
                          />
                          <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Section>

        {/* ============================= TRUST / QUALITY ============================= */}
        <AltSection sx={industrialAltSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="QUALITY & ACCOUNTABILITY"
                subtitle="We focus on the details that make hydraulic repairs last longer in commercial, fleet, and heavy equipment use."
              >
                Built to Hold Pressure
              </SectionTitle>

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {qualityPoints.map(([title, text], index) => (
                  <Grid item xs={12} sm={6} md={index === 4 ? 12 : 3} key={title}>
                    <Box sx={premiumCardSx}>
                      <Typography sx={{ ...eyebrowSx, mb: 1 }}>
                        QA 0{index + 1}
                      </Typography>
                      <Typography sx={cardTitleSx}>{title}</Typography>
                      <Typography sx={{ ...cardBodySx, mt: 1 }}>
                        {text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </AltSection>

        {/* ================================ CTA ================================ */}
        <Section sx={industrialSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <Box
                sx={{
                  ...premiumCardSx,
                  p: { xs: 3, md: 5 },
                  textAlign: "center",
                  backgroundImage:
                    "radial-gradient(circle at 50% 0%, rgba(204,0,0,0.16), transparent 34%), linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.018))",
                }}
              >
                <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                  REQUEST SERVICE
                </Typography>
                <Typography component="h2" variant="h3" sx={headlineSx}>
                  Need Hydraulic Cylinder Repair?
                </Typography>
                <Typography
                  sx={{
                    ...bodyCopySx,
                    mt: 1.5,
                    mx: "auto",
                    maxWidth: 720,
                  }}
                >
                  Send photos, dimensions, or equipment details and we’ll help
                  you plan the next step for hydraulic cylinder repair,
                  repacking, pressure testing, pickup, or job-site support.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  justifyContent="center"
                  sx={{ mt: 3 }}
                >
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    sx={primaryCtaSx}
                  >
                    Request Service
                  </Button>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    sx={secondaryCtaSx}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Section>
      </Box>
    </>
  );
}
