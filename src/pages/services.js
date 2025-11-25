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
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import backHoe from "../image/backHoe.webp";
import ConsultationButton from "../components/ConsultationButton";

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
      component="h1"
      variant="h2"
      sx={{
        color: "#fff",
        fontWeight: 800,
        fontSize: {
          xs: "clamp(24px, 6vw, 36px)",
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

const CardImage = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%",
      borderRadius: 2,
      overflow: "hidden",
    }}
  >
    <Image
      src={backHoe}
      alt="Placeholder"
      fill
      sizes="(max-width: 600px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Hydraulic cylinder repair services: repacking, resealing, rod polish, testing, pickup and delivery."
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
            Cylinder Repair Services
          </Typography>
        </Container>
      </Hero>

      {/* WHAT WE DO */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Fast turnarounds. Tested. Warrantied.">
            What We Do
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Cylinder Repacking",
                text: "Seal replacement, wipers, wear rings, leak remediation on tie-rod & welded cylinders.",
              },
              {
                title: "Reseal & Bench Test",
                text: "Full reseal and pressure testing to verify performance before delivery.",
              },
              {
                title: "Rod Polish & Chrome Prep",
                text: "Light rod refinishing; evaluation for re-chrome when required.",
              },
              {
                title: "Gland & Eye Repairs",
                text: "Thread repairs, gland machining, clevis and eye work as needed.",
              },
              {
                title: "Pickup & Delivery",
                text: "Local pickup/delivery options to keep your equipment moving.",
              },
              {
                title: "On-Site Support",
                text: "Pull/install support on request; minimize downtime on job sites.",
              },
            ].map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <CardImage />
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {s.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {s.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* PROCESS */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Simple, transparent, efficient.">
            Our Repair Process
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                step: "1",
                title: "Check-In & Inspect",
                text: "Receive, clean, measure, and inspect components.",
              },
              {
                step: "2",
                title: "Quote & Approve",
                text: "Clear estimate for parts and labor. No surprises.",
              },
              {
                step: "3",
                title: "Repack / Rebuild",
                text: "Replace seals/wear items; machining if required.",
              },
              {
                step: "4",
                title: "Pressure Test & Deliver",
                text: "Leak-test and return ready to reinstall.",
              },
            ].map((p, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#fff",
                  }}
                >
                  <Typography sx={{ color: "#6EC1FF", fontWeight: 800 }}>
                    Step {p.step}
                  </Typography>
                  <Typography sx={{ fontWeight: 800, mt: 0.5 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 0.5 }}>
                    {p.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* CTA */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ color: "#fff", fontWeight: 800, mb: 2 }}
          >
            Need a fast quote?
          </Typography>
          <ConsultationButton />
        </Container>
      </Section>
    </>
  );
}
