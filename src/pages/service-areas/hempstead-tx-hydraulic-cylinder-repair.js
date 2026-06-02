// Hempstead TX — Waller County seat, US-290/SH-6 crossroads, agriculture and ranching.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/hempstead_hero_img.webp";

export default function HempsteadServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Hempstead, TX | Vetech Hydraulics"
      seoDescription="Vetech Hydraulics provides hydraulic cylinder repair, repacking, and testing in Hempstead, TX. Text a picture of your cylinder for a fast quote."
      seoKeywords="hydraulic cylinder repair Hempstead TX, hydraulic repair Hempstead Texas, hydraulic cylinder repacking Hempstead TX, hydraulic service near Hempstead TX"
      canonicalSlug="hempstead-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Hempstead TX"
      cityName="Hempstead"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Hempstead, Texas"
      heroParagraph="Vetech Hydraulics serves Hempstead, TX and the surrounding Waller County area with hydraulic cylinder repair, repacking, and rebuilds for agriculture, ranching, and construction equipment. Hempstead is the seat of Waller County and sits at the crossroads of US-290 and SH-6 — a region built on farming, livestock, and the equipment-intensive work that comes with it."
      bodyParagraph1="Vetech Hydraulics services equipment owners in Hempstead, TX and the surrounding area with hydraulic cylinder repacking, rod work, and pressure-tested rebuilds. Text or email a photo of your cylinder and we'll help you figure out the best repair plan."
      bodyParagraph2="If you're near Hempstead and dealing with a leaking or weak cylinder, reach out. We'll review your photos, give you a ballpark estimate, and help you get back to work with less downtime."
      equipmentSubtitle="Agriculture, ranching, construction, and farm equipment — we service it all."
      equipmentCards={[
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, hay equipment, loader attachments, livestock chutes, and irrigation systems for the farms and ranches throughout Waller County. We rebuild ag cylinders that have taken a full season of use and get them back to work fast.",
        },
        {
          title: "Construction & Land Clearing",
          text: "Construction activity along the US-290 corridor and surrounding area keeps excavators, bulldozers, and skid steers working around Hempstead. We repair boom, arm, bucket, and blade cylinders with turnarounds that keep job sites moving.",
        },
        {
          title: "Dump Trucks & Aggregate Haulers",
          text: "Telescopic hoist cylinders on dump trucks running the US-290 corridor cycle hard under heavy loads every day. We rebuild multi-stage cylinders with correct stage-specific seals and full pressure testing before return.",
        },
        {
          title: "Utility & Municipal Equipment",
          text: "Road department equipment, backhoes, and public works machinery serving Hempstead and the surrounding Waller County area. We support commercial and municipal accounts with reliable turnaround times.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Waller County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Hempstead & Waller County Operators"
      faqItems={[
        {
          q: "How far is your shop from Hempstead?",
          a: "We're in Magnolia, TX — about 30–35 minutes from Hempstead via US-290. Drop-offs are welcome at the shop, and we offer pickup and delivery for Waller County customers who need help transporting cylinders.",
        },
        {
          q: "Can you repair ag and ranch cylinders quickly during the busy season?",
          a: "Yes. We know farm downtime costs more than the repair. Text us a photo early and we can often stage seals before you arrive — which cuts turnaround time significantly during planting or harvest crunch.",
        },
        {
          q: "What's the quickest way to get a quote?",
          a: "Text or email a photo of the cylinder — front, side, and the damaged area — plus the bore size and what equipment it came off of. We can usually turn a ballpark estimate around the same day without a shop visit first.",
        },
      ]}
    />
  );
}
