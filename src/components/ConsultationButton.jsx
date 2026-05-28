// Reusable high-intent SMS CTA used across pages where customers are encouraged to text a cylinder photo.
// Keep the phone number and prefilled body aligned with business contact details if those change.
import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { primaryCtaSx } from "../utils/visualStyles";
import { BUSINESS } from "../config/business";

const ConsultationButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const smsHref = BUSINESS.smsHref;

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
          isMobile
            ? "Text Vetech Hydraulics a photo for a fast hydraulic cylinder repair quote"
            : "Request a fast hydraulic cylinder repair quote from Vetech Hydraulics"
        }
        href={isMobile ? smsHref : "/contact"}
        sx={{
          ...primaryCtaSx,
          mt: theme.spacing(3),
          px: { xs: 3, sm: 4 },
          py: 1.45,
          fontSize: { xs: 12, sm: 13 },
          boxShadow:
            "0 18px 38px rgba(215,25,32,0.3), inset 0 1px 0 rgba(255,255,255,0.24)",
        }}
      >
        {isMobile ? "Text Image for a Fast Quote" : "Get a Fast Quote"}
      </Button>
    </motion.div>
  );
};

export default ConsultationButton;
