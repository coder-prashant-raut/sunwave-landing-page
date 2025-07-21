"use client";

import Script from "next/script";
import CalculatorForm from "../../components/CalculatorForm.jsx";

export default function CalculateClient() {
  return (
    <>
      {/* ✅ JSON-LD Schema */}
<Script
  id="structured-data-calc"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Solar Savings Calculator - Sunwave Solar",
      url: "https://www.sunwavesolar.in/calculate",
      applicationCategory: "UtilityApplication",
      operatingSystem: "All",
      description:
        "Calculate your monthly and annual savings by switching to solar energy with Sunwave Solar’s free online solar calculator.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      creator: {
        "@type": "Organization",
        name: "Sunwave Solar",
        url: "https://www.sunwavesolar.in",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8007333383",
          contactType: "Customer Service",
          email: "support@sunwavesolarenergy.in",
          areaServed: "IN",
        },
      },
    }),
  }}
/>

      

      <main className="pt-10">
        <CalculatorForm />
      </main>
    </>
  );
}
