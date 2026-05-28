// src/components/PhoneButton.js
// Fixed mobile call CTA rendered globally from _app so phone users always have an easy contact path.
// The spacer below prevents page content from being covered by the fixed bar on small screens.
import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { red } from "@mui/material/colors";
import { BUSINESS } from "../config/business";

export default function PhoneButton({
  phoneDisplay = BUSINESS.phoneDisplay,
  phoneHref = BUSINESS.phone,
}) {
  return (
    <>
      {/* Mobile Sticky Call CTA */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          display: { xs: "flex", md: "none" }, // mobile only
          justifyContent: "center",
          alignItems: "center",
          py: 1.25,
          px: 2,
          bgcolor: "#0F2331",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 900,
            letterSpacing: 0.2,
            lineHeight: 1,
          }}
        >
          <PhoneIcon sx={{ color: red[500] }} />

          <MuiLink
            href={`tel:${phoneHref}`}
            aria-label={`Call Vetech Hydraulics at ${phoneDisplay}`}
            sx={{
              color: red[500],
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            {phoneDisplay}
          </MuiLink>
        </Typography>
      </Box>

      {/* Spacer so content isn't hidden behind fixed bar (mobile only) */}
      <Box sx={{ display: { xs: "block", md: "none" }, height: 56 }} />
    </>
  );
}
