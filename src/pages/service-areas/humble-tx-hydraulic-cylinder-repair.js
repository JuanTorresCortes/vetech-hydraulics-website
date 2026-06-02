// Humble TX — Harris County, petrochemical corridor, construction, and fleet equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/humble_hero_img.webp";

export default function HumbleServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Humble, TX | Vetech Hydraulics"
      seoDescription="Hydraulic cylinder repair for construction, fleet & industrial equipment in Humble TX and north Harris County. Veteran-owned. Call (936) 249-6042 for a fast quote."
      seoKeywords="hydraulic cylinder repair Humble TX, hydraulic repair north Harris County, construction equipment hydraulic repair Humble, hydraulic cylinder repacking Humble TX, fleet hydraulic repair Humble Texas"
      canonicalSlug="humble-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Humble TX"
      cityName="Humble"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Humble, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in Humble, TX and north Harris County with hydraulic cylinder repair, repacking, and pressure-tested rebuilds. Humble sits along US-59 at the northern edge of Houston — a dense industrial and commercial corridor where construction crews, fleet operators, and petrochemical support equipment are working year-round."
      bodyParagraph1="The Lake Houston area and the US-59 / Beltway 8 interchange keep a constant flow of excavators, dump trucks, and utility equipment moving through Humble. When a cylinder blows a seal on a job site or fleet route, downtime costs pile up fast. We focus on accurate diagnosis and fast turnarounds — pressure tested before the cylinder ever leaves our shop."
      bodyParagraph2="We're in Magnolia, TX — about 40 minutes northwest of Humble via US-59 and TX-99. Drop-offs welcome, and pickup and delivery is available for north Harris County operators who need logistical support."
      equipmentSubtitle="Construction, fleets, industrial, and municipal — we repair it all."
      equipmentCards={[
        {
          title: "Construction & Excavation Equipment",
          text: "Active development along US-59 and around Lake Houston keeps excavators, bulldozers, compactors, and cranes on job sites throughout the Humble area. We repair boom, arm, bucket, and blade cylinders with fast turnarounds so crews stay productive.",
        },
        {
          title: "Commercial Fleets & Dump Trucks",
          text: "Aggregate haulers, dump trailers, and roll-off trucks serving the Humble corridor run telescopic cylinders that cycle hard every day. We rebuild multi-stage cylinders with the correct seals for each stage and full pressure testing before return.",
        },
        {
          title: "Waste & Refuse Equipment",
          text: "Rear-loader compactors and trash trucks serving north Harris County neighborhoods put constant demand on hydraulic cylinders. We specialize in waste fleet cylinder repair and rebuilds that keep collection routes running on schedule.",
        },
        {
          title: "Utility & Municipal Equipment",
          text: "Boom trucks, backhoes, and public works equipment operating in and around Humble need reliable hydraulic repair support. We work with commercial and municipal accounts with consistent turnaround times.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — North Harris County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Humble & North Harris County Operators"
      faqItems={[
        {
          q: "How far is your shop from Humble?",
          a: "We're in Magnolia, TX — about 40 minutes northwest of Humble via US-59 and TX-99. Humble-area customers are welcome to drop off cylinders directly, or we can arrange pickup and delivery for fleet accounts and commercial operators.",
        },
        {
          q: "Can you handle high-cycle cylinders from dump trucks and refuse fleets?",
          a: "Yes. Telescopic and single-stage cylinders from dump trucks and rear-loader compactors are some of our most common repairs. We rebuild them with the correct seals for each stage and pressure test through the full stroke before returning.",
        },
        {
          q: "How do I get a quote without making the drive first?",
          a: "Text or email us a photo of the cylinder — front, side, and the damaged area — along with the bore size and what equipment it came off of. We can usually get you a ballpark estimate the same day so you can decide before making the trip.",
        },
      ]}
    />
  );
}
