// New Caney TX — Montgomery County, US-59 growth corridor, construction and residential development.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/newCaney_hero_img.webp";

export default function NewCaneyServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in New Caney, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for construction, agriculture & fleet equipment in New Caney TX and east Montgomery County. Veteran-owned. Call (936) 249-6042 for a fast quote."
      seoKeywords="hydraulic cylinder repair New Caney TX, hydraulic repair Montgomery County Texas, construction equipment hydraulic repair New Caney, hydraulic cylinder repacking New Caney TX, agriculture hydraulic repair east Montgomery County"
      canonicalSlug="new-caney-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in New Caney TX"
      cityName="New Caney"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in New Caney, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in New Caney, TX and east Montgomery County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. New Caney sits along US-59 in one of the fastest-growing corridors north of Houston — residential and commercial development has brought a significant concentration of construction equipment, dump trucks, and land-clearing machinery to the area."
      bodyParagraph1="East Montgomery County also has active agriculture and rural operations between the job sites — tractors, hay equipment, and ranch machinery that run alongside the construction boom. Whether it's an excavator with a leaking arm cylinder or a loader with a blown rod seal, we rebuild it right and pressure test it before it leaves the shop."
      bodyParagraph2="We're in Magnolia, TX — about 35 minutes from New Caney via TX-99 or FM 1485. Pickup and delivery is available for Montgomery County customers who need help moving cylinders to and from the shop."
      equipmentSubtitle="Construction, land clearing, agriculture, and fleet — we cover it all."
      equipmentCards={[
        {
          title: "Construction & Land Clearing Equipment",
          text: "New Caney's rapid growth keeps excavators, bulldozers, skid steers, and forestry mulchers busy clearing land for subdivisions and commercial projects. We repair boom, arm, bucket, blade, and mulcher head cylinders with turnarounds that keep crews on schedule.",
        },
        {
          title: "Dump Trucks & Aggregate Haulers",
          text: "Telescopic hoist cylinders on dump trucks serving east Montgomery County job sites cycle constantly under heavy loads. We rebuild multi-stage cylinders with the correct stage-specific seals and full pressure testing before return.",
        },
        {
          title: "Agriculture & Ranch Equipment",
          text: "Between the job sites, east Montgomery County still has working farms and ranches. Tractors, loaders, hay equipment, and livestock handling gear all have hydraulic cylinders that need the same quality repair as heavy construction equipment.",
        },
        {
          title: "Utility & Boom Equipment",
          text: "Utility trucks, boom lifts, and service vehicles operating throughout the New Caney area rely on hydraulic systems that have to work every time. We service a wide range of utility and aerial equipment cylinders.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — East Montgomery County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from New Caney & East Montgomery County Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from New Caney?",
          a: "We're in Magnolia, TX — about 35 minutes from New Caney via TX-99 or FM 1485. We also offer pickup and delivery for east Montgomery County customers who can't transport the cylinder themselves.",
        },
        {
          q: "Can you handle same-week turnarounds for construction equipment?",
          a: "Most single-stage cylinder repacks are done in 24–48 hours once we have the cylinder and seals in hand. If you reach out early with photos and specs, we can often have seals staged before you drop off, which speeds things up significantly.",
        },
        {
          q: "Do you repair cylinders for land-clearing and forestry mulcher equipment?",
          a: "Yes. Mulcher head and land-clearing equipment cylinders deal with heavy debris impact and constant shock loads. We rebuild these with upgraded seal compounds when appropriate and pressure test them before they go back on the machine.",
        },
      ]}
    />
  );
}
