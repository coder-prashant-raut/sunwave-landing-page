import TestimonialMasterpiece from "../../components/TestimonialMasterpiece.jsx";

export const metadata = {
  title: "Client Testimonials | Sunwave Solar - Trusted by Homes & Industries",
  description:
    "Read real testimonials from Sunwave Solar customers across India — including homeowners, factories, and architects. Discover how our solar solutions have helped reduce bills and boost energy independence.",
  openGraph: {
    title: "What Clients Say About Sunwave Solar | Real Reviews Across India",
    description:
      "See how Sunwave Solar has transformed homes, factories, and commercial spaces with clean solar power. Read trusted client testimonials from Pune and beyond.",
    url: "https://www.sunwavesolar.in/testimonials",
    siteName: "Sunwave Solar",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1682145578037-0369879262a2?q=80", // Placeholder image
        width: 1200,
        height: 630,
        alt: "Sunwave Solar client reviews and testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Stories | Sunwave Solar",
    description:
      "Real feedback from Sunwave Solar clients — from residential rooftops to industrial installations across India.",
    images: [
      "https://plus.unsplash.com/premium_photo-1682145578037-0369879262a2?q=80",
    ],
  },
};

export default function TestimonialsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Client Testimonials - Sunwave Solar",
    url: "https://www.sunwavesolar.in/testimonials",
    description:
      "Genuine client reviews from homeowners and business owners across India who installed solar with Sunwave Solar.",
    mainEntity: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Amit Verma",
        },
        reviewBody:
          "Sunwave Solar turned my factory into a power saver. In just months, my bills dropped significantly.",
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
          "Best decision I made for my family. Sunwave Solar delivered top-notch quality and amazing after-sales service.",
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
          name: "Ramesh Patil",
        },
        reviewBody:
          "Great experience from consultation to installation. My home's electricity bill is half now. Highly recommend Sunwave!",
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
