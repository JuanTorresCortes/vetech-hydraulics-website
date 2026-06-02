// Hydraulic cylinder repair cost / pricing page.
// Targets top-of-funnel "how much does it cost" searches — captures leads early in the decision process.
import SeoHead from "../components/SeoHead";
import Link from "next/link";
import { Box, Container, Typography, Grid, Button, Stack, Divider } from "@mui/material";
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
import ConsultationButton from "../components/ConsultationButton";

const Section = PageSection;
const AltSection = PageAltSection;

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

const pricingTiers = [
  {
    label: "Simple Reseal / Repacking",
    range: "$150 – $400",
    note: "Seal kit + labor",
    details:
      "Single-stage cylinders with minor rod wear and standard seal availability. Includes disassembly, cleaning, new seal installation, and pressure test. Most cylinders in this category are returned within 24–48 hours.",
  },
  {
    label: "Rod Repair + Reseal",
    range: "$300 – $700",
    note: "Rod work + seals + labor",
    details:
      "Cylinders with pitting, light scoring, or surface corrosion on the rod. Includes rod polishing or reconditioning, new seals, reassembly, and bench pressure testing.",
  },
  {
    label: "Full Rebuild / Complex Repair",
    range: "$500 – $1,200+",
    note: "Parts + machining + labor",
    details:
      "Cylinders with barrel damage, significant rod wear, weld repair needs, or hard-to-source seals. Includes full disassembly, machining work, component repair or fabrication, and thorough pressure testing.",
  },
  {
    label: "Telescopic Cylinder Rebuild",
    range: "$600 – $1,500+",
    note: "Multi-stage complexity",
    details:
      "Multi-stage telescopic cylinders for dump trailers, trash trucks, and heavy equipment. Pricing varies based on number of stages, seal availability, and extent of sleeve or rod wear.",
  },
];

const factors = [
  ["Cylinder Size & Bore", "Larger bore cylinders require bigger seal kits and more labor time during disassembly and reassembly."],
  ["Rod Condition", "Pitted, scored, or corroded rods need additional work beyond a simple seal swap. Severe rod damage can require reconditioning or replacement."],
  ["Seal Availability", "Standard seals are typically in stock. Custom or OEM-specific seals may add lead time and cost to a repair."],
  ["Type of Cylinder", "Single-stage cylinders are simpler to rebuild than telescopic or multi-stage designs, which require more time and precision."],
  ["Additional Repairs", "Damaged threads, cracked welds, bent barrel ends, or worn gland components add to the total repair scope."],
  ["Turnaround Speed", "Rush repairs may be possible for an additional fee when parts are in stock and shop queue allows."],
];

