// src/components/Footer.js
// Site footer — hero-palette, full logo, Oswald headings, CTA strip, industrial bottom bar.
import NextLink from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
import { containerSx, primaryCtaSx, secondaryCtaSx } from "../utils/visualStyles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { BUSINESS } from "../config/business";

// ── Link data ─────────────────────────────────────────────
const services = [
  { label: "Hydraulic Cylinder Repair",       href: "/services" },
  { label: "Excavator Cylinder Repair",        href: "/excavator-hydraulic-cylinder-repair" },
  { label: "Trash Truck Cylinder Repair",      href: "/trash-truck-hydraulic-cylinder-repair" },
  { label: "Repair Cost Guide",                href: "/hydraulic-cylinder-repair-cost" },
  { label: "Fleet Support",                    href: "/fleet-support" },
  { label: "Case Studies",                     href: "/case-studies" },
  { label: "Cylinder Repacking",               href: "/services" },
  { label: "Pressure Testing",                 href: "/services" },
  { label: "Pickup & Delivery",                href: "/services" },
];

const serviceAreas = [
  { label: "Magnolia",       href: "/service-areas/magnolia-tx-hydraulic-cylinder-repair" },
  { label: "Montgomery",     href: "/service-areas/montgomery-tx-hydraulic-cylinder-repair" },
  { label: "Conroe",         href: "/service-areas/conroe-tx-hydraulic-cylinder-repair" },
  { label: "The Woodlands",  href: "/service-areas/woodlands-tx-hydraulic-cylinder-repair" },
  { label: "Tomball",        href: "/service-areas/tomball-tx-hydraulic-cylinder-repair" },
  { label: "North Houston",  href: "/service-areas" },
];

const trustPoints = [
  { icon: "★", label: "Veteran-Owned" },
  { icon: "✓", label: "Pressure Tested" },
  { icon: "⚡", label: "Fast Turnaround" },
];

// ── Shared styles ─────────────────────────────────────────
const footerLinkSx = {
  color: "rgba(200,200,200,0.68)",
  textDecoration: "none",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1.5,
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  transition: "color 150ms ease, transform 150ms ease",
  "&::before": {
    content: '"–"',
    color: "#CC0000",
    opacity: 0.7,
    fontSize: 12,
    flexShrink: 0,
  },
  "&:hover": {
    color: "#F0F0F0",
    transform: "translateX(4px)",
  },
};

const FooterHeading = ({ children }) => (
  <Typography
    sx={{
      fontFamily: "'Oswald', sans-serif",
      color: "#F0F0F0",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontSize: 12,
      mb: 2.25,
      display: "flex",
      alignItems: "center",
      gap: 1.25,
      "&::after": {
        content: '""',
        flex: 1,
        height: "1px",
        bgcolor: "rgba(255,255,255,0.08)",
      },
    }}
  >
    <Box
      component="span"
      sx={{
        display: "inline-block",
        width: 3,
        height: 14,
        bgcolor: "#CC0000",
        borderRadius: "1px",
        boxShadow: "0 0 8px rgba(204,0,0,0.6)",
        flexShrink: 0,
      }}
      aria-hidden="true"
    />
    {children}
  </Typography>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: 0.1 } },
});

