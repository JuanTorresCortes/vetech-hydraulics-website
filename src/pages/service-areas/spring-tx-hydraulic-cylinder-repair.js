// Spring TX — dense suburban/industrial mix, I-45 & SH-99, construction and fleet equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/spring_hero_img.webp";

export default function SpringServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Spring, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for construction, fleet & commercial equipment in Spring TX along the I-45 and SH-99 corridors. Veteran-owned. Call (936) 344-1436."
      seoKeywords="hydraulic cylinder repair Spring TX, hydraulic repair Spring Texas, hydraulic cylinder repacking Spring TX, construction equipment hydraulic repair Spring, fleet hydraulic repair Spring TX"
      canonicalSlug="spring-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Spring TX"
      cityName="Spring"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Spring, Texas"
      heroParagraph="Vetech Hydraulics serves Spring, TX and the I-45 / SH-99 corridor with hydraulic cylinder repair, repacking, and pressure-tested rebuilds for construction crews, commercial fleets, and equipment operators throughout the area."
      bodyParagraph1="Spring sits along I-45 at the northern edge of Houston — a dense mix of residential growth, commercial development, and industrial activity that keeps a constant flow of construction equipment, dump trucks, and utility vehicles in service. The SH-99 Grand Parkway has accelerated growth in the area, adding to the volume of heavy equipment working the Spring corridor."
      bodyParagraph2="We're in Magnolia, TX — about 30 minutes from Spring via SH-99. Drop-offs are welcome, and we offer pickup and delivery for fleet accounts and operators who need logistical support getting cylinders to the shop."
      equipmentSubtitle="Construction, fleets, waste equipment, and commercial — we service it all."
      equipmentCards={[
        {
          title: "Construction & Excavation Equipment",
          text: "Active residential and commercial development along SH-99 and I-45 keeps excavators, cranes, compactors, and skid steers working Spring job sites constantly. We repair boom, arm, bucket, and blade cylinders with fast turnarounds.",
        },
        {
          title: "Commercial Fleets & Dump Trucks",
          text: "Aggregate haulers, roll-off trucks, and materials delivery vehicles operating Spring routes depend on hoist cylinders that have to perform every load. We rebuild and pressure test telescopic and single-stage cylinders.",
        },
        {
          title: "Waste & Refuse Equipment",
          text: "Rear-loader compactors and trash trucks serving Spring-area residential routes put heavy demand on hydraulic cylinders. We repair and rebuild waste fleet cylinders to keep collection schedules running.",
        },
        {
          title: "Utility & Service Equipment",
          text: "Boom trucks, bucket trucks, and utility service vehicles operating throughout the Spring area rely on hydraulic systems that have to work without fail. We service a wide range of utility equipment cylinders.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Spring & North Houston Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Spring Area Equipment Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Spring?",
          a: "We're in Magnolia, TX — about 30 minutes from Spring via SH-99. Drop-offs are welcome anytime during business hours, and we offer pickup and delivery for fleet accounts who need logistical help.",
        },
        {
          q: "Can you handle construction cylinder repairs with fast turnaround?",
          a: "Most single-stage repacks are done in 24–48 hours once we have the cylinder and seals. Text a photo ahead of time and we can often stage seals before you arrive — which speeds things up significantly.",
        },
        {
          q: "Do you work with construction contractors on an ongoing basis?",
          a: "Yes. If you manage equipment for a GC or run a crew, reach out and we can discuss turnaround expectations and account structure so your cylinders get handled efficiently.",
        },
      ]}
    />
  );
}
