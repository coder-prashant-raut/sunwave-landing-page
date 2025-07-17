

import '../styles/globals.css'



import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Inter } from 'next/font/google'


import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Solar Panel Installation Company | Clean Solar Solutions India",
  description:
    "Top solar agency in India offering affordable solar panel installation for homes and businesses. Save energy and cut your electricity bills with us.",
  keywords:
    "solar panel installation, solar company India, clean energy, renewable energy, rooftop solar, save electricity bill",
  openGraph: {
    title: "Best Solar Company in India | Clean Solar",
    description: "Affordable rooftop solar panel installation for homes & offices",
    url: "https://your-domain.com",
    siteName: "Clean Solar",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solar Panel Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({ children }) {
  
  return (


    <html lang="en">

      <head>
        {/* Google Fonts Link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main className="top-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
