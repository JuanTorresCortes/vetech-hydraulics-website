// scripts/generate-service-area-pages.js
// Generates missing secondary city service-area pages under src/pages/service-areas.
// Run with: node scripts/generate-service-area-pages.js after adding cities to AREAS.
// Assumes routing, SEO titles, and canonical URLs follow /service-areas/{city}-tx-hydraulic-cylinder-repair.

const fs = require("fs");
const path = require("path");

// Secondary coverage list; the script skips any page file that already exists to avoid overwriting hand edits.
const AREAS = [
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

// Output directory for Next.js file-system routes; generated files may also need sitemap updates.
const baseDir = path.join(__dirname, "..", "src", "pages", "service-areas");

// Fail fast if the expected app structure changes before writing files.
if (!fs.existsSync(baseDir)) {
  console.error("service-areas folder not found at:", baseDir);
  process.exit(1);
}

// convert "New Waverly" -> "new-waverly"
function toSlug(city) {
  return city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// convert "New Waverly" -> "NewWaverly"
function toComponentName(city) {
  return city
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

AREAS.forEach((city) => {
  const slugCity = toSlug(city); // e.g. "new-waverly"
  const fileName = `${slugCity}-tx-hydraulic-cylinder-repair.js`;
  const filePath = path.join(baseDir, fileName);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${city}: ${fileName} already exists`);
    return;
  }

  const componentName = `${toComponentName(city)}ServicePage`;
  const urlPath = `/service-areas/${slugCity}-tx-hydraulic-cylinder-repair`;
  const titleCity = `${city}, TX`;
  const pageTitle = `Hydraulic Cylinder Repair in ${titleCity} | Vetech Hydraulics`;
  const metaDescription = `Vetech Hydraulics provides hydraulic cylinder repair, repacking, and testing in ${titleCity}. Text a picture of your cylinder for a fast quote.`;

  // Template intentionally uses the simple local-page layout; update the template when changing generated page documentation or CTA structure.
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
            Hydraulic Cylinder Repair in ${city}, Texas
          </Typography>

          <Typography
            sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 720, mb: 3 }}
          >
            Vetech Hydraulics services equipment owners in ${city}, TX and the surrounding
            area with hydraulic cylinder repacking, rod work, and pressure-tested rebuilds.
            Text or email a photo of your cylinder and we&apos;ll help you figure out the best repair plan.
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
            Need Hydraulic Cylinder Repair in ${city}, TX?
          </SectionTitle>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: 3,
              maxWidth: 640,
              mx: "auto",
            }}
          >
            If you&apos;re near ${city} and dealing with a leaking or weak cylinder,
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

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Created", fileName);
});

console.log("Done.");
