// File: src/app/services/page.jsx
import ServicesSection from "../../components/ServicesSection.jsx";

export const metadata = {
  title: "Our Solar Services | Sunwave Solar - Installation, Maintenance & Consultation",
  description:
    "Discover Sunwave Solar’s complete range of solar services including rooftop panel installation, maintenance, and expert consultation. Trusted across Pune and India for clean energy solutions.",
  openGraph: {
    title: "Solar Services by Sunwave Solar | Complete Solar Solutions in India",
    description:
      "From residential rooftop systems to industrial solar installations, Sunwave Solar offers end-to-end solar services across India.",
    url: "https://www.sunwavesolar.in/services",
    type: "website",
  },
};


export default function ServicesPage() {
 const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Solar Panel Installation & Maintenance",
  provider: {
    "@type": "Organization",
    name: "Sunwave Solar",
    url: "https://www.sunwavesolar.in",
    logo: "https://www.sunwavesolar.in/logo.png", // ← replace if you have actual logo URL
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8007333383",
      email: "support@sunwavesolarenergy.in",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"]
    }
  },
  areaServed: {
    "@type": "Country",
    name: "India"
  },
  description:
    "Sunwave Solar provides expert solar panel installation, maintenance, and energy consultation services for homes, businesses, and industries across India. We specialize in cost-effective, high-quality solar solutions tailored to your energy needs.",
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
