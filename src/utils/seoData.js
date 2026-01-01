// src/utils/seoData.js

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vetech-hydraulics.com/#business",

  name: "Vetech Hydraulics",
  url: "https://vetech-hydraulics.com",
  description:
    "Vetech Hydraulics specializes in hydraulic cylinder repair and maintenance in Montgomery, Magnolia, Conroe and the greater North Houston area.",

  telephone: "+1-936-249-6042",
  email: "juan@vetech-hydraulics.com",
  priceRange: "$$",

  // Strong entity signals
  logo: "https://vetech-hydraulics.com/LOGO.png", // <-- replace with real file URL
  image: [
    "https://vetech-hydraulics.com/HERO.webp", // <-- replace
    "https://vetech-hydraulics.com/SHOP.webp", // <-- replace (optional)
  ],

  // If you have a public location, add address. If you do NOT publish your address, delete this block.
  // address: {
  //   "@type": "PostalAddress",
  //   streetAddress: "YOUR STREET ADDRESS",
  //   addressLocality: "Montgomery",
  //   addressRegion: "TX",
  //   postalCode: "77316",
  //   addressCountry: "US",
  // },

  // Add your approximate service-area center (use your shop city center if you prefer)
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.389, // <-- replace with your real lat
    longitude: -95.697, // <-- replace with your real lng
  },

  // If you have a Google Business Profile map URL, add it here
  hasMap: "YOUR_GOOGLE_MAPS_URL", // <-- replace or remove

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

  // Optional: show a radius (pickup/delivery area)
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 30.389, // <-- same as above
      longitude: -95.697, // <-- same as above
    },
    radius: {
      "@type": "QuantitativeValue",
      value: 50, // <-- miles (set realistic)
      unitCode: "SMI",
    },
  },

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

  // Add ONLY real profile URLs
  sameAs: [
    // "YOUR_GOOGLE_BUSINESS_PROFILE_URL",
    // "YOUR_FACEBOOK_URL",
    // "YOUR_LINKEDIN_URL",
  ],
};
