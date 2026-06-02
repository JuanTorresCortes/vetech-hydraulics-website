// src/components/VeteranOwnershipSection.js
// Veteran pride section — patriotic, hard-working, customer-forward.
// Tone: earned trust, American work ethic, service to customers mirrors service to country.
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { containerSx } from "../utils/visualStyles";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { delayChildren: 0.2, staggerChildren: 0.13 } },
};

const COMMITMENTS = [
  {
    star: "★",
    title: "WE EARN YOUR TRUST",
    body: "We don't coast on credentials. Every repair is another chance to prove we're worth your business. You'll know it's right before it leaves the shop.",
  },
  {
    star: "★",
    title: "WE SHOW UP",
    body: "Mission-ready work ethic. When your equipment is down, we treat it like the emergency it is. Fast, honest, no runaround.",
  },
  {
    star: "★",
    title: "WE STAND BEHIND IT",
    body: "Pressure-tested before return. If it's not right, we make it right. That's not a policy — that's how we were trained.",
  },
];

export default function VeteranOwnershipSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        position: "relative",
        py: { xs: 6, md: 9 },
        overflow: "hidden",
        // Near-black with a warm red radial glow — matches hero palette
        background:
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(204,0,0,0.13), transparent 70%), linear-gradient(180deg, #0a0a0a 0%, #0e0e0e 50%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Subtle diagonal stripe texture — evokes the American flag without being literal */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.045,
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 32px)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.9), transparent 100%)",
        }}
      />

      {/* Red left-edge accent line — mirrors hero card treatment */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: 0,
          top: "10%",
          bottom: "10%",
          width: 3,
          background: "linear-gradient(180deg, transparent, #CC0000 30%, #CC0000 70%, transparent)",
          opacity: 0.8,
        }}
      />

      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ maxWidth: 1120, mx: "auto", position: "relative", zIndex: 1 }}>

          {/* ── Header ─────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              {/* Veteran badge row */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                <Box sx={{ height: 1, width: 32, bgcolor: "#CC0000", opacity: 0.7 }} />
                <Typography
                  sx={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#CC0000",
                  }}
                >
                  ★ &nbsp;VETERAN-OWNED &amp; OPERATED&nbsp; ★
                </Typography>
                <Box sx={{ height: 1, width: 32, bgcolor: "#CC0000", opacity: 0.7 }} />
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "clamp(30px, 8vw, 48px)", md: "clamp(40px, 4.5vw, 62px)" },
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color: "#F0F0F0",
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
                American Grit.{" "}
                <Box component="span" sx={{ color: "#CC0000" }}>
                  Military Standards.
                </Box>
                <br />
                Your Equipment, Running.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.7,
                  color: "rgba(220,220,220,0.78)",
                  maxWidth: 640,
                  mx: "auto",
                  textWrap: "balance",
                }}
              >
                When you choose Vetech, you&apos;re supporting a veteran who will work
                for you the same way he served this country —{" "}
                <Box component="span" sx={{ color: "#F0F0F0", fontWeight: 600 }}>
                  with everything he&apos;s got.
                </Box>
              </Typography>
            </Box>
          </motion.div>

          {/* ── Three commitment pillars ────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {COMMITMENTS.map(({ star, title, body }) => (
                <Grid item xs={12} md={4} key={title}>
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        position: "relative",
                        p: { xs: 3, md: 3.5 },
                        background: "rgba(18,18,22,0.82)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderTop: "2px solid #CC0000",
                        borderRadius: "4px",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                        transition: "border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
                        "&:hover": {
                          borderTopColor: "#CC0000",
                          borderColor: "rgba(204,0,0,0.3)",
                          transform: { md: "translateY(-5px)" },
                          boxShadow: "0 28px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,0,0,0.1)",
                        },
                      }}
                    >
                      {/* Star accent */}
                      <Typography
                        aria-hidden="true"
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 28,
                          color: "#CC0000",
                          lineHeight: 1,
                          mb: 1.75,
                          display: "block",
                          filter: "drop-shadow(0 0 8px rgba(204,0,0,0.5))",
                        }}
                      >
                        {star}
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: 20, md: 22 },
                          letterSpacing: "0.03em",
                          textTransform: "uppercase",
                          color: "#F0F0F0",
                          lineHeight: 1.1,
                          mb: 1.5,
                        }}
                      >
                        {title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: { xs: 14, md: 15 },
                          lineHeight: 1.7,
                          color: "rgba(200,200,200,0.78)",
                        }}
                      >
                        {body}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* ── Bottom patriotic statement ──────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                mt: { xs: 4, md: 5 },
                pt: { xs: 4, md: 5 },
                borderTop: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 3, md: 4 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {/* Left: creed statement */}
              <Box sx={{ maxWidth: 640 }}>
                <Typography
                  sx={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: 18, md: 22 },
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#F0F0F0",
                    lineHeight: 1.3,
                  }}
                >
                  Your support keeps an American veteran in business.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    mt: 0.75,
                    fontSize: { xs: 14, md: 15 },
                    color: "rgba(200,200,200,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  We don&apos;t take that lightly. Every job is an opportunity to prove
                  it was worth your trust.
                </Typography>
              </Box>

              {/* Right: service stats / badges */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 3, md: 4 },
                  flexShrink: 0,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                {[
                  { value: "U.S.", label: "VETERAN" },
                  { value: "100%", label: "PRESSURE TESTED" },
                  { value: "EVERY", label: "JOB GUARANTEED" },
                ].map(({ value, label }) => (
                  <Box key={label} sx={{ textAlign: "center", minWidth: 72 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: 26, md: 30 },
                        color: "#CC0000",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        color: "rgba(200,200,200,0.55)",
                        textTransform: "uppercase",
                        mt: 0.25,
                        lineHeight: 1.3,
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
}
