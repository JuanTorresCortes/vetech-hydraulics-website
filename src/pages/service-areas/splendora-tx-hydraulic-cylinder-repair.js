// Splendora TX — US-59 corridor, Montgomery/Harris County line, rural and construction equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/splendora_hero_img.webp";

export default function SplendoraServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Splendora, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for agriculture, construction & rural equipment in Splendora TX along the US-59 corridor. Veteran-owned. Call (936) 344-1436 for a fast quote."
      seoKeywords="hydraulic cylinder repair Splendora TX, hydraulic repair Splendora Texas, agriculture hydraulic repair Splendora, hydraulic cylinder repacking Splendora TX, construction equipment hydraulic repair US-59 corridor"
      canonicalSlug="splendora-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Splendora TX"
      cityName="Splendora"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Splendora, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in Splendora, TX and the surrounding US-59 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Splendora sits at the Montgomery and Harris County line — a rural stretch of US-59 where agriculture, logging, and construction equipment run alongside the ongoing residential and commercial growth pushing north from Houston."
      bodyParagraph1="Equipment in the Splendora area deals with the kind of conditions that wear out hydraulic seals fast — East Texas humidity, heavy clay soils, and the constant demands of land-clearing and rural operations. When a cylinder starts leaking on a job site or farm, we diagnose it fast, quote it honestly, and rebuild it to last — pressure tested before it leaves our hands."
      bodyParagraph2="We're in Magnolia, TX — about 30–35 minutes from Splendora via TX-99 or FM 1485. Pickup and delivery is available for US-59 corridor customers who need help transporting cylinders to the shop."
      equipmentSubtitle="Rural, construction, and fleet equipment along the US-59 corridor."
      equipmentCards={[
        {
          title: "Agriculture & Rural Equipment",
          text: "Tractors, hay equipment, loader attachments, livestock handling chutes, and irrigation systems for the farms and ranches along the US-59 corridor. We repack and rebuild ag cylinders that have taken a full season of field punishment.",
        },
        {
          title: "Land Clearing & Forestry Equipment",
          text: "Splendora and the surrounding area still has active land clearing and timber operations. Mulchers, skidders, and forestry equipment deal with debris impact and moisture that shorten seal life. We rebuild these cylinders right.",
        },
        {
          title: "Construction Equipment",
          text: "Residential and commercial development along US-59 keeps excavators, bulldozers, compactors, and skid steers working the Splendora area. We service boom, arm, bucket, and blade cylinders with fast turnarounds for contractors.",
        },
        {
          title: "Dump Trucks & Hauling Equipment",
          text: "Dump trucks and aggregate trailers running US-59 routes depend on telescopic hoist cylinders that have to perform every load. We rebuild these with the correct seals for each stage and pressure test through the full stroke.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — US-59 Corridor & Surrounding Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Splendora & US-59 Corridor Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Splendora?",
          a: "We're in Magnolia, TX — about 30–35 minutes from Splendora via TX-99 or FM 1485. We also offer pickup and delivery for US-59 corridor customers who can't transport the cylinder themselves.",
        },
        {
          q: "Can you repair cylinders from older farm and ranch equipment?",
          a: "Yes. Older tractors and rural equipment often have cylinders with discontinued OEM seals. We custom-source seals and can fabricate wear components to rebuild cylinders that don't have a current parts catalog.",
        },
        {
          q: "What's the quickest way to get a quote?",
          a: "Text us a photo of the cylinder — front, side, and the damaged area — along with the bore size and what it came off of. We can usually get a ballpark estimate back to you the same day without you having to make the drive first.",
        },
      ]}
      cityLat={30.2338}
      cityLng={-95.1655}
    />
  );
}
