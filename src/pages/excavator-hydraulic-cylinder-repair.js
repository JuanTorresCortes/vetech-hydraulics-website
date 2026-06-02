// Excavator hydraulic cylinder repair page — targets high-intent equipment-specific searches.
// Keeps the same industrial design language as the rest of the site.
import SeoHead from "../components/SeoHead";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialCardSx,
  industrialColors,
  PageAltSection,
  PageSection,
  primaryCtaSx,
  secondaryCtaSx,
} from "../utils/visualStyles";
import { BUSINESS } from "../config/business";
import esc from "../image/esc.webp";
import repairImg from "../image/repairImg.webp";
import ConsultationButton from "../components/ConsultationButton";

const Section = PageSection;
const AltSection = PageAltSection;

const Hero = styled(Box)(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  position: "relative",
  minHeight: "72vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  color: "#fff",
  background:
    "radial-gradient(circle at 14% 18%, rgba(204,0,0,0.24), transparent 34%), linear-gradient(135deg, #080808 0%, #0a0a0a 48%, #080808 100%)",
  [theme.breakpoints.down("md")]: { minHeight: "64svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "68svh" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
    backgroundSize: "46px 46px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.68), transparent 80%)",
    zIndex: 1,
  },
}));

const cardSx = {
  ...industrialCardSx,
  position: "relative",
  height: "100%",
  overflow: "hidden",
  p: { xs: 2.5, md: 3 },
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

const services = [
  {
    title: "Boom & Arm Cylinder Repair",
    text: "Full teardown, inspection, and rebuild for excavator boom and arm cylinders. We measure rod, barrel, and gland tolerances to find the true root cause before reassembly.",
  },
  {
    title: "Bucket Cylinder Repacking",
    text: "Seal replacement on bucket cylinders to stop leaks, restore full force, and get the bucket moving reliably again without excessive cycling.",
  },
  {
    title: "Rod Polishing & Reconditioning",
    text: "Pitted or scored rods tear seals and cause repeat failures. We polish and recondition excavator cylinder rods to protect your new seals and extend service life.",
  },
  {
    title: "Weld Repair",
    text: "Damaged mounts, eyes, and cylinder ends can often be weld-repaired rather than replaced — saving time and money on hard-to-source excavator cylinder parts.",
  },
  {
    title: "Pressure Testing",
    text: "Every excavator cylinder rebuild is bench pressure-tested to verify leak-free performance and proper stroke before it leaves the shop.",
  },
  {
    title: "Pickup & Delivery",
    text: "We offer pickup and delivery in Montgomery County and North Houston so your excavator doesn't sit any longer than necessary.",
  },
];

export default function ExcavatorHydraulicCylinderRepair() {
  return (
    <>
      <SeoHead
        title="Excavator Hydraulic Cylinder Repair Montgomery TX | Vetech Hydraulics"
        description="Excavator boom, arm & bucket cylinder repair near Montgomery, Conroe & North Houston TX. Pressure-tested rebuilds. Veteran-owned. Call (936) 249-6042."
        path="/excavator-hydraulic-cylinder-repair"
        ogImage="/og/repair.webp"
        keywords="excavator hydraulic cylinder repair Montgomery TX, excavator cylinder repair Conroe TX, excavator boom cylinder repair, excavator arm cylinder repair North Houston, excavator bucket cylinder repair"
      />

      <Hero>
        <Image
          src={esc}
          alt="Excavator hydraulic cylinder being repaired at Vetech Hydraulics in Montgomery TX"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.22, filter: "contrast(1.1) saturate(0.7)" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,8,10,0.96) 0%, rgba(8,8,10,0.84) 48%, rgba(7,21,34,0.6) 100%), linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.18) 70%)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, ...containerSx, pt: { xs: 10, md: 20 }, pb: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 860 }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>EXCAVATOR CYLINDER REPAIR</Typography>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 950,
                fontSize: { xs: "clamp(32px, 9vw, 52px)", md: "clamp(48px, 5.5vw, 72px)" },
                lineHeight: 0.96,
                letterSpacing: "-0.01em",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Excavator Hydraulic Cylinder Repair in Montgomery & North Houston TX
            </Typography>
            <Typography sx={{ ...bodyCopySx, maxWidth: 720, fontSize: { xs: 15.5, md: 18 }, color: "rgba(220,220,220,0.84)", mb: 3 }}>
              Boom, arm, and bucket cylinder rebuilds for excavators and heavy construction equipment.
              Veteran-owned workmanship, pressure-tested repairs, and fast turnaround so your machine
              gets back to work.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component="a" href={BUSINESS.phoneTel} variant="contained" sx={primaryCtaSx}>
                Call (936) 249-6042
              </Button>
              <Button component={Link} href="/contact" variant="outlined" sx={secondaryCtaSx}>
                Get a Quote
              </Button>
            </Stack>
          </Box>
        </Container>
      </Hero>

      {/* ===== SERVICES ===== */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>REPAIR CAPABILITIES</Typography>
            <Typography component="h2" variant="h3" sx={headlineSx}>
              Excavator Cylinder Services We Provide
            </Typography>
            <Typography sx={{ ...bodyCopySx, mt: 1.5, mx: "auto", maxWidth: 720 }}>
              From single-stage bucket cylinders to multi-stage boom assemblies — we rebuild what keeps
              your excavator digging, lifting, and working on schedule.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {services.map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <Box sx={cardSx}>
                  <Typography sx={{ color: "#F0F0F0", fontWeight: 950, fontSize: { xs: 18, md: 20 }, lineHeight: 1.16, letterSpacing: "-0.02em", mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ color: industrialColors.mutedText, lineHeight: 1.72, fontSize: { xs: 14.5, md: 15.5 } }}>
                    {s.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ===== WHY VETECH ===== */}
      <AltSection>
        <Container maxWidth="lg" sx={containerSx}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", aspectRatio: "16/10" }}>
                <Image
                  src={repairImg}
                  alt="Hydraulic cylinder rod repair for excavator equipment at Vetech Hydraulics"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", filter: "saturate(0.75) contrast(1.1)" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>WHY VETECH HYDRAULICS</Typography>
              <Typography component="h2" variant="h3" sx={{ ...headlineSx, mb: 2 }}>
                Built for the Demands of Heavy Construction Equipment
              </Typography>
              {[
                ["Root-Cause Inspection", "We disassemble, clean, and measure every component — not just replace seals — so the rebuilt cylinder actually lasts."],
                ["Pressure-Tested Before Return", "Each excavator cylinder is bench-tested at operating pressure to verify no leaks, no bypassing, and smooth full-stroke operation."],
                ["Fast Turnaround", "Downtime on an excavator is expensive. We prioritize quick rebuilds for contractors and equipment owners who cannot afford delays."],
                ["Veteran-Owned Accountability", "Clear communication, honest pricing, and disciplined workmanship on every repair — no surprises."],
              ].map(([title, text]) => (
                <Box key={title} sx={{ mb: 2.5 }}>
                  <Typography sx={{ color: "#F0F0F0", fontWeight: 950, fontSize: { xs: 16, md: 17 }, mb: 0.5 }}>{title}</Typography>
                  <Typography sx={{ ...bodyCopySx }}>{text}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* ===== SERVICE AREAS ===== */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>SERVICE AREA</Typography>
            <Typography component="h2" variant="h3" sx={headlineSx}>
              Excavator Cylinder Repair Near You
            </Typography>
            <Typography sx={{ ...bodyCopySx, mt: 1.5, mx: "auto", maxWidth: 720 }}>
              We serve excavator operators throughout Montgomery County and the greater North Houston area,
              including Montgomery, Conroe, Magnolia, The Woodlands, Tomball, Spring, Willis, Humble,
              New Caney, Splendora, and surrounding communities.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <ConsultationButton />
          </Box>
        </Container>
      </Section>
    </>
  );
}
