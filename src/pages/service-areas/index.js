// src/pages/service-areas/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Stack,
  useMediaQuery,
  Link as MuiLink,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialCardSx,
  industrialColors,
  primaryCtaSx,
  secondaryCtaSx,
  sectionBase,
} from "../../utils/visualStyles";
import backHoe from "../../image/backHoe.webp";
import map from "../../image/map.webp";

/* --------------------------------- Layout -------------------------------- */
const FullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const Hero = styled(Box)(({ theme }) => ({
  ...FullBleed,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "74vh",
  color: "#fff",
  position: "relative",
  textAlign: "left",
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#050A0F",
  [theme.breakpoints.down("lg")]: { minHeight: "70vh" },
  [theme.breakpoints.down("md")]: { minHeight: "66svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "62svh" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.32,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "54px 54px",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.42), transparent 86%)",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "6%",
    right: "6%",
    bottom: 0,
    height: 1,
    pointerEvents: "none",
    background:
      "linear-gradient(90deg, transparent, rgba(190,202,212,0.55), rgba(215,25,32,0.72), rgba(190,202,212,0.55), transparent)",
    zIndex: 3,
  },
}));

const Section = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0F2331",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0B1B27",
}));

const industrialSectionSx = {
  position: "relative",
  background:
    "radial-gradient(circle at 10% 12%, rgba(215,25,32,0.105), transparent 28%), radial-gradient(circle at 92% 18%, rgba(110,193,255,0.07), transparent 26%), linear-gradient(180deg, #050A0F 0%, #0A1721 48%, #06111A 100%)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.28,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.86) 18%, rgba(0,0,0,0.48) 78%, transparent 100%)",
  },
};

const industrialAltSectionSx = {
  ...industrialSectionSx,
  background:
    "radial-gradient(circle at 86% 16%, rgba(110,193,255,0.065), transparent 28%), radial-gradient(circle at 12% 84%, rgba(215,25,32,0.075), transparent 26%), linear-gradient(180deg, #07131D 0%, #091925 50%, #050D14 100%)",
};

const innerContainerSx = {
  ...containerSx,
  position: "relative",
  zIndex: 1,
};

const contentWidthSx = { maxWidth: 1120, mx: "auto" };

const premiumCardSx = {
  ...industrialCardSx,
  position: "relative",
  height: "100%",
  overflow: "hidden",
  p: { xs: 2.5, md: 3 },
  bgcolor: "rgba(8,19,28,0.92)",
  backgroundImage:
    "linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.018) 52%, rgba(215,25,32,0.022))",
  border: `1px solid ${industrialColors.steel}`,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 3,
    background:
      "linear-gradient(90deg, rgba(215,25,32,0.92), rgba(190,202,212,0.22), transparent)",
    pointerEvents: "none",
  },
};

const markerSx = {
  width: 44,
  height: 44,
  borderRadius: 2,
  display: "grid",
  placeItems: "center",
  color: "#fff",
  bgcolor: "rgba(215,25,32,0.16)",
  border: "1px solid rgba(215,25,32,0.38)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 22px rgba(215,25,32,0.16)",
};

const cardTitleSx = {
  color: industrialColors.text,
  fontWeight: 950,
  fontSize: { xs: 18, md: 20 },
  lineHeight: 1.16,
  letterSpacing: "-0.02em",
};

const cardBodySx = {
  color: industrialColors.mutedText,
  lineHeight: 1.72,
  fontSize: { xs: 14.5, md: 15.5 },
};

