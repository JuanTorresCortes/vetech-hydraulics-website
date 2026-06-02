// Montgomery TX — Lake Conroe area, ag, ranch, and construction equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/montgomery_hero_img.webp";

export default function MontgomeryServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Montgomery, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for agriculture, ranch & construction equipment in Montgomery TX and the Lake Conroe area. Veteran-owned. Call (936) 249-6042 for a fast quote."
      seoKeywords="hydraulic cylinder repair Montgomery TX, hydraulic repair Montgomery Texas, hydraulic cylinder repacking Montgomery TX, hydraulic hose repair Montgomery, Montgomery County hydraulic repair"
      canonicalSlug="montgomery-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Montgomery TX"
      cityName="Montgomery"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Montgomery, Texas"
      heroParagraph="Vetech Hydraulics serves Montgomery, TX and the Lake Conroe area with hydraulic cylinder repair, repacking, and pressure-tested rebuilds for agriculture, ranch, and construction equipment. Veteran-owned, based minutes away in Magnolia."
      bodyParagraph1="Montgomery sits at the heart of Montgomery County — a mix of rural ranches, lake-area properties, and active construction that keeps a wide variety of hydraulic equipment running year-round. From hay equipment on the farms off SH-105 to excavators on the Lake Conroe-area development projects, the hydraulic systems on that equipment wear out and need dependable repair."
      bodyParagraph2="We're in Magnolia — about 15 minutes from Montgomery via FM 1097 or SH-105. Most repacks are done in 24–48 hours. Text a photo and we can often have seals staged before you drop off."
      equipmentSubtitle="Ranch, lake-area construction, and fleet equipment — we cover it all."
      equipmentCards={[
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, hay equipment, loader attachments, livestock chutes, and irrigation systems for ranches and farms throughout Montgomery County. We rebuild ag cylinders that have taken a full season of use.",
        },
        {
          title: "Construction & Lake Area Development",
          text: "Residential and commercial development around Lake Conroe keeps excavators, bulldozers, and graders busy. We service boom, arm, bucket, and blade cylinders with fast turnarounds.",
        },
        {
          title: "Dump Trucks & Aggregate Haulers",
          text: "Telescopic hoist cylinders on dump trucks serving local job sites cycle hard every day. We rebuild multi-stage cylinders with correct seals and full pressure testing before return.",
        },
        {
          title: "Utility & Municipal Equipment",
          text: "Road department equipment, backhoes, and public works machinery serving Montgomery and the surrounding area. We support commercial and municipal accounts with reliable turnaround times.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Montgomery County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Montgomery Area Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Montgomery?",
          a: "We're in Magnolia — about 15 minutes from Montgomery via FM 1097 or SH-105. We also offer pickup and delivery for operators who can't transport the cylinder themselves.",
        },
        {
          q: "Can you repair ranch and ag cylinders quickly during busy season?",
          a: "Yes. Text us a photo of the cylinder early and we can often have seals staged before you arrive — which cuts turnaround time significantly. We understand that ag downtime during planting or harvest costs more than the repair.",
        },
        {
          q: "Do you work on older tractor cylinders where OEM parts are discontinued?",
          a: "Absolutely. We custom-source seals and can machine wear components for cylinders that don't have a current parts catalog. Older doesn't mean unrepairable.",
        },
      ]}
    />
  );
}
