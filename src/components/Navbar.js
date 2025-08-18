// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Vetech Hydraulics
//         </Typography>
//         <Button color="inherit" component={Link} href="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} href="/services">
//           Services
//         </Button>
//         <Button color="inherit" component={Link} href="/about">
//           About
//         </Button>
//         <Button color="inherit" component={Link} href="/contact">
//           Contact
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// import React, { useState, useMemo } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Container,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   Box,
//   Link as MuiLink,
//   Divider,
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import PhoneIcon from "@mui/icons-material/Phone";
// import logo from "../img/logo/logo.png";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const MyNavBar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();

//   // Custom media query to switch at 1100px
//   const isMobile = useMediaQuery("(max-width: 1100px)");

//   const location = useLocation();
//   const phoneNumber = "8329017158";

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     )
//       return;
//     setDrawerOpen(open);
//   };

//   const navLinks = [
//     { text: "Services", href: "/services" },
//     { text: "About Us", href: "/about" },
//     { text: "Contact Us", href: "/contact" },
//   ];

//   const list = useMemo(
//     () => (
//       <Box
//         role="presentation"
//         onClick={toggleDrawer(false)}
//         onKeyDown={toggleDrawer(false)}
//         sx={{ width: 250, backgroundColor: theme.palette.primary.main }}
//       >
//         <List>
//           {location.pathname !== "/" && (
//             <ListItem
//               button
//               component="a"
//               href="/"
//               sx={{ color: theme.palette.secondary.main }}
//             >
//               <ListItemText primary="HOME" />
//             </ListItem>
//           )}
//           {navLinks.map(({ text, href }) => (
//             <ListItem
//               button
//               key={text}
//               component="a"
//               href={href}
//               sx={{ color: theme.palette.secondary.main }}
//             >
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <Box sx={{ padding: 2 }}>
//           <Typography
//             variant="h6"
//             sx={{ display: "flex", alignItems: "center" }}
//           >
//             <PhoneIcon sx={{ marginRight: 1 }} />
//             <MuiLink
//               href={`tel:${phoneNumber}`}
//               sx={{
//                 color: theme.palette.secondary.main,
//                 textDecoration: "none",
//               }}
//             >
//               (832) - 901 - 7158
//             </MuiLink>
//           </Typography>
//         </Box>
//       </Box>
//     ),
//     [location.pathname, theme.palette.secondary.main]
//   );

//   const desktopLinks = useMemo(
//     () => (
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginLeft: "auto",
//           gap: theme.spacing(3),
//           flexWrap: "nowrap",
//           whiteSpace: "nowrap",
//           overflowX: "hidden",
//         }}
//       >
//         {location.pathname !== "/" && (
//           <MuiLink
//             href="/"
//             sx={{
//               color: "white",
//               textDecoration: "none",
//               "&:hover": { color: theme.palette.secondary.main },
//               whiteSpace: "nowrap",
//             }}
//           >
//             Home
//           </MuiLink>
//         )}
//         {navLinks.map(({ text, href }) => (
//           <MuiLink
//             key={text}
//             href={href}
//             sx={{
//               color: location.pathname.includes(href.slice(1))
//                 ? theme.palette.secondary.main
//                 : "white",
//               textDecoration: "none",
//               "&:hover": { color: theme.palette.secondary.main },
//               whiteSpace: "nowrap",
//             }}
//           >
//             {text}
//           </MuiLink>
//         ))}
//         <Box
//           component="a"
//           href={`tel:${phoneNumber}`}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1,
//             color: theme.palette.secondary.main,
//             textDecoration: "none",
//             whiteSpace: "nowrap",
//           }}
//         >
//           <PhoneIcon />
//           (832) - 901 - 7158
//         </Box>
//       </Box>
//     ),
//     [location.pathname, theme.palette.secondary.main]
//   );

//   return (
//     <AppBar
//       position="fixed"
//       sx={{ backgroundColor: theme.palette.primaryDarker.main, paddingY: 1 }}
//     >
//       <Container maxWidth="lg">
//         <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
//           <Box
//             component="a"
//             href="/"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               marginRight: theme.spacing(2),
//             }}
//           >
//             <Box
//               component="img"
//               src={logo}
//               alt="vetech hydraulics"
//               sx={{ width: isMobile ? 140 : 180, cursor: "pointer" }}
//             />
//           </Box>
//           {isMobile ? (
//             <>
//               <IconButton
//                 onClick={toggleDrawer(true)}
//                 sx={{ marginLeft: "auto" }}
//               >
//                 <MenuIcon sx={{ color: theme.palette.secondary.main }} />
//               </IconButton>
//               <Drawer
//                 anchor="right"
//                 open={drawerOpen}
//                 onClose={toggleDrawer(false)}
//                 sx={{
//                   "& .MuiDrawer-paper": {
//                     backgroundColor: theme.palette.primary.main,
//                     width: 250,
//                   },
//                 }}
//               >
//                 {list}
//               </Drawer>
//             </>
//           ) : (
//             desktopLinks
//           )}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default MyNavBar;

import React, { useState, useMemo } from "react";
import NextLink from "next/link";
import Image from "next/image";

import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
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

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1100px)");

  const phoneNumber = "8329017158";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Services Area", href: "/services" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
  ];

  const list = useMemo(
    () => (
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        sx={{
          width: 250,
          backgroundColor: theme.palette.primary.main,
          height: "100%",
        }}
      >
        <List>
          {navLinks.map(({ text, href }) => (
            <ListItem
              button
              key={text}
              component={NextLink}
              href={href}
              sx={{ color: theme.palette.secondary.main }}
            >
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.secondary.main,
            }}
          >
            <PhoneIcon sx={{ marginRight: 1 }} />
            <MuiLink
              href={`tel:${phoneNumber}`}
              sx={{
                color: theme.palette.secondary.main,
                textDecoration: "none",
              }}
            >
              (832) - 901 - 7158
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    ),
    [theme.palette.secondary.main]
  );

  const desktopLinks = useMemo(
    () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginLeft: "auto",
          gap: theme.spacing(3),
          whiteSpace: "nowrap",
        }}
      >
        {navLinks.map(({ text, href }) => (
          <MuiLink
            key={text}
            component={NextLink}
            href={href}
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: theme.palette.secondary.main },
              fontWeight: 500,
            }}
          >
            {text}
          </MuiLink>
        ))}
        <MuiLink
          href={`tel:${phoneNumber}`}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: theme.palette.secondary.main,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          <PhoneIcon />
          (832) - 901 - 7158
        </MuiLink>
      </Box>
    ),
    [theme.palette.secondary.main]
  );

  return (
    <AppBar
      position="fixed"
      // /blackedOutFlag.png
      sx={{
        backgroundColor: "#000000", // darkest black
        paddingY: 1,
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
                src="/logo.png"
                alt="Vetech Hydraulics Logo"
                width={isMobile ? 228 : 688}
                height={isMobile ? 145 : 228}
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
                sx={{ marginLeft: "auto" }}
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
                    backgroundColor: "#000000", // also pure black for mobile drawer
                    width: 250,
                  },
                }}
              >
                {list}
              </Drawer>
            </>
          ) : (
            desktopLinks
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
