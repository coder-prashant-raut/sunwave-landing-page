// ✅ app/estimate/page.jsx

export const metadata = {
  title: "Get Free Solar Estimate | Sunwave Solar - Pune & India-wide Service",
  description:
    "Request a free, customized solar estimate from Sunwave Solar based on your electricity usage, rooftop area, and location. Fast quotes, expert guidance, and affordable solar panel solutions for homes and businesses.",
  openGraph: {
    title: "Free Solar Estimate | Sunwave Solar - India’s Trusted Solar Experts",
    description:
      "Get your personalized solar installation quote with Sunwave Solar. Save on electricity bills and join the green energy revolution with Pune’s top solar company.",
    url: "https://www.sunwavesolar.in/estimate",
    images: [
      {
        url: "https://www.sunwavesolar.in/images/og-estimate.jpg", // ← Replace with real image when ready
        width: 1200,
        height: 630,
        alt: "Free Solar Estimate from Sunwave Solar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


// "use client";

import Script from "next/script";
import EstimateForm from "../../components/EstimateForm.jsx";

export default function EstimatePage() {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="structured-data-estimate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free Solar Installation Estimate",
            provider: {
              "@type": "Organization",
              name: "Clean Solar Agency",
              url: "https://your-domain.com",
            },
            areaServed: {
              "@type": "Country",
              name: "India"
            },
            serviceType: "Solar Installation Estimate",
            url: "https://your-domain.com/estimate"
          })
        }}
      />

      <main className="pt-10">
        <EstimateForm />
      </main>
    </>
  );
}
