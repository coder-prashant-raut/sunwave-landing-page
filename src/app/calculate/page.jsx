// ✅ app/calculate/page.jsx

export const metadata = {
  title: "Solar Savings Calculator | Estimate Electricity Bill Reduction",
  description:
    "Use our advanced solar savings calculator to estimate your money saving by switching to solar power.",
  openGraph: {
    title: "Estimate Solar Savings | Clean Solar",
    description:
      "Reduce your electricity bill using our free solar calculator for India.",
    url: "https://your-domain.com/calculate",
    images: [
      {
        url: "https://your-domain.com/images/og-estimate.jpg",
        width: 1200,
        height: 630,
        alt: "Solar Savings Estimation",
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
