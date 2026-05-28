// src/utils/seoData.js

// Business structured data shared by pages that need LocalBusiness-style JSON-LD.
// Keep address, phone, service areas, and ownership signals aligned with public business listings.
import { BUSINESS } from "../config/business";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BUSINESS.siteUrl}/#business`,

  name: "Vetech Hydraulics",
  url: BUSINESS.siteUrl,
  description:
    "Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area.",

  telephone: BUSINESS.phoneSchemaFormat,
  email: BUSINESS.email,
  priceRange: "$$",

  // Strong entity signals
  logo: `${BUSINESS.siteUrl}/VTH-logo.png`,
  image: [
    `${BUSINESS.siteUrl}/VTH-logo.png`,
    `${BUSINESS.siteUrl}/juanTech.webp`,
    `${BUSINESS.siteUrl}/juanVet.webp`,
  ],


  // Hours (adjust to your real hours)
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    // Uncomment if open Saturdays
    // {
    //   "@type": "OpeningHoursSpecification",
    //   dayOfWeek: ["Saturday"],
    //   opens: "08:00",
    //   closes: "12:00",
    // },
  ],

  // Better contact semantics
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneSchemaFormat,
      contactType: "customer service",
      areaServed: "US-TX",
      availableLanguage: ["en", "es"],
    },
  ],

  // Search engines use this as a broad local-service signal; city landing pages handle city-specific copy.
  areaServed: [
    { "@type": "City", name: "Montgomery, TX" },
    { "@type": "City", name: "Magnolia, TX" },
    { "@type": "City", name: "Conroe, TX" },
    { "@type": "City", name: "The Woodlands, TX" },
    { "@type": "City", name: "Tomball, TX" },
    { "@type": "City", name: "Spring, TX" },
    { "@type": "City", name: "Willis, TX" },
    { "@type": "City", name: "New Caney, TX" },
    { "@type": "City", name: "Splendora, TX" },
    { "@type": "City", name: "Humble, TX" },
    { "@type": "City", name: "Atascocita, TX" },
  ],

  // SDVOSB / Veteran-owned signals (safe)
  keywords: [
    "SDVOSB",
    "Service-Disabled Veteran-Owned Small Business",
    "Veteran-owned",
    "Hydraulic cylinder repair",
    "Montgomery TX",
  ],

  additionalProperty: [
    { "@type": "PropertyValue", name: "Veteran-owned", value: "Yes" },
    {
      "@type": "PropertyValue",
      name: "Service-disabled veteran-owned (SDVOSB)",
      value: "Yes",
    },
  ],

  ownedBy: { "@type": "Person", name: "Juan N. Torres" },
  founder: { "@type": "Person", name: "Juan N. Torres" },

  // High-level service catalog for structured data, not a replacement for visible service-page copy.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hydraulic Cylinder Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hydraulic Cylinder Repacking",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hydraulic Cylinder Repair & Restoration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Site / Mobile Hydraulic Cylinder Service",
        },
      },
    ],
  },

  sameAs: [],
};
