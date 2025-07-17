

import ContactPage from "../../components/ContactForm";

export const metadata = {
  title: "Contact Us | Clean Solar Agency",
  description: "Get in touch with Clean Solar for solar panel installation inquiries and consultations in India.",
  openGraph: {
    title: "Contact Clean Solar Agency",
    description: "Reach out to India’s top solar provider for custom solar estimates and project support.",
    url: "https://your-domain.com/contact",
    images: [
      {
        url: "https://your-domain.com/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Clean Solar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {



  
  return (
    <ContactPage/>
  );
}