export default function HydraulicCylinderRepairCost() {
  return (
    <>
      <SeoHead
        title="Hydraulic Cylinder Repair Cost TX | Vetech Hydraulics"
        description="How much does hydraulic cylinder repair cost in Texas? Honest pricing guide from $150–$1,500+. Veteran-owned shop near Montgomery, Conroe & North Houston."
        path="/hydraulic-cylinder-repair-cost"
        ogImage="/cover-image.webp"
        keywords="hydraulic cylinder repair cost Montgomery TX, hydraulic cylinder repair price Texas, how much does hydraulic repair cost, hydraulic cylinder rebuild pricing North Houston"
      />

      {/* ===== HERO ===== */}
      <Box
        sx={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          background:
            "radial-gradient(circle at 16% 18%, rgba(204,0,0,0.22), transparent 34%), linear-gradient(135deg, #080808 0%, #0a0a0a 48%, #080808 100%)",
          pt: { xs: 14, md: 22 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.62), transparent 80%)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, ...containerSx }}>
          <Box sx={{ maxWidth: 820 }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>PRICING GUIDE</Typography>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 700,
                fontSize: { xs: "clamp(30px, 9vw, 50px)", md: "clamp(46px, 5vw, 68px)" },
                lineHeight: 0.97,
                letterSpacing: "-0.01em",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Hydraulic Cylinder Repair Cost in Montgomery & North Houston TX
            </Typography>
            <Typography sx={{ ...bodyCopySx, maxWidth: 720, fontSize: { xs: 15.5, md: 18 }, color: "rgba(220,220,220,0.84)", mb: 3 }}>
              Honest pricing ranges for common cylinder repairs — so you can plan your budget before
              you call. Every job is different, but this guide gives you a realistic starting point.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component="a" href={BUSINESS.phoneTel} variant="contained" sx={primaryCtaSx}>
                Call for a Quote
              </Button>
              <Button component={Link} href="/contact" variant="outlined" sx={secondaryCtaSx}>
                Send a Photo
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ===== PRICING TIERS ===== */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>TYPICAL REPAIR COSTS</Typography>
            <Typography component="h2" variant="h3" sx={headlineSx}>
              What Does Hydraulic Cylinder Repair Cost?
            </Typography>
            <Typography sx={{ ...bodyCopySx, mt: 1.5, mx: "auto", maxWidth: 720 }}>
              Prices vary by cylinder type, size, and repair scope. The ranges below reflect typical
              shop costs in the North Houston / Montgomery County area including parts and labor.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {pricingTiers.map((tier) => (
              <Grid item xs={12} sm={6} key={tier.label}>
                <Box sx={cardSx}>
                  <Typography sx={{ color: industrialColors.hydraulicRed, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.75 }}>
                    {tier.note}
                  </Typography>
                  <Typography sx={{ color: "#F0F0F0", fontWeight: 700, fontSize: { xs: 20, md: 22 }, lineHeight: 1.1, mb: 0.5 }}>
                    {tier.label}
                  </Typography>
                  <Typography sx={{ color: "#6EC1FF", fontWeight: 700, fontSize: { xs: 26, md: 30 }, lineHeight: 1.1, mb: 1.5 }}>
                    {tier.range}
                  </Typography>
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.18)", mb: 1.5 }} />
                  <Typography sx={{ color: industrialColors.mutedText, lineHeight: 1.72, fontSize: { xs: 14.5, md: 15 } }}>
                    {tier.details}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: { xs: 3, md: 4 }, p: { xs: 2.5, md: 3.5 }, borderRadius: 3, bgcolor: "rgba(204,0,0,0.08)", border: "1px solid rgba(204,0,0,0.3)" }}>
            <Typography sx={{ color: "#F0F0F0", fontWeight: 900, fontSize: { xs: 15, md: 16 }, mb: 0.75 }}>
              Our Pricing Commitment
            </Typography>
            <Typography sx={{ ...bodyCopySx }}>
              At Vetech Hydraulics, we aim to keep repair costs under 50% of OEM replacement cost. If a repair
              doesn&apos;t make financial sense for your cylinder, we&apos;ll tell you honestly rather than take
              the work.
            </Typography>
          </Box>
        </Container>
      </Section>

      {/* ===== FACTORS ===== */}
      <AltSection>
        <Container maxWidth="lg" sx={containerSx}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>WHAT AFFECTS PRICE</Typography>
            <Typography component="h2" variant="h3" sx={headlineSx}>
              Factors That Affect Repair Cost
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {factors.map(([title, text]) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <Box sx={cardSx}>
                  <Typography sx={{ color: "#F0F0F0", fontWeight: 700, fontSize: { xs: 17, md: 18 }, lineHeight: 1.2, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography sx={{ color: industrialColors.mutedText, lineHeight: 1.72, fontSize: { xs: 14.5, md: 15 } }}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ===== HOW TO GET A QUOTE ===== */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>GET AN ACCURATE QUOTE</Typography>
              <Typography component="h2" variant="h3" sx={{ ...headlineSx, mb: 2 }}>
                The Fastest Way to Get a Price
              </Typography>
              <Typography sx={{ ...bodyCopySx, mb: 2 }}>
                Text or email a photo of your cylinder along with the bore size, stroke, and
                a description of the problem. We can usually give you a ballpark estimate
                before you bring it in — saving you a trip if the repair doesn&apos;t make sense.
              </Typography>
              <Typography sx={{ ...bodyCopySx, mb: 3 }}>
                We serve Montgomery, Conroe, Magnolia, The Woodlands, Tomball, Spring, and
                surrounding areas in Montgomery County and North Houston, TX.
              </Typography>
              <ConsultationButton />
            </Grid>
            <Grid item xs={12} md={6}>
              {[
                ["Step 1", "Text or email a photo of the cylinder — front, side, and any visible damage."],
                ["Step 2", "Include the bore size, rod diameter, stroke length, and what the cylinder is on."],
                ["Step 3", "We review and respond with a repair path and ballpark cost — usually same day."],
                ["Step 4", "Drop off, or schedule pickup. We rebuild, test, and return the cylinder ready to reinstall."],
              ].map(([step, text]) => (
                <Box key={step} sx={{ display: "flex", gap: 2, mb: 2.5 }}>
                  <Box sx={{
                    flexShrink: 0, width: 40, height: 40, borderRadius: 2,
                    display: "grid", placeItems: "center",
                    bgcolor: "rgba(204,0,0,0.16)", border: "1px solid rgba(204,0,0,0.38)",
                    color: "#fff", fontWeight: 700, fontSize: 14,
                  }}>
                    {step.replace("Step ", "")}
                  </Box>
                  <Typography sx={{ ...bodyCopySx, pt: 0.5 }}>{text}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
