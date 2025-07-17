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
            name: "Solar Calculator",
            url: "https://your-domain.com/calculate",
            applicationCategory: "FinancialApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            creator: {
              "@type": "Organization",
              name: "Clean Solar Agency",
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
