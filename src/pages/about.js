// src/pages/about.js
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import backHoe from "../image/backHoe.webp";
import cylinder1 from "../image/cylinder-1.webp";
import cylinder2 from "../image/cylinder-2.webp";

/* ------------------------------ Styled UI ------------------------------ */
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
  overflow: "hidden", // prevent tiny horizontal scroll from 100vw
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
          maxWidth: 880,
          mx: "auto",
          textWrap: "balance",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* --------------------------------- Page -------------------------------- */

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Learn about Vetech Hydraulics—our mission, founder story, and commitment to fast, reliable hydraulic cylinder repairs with fair pricing and tested results."
        />
      </Head>

      <Box component="main">
        {/* ============================== HERO ============================== */}
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
            <Box sx={{ maxWidth: 1100, mx: "auto" }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "clamp(26px, 7vw, 34px)", md: 48 },
                  lineHeight: 1.05,
                  textWrap: "balance",
                }}
              >
                About Vetech Hydraulics
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: 820,
                  mx: "auto",
                  fontSize: { xs: 14.5, sm: 16 },
                  lineHeight: 1.75,
                }}
              >
                A local hydraulic cylinder repair shop built on service,
                integrity, and American work ethic — focused on keeping your
                equipment running and your downtime low.
              </Typography>
            </Box>
          </Container>
        </Hero>

        {/* ============================== MISSION ============================== */}
        <Section>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ px: { xs: 2, sm: 3 } }}
          >
            <Box sx={{ maxWidth: 1100, mx: "auto" }}>
              <SectionTitle subtitle="Fast turnarounds. Clear communication. Fair pricing. Tested results.">
                Our Mission
              </SectionTitle>

              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Stack spacing={2.25}>
                    <Typography
                      sx={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.75 }}
                    >
                      Our mission is simple: keep your machines working. We
                      specialize in hydraulic cylinder repairs that are done
                      correctly, measured carefully, and pressure-tested before
                      delivery — so you can put equipment back in service with
                      confidence.
                    </Typography>

                    <Typography
                      sx={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.75 }}
                    >
                      We believe in honest work and fair deals. That means no
                      surprise charges, no inflated material markups, and no
                      upselling what your cylinder doesn’t need. We help you
                      find the best-value solution without sacrificing quality.
                    </Typography>

                    <Divider
                      sx={{ my: 1, borderColor: "rgba(255,255,255,0.12)" }}
                    />

                    <Grid container spacing={2}>
                      {[
                        { k: "24–72 hr", v: "Typical Turnaround" },
                        { k: "Leak-Tested", v: "Before Delivery" },
                        { k: "Local", v: "Pickup/Delivery" },
                      ].map((s, i) => (
                        <Grid item xs={12} sm={4} key={i}>
                          <Box
                            sx={{
                              p: 2,
                              bgcolor: "#102A3A",
                              borderRadius: 2,
                              border: "1px solid rgba(255,255,255,0.06)",
                              height: "100%",
                            }}
                          >
                            <Typography
                              sx={{ color: "#6EC1FF", fontWeight: 900 }}
                            >
                              {s.k}
                            </Typography>
                            <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                              {s.v}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      pb: { xs: "66%", md: "78%" },
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Image
                      src={cylinder2}
                      alt="Hydraulic equipment and service work"
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Section>

        {/* ============================== STORY + FOUNDER ============================== */}
        <AltSection>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ px: { xs: 2, sm: 3 } }}
          >
            <Box sx={{ maxWidth: 1100, mx: "auto" }}>
              <SectionTitle subtitle="Small business values. Big accountability. Built for the people who keep Texas working.">
                Our Story
              </SectionTitle>

              <Stack spacing={2.25} sx={{ color: "rgba(255,255,255,0.86)" }}>
                <Typography sx={{ lineHeight: 1.8 }}>
                  Vetech Hydraulics is a small, new business — but we’re not new
                  to the work. We’ve been serving our community since 2010 by
                  helping contractors, fleets, and equipment owners solve real
                  problems quickly and affordably.
                </Typography>

                <Typography sx={{ lineHeight: 1.8 }}>
                  We’re built on the belief that a shop should earn trust the
                  old-fashioned way: show up, communicate clearly, do what you
                  said you’d do, and stand behind the repair. That mindset comes
                  from a patriotic, service-first mentality — the idea that your
                  word matters and your work should speak for itself.
                </Typography>

                <Typography sx={{ lineHeight: 1.8 }}>
                  Over the years, we saw too many people get hit with inflated
                  quotes, unnecessary add-ons, and downtime that dragged on for
                  weeks. So we set out to build something different: a cylinder
                  repair shop focused on precision, testing, and fairness —
                  where the customer gets the value, not the runaround.
                </Typography>

                <Typography sx={{ lineHeight: 1.8 }}>
                  Today, our goal is bigger than just repairs. We’re building a
                  local network that helps businesses save money, reduce
                  breakdowns, and improve uptime across the region. We believe
                  strong communities are built when local businesses look out
                  for each other — and we’re proud to be part of that.
                </Typography>
              </Stack>

              <Divider
                sx={{
                  my: { xs: 4, md: 5 },
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              />

              {/* ============================== FOUNDER BIO ============================== */}
              <Box sx={{ maxWidth: 1100, mx: "auto" }}>
                <SectionTitle subtitle="Veteran-owned. Community-driven. Precision-focused.">
                  Meet the Owner
                </SectionTitle>

                <Grid container spacing={4} alignItems="center">
                  {/* Images */}
                  <Grid item xs={12} md={5}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            position: "relative",
                            pb: "125%",
                            borderRadius: 3,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.08)",
                            bgcolor: "rgba(255,255,255,0.03)",
                          }}
                        >
                          <Image
                            src="/juanVet.webp"
                            alt="U.S. Army veteran — M1 Abrams Systems Maintainer"
                            fill
                            sizes="(max-width: 900px) 50vw, 25vw"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center top",
                            }}
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            position: "relative",
                            pb: "125%",
                            borderRadius: 3,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.08)",
                            bgcolor: "rgba(255,255,255,0.03)",
                          }}
                        >
                          <Image
                            src="/juanTech.webp"
                            alt="Hydraulic cylinder repair technician at work"
                            fill
                            sizes="(max-width: 900px) 50vw, 25vw"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center top",
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Text */}
                  <Grid item xs={12} md={7}>
                    <Stack spacing={2.25}>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.86)",
                          lineHeight: 1.8,
                        }}
                      >
                        Vetech Hydraulics is proudly veteran-owned and operated
                        by Juan Torres, a U.S. Army veteran who served six years
                        as an M1 Abrams Systems Maintainer. That’s where his
                        foundation in high-pressure hydraulic systems, precision
                        work, and accountability began — working under real
                        deadlines, real standards, and real consequences.
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.86)",
                          lineHeight: 1.8,
                        }}
                      >
                        After military service, Juan earned an Associate Degree
                        in Computer Science and continued building his technical
                        problem-solving skills. He later worked professionally
                        as a hydraulic cylinder repair technician and advanced
                        into a leadership role as a shop foreman and trainer —
                        responsible for rebuild standards, quality control, and
                        mentoring other technicians.
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.86)",
                          lineHeight: 1.8,
                        }}
                      >
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
                          mt: 0.5,
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "rgba(16,42,58,0.75)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6EC1FF",
                            fontWeight: 900,
                            fontSize: { xs: 14, sm: 15 },
                          }}
                        >
                          Veteran-Owned & Operated
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.82)",
                            mt: 0.5,
                            lineHeight: 1.7,
                          }}
                        >
                          Built on discipline, integrity, and pride in
                          workmanship — the same standards we bring to every
                          repair.
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Divider
                sx={{
                  my: { xs: 4, md: 5 },
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              />

              {/* ============================== EXPECTATIONS ============================== */}
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 3,
                  bgcolor: "#102A3A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Typography
                  sx={{
                    color: "#6EC1FF",
                    fontWeight: 900,
                    fontSize: { xs: 16, sm: 18 },
                    mb: 1,
                  }}
                >
                  What You Can Expect From Us
                </Typography>

                <Grid container spacing={2}>
                  {[
                    {
                      k: "Honest recommendations",
                      v: "We only suggest what improves reliability and seal life.",
                    },
                    {
                      k: "Respect for your budget",
                      v: "We aim for the best-value fix without sacrificing quality.",
                    },
                    {
                      k: "Accountability",
                      v: "We test repairs and stand behind the work we deliver.",
                    },
                    {
                      k: "Community mindset",
                      v: "We’re here to help local businesses run stronger, longer.",
                    },
                  ].map((item, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                        {item.k}
                      </Typography>
                      <Typography
                        sx={{ color: "rgba(255,255,255,0.82)", mt: 0.5 }}
                      >
                        {item.v}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Container>
        </AltSection>
      </Box>
    </>
  );
}
