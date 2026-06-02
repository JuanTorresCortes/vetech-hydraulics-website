// Huntsville TX — Walker County, agriculture, timber, and state/university equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/huntsville_hero_img.webp";

export default function HuntsvilleServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Huntsville, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for agriculture, timber & construction equipment in Huntsville TX and Walker County. Veteran-owned. Call (936) 249-6042 for a fast quote."
      seoKeywords="hydraulic cylinder repair Huntsville TX, hydraulic repair Walker County Texas, agriculture hydraulic repair Huntsville, hydraulic cylinder repacking Huntsville TX, timber equipment hydraulic repair Walker County"
      canonicalSlug="huntsville-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Huntsville TX"
      cityName="Huntsville"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Huntsville, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in Huntsville, TX and Walker County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Huntsville sits along I-45 in the heart of the Piney Woods — a region with active timber operations, agriculture, and a strong base of construction and municipal equipment that depends on working hydraulics every day."
      bodyParagraph1="Walker County's mix of pine timber, cattle ranching, and state facility operations means a wide variety of equipment is in service year-round. From forestry skidders and log loaders to ranch tractors and highway department graders, the hydraulic cylinders on that equipment deal with the kind of real-world conditions — mud, heat, heavy loads — that wear out seals fast."
      bodyParagraph2="We're in Magnolia, TX — about 45 minutes south of Huntsville via I-45. Pickup and delivery is available for Walker County customers who need help getting cylinders to and from our shop."
      equipmentSubtitle="From pine timber to cattle ranches — we repair what keeps Walker County moving."
      equipmentCards={[
        {
          title: "Timber & Forestry Equipment",
          text: "Walker County is pine timber country. Skidders, log loaders, feller-bunchers, and forestry mulchers working the woods around Huntsville deal with constant shock loads and moisture exposure. We rebuild forestry cylinders that standard shops won't touch.",
        },
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, hay equipment, livestock chutes, and loader attachments for the cattle and farming operations throughout Walker County. When a ranch cylinder goes down mid-season, we move fast to get it back in service.",
        },
        {
          title: "Construction & Highway Equipment",
          text: "I-45 corridor construction and county road projects keep excavators, bulldozers, motor graders, and compactors busy in and around Huntsville. We service boom, arm, bucket, and blade cylinders for contractors working these jobs.",
        },
        {
          title: "Municipal & Institutional Equipment",
          text: "Huntsville has a significant base of government and institutional operations. Road department graders, backhoes, utility trucks, and maintenance equipment all rely on hydraulic systems that need dependable repair support.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Walker County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Huntsville & Walker County Operators"
      faqItems={[
        {
          q: "How far is your shop from Huntsville?",
          a: "We're in Magnolia, TX — about 45 minutes south of Huntsville via I-45. We also offer pickup and delivery for Walker County customers who can't transport the cylinder themselves. Call or text us to work out the logistics.",
        },
        {
          q: "Can you repair forestry cylinders with hard-to-find seals?",
          a: "Yes. Timber and forestry equipment often has non-standard cylinders with seals that aren't in regular kits. We custom-source seals and can fabricate wear components when OEM parts aren't available through normal channels.",
        },
        {
          q: "What's the fastest way to get a quote without driving down?",
          a: "Text us a photo of the cylinder — front, side, and the damaged area — along with the bore size and what equipment it came off. We can typically turn around a ballpark estimate the same day so you know what you're dealing with before making the trip.",
        },
      ]}
    />
  );
}
