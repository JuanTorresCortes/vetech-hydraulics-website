// Willis TX — north Montgomery County, I-45 corridor, agriculture and lake area equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/willis_hero_img.webp";

export default function WillisServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Willis, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for agriculture, construction & fleet equipment in Willis TX and north Montgomery County. Veteran-owned. Call (936) 249-6042 for a fast quote."
      seoKeywords="hydraulic cylinder repair Willis TX, hydraulic repair north Montgomery County, agriculture hydraulic repair Willis TX, hydraulic cylinder repacking Willis, construction equipment hydraulic repair Willis Texas"
      canonicalSlug="willis-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Willis TX"
      cityName="Willis"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Willis, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in Willis, TX and north Montgomery County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Willis sits along I-45 north of Conroe — a stretch of the county where agriculture, rural land operations, and Lake Conroe-area construction keep a steady mix of equipment in service throughout the year."
      bodyParagraph1="North Montgomery County has a strong agricultural base — cattle operations, hay production, and row crop farming that relies on tractors, loader attachments, and livestock handling equipment with hydraulic systems that take seasonal punishment. Add in the construction activity along I-45 and the lake area development, and there's a wide variety of equipment that needs dependable cylinder repair without a long drive to find it."
      bodyParagraph2="We're in Magnolia, TX — about 25–30 minutes from Willis via TX-105 or I-45. Pickup and delivery is available for north Montgomery County customers who need help getting cylinders to and from the shop."
      equipmentSubtitle="Agriculture, construction, lake area, and county equipment — we cover it all."
      equipmentCards={[
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, hay equipment, cattle handling chutes, loader attachments, and tillage implements for the farming and ranching operations throughout north Montgomery County. We rebuild ag cylinders that have taken a full season of field use.",
        },
        {
          title: "Construction & Earthmoving Equipment",
          text: "I-45 corridor development and Lake Conroe area projects keep excavators, bulldozers, motor graders, and skid steers working north of Conroe. We service boom, arm, bucket, and blade cylinders for contractors on these jobs.",
        },
        {
          title: "Dump Trucks & Trailers",
          text: "Aggregate and materials haulers running the I-45 corridor depend on telescopic hoist cylinders that cycle daily. We rebuild and pressure test these to prevent roadside failures that shut down a haul route.",
        },
        {
          title: "County & Utility Equipment",
          text: "Road graders, backhoes, boom mowers, and public works equipment serving Willis and north Montgomery County operations. We support commercial and municipal accounts with reliable turnaround times.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — North Montgomery County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Willis & North Montgomery County Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Willis?",
          a: "We're in Magnolia, TX — about 25–30 minutes from Willis via TX-105 or I-45. We also offer pickup and delivery for north Montgomery County customers who can't transport the cylinder on their own.",
        },
        {
          q: "Can you repair ag cylinders quickly during planting or harvest season?",
          a: "Yes. We know farm equipment downtime during a tight weather window costs more than the repair. Text us a photo of the cylinder early and we can often have seals staged before you arrive — which cuts turnaround time significantly.",
        },
        {
          q: "Do you work on older tractor and ranch equipment cylinders?",
          a: "Absolutely. Older tractors and ranch equipment often have cylinders where standard kits don't fit. We custom-source seals and can machine or fabricate wear components when OEM parts aren't available anymore.",
        },
      ]}
    />
  );
}
