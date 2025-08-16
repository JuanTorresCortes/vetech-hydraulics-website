import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "primary.main", color: "white", py: 2, mt: 4 }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Vetech Hydraulics. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
