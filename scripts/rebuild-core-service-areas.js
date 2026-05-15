// scripts/rebuild-core-service-areas.js
// Rebuilds the core city service-area pages from a shared template, overwriting existing files.
// Run with: node scripts/rebuild-core-service-areas.js when core-city copy or template structure changes.
// Assumes sitemap and /service-areas index entries are maintained separately after generated output changes.

const fs = require("fs");
const path = require("path");

// Core city list; slugs must match filenames and public URLs exactly.
const AREAS = [
  { city: "Montgomery", slug: "montgomery" },
  { city: "Conroe", slug: "conroe" },
  { city: "The Woodlands", slug: "woodlands" },
  { city: "Magnolia", slug: "magnolia" },
  { city: "Tomball", slug: "tomball" },
  { city: "Spring", slug: "spring" },
  { city: "Willis", slug: "willis" },
  { city: "New Caney", slug: "new-caney" },
  { city: "Splendora", slug: "splendora" },
  { city: "Humble", slug: "humble" },
  { city: "Atascocita", slug: "atascocita" },
  { city: "Millican", slug: "millican" },
  { city: "Navasota", slug: "navasota" },
];

// Output directory for file-system routes generated from the city list above.
const baseDir = path.join(__dirname, "..", "src", "pages", "service-areas");

if (!fs.existsSync(baseDir)) {
  console.error("service-areas folder not found at:", baseDir);
  process.exit(1);
}

function componentNameFromCity(city) {
  return (
    city
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("") + "ServicePage"
  );
}

// Optional custom intros let high-priority cities carry stronger local copy while the rest use the fallback template.
const customIntros = {
  Montgomery:
    "Vetech Hydraulics is a veteran-owned hydraulic shop serving Montgomery, TX and the Lake Conroe area with expert cylinder repair, repacking, and testing. Whether you run trash trucks, compact construction equipment, ranch machinery, or custom hydraulics, we help you cut downtime with fast, no-nonsense service.",
  Conroe:
    "Conroe, TX is one of our busiest hydraulic service areas. We support local contractors, waste haulers, rental yards, and industrial shops with cylinder repacking, rod work, honing, and pressure-tested rebuilds that keep equipment in the field instead of sitting in a yard.",
  "The Woodlands":
    "The Woodlands area is packed with commercial properties, distribution centers and contractors that rely on hydraulics every day. Vetech Hydraulics provides nearby cylinder repair for forklifts, skid steers, compact loaders, and industrial equipment so your crew stays productive.",
  Magnolia:
    "Magnolia, TX sits right in our core service zone. We help local builders, land-clearing crews, and owner-operators keep their machines moving with cylinder repacks, rod polishing, and rebuilds that cost less than constant replacement.",
};

AREAS.forEach(({ city, slug }) => {
  const fileName = `${slug}-tx-hydraulic-cylinder-repair.js`;
  const filePath = path.join(baseDir, fileName);

  const componentName = componentNameFromCity(city);
  const displayCity = city;
  const displayCityTx = `${displayCity}, TX`;
  const urlPath = `/service-areas/${slug}-tx-hydraulic-cylinder-repair`;

  const pageTitle = `Hydraulic Cylinder Repair in ${displayCityTx} | Vetech Hydraulics`;
  const metaDescription = `Vetech Hydraulics provides hydraulic cylinder repair, repacking, and testing in ${displayCityTx}. Text a picture of your cylinder for a fast quote.`;

  const intro =
    customIntros[city] ||
    `Vetech Hydraulics services equipment owners in ${displayCity}, TX and the surrounding area with hydraulic cylinder repacking, rod work, and pressure-tested rebuilds. Text or email a photo of your cylinder and we&apos;ll help you choose the best repair plan.`;

  // Template overwrites each core page, so preserve any needed comments or markup here before running.
  const content = `// Service-area landing page: targets one local city while reusing the same repair promise, CTA pattern, and SEO structure as the rest of the area pages.
// If city coverage changes, keep this file, the service-area index, scripts, and sitemap in sync.
import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ConsultationButton from "../../components/ConsultationButton";

const Section = styled("section")(({ theme }) => ({
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0F2331",
}));

const AltSection = styled("section")(({ theme }) => ({
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
  backgroundColor: "#0B1B27",
}));

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: 800,
        fontSize: {
          xs: "clamp(22px, 5.5vw, 32px)",
          md: "clamp(28px, 3vw, 40px)",
        },
        textWrap: "balance",
      }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${pageTitle}</title>
        <meta
          name="description"
          content="${metaDescription}"
        />
        <link
          rel="canonical"
          href="https://www.vetechhydraulics.com${urlPath}"
        />
      </Head>

      <AltSection>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, maxWidth: "1100px", mx: "auto" }}
        >
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "clamp(26px, 7vw, 36px)",
                md: "clamp(32px, 4vw, 46px)",
              },
              textWrap: "balance",
              mb: 2,
              color: "#fff",
            }}
          >
            Hydraulic Cylinder Repair in ${displayCity}, Texas
          </Typography>

          <Typography
            sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 720, mb: 3 }}
          >
            ${intro}
          </Typography>

          <ConsultationButton />
        </Container>
      </AltSection>

      <Section>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            px: { xs: 2, sm: 3 },
            maxWidth: "900px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <SectionTitle subtitle="Text a picture for a fast response.">
            Need Hydraulic Cylinder Repair in ${displayCity}, TX?
          </SectionTitle>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: 3,
              maxWidth: 640,
              mx: "auto",
            }}
          >
            If you&apos;re near ${displayCity} and dealing with a leaking or weak cylinder,
            reach out. We&apos;ll review your photos, give you a ballpark estimate,
            and help you get back to work with less downtime.
          </Typography>

          <ConsultationButton />
        </Container>
      </Section>
    </>
  );
}
`;

  fs.writeFileSync(filePath, content, "utf8"); // overwrite every time
  console.log("Rebuilt", fileName);
});

console.log("Done rebuilding core service areas.");
