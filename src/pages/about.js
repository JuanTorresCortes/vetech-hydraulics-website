import Head from "next/head";
import { Container, Typography } from "@mui/material";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vetech Hydraulics",
  url: "https://www.vetechhydraulics.com/",
  logo: "https://www.vetechhydraulics.com/logo.png",
  sameAs: [
    "https://www.facebook.com/VetechHydraulics",
    "https://www.linkedin.com/company/vetechhydraulics",
  ],
};

export default function About() {
  return (
    <>
      <Head>
        <title>
          About Vetech Hydraulics | Hydraulic Cylinder Repair Experts
        </title>
        <meta
          name="description"
          content="Learn about Vetech Hydraulics, a veteran-owned business specializing in hydraulic cylinder repair and maintenance."
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>
      <Container>
        <Typography variant="h2" gutterBottom>
          About Vetech Hydraulics
        </Typography>
        <Typography variant="body1">
          A veteran-owned business dedicated to expert hydraulic cylinder
          services.
        </Typography>
      </Container>
    </>
  );
}
