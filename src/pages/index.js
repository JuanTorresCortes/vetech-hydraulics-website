import Head from "next/head";
import { Container, Typography } from "@mui/material";
import { businessSchema } from "../utils/seoData"; // Import global data

export default function Home() {
  return (
    <>
      <Head>
        <title>Vetech Hydraulics | Hydraulic Cylinder Repair Experts</title>
        <meta
          name="description"
          content="Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance. Get expert service today!"
        />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Head>
      <Container style={{ marginTop: "20rem" }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Vetech Hydraulics
        </Typography>
        <Typography variant="body1">
          Your trusted partner in hydraulic cylinder repair and services.
        </Typography>
      </Container>
    </>
  );
}
