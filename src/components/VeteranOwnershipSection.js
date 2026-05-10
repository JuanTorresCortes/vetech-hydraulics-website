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
        py: { xs: 5, md: 7.5 },
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 34% 28% at 8% 18%, rgba(215,25,32,0.055), transparent 62%), radial-gradient(ellipse 42% 34% at 90% 12%, rgba(110,193,255,0.075), transparent 64%), radial-gradient(ellipse 58% 48% at 74% 88%, rgba(16,42,58,0.42), transparent 70%), linear-gradient(180deg, #050A0F 0%, #081522 46%, #050E16 100%)",
        borderTop: "1px solid rgba(190,202,212,0.24)",
        borderBottom: "1px solid rgba(190,202,212,0.18)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.26,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.88) 18%, rgba(0,0,0,0.48) 74%, transparent 100%)",
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
            "linear-gradient(90deg, transparent, rgba(190,202,212,0.2), rgba(215,25,32,0.22), rgba(190,202,212,0.2), transparent)",
        },
      }}
    >
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ maxWidth: 1120, mx: "auto" }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: { xs: 3, md: 4 },
              p: { xs: 2.25, sm: 3, md: 4 },
              overflow: "hidden",
              background:
                "radial-gradient(ellipse at 86% 0%, rgba(110,193,255,0.065), transparent 42%), linear-gradient(145deg, rgba(255,255,255,0.082), rgba(255,255,255,0.018) 48%, rgba(215,25,32,0.018))",
              border: "1px solid rgba(190,202,212,0.26)",
              boxShadow:
                "0 28px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.1)",
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
                top: 0,
                bottom: 0,
                left: 0,
                width: { xs: 4, md: 5 },
                background:
                  "linear-gradient(180deg, rgba(215,25,32,0.82), rgba(215,25,32,0.26), transparent)",
                boxShadow: "0 0 22px rgba(215,25,32,0.22)",
                pointerEvents: "none",
              },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2.5, sm: 3, md: 4 }}
              alignItems={{ xs: "center", md: "center" }}
              textAlign={{ xs: "center", md: "left" }}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* SDVOSB Icon */}
              <Box
                sx={{
                  width: { xs: 104, sm: 118, md: 132 },
                  flex: "0 0 auto",
                  p: { xs: 1.5, md: 1.75 },
                  borderRadius: 3,
                  background:
                    "linear-gradient(145deg, rgba(247,250,252,0.96), rgba(217,225,232,0.88))",
                  border: "1px solid rgba(255,255,255,0.48)",
                  boxShadow:
                    "0 18px 42px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.72)",
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
                    sizes="(max-width: 600px) 104px, (max-width: 900px) 118px, 132px"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>

              {/* Text Content */}
              <Box sx={{ maxWidth: 830, minWidth: 0 }}>
                <Typography sx={{ ...eyebrowSx, mb: 1 }}>
                  VETERAN-OWNED CREDIBILITY
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    color: industrialColors.text,
                    fontWeight: 950,
                    fontSize: { xs: "clamp(26px, 7vw, 36px)", md: 42 },
                    lineHeight: 1.04,
                    letterSpacing: "-0.04em",
                    textWrap: "balance",
                  }}
                >
                  Proudly Disabled Veteran-Owned
                </Typography>

                <Box
                  sx={{
                    width: { xs: 72, md: 96 },
                    height: 3,
                    mx: { xs: "auto", md: 0 },
                    my: { xs: 1.5, md: 1.75 },
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, rgba(215,25,32,1), rgba(215,25,32,0.32), transparent)",
                  }}
                  aria-hidden="true"
                />

                <Typography
                  sx={{
                    color: "rgba(247,250,252,0.92)",
                    fontWeight: 800,
                    fontSize: { xs: 15, sm: 16 },
                    lineHeight: 1.45,
                    textWrap: "balance",
                  }}
                >
                  Built with discipline, integrity, and purpose.
                </Typography>

                <Typography
                  sx={{
                    mt: 1.1,
                    ...bodyCopySx,
                  }}
                >
                  As a disabled veteran-owned and operated business, we bring the
                  same commitment to excellence and service to every partnership.
                </Typography>

                <Box
                  sx={{
                    mt: { xs: 2, md: 2.25 },
                    p: { xs: 1.5, sm: 1.75 },
                    borderRadius: 2,
                    background: "rgba(0,0,0,0.2)",
                    border: "1px solid rgba(190,202,212,0.18)",
                    borderLeft: {
                      xs: "1px solid rgba(190,202,212,0.18)",
                      md: `3px solid ${industrialColors.hydraulicRed}`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(231,238,244,0.78)",
                      fontSize: { xs: 13.5, sm: 14 },
                      lineHeight: 1.65,
                    }}
                  >
                    You can verify our status anytime through the SBA’s official
                    Veteran Small Business Certification database at{" "}
                    <MuiLink
                      href="https://veterans.certify.sba.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 900,
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(215,25,32,0.72)",
                        pb: "1px",
                        "&:hover": {
                          color: "#FFE8E9",
                          borderBottomColor: industrialColors.hydraulicRed,
                        },
                        "&:focus-visible": {
                          outline: "2px solid rgba(255,255,255,0.78)",
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
