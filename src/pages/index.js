// // src/pages/index.js
// import Head from "next/head";
// import Image from "next/image";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Divider,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { styled } from "@mui/system";
// import { businessSchema } from "../utils/seoData";
// import backHoe from "../image/backHoe.webp";
// import map from "../image/map.webp";
// import ConsultationButton from "../components/ConsultationButton";
// import { motion } from "framer-motion";

// /* ------------------------------ Styled UI ------------------------------ */

// const HeroSection = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "flex-end",
//   minHeight: "95vh",
//   backgroundColor: "#142B3E",
//   color: "#fff",
//   position: "relative",
//   textAlign: "center",
//   padding: 0,
//   [theme.breakpoints.down("xl")]: { minHeight: "99vh" },
//   [theme.breakpoints.down("lg")]: { minHeight: "92vh" },
//   [theme.breakpoints.down("md")]: { minHeight: "78svh" },
//   [theme.breakpoints.down("sm")]: { minHeight: "65svh" },
//   "@media (max-width: 321px)": { minHeight: "100svh" },
// }));

// const Section = styled("section")(({ theme }) => ({
//   paddingBlock: theme.spacing(8),
//   [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
//   backgroundColor: "#0F2331",
// }));

// const AltSection = styled("section")(({ theme }) => ({
//   paddingBlock: theme.spacing(8),
//   [theme.breakpoints.up("md")]: { paddingBlock: theme.spacing(10) },
//   backgroundColor: "#0B1B27",
// }));

// const SectionTitle = ({ children, subtitle }) => (
//   <Box sx={{ textAlign: "center", mb: 6 }}>
//     <Typography
//       component="h2"
//       variant="h3"
//       sx={{
//         color: "#fff",
//         fontWeight: 800,
//         fontSize: {
//           xs: "clamp(22px, 5.5vw, 32px)",
//           md: "clamp(28px, 3vw, 40px)",
//         },
//         textWrap: "balance",
//       }}
//     >
//       {children}
//     </Typography>

//     {subtitle && (
//       <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>
//         {subtitle}
//       </Typography>
//     )}
//   </Box>
// );

// // Reusable image card using your backHoe placeholder
// const CardImage = ({ alt = "Placeholder", src = backHoe }) => (
//   <Box
//     sx={{
//       position: "relative",
//       width: "100%",
//       pb: "56.25%", // 16:9
//       borderRadius: 2,
//       overflow: "hidden",
//     }}
//   >
//     <Image
//       src={src}
//       alt={alt}
//       fill
//       sizes="(max-width: 600px) 100vw, 33vw"
//       style={{ objectFit: "cover" }}
//     />
//   </Box>
// );

// const CardImageMap = ({ alt = "service area map", src = map }) => (
//   <Box
//     sx={{
//       position: "relative",
//       width: "100%",
//       pb: "56.25%", // 16:9
//       borderRadius: 2,
//       overflow: "hidden",
//     }}
//   >
//     <Image
//       src={src}
//       alt={alt}
//       fill
//       sizes="(max-width: 600px) 100vw, 33vw"
//       style={{ objectFit: "cover" }}
//     />
//   </Box>
// );

// /* --------------------------------- Page --------------------------------- */

// export default function Home() {
//   // Simple mount-only fade-up (no scroll listeners)
//   const fadeUp = {
//     initial: { opacity: 0, y: 10 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <Head>
//         <title>Vetech Hydraulics | Hydraulic Cylinder Repair Experts</title>
//         <meta
//           name="description"
//           content="Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area."
//         />
//         <script type="application/ld+json">
//           {JSON.stringify(businessSchema)}
//         </script>
//       </Head>

//       {/* ============================== HERO ============================== */}
//       <HeroSection id="home">
//         {/* Full-bleed background image */}
//         <Image
//           src={backHoe}
//           alt="Backhoe working"
//           fill
//           priority
//           sizes="100vw"
//           style={{ objectFit: "cover", objectPosition: "top" }}
//         />

//         {/* Full-bleed overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             inset: 0,
//             pointerEvents: "none",
//             background:
//               "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)",
//           }}
//         />

