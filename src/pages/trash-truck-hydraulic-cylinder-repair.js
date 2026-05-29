// Trash truck / waste fleet hydraulic cylinder repair page.
// Targets fleet managers and municipal operators searching for waste-equipment cylinder service.
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
import tele from "../image/tele.webp";
import telescopic from "../image/vetech_telescopic_cylinder.webp";
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
    "radial-gradient(circle at 14% 18%, rgba(215,25,32,0.24), transparent 34%), linear-gradient(135deg, #02060A 0%, #071522 48%, #02060A 100%)",
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
      "linear-gradient(90deg, rgba(215,25,32,0.92), rgba(190,202,212,0.22), transparent)",
    pointerEvents: "none",
  },
};

const services = [
  {
    title: "Telescopic Cylinder Repair",
    text: "Multi-stage telescopic cylinders on dump bodies and compactors take enormous daily load cycles. We rebuild them with the correct seals, precise measurements, and pressure testing to get your route truck back on schedule.",
  },
  {
    title: "Packer Cylinder Repacking",
    text: "Leaking packer cylinders reduce compaction force and slow route performance. Seal replacement and repacking restore full packer operation quickly.",
  },
  {
    title: "Tailgate & Lift Cylinder Repair",
    text: "Tailgate and rear-loader lift cylinders take repeated shock loads. We rebuild and pressure-test these cylinders to restore reliable daily operation.",
  },
  {
    title: "Rod Polishing & Reconditioning",
    text: "Pitted rods from road debris and moisture tear seals and cause repeat failures. We recondition rods to improve seal life and reduce callback repairs.",
  },
  {
    title: "Weld Repair",
    text: "Cracked mounts, worn pivot eyes, and damaged cylinder ends can often be weld-repaired rather than replaced — keeping downtime short and costs down.",
  },
  {
    title: "Fleet Pickup & Delivery",
    text: "We coordinate pickup and delivery for fleet accounts in Montgomery County and North Houston to keep multiple units moving through the shop efficiently.",
  },
];

export default function TrashTruckHydraulicCylinderRepair() {
  return (
    <>
      <SeoHead
        title="Trash Truck Hydraulic Cylinder Repair Montgomery TX | Vetech Hydraulics"
        description="Waste fleet hydraulic cylinder repair near Montgomery, Conroe & North Houston TX. Telescopic cylinders, packer & tailgate rebuilds. Call (936) 249-6042."
        path="/trash-truck-hydraulic-cylinder-repair"
        ogImage="/og/repair.webp"
        keywords="trash truck hydraulic cylinder repair Montgomery TX, waste fleet hydraulic repair Conroe TX, telescopic cylinder repair North Houston, packer cylinder repair, garbage truck hydraulic repair"
      />

      <Hero>
        <Image
          src={tele}
          alt="Telescopic hydraulic cylinder for trash truck repaired by Vetech Hydraulics in Montgomery TX"
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
              "linear-gradient(90deg, rgba(2,6,10,0.96) 0%, rgba(2,6,10,0.84) 48%, rgba(7,21,34,0.6) 100%), linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.18) 70%)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, ...containerSx, pt: { xs: 10, md: 20 }, pb: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 860 }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>WASTE FLEET CYLINDER REPAIR</Typography>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "#F7FAFC",
                fontWeight: 950,
                fontSize: { xs: "clamp(32px, 9vw, 52px)", md: "clamp(48px, 5.5vw, 72px)" },
                lineHeight: 0.96,
                letterSpacing: "-0.055em",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Trash Truck Hydraulic Cylinder Repair in Montgomery & North Houston TX
            </Typography>
            <Typography sx={{ ...bodyCopySx, maxWidth: 720, fontSize: { xs: 15.5, md: 18 }, color: "rgba(231,238,244,0.84)", mb: 3 }}>
              Telescopic, packer, tailgate, and lift cylinder rebuilds for waste management fleets.
              Fast turnarounds and fleet-friendly logistics so your routes stay on schedule.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component="a" href={BUSINESS.phoneTel} variant="contained" sx={primaryCtaSx}>
                Call (936) 249-6042
              </Button>
              <Button component={Link} href="/fleet-support" variant="outlined" sx={secondaryCtaSx}>
                Fleet Support
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
              Waste Fleet Cylinder Services We Provide
            </Typography>
            <Typography sx={{ ...bodyCopySx, mt: 1.5, mx: "auto", maxWidth: 720 }}>
              Route uptime matters every day. We move fast on waste fleet cylinder repairs and keep fleet
              managers informed so you can plan around the shop timeline.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {services.map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <Box sx={cardSx}>
                  <Typography sx={{ color: "#F7FAFC", fontWeight: 950, fontSize: { xs: 18, md: 20 }, lineHeight: 1.16, letterSpacing: "-0.02em", mb: 1 }}>
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

      {/* ===== TELESCOPIC DETAIL ===== */}
      <AltSection>
        <Container maxWidth="lg" sx={containerSx}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", aspectRatio: "16/10" }}>
                <Image
                  src={telescopic}
                  alt="Multi-stage telescopic hydraulic cylinder rebuilt for waste management fleet"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", filter: "saturate(0.75) contrast(1.1)" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>TELESCOPIC CYLINDER SPECIALISTS</Typography>
              <Typography component="h2" variant="h3" sx={{ ...headlineSx, mb: 2 }}>
                Telescopic Cylinder Rebuilds for Dump Bodies & Waste Equipment
              </Typography>
              {[
                ["Multi-Stage Inspection", "We disassemble and inspect every stage of your telescopic cylinder — measuring sleeves, rods, and seating surfaces to find wear before it causes a field failure."],
                ["Correct Seal Selection", "Telescopic cylinders require stage-specific seals matched to the operating pressure and fluid type. We source the right seals, not generic substitutes."],
                ["Pressure Testing at Full Extension", "Each rebuilt telescopic cylinder is tested through its full stroke under pressure to verify smooth sequential staging and zero bypassing."],
                ["Fleet Account Service", "We work with fleet managers on scheduling, paperwork, and multi-unit coordination to keep repair cycles predictable."],
              ].map(([title, text]) => (
                <Box key={title} sx={{ mb: 2.5 }}>
                  <Typography sx={{ color: "#F7FAFC", fontWeight: 950, fontSize: { xs: 16, md: 17 }, mb: 0.5 }}>{title}</Typography>
                  <Typography sx={{ ...bodyCopySx }}>{text}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* ===== CTA ===== */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>GET A QUOTE</Typography>
            <Typography component="h2" variant="h3" sx={{ ...headlineSx, mb: 2 }}>
              Need a Waste Fleet Cylinder Repaired?
            </Typography>
            <Typography sx={{ ...bodyCopySx, mb: 3, mx: "auto", maxWidth: 640 }}>
              Text or email a photo of the cylinder and we will get back to you with a fast quote.
              We serve waste fleets across Montgomery, Conroe, The Woodlands, and North Houston.
            </Typography>
            <ConsultationButton />
          </Box>
        </Container>
      </Section>
    </>
  );
}
