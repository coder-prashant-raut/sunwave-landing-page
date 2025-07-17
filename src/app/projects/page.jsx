import ProjectShowcaseSection from "../../components/ProjectShowcaseSection.jsx";

export const metadata = {
  title: "Solar Project Portfolio | Clean Solar Agency",
  description:
    "Discover our successful solar panel installations across homes and industries in India. See how Clean Solar is powering the future.",
  openGraph: {
    title: "Solar Projects by Clean Solar Agency",
    description:
      "View our latest residential and industrial solar installations across India.",
    url: "https://www.cleansolar.in/projects",
    siteName: "Clean Solar Agency",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?q=80",
        width: 1200,
        height: 630,
        alt: "Industrial Solar Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Solar Projects",
    description:
      "Explore our latest solar projects — building a greener India, one roof at a time.",
    images: [
      "https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?q=80",
    ],
  },
};


export default function ProjectsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Solar Projects Portfolio",
    "description":
      "Explore our latest solar panel installations for residential and industrial clients across India.",
    "url": "https://www.cleansolar.in/projects",
    "mainEntity": [
      {
        "@type": "Service",
        "serviceType": "Industrial Solar Installation",
        "areaServed": "India",
        "provider": {
          "@type": "Organization",
          "name": "Clean Solar Agency",
          "url": "https://www.cleansolar.in",
        },
        "serviceOutput": "50KW Rooftop System for Dukat Industries, Pune",
      },
      {
        "@type": "Service",
        "serviceType": "Domestic Solar Setup",
        "areaServed": "India",
        "provider": {
          "@type": "Organization",
          "name": "Clean Solar Agency",
        },
        "serviceOutput": "5KW Home System for Rajesh Sharma, Indore",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ProjectShowcaseSection />
    </>
  );
}



