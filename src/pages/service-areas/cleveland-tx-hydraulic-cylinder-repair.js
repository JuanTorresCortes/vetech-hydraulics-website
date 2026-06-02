// Cleveland TX — Liberty/San Jacinto County, timber, oil field, Big Thicket region, US-59/SH-105 corridor.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/cleveland_hero_img.webp";

export default function ClevelandServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Cleveland, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for timber, oil field, construction & agriculture equipment in Cleveland TX and the Liberty/San Jacinto County area. Veteran-owned. Call (936) 249-6042 for a fast quote."
      seoKeywords="hydraulic cylinder repair Cleveland TX, hydraulic repair Liberty County Texas, oil field hydraulic cylinder repair Cleveland TX, timber forestry hydraulic repair Cleveland Texas, hydraulic cylinder repacking San Jacinto County"
      canonicalSlug="cleveland-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Cleveland TX"
      cityName="Cleveland"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Cleveland, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in Cleveland, TX and the surrounding Liberty and San Jacinto County area with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Cleveland sits at the intersection of US-59 and SH-105 — the eastern gateway to the Big Thicket region, where timber operations, oil field service equipment, and agriculture run alongside steady construction activity."
      bodyParagraph1="The industries concentrated around Cleveland put real demands on hydraulic equipment. Timber and forestry operations in the Big Thicket push skidders, feller bunchers, and log loaders through constant cycles in wet, debris-heavy conditions that wear seals down faster than almost any other environment. Oil field service equipment — workover rigs, vacuum trucks, and pipe-handling machinery — runs hard on tight field schedules where a leaking cylinder means a crew standing idle."
      bodyParagraph2="We're in Magnolia, TX — about 45–50 minutes from Cleveland via SH-105 west through Coldspring or via US-59 north to TX-99. Drop-offs are welcome at our shop, and pickup and delivery is available for Liberty and San Jacinto County customers who need help moving cylinders."
      equipmentSubtitle="Timber, oil field, construction, and agriculture — we service it all."
      equipmentCards={[
        {
          title: "Timber & Forestry Equipment",
          text: "Feller bunchers, skidders, log loaders, and forestry mulchers working the Big Thicket and San Jacinto County timber tracts cycle cylinders in conditions — moisture, bark debris, and constant shock loads — that destroy inferior seals. We rebuild forestry cylinders with compounds matched to the environment.",
        },
        {
          title: "Oil Field Service Equipment",
          text: "Workover rigs, vacuum trucks, pipe-handling equipment, and well service vehicles operating in Liberty County oil fields depend on hydraulic cylinders that cannot fail mid-job. We repair and pressure test oil field cylinders with the urgency that field schedules require.",
        },
        {
          title: "Construction & Land Clearing",
          text: "Residential and commercial growth along the US-59 and SH-105 corridors keeps excavators, bulldozers, and skid steers working around Cleveland. We service boom, arm, bucket, and blade cylinders with fast turnarounds that keep job sites on schedule.",
        },
        {
          title: "Agriculture & Ranch Equipment",
          text: "Farms and ranches throughout Liberty and San Jacinto County run tractors, hay equipment, loader attachments, and livestock handling gear that depend on hydraulic systems built to take seasonal punishment. We rebuild ag cylinders right and pressure test before they go back to work.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Liberty & San Jacinto County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Cleveland & Liberty/San Jacinto County Operators"
      faqItems={[
        {
          q: "Do you repair cylinders from oil field service equipment?",
          a: "Yes. Workover rig cylinders, vacuum truck hydraulics, and pipe-handling equipment are all in our wheelhouse. Oil field schedules are tight — we prioritize diagnosis and quote turnaround so you know what you're dealing with before a job gets pushed.",
        },
        {
          q: "Can you handle forestry and timber equipment seals?",
          a: "Absolutely. Forestry cylinders — feller bunchers, skidders, log loaders — work in some of the harshest conditions for hydraulic seals. We select seal compounds appropriate for the debris, moisture, and shock load environment so the rebuild lasts.",
        },
        {
          q: "How far is your shop from Cleveland?",
          a: "We're in Magnolia, TX — about 45–50 minutes from Cleveland via SH-105. Drop-offs are welcome at the shop, and we offer pickup and delivery for Liberty and San Jacinto County customers who can't transport the cylinder themselves.",
        },
      ]}
    />
  );
}
