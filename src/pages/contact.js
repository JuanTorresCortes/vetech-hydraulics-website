// src/pages/contact.js
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRef, useState } from "react";
import confetti from "canvas-confetti"; // 🎉
import backHoe from "../image/backHoe.webp";

/* ---------------------------- Layout primitives ---------------------------- */

const Hero = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "42vh",
  display: "flex",
  alignItems: "flex-end",
  color: "#fff",
}));

const Section = styled("section")(({ theme }) => ({
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0F2331",
}));

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
    } catch (_err) {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Vetech Hydraulics</title>
        <meta
          name="description"
          content="Contact Vetech Hydraulics for cylinder repair quotes and scheduling."
        />
      </Head>

      {/* ------------------------------- HERO -------------------------------- */}
      <Hero>
        <Image
          src={backHoe}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 900, fontSize: { xs: 28, md: 44 } }}
          >
            Contact Us
          </Typography>
        </Container>
      </Hero>

      {/* ---------------------------- FORM + INFO ---------------------------- */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Grid container spacing={4}>
            {/* FORM */}
            <Grid item xs={12} md={7}>
              <Card
                elevation={0}
                sx={{
                  bgcolor: "#102A3A",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <CardContent>
                  <Typography sx={{ color: "#fff", fontWeight: 800, mb: 2 }}>
                    Send a Message
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
                          InputProps={{ sx: { color: "#fff" } }}
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
                          InputProps={{ sx: { color: "#fff" } }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="phone"
                          fullWidth
                          label="Phone"
                          type="tel"
                          variant="outlined"
                          InputProps={{ sx: { color: "#fff" } }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="message"
                          fullWidth
                          required
                          label="How can we help?"
                          multiline
                          rows={5}
                          variant="outlined"
                          InputProps={{ sx: { color: "#fff" } }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={sending}
                          sx={{ fontWeight: 800 }}
                        >
                          {sending ? "Sending..." : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* INFO BOX */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "#0E2635",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Call or Text
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <a
                    href="tel:+19362496042"
                    style={{ color: "#6EC1FF", fontWeight: 700 }}
                  >
                    (936) 249-6042
                  </a>
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>Email</Typography>
                <Typography sx={{ mb: 2 }}>
                  <a
                    href="mailto:service@vetechhydraulics.com"
                    style={{ color: "#6EC1FF", fontWeight: 700 }}
                  >
                    service@vetechhydraulics.com
                  </a>
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>Hours</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                  Mon–Fri: 8:00am – 6:00pm
                  <br />
                  Sat: 9:00am – 1:00pm
                  <br />
                  24/7 emergency support available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

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