//         {/* Edge-to-edge container (no maxWidth, no gutters) */}
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             px: { xs: 2, sm: 3 },
//             pb: { xs: 3, sm: 4, md: 6 },
//             textAlign: "center",
//           }}
//         >
//           <motion.div {...fadeUp}>
//             <Typography
//               component="h1"
//               variant="h1"
//               sx={{
//                 mt: 2,
//                 fontSize: {
//                   xs: "clamp(22px, 7.5vw, 32px)",
//                   sm: "clamp(28px, 6vw, 42px)",
//                   md: "clamp(36px, 5vw, 56px)",
//                   lg: "64px",
//                 },
//                 lineHeight: { xs: 1.2, md: 1.1 },
//                 fontWeight: 800,
//                 textWrap: "balance",
//                 wordBreak: "break-word",
//                 overflowWrap: "anywhere",
//                 color: "#fff",
//                 mb: 2,
//               }}
//             >
//               Hydraulic Cylinder Repair in Montgomery, Texas.
//             </Typography>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
//             style={{ display: "inline-block" }}
//           >
//             <ConsultationButton />
//           </motion.div>
//         </Container>
//       </HeroSection>

//       {/* ============================ SERVICES ============================ */}
//       <Section id="services">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="Fast turnarounds. Tested. Warrantied.">
//             Cylinder Repair Services
//           </SectionTitle>

//           <Grid container spacing={3}>
//             {[
//               {
//                 title: "Cylinder Repacking",
//                 blurb:
//                   "Seal replacement, wipers, wear rings, and leak remediation for tie-rod and welded cylinders.",
//               },
//               {
//                 title: "Rod Polish & Chrome Prep",
//                 blurb:
//                   "Minor rod refinishing and polish for better seal life. Chrome evaluation for send-out if needed.",
//               },
//               {
//                 title: "On-Site / Mobile Service",
//                 blurb:
//                   "Pickup, delivery, or mobile pull/install options to minimize your equipment downtime.",
//               },
//             ].map((c, i) => (
//               <Grid item xs={12} sm={6} md={4} key={i}>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     bgcolor: "#102A3A",
//                     borderRadius: 3,
//                     overflow: "hidden",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                   elevation={0}
//                 >
//                   <CardImage />
//                   <CardContent sx={{ color: "#fff" }}>
//                     <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
//                       {c.title}
//                     </Typography>
//                     <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                       {c.blurb}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Section>

//       {/* ========================== WHY CHOOSE US ========================= */}
//       <AltSection id="why-us">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="Built for contractors, fleet managers, and operators.">
//             Why Choose Vetech Hydraulics
//           </SectionTitle>

//           <Grid container spacing={3}>
//             {[
//               { k: "Veteran-Owned", v: "Hands-On Cylinder Expertise" },
//               { k: "Leak-Tested", v: "Before Delivery" },
//               { k: "Pickup", v: "and Delivery Options" },
//               { k: "Warranty", v: "on Repairs" },
//             ].map((item, i) => (
//               <Grid item xs={6} sm={3} key={i}>
//                 <Box
//                   sx={{
//                     borderRadius: 3,
//                     p: 3,
//                     textAlign: "center",
//                     bgcolor: "#0E2635",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                     height: "100%",
//                   }}
//                 >
//                   <Typography
//                     sx={{ color: "#6EC1FF", fontWeight: 800, fontSize: 18 }}
//                   >
//                     {item.k}
//                   </Typography>
//                   <Typography sx={{ color: "#fff", fontWeight: 700 }}>
//                     {item.v}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </AltSection>

//       {/* ============= COMMON FAILURES (NEW SECTION) ====================== */}
//       <Section id="failures">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="What typically goes wrong — and how we fix it.">
//             Common Hydraulic Cylinder Failures We See Every Day
//           </SectionTitle>

