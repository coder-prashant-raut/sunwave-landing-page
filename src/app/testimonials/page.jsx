import TestimonialMasterpiece from "../../components/TestimonialMasterpiece.jsx";

export const metadata = {
  title: "Client Testimonials | Clean Solar Agency",
  description:
    "Hear from real customers across India who trusted Clean Solar Agency. Read genuine reviews from homeowners, factory owners, and architects.",
  openGraph: {
    title: "Client Testimonials | Clean Solar Agency",
    description:
      "Discover how Clean Solar transformed homes and businesses with solar power. Real client reviews and feedback.",
    url: "https://www.cleansolar.in/testimonials",
    siteName: "Clean Solar Agency",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1682145578037-0369879262a2?q=80",
        width: 1200,
        height: 630,
        alt: "Clean Solar customer testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What People Say About Clean Solar",
    description:
      "Real feedback from our clients across India — industrial and domestic.",
    images: [
      "https://plus.unsplash.com/premium_photo-1682145578037-0369879262a2?q=80",
    ],
  },
};

export default function TestimonialsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Client Testimonials - Clean Solar Agency",
    url: "https://www.cleansolar.in/testimonials",
    description:
      "Genuine client reviews from homeowners and business owners across India who installed solar with Clean Solar.",
    mainEntity: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Amit Verma",
        },
        reviewBody:
          "Clean Solar turned my factory into a power saver. In just months, my bills dropped significantly.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sonal Desai",
        },
        reviewBody:
          "Best decision I made for my family. Clean Solar delivered top-notch quality.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <TestimonialMasterpiece />
    </>
  );
}
