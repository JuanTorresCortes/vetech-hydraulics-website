// src/components/SdvobBadge.js
// Compact veteran-owned trust band — hero palette, no SDVOSB imagery.
// Replaces the old SBA icon badge with a clean industrial strip.
import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const POINTS = [
  { icon: "★", text: "Veteran-Owned & Operated" },
  { icon: "✓", text: "Pressure Tested — Every Repair" },
  { icon: "⚡", text: "Fast Turnaround" },
  { icon: "🛡", text: "Service-First Work Ethic" },
];

export default function SdvobBadge({
  title = "Veteran-Owned. Service-First. Built on Earned Trust.",
}) {
  return (
    <Box
      component="section"
      aria-label="Veteran-owned trust credentials"
      sx={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        py: { xs: 2.5, sm: 3 },
        bgcolor: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          gap={{ xs: 2, md: 4 }}
        >
          {/* Label */}
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: { xs: 14, md: 15 },
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#F0F0F0",
              flexShrink: 0,
              "& span": { color: "#CC0000" },
            }}
          >
            <span>★</span>&nbsp; {title}
          </Typography>

          {/* Trust points */}
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={{ xs: 1.5, md: 2.5 }}
          >
            {POINTS.map(({ icon, text }) => (
              <Box
                key={text}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                }}
              >
                <Typography
                  aria-hidden="true"
                  sx={{ fontSize: 13, color: "#CC0000", lineHeight: 1 }}
                >
                  {icon}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(200,200,200,0.55)",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
