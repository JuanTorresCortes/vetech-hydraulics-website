// src/pages/about.js
// About page: presents the veteran-owned company story, operating values, and credibility cues for customers evaluating the business.
// Image selections and trust-oriented sections are kept near this file because they are page-specific content rather than shared configuration.
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
import cylinder1 from "../image/cylinder-1.webp";
import cylinder2 from "../image/cylinder-2.webp";

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
  fontWeight: 950,
  letterSpacing: "0.06em",
  fontSize: 13,
};

const cardTitleSx = {
  color: industrialColors.text,
  fontWeight: 950,
  fontSize: { xs: 18, md: 20 },
  lineHeight: 1.16,
  letterSpacing: "-0.02em",
};

const cardBodySx = {
  color: industrialColors.mutedText,
  lineHeight: 1.72,
  fontSize: { xs: 14.5, md: 15.5 },
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
          maxWidth: 850,
          mx: "auto",
          textWrap: "balance",
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

// Values cards translate the company story into traits customers can expect during a repair.
const values = [
  ["01", "Precision", "Measured repairs, careful inspection, and attention to the small details that protect seal life."],
  ["02", "Reliability", "Hydraulic work focused on dependable performance for heavy equipment, fleets, and commercial operations."],
  ["03", "Accountability", "Veteran-owned follow-through, honest recommendations, and responsibility for the work we deliver."],
  ["04", "Clear Communication", "Straightforward repair paths, practical expectations, and no surprise charges or unnecessary upsells."],
  ["05", "Commercial-Grade Workmanship", "Repair standards built for contractors, work trucks, shop equipment, and machinery under pressure."],
  ["06", "Uptime-Focused Service", "Pickup, delivery, fast estimates, and repair planning designed to help reduce equipment downtime."],
];

// Expectations cards clarify the customer experience without changing the business copy.
const expectations = [
  ["INS", "Thorough Inspection", "We clean, inspect, and measure critical components to understand why the cylinder failed."],
  ["QTE", "Clear Quote Before Work", "You get a repair path and estimate before parts, seals, or labor move forward."],
  ["SEL", "Quality Seal Replacement", "Seals and wear items are selected and installed with fit, cleanliness, and operating conditions in mind."],
  ["TST", "Pressure-Tested Repairs", "Repairs are tested for leak control and proper operation before delivery whenever practical."],
  ["PD", "Pickup/Delivery Options", "Local pickup and delivery planning helps contractors and fleet operators reduce downtime."],
  ["COM", "Professional Communication", "We keep the process straightforward, practical, and focused on getting your equipment back to work."],
];

// Industry cards identify the types of equipment owners this page is meant to reassure.
const industries = [
  "Trash trucks",
  "Construction equipment",
  "Agriculture equipment",
  "Industrial machinery",
  "Contractors",
  "Fleet operators",
];

/* --------------------------------- Page -------------------------------- */

export default function AboutPage() {
  return (
    <>
      {/* About-page metadata supports brand trust searches; keep values coordinated with public business positioning. */}
      <SeoHead
        title="About Vetech Hydraulics | Veteran-Owned Hydraulic Repair in Magnolia TX"
        description="Veteran-owned hydraulic cylinder repair shop serving Montgomery County & North Houston TX. Learn our mission, values, and commitment to pressure-tested results."
        path="/about"
        ogImage="/juanTech.webp"
        keywords="veteran-owned hydraulic repair Montgomery TX, hydraulic cylinder repair Magnolia TX, SDVOSB hydraulic repair Texas, Vetech Hydraulics about"
      />

      <Box component="main">
        {/* ============================== HERO ============================== */}
        {/* Hero frames the shop story and veteran-owned credibility before deeper company details. */}
        <Hero>
          <Image
            src={cylinder1}
            alt="Hydraulic equipment background"
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
              <Box sx={{ maxWidth: 960 }}>
                <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                  ABOUT VETECH HYDRAULICS
                </Typography>

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: industrialColors.text,
                    fontWeight: 950,
                    fontSize: {
                      xs: "clamp(34px, 10vw, 54px)",
                      md: "clamp(50px, 5.2vw, 74px)",
                    },
                    lineHeight: 0.98,
                    letterSpacing: "-0.06em",
                    textWrap: "balance",
                  }}
                >
                  Veteran-Owned Hydraulic Repair Built on Precision,
                  Reliability, and Accountability
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    ...bodyCopySx,
                    maxWidth: 820,
                    fontSize: { xs: 15.5, md: 18 },
                    color: "rgba(220,220,220,0.84)",
                  }}
                >
                  Veteran-owned hydraulic cylinder repair for heavy equipment,
                  fleets, contractors, and commercial operations across North
                  Houston — built around disciplined workmanship, clear
                  communication, and tested results.
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
                    href="/services"
                    variant="outlined"
                    sx={secondaryCtaSx}
                  >
                    View Services
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Hero>

        {/* ============================== MISSION / STORY ============================== */}
        <Section sx={industrialSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="MISSION & COMPANY STORY"
                subtitle="Fast turnarounds. Clear communication. Fair pricing. Tested results."
              >
                Hydraulic Repair Built the Right Way
              </SectionTitle>

              <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Box sx={{ ...premiumCardSx, p: { xs: 2.5, md: 3.5 } }}>
                    <Stack spacing={2.25}>
                      <Typography sx={cardBodySx}>
                        Our mission is simple: keep your machines working. We
                        specialize in hydraulic cylinder repairs that are done
                        correctly, measured carefully, and pressure-tested before
                        delivery — so you can put equipment back in service with
                        confidence.
                      </Typography>

                      <Typography sx={cardBodySx}>
                        We believe in honest work and fair deals. That means no
                        surprise charges, no inflated material markups, and no
                        upselling what your cylinder doesn’t need. We help you
                        find the best-value solution without sacrificing quality.
                      </Typography>

                      <Typography sx={cardBodySx}>
                        Vetech Hydraulics is a small, new business — but we’re
                        not new to the work. We’ve been serving our community
                        since 2010 by helping contractors, fleets, and equipment
                        owners solve real problems quickly and affordably.
                      </Typography>

                      <Typography sx={cardBodySx}>
                        We’re built on the belief that a shop should earn trust
                        the old-fashioned way: show up, communicate clearly, do
                        what you said you’d do, and stand behind the repair.
                        That mindset supports hands-on hydraulic repair,
                        disciplined workmanship, honest communication,
                        commercial reliability, and veteran-owned accountability.
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      ...premiumCardSx,
                      p: 0,
                      minHeight: { xs: 280, md: 430 },
                    }}
                  >
                    <Image
                      src={cylinder2}
                      alt="Hydraulic equipment and service work"
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      loading="lazy"
                      quality={82}
                      placeholder="blur"
                      style={{ objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(8,8,10,0.72), transparent 55%)",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Section>

        {/* ============================== VETERAN CREDIBILITY ============================== */}
        <AltSection sx={industrialAltSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="VETERAN-OWNED CREDIBILITY"
                subtitle="Community-driven. Precision-focused. Built for the people who keep Texas working."
              >
                Veteran-Owned Professionalism
              </SectionTitle>

              <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                <Grid item xs={12} md={5}>
                  <Grid container spacing={2}>
                    {[
                      [
                        "/juanVet.webp",
                        "U.S. Army veteran — M1 Abrams Systems Maintainer",
                      ],
                      [
                        "/juanTech.webp",
                        "Hydraulic cylinder repair technician at work",
                      ],
                    ].map(([src, alt]) => (
                      <Grid item xs={6} key={src}>
                        <Box
                          sx={{
                            ...premiumCardSx,
                            p: 0,
                            minHeight: { xs: 240, sm: 320, md: 380 },
                          }}
                        >
                          <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 900px) 50vw, 25vw"
                            loading="lazy"
                            quality={82}
                            placeholder="blur"
                            blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJYgCdAEO/gHOAAA="
                            style={{
                              objectFit: "cover",
                              objectPosition: "center top",
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item xs={12} md={7}>
                  <Box sx={{ ...premiumCardSx, p: { xs: 2.5, md: 3.5 } }}>
                    <Stack spacing={2.25}>
                      <Typography sx={cardBodySx}>
                        Vetech Hydraulics is proudly veteran-owned and operated
                        by Juan Torres, a U.S. Army veteran who served six years
                        as an M1 Abrams Systems Maintainer. That’s where his
                        foundation in high-pressure hydraulic systems, precision
                        work, and accountability began — working under real
                        deadlines, real standards, and real consequences.
                      </Typography>

                      <Typography sx={cardBodySx}>
                        After military service, Juan earned an Associate Degree
                        in Computer Science and continued building his technical
                        problem-solving skills. He later worked professionally
                        as a hydraulic cylinder repair technician and advanced
                        into a leadership role as a shop foreman and trainer —
                        responsible for rebuild standards, quality control, and
                        mentoring other technicians.
                      </Typography>

                      <Typography sx={cardBodySx}>
                        Today, Juan is launching Vetech Hydraulics to support
                        his family and serve the same local contractors, fleets,
                        and operators he has worked alongside for years. This
                        shop was built with a simple promise: honest cylinder
                        repair, fair pricing, and long-lasting solutions —
                        without upselling or shortcuts. Service comes before
                        profit, and quality is never sacrificed.
                      </Typography>

                      <Box
                        sx={{
                          borderRadius: 2.5,
                          p: { xs: 2, md: 2.25 },
                          bgcolor: "rgba(8,8,10,0.38)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          borderLeft: `3px solid ${industrialColors.hydraulicRed}`,
                        }}
                      >
                        <Typography sx={{ ...eyebrowSx, mb: 0.75 }}>
                          VETERAN-OWNED & OPERATED
                        </Typography>
                        <Typography sx={cardBodySx}>
                          Built on discipline, integrity, and pride in
                          workmanship — the same standards we bring to every
                          repair.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </AltSection>

        {/* ============================== VALUES ============================== */}
        <Section sx={industrialSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="OPERATING VALUES"
                subtitle="The standards behind every repair conversation, inspection, quote, rebuild, and delivery."
              >
                Values That Keep Equipment Moving
              </SectionTitle>

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {values.map(([code, title, text]) => (
                  <Grid item xs={12} sm={6} md={4} key={title}>
                    <Box sx={premiumCardSx}>
                      <Box sx={markerSx}>{code}</Box>
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
        </Section>

        {/* ============================== EXPECTATIONS ============================== */}
        <AltSection sx={industrialAltSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <SectionTitle
                eyebrow="WHAT CUSTOMERS CAN EXPECT"
                subtitle="A practical repair process designed to reduce surprises, protect uptime, and support commercial hydraulic equipment."
              >
                Clear Steps. Tested Repairs. Professional Support.
              </SectionTitle>

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {expectations.map(([code, title, text]) => (
                  <Grid item xs={12} sm={6} md={4} key={title}>
                    <Box sx={premiumCardSx}>
                      <Box sx={markerSx}>{code}</Box>
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

        {/* ============================== INDUSTRIES ============================== */}
        <Section sx={industrialSectionSx}>
          <Container maxWidth={false} disableGutters sx={innerContainerSx}>
            <Box sx={containedWidthSx}>
              <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                <Grid item xs={12} md={5.2}>
                  <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                    COMMERCIAL & FLEET SERVICE
                  </Typography>
                  <Typography component="h2" variant="h3" sx={headlineSx}>
                    Industries We Serve
                  </Typography>
                  <Typography sx={{ ...bodyCopySx, mt: 1.5 }}>
                    Vetech Hydraulics supports contractors, fleets, and
                    commercial operations that rely on hydraulic cylinders to
                    keep equipment working under pressure across North Houston.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6.8}>
                  <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                    {industries.map((item) => (
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

        {/* ================================ CTA ================================ */}
        <AltSection sx={industrialAltSectionSx}>
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
                  HYDRAULIC REPAIR SUPPORT
                </Typography>
                <Typography component="h2" variant="h3" sx={headlineSx}>
                  Need a Hydraulic Repair Partner You Can Count On?
                </Typography>
                <Typography
                  sx={{
                    ...bodyCopySx,
                    mt: 1.5,
                    mx: "auto",
                    maxWidth: 760,
                  }}
                >
                  Send photos, dimensions, or job-site details and we’ll help
                  you understand the next step for hydraulic cylinder repair,
                  repacking, pressure testing, or pickup and delivery.
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
        </AltSection>
      </Box>
    </>
  );
}
