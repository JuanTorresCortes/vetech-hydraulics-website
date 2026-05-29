// Fleet support page: positions the shop for commercial accounts that need repeatable repair workflows and uptime-focused communication.
// Card arrays below drive the service, industry, process, and trust sections so business owners can edit content without changing layout markup.
import Image from "next/image";
import NextLink from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import BuildIcon from "@mui/icons-material/Build";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ConstructionIcon from "@mui/icons-material/Construction";
import HandymanIcon from "@mui/icons-material/Handyman";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import FactoryIcon from "@mui/icons-material/Factory";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SeoHead from "../components/SeoHead";
import {
  bodyCopySx,
  containerSx,
  eyebrowSx,
  headlineSx,
  industrialCardSx,
  PageAltSection,
  PageSection,
  primaryCtaSx,
  secondaryCtaSx,
} from "../utils/visualStyles";
import { BUSINESS } from "../config/business";
import mobileImg from "../image/mobileImg.webp";

const HeroSection = styled(Box)(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  position: "relative",
  minHeight: "76vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  color: "#fff",
  background:
    "radial-gradient(circle at 14% 18%, rgba(215,25,32,0.24), transparent 34%), linear-gradient(135deg, #02060A 0%, #071522 48%, #02060A 100%)",
  [theme.breakpoints.down("md")]: { minHeight: "68svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "72svh" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
    backgroundSize: "46px 46px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.68), transparent 80%)",
    zIndex: 1,
  },
}));

const Section = PageSection;
const AltSection = PageAltSection;

const SectionHeader = ({ eyebrow, title, children }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    {eyebrow && (
      <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>{eyebrow}</Typography>
    )}
    <Typography component="h2" variant="h3" sx={headlineSx}>
      {title}
    </Typography>
    {children && (
      <Typography sx={{ ...bodyCopySx, mt: 1.25, maxWidth: 820, mx: "auto" }}>
        {children}
      </Typography>
    )}
  </Box>
);

// Fleet service cards describe repeatable support offerings for commercial account conversations.
const fleetServices = [
  {
    title: "Hydraulic Cylinder Repacking",
    text: "Seal replacement and repacking for leaking fleet cylinders that need reliable return-to-service performance.",
    Icon: BuildIcon,
  },
  {
    title: "Telescopic Cylinder Repair",
    text: "Repair support for dump, waste, hauling, and heavy equipment telescopic cylinders under daily load cycles.",
    Icon: PrecisionManufacturingIcon,
  },
  {
    title: "Rod Repair & Polishing",
    text: "Rod inspection, polishing, and repair coordination to help improve seal life and reduce repeat failures.",
    Icon: ConstructionIcon,
  },
  {
    title: "Weld Repair",
    text: "Practical welded component repair support for damaged cylinder parts, mounts, and fleet-related failures.",
    Icon: HandymanIcon,
  },
  {
    title: "Pressure Testing",
    text: "Repairs are pressure tested before return so operators can install cylinders with confidence.",
    Icon: VerifiedIcon,
  },
  {
    title: "Pickup & Delivery",
    text: "Local logistics options to keep commercial repair workflows moving and reduce avoidable downtime.",
    Icon: LocalShippingIcon,
  },
];

// Industry cards show the fleet and equipment categories this page is written to serve.
const industries = [
  {
    title: "Waste Management Fleets",
    text: "Hydraulic support for trash trucks, compactors, route fleets, and recycling equipment.",
    Icon: DeleteSweepIcon,
  },
  {
    title: "Construction Equipment",
    text: "Cylinder repair for excavators, loaders, skid steers, lifts, and job-site machinery.",
    Icon: EngineeringIcon,
  },
  {
    title: "Utility Fleets",
    text: "Repair coordination for municipal, utility, and public works equipment programs.",
    Icon: ElectricalServicesIcon,
  },
  {
    title: "Agriculture Equipment",
    text: "Cylinder repair support for tractors, implements, loaders, and ranch or farm equipment.",
    Icon: AgricultureIcon,
  },
  {
    title: "Industrial Equipment",
    text: "Hydraulic cylinder support for plants, logistics, manufacturing, and material handling operations.",
    Icon: FactoryIcon,
  },
  {
    title: "Contractors",
    text: "Responsive support for commercial crews that need equipment repaired and back earning quickly.",
    Icon: GroupsIcon,
  },
];

// Process cards make the repair workflow predictable for managers coordinating downtime.
const processSteps = [
  {
    step: "01",
    title: "Inspection",
    text: "Check in the cylinder, identify damage, and review failure indicators before repair planning.",
    Icon: SearchIcon,
  },
  {
    step: "02",
    title: "Quote Approval",
    text: "Provide clear repair direction before work begins so managers can control cost and downtime.",
    Icon: AssignmentTurnedInIcon,
  },
  {
    step: "03",
    title: "Repair / Rebuild",
    text: "Repack, polish, repair, or rebuild the cylinder based on what the equipment actually needs.",
    Icon: SettingsIcon,
  },
  {
    step: "04",
    title: "Pressure Testing",
    text: "Verify repair performance before return to help reduce repeat downtime and field surprises.",
    Icon: SpeedIcon,
  },
  {
    step: "05",
    title: "Delivery",
    text: "Coordinate pickup, delivery, or return so your team can get the cylinder back into service.",
    Icon: LocalShippingIcon,
  },
];

