// src/components/VeteranOwnershipSection.js
import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialColors,
} from "../utils/visualStyles";

export default function VeteranOwnershipSection({ iconSrc = "/sdvoc.png" }) {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        position: "relative",
        py: { xs: 4.5, md: 7 },
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 26% 28% at 9% 22%, rgba(215,25,32,0.07), transparent 68%), radial-gradient(ellipse 42% 36% at 91% 8%, rgba(42,69,86,0.34), transparent 68%), radial-gradient(ellipse 54% 46% at 72% 92%, rgba(13,35,52,0.52), transparent 72%), linear-gradient(180deg, #050A0F 0%, #081522 48%, #050D14 100%)",
        borderTop: "1px solid rgba(190,202,212,0.18)",
        borderBottom: "1px solid rgba(190,202,212,0.18)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.24,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.88) 18%, rgba(0,0,0,0.48) 76%, transparent 100%)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          left: "max(20px, calc((100vw - 1120px) / 2))",
          right: "max(20px, calc((100vw - 1120px) / 2))",
          bottom: 0,
          height: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, transparent, rgba(190,202,212,0.22), rgba(215,25,32,0.24), rgba(190,202,212,0.22), transparent)",
        },
      }}
    >
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ maxWidth: 1120, mx: "auto", position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: { xs: 3, md: 4 },
              p: { xs: 2.25, sm: 3, md: 3.75 },
              bgcolor: "rgba(8,19,28,0.92)",
              backgroundImage:
                "radial-gradient(ellipse 28% 38% at 0% 0%, rgba(215,25,32,0.06), transparent 70%), radial-gradient(ellipse 34% 46% at 100% 8%, rgba(190,202,212,0.08), transparent 72%), linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.018) 52%, rgba(215,25,32,0.018))",
              border: `1px solid ${industrialColors.steelStrong}`,
              boxShadow:
                "0 28px 80px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.1)",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 12,
                borderRadius: { xs: 2.25, md: 3 },
                border: "1px solid rgba(190,202,212,0.12)",
                pointerEvents: "none",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 3,
                background:
                  "linear-gradient(90deg, rgba(215,25,32,0.9), rgba(190,202,212,0.24), transparent 64%)",
                boxShadow: "0 0 22px rgba(215,25,32,0.18)",
                pointerEvents: "none",
              },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2.5, sm: 3, md: 4 }}
              alignItems={{ xs: "stretch", md: "center" }}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* SDVOSB Icon */}
              <Box
                sx={{
                  width: { xs: "100%", md: 136 },
                  flex: "0 0 auto",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 112, sm: 120, md: 128 },
                    p: { xs: 1.25, md: 1.5 },
                    borderRadius: 3,
                    background:
                      "linear-gradient(145deg, rgba(247,250,252,0.95), rgba(218,226,233,0.9))",
                    border: "1px solid rgba(255,255,255,0.52)",
                    boxShadow:
                      "0 18px 46px rgba(0,0,0,0.34), 0 0 0 1px rgba(190,202,212,0.14), inset 0 1px 0 rgba(255,255,255,0.72)",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={iconSrc}
                      alt="Service-Disabled Veteran-Owned Small Business (SDVOSB)"
                      fill
                      sizes="(max-width: 600px) 112px, (max-width: 900px) 120px, 128px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 0.75,
                      textAlign: "center",
                      color: "#132230",
                      fontWeight: 950,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontSize: 10,
                      lineHeight: 1.2,
                    }}
                  >
                    SBA Reference
                  </Typography>
                </Box>
              </Box>

              {/* Text Content */}
              <Box sx={{ maxWidth: 840, minWidth: 0 }}>
                <Typography
                  sx={{
                    ...eyebrowSx,
                    mb: 1,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  VETERAN-OWNED CREDIBILITY
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    ...headlineSx,
                    fontSize: {
                      xs: "clamp(26px, 7vw, 36px)",
                      md: "clamp(34px, 3.4vw, 46px)",
                    },
                    maxWidth: 780,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Proudly Disabled Veteran-Owned
                </Typography>

                <Box
                  sx={{
                    width: { xs: 72, md: 104 },
                    height: 3,
                    mx: { xs: "auto", md: 0 },
                    my: { xs: 1.5, md: 1.75 },
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, rgba(215,25,32,0.95), rgba(190,202,212,0.28), transparent)",
                  }}
                  aria-hidden="true"
                />

                <Typography
                  sx={{
                    color: "rgba(247,250,252,0.92)",
                    fontWeight: 850,
                    fontSize: { xs: 15, sm: 16 },
                    lineHeight: 1.45,
                    textWrap: "balance",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Built with discipline, integrity, and purpose.
                </Typography>

                <Typography
                  sx={{
                    mt: 1.1,
                    ...bodyCopySx,
                    maxWidth: 760,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  As a disabled veteran-owned and operated business, we bring the
                  same commitment to excellence and service to every partnership.
                </Typography>

                <Box
                  sx={{
                    mt: { xs: 2, md: 2.25 },
                    p: { xs: 1.6, sm: 1.85, md: 2 },
                    borderRadius: 2.5,
                    background:
                      "linear-gradient(145deg, rgba(3,7,11,0.46), rgba(12,29,42,0.42))",
                    border: "1px solid rgba(190,202,212,0.2)",
                    borderLeft: {
                      xs: "1px solid rgba(190,202,212,0.2)",
                      md: `3px solid ${industrialColors.hydraulicRed}`,
                    },
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(231,238,244,0.8)",
                      fontSize: { xs: 13.5, sm: 14.25 },
                      lineHeight: 1.68,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    You can verify our status anytime through the SBA’s official
                    Veteran Small Business Certification database at{" "}
                    <MuiLink
                      href="https://veterans.certify.sba.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: industrialColors.text,
                        fontWeight: 950,
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(215,25,32,0.72)",
                        pb: "1px",
                        transition:
                          "color 160ms ease, border-color 160ms ease, outline-color 160ms ease",
                        "&:hover": {
                          color: "#FFE8E9",
                          borderBottomColor: industrialColors.hydraulicRed,
                        },
                        "&:focus-visible": {
                          outline: "2px solid rgba(247,250,252,0.78)",
                          outlineOffset: "3px",
                          borderRadius: "2px",
                        },
                      }}
                    >
                      veterans.certify.sba.gov
                    </MuiLink>
                    .
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
