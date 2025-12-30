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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const router = useRouter();

  const phoneNumber = "9362496042";

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },

    { text: "About Us", href: "/about" },
    { text: "Service Areas", href: "/service-areas" },
    { text: "Contact Us", href: "/contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(open);
  };

  const isActive = (href) => router.pathname === href;

  const DrawerList = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250, backgroundColor: "#000", height: "100%" }}
    >
      <List>
        {navLinks.map(({ text, href }) => {
          const active = isActive(href);
          return (
            <ListItemButton
              key={text}
              component={NextLink}
              href={href}
              aria-current={active ? "page" : undefined}
              sx={{
                color: active ? red[500] : theme.palette.secondary.main,
                "&:hover": { color: red[700] },
              }}
            >
              <ListItemText primary={text.toUpperCase()} />
            </ListItemButton>
          );
        })}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.secondary.main,
          }}
        >
          <PhoneIcon sx={{ mr: 1 }} />
          <MuiLink
            href={`tel:${phoneNumber}`}
            sx={{ color: red[500], textDecoration: "none" }}
          >
            (936) - 249 - 6042
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );

  const DesktopLinks = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        ml: "auto",
        gap: theme.spacing(3),
        whiteSpace: "nowrap",
      }}
    >
      {navLinks.map(({ text, href }) => {
        const active = isActive(href);
        return (
          <MuiLink
            key={text}
            component={NextLink}
            href={href}
            aria-current={active ? "page" : undefined}
            sx={{
              color: active ? red[500] : "white",
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": { color: red[700] },
              transition: "color .15s ease",
            }}
          >
            {text}
          </MuiLink>
        );
      })}

      <MuiLink
        href={`tel:${phoneNumber}`}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: red[500],
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        <PhoneIcon />
        (936) - 249 - 6042
      </MuiLink>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#000000",
        py: 1,
        zIndex: theme.zIndex.drawer + 1,
      }}
      elevation={4}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <NextLink href="/" passHref legacyBehavior>
            <MuiLink
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image
                src="/VTH-logo.png"
                alt="Vetech Hydraulics Logo"
                width={isMobile ? 210 : 400}
                height={isMobile ? 110 : 175}
                style={{ cursor: "pointer" }}
                priority
              />
            </MuiLink>
          </NextLink>

          {/* Navigation Links */}
          {isMobile ? (
            <>
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{ ml: "auto" }}
                aria-label="menu"
              >
                <MenuIcon sx={{ color: theme.palette.secondary.main }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#000000",
                    width: 250,
                  },
                }}
              >
                {DrawerList}
              </Drawer>
            </>
          ) : (
            DesktopLinks
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
