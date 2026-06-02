import NextLink from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import SeoHead from "../components/SeoHead";
import { BUSINESS } from "../config/business";
import { containerSx, industrialColors, primaryCtaSx } from "../utils/visualStyles";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Fleet Support", href: "/fleet-support" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Vetech Hydraulics"
        description="The page you're looking for doesn't exist. Return to Vetech Hydraulics for hydraulic cylinder repair in North Houston."
        path="/404"
      />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(204,0,0,0.06), transparent 70%), linear-gradient(180deg, #080808 0%, #081522 60%, #080808 100%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          },
        }}
      >
        <Container maxWidth="md" sx={{ ...containerSx, py: { xs: 10, md: 14 }, position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            {/* 404 number */}
            <Typography
              aria-hidden="true"
              sx={{
                fontSize: { xs: "clamp(100px, 28vw, 180px)" },
                fontWeight: 950,
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
                color: "transparent",
                WebkitTextStroke: `2px ${industrialColors.hydraulicRed}`,
                opacity: 0.3,
                userSelect: "none",
                mb: 2,
              }}
            >
              404
            </Typography>

            {/* Divider accent */}
            <Box
              sx={{
                width: 80,
                height: 3,
                mx: "auto",
                mb: 3,
                borderRadius: 999,
                background: `linear-gradient(90deg, transparent, ${industrialColors.hydraulicRed}, transparent)`,
              }}
              aria-hidden="true"
            />

            <Typography
              component="h1"
              sx={{
                color: industrialColors.text,
                fontWeight: 950,
                fontSize: { xs: "clamp(26px, 7vw, 42px)" },
                lineHeight: 1.1,
                letterSpacing: "0em",
                mb: 1.5,
              }}
            >
              Page Not Found
            </Typography>

            <Typography
              sx={{
                color: "rgba(220,220,220,0.72)",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.6,
                maxWidth: 480,
                mx: "auto",
                mb: 4,
              }}
            >
              That page doesn&apos;t exist or may have moved. Head back to the
              homepage or give us a call — we&apos;re easy to reach.
            </Typography>

            {/* Primary CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              justifyContent="center"
              alignItems={{ xs: "stretch", sm: "center" }}
              sx={{ mb: 6 }}
            >
              <Button
                component={NextLink}
                href="/"
                variant="contained"
                startIcon={<HomeIcon />}
                sx={{ ...primaryCtaSx, px: 3.5, py: 1.45 }}
              >
                Back to Home
              </Button>
              <Button
                component="a"
                href={BUSINESS.phoneTel}
                variant="outlined"
                startIcon={<PhoneIcon />}
                sx={{
                  px: 3.5,
                  py: 1.45,
                  borderRadius: "2px",
                  color: "#E0E0E0",
                  borderColor: "rgba(255,255,255,0.42)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  bgcolor: "rgba(255,255,255,0.035)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.72)",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                {BUSINESS.phoneDisplay}
              </Button>
            </Stack>

            {/* Quick nav */}
            <Box>
              <Typography
                sx={{
                  color: "rgba(220,220,220,0.44)",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Or go to
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={1}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <Button
                    key={href}
                    component={NextLink}
                    href={href}
                    size="small"
                    startIcon={<BuildIcon sx={{ fontSize: "14px !important" }} />}
                    sx={{
                      color: "rgba(220,220,220,0.62)",
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "none",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: "8px",
                      px: 1.5,
                      py: 0.6,
                      bgcolor: "rgba(255,255,255,0.03)",
                      "&:hover": {
                        color: industrialColors.text,
                        borderColor: "rgba(255,255,255,0.4)",
                        bgcolor: "rgba(255,255,255,0.07)",
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
