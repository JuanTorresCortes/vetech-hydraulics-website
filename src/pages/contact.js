import Head from "next/head";
import { Container, Typography, TextField, Button } from "@mui/material";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "Customer Support",
  telephone: "+1-123-456-7890",
  email: "support@vetechhydraulics.com",
  url: "https://www.vetechhydraulics.com/contact",
  areaServed: "US",
  availableLanguage: ["English"],
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Get in touch with Vetech Hydraulics for expert hydraulic repair services. Contact us today!"
        />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Head>
      <Container>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <TextField fullWidth label="Your Name" margin="normal" />
        <TextField fullWidth label="Your Email" margin="normal" />
        <TextField
          fullWidth
          label="Your Message"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Container>
    </>
  );
}
