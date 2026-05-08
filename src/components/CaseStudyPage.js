import Image from "next/image";
import NextLink from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SeoHead from "./SeoHead";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialCardSx,
  primaryCtaSx,
  secondaryCtaSx,
  sectionBase,
} from "../utils/visualStyles";

const HeroSection = styled(Box)(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  minHeight: "72vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  color: "#fff",
  background:
    "radial-gradient(circle at 16% 18%, rgba(215,25,32,0.22), transparent 34%), linear-gradient(135deg, #02060A 0%, #071522 48%, #02060A 100%)",
  [theme.breakpoints.down("md")]: { minHeight: "66svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "70svh" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
    backgroundSize: "46px 46px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.66), transparent 80%)",
    zIndex: 1,
  },
}));

const Section = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0F2331",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0B1B27",
}));

const DetailBlock = ({ eyebrow, title, children }) => (
  <Box sx={{ ...industrialCardSx, p: { xs: 2.5, md: 3.5 }, height: "100%" }}>
    {eyebrow && <Typography sx={{ ...eyebrowSx, mb: 1 }}>{eyebrow}</Typography>}
    <Typography
      component="h2"
      sx={{
        color: "#F7FAFC",
        fontWeight: 950,
        fontSize: { xs: 24, md: 32 },
        lineHeight: 1.12,
        letterSpacing: "-0.035em",
        mb: 1.5,
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export default function CaseStudyPage({ caseStudy }) {
  return (
    <>
      <SeoHead
        title={caseStudy.metaTitle}
        description={caseStudy.metaDescription}
        path={`/case-studies/${caseStudy.slug}`}
      />

      <Box component="main">
        <HeroSection>
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.24,
              filter: "contrast(1.12) saturate(0.72)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(90deg, rgba(2,6,10,0.98) 0%, rgba(2,6,10,0.88) 48%, rgba(7,21,34,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.18))",
            }}
          />
          <Container
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 2, ...containerSx }}
          >
            <Box sx={{ maxWidth: 940, py: { xs: 14, md: 18 } }}>
              <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                HYDRAULIC REPAIR CASE STUDY
              </Typography>
              <Typography component="h1" variant="h1" sx={{ color: "#F7FAFC" }}>
                {caseStudy.title}
              </Typography>
              <Typography
                sx={{
                  ...bodyCopySx,
                  mt: 2.25,
                  maxWidth: 780,
                  fontSize: { xs: 15.5, md: 18 },
                }}
              >
                {caseStudy.summary}
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3.5, alignItems: { xs: "stretch", sm: "center" } }}
              >
                <Button
                  component={NextLink}
                  href="/contact"
                  variant="contained"
                  sx={primaryCtaSx}
                >
                  Request Service
                </Button>
                <Button
                  component={NextLink}
                  href="/case-studies"
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  View Case Studies
                </Button>
              </Stack>
            </Box>
          </Container>
        </HeroSection>

        <Section
          sx={{
            background:
              "radial-gradient(circle at 12% 0%, rgba(215,25,32,0.14), transparent 34%), linear-gradient(180deg, #071522 0%, #0B1B27 52%, #07131D 100%)",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
              <Grid item xs={12} md={4}>
                <DetailBlock
                  eyebrow="EQUIPMENT TYPE"
                  title={caseStudy.equipmentType}
                >
                  <Typography sx={bodyCopySx}>
                    A representative repair scenario built for future real job
                    photos, measurements, customer details, and verified repair
                    documentation.
                  </Typography>
                </DetailBlock>
              </Grid>
              <Grid item xs={12} md={8}>
                <DetailBlock eyebrow="PROBLEM" title="What Failed">
                  <Typography sx={bodyCopySx}>{caseStudy.problem}</Typography>
                </DetailBlock>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <AltSection>
          <Container maxWidth="lg" sx={containerSx}>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid item xs={12} md={7}>
                <DetailBlock
                  eyebrow="REPAIR PROCESS"
                  title="How the Repair Was Handled"
                >
                  <Stack component="ol" spacing={1.5} sx={{ m: 0, pl: 2.5 }}>
                    {caseStudy.repairProcess.map((step) => (
                      <Typography component="li" key={step} sx={bodyCopySx}>
                        {step}
                      </Typography>
                    ))}
                  </Stack>
                </DetailBlock>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack spacing={3} sx={{ height: "100%" }}>
                  <DetailBlock eyebrow="TESTING" title="Verification">
                    <Typography sx={bodyCopySx}>{caseStudy.testing}</Typography>
                  </DetailBlock>
                  <DetailBlock eyebrow="RESULTS" title="Outcome">
                    <Typography sx={bodyCopySx}>{caseStudy.outcome}</Typography>
                  </DetailBlock>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </AltSection>

        <Section
          sx={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(215,25,32,0.2), transparent 34%), linear-gradient(180deg, #07131D 0%, #050A0F 100%)",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <Box
              sx={{
                ...industrialCardSx,
                p: { xs: 3, md: 5 },
                textAlign: "center",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <Typography component="h2" variant="h3" sx={headlineSx}>
                Need a Similar Hydraulic Repair?
              </Typography>
              <Typography
                sx={{ ...bodyCopySx, mt: 1.25, mx: "auto", maxWidth: 720 }}
              >
                Send photos, equipment details, and symptoms. We will help you
                map the fastest path to a reliable cylinder repair.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 3, alignItems: { xs: "stretch", sm: "center" } }}
              >
                <Button
                  component={NextLink}
                  href="/contact"
                  variant="contained"
                  sx={primaryCtaSx}
                >
                  Request Service
                </Button>
                <Button
                  component="a"
                  href="tel:+19362496042"
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  Call Now
                </Button>
              </Stack>
            </Box>
          </Container>
        </Section>
      </Box>
    </>
  );
}
