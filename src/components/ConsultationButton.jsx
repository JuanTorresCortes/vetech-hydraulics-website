// Reusable high-intent SMS CTA used across pages where customers are encouraged to text a cylinder photo.
// Keep the phone number and prefilled body aligned with business contact details if those change.
import React, { useEffect, useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { primaryCtaSx } from "../utils/visualStyles";
import { BUSINESS } from "../config/business";

const ConsultationButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mounted, setMounted] = useState(false);
  const smsHref = BUSINESS.smsHref;

  // Wait for client hydration before switching to the mobile variant.
  // Without this guard, the server renders desktop HTML and the client immediately
  // renders mobile HTML (different href/label/text), causing a hydration mismatch.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount: show desktop version to match SSR output.
  // After mount: show the correct responsive version.
  const showMobile = mounted && isMobile;

  // Mobile visitors can text a photo immediately; desktop visitors go to the contact form to avoid unreliable sms: handling.
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="contained"
        startIcon={<ContactPhoneIcon />}
        aria-label={
          showMobile
            ? "Text Vetech Hydraulics a photo for a fast hydraulic cylinder repair quote"
            : "Request a fast hydraulic cylinder repair quote from Vetech Hydraulics"
        }
        href={showMobile ? smsHref : "/contact"}
        sx={{
          ...primaryCtaSx,
          mt: theme.spacing(3),
          px: { xs: 3, sm: 4 },
          py: 1.45,
          fontSize: { xs: 12, sm: 13 },
          boxShadow:
            "0 18px 38px rgba(204,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.24)",
        }}
      >
        {showMobile ? "Text Image for a Fast Quote" : "Get a Fast Quote"}
      </Button>
    </motion.div>
  );
};

export default ConsultationButton;
