// src/pages/service-areas/index.js
// Service areas index: 16 hardcoded core cities — no generated pages, no extended directory.
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import PhoneIcon from "@mui/icons-material/Phone";
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
import { BUSINESS } from "../../config/business";
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
  backgroundColor: "#080808",
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
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), rgba(204,0,0,0.72), rgba(255,255,255,0.55), transparent)",
    zIndex: 3,
  },
}));

const Section = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0a0a0a",
}));

const AltSection = styled("section")(({ theme }) => ({
  ...sectionBase(theme),
  backgroundColor: "#0e0e0e",
}));

const industrialSectionSx = {
  position: "relative",
  background:
    "radial-gradient(circle at 10% 12%, rgba(204,0,0,0.105), transparent 28%), radial-gradient(circle at 92% 18%,  transparent 26%), linear-gradient(180deg, #080808 0%, #0e0e0e 48%, #080808 100%)",
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
    "radial-gradient(circle at 86% 16%,  transparent 28%), radial-gradient(circle at 12% 84%, rgba(204,0,0,0.075), transparent 26%), linear-gradient(180deg, #080808 0%, #091925 50%, #080808 100%)",
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
  bgcolor: "rgba(14,14,18,0.92)",
  backgroundImage:
    "linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.018) 52%, rgba(204,0,0,0.022))",
  border: `1px solid ${industrialColors.steel}`,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 3,
    background:
      "linear-gradient(90deg, rgba(204,0,0,0.92), rgba(255,255,255,0.22), transparent)",
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
  bgcolor: "rgba(204,0,0,0.16)",
  border: "1px solid rgba(204,0,0,0.38)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 22px rgba(204,0,0,0.16)",
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

/* ---------------------------- Data --------------------------------------- */
const CITY_CARDS = [
  {
    city: "Magnolia",
    slug: "magnolia",
    text: "Our home base. Hydraulic cylinder repair, repacking, pickup, and delivery for Magnolia contractors, fleets, and job sites.",
  },
  {
    city: "Montgomery",
    slug: "montgomery",
    text: "Local hydraulic repair for Montgomery equipment owners needing dependable cylinder turnaround and pressure-tested rebuilds.",
  },
  {
    city: "Conroe",
    slug: "conroe",
    text: "Cylinder repair and repacking for Conroe heavy equipment, trash trucks, dump trailers, and commercial fleet operations.",
  },
  {
    city: "The Woodlands",
    slug: "woodlands",
    text: "Fleet and job-site hydraulic support near The Woodlands for commercial equipment, construction, and cylinder leaks.",
  },
  {
    city: "Tomball",
    slug: "tomball",
    text: "Hydraulic cylinder repair for Tomball contractors, construction equipment, agriculture equipment, and work trucks.",
  },
  {
    city: "Spring",
    slug: "spring",
    text: "Fast cylinder repair for Spring-area construction crews, fleets, and equipment operators along the I-45 and SH-99 corridors.",
  },
  {
    city: "Houston",
    slug: "houston",
    text: "Serving the greater Houston metro — construction fleets, refuse equipment, dump trucks, and industrial machinery.",
  },
  {
    city: "Humble",
    slug: "humble",
    text: "Hydraulic cylinder repair for Humble and north Harris County construction crews, commercial fleets, and utility equipment.",
  },
  {
    city: "Hempstead",
    slug: "hempstead",
    text: "Serving Hempstead and Waller County with cylinder repair for agriculture, ranching, construction, and county equipment.",
  },
  {
    city: "Waller",
    slug: "waller",
    text: "Hydraulic cylinder repair for Waller-area row crop operations, construction equipment, and dump trucks along US-290.",
  },
  {
    city: "Navasota",
    slug: "navasota",
    text: "Serving Navasota and Grimes County — timber, forestry, agriculture, and construction cylinder repair.",
  },
  {
    city: "Cleveland",
    slug: "cleveland",
    text: "Hydraulic repair for Cleveland-area oil field service equipment, timber operations, and construction in Liberty County.",
  },
  {
    city: "New Caney",
    slug: "new-caney",
    text: "Fast cylinder repair for New Caney's growing construction corridor, land clearing equipment, and ag operations.",
  },
  {
    city: "Willis",
    slug: "willis",
    text: "Serving Willis and north Montgomery County with cylinder repair for agriculture, construction, and Lake Conroe area equipment.",
  },
  {
    city: "Huntsville",
    slug: "huntsville",
    text: "Hydraulic cylinder repair for Huntsville and Walker County — timber, agriculture, municipal, and construction equipment.",
  },
  {
    city: "Splendora",
    slug: "splendora",
    text: "Serving Splendora and the US-59 corridor with cylinder repair for rural ag, land clearing, and dump truck equipment.",
  },
];

const supportCards = [
  {
    Icon: LocalShippingIcon,
    title: "Pickup & Delivery",
    text: "Coordinate cylinder pickup and delivery across our service area when downtime matters and transport isn't easy.",
  },
  {
    Icon: VerifiedIcon,
    title: "Pressure-Tested Repairs",
    text: "Every repaired cylinder is bench pressure tested before it leaves the shop — no exceptions.",
  },
  {
    Icon: EngineeringIcon,
    title: "Built for Fleets",
    text: "Support for trash trucks, heavy equipment, construction machinery, agriculture equipment, and commercial fleets.",
  },
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
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: "Vetech Hydraulics",
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phoneSchemaFormat,
    areaServed: CITY_CARDS.map((c) => ({
      "@type": "City",
      name: `${c.city}, TX`,
    })),
  },
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

  return (
    <>
      <Head>
        <title>
          Hydraulic Cylinder Repair Service Areas | Montgomery County TX | Vetech Hydraulics
        </title>
        <meta
          name="description"
          content="Hydraulic cylinder repair serving Magnolia, Montgomery, Conroe, The Woodlands, Houston, Humble, Huntsville & surrounding North Houston TX cities. Veteran-owned. Pickup & delivery available."
        />
        <meta
          name="keywords"
          content="hydraulic cylinder repair near me Montgomery TX, hydraulic repair Conroe TX, hydraulic repair The Woodlands TX, hydraulic cylinder service Montgomery County, North Houston hydraulic repair"
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
              "radial-gradient(circle at 16% 30%, rgba(204,0,0,0.24), transparent 30%), radial-gradient(circle at 88% 18%,  transparent 28%), linear-gradient(90deg, rgba(8,8,10,0.94) 0%, rgba(5,14,22,0.82) 48%, rgba(8,8,10,0.66) 100%), linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.28))",
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
                SERVICE AREAS
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
                Hydraulic Cylinder Repair Across North Houston & Montgomery County
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  ...bodyCopySx,
                  maxWidth: 820,
                  fontSize: { xs: 15.5, md: 18 },
                  color: "rgba(220,220,220,0.84)",
                }}
              >
                Veteran-owned hydraulic cylinder repair, repacking, and pressure-tested rebuilds
                for heavy equipment, fleets, and job sites across 16 cities in North Houston
                and the surrounding region. Pickup and delivery available.
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

      {/* ========================= CITY CARDS ======================= */}
      <Section sx={industrialSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <SectionTitle
              eyebrow="16 CITIES SERVED"
              subtitle="Every city page is fully written with local equipment context, services, and FAQs specific to that area."
            >
              Our Service Areas
            </SectionTitle>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {CITY_CARDS.map((item) => (
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
                      href={`/service-areas/${item.slug}-tx-hydraulic-cylinder-repair`}
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
                  We support hydraulic cylinder repair and repacking needs across
                  Montgomery County, North Houston, and the surrounding region with
                  pickup and delivery planning for equipment operators who can&apos;t
                  afford to sit and wait.
                </Typography>
                <Box sx={{ ...premiumCardSx, mt: 3 }}>
                  <Typography sx={{ ...eyebrowSx, mb: 1 }}>
                    EVERY REPAIR INCLUDES
                  </Typography>
                  <Typography sx={cardBodySx}>
                    Teardown & inspection • Seal replacement • Rod evaluation • Pressure testing • Return-ready verification
                  </Typography>
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
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
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
                      Based in Magnolia, TX — serving a broad corridor from Houston
                      north through Montgomery County and east through Liberty and
                      Walker County.
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
              subtitle="Built around the equipment operators, fleets, and businesses that cannot afford repeat downtime."
            >
              Built for Fleets, Contractors, and Heavy Equipment
            </SectionTitle>

            <Grid container spacing={{ xs: 2, md: 3 }}>
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
          </Box>
        </Container>
      </Section>

      {/* ============================= FINAL CTA ============================ */}
      <AltSection sx={industrialAltSectionSx}>
        <Container maxWidth={false} disableGutters sx={innerContainerSx}>
          <Box sx={contentWidthSx}>
            <Box
              sx={{
                ...premiumCardSx,
                p: { xs: 3, md: 5 },
                textAlign: "center",
                backgroundImage:
                  "radial-gradient(circle at 50% 0%, rgba(204,0,0,0.16), transparent 34%), linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.018))",
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
                Text a photo of your cylinder and your location — we&apos;ll confirm
                coverage, pickup and delivery options, and the fastest path to get
                your equipment back in service.
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
                  component="a"
                  href={BUSINESS.phoneTel}
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  Call Now
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </AltSection>

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
            borderTop: "1px solid rgba(255,255,255,0.2)",
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
              href={BUSINESS.phoneTel}
              sx={{
                color: industrialColors.hydraulicRed,
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              {BUSINESS.phoneDisplay}
            </MuiLink>
          </Typography>
        </Box>
      )}
    </>
  );
}
