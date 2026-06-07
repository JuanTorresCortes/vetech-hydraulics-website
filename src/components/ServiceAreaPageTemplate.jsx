// Reusable template for all 16 service-area city pages.
// Each city page imports this template and passes city-specific props.
// Design matches src/pages/index.js industrial dark theme exactly.
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { keyframes } from "@mui/system";
import {
  industrialColors,
  industrialCardSx,
  headlineSx,
  bodyCopySx,
  eyebrowSx,
  innerContainerSx,
  primaryCtaSx,
  secondaryCtaSx,
  PageSection,
  PageAltSection,
  industrialSectionSx,
  industrialAltSectionSx,
} from "../utils/visualStyles";
import { BUSINESS } from "../config/business";

const zoomOut = keyframes`
  from { transform: scale(1.07); }
  to   { transform: scale(1.0);  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
`;

const trustBadges = [
  "Veteran-Owned",
  "Pressure Tested Repairs",
  "Fast Turnaround",
  "Pickup & Delivery",
];

export default function ServiceAreaPageTemplate({
  // SEO
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalSlug,

  // Hero
  heroImg,
  heroAlt,
  cityName,
  stateAbbr = "TX",
  heroHeadline,
  heroParagraph,
  bodyParagraph1,
  bodyParagraph2,

  // Equipment section
  equipmentSubtitle,
  equipmentCards,

  // Services list
  servicesList,

  // FAQ
  faqHeading,
  faqItems,
}) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}
        <link
          rel="canonical"
          href={`${BUSINESS.siteUrl}/service-areas/${canonicalSlug}`}
        />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta
          property="og:url"
          content={`${BUSINESS.siteUrl}/service-areas/${canonicalSlug}`}
        />
        <meta
          property="og:image"
          content={`${BUSINESS.siteUrl}/og/repair.webp`}
        />
        {/* SEO FIX: og:site_name for social sharing */}
        <meta property="og:site_name" content="Vetech Hydraulics" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${BUSINESS.siteUrl}/og/repair.webp`} />

        {/* SEO FIX: LocalBusiness JSON-LD with city-specific areaServed for local pack rankings */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${BUSINESS.siteUrl}/service-areas/${canonicalSlug}#business`,
              name: "Vetech Hydraulics",
              url: `${BUSINESS.siteUrl}/service-areas/${canonicalSlug}`,
              telephone: BUSINESS.phoneSchemaFormat,
              email: BUSINESS.email,
              image: `${BUSINESS.siteUrl}/og/repair.webp`,
              logo: `${BUSINESS.siteUrl}/VTH-logo.webp`,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: BUSINESS.addressLocality,
                addressRegion: BUSINESS.addressRegion,
                addressCountry: BUSINESS.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.2099,
                longitude: -95.7516,
              },
              areaServed: {
                "@type": "City",
                name: `${cityName}, ${stateAbbr}`,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />

        {/* SEO FIX: BreadcrumbList JSON-LD for sitelinks breadcrumb in SERPs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BUSINESS.siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Service Areas",
                  item: `${BUSINESS.siteUrl}/service-areas`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: `${cityName}, ${stateAbbr} Hydraulic Cylinder Repair`,
                  item: `${BUSINESS.siteUrl}/service-areas/${canonicalSlug}`,
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: "62svh", md: "70vh" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          bgcolor: industrialColors.gunmetal,
        }}
      >
        {/* Background image with zoom animation */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            transformOrigin: "center center",
            animation: `${zoomOut} 8s ease-out forwards`,
          }}
        >
          <Image
            src={heroImg}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>

        {/* Dark gradient overlay — matches index.js hero */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(90deg, rgba(8,8,10,0.95) 0%, rgba(8,8,10,0.88) 46%, rgba(7,21,34,0.6) 100%), linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.18) 60%)",
          }}
        />

        {/* Hero content */}
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            ...innerContainerSx,
            maxWidth: "1100px",
            mx: "auto",
            py: { xs: 10, md: 14 },
            zIndex: 2,
          }}
        >
          {/* Red pill badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(204,0,0,0.14)",
              border: "1px solid rgba(204,0,0,0.36)",
              borderRadius: "2px",
              px: 2,
              py: 0.6,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: industrialColors.hydraulicRed,
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            />
            <Typography
              sx={{
                ...eyebrowSx,
                fontSize: { xs: 10, md: 11 },
                color: "#FFD0D0",
              }}
            >
              BASED IN MAGNOLIA, TX &bull; SERVING {cityName.toUpperCase()} AREA
            </Typography>
          </Box>

          {/* H1 */}
          <Typography
            component="h1"
            sx={{
              ...headlineSx,
              fontWeight: 700,
              fontSize: {
                xs: "clamp(28px, 7vw, 42px)",
                md: "clamp(36px, 4.2vw, 58px)",
              },
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              mb: 2.5,
              maxWidth: 800,
            }}
          >
            {heroHeadline}
          </Typography>

          {/* Sub-paragraph */}
          <Typography
            sx={{
              ...bodyCopySx,
              maxWidth: 620,
              mb: 4,
              fontSize: { xs: 15, md: 16.5 },
            }}
          >
            {heroParagraph}
          </Typography>

          {/* CTA buttons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,
              alignItems: "center",
            }}
          >
            <Button
              component="a"
              href={BUSINESS.phoneTel}
              variant="contained"
              startIcon={<PhoneIcon />}
              sx={primaryCtaSx}
            >
              Call Now
            </Button>
            <Button
              component={NextLink}
              href="/services"
              variant="outlined"
              sx={secondaryCtaSx}
            >
              View Services
            </Button>
          </Box>

          {/* Phone + hours */}
          <Typography
            sx={{
              color: industrialColors.mutedText,
              fontSize: { xs: 13, md: 14 },
              mb: 4,
            }}
          >
            {BUSINESS.phoneDisplay} &nbsp;|&nbsp; {BUSINESS.hoursShort}
          </Typography>

          {/* Trust badges */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {trustBadges.map((badge) => (
              <Box
                key={badge}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  bgcolor: "rgba(18,18,22,0.7)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "4px",
                  px: 1.5,
                  py: 0.65,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: industrialColors.hydraulicRed,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: industrialColors.text,
                    fontSize: { xs: 11.5, md: 12.5 },
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {badge}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── BODY COPY ─────────────────────────────────────────────────── */}
      <PageAltSection sx={industrialAltSectionSx}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ ...innerContainerSx, maxWidth: "1100px", mx: "auto" }}
        >
          <Typography
            sx={{ ...bodyCopySx, maxWidth: 780, mb: 3 }}
          >
            {bodyParagraph1}
          </Typography>
          {bodyParagraph2 && (
            <Typography sx={{ ...bodyCopySx, maxWidth: 780 }}>
              {bodyParagraph2}
            </Typography>
          )}
        </Container>
      </PageAltSection>

      {/* ── EQUIPMENT CARDS ───────────────────────────────────────────── */}
      {equipmentCards && equipmentCards.length > 0 && (
        <PageSection sx={industrialSectionSx}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ ...innerContainerSx, maxWidth: "1100px", mx: "auto" }}
          >
            {/* Section header */}
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                EQUIPMENT WE SERVICE
              </Typography>
              <Typography component="h2" sx={{ ...headlineSx, mb: 1.5 }}>
                Equipment We Service in the {cityName} Area
              </Typography>
              {equipmentSubtitle && (
                <Typography sx={{ ...bodyCopySx, maxWidth: 580, mx: "auto" }}>
                  {equipmentSubtitle}
                </Typography>
              )}
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {equipmentCards.map((card) => (
                <Grid item xs={12} sm={6} key={card.title}>
                  <Box
                    sx={{
                      ...industrialCardSx,
                      p: { xs: 3, md: 3.5 },
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background:
                          "linear-gradient(90deg, #CC0000 0%, rgba(204,0,0,0.4) 100%)",
                        borderRadius: "3px 3px 0 0",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: industrialColors.text,
                        fontWeight: 900,
                        fontSize: { xs: 17, md: 19 },
                        mb: 1.25,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography sx={{ ...bodyCopySx, fontSize: 15 }}>
                      {card.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </PageSection>
      )}

      {/* ── SERVICES LIST ─────────────────────────────────────────────── */}
      {servicesList && servicesList.length > 0 && (
        <PageAltSection sx={industrialAltSectionSx}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ ...innerContainerSx, maxWidth: "1100px", mx: "auto" }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                OUR REPAIR SERVICES
              </Typography>
              <Typography component="h2" sx={{ ...headlineSx, mb: 1.5 }}>
                Our Repair Services
              </Typography>
              <Typography sx={{ ...bodyCopySx }}>
                Pressure tested before return &mdash; every repair, every time.
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {servicesList.map((item) => (
                <Grid item xs={12} sm={6} key={item}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: { xs: 2, md: 2.25 },
                      borderRadius: 2,
                      bgcolor: "rgba(14,14,18,0.72)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      boxShadow: "inset 3px 0 0 rgba(204,0,0,0.7)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: industrialColors.hydraulicRed,
                        flexShrink: 0,
                        boxShadow: "0 0 10px rgba(204,0,0,0.5)",
                      }}
                    />
                    <Typography
                      sx={{
                        color: industrialColors.text,
                        fontWeight: 700,
                        fontSize: { xs: 14, md: 15 },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </PageAltSection>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      {faqItems && faqItems.length > 0 && (
        <PageSection sx={industrialSectionSx}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ ...innerContainerSx, maxWidth: "900px", mx: "auto" }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Typography component="h2" sx={headlineSx}>
                {faqHeading}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {faqItems.map(({ q, a }) => (
                <Accordion
                  key={q}
                  disableGutters
                  elevation={0}
                  sx={{
                    bgcolor: "rgba(14,14,18,0.92)",
                    borderRadius: "4px !important",
                    border: `1px solid ${industrialColors.steel}`,
                    "&:before": { display: "none" },
                    "&.Mui-expanded": {
                      borderColor: "rgba(204,0,0,0.32)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: industrialColors.hydraulicRed }}
                      />
                    }
                    sx={{
                      px: { xs: 2.5, md: 3 },
                      py: 0.5,
                      borderLeft: `3px solid ${industrialColors.hydraulicRed}`,
                      borderRadius: "14px 14px 0 0",
                      "& .MuiAccordionSummary-content": { my: 1.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: industrialColors.text,
                        fontSize: { xs: 15, md: 16 },
                        lineHeight: 1.4,
                      }}
                    >
                      {q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2.5, md: 3 }, pb: 2.5 }}>
                    <Typography sx={{ ...bodyCopySx, fontSize: 15 }}>
                      {a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            {/* CTA box below FAQ */}
            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                bgcolor: "rgba(204,0,0,0.08)",
                border: "1px solid rgba(204,0,0,0.28)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  ...headlineSx,
                  fontSize: { xs: "clamp(20px,5vw,28px)", md: "clamp(24px,2.6vw,34px)" },
                  mb: 1,
                }}
              >
                Ready to Get Your Cylinder Repaired?
              </Typography>
              <Typography sx={{ ...bodyCopySx, mb: 3 }}>
                Call or text a photo for a same-day quote.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <Button
                  component="a"
                  href={BUSINESS.phoneTel}
                  variant="contained"
                  startIcon={<PhoneIcon />}
                  sx={primaryCtaSx}
                >
                  Call Now
                </Button>
                <Button
                  component="a"
                  href={BUSINESS.emailMailto}
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  sx={secondaryCtaSx}
                >
                  Email Us
                </Button>
              </Box>
            </Box>
          </Container>
        </PageSection>
      )}
    </>
  );
}
