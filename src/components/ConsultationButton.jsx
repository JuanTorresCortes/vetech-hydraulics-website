import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

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
        href="sms:+8329017158"
        sx={{
          marginTop: theme.spacing(3),
          background: "linear-gradient(90deg, #821515ff 0%, #ff0000ff 100%)",
          color: "#ffffffff",
          padding: theme.spacing(1.5, 4),
          fontWeight: 700,
          fontFamily: "Roboto, sans-serif",
          boxShadow: "0px 9px 11px rgba(0, 0, 0, 8)",
          borderRadius: "4px",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(90deg, #ff0000ff 0%, #821515ff 100%)",
          },
        }}
      >
        Text Image for a Fast Quote
      </Button>
    </motion.div>
  );
};

export default ConsultationButton;