//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 2 }}>
//                 Hydraulic cylinders work hard on trash trucks, excavators, skid
//                 steers, farm equipment, and industrial machines. Over time,
//                 heat, contamination, misalignment, and heavy use start to show
//                 up as the same repeat failures:
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
//               >
//                 Seal Failures & Leaks
//               </Typography>
//               <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                 Worn or damaged seals cause internal bypassing, external leaks,
//                 loss of power, and contamination. Age, wrong seal material, high
//                 temps, and scored rods/barrels all speed up seal failure.
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
//               >
//                 Bent Rods & Scored Barrels
//               </Typography>
//               <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                 Side loading or poor alignment can bend rods and scratch the
//                 inside of the barrel. Once sealing surfaces are damaged, seals
//                 wear out quickly and leaks follow.
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
//               >
//                 Rod Pitting & Corrosion
//               </Typography>
//               <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                 Outdoor and corrosive environments eat away at chrome. Pitting
//                 and rust tear seals, weaken the rod, and often require
//                 reconditioning or replacement.
//               </Typography>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="h6"
//                 sx={{ color: "#fff", fontWeight: 800, mt: { xs: 0, md: 2 } }}
//               >
//                 Piston Wear & Misalignment
//               </Typography>
//               <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                 When a cylinder is misaligned or running dry, the piston can
//                 wear unevenly and score the barrel. That leads to loss of
//                 efficiency, weak stroke, and shortened service life.
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
//               >
//                 Slow or Erratic Operation
//               </Typography>
//               <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                 Cylinders that feel slow, jerky, or inconsistent are often
//                 dealing with low system pressure, fluid contamination, or
//                 internal bypassing from worn internal parts.
//               </Typography>

//               <Divider
//                 sx={{
//                   my: 3,
//                   borderColor: "rgba(255,255,255,0.15)",
//                 }}
//               />

//               <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 2 }}>
//                 At Vetech Hydraulics, we don’t just throw seals at the problem.
//                 We look at why the cylinder failed so we can rebuild it to last
//                 longer and help you avoid repeat downtime.
//               </Typography>

//               <ConsultationButton />
//             </Grid>
//           </Grid>
//         </Container>
//       </Section>

//       {/* ========== CYLINDER REPAIR CAPABILITIES (NEW SECTION) ============ */}
//       <AltSection id="capabilities">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="From small-bore to large telescopic cylinders.">
//             Our Cylinder Repair Capabilities
//           </SectionTitle>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   bgcolor: "#0E2635",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Disassembly & Inspection
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
//                   Every cylinder is fully torn down, cleaned, and inspected. We
//                   measure rods, pistons, barrels, and glands to find the true
//                   root cause of failure — not just the symptoms.
//                 </Typography>

//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Machining & Restoration
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
//                   We handle rod polishing, rod straightening, barrel honing,
//                   thread repair, custom component fabrication, and more. Older
//                   or discontinued cylinders can often be saved with in-house
//                   machining.
//                 </Typography>

//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Seal Selection & Replacement
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   We install high-quality seals matched to your pressure,
//                   temperature, and fluid type — so your repair holds up in
//                   real-world conditions.
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   bgcolor: "#102A3A",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Reassembly & Pressure Testing
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
//                   Once rebuilt, each cylinder is reassembled to spec and
//                   pressure-tested under load. We verify smooth operation,
//                   correct stroke, and leak-free performance before it goes back
//                   in service.
//                 </Typography>

//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Fast Turnaround Times
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
//                   Downtime is expensive. We move quickly — especially for local
//                   contractors, trash fleets, and equipment owners who need
//                   cylinders turned around in days, not weeks.
//                 </Typography>

//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Photo & Measurement Quotes
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   Text or email a photo and some basic dimensions, and we can
//                   usually give you a ballpark estimate before you even bring the
//                   cylinder in.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </AltSection>

