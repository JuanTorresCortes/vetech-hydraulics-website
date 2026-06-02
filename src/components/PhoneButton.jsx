// src/components/PhoneButton.jsx
// Fixed mobile call CTA — hero-palette, Oswald font, CC0000 red.
import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { BUSINESS } from "../config/business";

export default function PhoneButton({ phoneDisplay = BUSINESS.phoneDisplay }) {
  return (
    <>
      {/* Mobile sticky call bar — hidden on md+ */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          py: 1.25,
          px: 2,
          bgcolor: "#0a0a0a",
          borderTop: "1px solid rgba(204,0,0,0.35)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.6)",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.06em",
            lineHeight: 1,
            textTransform: "uppercase",
            fontSize: 15,
          }}
        >
          <PhoneIcon sx={{ color: "#CC0000", fontSize: 20 }} />
          <MuiLink
            href={BUSINESS.phoneTel}
            aria-label={`Call Vetech Hydraulics at ${phoneDisplay}`}
            sx={{
              color: "#CC0000",
              textDecoration: "none",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              "&:hover": { color: "#ff2222" },
            }}
          >
            {phoneDisplay}
          </MuiLink>
        </Typography>
      </Box>

      {/* Spacer so page content isn't hidden behind fixed bar */}
      <Box sx={{ display: { xs: "block", md: "none" }, height: 54 }} />
    </>
  );
}
