// ✅ app/estimate/page.jsx

export const metadata = {
  title: "Get Free Solar Estimate | Clean Solar Agency",
  description:
    "Request a free solar installation estimate tailored to your location and electricity usage.",
  openGraph: {
    title: "Get Your Free Solar Estimate",
    description:
      "Let Clean Solar provide you with a customized quote for your solar project.",
    url: "https://your-domain.com/estimate",
    images: [
      {
        url: "https://your-domain.com/images/og-estimate.jpg",
        width: 1200,
        height: 630,
        alt: "Free Solar Estimate",
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
