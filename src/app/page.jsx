"use client";

import Script from "next/script";
import HeroSection from "../components/HeroSection.jsx";
import ContactPage from "../components/ContactForm.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ProjectShowcaseSection from "../components/ProjectShowcaseSection.jsx";
import TestimonialMasterpiece from "../components/TestimonialMasterpiece.jsx";
import AboutUs from "../components/AboutUs.jsx";
import WorkProcessSection from "../components/WorkProcessSection.jsx";
import CallToAction from "../components/CallToAction.jsx";
import CityScroller from "../components/CityScroller.jsx";
export default function Home() {
  return (
    <>
      {/* SEO Structured Data */}
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Clean Solar Agency",
            image: "https://your-domain.com/logo.jpg",
            url: "https://your-domain.com",
            telephone: "+91-9876543210",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Solar Lane",
              addressLocality: "Mumbai",
              addressRegion: "MH",
              postalCode: "400001",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 09:00-18:00",
            priceRange: "$$",
          }),
        }}
      />

      <Script
        id="structured-data-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Clean Solar Agency",
            url: "https://your-domain.com",
            logo: "https://your-domain.com/logo.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9876543210",
              contactType: "Customer Service",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <main>
        <HeroSection />
        <AboutUs />
        <CityScroller />
        <ServicesSection />

        <WorkProcessSection />

        <ProjectShowcaseSection />
        <CallToAction />
        <TestimonialMasterpiece />
        <ContactPage />
      </main>
    </>
  );
}