// ── Component ─────────────────────────────────────────────
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        color: "#fff",
        background:
          "radial-gradient(circle at 15% 0%, rgba(204,0,0,0.10), transparent 32%), linear-gradient(180deg, #0a0a0a 0%, #080808 100%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >

      {/* ── CTA strip ──────────────────────────────────────── */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          py: { xs: 5, md: 6 },
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(204,0,0,0.09), transparent 70%)",
        }}
      >
        <Container maxWidth="lg" sx={containerSx}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0)}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
              gap={{ xs: 3, md: 4 }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <Typography
                  sx={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "clamp(24px, 6vw, 36px)", md: "clamp(28px, 3vw, 42px)" },
                    lineHeight: 1.0,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0F0F0",
                    textWrap: "balance",
                  }}
                >
                  Have a cylinder that{" "}
                  <Box component="span" sx={{ color: "#CC0000" }}>
                    needs repair?
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    mt: 1,
                    fontSize: { xs: 14, md: 15 },
                    color: "rgba(200,200,200,0.65)",
                    lineHeight: 1.6,
                  }}
                >
                  Send a photo for a fast quote. Mon–Fri, 8AM–5PM.
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <Stack direction={{ xs: "column", sm: "row" }} gap={1.5}>
                  <Button
                    component="a"
                    href={BUSINESS.phoneTel}
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{ ...primaryCtaSx, px: 3, py: 1.4, fontSize: 14 }}
                  >
                    CALL NOW
                  </Button>
                  <Button
                    component="a"
                    href={BUSINESS.emailMailto}
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    sx={{ ...secondaryCtaSx, px: 3, py: 1.4, fontSize: 14 }}
                  >
                    EMAIL US
                  </Button>
                </Stack>
              </motion.div>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* ── Main footer columns ─────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{ ...containerSx, py: { xs: 6, md: 8 } }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0.05)}
        >
          <Grid container spacing={{ xs: 4, md: 5 }}>

            {/* Col 1 — Brand */}
            <Grid item xs={12} md={4}>
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                {/* Full logo */}
                <Box
                  component={NextLink}
                  href="/"
                  aria-label="Vetech Hydraulics home"
                  sx={{
                    display: "inline-flex",
                    textDecoration: "none",
                    mb: 2.5,
                    filter:
                      "drop-shadow(0 8px 16px rgba(0,0,0,0.5)) drop-shadow(0 0 10px rgba(204,0,0,0.18))",
                    transition: "filter 180ms ease, transform 180ms ease",
                    "&:hover": {
                      filter:
                        "drop-shadow(0 10px 20px rgba(0,0,0,0.55)) drop-shadow(0 0 14px rgba(204,0,0,0.28))",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", width: 220, height: 76 }}>
                    <Image
                      src="/VTH-logo.webp"
                      alt="Vetech Hydraulics"
                      fill
                      sizes="220px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(200,200,200,0.68)",
                    lineHeight: 1.75,
                    fontSize: 14,
                    maxWidth: 360,
                    mb: 3,
                  }}
                >
                  Veteran-owned hydraulic cylinder repair for heavy equipment,
                  fleets, and commercial operations. Based in Magnolia, TX —
                  serving Montgomery County & North Houston.
                </Typography>

                {/* Trust points */}
                <Stack spacing={1.1}>
                  {trustPoints.map(({ icon, label }) => (
                    <Box
                      key={label}
                      sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 14,
                          color: "#CC0000",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        {icon}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 12.5,
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(200,200,200,0.6)",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Col 2 — Services */}
            <Grid item xs={12} sm={6} md={2.5}>
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <FooterHeading>Services</FooterHeading>
                <Stack spacing={1.2}>
                  {services.map((s) => (
                    <MuiLink
                      key={s.label}
                      component={NextLink}
                      href={s.href}
                      sx={footerLinkSx}
                    >
                      {s.label}
                    </MuiLink>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Col 3 — Service Areas */}
            <Grid item xs={12} sm={6} md={2.5}>
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <FooterHeading>Service Areas</FooterHeading>
                <Stack spacing={1.2}>
                  {serviceAreas.map((a) => (
                    <MuiLink
                      key={a.label}
                      component={NextLink}
                      href={a.href}
                      sx={footerLinkSx}
                    >
                      {a.label}
                    </MuiLink>
                  ))}
                </Stack>
                <MuiLink
                  component={NextLink}
                  href="/service-areas"
                  sx={{
                    ...footerLinkSx,
                    mt: 2,
                    display: "inline-flex",
                    color: "#CC0000",
                    fontSize: 12.5,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    "&::before": { content: "none" },
                    "&:hover": { color: "#ff2222", transform: "translateX(3px)" },
                  }}
                >
                  View all areas →
                </MuiLink>
              </motion.div>
            </Grid>

            {/* Col 4 — Contact */}
            <Grid item xs={12} md={3}>
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <FooterHeading>Contact</FooterHeading>

                {/* Contact card */}
                <Box
                  sx={{
                    p: 2.5,
                    background: "rgba(18,18,22,0.82)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: "3px solid #CC0000",
                    borderRadius: "4px",
                    mb: 2.5,
                  }}
                >
                  <Stack spacing={2}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 10,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(200,200,200,0.45)",
                          mb: 0.4,
                        }}
                      >
                        Phone
                      </Typography>
                      <MuiLink
                        href={BUSINESS.phoneTel}
                        sx={{
                          ...footerLinkSx,
                          fontSize: 15,
                          fontWeight: 600,
                          color: "#F0F0F0",
                          "&::before": { content: "none" },
                          "&:hover": { color: "#CC0000", transform: "none" },
                        }}
                      >
                        {BUSINESS.phoneDisplay}
                      </MuiLink>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 10,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(200,200,200,0.45)",
                          mb: 0.4,
                        }}
                      >
                        Email
                      </Typography>
                      <MuiLink
                        href={BUSINESS.emailMailto}
                        sx={{
                          ...footerLinkSx,
                          fontSize: 13,
                          color: "rgba(200,200,200,0.78)",
                          "&::before": { content: "none" },
                          "&:hover": { color: "#F0F0F0", transform: "none" },
                        }}
                      >
                        {BUSINESS.email}
                      </MuiLink>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 10,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(200,200,200,0.45)",
                          mb: 0.4,
                        }}
                      >
                        Hours
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          color: "rgba(200,200,200,0.78)",
                          fontWeight: 500,
                        }}
                      >
                        {BUSINESS.hours}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Button
                  component="a"
                  href={BUSINESS.phoneTel}
                  variant="contained"
                  fullWidth
                  startIcon={<PhoneIcon />}
                  sx={{ ...primaryCtaSx, py: 1.35, fontSize: 13 }}
                >
                  CALL NOW
                </Button>
              </motion.div>
            </Grid>

          </Grid>
        </motion.div>
      </Container>

      {/* ── Bottom industrial bar ────────────────────────────── */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(6,6,6,0.95)",
        }}
      >
        {/* Tagline strip */}
        <Box
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            py: 2,
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="center"
              gap={{ xs: 0.5, sm: 2 }}
            >
              {["BUILT STRONG.", "BUILT PRECISE.", "BUILT TO PERFORM."].map(
                (phrase, i) => (
                  <Typography
                    key={phrase}
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: 13, md: 14 },
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: i === 2 ? "#CC0000" : "rgba(200,200,200,0.45)",
                      lineHeight: 1,
                    }}
                  >
                    {phrase}
                  </Typography>
                )
              )}
            </Stack>
          </Container>
        </Box>

        {/* Copyright row */}
        <Container maxWidth="lg" sx={{ ...containerSx, py: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(200,200,200,0.38)",
                fontSize: 12,
              }}
            >
              © {new Date().getFullYear()} Vetech Hydraulics. All Rights Reserved.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              divider={
                <Box sx={{ width: 1, bgcolor: "rgba(255,255,255,0.1)", alignSelf: "stretch" }} />
              }
            >
              {[
                { label: "Veteran-Owned Business", href: "/about" },
                { label: "Magnolia, TX", href: "/service-areas" },
              ].map(({ label, href }) => (
                <MuiLink
                  key={label}
                  component={NextLink}
                  href={href}
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(200,200,200,0.38)",
                    fontSize: 12,
                    textDecoration: "none",
                    transition: "color 150ms ease",
                    "&:hover": { color: "rgba(200,200,200,0.7)" },
                  }}
                >
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
}