const FeatureCard = ({ title, text, Icon }) => (
  <Box
    sx={{
      ...industrialCardSx,
      position: "relative",
      height: "100%",
      p: { xs: 2.5, md: 3 },
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background:
          "linear-gradient(90deg, #D71920, rgba(215,25,32,0.24), rgba(190,202,212,0.28))",
      },
    }}
  >
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: 2,
        mb: 2,
        display: "grid",
        placeItems: "center",
        color: "#fff",
        bgcolor: "rgba(215,25,32,0.14)",
        border: "1px solid rgba(215,25,32,0.34)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.12), 0 18px 36px rgba(0,0,0,0.26), 0 0 22px rgba(215,25,32,0.16)",
      }}
    >
      <Icon aria-hidden="true" sx={{ fontSize: 27 }} />
    </Box>
    <Typography
      component="h3"
      sx={{
        color: "#F7FAFC",
        fontWeight: 950,
        fontSize: { xs: 20, md: 21 },
        lineHeight: 1.14,
        letterSpacing: "-0.025em",
        mb: 1.15,
      }}
    >
      {title}
    </Typography>
    <Typography sx={{ ...bodyCopySx, fontSize: 14.5 }}>{text}</Typography>
  </Box>
);

export default function FleetSupportPage() {
  return (
    <>
      {/* Fleet-support SEO metadata targets commercial repair and uptime-focused search intent. */}
      <SeoHead
        title="Fleet Hydraulic Cylinder Repair Montgomery TX | Vetech Hydraulics"
        description="Commercial fleet hydraulic cylinder repair near Montgomery, Conroe & North Houston TX. Trash trucks, excavators, construction fleets. Call (936) 249-6042."
        path="/fleet-support"
        ogImage="/og/fleet.webp"
        keywords="fleet hydraulic cylinder repair Montgomery TX, commercial hydraulic repair Conroe TX, hydraulic repair trash trucks North Houston, fleet hydraulic service Montgomery County"
      />

      <Box component="main">
        {/* Hero positions the shop for fleet uptime needs before visitors reach the workflow details. */}
        <HeroSection>
          <Image
            src={mobileImg}
            alt="Commercial hydraulic service support for fleet equipment"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.24,
              filter: "contrast(1.12) saturate(0.72)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(90deg, rgba(2,6,10,0.98) 0%, rgba(2,6,10,0.88) 46%, rgba(7,21,34,0.58) 100%), linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.18))",
            }}
          />

          <Container
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 2, ...containerSx }}
          >
            <Box sx={{ maxWidth: 900, py: { xs: 14, md: 18 } }}>
              <Typography sx={{ ...eyebrowSx, mb: 1.5 }}>
                COMMERCIAL HYDRAULIC SUPPORT
              </Typography>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  color: "#F7FAFC",
                  maxWidth: 920,
                  textShadow: "0 18px 42px rgba(0,0,0,0.55)",
                }}
              >
                Fleet Hydraulic Cylinder Repair Built Around Uptime
              </Typography>
              <Typography
                sx={{
                  ...bodyCopySx,
                  mt: 2.25,
                  maxWidth: 760,
                  fontSize: { xs: 15.5, md: 18 },
                }}
              >
                Commercial hydraulic repair support for trash trucks,
                construction fleets, municipalities, and industrial equipment —
                with fast turnaround and pressure-tested reliability.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3.5, alignItems: { xs: "stretch", sm: "center" } }}
              >
                <Button
                  component={NextLink}
                  href="/contact"
                  variant="contained"
                  sx={primaryCtaSx}
                >
                  Request Service
                </Button>
                <Button
                  component={NextLink}
                  href="/contact"
                  variant="outlined"
                  sx={secondaryCtaSx}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Container>
        </HeroSection>

        <Section
          sx={{
            background:
              "radial-gradient(circle at 12% 0%, rgba(215,25,32,0.14), transparent 34%), linear-gradient(180deg, #071522 0%, #0B1B27 52%, #07131D 100%)",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <SectionHeader
              eyebrow="FLEET REPAIR SERVICES"
              title="Cylinder Services for Commercial Equipment"
            >
              Practical repair support for high-use cylinders that keep routes,
              job sites, and industrial operations moving.
            </SectionHeader>
            <Grid container spacing={{ xs: 2.25, md: 3 }}>
              {fleetServices.map((service) => (
                <Grid item xs={12} sm={6} md={4} key={service.title}>
                  <FeatureCard {...service} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        <AltSection
          sx={{
            background:
              "radial-gradient(circle at 88% 10%, rgba(110,193,255,0.1), transparent 28%), linear-gradient(180deg, #050D14 0%, #0A1823 52%, #06111A 100%)",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <SectionHeader
              eyebrow="INDUSTRIES SUPPORTED"
              title="Built for Operators Who Cannot Afford Idle Equipment"
            >
              From route fleets to job-site equipment, Vetech Hydraulics helps
              commercial teams plan repairs around uptime.
            </SectionHeader>
            <Grid container spacing={{ xs: 2.25, md: 3 }}>
              {industries.map((industry) => (
                <Grid item xs={12} sm={6} md={4} key={industry.title}>
                  <FeatureCard {...industry} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </AltSection>

        <Section
          sx={{
            background:
              "radial-gradient(circle at 12% 18%, rgba(215,25,32,0.16), transparent 30%), linear-gradient(180deg, #07131D 0%, #0A1721 52%, #050D14 100%)",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
              <Grid item xs={12} md={6.8}>
                <Typography sx={{ ...eyebrowSx, mb: 1.25 }}>
                  DOWNTIME & RELIABILITY
                </Typography>
                <Typography component="h2" variant="h3" sx={headlineSx}>
                  Commercial Accountability for Fleet Hydraulic Repairs
                </Typography>
                <Typography sx={{ ...bodyCopySx, mt: 2 }}>
                  Fleet and contractor downtime gets expensive fast. Vetech
                  Hydraulics focuses on clear communication, realistic repair
                  direction, fast turnaround, and pressure-tested results so
                  your team can make better downtime decisions.
                </Typography>
                <Typography sx={{ ...bodyCopySx, mt: 1.5 }}>
                  As a veteran-owned operation, our standard is disciplined
                  communication, professional workmanship, and accountability to
                  the crews who depend on hydraulic equipment every day.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.2}>
                <Box
                  sx={{
                    ...industrialCardSx,
                    p: { xs: 2.75, md: 4 },
                    boxShadow:
                      "0 26px 72px rgba(0,0,0,0.34), inset 4px 0 0 rgba(215,25,32,0.9), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  <MilitaryTechIcon
                    aria-hidden="true"
                    sx={{ color: "#D71920", fontSize: 38, mb: 1.5 }}
                  />
                  <Typography
                    component="h3"
                    sx={{
                      color: "#F7FAFC",
                      fontWeight: 950,
                      fontSize: { xs: 24, md: 31 },
                      lineHeight: 1.12,
                      letterSpacing: "-0.035em",
                      textWrap: "balance",
                    }}
                  >
                    Reliable hydraulic repair support built around fleet uptime.
                  </Typography>
                  <Typography sx={{ ...bodyCopySx, mt: 1.5 }}>
                    Straight answers, commercial-grade repair standards, and
                    dependable follow-through for heavy equipment operations.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <AltSection>
          <Container maxWidth="lg" sx={containerSx}>
            <SectionHeader
              eyebrow="COMMERCIAL REPAIR WORKFLOW"
              title="A Clear Process from Inspection to Delivery"
            >
              Built to keep managers informed and equipment moving through the
              repair workflow without guesswork.
            </SectionHeader>
            <Grid container spacing={{ xs: 2.25, md: 3 }}>
              {processSteps.map(({ step, title, text, Icon }) => (
                <Grid item xs={12} sm={6} md={2.4} key={title}>
                  <Box
                    sx={{
                      ...industrialCardSx,
                      height: "100%",
                      p: { xs: 2.5, md: 2.75 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1.25}>
                      <Icon
                        aria-hidden="true"
                        sx={{ color: "#D71920", fontSize: 27 }}
                      />
                      <Typography
                        sx={{
                          color: "rgba(231,238,244,0.58)",
                          fontWeight: 950,
                          letterSpacing: "0.12em",
                          fontSize: 12,
                        }}
                      >
                        {step}
                      </Typography>
                    </Stack>
                    <Typography
                      component="h3"
                      sx={{
                        color: "#F7FAFC",
                        fontWeight: 950,
                        fontSize: { xs: 19, md: 20 },
                        lineHeight: 1.14,
                        letterSpacing: "-0.025em",
                        mt: 1.75,
                        mb: 1,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography sx={{ ...bodyCopySx, fontSize: 14.25 }}>
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </AltSection>

        <Section
          sx={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(215,25,32,0.2), transparent 34%), linear-gradient(180deg, #07131D 0%, #050A0F 100%)",
          }}
        >
          <Container maxWidth="lg" sx={containerSx}>
            <Box
              sx={{
                ...industrialCardSx,
                p: { xs: 3, md: 5 },
                textAlign: "center",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <Typography component="h2" variant="h3" sx={headlineSx}>
                Need Fast Hydraulic Support?
              </Typography>
              <Typography
                sx={{ ...bodyCopySx, mt: 1.25, mx: "auto", maxWidth: 720 }}
              >
                Send cylinder details, photos, or fleet repair requirements and
                we will help map the fastest path to a dependable repair.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 3, alignItems: { xs: "stretch", sm: "center" } }}
              >
                <Button
                  component={NextLink}
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
          </Container>
        </Section>
      </Box>
    </>
  );
}
