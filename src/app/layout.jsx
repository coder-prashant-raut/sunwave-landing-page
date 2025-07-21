// app/layout.jsx
import '../styles/globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Inter, Rubik } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata = {
  title: "Solar Panel Installation Company | Clean Solar Solutions India",
  description:
    "Top solar agency in India offering affordable solar panel installation for homes and businesses. Save energy and cut your electricity bills with us.",
  keywords:
    "solar panel installation, solar company India, clean energy, renewable energy, rooftop solar, save electricity bill",
  openGraph: {
    title: "Best Solar Company in India | Clean Solar",
    description: "Affordable rooftop solar panel installation for homes & offices.",
    url: "https://www.cleansolar.in",
    siteName: "Clean Solar",
    images: [
      {
        url: "https://www.cleansolar.in/og-image.jpg", // Replace with real image
        width: 1200,
        height: 630,
        alt: "Solar Panel Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Solar India",
    description: "Affordable and quality solar panel installation services.",
    images: ["https://www.cleansolar.in/og-image.jpg"], // Replace
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clean Solar Solutions India",
    url: "https://www.cleansolar.in",
    logo: "https://www.cleansolar.in/logo.png", // Replace with real logo
    sameAs: [
      "https://www.facebook.com/cleansolar",
      "https://www.instagram.com/cleansolar",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "Customer Service",
      areaServed: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cleansolar.in" />

        {/* Font Optimization */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
        <Header />
        <main className="pt-[160px] md:pt-[128px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
