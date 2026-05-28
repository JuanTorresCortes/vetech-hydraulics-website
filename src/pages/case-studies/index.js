// Case studies index: renders marketing-friendly repair scenarios from src/data/caseStudies.js.
// Add or revise case study cards in the data file; this page should stay focused on listing and routing to detail pages.
import Image from "next/image";
import NextLink from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SeoHead from "../../components/SeoHead";
import { caseStudies } from "../../data/caseStudies";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialCardSx,
  primaryCtaSx,
  secondaryCtaSx,
  sectionBase,
} from "../../utils/visualStyles";

const HeroSection = styled(Box)(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  position: "relative",
  paddingBlock: theme.spacing(9),
  overflow: "hidden",
  background:
    "radial-gradient(circle at 16% 18%, rgba(215,25,32,0.18), transparent 34%), linear-gradient(135deg, #02060A 0%, #071522 48%, #02060A 100%)",
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(13) },
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
}));

const Section = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0F2331",
}));

export default function CaseStudiesIndexPage() {
  return (
    <>
      {/* Case-study index SEO describes the collection; individual case metadata lives in caseStudies.js. */}
      <SeoHead
        title="Hydraulic Repair Case Studies | Vetech Hydraulics"
        description="Hydraulic cylinder repair case studies for fleet, construction, waste management, and heavy equipment repair scenarios from Vetech Hydraulics."
        path="/case-studies"
        ogImage="/og/repair.webp"
      />

      <Box component="main">
        {/* Hero explains that these are example repair profiles rather than live customer records. */}
        <HeroSection>
          <Container
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 1, ...containerSx }}
          >
            <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
              <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                EXAMPLE REPAIR PROFILES
              </Typography>
              <Typography component="h1" variant="h1" sx={{ color: "#F7FAFC" }}>
                Real-World Repair Scenarios Built Around Reliability
              </Typography>
              <Typography
                sx={{
                  ...bodyCopySx,
                  mt: 2,
                  mx: "auto",
                  maxWidth: 760,
                  fontSize: { xs: 15.5, md: 18 },
                }}
              >
                Explore typical hydraulic repair scenarios for fleet,
                construction, waste management, and heavy-equipment operations —
                each outlining a common repair workflow, verification focus, and
                return-to-service priorities.
              </Typography>
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
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {/* Cards are generated from shared case-study data so detail pages and listings stay aligned. */}
              {caseStudies.map((caseStudy) => (
                <Grid item xs={12} md={4} key={caseStudy.slug}>
                  <Box
                    sx={{
                      ...industrialCardSx,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{ position: "relative", width: "100%", pb: "62%" }}
                    >
                      <Image
                        src={caseStudy.heroImage}
                        alt={caseStudy.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
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
                            "linear-gradient(to top, rgba(2,6,10,0.84), rgba(2,6,10,0.08))",
                        }}
                      />
                      <Typography
                        sx={{
                          position: "absolute",
                          left: 16,
                          bottom: 14,
                          px: 1.25,
                          py: 0.65,
                          borderRadius: "999px",
                          bgcolor: "rgba(215,25,32,0.9)",
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 950,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {caseStudy.status}
                      </Typography>
                    </Box>
                    <Stack
                      spacing={1.5}
                      sx={{ p: { xs: 2.5, md: 3 }, flex: 1 }}
                    >
                      <Typography
                        component="h2"
                        sx={{
                          color: "#F7FAFC",
                          fontWeight: 950,
                          fontSize: { xs: 22, md: 24 },
                          lineHeight: 1.12,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {caseStudy.shortTitle}
                      </Typography>
                      <Typography sx={{ ...bodyCopySx, fontSize: 14.5 }}>
                        {caseStudy.summary}
                      </Typography>
                      <Typography
                        sx={{
                          ...eyebrowSx,
                          color: "rgba(231,238,244,0.58)",
                          mt: "auto",
                        }}
                      >
                        {caseStudy.equipmentType}
                      </Typography>
                      <Button
                        component={NextLink}
                        href={`/case-studies/${caseStudy.slug}`}
                        variant="outlined"
                        sx={secondaryCtaSx}
                      >
                        View Case Study
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

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
              }}
            >
              <Typography component="h2" variant="h3" sx={headlineSx}>
                Need a Hydraulic Cylinder Repaired?
              </Typography>
              <Typography
                sx={{ ...bodyCopySx, mt: 1.25, mx: "auto", maxWidth: 720 }}
              >
                Send photos, equipment details, or fleet repair requirements and
                we will help you plan a dependable repair path.
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
                  component={NextLink}
                  href="/services"
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  View Services
                </Button>
              </Stack>
            </Box>
          </Container>
        </Section>
      </Box>
    </>
  );
}
