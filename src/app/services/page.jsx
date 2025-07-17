// File: src/app/services/page.jsx
import ServicesSection from "../../components/ServicesSection.jsx";

export const metadata = {
  title: "Our Solar Services | Clean Solar Agency",
  description: "Explore Clean Solar Agency's premium solar panel installation, maintenance, and consultation services across India.",
  openGraph: {
    title: "Our Solar Services",
    description: "Explore Clean Solar Agency's premium solar solutions across India.",
    url: "https://www.cleansolar.in/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Solar Panel Installation",
    "provider": {
      "@type": "Organization",
      "name": "Clean Solar Agency",
      "url": "https://www.cleansolar.in",
      "logo": "https://www.cleansolar.in/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "Customer Service"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Clean Solar Agency offers solar panel installation, maintenance, and solar consultation services to homeowners and businesses in India."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesSection />
    </>
  );
}
