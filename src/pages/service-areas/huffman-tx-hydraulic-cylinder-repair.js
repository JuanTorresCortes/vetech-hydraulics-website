import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
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
          xs: "clamp(22px, 5.5vw, 32px)",
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

export default function HuffmanServicePage() {
  return (
    <>
      <Head>
        <title>Hydraulic Cylinder Repair in Huffman, TX | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Vetech Hydraulics provides hydraulic cylinder repair, repacking, and testing in Huffman, TX. Text a picture of your cylinder for a fast quote."
        />
        <link
          rel="canonical"
          href="https://www.vetechhydraulics.com/service-areas/huffman-tx-hydraulic-cylinder-repair"
        />
      </Head>

      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}
        >
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "clamp(26px, 7vw, 36px)",
                md: "clamp(32px, 4vw, 46px)",
              },
              textWrap: "balance",
              mb: 2,
              color: "#fff",
            }}
          >
            Hydraulic Cylinder Repair in Huffman, Texas
          </Typography>

          <Typography
            sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 720, mb: 3 }}
          >
            Vetech Hydraulics services equipment owners in Huffman, TX and the surrounding
            area with hydraulic cylinder repacking, rod work, and pressure-tested rebuilds.
            Text or email a photo of your cylinder and we&apos;ll help you figure out the best repair plan.
          </Typography>

          <ConsultationButton />
        </Container>
      </AltSection>

      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            maxWidth: "900px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <SectionTitle subtitle="Text a picture for a fast response.">
            Need Hydraulic Cylinder Repair in Huffman, TX?
          </SectionTitle>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: 3,
              maxWidth: 640,
              mx: "auto",
            }}
          >
            If you&apos;re near Huffman and dealing with a leaking or weak cylinder,
            reach out. We&apos;ll review your photos, give you a ballpark estimate,
            and help you get back to work with less downtime.
          </Typography>

          <ConsultationButton />
        </Container>
      </Section>
    </>
  );
}
