// src/pages/contact.js
// Contact page: phone-first layout with direct call/email/address info up top,
// and a secondary message form for after-hours or written inquiries.
import SeoHead from "../components/SeoHead";
import Image from "next/image";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  industrialCardSx,
  industrialColors,
  primaryCtaSx,
  sectionBase,
} from "../utils/visualStyles";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import backHoe from "../image/backHoe.webp";

/* ---------------------------- Layout primitives ---------------------------- */

const FullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const Hero = styled(Box)(({ theme }) => ({
  ...FullBleed,
  position: "relative",
  minHeight: "58vh",
  display: "flex",
  alignItems: "flex-end",
  color: "#fff",
  overflow: "hidden",
  background:
    "radial-gradient(circle at 16% 18%, rgba(215,25,32,0.22), transparent 34%), linear-gradient(135deg, #02060A 0%, #071522 48%, #02060A 100%)",
  [theme.breakpoints.down("md")]: { minHeight: "52svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "56svh" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
    backgroundSize: "46px 46px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 78%)",
    zIndex: 1,
  },
}));

const Section = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  background:
    "radial-gradient(circle at 86% 0%, rgba(215,25,32,0.13), transparent 32%), linear-gradient(180deg, #07131D 0%, #0A1823 52%, #050D14 100%)",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  background:
    "radial-gradient(circle at 12% 0%, rgba(215,25,32,0.1), transparent 30%), linear-gradient(180deg, #050D14 0%, #071522 52%, #050A0F 100%)",
}));

const fieldSx = {
  "& .MuiInputLabel-root": { color: "rgba(231,238,244,0.72)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#F7FAFC" },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    bgcolor: "rgba(3,7,11,0.34)",
    borderRadius: 2,
    "& fieldset": { borderColor: "rgba(190,202,212,0.2)" },
    "&:hover fieldset": { borderColor: "rgba(190,202,212,0.38)" },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(215,25,32,0.72)",
      boxShadow: "0 0 0 1px rgba(215,25,32,0.18)",
    },
  },
};

const contactCardSx = {
  ...industrialCardSx,
  height: "100%",
  p: { xs: 3, md: 3.5 },
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background:
      "linear-gradient(90deg, #D71920 0%, rgba(215,25,32,0.35) 48%, rgba(190,202,212,0.35) 100%)",
  },
};

const iconBadgeSx = {
  width: 52,
  height: 52,
  borderRadius: 2,
  display: "grid",
  placeItems: "center",
  color: "#fff",
  bgcolor: "rgba(215,25,32,0.16)",
  border: "1px solid rgba(215,25,32,0.38)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 22px rgba(215,25,32,0.16)",
  mb: 2,
  flexShrink: 0,
};

