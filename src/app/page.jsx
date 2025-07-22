"use client";

import Script from "next/script";
import Head from "next/head";

import HeroSection from "../components/HeroSection.jsx";
import ContactPage from "../components/ContactForm.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ProjectShowcaseSection from "../components/ProjectShowcaseSection.jsx";
import TestimonialMasterpiece from "../components/TestimonialMasterpiece.jsx";
import AboutUs from "../components/AboutUs.jsx";
import WorkProcessSection from "../components/WorkProcessSection.jsx";
import CallToAction from "../components/CallToAction.jsx";
import CityScroller from "../components/CityScroller.jsx";
import FaqSection from "../components/FaqSection.jsx";

export default function Home() {
  return (
    <>
      {/* Head Tags for SEO */}
      <Head>
        <title>Clean Solar Agency | India’s Trusted Solar Panel Experts</title>
        <meta
          name="description"
          content="Clean Solar Agency provides premium solar panel installation, consultation, and maintenance services across India. Make the switch to clean energy today!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.cleansolar.in/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Clean Solar Agency" />
        <meta
          property="og:description"
          content="India’s Trusted Solar Panel Experts for Homeowners and Businesses"
        />
        <meta property="og:url" content="https://www.cleansolar.in/" />
        <meta
          property="og:image"
          content="https://www.cleansolar.in/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clean Solar Agency" />
        <meta
          name="twitter:description"
          content="India’s Trusted Solar Panel Experts for Homeowners and Businesses"
        />
        <meta
          name="twitter:image"
          content="https://www.cleansolar.in/og-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Structured Data Scripts */}
      <Script
        id="structured-data-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Clean Solar Agency",
            image: "https://www.cleansolar.in/logo.jpg",
            url: "https://www.cleansolar.in",
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
        id="structured-data-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Clean Solar Agency",
            url: "https://www.cleansolar.in",
            logo: "https://www.cleansolar.in/logo.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9876543210",
              contactType: "Customer Service",
            },
          }),
        }}
      />

      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Home - Clean Solar Agency",
            url: "https://www.cleansolar.in/",
            description:
              "Clean Solar Agency is India’s trusted expert in solar panel solutions for homes and businesses. Discover clean energy options with our premium services.",
          }),
        }}
      />

      {/* Page Content */}
      <main>
        {/* Hero with negative margin to cancel pt-[160px] from layout */}
        <div className="-mt-[160px] md:-mt-[128px]">
          <HeroSection />
        </div>

        <AboutUs />
        <CallToAction />
        <CityScroller />
        <ServicesSection />
        <WorkProcessSection />
        <ProjectShowcaseSection />
        <TestimonialMasterpiece />
        <ContactPage />
        <FaqSection/>
      </main>
    </>
  );
}
