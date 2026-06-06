// src/components/Navbar.js
// Site navigation — hero-palette colors, Oswald links, scroll-shrink effect, bigger logo.
import React, { useEffect, useState } from "react";
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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRouter } from "next/router";
import { containerSx, primaryCtaSx } from "../utils/visualStyles";
import { BUSINESS } from "../config/business";

const NAV_LINKS = [
  { text: "Home",          href: "/" },
  { text: "Services",      href: "/services" },
  { text: "Fleet Support", href: "/fleet-support" },
  { text: "Case Studies",  href: "/case-studies" },
  { text: "Service Areas", href: "/service-areas" },
  { text: "About",         href: "/about" },
  { text: "Contact",       href: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const theme   = useTheme();
  const isMobile = useMediaQuery("(max-width: 1300px)", { noSsr: true });
  const router  = useRouter();

  // Scroll-shrink: compress navbar once user scrolls past 40px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    const handleRouteChange = () => setDrawerOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  const toggleDrawer = (open) => (event) => {
    if (event?.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setDrawerOpen(open);
  };

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  // ── Logo / Brand ─────────────────────────────────────────
  const Brand = ({ mobile = false }) => (
    <Box
      component={NextLink}
      href="/"
      aria-label="Vetech Hydraulics home"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          // Desktop logo — bigger than before, shrinks slightly when scrolled
          width: mobile
            ? { xs: "min(58vw, 230px)", sm: 248, md: 262 }
            : scrolled
            ? { md: 260, lg: 290, xl: 318 }
            : { md: 290, lg: 322, xl: 356 },
          height: mobile
            ? { xs: 84, sm: 92, md: 96 }
            : scrolled
            ? { md: 96, lg: 106, xl: 114 }
            : { md: 108, lg: 120, xl: 130 },
          flex: "0 0 auto",
          transition: "width 280ms ease, height 280ms ease, filter 180ms ease, transform 180ms ease",
          filter:
            "drop-shadow(0 10px 20px rgba(0,0,0,0.5)) drop-shadow(0 0 12px rgba(204,0,0,0.2))",
          "&:hover": {
            filter:
              "drop-shadow(0 12px 24px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(204,0,0,0.32))",
            transform: "translateY(-1px)",
          },
        }}
      >
        <Image
          src="/VTH-logo.webp"
          alt="Vetech Hydraulics"
          fill
          priority={!mobile}
          sizes={
            mobile
              ? "(max-width: 600px) 58vw, 262px"
              : "(max-width: 1536px) 322px, 356px"
          }
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );

  // ── Desktop nav links ─────────────────────────────────────
  const DesktopLinks = (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        display: "flex",
        alignItems: "center",
        ml: "auto",
        gap: 0.25,
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
              px: 1.5,
              py: 1,
              borderRadius: "2px",
              color: active ? "#fff" : "rgba(220,220,220,0.72)",
              textDecoration: "none",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 500,
              fontSize: 13.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 160ms ease, background 160ms ease, transform 160ms ease",
              bgcolor: active ? "rgba(204,0,0,0.12)" : "transparent",
              // Red underline for active page
              "&::after": {
                content: '""',
                position: "absolute",
                left: 12,
                right: 12,
                bottom: 4,
                height: "2px",
                borderRadius: 2,
                bgcolor: active ? "#CC0000" : "transparent",
                boxShadow: active ? "0 0 10px rgba(204,0,0,0.7)" : "none",
                transition: "background 160ms ease, box-shadow 160ms ease",
              },
              "&:hover": {
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.05)",
                transform: "translateY(-1px)",
                "&::after": {
                  bgcolor: "#CC0000",
                  boxShadow: "0 0 10px rgba(204,0,0,0.6)",
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

  // ── Mobile drawer ─────────────────────────────────────────
  const DrawerList = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        width: "100vw",
        minHeight: "100svh",
        overflowY: "auto",
        ...containerSx,
        pt: 2,
        pb: 4,
        background:
          "radial-gradient(circle at 20% 0%, rgba(204,0,0,0.14), transparent 34%), linear-gradient(160deg, #080808 0%, #0e0e0e 55%, #080808 100%)",
        color: "#fff",
      }}
    >
      {/* Drawer header */}
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
            border: "1px solid rgba(255,255,255,0.12)",
            bgcolor: "rgba(255,255,255,0.04)",
            borderRadius: "2px",
            "&:hover": { bgcolor: "rgba(204,0,0,0.14)", borderColor: "rgba(204,0,0,0.4)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

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
                minHeight: 56,
                borderRadius: "2px",
                color: active ? "#fff" : "rgba(220,220,220,0.82)",
                bgcolor: active ? "rgba(204,0,0,0.14)" : "rgba(255,255,255,0.03)",
                border: active
                  ? "1px solid rgba(204,0,0,0.42)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: active ? "inset 3px 0 0 #CC0000" : "inset 3px 0 0 transparent",
                transition: "background 160ms ease, border-color 160ms ease",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(204,0,0,0.3)",
                },
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Mobile CTA */}
      <Box sx={{ mt: 3 }}>
        <Button
          component="a"
          href={BUSINESS.phoneTel}
          fullWidth
          variant="contained"
          startIcon={<PhoneIcon />}
          sx={{
            ...primaryCtaSx,
            minHeight: 56,
            fontSize: 15,
          }}
        >
          CALL NOW
        </Button>
      </Box>
    </Box>
  );

  // ── AppBar ────────────────────────────────────────────────
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        background: scrolled
          ? "rgba(8,8,8,0.97)"
          : "linear-gradient(180deg, rgba(8,8,8,0.92) 0%, rgba(10,10,10,0.86) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(204,0,0,0.2)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.6)"
          : "0 8px 32px rgba(0,0,0,0.4)",
        transition: "background 280ms ease, border-color 280ms ease, box-shadow 280ms ease",
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
            // Toolbar height shrinks slightly once scrolled
            minHeight: scrolled
              ? { xs: 76, sm: 82, md: 88, lg: 94 }
              : { xs: 92, sm: 100, md: 110, lg: 118 },
            transition: "min-height 280ms ease",
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
                  border: "1px solid rgba(255,255,255,0.14)",
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: "2px",
                  "&:hover": {
                    bgcolor: "rgba(204,0,0,0.14)",
                    borderColor: "rgba(204,0,0,0.4)",
                  },
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
                component="a"
                href={BUSINESS.phoneTel}
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  ...primaryCtaSx,
                  ml: 2,
                  px: 2.5,
                  py: 1.1,
                  fontSize: 13,
                  flexShrink: 0,
                }}
              >
                CALL NOW
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