//       {/* ============== REPAIR VS REPLACEMENT (NEW SECTION) =============== */}
//       <Section id="repair-vs-replace">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="Helping you make the right call for your equipment and budget.">
//             Repair vs. Replacement
//           </SectionTitle>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   bgcolor: "#102A3A",
//                   borderRadius: 3,
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                 }}
//                 elevation={0}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: 800, mb: 1, color: "#6EC1FF" }}
//                   >
//                     When Repair Makes Sense
//                   </Typography>
//                   <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 1.5 }}>
//                     In many cases, repairing your hydraulic cylinder is faster
//                     and more cost-effective than replacing it:
//                   </Typography>
//                   <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
//                     <li>
//                       <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         Seal leaks, minor rod pitting, and surface wear that can
//                         be corrected.
//                       </Typography>
//                     </li>
//                     <li>
//                       <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         When OEM replacements are back-ordered or discontinued.
//                       </Typography>
//                     </li>
//                     <li>
//                       <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         When you need a quick turnaround to get equipment back
//                         in service.
//                       </Typography>
//                     </li>
//                   </ul>
//                   <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
//                     For most cylinders we see, a proper rebuild gives you years
//                     of additional service at a fraction of the cost of new.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   bgcolor: "#0E2635",
//                   borderRadius: 3,
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                 }}
//                 elevation={0}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: 800, mb: 1, color: "#6EC1FF" }}
//                   >
//                     When Replacement is the Better Option
//                   </Typography>
//                   <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 1.5 }}>
//                     Sometimes, a cylinder is too far gone, or the numbers simply
//                     don’t add up:
//                   </Typography>
//                   <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
//                     <li>
//                       <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         Severe barrel cracking or structural damage.
//                       </Typography>
//                     </li>
//                     <li>
//                       <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         Rods that are heavily bent or beyond safe repair.
//                       </Typography>
//                     </li>
//                     <li>
//                       <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         When repair cost approaches or exceeds the cost of a
//                         quality replacement.
//                       </Typography>
//                     </li>
//                   </ul>
//                   <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
//                     We’ll walk you through both options with honest pricing, so
//                     you can decide what’s best for your operation — not ours.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Section>

//       {/* ============================= PROCESS ============================ */}
//       <Section id="process">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="Simple, transparent, and efficient.">
//             Our Repair Process
//           </SectionTitle>

//           <Grid container spacing={3}>
//             {[
//               {
//                 step: "1",
//                 title: "Check-In & Inspect",
//                 txt: "Receive cylinder, clean, measure, and inspect components to identify the root cause of failure.",
//               },
//               {
//                 step: "2",
//                 title: "Quote & Approve",
//                 txt: "You get a clear estimate for seals, parts, and labor before we move forward.",
//               },
//               {
//                 step: "3",
//                 title: "Repack / Rebuild",
//                 txt: "Replace seals, wear items, and perform any required machining or rod/barrel work.",
//               },
//               {
//                 step: "4",
//                 title: "Test & Deliver",
//                 txt: "Pressure test, verify smooth operation, and return your cylinder ready to reinstall.",
//               },
//             ].map((s, i) => (
//               <Grid key={i} item xs={12} sm={6} md={3}>
//                 <Box
//                   sx={{
//                     p: 3,
//                     height: "100%",
//                     borderRadius: 3,
//                     bgcolor: "#102A3A",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                     color: "#fff",
//                   }}
//                 >
//                   <Typography sx={{ fontWeight: 800, color: "#6EC1FF" }}>
//                     Step {s.step}
//                   </Typography>
//                   <Typography sx={{ fontWeight: 800, mt: 0.5 }}>
//                     {s.title}
//                   </Typography>
//                   <Typography sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5 }}>
//                     {s.txt}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Section>

//       {/* ========== QUALITY & TESTING (NEW SECTION) ======================= */}
//       <AltSection id="quality">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="Your cylinders run under extreme pressure — we treat them that way.">
//             Quality, Testing & Reliability
//           </SectionTitle>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   bgcolor: "#0E2635",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Pressure Testing
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
//                   Every repaired cylinder is pressure-tested to verify it holds
//                   and performs at proper operating pressures, with no leaks or
//                   bypassing.
//                 </Typography>

//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Micron-Level Measurements
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   We check rod, barrel, and gland tolerances with micrometers
//                   and bore gauges to ensure components are in spec and will
//                   support long-term seal life.
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   bgcolor: "#102A3A",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Clean Seal Installation
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
//                   Seals are installed in a clean, controlled area to reduce
//                   contamination — a leading cause of early failure.
//                 </Typography>

