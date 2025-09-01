import Head from "next/head";
import Image from "next/image";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { styled } from "@mui/system";
import backHoe from "../image/backHoe.webp";

const Hero = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "42vh",
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

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Learn about Vetech Hydraulics—our mission, experience, and commitment to fast, reliable cylinder repairs."
        />
      </Head>

      {/* HERO */}
      <Hero>
        <Image
          src={backHoe}
          alt=""
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
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)",
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
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 900, fontSize: { xs: 28, md: 44 } }}
          >
            About Vetech Hydraulics
          </Typography>
        </Container>
      </Hero>

      {/* MISSION */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                sx={{ color: "#fff", fontSize: 20, fontWeight: 800, mb: 1 }}
              >
                Our Mission
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                Keep your machines working. We specialize in quick, dependable
                hydraulic cylinder repairs with clear communication, fair
                pricing, and tested results—so your team can get back to work
                faster.
              </Typography>
              <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.12)" }} />
              <Grid container spacing={2}>
                {[
                  { k: "24–72 hr", v: "Typical Turnaround" },
                  { k: "Leak-Tested", v: "Before Delivery" },
                  { k: "Local", v: "Pickup/Delivery" },
                ].map((s, i) => (
                  <Grid item xs={4} key={i}>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: "#102A3A",
                        borderRadius: 2,
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Typography sx={{ color: "#6EC1FF", fontWeight: 900 }}>
                        {s.k}
                      </Typography>
                      <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                        {s.v}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  pb: "66%",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={backHoe}
                  alt="Shop preview"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* STORY */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Typography
            sx={{ color: "#fff", fontWeight: 800, fontSize: 24, mb: 1 }}
          >
            Our Story
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
            Vetech Hydraulics was founded to serve contractors, fleet managers,
            and operators who need dependable cylinder service without the
            runaround. We combine hands-on experience, careful inspection, and
            quality parts to deliver results you can count on.
          </Typography>
        </Container>
      </AltSection>
    </>
  );
}
