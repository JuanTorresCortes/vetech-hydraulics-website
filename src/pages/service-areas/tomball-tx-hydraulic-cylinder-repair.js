// Tomball TX — SH-249 corridor, agriculture, oil history, and active construction.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/tomball_hero_img.webp";

export default function TomballServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Tomball, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for agriculture, construction & fleet equipment in Tomball TX along the SH-249 corridor. Veteran-owned. Call (936) 344-1436 for a fast quote."
      seoKeywords="hydraulic cylinder repair Tomball TX, hydraulic repair Tomball Texas, hydraulic cylinder repacking Tomball, agriculture hydraulic repair Tomball TX, construction equipment hydraulic repair Tomball"
      canonicalSlug="tomball-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Tomball TX"
      cityName="Tomball"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Tomball, Texas"
      heroParagraph="Vetech Hydraulics serves Tomball, TX and the SH-249 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Agriculture, construction, and fleet equipment — veteran-owned, based in Magnolia about 20 minutes away."
      bodyParagraph1="Tomball has a unique character — a community with deep agricultural and oil-patch roots that has grown into one of the most active commercial corridors northwest of Houston. The SH-249 tollway expansion has accelerated construction activity, and the surrounding area still has working farms, ranch properties, and industrial operations that run hydraulic equipment year-round."
      bodyParagraph2="We're in Magnolia — about 20 minutes from Tomball via FM 2920 or SH-249. Drop-offs welcome, and we can arrange pickup and delivery for operators who need it."
      equipmentSubtitle="Agriculture, construction, and fleet equipment along the SH-249 corridor."
      equipmentCards={[
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, loader attachments, hay equipment, and livestock handling chutes for the farms and rural properties between Tomball and Magnolia. We repack and rebuild ag cylinders that have worked a full season.",
        },
        {
          title: "Construction & Land Clearing",
          text: "SH-249 corridor growth keeps excavators, bulldozers, and skid steers busy. We repair boom, arm, bucket, and blade cylinders for contractors working Tomball-area residential and commercial projects.",
        },
        {
          title: "Dump Trucks & Aggregate Haulers",
          text: "Telescopic hoist cylinders on dump trucks serving Tomball job sites cycle hard every day. We rebuild multi-stage cylinders with correct seals for each stage and full pressure testing before return.",
        },
        {
          title: "Commercial Fleet & Work Trucks",
          text: "Fleet operators based in the Tomball area benefit from having the shop nearby. Utility trucks, service vehicles, and commercial equipment with hydraulic systems get the same quality repair as heavy iron.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Tomball & SH-249 Corridor",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Tomball Equipment Operators"
      faqItems={[
        {
          q: "How far is your shop from Tomball?",
          a: "We're in Magnolia — about 20 minutes from Tomball via FM 2920 or SH-249. Drop-offs are welcome during business hours. We also offer pickup and delivery for operators who need it.",
        },
        {
          q: "Can you repair cylinders for older ranch and ag equipment?",
          a: "Yes. Older farm and ranch equipment often has cylinders where standard seal kits don't apply. We custom-source seals and fabricate wear components when OEM parts are no longer available.",
        },
        {
          q: "What's the best way to get a fast quote?",
          a: "Text a photo of the cylinder — front, side, and the damaged area — plus the bore size and what equipment it came off of. We can usually send a ballpark estimate the same day so you know what you're looking at before dropping it off.",
        },
      ]}
      cityLat={30.0974}
      cityLng={-95.6160}
    />
  );
}
