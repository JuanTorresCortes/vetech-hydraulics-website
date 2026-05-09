import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { primaryCtaSx } from "../utils/visualStyles";

const ConsultationButton = () => {
  const theme = useTheme();

  //const handleConsultationClick = () => {};
  return (
    <motion.div
      whileHover={{ scale: 0.95 }} // Scale down slightly to simulate pressing
      transition={{ duration: 0.2 }} // Quicker duration for a snappier effect
    >
      <Button
        variant="contained"
        startIcon={<ContactPhoneIcon />}
        aria-label="Text Vetech Hydraulics a photo for a fast hydraulic cylinder repair quote"
        href="sms:+19362496042?&body=Hi%20Vetech%20Hydraulics%2C%20I%E2%80%99d%20like%20a%20fast%20quote.%20I%E2%80%99ll%20send%20a%20picture%20now."
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
        Text Image for a Fast Quote
      </Button>
    </motion.div>
  );
};

export default ConsultationButton;