//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Documentation on Request
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   Need proof for your QA system or customer? We can provide test
//                   notes and repair details so you have a record of what was
//                   done.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </AltSection>

//       {/* =========================== SERVICE AREAS ======================== */}
//       <AltSection id="areas">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle subtitle="Local pickup and delivery available.">
//             Service Areas
//           </SectionTitle>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   bgcolor: "#0E2635",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   color: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>Primary</Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   Montgomery • Conroe • The Woodlands • Magnolia • Tomball •
//                   Cypress • Spring • North Houston
//                 </Typography>
//                 <Divider
//                   sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
//                 />
//                 <Typography sx={{ fontWeight: 800, mb: 1 }}>
//                   Industries
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   Waste & Recycling, Construction, Agriculture, Logistics,
//                   Manufacturing.
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   bgcolor: "#102A3A",
//                   borderRadius: 3,
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   overflow: "hidden",
//                 }}
//                 elevation={0}
//               >
//                 <CardImageMap alt="Service area placeholder" />
//                 <CardContent sx={{ color: "#fff" }}>
//                   <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                     Service-area map.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </AltSection>

//       {/* =============================== CTA ============================== */}
//       <Section id="quote">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}
//         >
//           <SectionTitle subtitle="Send a picture for a fast quote.">
//             Ready to Get Your Cylinder Fixed?
//           </SectionTitle>
//           <ConsultationButton />
//         </Container>
//       </Section>

//       {/* =============================== FAQ ============================== */}
//       <AltSection id="faq">
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{ px: { xs: 2, sm: 3 } }}
//         >
//           <SectionTitle>FAQ</SectionTitle>

//           {[
//             {
//               q: "How fast can you turn around a standard repack?",
//               a: "Typical 24–72 hours depending on parts availability and queue. Emergency service available.",
//             },
//             {
//               q: "Do you test cylinders before delivery?",
//               a: "Yes. Every repair is pressure tested to verify no leaks and proper operation.",
//             },
//             {
//               q: "Can you pick up my cylinder from a job site?",
//               a: "We offer pickup and delivery in Montgomery County and surrounding areas. Mobile pull/install options available.",
//             },
//           ].map((item, i) => (
//             <Accordion
//               key={i}
//               disableGutters
//               sx={{
//                 bgcolor: "#0E2635",
//                 color: "#fff",
//                 borderRadius: 2,
//                 mb: 2,
//                 border: "1px solid rgba(255,255,255,0.06)",
//                 "&:before": { display: "none" },
//               }}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
//               >
//                 <Typography sx={{ fontWeight: 800 }}>{item.q}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   {item.a}
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </Container>
//       </AltSection>
//     </>
//   );
// }

// src/pages/index.js
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { businessSchema } from "../utils/seoData";
import backHoe from "../image/backHoe.webp";
import map from "../image/map.webp";
import ConsultationButton from "../components/ConsultationButton";
import { motion } from "framer-motion";

/* ------------------------------ Styled UI ------------------------------ */

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  minHeight: "95vh",
  backgroundColor: "#142B3E",
  color: "#fff",
  position: "relative",
  textAlign: "center",
  padding: 0,
  [theme.breakpoints.down("xl")]: { minHeight: "99vh" },
  [theme.breakpoints.down("lg")]: { minHeight: "92vh" },
  [theme.breakpoints.down("md")]: { minHeight: "78svh" },
  [theme.breakpoints.down("sm")]: { minHeight: "65svh" },
  "@media (max-width: 321px)": { minHeight: "100svh" },
}));

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

