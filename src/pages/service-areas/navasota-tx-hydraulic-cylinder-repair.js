// Navasota TX — Grimes County, agriculture, timber, and rural equipment.
import ServiceAreaPageTemplate from "../../components/ServiceAreaPageTemplate";
import heroImg from "./img/navasota_hero_img.webp";

export default function NavasotaServicePage() {
  return (
    <ServiceAreaPageTemplate
      seoTitle="Hydraulic Cylinder Repair in Navasota, TX | Vetech Hydraulics"
      seoDescription="Vetech Hydraulics provides hydraulic cylinder repair, repacking, and testing in Navasota, TX. Text a picture of your cylinder for a fast quote."
      seoKeywords="hydraulic cylinder repair Navasota TX, hydraulic repair Navasota Texas, hydraulic cylinder repacking Navasota TX, hydraulic service near Navasota TX"
      canonicalSlug="navasota-tx-hydraulic-cylinder-repair"
      heroImg={heroImg}
      heroAlt="Hydraulic equipment in Navasota TX"
      cityName="Navasota"
      stateAbbr="TX"
      heroHeadline="Hydraulic Cylinder Repair in Navasota, Texas"
      heroParagraph="Vetech Hydraulics serves equipment operators in Navasota, TX and Grimes County with hydraulic cylinder repair, repacking, and rebuilds. Navasota is an agricultural and timber community where tractors, hay equipment, timber skidders, log loaders, and heavy equipment are working year-round."
      bodyParagraph1="Vetech Hydraulics services equipment owners in Navasota, TX and the surrounding area with hydraulic cylinder repacking, rod work, and pressure-tested rebuilds. Text or email a photo of your cylinder and we'll help you choose the best repair plan."
      bodyParagraph2="If you're near Navasota and dealing with a leaking or weak cylinder, reach out. We'll review your photos, give you a ballpark estimate, and help you get back to work with less downtime."
      equipmentSubtitle="Agriculture, timber, construction, and ranch equipment — we service it all."
      equipmentCards={[
        {
          title: "Agriculture & Ranch Equipment",
          text: "Tractors, hay equipment, loader attachments, and livestock handling gear for the farming and ranching operations throughout Grimes County. We rebuild ag cylinders that have worked through a full season and need a dependable repack.",
        },
        {
          title: "Timber & Forestry Equipment",
          text: "Skidders, log loaders, and forestry equipment working the Grimes County timber tracts deal with moisture, debris, and constant shock loads that wear seals fast. We rebuild forestry cylinders with compounds matched to the environment.",
        },
        {
          title: "Construction & Land Clearing",
          text: "Construction activity in and around Navasota keeps excavators, bulldozers, and skid steers working. We repair boom, arm, bucket, and blade cylinders with turnarounds that keep job sites on schedule.",
        },
        {
          title: "Dump Trucks & Hauling Equipment",
          text: "Dump trucks and aggregate haulers serving local job sites depend on telescopic hoist cylinders that perform every load. We rebuild multi-stage cylinders with the correct seals and full pressure testing before return.",
        },
      ]}
      servicesList={[
        "Cylinder Repacking & Seal Replacement",
        "Rod Polishing & Reconditioning",
        "Weld Repair — Mounts, Eyes & Barrel Ends",
        "Full Cylinder Teardown & Rebuild",
        "Telescopic Cylinder Repair",
        "Bench Pressure Testing",
        "Pickup & Delivery — Grimes County Area",
        "Photo Estimates — Text a Picture for a Same-Day Quote",
      ]}
      faqHeading="Questions from Navasota & Grimes County Operators"
      faqItems={[
        {
          q: "How far is Vetech Hydraulics from Navasota?",
          a: "We're in Magnolia, TX — about 35–40 minutes from Navasota via SH-6 or US-290. Drop-offs are welcome at the shop, and we offer pickup and delivery for Grimes County customers who need help transporting cylinders.",
        },
        {
          q: "Can you repair ag and ranch cylinders on a fast turnaround?",
          a: "Yes. Most single-stage repacks are done in 24–48 hours once we have the cylinder. Text us a photo early and we can often stage seals before you arrive — cutting turnaround time significantly during busy season.",
        },
        {
          q: "What's the quickest way to get a quote?",
          a: "Text or email a photo of the cylinder — front, side, and the damaged area — along with the bore size and what it came off of. We can usually send a ballpark estimate the same day so you know what you're looking at before making the drive.",
        },
      ]}
      cityLat={30.3877}
      cityLng={-96.0869}
    />
  );
}
