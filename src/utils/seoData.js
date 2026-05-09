// src/utils/seoData.js

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.vetechhydraulics.com/#business",

  name: "Vetech Hydraulics",
  url: "https://www.vetechhydraulics.com",
  description:
    "Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area.",

  telephone: "+1-936-249-6042",
  email: "juan@vetech-hydraulics.com",
  priceRange: "$$",

  // Strong entity signals
  logo: "https://www.vetechhydraulics.com/VTH-logo.png",
  image: [
    "https://www.vetechhydraulics.com/VTH-logo.png",
    "https://www.vetechhydraulics.com/juanTech.webp",
    "https://www.vetechhydraulics.com/juanVet.webp",
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
      telephone: "+1-936-249-6042",
      contactType: "customer service",
      areaServed: "US-TX",
      availableLanguage: ["en", "es"],
    },
  ],

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