const SectionTitle = ({ children, eyebrow, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    {eyebrow && (
      <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>{eyebrow}</Typography>
    )}
    <Typography component="h2" variant="h3" sx={headlineSx}>
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          ...bodyCopySx,
          mt: 1.25,
          maxWidth: 880,
          mx: "auto",
          textWrap: "balance",
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* ----------------------------- Helpers ----------------------------------- */
const slugFromCity = (city) => {
  if (city === "The Woodlands") return "woodlands";
  return city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const buildAreaPath = (city) => {
  const slug = slugFromCity(city);
  return `/service-areas/${slug}-tx-hydraulic-cylinder-repair`;
};

const groupByFirstLetter = (items) => {
  return items.reduce((acc, city) => {
    const letter = city[0]?.toUpperCase() || "#";
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(city);
    return acc;
  }, {});
};

/* ---------------------------- Data --------------------------------------- */
const CORE_CITIES = [
  "Montgomery",
  "Magnolia",
  "Conroe",
  "The Woodlands",
  "Willis",
  "Tomball",
  "Spring",
  "New Caney",
  "Splendora",
  "Humble",
  "Atascocita",
];

const PRIMARY_CITY_CARDS = [
  {
    city: "Magnolia",
    text: "Hydraulic cylinder repair, cylinder repacking, pickup, and delivery support for Magnolia contractors, fleets, and job sites.",
  },
  {
    city: "Montgomery",
    text: "Local hydraulic repair coordination for Montgomery equipment owners needing dependable cylinder turnaround and pressure-tested repairs.",
  },
  {
    city: "Conroe",
    text: "Cylinder repair and repacking for Conroe heavy equipment, trash trucks, dump trailers, and commercial fleet operations.",
  },
  {
    city: "The Woodlands",
    text: "Fleet and job-site hydraulic support near The Woodlands with service options for commercial equipment and cylinder leaks.",
  },
  {
    city: "Tomball",
    text: "Hydraulic cylinder repair support for Tomball contractors, construction equipment, agriculture equipment, and work trucks.",
  },
  {
    city: "North Houston",
    text: "North Houston service-area support for heavy equipment cylinders, pickup/delivery planning, and fast repair communication.",
  },
];

const EXTENDED_CITIES = [
  "Millican",
  "Navasota",
  "Washington",
  "Anderson",
  "Apolonia",
  "Richards",
  "Whitehall",
  "Fields Store",
  "Hempstead",
  "Prairie View",
  "Pine Island",
  "Buckhorn",
  "Waller",
  "Plantersville",
  "Pinebrook",
  "Todd Mission",
  "Fetzer",
  "Bobville",
  "Karen",
  "Pinehurst",
  "Stagecoach",
  "Rose Hill",
  "Kohrville",
  "Porter Heights",
  "Grangerland",
  "Klein",
  "Westfield",
  "Panorama Village",
  "Ada",
  "Waverly",
  "New Waverly",
  "Patton Village",
  "Roman Forest",
  "Plum Grove",
  "Cleveland",
  "North Cleveland",
  "Westcott",
  "Eastgate",
  "Huffman",
];

const FOCUS_PARTS = [
  "Hydraulic cylinder repair & repacking",
  "Telescopic cylinder repair",
  "Trash truck hydraulic cylinders",
  "Construction & farm equipment cylinders",
  "On-site pull/install support (when needed)",
  "Pickup and delivery options",
];

const combinedFocus = FOCUS_PARTS.join(" • ");

const supportCards = [
  {
    Icon: LocalShippingIcon,
    title: "Pickup & Delivery Planning",
    text: "Coordinate cylinder pickup and delivery across Montgomery County and North Houston when downtime matters.",
  },
  {
    Icon: VerifiedIcon,
    title: "Pressure-Tested Repairs",
    text: "Repaired cylinders are checked for leak control and dependable operation before return to service.",
  },
  {
    Icon: EngineeringIcon,
    title: "Built for Fleets",
    text: "Support for trash trucks, heavy equipment, construction machinery, agriculture equipment, and commercial fleets.",
  },
];

const commercialSupport = [
  "Fleets",
  "Contractors",
  "Trash trucks",
  "Construction equipment",
  "Agricultural equipment",
  "Industrial machinery",
];

/* --------------------------- JSON-LD Schema ------------------------------ */
const canonicalUrl = "https://www.vetechhydraulics.com/service-areas";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${canonicalUrl}#service`,
  name: "Hydraulic Cylinder Repair & Repacking",
  serviceType:
    "Hydraulic cylinder repair, repacking, rod polishing, welding, pressure testing",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.vetechhydraulics.com/#business",
    name: "Vetech Hydraulics",
    url: "https://www.vetechhydraulics.com",
    telephone: "+1-936-249-6042",
    areaServed: CORE_CITIES.map((c) => ({
      "@type": "City",
      name: `${c}, TX`,
    })),
  },
  areaServed: [...CORE_CITIES, ...EXTENDED_CITIES].map((c) => `${c}, TX`),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.vetechhydraulics.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: canonicalUrl,
    },
  ],
};

