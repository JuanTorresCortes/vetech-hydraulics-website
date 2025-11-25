import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";

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
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 800,
        fontSize: {
          xs: "clamp(22px, 6vw, 32px)",
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

export default function ServiceAreasOverview() {
  const areas = [
    {
      city: "Montgomery",
      focus: "Hydraulic cylinder repair & repacking",
      path: "/service-areas/montgomery",
    },
    { city: "Magnolia", focus: "Telescopic cylinder repair", path: null },
    { city: "Conroe", focus: "Trash truck hydraulic repair", path: null },
    { city: "Willis", focus: "Construction & farm equipment cylinders", path: null },
    { city: "The Woodlands", focus: "On-site pull/install support when needed", path: null },
    { city: "Greater Houston", focus: "Pickup and delivery options", path: null },
  ];

  return (
    <>
      <Head>
        <title>Service Areas | Hydraulic Cylinder Repair | Vetech Hydraulics</title>
        <meta
          name="description"
          content="See how local service area pages help you get faster hydraulic cylinder repair in Montgomery, Magnolia, Conroe, Willis, The Woodlands, and Houston."
        />
      </Head>

      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: 30, md: 44 },
              textWrap: "balance",
              mb: 2,
            }}
          >
            How local service areas benefit you
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", maxWidth: { md: "70%" } }}>
            Local, veteran-owned hydraulic cylinder repair that keeps your trash trucks, heavy equipment, and rental fleets making money. These service area pages make it easier for you to get fast answers, accurate quotes, and dependable support in Montgomery County and the Houston area.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <ConsultationButton>Call now for fast turnaround</ConsultationButton>
          </Box>
        </Container>
      </Section>

      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionTitle subtitle="Fewer delays. Cleaner installs. Longer-lasting cylinders.">
            Why these pages help your business
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Faster responses",
                text: "Each page shows pickup options, turnaround times, and the exact cylinder work we do in your city so you can get back on route faster.",
              },
              {
                title: "Better pricing clarity",
                text: "Local details let us give tighter estimates on seal kits, rod polish, and repacking for trash trucks, excavators, and rental equipment.",
              },
              {
                title: "Local SEO visibility",
                text: "Pages for Montgomery, Magnolia, Conroe, Willis, The Woodlands, and Houston help nearby crews find a veteran-owned shop instead of waiting on distant vendors.",
              },
              {
                title: "Less downtime",
                text: "By setting expectations on logistics, testing, and communication, you lose fewer hours coordinating cylinder repair and reinstalling equipment.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
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
        </Container>
      </AltSection>

      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionTitle subtitle="Clear steps from first call to reinstall">
            What to expect when you contact us
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Share your cylinder photos",
                text: "Send quick pictures of the rod, gland, and any leaks. We confirm dimensions and quote the repack or repair with honest pricing.",
              },
              {
                title: "Plan pickup or drop-off",
                text: "Choose drop-off at the shop or schedule local pickup around Montgomery, Magnolia, Conroe, Willis, The Woodlands, or greater Houston.",
              },
              {
                title: "Repack, polish, and test",
                text: "We reseal telescopic, single-acting, and double-acting cylinders with quality seals, light welding, and pressure testing before delivery.",
              },
              {
                title: "Install with confidence",
                text: "You get a clean, tested cylinder plus guidance for reinstall so you avoid repeat downtime and keep routes on schedule.",
              },
            ].map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                    <Typography sx={{ color: "#6EC1FF", fontWeight: 800, mb: 0.5 }}>
                      Step {index + 1}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {step.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionTitle subtitle="One place to find your closest hydraulic help">
            Service areas
          </SectionTitle>

          <Grid container spacing={3}>
            {areas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent sx={{ color: "#fff", display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {area.city}
                    </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                    {area.focus}
                  </Typography>
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
                  {area.path ? (
                    <Button
                      component={Link}
                      href={area.path}
                      variant="outlined"
                      sx={{
                        color: "#6EC1FF",
                        borderColor: "rgba(110,193,255,0.4)",
                        textTransform: "none",
                        fontWeight: 700,
                        alignSelf: "flex-start",
                      }}
                    >
                      View {area.city} details
                    </Button>
                  ) : (
                    <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                      Call for {area.city} scheduling
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </AltSection>

      <Section>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionTitle subtitle="Quick answers for equipment owners in Montgomery County and Houston">
            FAQ
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                q: "How do service area pages help me?",
                a: "They give city-specific pickup options, turnaround times, and cylinder types we handle so you get accurate pricing and less downtime.",
              },
              {
                q: "Do you only work in Montgomery County?",
                a: "We serve Montgomery, Magnolia, Conroe, Willis, The Woodlands, and the greater Houston area with flexible logistics for trash trucks and heavy equipment.",
              },
              {
                q: "Which cylinders do you repair?",
                a: "Telescopic, single-acting, double-acting, trash truck packer and sweep cylinders, excavator boom and stick cylinders, and more.",
              },
              {
                q: "What makes a faster turnaround possible?",
                a: "Clear photos up front, local pickup/drop-off, quality seals, rod polish, and bench testing so reinstall goes smooth the first time.",
              },
              {
                q: "Can you help me decide if a cylinder is worth repairing?",
                a: "Yes. We inspect rods, pistons, and packing sets, then give honest recommendations so you avoid unnecessary spend and keep equipment earning.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {item.q}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {item.a}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <AltSection>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}>
          <Typography component="h2" variant="h4" sx={{ color: "#fff", fontWeight: 900, mb: 1 }}>
            Call now for fast hydraulic cylinder repair
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
            Veteran-owned, local, and focused on keeping your equipment earning with clean, tested cylinders and honest communication.
          </Typography>
          <ConsultationButton>Get a quote today</ConsultationButton>
        </Container>
      </AltSection>
    </>
  );
}

export const meta = {
  title: "Service Areas | Hydraulic Cylinder Repair | Vetech Hydraulics",
  description:
    "See how local service area pages help you get faster hydraulic cylinder repair in Montgomery, Magnolia, Conroe, Willis, The Woodlands, and Houston.",
};