// Simple image cards
const CardImage = ({ alt = "Placeholder", src = backHoe }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%", // 16:9
      borderRadius: 2,
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

const CardImageMap = ({ alt = "service area map", src = map }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pb: "56.25%",
      borderRadius: 2,
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  </Box>
);

/* --------------------------------- Page --------------------------------- */

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>Vetech Hydraulics | Hydraulic Cylinder Repair Experts</title>
        <meta
          name="description"
          content="Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area."
        />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Head>

      {/* ============================== HERO ============================== */}
      <HeroSection id="home">
        <Image
          src={backHoe}
          alt="Backhoe working"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 3 },
            pb: { xs: 3, sm: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <motion.div {...fadeUp}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "clamp(22px, 7.5vw, 32px)",
                  sm: "clamp(28px, 6vw, 42px)",
                  md: "clamp(36px, 5vw, 56px)",
                  lg: "64px",
                },
                lineHeight: { xs: 1.2, md: 1.1 },
                fontWeight: 800,
                textWrap: "balance",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
                color: "#fff",
                mb: 2,
              }}
            >
              Hydraulic Cylinder Repair in Montgomery, Texas.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            style={{ display: "inline-block" }}
          >
            <ConsultationButton />
          </motion.div>
        </Container>
      </HeroSection>

      {/* ============================ SERVICES ============================ */}
      <Section id="services">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Fast turnarounds. Tested. Warrantied.">
            Cylinder Repair Services
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                title: "Cylinder Repacking",
                blurb:
                  "Seal replacement, wipers, wear rings, and leak remediation for tie-rod and welded cylinders.",
              },
              {
                title: "Rod Polish & Chrome Prep",
                blurb:
                  "Minor rod refinishing and polish for better seal life. Chrome evaluation for send-out if needed.",
              },
              {
                title: "On-Site / Mobile Service",
                blurb:
                  "Pickup, delivery, or mobile pull/install options to minimize your equipment downtime.",
              },
            ].map((c, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "#102A3A",
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  elevation={0}
                >
                  <CardImage />
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {c.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                      {c.blurb}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ========================== WHY CHOOSE US ========================= */}
      <AltSection id="why-us">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Built for contractors, fleet managers, and operators.">
            Why Choose Vetech Hydraulics
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              { k: "Veteran-Owned", v: "Hands-On Cylinder Expertise" },
              { k: "Leak-Tested", v: "Before Delivery" },
              { k: "Pickup", v: "and Delivery Options" },
              { k: "Warranty", v: "on Repairs" },
            ].map((item, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <Box
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    textAlign: "center",
                    bgcolor: "#0E2635",
                    border: "1px solid rgba(255,255,255,0.06)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{ color: "#6EC1FF", fontWeight: 800, fontSize: 18 }}
                  >
                    {item.k}
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 700 }}>
                    {item.v}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSection>

      {/* ============= COMMON FAILURES ====================== */}
      <Section id="failures">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="What typically goes wrong — and how we fix it.">
            Common Hydraulic Cylinder Failures We See Every Day
          </SectionTitle>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 2 }}>
                Hydraulic cylinders work hard on trash trucks, excavators, skid
                steers, farm equipment, and industrial machines. Over time,
                heat, contamination, misalignment, and heavy use start to show
                up as the same repeat failures:
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Seal Failures & Leaks
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                Worn or damaged seals cause internal bypassing, external leaks,
                loss of power, and contamination. Age, wrong seal material, high
                temps, and scored rods/barrels all speed up seal failure.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Bent Rods & Scored Barrels
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                Side loading or poor alignment can bend rods and scratch the
                inside of the barrel. Once sealing surfaces are damaged, seals
                wear out quickly and leaks follow.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Rod Pitting & Corrosion
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                Outdoor and corrosive environments eat away at chrome. Pitting
                and rust tear seals, weaken the rod, and often require
                reconditioning or replacement.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: { xs: 0, md: 2 } }}
              >
                Piston Wear & Misalignment
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                When a cylinder is misaligned or running dry, the piston can
                wear unevenly and score the barrel. That leads to loss of
                efficiency, weak stroke, and shortened service life.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 800, mt: 2 }}
              >
                Slow or Erratic Operation
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                Cylinders that feel slow, jerky, or inconsistent are often
                dealing with low system pressure, fluid contamination, or
                internal bypassing from worn internal parts.
              </Typography>

              <Divider
                sx={{
                  my: 3,
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              />

              <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 2 }}>
                At Vetech Hydraulics, we don’t just throw seals at the problem.
                We look at why the cylinder failed so we can rebuild it to last
                longer and help you avoid repeat downtime.
              </Typography>

              <ConsultationButton />
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ========== CYLINDER REPAIR CAPABILITIES ============ */}
      <AltSection id="capabilities">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="From small-bore to large telescopic cylinders.">
            Our Cylinder Repair Capabilities
          </SectionTitle>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#0E2635",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Disassembly & Inspection
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  Every cylinder is fully torn down, cleaned, and inspected. We
                  measure rods, pistons, barrels, and glands to find the true
                  root cause of failure — not just the symptoms.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Machining & Restoration
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  We handle rod polishing, rod straightening, barrel honing,
                  thread repair, custom component fabrication, and more. Older
                  or discontinued cylinders can often be saved with in-house
                  machining.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Seal Selection & Replacement
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  We install high-quality seals matched to your pressure,
                  temperature, and fluid type — so your repair holds up in
                  real-world conditions.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#102A3A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Reassembly & Pressure Testing
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  Once rebuilt, each cylinder is reassembled to spec and
                  pressure-tested under load. We verify smooth operation,
                  correct stroke, and leak-free performance before it goes back
                  in service.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Fast Turnaround Times
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  Downtime is expensive. We move quickly — especially for local
                  contractors, trash fleets, and equipment owners who need
                  cylinders turned around in days, not weeks.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Photo & Measurement Quotes
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Text or email a photo and some basic dimensions, and we can
                  usually give you a ballpark estimate before you even bring the
                  cylinder in.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* ============== REPAIR VS REPLACEMENT =============== */}
      <Section id="repair-vs-replace">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Helping you make the right call for your equipment and budget.">
            Repair vs. Replacement
          </SectionTitle>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#102A3A",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, mb: 1, color: "#6EC1FF" }}
                  >
                    When Repair Makes Sense
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 1.5 }}>
                    In many cases, repairing your hydraulic cylinder is faster
                    and more cost-effective than replacing it:
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    <li>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                        Seal leaks, minor rod pitting, and surface wear that can
                        be corrected.
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                        When OEM replacements are back-ordered or discontinued.
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                        When you need a quick turnaround to get equipment back
                        in service.
                      </Typography>
                    </li>
                  </ul>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
                    For most cylinders we see, a proper rebuild gives you years
                    of additional service at a fraction of the cost of new.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#0E2635",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, mb: 1, color: "#6EC1FF" }}
                  >
                    When Replacement is the Better Option
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 1.5 }}>
                    Sometimes, a cylinder is too far gone, or the numbers simply
                    don’t add up:
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    <li>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                        Severe barrel cracking or structural damage.
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                        Rods that are heavily bent or beyond safe repair.
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                        When repair cost approaches or exceeds the cost of a
                        quality replacement.
                      </Typography>
                    </li>
                  </ul>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
                    We’ll walk you through both options with honest pricing, so
                    you can decide what’s best for your operation — not ours.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ============================= PROCESS ============================ */}
      <Section id="process">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Simple, transparent, and efficient.">
            Our Repair Process
          </SectionTitle>

          <Grid container spacing={3}>
            {[
              {
                step: "1",
                title: "Check-In & Inspect",
                txt: "Receive cylinder, clean, measure, and inspect components to identify the root cause of failure.",
              },
              {
                step: "2",
                title: "Quote & Approve",
                txt: "You get a clear estimate for seals, parts, and labor before we move forward.",
              },
              {
                step: "3",
                title: "Repack / Rebuild",
                txt: "Replace seals, wear items, and perform any required machining or rod/barrel work.",
              },
              {
                step: "4",
                title: "Test & Deliver",
                txt: "Pressure test, verify smooth operation, and return your cylinder ready to reinstall.",
              },
            ].map((s, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 3,
                    bgcolor: "#102A3A",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#fff",
                  }}
                >
                  <Typography sx={{ fontWeight: 800, color: "#6EC1FF" }}>
                    Step {s.step}
                  </Typography>
                  <Typography sx={{ fontWeight: 800, mt: 0.5 }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5 }}>
                    {s.txt}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ========== QUALITY & TESTING ======================= */}
      <AltSection id="quality">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Your cylinders run under extreme pressure — we treat them that way.">
            Quality, Testing & Reliability
          </SectionTitle>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#0E2635",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Pressure Testing
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  Every repaired cylinder is pressure-tested to verify it holds
                  and performs at proper operating pressures, with no leaks or
                  bypassing.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Micron-Level Measurements
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  We check rod, barrel, and gland tolerances with micrometers
                  and bore gauges to ensure components are in spec and will
                  support long-term seal life.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#102A3A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Clean Seal Installation
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
                  Seals are installed in a clean, controlled area to reduce
                  contamination — a leading cause of early failure.
                </Typography>

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Documentation on Request
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Need proof for your QA system or customer? We can provide test
                  notes and repair details so you have a record of what was
                  done.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* =========================== SERVICE AREAS ======================== */}

      <AltSection id="areas">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle subtitle="Local pickup and delivery available.">
            Service Areas
          </SectionTitle>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#0E2635",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Primary Service Corridor
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Montgomery • Conroe • The Woodlands • Magnolia • Tomball •
                  Spring • Willis • New Caney • Splendora • Humble • Atascocita
                </Typography>

                <Divider
                  sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
                />

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Additional Coverage Areas
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Millican • Navasota • Washington • Anderson • Apolonia •
                  Richards • Whitehall • Fields Store • Hempstead • Prairie View
                  • Pine Island • Buckhorn • Waller • Plantersville • Pinebrook
                  • Todd Mission • Fetzer • Bobville • Karen • Pinehurst •
                  Stagecoach • Rose Hill • Kohrville • Porter Heights •
                  Grangerland • Klein • Westfield • Panorama Village • Ada •
                  Waverly • New Waverly • Patton Village • Roman Forest • Plum
                  Grove • Cleveland • North Cleveland • Westcott • Eastgate •
                  Huffman
                </Typography>

                <Divider
                  sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }}
                />

                <Typography sx={{ fontWeight: 800, mb: 1 }}>
                  Key Industries We Support
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  Waste & Recycling, Construction, Agriculture, Logistics,
                  Manufacturing and other hydraulic equipment operators across
                  the Lake Conroe / North Houston region.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "#102A3A",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.06)",
                  overflow: "hidden",
                }}
                elevation={0}
              >
                <CardImageMap alt="Vetech Hydraulics service area map" />
                <CardContent sx={{ color: "#fff" }}>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                    Typical service radius for pickup, delivery, and on-site
                    support. If you&apos;re near this map, there&apos;s a good
                    chance we can help.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSection>

      {/* =============================== CTA ============================== */}
      <Section id="quote">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 }, textAlign: "center" }}
        >
          <SectionTitle subtitle="Send a picture for a fast quote.">
            Ready to Get Your Cylinder Fixed?
          </SectionTitle>
          <ConsultationButton />
        </Container>
      </Section>

      {/* =============================== FAQ ============================== */}
      <AltSection id="faq">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SectionTitle>FAQ</SectionTitle>

          {[
            {
              q: "How fast can you turn around a standard repack?",
              a: "Typical 24–72 hours depending on parts availability and queue. Emergency service available.",
            },
            {
              q: "Do you test cylinders before delivery?",
              a: "Yes. Every repair is pressure tested to verify no leaks and proper operation.",
            },
            {
              q: "Can you pick up my cylinder from a job site?",
              a: "We offer pickup and delivery in Montgomery County and surrounding areas. Mobile pull/install options available.",
            },
          ].map((item, i) => (
            <Accordion
              key={i}
              disableGutters
              sx={{
                bgcolor: "#0E2635",
                color: "#fff",
                borderRadius: 2,
                mb: 2,
                border: "1px solid rgba(255,255,255,0.06)",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              >
                <Typography sx={{ fontWeight: 800 }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </AltSection>
    </>
  );
}
