// Conroe TX — largest nearby city, diverse heavy equipment, I-45 corridor.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/conroe_hero_img.webp";

export default function ConroeServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Conroe, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for construction, fleets & industrial equipment in Conroe TX. Veteran-owned shop in Magnolia. Call (936) 344-1436 for a fast quote."
      seoKeywords="hydraulic cylinder repair Conroe TX, hydraulic repair Conroe Texas, hydraulic cylinder repacking Conroe, construction equipment hydraulic repair Conroe TX, fleet hydraulic repair Conroe"
      canonicalSlug="conroe-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Conroe TX"
      cityName="Conroe"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Conroe, Texas"
      heroParagraph="Vetech Hydraulics serves Conroe and the surrounding I-45 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds for construction fleets, dump trucks, waste equipment, and industrial machinery. Veteran-owned, based in Magnolia — about 20 minutes away."
      bodyParagraph1="Conroe is the county seat of Montgomery County and one of the fastest-growing cities in Texas. The I-45 corridor through Conroe carries a constant mix of construction equipment, commercial fleets, dump trucks, and municipal machinery — all of it dependent on hydraulic cylinders that get hard use every day."
      bodyParagraph2="When a cylinder blows on a Conroe job site or fleet route, downtime costs add up fast. We focus on accurate diagnosis, honest quotes, and fast turnarounds — every cylinder pressure tested before it goes back to work."
      equipmentSubtitle="Construction, fleets, waste equipment, and industrial — we service it all."
      equipmentCards={[
        {
          title: "Construction & Excavation Equipment",
          text: "Active development throughout Conroe and south Montgomery County keeps excavators, bulldozers, compactors, and cranes on job sites year-round. We repair boom, arm, bucket, and blade cylinders with fast turnarounds.",
        },
        {
          title: "Waste & Refuse Equipment",
          text: "Trash trucks and rear-loader compactors servicing Conroe-area routes put extreme demand on hydraulic cylinders. We specialize in waste fleet cylinder repair and rebuilds that keep collection schedules on track.",
        },
        {
          title: "Dump Trucks & Aggregate Haulers",
          text: "Telescopic hoist cylinders on dump trucks running I-45 routes cycle hard under heavy loads every day. We rebuild these with the correct stage-specific seals and full pressure testing.",
        },
        {
          title: "Municipal & County Equipment",
          text: "Road graders, backhoes, boom mowers, and public works equipment for the City of Conroe and Montgomery County operations. We support commercial and municipal accounts with reliable turnaround times.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Conroe & Montgomery County",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Conroe Equipment Operators"
      faqItems={[
        {
          q: "How far is your shop from Conroe?",
          a: "We're in Magnolia, TX — about 20 minutes from Conroe via FM 1488 or SH-105. Conroe-area customers are welcome to drop off directly, or we can arrange pickup and delivery for fleet accounts.",
        },
        {
          q: "Can you handle high-cycle cylinders from waste fleets and dump trucks?",
          a: "Yes. Telescopic and single-stage cylinders from refuse trucks and dump trailers are among our most common repairs. We rebuild them with the correct seals for each stage and pressure test through the full stroke.",
        },
        {
          q: "Do you work with commercial fleet accounts on a recurring basis?",
          a: "Yes. If you manage equipment for a contractor or operate a fleet, reach out and we can discuss turnaround expectations and how to structure the relationship so your equipment gets prioritized.",
        },
      ]}
    />
  );
}
