export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vetech Hydraulics",
  description:
    "Vetech Hydraulics specializes in hydraulic cylinder repair, maintenance, and resealing services in Texas.",
  url: "https://www.vetechhydraulics.com/",
  telephone: "+1-123-456-7890",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Conroe",
    addressRegion: "TX",
    postalCode: "77316",
    addressCountry: {
      "@type": "Country",
      name: "US",
    },
  },
  openingHours: "Mo-Fr 08:00-18:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.3119",
    longitude: "-95.4561",
  },
  sameAs: [
    "https://www.facebook.com/VetechHydraulics",
    "https://www.linkedin.com/company/vetechhydraulics",
  ],
  image: "https://www.vetechhydraulics.com/logo.png",
};
