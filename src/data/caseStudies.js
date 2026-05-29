import tele from "../image/tele.webp";
import esc from "../image/esc.webp";
import tele2 from "../image/vetech_telescopic_cylinder.webp";

// Case-study objects feed both the listing and dynamic detail pages; each slug must remain unique and sitemap-friendly.
// heroImage and imageAlt are paired so designers can swap visuals without losing accessibility context.
export const caseStudies = [
  {
    slug: "trash-truck-telescopic-cylinder-rebuild",
    title: "Trash Truck Telescopic Cylinder Rebuild",
    shortTitle: "Trash Truck Cylinder Rebuild",
    equipmentType: "Waste management fleet / telescopic cylinder",
    summary:
      "A fleet-focused telescopic cylinder rebuild scenario for a trash truck route vehicle that needed dependable hydraulic performance and fast return-to-service planning.",
    heroImage: tele,
    imageAlt:
      "Trash truck hydraulic cylinder rebuild example for fleet service planning",
    metaTitle: "Trash Truck Telescopic Cylinder Rebuild | Vetech Hydraulics",
    metaDescription:
      "Case study: commercial trash truck telescopic cylinder rebuild with inspection, repair, pressure testing, and fleet uptime-focused return-to-service support.",
    status: "Fleet Uptime",
    problem:
      "The cylinder was leaking under load and causing route reliability concerns for a commercial waste fleet. The priority was to identify the failure point, prevent repeat downtime, and return the truck to dependable service as quickly as practical.",
    repairProcess: [
      "Checked in the cylinder and documented visible leaks, rod condition, stage movement, and mounting concerns.",
      "Disassembled and cleaned the telescopic assembly to inspect seals, wear surfaces, and components that affect stage alignment.",
      "Repacked the cylinder with replacement sealing components and addressed wear points that could shorten seal life.",
      "Prepared the cylinder for testing and coordinated return timing around fleet uptime needs.",
    ],
    testing:
      "The rebuilt cylinder was pressure tested and checked for leak-free operation before return so the fleet could reinstall with confidence.",
    outcome:
      "The repair path prioritized route uptime, clear communication, and reliable performance for a high-use commercial trash truck application.",
  },
  {
    slug: "excavator-hydraulic-cylinder-rod-repair",
    title: "Excavator Hydraulic Cylinder Rod Repair",
    shortTitle: "Excavator Rod Repair",
    equipmentType: "Construction equipment / excavator cylinder",
    summary:
      "A heavy equipment rod repair scenario focused on surface condition, seal life, and job-site reliability for an excavator hydraulic cylinder.",
    heroImage: esc,
    imageAlt:
      "Excavator hydraulic cylinder rod repair example showing damaged cylinder components",
    metaTitle: "Excavator Hydraulic Cylinder Rod Repair | Vetech Hydraulics",
    metaDescription:
      "Case study: excavator hydraulic cylinder rod repair with inspection, rod polishing, sealing support, verification, and job-site reliability focus.",
    status: "Rod Repair",
    problem:
      "The excavator cylinder showed rod surface damage and leakage that could lead to repeat seal failure. The contractor needed a practical repair approach that protected uptime without jumping straight to unnecessary replacement.",
    repairProcess: [
      "Inspected rod finish, seal contact areas, gland condition, and visible scoring or impact damage.",
      "Cleaned and evaluated the cylinder components to determine whether repair or replacement was the best-value path.",
      "Performed rod polishing and repair support to improve the sealing surface and reduce the chance of premature seal wear.",
      "Reassembled with attention to component fit, cleanliness, and reliability under construction equipment loads.",
    ],
    testing:
      "The cylinder was checked after repair for seal fit, smooth operation, and leak-free performance expectations before return.",
    outcome:
      "The contractor received a repair direction focused on practical uptime, improved seal life, and a dependable return to job-site work.",
  },
  {
    slug: "multi-stage-cylinder-repacking-pressure-testing",
    title: "Multi-Stage Cylinder Repacking & Pressure Testing",
    shortTitle: "Multi-Stage Repack & Test",
    equipmentType: "Heavy equipment / multi-stage hydraulic cylinder",
    summary:
      "A multi-stage cylinder repacking and pressure testing scenario built around leak control, verification, and commercial-grade workmanship.",
    heroImage: tele2,
    imageAlt:
      "Multi-stage hydraulic cylinder repacking and pressure testing example",
    metaTitle:
      "Multi-Stage Cylinder Repacking & Pressure Testing | Vetech Hydraulics",
    metaDescription:
      "Case study: multi-stage hydraulic cylinder repacking and pressure testing with inspection, seal replacement, verification, and reliable return-to-service support.",
    status: "Pressure Tested",
    problem:
      "The multi-stage cylinder had recurring leaks and inconsistent performance under pressure. The equipment owner needed a repair process that verified the rebuild before the cylinder went back into service.",
    repairProcess: [
      "Documented cylinder condition, leak points, stage movement, and signs of contamination or wear.",
      "Disassembled, cleaned, and inspected sealing areas and wear components across the cylinder stages.",
      "Repacked the cylinder with appropriate seals and prepared the assembly for verification.",
      "Reviewed repair details with the customer so expectations, timing, and next steps were clear.",
    ],
    testing:
      "Pressure testing confirmed leak control and gave the customer a higher-confidence repair before installation.",
    outcome:
      "The finished repair supported reliable operation, reduced the risk of immediate rework, and gave the operator a verified cylinder ready for service.",
  },
];

// Lookup map lets the dynamic route fetch a case study by slug during static generation.
export const caseStudyMap = Object.fromEntries(
  caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]),
);
