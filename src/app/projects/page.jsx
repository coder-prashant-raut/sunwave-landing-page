import ProjectShowcaseSection from "../../components/ProjectShowcaseSection.jsx";

export const metadata = {
  title: "Solar Project Portfolio | Sunwave Solar - Residential & Industrial Installs",
  description:
    "Explore Sunwave Solar’s portfolio of successful residential, commercial, and industrial solar installations across Pune and India. See how we’re delivering clean energy and savings nationwide.",
  openGraph: {
    title: "Sunwave Solar Projects | Powering a Greener India",
    description:
      "Browse our latest solar panel installations for homes, businesses, and factories. Sunwave Solar is trusted for clean energy solutions across India.",
    url: "https://www.sunwavesolar.in/projects",
    siteName: "Sunwave Solar",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?q=80", // You can replace this with your real project image later
        width: 1200,
        height: 630,
        alt: "Sunwave Solar Project Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunwave Solar Projects | See Our Latest Work",
    description:
      "Discover how Sunwave Solar is transforming rooftops into power stations — one project at a time across India.",
    images: [
      "https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?q=80",
    ],
  },
};



export default function ProjectsPage() {
 const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Solar Project Portfolio | Sunwave Solar",
  description:
    "Browse Sunwave Solar’s portfolio of high-performance solar panel installations across India, including homes, industries, and commercial rooftops.",
  url: "https://www.sunwavesolar.in/projects",
  mainEntity: [
    {
      "@type": "Service",
      serviceType: "Industrial Solar Installation",
      areaServed: "India",
      provider: {
        "@type": "Organization",
        name: "Sunwave Solar",
        url: "https://www.sunwavesolar.in",
      },
      serviceOutput: "50KW Rooftop Solar System installed at Dukat Industries, Pune",
    },
    {
      "@type": "Service",
      serviceType: "Residential Solar Panel Setup",
      areaServed: "India",
      provider: {
        "@type": "Organization",
        name: "Sunwave Solar",
        url: "https://www.sunwavesolar.in",
      },
      serviceOutput: "5KW Home Solar System for Mr. Rajesh Sharma, Indore",
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



