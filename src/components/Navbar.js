// src/components/Navbar.js
import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Link as MuiLink,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { containerSx, primaryCtaSx } from "../utils/visualStyles";

const NAV_LINKS = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" },
  { text: "Service Areas", href: "/service-areas" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1050px)");
  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  const Brand = ({ mobile = false }) => (
    <Box
      component={NextLink}
      href="/"
      aria-label="Vetech Hydraulics home"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1.25, md: 1.5 },
        minWidth: 0,
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: mobile ? 48 : 58,
          height: mobile ? 48 : 58,
          flex: "0 0 auto",
          borderRadius: 2,
          bgcolor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(190,202,212,0.18)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 26px rgba(0,0,0,0.35)",
          overflow: "hidden",
        }}
      >
        <Image
          src="/VTH-logo.png"
          alt="Vetech Hydraulics logo"
          fill
          priority
          sizes={mobile ? "48px" : "58px"}
          style={{ objectFit: "contain", padding: mobile ? "6px" : "7px" }}
        />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            color: "#F7FAFC",
            fontWeight: 950,
            letterSpacing: { xs: "0.08em", md: "0.1em" },
            lineHeight: 1,
            fontSize: { xs: 15, sm: 17, md: 18 },
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Vetech Hydraulics
        </Typography>
        <Typography
          sx={{
            mt: 0.55,
            color: "rgba(214,222,230,0.72)",
            fontWeight: 800,
            letterSpacing: "0.04em",
            fontSize: { xs: 11, sm: 12 },
            lineHeight: 1.15,
            whiteSpace: "nowrap",
          }}
        >
          Veteran-Owned Hydraulic Repair
        </Typography>
      </Box>
    </Box>
  );

  const requestServiceButtonSx = {
    ...primaryCtaSx,
    px: 2.4,
    py: 1.15,
    fontSize: 12.5,
  };

  const DesktopLinks = (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        ml: "auto",
        gap: 0.45,
        whiteSpace: "nowrap",
      }}
    >
      {NAV_LINKS.map(({ text, href }) => {
        const active = isActive(href);
        return (
          <MuiLink
            key={text}
            component={NextLink}
            href={href}
            aria-current={active ? "page" : undefined}
            sx={{
              position: "relative",
              px: 1.45,
              py: 1.15,
              borderRadius: "10px",
              color: active ? "#fff" : "rgba(231,238,244,0.78)",
              textDecoration: "none",
              fontWeight: 850,
              fontSize: 14,
              letterSpacing: "0.015em",
              transition:
                "color 160ms ease, background 160ms ease, transform 160ms ease",
              bgcolor: active ? "rgba(215,25,32,0.13)" : "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 14,
                right: 14,
                bottom: 6,
                height: 2,
                borderRadius: 2,
                bgcolor: active ? "#D71920" : "transparent",
                boxShadow: active ? "0 0 14px rgba(215,25,32,0.8)" : "none",
                transition: "background 160ms ease, box-shadow 160ms ease",
              },
              "&:hover": {
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.055)",
                transform: "translateY(-1px)",
                "&::after": {
                  bgcolor: "#D71920",
                  boxShadow: "0 0 14px rgba(215,25,32,0.75)",
                },
              },
            }}
          >
            {text}
          </MuiLink>
        );
      })}
    </Box>
  );

  const DrawerList = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        width: "100vw",
        minHeight: "100svh",
        ...containerSx,
        pt: 2,
        pb: 4,
        background:
          "radial-gradient(circle at 20% 0%, rgba(215,25,32,0.18), transparent 32%), linear-gradient(145deg, #03070B 0%, #091722 54%, #020508 100%)",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2.5,
        }}
      >
        <Brand mobile />
        <IconButton
          aria-label="Close menu"
          onClick={toggleDrawer(false)}
          sx={{
            color: "#fff",
            border: "1px solid rgba(190,202,212,0.2)",
            bgcolor: "rgba(255,255,255,0.045)",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(190,202,212,0.18)", mb: 2 }} />

      <List disablePadding sx={{ display: "grid", gap: 1 }}>
        {NAV_LINKS.map(({ text, href }) => {
          const active = isActive(href);
          return (
            <ListItemButton
              key={text}
              component={NextLink}
              href={href}
              aria-current={active ? "page" : undefined}
              sx={{
                minHeight: 58,
                borderRadius: 2,
                color: active ? "#fff" : "rgba(231,238,244,0.84)",
                bgcolor: active
                  ? "rgba(215,25,32,0.16)"
                  : "rgba(255,255,255,0.035)",
                border: active
                  ? "1px solid rgba(215,25,32,0.48)"
                  : "1px solid rgba(190,202,212,0.12)",
                boxShadow: active
                  ? "inset 4px 0 0 #D71920"
                  : "inset 4px 0 0 transparent",
                transition: "background 160ms ease, border-color 160ms ease",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(215,25,32,0.36)",
                },
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontWeight: 950,
                  fontSize: 18,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ mt: 3 }}>
        <Button
          component={NextLink}
          href="/contact"
          fullWidth
          variant="contained"
          sx={{ ...requestServiceButtonSx, minHeight: 58, fontSize: 14 }}
        >
          Request Service
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        background:
          "linear-gradient(180deg, rgba(3,7,11,0.94) 0%, rgba(5,12,18,0.88) 100%)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(190,202,212,0.2)",
        boxShadow: "0 18px 42px rgba(0,0,0,0.38)",
        zIndex: theme.zIndex.drawer + 1,
      }}
      elevation={0}
    >
      <Container
        maxWidth="xl"
        sx={{ ...containerSx, px: { ...containerSx.px, lg: 5 } }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 74, md: 86 },
            justifyContent: "space-between",
            gap: { xs: 2, md: 3 },
          }}
        >
          <Brand mobile={isMobile} />

          {isMobile ? (
            <>
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                  ml: "auto",
                  color: "#fff",
                  border: "1px solid rgba(190,202,212,0.22)",
                  bgcolor: "rgba(255,255,255,0.045)",
                  borderRadius: 2,
                  "&:hover": { bgcolor: "rgba(215,25,32,0.14)" },
                }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  zIndex: theme.zIndex.drawer + 2,
                  "& .MuiDrawer-paper": {
                    width: "100%",
                    maxWidth: "100%",
                    border: 0,
                    backgroundColor: "transparent",
                  },
                }}
              >
                {DrawerList}
              </Drawer>
            </>
          ) : (
            <>
              {DesktopLinks}
              <Button
                component={NextLink}
                href="/contact"
                variant="contained"
                sx={{ ...requestServiceButtonSx, ml: 1.5 }}
              >
                Request Service
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
