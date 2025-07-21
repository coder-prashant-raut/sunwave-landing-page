// ✅ app/calculate/page.jsx

export const metadata = {
  title: "Solar Savings Calculator | Cut Electricity Costs with Sunwave Solar",
  description:
    "Use Sunwave Solar’s advanced solar calculator to estimate how much you can save on your electricity bills by switching to solar energy. 100% free, accurate, and designed for Indian households and businesses.",
  openGraph: {
    title: "Estimate Your Solar Savings | Sunwave Solar India",
    description:
      "Try our free solar savings calculator to find out how much you can save on power bills by installing solar panels. Get accurate savings tailored to your usage and location.",
    url: "https://www.sunwavesolar.in/calculate",
    images: [
      {
        url: "https://www.sunwavesolar.in/images/og-estimate.jpg",
        width: 1200,
        height: 630,
        alt: "Solar Savings Estimation by Sunwave Solar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


// ✅ just import directly
import CalculateClient from "./CalculateClient";

export default function CalculatePage() {
  return <CalculateClient />;
}
