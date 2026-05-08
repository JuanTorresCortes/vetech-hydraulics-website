import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";
import backHoe from "../../image/backHoe.webp";

/* ------------------------------ Full-bleed Layout ------------------------------ */
const FullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const Hero = styled(Box)(({ theme }) => ({
  ...FullBleed,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  minHeight: "70vh",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: 0,
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: { minHeight: "62vh" },
  [theme.breakpoints.down("md")]: { minHeight: "58svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "52svh" },
}));

const Section = styled("section")(({ theme }) => ({
  ...FullBleed,
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0F2331",
  overflow: "hidden",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...FullBleed,
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0B1B27",
  overflow: "hidden",
}));

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: 5 }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 900,
        fontSize: {
          xs: "clamp(22px, 6.2vw, 34px)",
          md: "clamp(28px, 3vw, 42px)",
        },
        textWrap: "balance",
        lineHeight: 1.1,
      }}
    >
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          color: "rgba(255,255,255,0.78)",
          mt: 1,
          maxWidth: 900,
          mx: "auto",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* ------------------------------ JSON-LD ------------------------------ */
const serviceSchemaApolonia = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hydraulic Cylinder Repair in Apolonia, TX",
  serviceType:
    "Hydraulic cylinder repair, repacking, resealing, rod inspection, pressure testing",
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
    { "@type": "City", name: "Apolonia", addressRegion: "TX" },
    { "@type": "City", name: "Anderson", addressRegion: "TX" },
    {
      "@type": "AdministrativeArea",
      name: "Grimes County",
      addressRegion: "TX",
    },
  ],
};

/* -------------------------------- Page -------------------------------- */

export default function ApoloniaServicePage() {
  return (
    <>
      <Head>
        <title>
          Hydraulic Cylinder Repair in Apolonia, TX | Vetech Hydraulics
        </title>
        <meta
          name="description"
          content="Hydraulic cylinder repair in Apolonia, TX serving Grimes County with repacking, resealing, rod inspection, and pressure-tested rebuilds. Text photos for a fast quote."
        />
        <link
          rel="canonical"
          href="https://www.vetechhydraulics.com/service-areas/apolonia-tx-hydraulic-cylinder-repair"
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchemaApolonia)}
        </script>
      </Head>

      {/* ============================== HERO ============================== */}
      <Hero>
        <Image
          src={backHoe}
          alt="Hydraulic equipment working in rural Texas"
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
              "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.25) 85%)",
          }}
        />

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
          <Box sx={{ maxWidth: 1100, mx: "auto", textAlign: "center" }}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "clamp(26px, 7vw, 36px)", md: 48 },
                lineHeight: 1.05,
                mb: 1.25,
              }}
            >
              Hydraulic Cylinder Repair in Apolonia, Texas
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.86)",
                maxWidth: 880,
                mx: "auto",
                mb: 2.5,
                lineHeight: 1.7,
                fontSize: { xs: 14.5, sm: 16 },
              }}
            >
              Pressure-tested cylinder repacking and repair support for
              equipment owners near Apolonia and Anderson — built for
              reliability, fair pricing, and minimal downtime.
            </Typography>

            <ConsultationButton />
          </Box>
        </Container>
      </Hero>

      {/* ============================== LOCAL CONTEXT ============================== */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="A small community with deep working roots.">
              Serving Apolonia and Central Grimes County
            </SectionTitle>

            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3.5 },
                    borderRadius: 3,
                    bgcolor: "#102A3A",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
                    Built around hands-on work
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    Apolonia is a small rural community about three miles east
                    of Anderson in south-central Grimes County. Founded in the
                    1830s as a lumbering center, the area later grew through
                    Polish immigrant families who named the local post office in
                    honor of Saint Apollonia. Communities like this run on
                    dependable equipment — when a hydraulic cylinder fails,
                    downtime hits fast.
                  </Typography>

                  <Divider
                    sx={{ my: 2.5, borderColor: "rgba(255,255,255,0.12)" }}
                  />

                  <Typography sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
                    What that means for your equipment
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8 }}
                  >
                    Whether you’re supporting land work, ranch operations, or
                    maintenance equipment around Apolonia and Anderson, we help
                    you plan repairs that make sense — clean rebuilds, correct
                    seal selection, and pressure testing before reinstall.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: { xs: 220, sm: 280, md: "100%" },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src={backHoe}
                    alt="Hydraulic cylinder service for rural Texas equipment"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AltSection>

      {/* ============================== SERVICES ============================== */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Focused hydraulic cylinder work, without upsells.">
              Cylinder Repair Services for Apolonia, TX
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  title: "Cylinder Repacking & Resealing",
                  text: "Replace worn seals, wipers, and wear bands to stop leaks and restore pressure — done clean and measured.",
                },
                {
                  title: "Rod Inspection & Seal-Life Corrections",
                  text: "We inspect for scoring, pitting, and alignment issues that cause repeat seal failure.",
                },
                {
                  title: "Pressure Testing Before Delivery",
                  text: "Every rebuilt cylinder is tested so you reinstall with confidence.",
                },
                {
                  title: "Honest Repair Guidance",
                  text: "If a cylinder isn’t worth repairing, we’ll tell you. If it is, we recommend the best-value fix.",
                },
              ].map((item, idx) => (
                <Grid item xs={12} md={6} key={idx}>
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
                      <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
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

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 2,
                  maxWidth: 900,
                  mx: "auto",
                }}
              >
                The fastest way to start is to text photos of the cylinder (rod,
                gland, and leak area) along with your location. We’ll respond
                with a realistic plan and next steps.
              </Typography>
              <ConsultationButton />
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

/* ------------------------------ Meta export ------------------------------ */
export const meta = {
  title: "Hydraulic Cylinder Repair in Apolonia, TX | Vetech Hydraulics",
  description:
    "Hydraulic cylinder repair in Apolonia, TX serving Grimes County with repacking, resealing, rod inspection, and pressure-tested rebuilds. Text photos for a fast quote.",
};
