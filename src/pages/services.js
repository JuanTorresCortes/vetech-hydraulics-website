import Head from "next/head";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hydraulic Cylinder Repair",
  provider: {
    "@type": "LocalBusiness",
    name: "Vetech Hydraulics",
    url: "https://vetech-hydraulics.com//",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hydraulic Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hydraulic Cylinder Repair",
          description:
            "Complete hydraulic cylinder repair services, including resealing, reassembly, and testing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Seal Replacement",
          description:
            "Replacement of hydraulic seals to prevent leaks and improve performance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hydraulic Maintenance",
          description:
            "Routine hydraulic maintenance services for long-lasting performance.",
        },
      },
    ],
  },
};

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Explore our hydraulic repair services, including cylinder resealing, rebuilds, and maintenance."
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Head>
      <Container>
        <Typography variant="h2" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Hydraulic Cylinder Repair" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Seal Replacement and Resealing" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hydraulic System Maintenance" />
          </ListItem>
        </List>
      </Container>
    </>
  );
}
