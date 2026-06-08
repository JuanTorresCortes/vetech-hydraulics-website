// Waller TX — Waller County, US-290 corridor, agriculture and construction.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/waller_hero_img.webp";

export default function WallerServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Waller, TX | Vetech Hydraulics"
      seoDescription="Vetech Hydraulics provides hydraulic cylinder repair, repacking, and testing in Waller, TX. Text a picture of your cylinder for a fast quote."
      seoKeywords="hydraulic cylinder repair Waller TX, hydraulic repair Waller Texas, hydraulic cylinder repacking Waller TX, hydraulic service near Waller TX"
      canonicalSlug="waller-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Waller TX"
      cityName="Waller"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Waller, Texas"
      heroParagraph="Vetech Hydraulics provides hydraulic cylinder repair, repacking, and pressure-tested rebuilds for equipment operators in Waller, TX and throughout Waller County. Located off US-290 between Houston and Hempstead, Waller sits in the middle of some of the most active agricultural and construction corridors in the region."
      bodyParagraph1="Vetech Hydraulics services equipment owners in Waller, TX and the surrounding area with hydraulic cylinder repacking, rod work, and pressure-tested rebuilds. Text or email a photo of your cylinder and we'll help you figure out the best repair plan."
      bodyParagraph2="If you're near Waller and dealing with a leaking or weak cylinder, reach out. We'll review your photos, give you a ballpark estimate, and help you get back to work with less downtime."
      equipmentSubtitle="Agriculture, construction, and fleet equipment along the US-290 corridor."
      equipmentCards={[
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, hay equipment, loader attachments, and livestock handling chutes for the farms and ranches throughout Waller County. We repack and rebuild ag cylinders that have taken a full season of work and need to go back in service fast.",
        },
        {
          title: "Construction & Land Clearing",
          text: "Active construction along the US-290 corridor keeps excavators, bulldozers, and skid steers working in and around Waller. We repair boom, arm, bucket, and blade cylinders with fast turnarounds for contractors on tight schedules.",
        },
        {
          title: "Dump Trucks & Aggregate Haulers",
          text: "Telescopic hoist cylinders on dump trucks and aggregate trailers running the US-290 corridor cycle hard under heavy loads. We rebuild multi-stage cylinders with the correct seals and full pressure testing before they go back to work.",
        },
        {
          title: "Utility & Municipal Equipment",
          text: "Road department equipment, backhoes, and public works machinery serving Waller County. We support commercial and municipal accounts with reliable turnaround times and honest diagnostics.",
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
      faqHeading="Questions from Waller & Waller County Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Waller?",
          a: "We're in Magnolia, TX — about 25–30 minutes from Waller via US-290 east to SH-249. Drop-offs are welcome at the shop, and we offer pickup and delivery for Waller County customers who need help transporting cylinders.",
        },
        {
          q: "Can you repair ag cylinders quickly during the busy season?",
          a: "Yes. We understand farm downtime during a tight weather window costs more than the repair. Text us a photo early and we can often stage seals before you arrive — cutting turnaround time significantly.",
        },
        {
          q: "What's the quickest way to get a quote?",
          a: "Text or email a photo of the cylinder — front, side, and the damaged area — along with the bore size and what it came off of. We can usually turn a ballpark estimate around the same day without needing a shop visit first.",
        },
      ]}
      cityLat={30.0557}
      cityLng={-95.9269}
    />
  );
}
