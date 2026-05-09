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
import { bodyCopySx, containerSx } from "../utils/visualStyles";

export default function VeteranOwnershipSection({ iconSrc = "/sdvoc.png" }) {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        position: "relative",
        py: { xs: 4.5, md: 6.5 },
        bgcolor: "#0B1B27",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ maxWidth: 1120, mx: "auto" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2.5, md: 3 }}
            alignItems={{ xs: "center", md: "center" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {/* SDVOSB Icon */}
            <Box
              sx={{
                width: { xs: 56, sm: 64 },
                height: { xs: 56, sm: 64 },
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={iconSrc}
                alt="Service-Disabled Veteran-Owned Small Business (SDVOSB)"
                fill
                sizes="64px"
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Text Content */}
            <Box sx={{ maxWidth: 820 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: { xs: 18, sm: 20 },
                  lineHeight: 1.2,
                  textWrap: "balance",
                }}
              >
                Proudly Disabled Veteran-Owned
              </Typography>

              <Typography
                sx={{
                  mt: 0.75,
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 700,
                  fontSize: { xs: 14.5, sm: 15.5 },
                }}
              >
                Built with discipline, integrity, and purpose.
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  ...bodyCopySx,
                }}
              >
                As a disabled veteran-owned and operated business, we bring the
                same commitment to excellence and service to every partnership.
              </Typography>

              <Typography
                sx={{
                  mt: 1.25,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14,
                }}
              >
                You can verify our status anytime through the SBA’s official
                Veteran Small Business Certification database at{" "}
                <MuiLink
                  href="https://veterans.certify.sba.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#6EC1FF",
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  veterans.certify.sba.gov
                </MuiLink>
                .
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
