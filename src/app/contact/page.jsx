

import ContactPage from "../../components/ContactForm";

export const metadata = {
  title: "Contact Us | Sunwave Solar - Pune's Trusted Solar Experts",
  description:
    "Get in touch with Sunwave Solar for expert solar panel consultations, installations, and support in Pune and across India. Let's power your future with clean, affordable energy.",
  openGraph: {
    title: "Contact Sunwave Solar - Reach India’s Top Solar Experts",
    description:
      "Have questions about solar power or want a custom quote? Contact Sunwave Solar for reliable service, affordable solutions, and expert guidance in Pune and beyond.",
    url: "https://www.sunwavesolar.in/contact",
    
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
