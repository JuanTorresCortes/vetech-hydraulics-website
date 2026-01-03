// src/components/SdvobBadge.js
import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Stack } from "@mui/material";

export default function SdvobBadge({
  variant = "band", // "band" | "card"
  title = "SDVOSB • Service-Disabled Veteran-Owned & Operated",
  subtitle = "Veteran-owned. Service-first. Built on integrity and accountability.",
  iconSrc = "/sdvoc.png",
}) {
  const isBand = variant === "band";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2.5, sm: 3 },
        bgcolor: isBand ? "#0B1B27" : "transparent",
        borderTop: isBand ? "1px solid rgba(255,255,255,0.08)" : "none",
        borderBottom: isBand ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
            p: isBand ? { xs: 2, sm: 2.5 } : { xs: 2.5, sm: 3 },
            borderRadius: 3,
            bgcolor: isBand ? "#102A3A" : "#102A3A",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.25, sm: 2 }}
            alignItems={{ xs: "center", sm: "center" }}
            justifyContent="center"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Box
              sx={{
                width: { xs: 64, sm: 72, md: 80 },
                height: { xs: 64, sm: 72, md: 80 },
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={iconSrc}
                alt="Service-Disabled Veteran-Owned Small Business (SDVOSB)"
                fill
                sizes="(max-width: 600px) 64px, (max-width: 900px) 72px, 80px"
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: { xs: 14.5, sm: 16 },
                  lineHeight: 1.2,
                  textWrap: "balance",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  mt: 0.5,
                  color: "rgba(255,255,255,0.78)",
                  fontSize: { xs: 13.5, sm: 14.5 },
                  lineHeight: 1.5,
                  textWrap: "balance",
                  maxWidth: 820,
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
