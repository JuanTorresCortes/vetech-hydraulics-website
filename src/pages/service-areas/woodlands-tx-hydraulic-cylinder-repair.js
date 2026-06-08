// The Woodlands TX — commercial fleets, corporate campus equipment, construction, and high-volume refuse routes.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/woodlands_hero_img.webp";

export default function WoodlandsServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair Near The Woodlands, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for construction, commercial fleets & refuse equipment near The Woodlands TX. Veteran-owned shop in Magnolia. Call (936) 344-1436."
      seoKeywords="hydraulic cylinder repair The Woodlands TX, hydraulic repair Woodlands Texas, hydraulic cylinder repacking The Woodlands, construction equipment hydraulic repair Woodlands TX, fleet hydraulic repair The Woodlands"
      canonicalSlug="woodlands-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment near The Woodlands TX"
      cityName="The Woodlands"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair Near The Woodlands, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators near The Woodlands, TX with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Construction fleets, refuse equipment, and commercial vehicles — veteran-owned, based in Magnolia about 25 minutes away."
      bodyParagraph1="The Woodlands is one of the most commercially active communities in the Houston metro — a master-planned area with a high concentration of corporate offices, commercial development, and infrastructure that requires significant maintenance equipment. Construction crews, refuse fleets, and utility vehicles operate throughout The Woodlands corridor and need reliable hydraulic cylinder repair when systems fail."
      bodyParagraph2="We're in Magnolia — about 25 minutes from The Woodlands via FM 1488. Drop-offs are welcome, and we offer pickup and delivery for fleet accounts operating in the area."
      equipmentSubtitle="Construction, refuse fleets, commercial, and utility equipment."
      equipmentCards={[
        {
          title: "Construction & Excavation Equipment",
          text: "Ongoing commercial and residential development in and around The Woodlands keeps excavators, cranes, and compactors active. We repair boom, arm, bucket, and outrigger cylinders with fast turnarounds so crews stay on schedule.",
        },
        {
          title: "Waste & Refuse Equipment",
          text: "Rear-loader compactors and trash trucks serving The Woodlands high-density residential and commercial routes cycle hard daily. We rebuild waste fleet cylinders to keep collection running on schedule.",
        },
        {
          title: "Dump Trucks & Fleet Equipment",
          text: "Aggregate haulers, roll-off trucks, and materials vehicles operating Woodlands-area routes depend on telescopic hoist cylinders that have to perform every shift. We rebuild and pressure test these thoroughly.",
        },
        {
          title: "Utility & Facility Equipment",
          text: "Boom trucks, scissor lifts, and maintenance equipment supporting The Woodlands commercial properties and infrastructure rely on hydraulic systems that can't go down unexpectedly. We service a wide range of utility cylinders.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — The Woodlands Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Woodlands Area Equipment Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from The Woodlands?",
          a: "We're in Magnolia — about 25 minutes from The Woodlands via FM 1488. Drop-offs are welcome during business hours. We also offer pickup and delivery for fleet accounts who need logistical support.",
        },
        {
          q: "Can you support refuse fleet cylinder repairs on a recurring schedule?",
          a: "Yes. We work with commercial fleet accounts and can structure turnaround expectations so your waste route equipment gets prioritized. Reach out to discuss your fleet's needs and volume.",
        },
        {
          q: "How do I get a quote without driving to the shop?",
          a: "Text or email a photo of the cylinder — front, side, and the damaged area — along with bore size and what it came off of. We'll get you a ballpark estimate the same day so you can plan before making the trip.",
        },
      ]}
      cityLat={30.1658}
      cityLng={-95.4613}
    />
  );
}
