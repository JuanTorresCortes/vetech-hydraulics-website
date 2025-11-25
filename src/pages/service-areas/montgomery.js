import Head from "next/head";
import Image from "next/image";
import { Box, Container, Typography, Grid, Card, CardContent, Divider, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import backHoe from "../../image/backHoe.webp";
import ConsultationButton from "../../components/ConsultationButton";

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

export default function MontgomeryServiceArea() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair Montgomery TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Veteran-owned hydraulic cylinder repair in Montgomery, TX. Fast turnaround on telescopic, trash truck, and heavy equipment cylinders."
        />
      </Head>

      {/* HERO */}
      <Hero>
        <Image
          src={backHoe}
          alt="Hydraulic equipment in Montgomery, TX"
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
            Hydraulic Cylinder Repair in Montgomery, TX
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "rgba(255,255,255,0.9)",
              maxWidth: { md: "60%" },
            }}
          >
            Veteran-owned, local, and focused on keeping your equipment earning. We
            fix leaking, bent, and slow cylinders with honest pricing and quick
            turnarounds.
          </Typography>
        </Container>
      </Hero>

      {/* WHY CHOOSE */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Less downtime. Stronger cylinders. Local support.">
            Why Montgomery crews trust us
          </SectionTitle>

          <Grid container spacing={3}>
            {[ 
              {
                title: "Fast turnaround",
                text: "24–72 hour typical turnaround to keep trash routes, rental fleets, and construction sites moving.",
              },
              {
                title: "Telescopic cylinder experts",
                text: "Dump truck, roll-off, and trash truck cylinders repaired, repacked, and tested before delivery.",
              },
              {
                title: "Veteran-owned, honest pricing",
                text: "Straightforward quotes, quality seals, and workmanship you can count on.",
              },
              {
                title: "Local pickup options",
                text: "Serving Montgomery, Magnolia, Conroe, Willis, The Woodlands, and greater Houston with flexible logistics.",
              },
            ].map((item, index) => (
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
      </Section>

      {/* SERVICES */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Heavy equipment, trash trucks, and industrial cylinders">
            Montgomery hydraulic cylinder services
          </SectionTitle>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <List sx={{ color: "#fff", pl: 0 }}>
                {[ 
                  "Telescopic cylinder repair and reseal for dump trucks and roll-off trucks",
                  "Trash truck hydraulic repair for packer, sweep, and grabber cylinders",
                  "Single-acting and double-acting cylinder repacking with quality seal kits",
                  "Rod polish, light welding, and eye repairs to restore smooth operation",
                  "Cylinder testing, inspection, and leak checks before reinstalling",
                  "Farm, ranch, and construction equipment cylinder support",
                ].map((service, idx) => (
                  <ListItem key={idx} sx={{ display: "list-item", pl: 2 }}>
                    <Typography>{service}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  bgcolor: "#102A3A",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <CardContent sx={{ color: "#fff" }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                    Cylinders we handle every day
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                    Telescopic dump cylinders, skid steer lift cylinders, excavator boom
                    and stick cylinders, steering cylinders, stabilizers, and custom
                    industrial setups. If it lifts, dumps, or steers, we can service it.
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }} />
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>
                    What you get
                  </Typography>
                  <List sx={{ color: "rgba(255,255,255,0.9)", pl: 2 }}>
                    {[ 
                      "Clean teardown and inspection",
                      "Fresh seals, wipers, and wear bands",
                      "Pressure/leak testing before delivery",
                      "Clear updates and honest recommendations",
                    ].map((item, idx) => (
                      <ListItem key={idx} sx={{ display: "list-item", pl: 2 }}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* PROCESS */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Simple steps to get back up and running">
            How service works
          </SectionTitle>

          <Grid container spacing={3}>
            {[ 
              {
                title: "Call or send photos",
                text: "Share your cylinder issue and timing. We give quick guidance and a clear quote for repair.",
              },
              {
                title: "Pickup or drop-off",
                text: "We can arrange local pickup around Montgomery or you can drop your cylinder at our shop.",
              },
              {
                title: "Repair, repack, and test",
                text: "We reseal, polish rods, handle light welding, and pressure test before it leaves the bench.",
              },
              {
                title: "Install and verify",
                text: "We help with install questions and make sure you have everything to get back to work fast.",
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

      {/* CTA */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{ color: "#fff", fontWeight: 900, mb: 1 }}
          >
            Ready for fast hydraulic cylinder repair in Montgomery?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
            Call now for quick scheduling, clear pricing, and dependable service from a
            local, veteran-owned team.
          </Typography>
          <ConsultationButton>Call now for fast turnaround</ConsultationButton>
        </Container>
      </AltSection>

      {/* LOCAL AREA */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Serving Montgomery County and nearby crews">
            Local service area
          </SectionTitle>
          <Grid container spacing={3}>
            {[ 
              { city: "Montgomery", note: "hydraulic cylinder repair and repacking" },
              { city: "Magnolia", note: "telescopic cylinder reseal and testing" },
              { city: "Conroe", note: "trash truck hydraulic repair" },
              { city: "Willis", note: "construction and farm cylinder service" },
              { city: "The Woodlands", note: "on-site pull/install support when needed" },
              { city: "Greater Houston", note: "pickup and delivery options" },
            ].map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {area.city}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {area.note}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* FAQ */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Quick answers for Montgomery equipment owners">
            FAQ
          </SectionTitle>

          <Grid container spacing={3}>
            {[ 
              {
                q: "How fast can you turn around a cylinder repair in Montgomery?",
                a: "Most jobs are completed within 24–72 hours depending on parts and condition. We prioritize trash trucks and rental fleets that need quick uptime.",
              },
              {
                q: "Do you handle telescopic dump truck cylinders?",
                a: "Yes. We reseal, repack, and test telescopic cylinders for dump trucks, roll-off trucks, and refuse trucks with quality seals and clean reassembly.",
              },
              {
                q: "Can you pick up cylinders around Montgomery or Lake Conroe?",
                a: "We offer pickup options for Montgomery, Magnolia, Conroe, Willis, and The Woodlands. Call to schedule the quickest option.",
              },
              {
                q: "What if my rod is scratched or bent?",
                a: "We perform light welding, rod polishing, and will advise if re-chrome or replacement is the best long-term fix to prevent leaks.",
              },
              {
                q: "Do you test cylinders before returning them?",
                a: "Every cylinder is pressure or leak-tested on the bench so you can reinstall with confidence and avoid repeat downtime.",
              },
              {
                q: "Which industries do you serve?",
                a: "Trash companies, construction crews, rental yards, farmers, ranchers, mechanics, and anyone running hydraulic equipment in Montgomery County and Houston.",
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
      </AltSection>
    </>
  );
}

export const meta = {
  title: "Hydraulic Cylinder Repair Montgomery TX | Vetech Hydraulics",
  description:
    "Veteran-owned hydraulic cylinder repair in Montgomery, TX. Fast turnaround on telescopic, trash truck, and heavy equipment cylinders.",
};

