import Head from "next/head";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { businessSchema } from "../utils/seoData"; // Import global data
import backHoe from "../image/backHoe.webp";

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "95vh", // Default for large desktop
  width: "100vw",
  backgroundSize: "cover",
  backgroundPosition: "top", // Prevents top being cut off
  backgroundRepeat: "no-repeat",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: theme.spacing(2),

  // ↓↓↓ Extra-large screens (1440px and down)
  [theme.breakpoints.down("xl")]: {
    height: "99vh",
    variant: "h1",
  },

  // ↓↓↓ Large screens (1200px and down)
  [theme.breakpoints.down("lg")]: {
    height: "102vh",
  },

  // ↓↓↓ Medium screens (900px and down, e.g. tablets)
  [theme.breakpoints.down("md")]: {
    height: "83vh",
  },

  // ↓↓↓ Small screens (600px and down, e.g. phones)
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },

  // ↓↓↓ Extra small screens (< 400px wide, optional)
  [theme.breakpoints.down("321")]: {
    height: "84vh",
  },
}));

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

      <HeroSection>
        {/* Background Image */}
        <Image
          src={backHoe}
          alt="Backhoe working"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />

        {/* Text Content */}
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Hydraulic cylinder repair in Montgomery, Texas.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="sms:+8329017158"
            sx={{
              mt: 4,
              fontWeight: "bold",
              fontSize: "1rem",
              padding: "12px 24px",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Text Image for a Fast Quote
          </Button>
        </Box>
      </HeroSection>
    </>
  );
}
