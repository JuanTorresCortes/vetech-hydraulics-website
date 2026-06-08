// Houston TX — largest nearby metro, targeting fleets, construction, and industrial equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/houston_hero_img.webp";

export default function HoustonServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair Near Houston, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for Houston-area fleets, construction, and industrial equipment. Veteran-owned shop in Magnolia TX. Call (936) 344-1436 for a fast quote."
      seoKeywords="hydraulic cylinder repair Houston TX, hydraulic cylinder repair near Houston, hydraulic repair north Houston, fleet hydraulic repair Houston TX, construction equipment hydraulic repair Houston"
      canonicalSlug="houston-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Houston TX"
      cityName="Houston"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair Near Houston, Texas"
      heroParagraph="Vetech Hydraulics is a veteran-owned hydraulic cylinder repair shop serving the greater Houston area from our facility in Magnolia, TX — approximately 45 minutes northwest of downtown Houston via US-290. We specialize in hydraulic cylinder repacking, rod reconditioning, and pressure-tested rebuilds for construction equipment, commercial fleets, and industrial machinery operating throughout the Houston metro."
      bodyParagraph1="Houston runs some of the most demanding hydraulic equipment in the country — from petrochemical plant machinery and port equipment to the construction fleets building out the metro's ongoing expansion. When a cylinder fails, the cost of downtime on a Houston job site or fleet route far exceeds the cost of the repair. We focus on fast, accurate diagnosis and reliable rebuilds so your equipment gets back to work without the long waits."
      bodyParagraph2="We accept drop-offs from Houston-area customers and offer pickup and delivery for fleets and operators who need logistical support. Text a photo of your cylinder for a same-day quote — no shop visit required to get started."
      equipmentSubtitle="Construction, fleet, industrial, and municipal — we repair it all."
      equipmentCards={[
        {
          title: "Construction & Excavation Equipment",
          text: "Houston's construction boom keeps excavators, bulldozers, cranes, and compactors running around the clock. We repair boom, arm, bucket, blade, and outrigger cylinders for contractors across the metro — fast turnaround so crews don't sit idle.",
        },
        {
          title: "Commercial Fleets & Dump Trucks",
          text: "Dump trucks, roll-off trucks, flatbed equipment, and utility vehicles operating Houston routes depend on telescopic and single-stage cylinders that cycle constantly. We rebuild these with correct stage-specific seals and full pressure testing.",
        },
        {
          title: "Waste & Refuse Equipment",
          text: "Trash trucks and rear-loader compactors running Houston residential and commercial routes put extreme demand on hydraulic cylinders. We specialize in waste fleet cylinder repair and rebuilds that keep collection schedules on track.",
        },
        {
          title: "Industrial & Plant Equipment",
          text: "Hydraulic cylinders on plant maintenance equipment, scissor lifts, dock levelers, and industrial machinery throughout the Houston area need the same precision repair as heavy construction equipment. We handle the full range.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Houston Metro Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Houston-Area Equipment Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Houston?",
          a: "We're in Magnolia, TX — about 45 minutes northwest of downtown Houston via US-290. Houston-area customers drop off cylinders directly at the shop, or we can arrange pickup and delivery for fleet accounts and operators who need logistical help.",
        },
        {
          q: "Do you work with Houston construction and fleet companies on a recurring basis?",
          a: "Yes. We support commercial accounts with consistent turnaround times and straightforward pricing. If you run a fleet or manage equipment for a contractor, reach out and we can discuss how to structure the relationship so your equipment gets prioritized.",
        },
        {
          q: "Can I get a quote without driving out to Magnolia first?",
          a: "Absolutely. Text or email a photo of the cylinder — front, side, and damaged area — along with bore size and what it came off of. We'll get you a ballpark estimate the same day so you can make an informed decision before making the trip.",
        },
      ]}
      cityLat={29.7604}
      cityLng={-95.3698}
    />
  );
}