/* --------------------------------- Page ---------------------------------- */
export default function ServiceAreasOverview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [query, setQuery] = React.useState("");

  const allCities = React.useMemo(
    () => [...CORE_CITIES, ...EXTENDED_CITIES],
    []
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCities;
    return allCities.filter((c) => c.toLowerCase().includes(q));
  }, [query, allCities]);

  const grouped = React.useMemo(() => {
    const sorted = [...filtered].sort((a, b) => a.localeCompare(b));
    return groupByFirstLetter(sorted);
  }, [filtered]);

  return (
    <>
      <Head>
        <title>
          Service Areas | Hydraulic Cylinder Repair | Vetech Hydraulics
        </title>
        <meta
          name="description"
          content="Hydraulic cylinder repair service areas across Montgomery, Magnolia, Conroe, Willis, The Woodlands, and the greater North Houston region. Pickup/delivery options and fast turnarounds."
        />
        <link rel="canonical" href={canonicalUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* =============================== HERO =============================== */}
      <Hero>
        <Image
          src={backHoe}
          alt="Hydraulic equipment operating in North Houston"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 16% 30%, rgba(215,25,32,0.24), transparent 30%), radial-gradient(circle at 88% 18%, rgba(110,193,255,0.1), transparent 28%), linear-gradient(90deg, rgba(2,6,10,0.94) 0%, rgba(5,14,22,0.82) 48%, rgba(2,6,10,0.66) 100%), linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.28))",
          }}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            ...containerSx,
            py: { xs: 7, md: 10 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box sx={contentWidthSx}>
            <Box sx={{ maxWidth: 940 }}>
              <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                NORTH HOUSTON SERVICE AREAS
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: industrialColors.text,
                  fontWeight: 950,
                  fontSize: {
                    xs: "clamp(34px, 10vw, 54px)",
                    md: "clamp(50px, 5.4vw, 76px)",
                  },
                  lineHeight: 0.98,
                  letterSpacing: "-0.06em",
                  textWrap: "balance",
                }}
              >
                Hydraulic Cylinder Repair Across Montgomery County and North
                Houston
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  ...bodyCopySx,
                  maxWidth: 820,
                  fontSize: { xs: 15.5, md: 18 },
                  color: "rgba(231,238,244,0.84)",
                }}
              >
                Hydraulic cylinder repair, cylinder repacking, pickup and
                delivery, and job-site support for heavy equipment, fleets, and
                work sites across Montgomery, Conroe, Magnolia, The Woodlands,
                Tomball, and North Houston.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: { xs: 3, md: 4 } }}
              >
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  sx={primaryCtaSx}
                >
                  Request Service
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  View Services
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Hero>

      {/* ========================= PRIMARY SERVICE AREAS ======================= */}
      <Section sx={industrialSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <SectionTitle
              eyebrow="PRIMARY SERVICE CORRIDOR"
              subtitle="Premium hydraulic cylinder repair support for the cities where we most commonly coordinate pickup, delivery, and fleet-service logistics."
            >
              Core Service Areas
            </SectionTitle>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {PRIMARY_CITY_CARDS.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.city}>
                  <Box sx={premiumCardSx}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box sx={markerSx}>
                        <PlaceIcon fontSize="small" />
                      </Box>
                      <Typography sx={cardTitleSx}>{item.city}, TX</Typography>
                    </Stack>
                    <Typography sx={{ ...cardBodySx, mt: 1.5 }}>
                      {item.text}
                    </Typography>
                    <Button
                      component={Link}
                      href={buildAreaPath(item.city)}
                      variant="outlined"
                      sx={{ ...secondaryCtaSx, mt: 2.25, width: "100%" }}
                    >
                      View {item.city} Page
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* ========================= MAP / SERVICE RADIUS ======================= */}
      <AltSection sx={industrialAltSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
              <Grid item xs={12} md={5.2}>
                <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                  PICKUP, DELIVERY & JOB-SITE SUPPORT
                </Typography>
                <Typography component="h2" variant="h3" sx={headlineSx}>
                  Service Radius Built Around Uptime
                </Typography>
                <Typography sx={{ ...bodyCopySx, mt: 1.5 }}>
                  We support hydraulic cylinder repair and repacking needs
                  across the Lake Conroe, Montgomery County, and North Houston
                  region with pickup/delivery planning and job-site coordination
                  when equipment cannot sit idle.
                </Typography>
                <Box sx={{ ...premiumCardSx, mt: 3 }}>
                  <Typography sx={{ ...eyebrowSx, mb: 1 }}>
                    COMMON SERVICE SUPPORT
                  </Typography>
                  <Typography sx={cardBodySx}>{combinedFocus}</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6.8}>
                <Box sx={{ ...premiumCardSx, p: 0 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      pb: "62%",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(190,202,212,0.18)",
                    }}
                  >
                    <Image
                      src={map}
                      alt="Vetech Hydraulics North Houston and Montgomery County service area map"
                      fill
                      sizes="(max-width: 900px) 100vw, 620px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Typography sx={cardTitleSx}>North Houston Coverage</Typography>
                    <Typography sx={{ ...cardBodySx, mt: 1 }}>
                      Typical service radius for pickup, delivery, and on-site
                      support. If you are near this corridor, there is a good
                      chance we can help plan the fastest path back to service.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AltSection>

      {/* ========================= COMMERCIAL SUPPORT ======================= */}
      <Section sx={industrialSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <SectionTitle
              eyebrow="COMMERCIAL HYDRAULIC SUPPORT"
              subtitle="Service-area coverage is built around the equipment operators, fleets, and businesses that cannot afford repeat downtime."
            >
              Built for Fleets, Contractors, and Heavy Equipment
            </SectionTitle>

            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 3, md: 4 } }}>
              {supportCards.map(({ Icon, title, text }) => (
                <Grid item xs={12} md={4} key={title}>
                  <Box sx={premiumCardSx}>
                    <Box sx={markerSx}>
                      <Icon fontSize="small" />
                    </Box>
                    <Typography sx={{ ...cardTitleSx, mt: 2 }}>
                      {title}
                    </Typography>
                    <Typography sx={{ ...cardBodySx, mt: 1 }}>{text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={{ xs: 1.5, sm: 2 }}>
              {commercialSupport.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item}>
                  <Box
                    sx={{
                      ...premiumCardSx,
                      p: { xs: 2, md: 2.25 },
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: industrialColors.hydraulicRed,
                        boxShadow: "0 0 18px rgba(215,25,32,0.46)",
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* ========================= ALL CITIES (SEARCH + GROUPED) ======================= */}
      <AltSection sx={industrialAltSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <SectionTitle
              eyebrow="EXTENDED SERVICE AREAS"
              subtitle="Search your city and jump to the local hydraulic cylinder repair page."
            >
              All Service Areas
            </SectionTitle>

            <Box sx={{ maxWidth: 620, mx: "auto", mb: { xs: 3, md: 4 } }}>
              <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city (example: Magnolia, Humble, Navasota)"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "rgba(247,250,252,0.72)" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    bgcolor: "rgba(3,7,11,0.44)",
                    borderRadius: 2.5,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(190,202,212,0.24)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(190,202,212,0.44)",
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${industrialColors.hydraulicRed} !important`,
                    borderWidth: "1px !important",
                  },
                  "& input::placeholder": {
                    color: "rgba(231,238,244,0.62)",
                    opacity: 1,
                  },
                }}
              />

              <Typography
                sx={{
                  mt: 1,
                  color: "rgba(231,238,244,0.72)",
                  fontSize: 13.5,
                  textAlign: "center",
                }}
              >
                Showing {filtered.length} location
                {filtered.length === 1 ? "" : "s"}
              </Typography>
            </Box>

            {filtered.length === 0 ? (
              <Box sx={{ ...premiumCardSx, textAlign: "center" }}>
                <Typography sx={cardTitleSx}>No matches found.</Typography>
                <Typography sx={{ ...cardBodySx, mt: 1 }}>
                  Send us your location and a photo of the cylinder — we’ll
                  confirm coverage, pickup/delivery options, and the fastest
                  path forward.
                </Typography>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  sx={{ ...primaryCtaSx, mt: 2.5 }}
                >
                  Request Service
                </Button>
              </Box>
            ) : (
              <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {Object.keys(grouped)
                  .sort()
                  .map((letter) => (
                    <Grid item xs={12} key={letter}>
                      <Box sx={{ ...premiumCardSx, p: { xs: 2, sm: 2.5 } }}>
                        <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                          {letter}
                        </Typography>

                        <Grid container spacing={1.25}>
                          {grouped[letter].map((city) => (
                            <Grid item xs={12} sm={6} md={4} key={city}>
                              <Button
                                component={Link}
                                href={buildAreaPath(city)}
                                variant="text"
                                sx={{
                                  width: "100%",
                                  justifyContent: "space-between",
                                  textTransform: "none",
                                  fontWeight: 850,
                                  color: industrialColors.text,
                                  bgcolor: "rgba(3,7,11,0.34)",
                                  border: "1px solid rgba(190,202,212,0.16)",
                                  borderRadius: 2,
                                  px: 1.5,
                                  py: 1.1,
                                  minWidth: 0,
                                  "&:hover": {
                                    color: "#fff",
                                    bgcolor: "rgba(215,25,32,0.11)",
                                    borderColor: "rgba(215,25,32,0.36)",
                                  },
                                }}
                              >
                                <span>{city}, TX</span>
                                <span style={{ opacity: 0.75 }}>→</span>
                              </Button>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            )}
          </Box>
        </Container>
      </AltSection>

      {/* ============================= FINAL CTA ============================ */}
      <Section sx={industrialSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <Box
              sx={{
                ...premiumCardSx,
                p: { xs: 3, md: 5 },
                textAlign: "center",
                backgroundImage:
                  "radial-gradient(circle at 50% 0%, rgba(215,25,32,0.16), transparent 34%), linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.018))",
              }}
            >
              <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                LOCAL HYDRAULIC SUPPORT
              </Typography>
              <Typography component="h2" variant="h3" sx={headlineSx}>
                Need Hydraulic Cylinder Repair Near You?
              </Typography>
              <Typography
                sx={{
                  ...bodyCopySx,
                  mt: 1.5,
                  mx: "auto",
                  maxWidth: 760,
                }}
              >
                Send your city, job-site location, and a quick cylinder photo —
                we’ll confirm coverage, pickup/delivery options, and the fastest
                path to get your equipment back in service.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  sx={primaryCtaSx}
                >
                  Request Service
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* ============================= MOBILE STICKY CTA ============================ */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            py: 1.25,
            px: 2,
            bgcolor: "rgba(5,10,15,0.96)",
            borderTop: "1px solid rgba(190,202,212,0.2)",
            boxShadow: "0 -14px 34px rgba(0,0,0,0.38)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 900,
              letterSpacing: 0.2,
            }}
          >
            <PhoneIcon sx={{ color: industrialColors.hydraulicRed }} />

            <MuiLink
              href="tel:+19362496042"
              sx={{
                color: industrialColors.hydraulicRed,
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              (936) 249-6042
            </MuiLink>
          </Typography>
        </Box>
      )}
    </>
  );
}

export const meta = {
  title: "Service Areas | Hydraulic Cylinder Repair | Vetech Hydraulics",
  description:
    "Hydraulic cylinder repair service areas across Montgomery, Magnolia, Conroe, Willis, The Woodlands, and the greater North Houston region. Pickup/delivery options and fast turnarounds.",
};
