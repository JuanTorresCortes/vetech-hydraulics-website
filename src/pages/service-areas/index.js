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
  Card,
  CardContent,
  Button,
  Divider,
  TextField,
  InputAdornment,
  Chip,
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
import ConsultationButton from "../../components/ConsultationButton";
import backHoe from "../../image/backHoe.webp";
import { red } from "@mui/material/colors";
import SdvobBadge from "@/components/SdvobBadge";

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
  alignItems: "flex-end",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: 0,
  overflow: "hidden",

  // Desktop / large screens
  minHeight: "92vh",

  // Large laptops
  [theme.breakpoints.down("xl")]: {
    minHeight: "90vh",
  },

  // Laptops / landscape tablets
  [theme.breakpoints.down("lg")]: {
    minHeight: "85vh",
  },

  // Tablets
  [theme.breakpoints.down("md")]: {
    minHeight: "75svh",
  },

  // Phones
  [theme.breakpoints.down("sm")]: {
    minHeight: "65svh",
  },

  // Very small phones (old iPhones / SE)
  "@media (max-width: 321px)": {
    minHeight: "120svh",
  },
}));

const Section = styled("section")(({ theme }) => ({
  ...FullBleed,
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0F2331",
  overflow: "hidden",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...FullBleed,
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0B1B27",
  overflow: "hidden",
}));

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: 5 }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 900,
        fontSize: {
          xs: "clamp(22px, 6.2vw, 34px)",
          md: "clamp(28px, 3vw, 42px)",
        },
        textWrap: "balance",
        lineHeight: 1.1,
      }}
    >
      {children}
    </Typography>

    {subtitle && (
      <Typography
        sx={{
          color: "rgba(255,255,255,0.78)",
          mt: 1,
          maxWidth: 880,
          mx: "auto",
          textWrap: "balance",
          lineHeight: 1.7,
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
              "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.25) 85%)",
          }}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              maxWidth: 1100,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // 🔑 centers EVERYTHING
              textAlign: "center", // 🔑 fixes perceived offset
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "clamp(26px, 7vw, 34px)", md: 48 },
                lineHeight: 1.05,
                textWrap: "balance",
              }}
            >
              Hydraulic Cylinder Repair Service Areas
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: "rgba(255,255,255,0.82)",
                maxWidth: 820,
                fontSize: { xs: 14.5, sm: 16 },
                lineHeight: 1.75,
                textAlign: "center",
              }}
            >
              Coverage across Montgomery County and the North Houston corridor —
              with pickup, delivery, and fast turnarounds for trash trucks and
              heavy equipment.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              alignItems="center"
              justifyContent="center" // 🔑
              sx={{ mt: 2.25 }}
            >
              <Chip
                icon={<LocalShippingIcon />}
                label="Pickup & delivery options"
                sx={{
                  bgcolor: "rgba(0,0,0,0.35)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
              <Chip
                icon={<VerifiedIcon />}
                label="Leak-tested before delivery"
                sx={{
                  bgcolor: "rgba(0,0,0,0.35)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
              <Chip
                icon={<PlaceIcon />}
                label="North Houston + Montgomery County"
                sx={{
                  bgcolor: "rgba(0,0,0,0.35)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
            </Stack>

            <Box sx={{ mt: 2.5 }}>
              <ConsultationButton />
            </Box>
          </Box>
        </Container>
      </Hero>

      {/* =============================== QUICK VALUE =============================== */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Get a fast answer on coverage, pickup options, and what to expect for your cylinder type.">
              Find your city, get a quicker turnaround
            </SectionTitle>

            <Grid container spacing={3}>
              {[
                {
                  title: "Accurate quotes",
                  text: "City-specific expectations help us quote quicker and tighter — seal kits, rod polish, repairs, and logistics.",
                },
                {
                  title: "Less downtime",
                  text: "Pickup/drop-off coordination and clear testing steps means fewer delays and fewer repeat installs.",
                },
                {
                  title: "Built for fleets",
                  text: "We routinely support trash trucks, heavy equipment, and work trucks operating under real deadlines.",
                },
              ].map((item, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      bgcolor: "#102A3A",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <CardContent sx={{ color: "#fff" }}>
                      <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Divider
              sx={{
                my: { xs: 4, md: 5 },
                borderColor: "rgba(255,255,255,0.12)",
              }}
            />

            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 3,
                bgcolor: "#0E2635",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Typography sx={{ color: "#6EC1FF", fontWeight: 900, mb: 1 }}>
                Work we commonly support
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.75 }}
              >
                {combinedFocus}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* ========================= CORE CORRIDOR ======================= */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Most-requested cities with the fastest logistics.">
              Core service corridor
            </SectionTitle>

            <Grid container spacing={3}>
              {CORE_CITIES.map((city) => (
                <Grid item xs={12} sm={6} md={4} key={city}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      bgcolor: "#102A3A",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ color: "#fff", flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        {city}, TX
                      </Typography>
                      <Typography
                        sx={{ color: "rgba(255,255,255,0.82)", mt: 1 }}
                      >
                        Pickup/delivery options, expected turnaround, and
                        cylinder types we commonly handle in {city}.
                      </Typography>

                      <Divider
                        sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
                      />

                      <Button
                        component={Link}
                        href={buildAreaPath(city)}
                        variant="outlined"
                        sx={{
                          color: "#6EC1FF",
                          borderColor: "rgba(110,193,255,0.4)",
                          textTransform: "none",
                          fontWeight: 800,
                        }}
                      >
                        View {city} page
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </AltSection>

      {/* ========================= ALL CITIES (SEARCH + GROUPED) ======================= */}
      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 1100, mx: "auto" }}>
            <SectionTitle subtitle="Search your city and jump to the local page.">
              All service areas
            </SectionTitle>

            <Box sx={{ maxWidth: 520, mx: "auto", mb: 4 }}>
              <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city (example: Magnolia, Humble, Navasota)"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.18)",
                    borderRadius: 2,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.18)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(110,193,255,0.45)",
                  },
                }}
              />

              <Typography
                sx={{
                  mt: 1,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 13.5,
                  textAlign: "center",
                }}
              >
                Showing {filtered.length} location
                {filtered.length === 1 ? "" : "s"}
              </Typography>
            </Box>

            {filtered.length === 0 ? (
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#102A3A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                  No matches found.
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.82)", mt: 1 }}>
                  Text us your location and a photo of the cylinder — we’ll
                  confirm coverage and options.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <ConsultationButton />
                </Box>
              </Box>
            ) : (
              <Grid container spacing={3}>
                {Object.keys(grouped)
                  .sort()
                  .map((letter) => (
                    <Grid item xs={12} key={letter}>
                      <Box
                        sx={{
                          p: { xs: 2, sm: 2.5 },
                          borderRadius: 3,
                          bgcolor: "#102A3A",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6EC1FF",
                            fontWeight: 900,
                            mb: 1,
                            fontSize: 16,
                          }}
                        >
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
                                  fontWeight: 800,
                                  color: "#fff",
                                  bgcolor: "rgba(0,0,0,0.18)",
                                  border: "1px solid rgba(255,255,255,0.10)",
                                  borderRadius: 2,
                                  px: 1.5,
                                  py: 1.1,
                                  "&:hover": {
                                    bgcolor: "rgba(110,193,255,0.08)",
                                    borderColor: "rgba(110,193,255,0.30)",
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
      </Section>

      {/* ============================= FINAL CTA ============================ */}
      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}
        >
          <Box sx={{ maxWidth: 980, mx: "auto" }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 900,
                mb: 1,
                fontSize: { xs: 24, sm: 28, md: 34 },
                textWrap: "balance",
              }}
            >
              Not sure if we cover your location?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
              Send your city and a quick cylinder photo — we’ll confirm
              coverage, pickup/delivery options, and the fastest path to get you
              back in service.
            </Typography>
            <ConsultationButton />
          </Box>
        </Container>
      </AltSection>

      {/* ============================= MOBILE STICKY CTA (optional) ============================ */}
      {isMobile && (
        // Mobile Sticky Call CTA
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            display: { xs: "flex", md: "none" }, // ✅ mobile only
            justifyContent: "center",
            alignItems: "center",
            py: 1.25,
            px: 2,
            bgcolor: "#0F2331",
            borderTop: "1px solid rgba(255,255,255,0.12)",
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
            <PhoneIcon sx={{ color: red[500] }} />

            <MuiLink
              href="tel:+19362496042"
              sx={{
                color: red[500],
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
