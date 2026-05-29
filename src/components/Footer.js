// Site footer: shared navigation, trust badges, service-area links, and final quote CTA for every page.
// Link arrays below are the safest edit points for designers or business owners updating footer content.
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { containerSx, primaryCtaSx } from "../utils/visualStyles";
import PhoneIcon from "@mui/icons-material/Phone";
import { BUSINESS } from "../config/business";

// Footer service links intentionally point to broad pages rather than every individual subsection.
const services = [
  { label: "Hydraulic Cylinder Repair", href: "/services" },
  { label: "Excavator Cylinder Repair", href: "/excavator-hydraulic-cylinder-repair" },
  { label: "Trash Truck Cylinder Repair", href: "/trash-truck-hydraulic-cylinder-repair" },
  { label: "Repair Cost Guide", href: "/hydraulic-cylinder-repair-cost" },
  { label: "Fleet Support", href: "/fleet-support" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Cylinder Repacking", href: "/services" },
  { label: "Pressure Testing", href: "/services" },
  { label: "Pickup & Delivery", href: "/services" },
];

// Keep this as a short priority list; the full city directory lives on /service-areas.
const serviceAreas = [
  {
    label: "Magnolia",
    href: "/service-areas/magnolia-tx-hydraulic-cylinder-repair",
  },
  {
    label: "Montgomery",
    href: "/service-areas/montgomery-tx-hydraulic-cylinder-repair",
  },
  {
    label: "Conroe",
    href: "/service-areas/conroe-tx-hydraulic-cylinder-repair",
  },
  {
    label: "The Woodlands",
    href: "/service-areas/woodlands-tx-hydraulic-cylinder-repair",
  },
  {
    label: "Tomball",
    href: "/service-areas/tomball-tx-hydraulic-cylinder-repair",
  },
  { label: "North Houston", href: "/service-areas" },
];

// Short badges reinforce credibility without expanding the footer height.
const trustBadges = [
  "Veteran-Owned",
  "Fleet Service Capable",
  "Pressure Tested Repairs",
];

const footerLinkSx = {
  color: "rgba(231,238,244,0.76)",
  textDecoration: "none",
  fontWeight: 700,
  lineHeight: 1.5,
  transition: "color 160ms ease, transform 160ms ease",
  "&:hover": {
    color: "#fff",
    transform: "translateX(3px)",
  },
};

const FooterHeading = ({ children }) => (
  <Typography
    sx={{
      color: "#F7FAFC",
      fontWeight: 950,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontSize: 13,
      mb: 2,
      position: "relative",
      "&::after": {
        content: '""',
        display: "block",
        width: 36,
        height: 2,
        mt: 1,
        borderRadius: 2,
        bgcolor: "#D71920",
        boxShadow: "0 0 14px rgba(215,25,32,0.72)",
      },
    }}
  >
    {children}
  </Typography>
);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 0,
        color: "#fff",
        background:
          "radial-gradient(circle at 16% 0%, rgba(215,25,32,0.13), transparent 30%), linear-gradient(180deg, #07131D 0%, #03070B 58%, #020406 100%)",
        borderTop: "1px solid rgba(190,202,212,0.18)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ ...containerSx, py: { xs: 6, md: 8, lg: 9 } }}
      >
        <Grid container spacing={{ xs: 4, md: 4.5 }}>
          <Grid item xs={12} md={4}>
            <Box
              component={NextLink}
              href="/"
              aria-label="Vetech Hydraulics home"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(190,202,212,0.2)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.12), 0 14px 30px rgba(0,0,0,0.36)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/VTH-logo.webp"
                  alt="Vetech Hydraulics logo"
                  fill
                  sizes="60px"
                  style={{ objectFit: "contain", padding: "7px" }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#F7FAFC",
                  fontWeight: 950,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  fontSize: { xs: 18, md: 20 },
                }}
              >
                Vetech Hydraulics
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "rgba(231,238,244,0.78)",
                lineHeight: 1.75,
                maxWidth: 390,
                mb: 2.5,
              }}
            >
              Veteran-owned hydraulic cylinder repair for heavy equipment,
              fleets, and commercial operations. Based in Magnolia, TX and
              serving Montgomery County & North Houston.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {trustBadges.map((badge) => (
                <Box
                  key={badge}
                  sx={{
                    px: 1.25,
                    py: 0.75,
                    borderRadius: "999px",
                    color: "#F7FAFC",
                    bgcolor: "rgba(215,25,32,0.12)",
                    border: "1px solid rgba(215,25,32,0.3)",
                    fontWeight: 900,
                    fontSize: 12,
                    letterSpacing: "0.03em",
                  }}
                >
                  {badge}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <FooterHeading>Services</FooterHeading>
            <Stack spacing={1.15}>
              {services.map((service) => (
                <MuiLink
                  key={service.label}
                  component={NextLink}
                  href={service.href}
                  sx={footerLinkSx}
                >
                  {service.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <FooterHeading>Service Areas</FooterHeading>
            <Stack spacing={1.15}>
              {serviceAreas.map((area) => (
                <MuiLink
                  key={area.label}
                  component={NextLink}
                  href={area.href}
                  sx={footerLinkSx}
                >
                  {area.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3.2}>
            <FooterHeading>Contact</FooterHeading>
            <Stack spacing={1.35} sx={{ mb: 2.5 }}>
              <Box>
                <Typography
                  sx={{ color: "rgba(231,238,244,0.52)", fontSize: 12 }}
                >
                  Phone
                </Typography>
                <MuiLink href={BUSINESS.phoneTel} sx={footerLinkSx}>
                  {BUSINESS.phoneDisplay}
                </MuiLink>
              </Box>
              <Box>
                <Typography
                  sx={{ color: "rgba(231,238,244,0.52)", fontSize: 12 }}
                >
                  Email
                </Typography>
                <MuiLink href={BUSINESS.emailMailto} sx={footerLinkSx}>
                  {BUSINESS.email}
                </MuiLink>
              </Box>
              <Box>
                <Typography
                  sx={{ color: "rgba(231,238,244,0.52)", fontSize: 12 }}
                >
                  Business Hours
                </Typography>
                <Typography
                  sx={{ color: "rgba(231,238,244,0.78)", fontWeight: 700 }}
                >
                  {BUSINESS.hours}
                </Typography>
              </Box>
            </Stack>

            <Button
              component="a"
              href={BUSINESS.phoneTel}
              variant="contained"
              fullWidth
              startIcon={<PhoneIcon />}
              sx={{ ...primaryCtaSx, py: 1.35 }}
            >
              Call Now
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "rgba(190,202,212,0.16)" }} />

      <Box
        sx={{
          ...containerSx,
          py: 2,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.025), rgba(215,25,32,0.045), rgba(255,255,255,0.025))",
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Typography sx={{ color: "rgba(231,238,244,0.68)", fontSize: 13 }}>
              © {new Date().getFullYear()} Vetech Hydraulics. All Rights
              Reserved.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 0.5, sm: 1.5 }}
              divider={
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: "1px",
                    bgcolor: "rgba(190,202,212,0.22)",
                  }}
                />
              }
            >
              <Typography
                sx={{ color: "rgba(231,238,244,0.68)", fontSize: 13 }}
              >
                Veteran-Owned Hydraulic Repair
              </Typography>
              <Typography
                sx={{ color: "rgba(231,238,244,0.68)", fontSize: 13 }}
              >
                Built for Heavy Equipment & Fleet Reliability
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
