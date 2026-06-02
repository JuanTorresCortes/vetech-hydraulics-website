// Magnolia TX — home base city page.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/magnolia_hero_img.webp";

export default function MagnoliaServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Magnolia, TX | Vetech Hydraulics"
      seoDescription="Veteran-owned hydraulic cylinder repair in Magnolia, TX — our home base. Fast repacking, rebuilds & pressure testing for ag, construction & fleet equipment. Call (936) 249-6042."
      seoKeywords="hydraulic cylinder repair Magnolia TX, hydraulic repair Magnolia Texas, hydraulic cylinder repacking Magnolia TX, hydraulic service Magnolia TX 77354"
      canonicalSlug="magnolia-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Magnolia TX"
      cityName="Magnolia"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Magnolia, Texas"
      heroParagraph="Magnolia is our home. Veteran-owned and based right here in the 77354 — we repair hydraulic cylinders for local builders, land-clearing crews, ag operations, and equipment owners who need fast, honest service without a long drive."
      bodyParagraph1="Vetech Hydraulics is based in Magnolia, TX — so when local equipment goes down, you're not waiting on a shop two counties away. We repair hydraulic cylinders for the full range of equipment that keeps Magnolia running: tractors and loader attachments on the farms along FM 1774, excavators and bulldozers on the residential and commercial job sites pushing north from 249, and fleet equipment from operators working the whole corridor."
      bodyParagraph2="Every cylinder we repair is pressure tested before it leaves the shop. That's not a sales line — it's how we confirm the rebuild held before your equipment goes back to work."
      equipmentSubtitle="From local farms to job sites — we repair what keeps Magnolia working."
      equipmentCards={[
        {
          title: "Agriculture & Land Equipment",
          text: "Tractors, loader attachments, hay equipment, and tillage tools for the farms and rural properties throughout the Magnolia area. We repack and rebuild ag cylinders that have taken a full season of work.",
        },
        {
          title: "Construction & Land Clearing",
          text: "Residential growth along SH-249 and FM 1488 keeps excavators, bulldozers, and skid steers busy around Magnolia. We repair boom, arm, bucket, and blade cylinders for local contractors and crews.",
        },
        {
          title: "Dump Trucks & Trailers",
          text: "Telescopic hoist cylinders on dump trucks and aggregate trailers running local jobs cycle hard every day. We rebuild multi-stage cylinders with the correct seals and full pressure testing.",
        },
        {
          title: "Fleet & Commercial Equipment",
          text: "Fleet operators, utility trucks, and commercial equipment based in Magnolia benefit from being close to the shop. Drop it off in the morning — most repacks are ready the next day.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Same-Day Drop-Off Available — Magnolia Location",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Magnolia Equipment Owners"
      faqItems={[
        {
          q: "How fast can you turn around a repair for a local Magnolia customer?",
          a: "Most single-stage cylinder repacks are done in 24–48 hours once we have the cylinder and the correct seals in hand. Local drop-offs are welcome during business hours — text ahead with photos and we can often have seals staged before you arrive.",
        },
        {
          q: "Do you work on older or custom cylinders?",
          a: "Yes. Older tractors and specialty equipment often have cylinders where standard kits don't fit. We custom-source seals and can fabricate wear components when OEM parts are no longer available.",
        },
        {
          q: "Can I just text a photo for a quote?",
          a: "Absolutely. Text us a photo of the cylinder — front, side, and the damaged area — plus the bore size and what it came off of. We'll get you a ballpark estimate the same day so you know what you're dealing with before dropping it off.",
        },
      ]}
    />
  );
}
