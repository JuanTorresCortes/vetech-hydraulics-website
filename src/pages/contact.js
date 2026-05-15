// src/pages/contact.js
// Contact page: customer-facing intake form, direct phone/email details, and expectation-setting copy for quote requests.
// Client validation mirrors the API route, while email delivery and final validation remain server-side in pages/api/contact.js.
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
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  industrialCardSx,
  primaryCtaSx,
  sectionBase,
} from "../utils/visualStyles";
import { useRef, useState } from "react";
import confetti from "canvas-confetti"; // 🎉
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
  minHeight: "62vh",
  display: "flex",
  alignItems: "flex-end",
  color: "#fff",
  overflow: "hidden",
  background:
    "radial-gradient(circle at 16% 18%, rgba(215,25,32,0.22), transparent 34%), linear-gradient(135deg, #02060A 0%, #071522 48%, #02060A 100%)",
  [theme.breakpoints.down("md")]: { minHeight: "58svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "64svh" },
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

const infoCardSx = {
  ...industrialCardSx,
  height: "100%",
  p: { xs: 2.5, md: 3 },
};

/* --------------------------------- Page ---------------------------------- */

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const [toast, setToast] = useState({
    open: false,
    msg: "",
    severity: "warning",
  }); // snackbar for autoReply warning
  const formRef = useRef(null); // so we can reset the form after success

  // Confetti on success 🎉
  const launchConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.3 },
      scalar: 0.9,
    });
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
        // Success UI
        setStatus({ ok: true, msg: "Thanks! We received your message." });
        if (formRef.current) formRef.current.reset();
        launchConfetti();

        // If server couldn't send the auto-reply to the customer, show a toast warning
        if (data.autoReply === "failed") {
          setToast({
            open: true,
            msg: "We received your message, but couldn’t send a confirmation email to you. We’ll still follow up shortly.",
            severity: "warning",
          });
        }
      } else {
        setStatus({
          ok: false,
          msg: data?.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  // Trust items summarize why a visitor should submit the form instead of continuing to shop around.
  const trustItems = [
    "Veteran-Owned",
    "Fleet Service Capable",
    "Pressure Tested Repairs",
    "Pickup & Delivery Options",
  ];

  return (
    <>
      {/* Contact SEO metadata keeps quote-request intent focused on the form and direct contact options. */}
      <SeoHead
        title="Contact Us | Vetech Hydraulics"
        description="Contact Vetech Hydraulics for cylinder repair quotes and scheduling."
        path="/contact"
      />

      {/* ------------------------------- HERO -------------------------------- */}
      {/* Hero gives phone-first visitors direct contact options before the longer intake form. */}
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
          sx={{
            ...containerSx,
            pb: { xs: 5, md: 7 },
            pt: { xs: 16, md: 20 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
            REQUEST HYDRAULIC SERVICE
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "#F7FAFC",
              fontWeight: 950,
              fontSize: {
                xs: "clamp(34px, 10vw, 52px)",
                md: "clamp(52px, 6vw, 78px)",
              },
              lineHeight: { xs: 1, md: 0.96 },
              letterSpacing: { xs: "-0.045em", md: "-0.06em" },
              maxWidth: 960,
              textWrap: "balance",
              textShadow: "0 18px 42px rgba(0,0,0,0.55)",
            }}
          >
            Get a Fast Quote for Hydraulic Cylinder Repair
          </Typography>
          <Typography
            sx={{
              ...bodyCopySx,
              mt: 2,
              maxWidth: 760,
              fontSize: { xs: 15.5, md: 18 },
            }}
          >
            Request hydraulic cylinder repair for heavy equipment, fleets, trash
            trucks, construction equipment, and commercial operations across the
            North Houston service area.
          </Typography>
        </Container>
      </Hero>

      {/* ---------------------------- FORM + INFO ---------------------------- */}
      <Section>
        <Container maxWidth="lg" sx={containerSx}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {/* FORM */}
            <Grid item xs={12} md={7}>
              <Card
                elevation={0}
                sx={{
                  ...industrialCardSx,
                  position: "relative",
                  height: "100%",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background:
                      "linear-gradient(90deg, #D71920 0%, rgba(215,25,32,0.35) 48%, rgba(190,202,212,0.35) 100%)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Typography
                    sx={{
                      color: "#F7FAFC",
                      fontWeight: 950,
                      fontSize: { xs: 24, md: 30 },
                      lineHeight: 1.08,
                      letterSpacing: "-0.035em",
                      mb: 1,
                    }}
                  >
                    Request Service
                  </Typography>
                  <Typography sx={{ color: "rgba(231,238,244,0.72)", mb: 2.5 }}>
                    Tell us what is leaking, weak, bent, or down. We will review
                    your request and follow up with the next step.
                  </Typography>

                  {/* Success / error banners */}
                  {status.ok === true && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                      {status.msg}
                    </Alert>
                  )}
                  {status.ok === false && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {status.msg}
                    </Alert>
                  )}

                  {/* The form — ref lets us .reset() after success */}
                  <Box component="form" onSubmit={onSubmit} ref={formRef}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="name"
                          fullWidth
                          required
                          label="Name"
                          variant="outlined"
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="email"
                          fullWidth
                          required
                          label="Email"
                          type="email"
                          variant="outlined"
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="phone"
                          fullWidth
                          label="Phone"
                          type="tel"
                          variant="outlined"
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="message"
                          fullWidth
                          required
                          label="How can we help?"
                          multiline
                          rows={6}
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
                            "&.Mui-disabled": {
                              color: "rgba(255,255,255,0.55)",
                              bgcolor: "rgba(215,25,32,0.42)",
                            },
                          }}
                        >
                          {sending ? "Sending..." : "Request Service"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack spacing={3} sx={{ height: "100%" }}>
                {/* QUOTE GUIDANCE */}
                <Box sx={infoCardSx}>
                  <Typography
                    sx={{
                      color: "#D71920",
                      fontWeight: 950,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontSize: 12,
                      mb: 1.25,
                    }}
                  >
                    Fast Quote Guidance
                  </Typography>
                  <Typography
                    sx={{
                      color: "#F7FAFC",
                      fontWeight: 950,
                      fontSize: { xs: 21, md: 24 },
                      lineHeight: 1.12,
                      mb: 1.5,
                    }}
                  >
                    Help us quote it faster.
                  </Typography>
                  <Typography
                    sx={{ color: "rgba(231,238,244,0.78)", lineHeight: 1.75 }}
                  >
                    For the fastest quote, include photos of the cylinder,
                    equipment type, visible leaks or damage, and whether
                    pickup/delivery is needed.
                  </Typography>
                </Box>

                {/* DIRECT CONTACT */}
                <Box sx={infoCardSx}>
                  <Typography
                    sx={{
                      color: "#F7FAFC",
                      fontWeight: 950,
                      fontSize: { xs: 21, md: 24 },
                      lineHeight: 1.12,
                      mb: 2,
                    }}
                  >
                    Direct Contact
                  </Typography>
                  <Stack spacing={1.7}>
                    {[
                      {
                        label: "Phone",
                        value: "(936) 249-6042",
                        href: "tel:+19362496042",
                      },
                      {
                        label: "Email",
                        value: "juan@vetech-hydraulics.com",
                        href: "mailto:juan@vetech-hydraulics.com",
                      },
                      {
                        label: "Service Area",
                        value: "North Houston, Montgomery, Conroe, Magnolia",
                      },
                      {
                        label: "Business Hours",
                        value: "Mon–Fri: 8:00 AM – 5:00 PM",
                      },
                    ].map((item) => (
                      <Box key={item.label}>
                        <Typography
                          sx={{
                            color: "rgba(231,238,244,0.52)",
                            fontSize: 12,
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            mb: 0.25,
                          }}
                        >
                          {item.label}
                        </Typography>
                        {item.href ? (
                          <MuiLink
                            href={item.href}
                            sx={{
                              color: "#F7FAFC",
                              fontWeight: 900,
                              textDecoration: "none",
                              "&:hover": { color: "#D71920" },
                            }}
                          >
                            {item.value}
                          </MuiLink>
                        ) : (
                          <Typography
                            sx={{ color: "#F7FAFC", fontWeight: 800 }}
                          >
                            {item.value}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* TRUST STRIP */}
          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              p: { xs: 2, md: 2.5 },
              borderRadius: 3,
              bgcolor: "rgba(3,7,11,0.46)",
              border: "1px solid rgba(190,202,212,0.16)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <Grid container spacing={1.25}>
              {trustItems.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item}>
                  <Box
                    sx={{
                      height: "100%",
                      px: 1.5,
                      py: 1.25,
                      borderRadius: 2,
                      bgcolor: "rgba(12,29,42,0.86)",
                      border: "1px solid rgba(190,202,212,0.16)",
                      boxShadow:
                        "inset 3px 0 0 #D71920, inset 0 1px 0 rgba(255,255,255,0.07)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#F7FAFC",
                        fontWeight: 950,
                        lineHeight: 1.25,
                        fontSize: 14,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>

      <Divider sx={{ borderColor: "rgba(190,202,212,0.16)" }} />

      {/* Snackbar toast for auto-reply warning */}
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