/* --------------------------------- Page ---------------------------------- */

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const [toast, setToast] = useState({ open: false, msg: "", severity: "warning" });
  const formRef = useRef(null);

  const launchConfetti = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.3 }, scalar: 0.9 });
    setTimeout(() => {
      confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 } });
    }, 200);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      phone: form.get("phone")?.toString().trim(),
      message: form.get("message")?.toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ ok: false, msg: "Please fill in name, email, and message." });
      return;
    }

    try {
      setSending(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data?.ok) {
        setStatus({ ok: true, msg: "Thanks! We received your message." });
        if (formRef.current) formRef.current.reset();
        launchConfetti();
        if (data.autoReply === "failed") {
          setToast({
            open: true,
            msg: "We received your message, but couldn't send a confirmation email to you. We'll still follow up shortly.",
            severity: "warning",
          });
        }
      } else {
        setStatus({ ok: false, msg: data?.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Contact Vetech Hydraulics | Call (936) 249-6042"
        description="Call or email Vetech Hydraulics for fast hydraulic cylinder repair quotes. Serving Montgomery, Conroe, Magnolia, and North Houston."
        path="/contact"
      />

      {/* -------------------------------- HERO -------------------------------- */}
      <Hero>
        <Image
          src={backHoe}
          alt="Heavy equipment hydraulic cylinder repair support"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.25,
            filter: "contrast(1.08) saturate(0.72)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(2,6,10,0.96) 0%, rgba(2,6,10,0.86) 45%, rgba(7,21,34,0.55) 100%), linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.18))",
            zIndex: 1,
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ ...containerSx, pb: { xs: 5, md: 7 }, pt: { xs: 14, md: 20 }, position: "relative", zIndex: 2 }}
        >
          <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>DIRECT CONTACT</Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "#F7FAFC",
              fontWeight: 950,
              fontSize: { xs: "clamp(34px, 10vw, 52px)", md: "clamp(52px, 6vw, 74px)" },
              lineHeight: { xs: 1, md: 0.96 },
              letterSpacing: { xs: "-0.045em", md: "-0.06em" },
              maxWidth: 820,
              textWrap: "balance",
              textShadow: "0 18px 42px rgba(0,0,0,0.55)",
              mb: 2,
            }}
          >
            Call Us for Fast Hydraulic Cylinder Service
          </Typography>
          <Typography sx={{ ...bodyCopySx, maxWidth: 660, mb: 3.5, fontSize: { xs: 15.5, md: 18 } }}>
            The fastest way to get a quote or schedule a repair is to call. We
            answer Monday–Friday 8AM–5PM and get straight to the point.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ xs: "stretch", sm: "center" }}>
            <Button
              component="a"
              href="tel:+19362496042"
              variant="contained"
              startIcon={<PhoneIcon />}
              sx={{
                px: { xs: 3.5, md: 5 },
                py: 1.65,
                borderRadius: "10px",
                bgcolor: "#D71920",
                color: "#fff",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: { xs: 15, md: 16 },
                boxShadow: "0 18px 38px rgba(215,25,32,0.3), inset 0 1px 0 rgba(255,255,255,0.24)",
                border: "1px solid rgba(255,255,255,0.16)",
                "&:hover": { bgcolor: "#B9151B" },
              }}
            >
              (936) 249-6042
            </Button>
            <Button
              component="a"
              href="mailto:juan@vetech-hydraulics.com"
              variant="outlined"
              startIcon={<EmailIcon />}
              sx={{
                px: { xs: 3.5, md: 4.5 },
                py: 1.65,
                borderRadius: "10px",
                color: "#E7EEF4",
                borderColor: "rgba(185,197,205,0.42)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                bgcolor: "rgba(255,255,255,0.035)",
                "&:hover": { borderColor: "rgba(255,255,255,0.72)", bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              Email Us
            </Button>
          </Stack>
        </Container>
      </Hero>

      {/* ----------------------- CONTACT INFO CARDS ----------------------- */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Grid container spacing={{ xs: 2.5, md: 3 }}>

            {/* CALL */}
            <Grid item xs={12} md={4}>
              <Box sx={contactCardSx}>
                <Box sx={iconBadgeSx}>
                  <PhoneIcon sx={{ fontSize: 26 }} />
                </Box>
                <Typography sx={{ color: industrialColors.hydraulicRed, fontWeight: 950, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12, mb: 0.75 }}>
                  Call Us
                </Typography>
                <Typography
                  component="a"
                  href="tel:+19362496042"
                  sx={{
                    color: "#F7FAFC",
                    fontWeight: 950,
                    fontSize: { xs: 28, md: 32 },
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    textDecoration: "none",
                    display: "block",
                    mb: 0.75,
                    "&:hover": { color: "#D71920" },
                  }}
                >
                  (936) 249-6042
                </Typography>
                <Typography sx={{ color: "rgba(231,238,244,0.72)", fontSize: 14, mb: 2.5 }}>
                  Mon–Fri: 8:00 AM – 5:00 PM
                </Typography>
                <Button
                  component="a"
                  href="tel:+19362496042"
                  variant="contained"
                  fullWidth
                  startIcon={<PhoneIcon />}
                  sx={{ ...primaryCtaSx, mt: "auto", py: 1.35 }}
                >
                  Call Now
                </Button>
              </Box>
            </Grid>

            {/* EMAIL */}
            <Grid item xs={12} md={4}>
              <Box sx={contactCardSx}>
                <Box sx={iconBadgeSx}>
                  <EmailIcon sx={{ fontSize: 26 }} />
                </Box>
                <Typography sx={{ color: industrialColors.hydraulicRed, fontWeight: 950, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12, mb: 0.75 }}>
                  Email Us
                </Typography>
                <Typography
                  component="a"
                  href="mailto:juan@vetech-hydraulics.com"
                  sx={{
                    color: "#F7FAFC",
                    fontWeight: 900,
                    fontSize: { xs: 16, md: 17 },
                    lineHeight: 1.3,
                    textDecoration: "none",
                    display: "block",
                    mb: 0.75,
                    wordBreak: "break-all",
                    "&:hover": { color: "#D71920" },
                  }}
                >
                  juan@vetech-hydraulics.com
                </Typography>
                <Typography sx={{ color: "rgba(231,238,244,0.72)", fontSize: 14, mb: 2.5 }}>
                  We typically respond same business day.
                </Typography>
                <Button
                  component="a"
                  href="mailto:juan@vetech-hydraulics.com"
                  variant="outlined"
                  fullWidth
                  startIcon={<EmailIcon />}
                  sx={{
                    mt: "auto",
                    py: 1.35,
                    borderRadius: "10px",
                    color: "#E7EEF4",
                    borderColor: "rgba(185,197,205,0.42)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    bgcolor: "rgba(255,255,255,0.035)",
                    "&:hover": { borderColor: "rgba(255,255,255,0.72)", bgcolor: "rgba(255,255,255,0.08)" },
                  }}
                >
                  Send Email
                </Button>
              </Box>
            </Grid>

            {/* ADDRESS */}
            <Grid item xs={12} md={4}>
              <Box sx={contactCardSx}>
                <Box sx={iconBadgeSx}>
                  <LocationOnIcon sx={{ fontSize: 26 }} />
                </Box>
                <Typography sx={{ color: industrialColors.hydraulicRed, fontWeight: 950, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12, mb: 0.75 }}>
                  Mailing Address
                </Typography>
                <Typography
                  sx={{
                    color: "#F7FAFC",
                    fontWeight: 900,
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.4,
                    mb: 0.5,
                  }}
                >
                  435 Southern Magnolia Way
                </Typography>
                <Typography sx={{ color: "#F7FAFC", fontWeight: 900, fontSize: { xs: 18, md: 20 }, lineHeight: 1.4, mb: 1 }}>
                  Magnolia, TX 77354
                </Typography>

                <Divider sx={{ borderColor: "rgba(190,202,212,0.18)", my: 2 }} />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AccessTimeIcon sx={{ color: industrialColors.hydraulicRed, fontSize: 18 }} />
                  <Box>
                    <Typography sx={{ color: "rgba(231,238,244,0.52)", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Business Hours
                    </Typography>
                    <Typography sx={{ color: "#F7FAFC", fontWeight: 900, fontSize: 15 }}>
                      Mon–Fri: 8:00 AM – 5:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ----------------------- SECONDARY FORM ----------------------- */}
      <AltSection>
        <Container maxWidth="md" sx={containerSx}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
            <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>PREFER TO WRITE?</Typography>
            <Typography
              component="h2"
              sx={{
                color: "#F7FAFC",
                fontWeight: 950,
                fontSize: { xs: "clamp(26px, 7vw, 36px)", md: "clamp(32px, 3.5vw, 44px)" },
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                mb: 1.25,
              }}
            >
              Send Us a Message
            </Typography>
            <Typography sx={{ ...bodyCopySx, maxWidth: 560, mx: "auto" }}>
              Fill out the form and we will follow up by phone or email — usually the same business day.
            </Typography>
          </Box>

          <Card
            elevation={0}
            sx={{
              ...industrialCardSx,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "linear-gradient(90deg, #D71920 0%, rgba(215,25,32,0.35) 48%, rgba(190,202,212,0.35) 100%)",
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              {status.ok === true && (
                <Alert severity="success" sx={{ mb: 2 }}>{status.msg}</Alert>
              )}
              {status.ok === false && (
                <Alert severity="error" sx={{ mb: 2 }}>{status.msg}</Alert>
              )}

              <Box component="form" onSubmit={onSubmit} ref={formRef}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField name="name" fullWidth required label="Name" variant="outlined" sx={fieldSx} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField name="email" fullWidth required label="Email" type="email" variant="outlined" sx={fieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="phone" fullWidth label="Phone (optional)" type="tel" variant="outlined" sx={fieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      fullWidth
                      required
                      label="What can we help with?"
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={sending}
                      fullWidth
                      sx={{
                        ...primaryCtaSx,
                        py: 1.5,
                        "&.Mui-disabled": { color: "rgba(255,255,255,0.55)", bgcolor: "rgba(215,25,32,0.42)" },
                      }}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </AltSection>

      <Snackbar
        open={toast.open}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        autoHideDuration={6000}
        message={toast.msg}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
