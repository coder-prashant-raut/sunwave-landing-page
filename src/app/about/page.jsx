// app/about/page.jsx
import AboutUs from '../../components/AboutUs.jsx';

export const metadata = {
  title: 'About Us | Sunwave Solar - Trusted Solar Company in Pune',
  description:
    'Sunwave Solar is a Pune-based solar energy company offering affordable, high-quality solar panel solutions for homes, businesses, and industries across India. We help you switch to clean energy and save big on electricity bills.',
  openGraph: {
    title: 'About Us | Sunwave Solar - Leading Solar Panel Company in Pune',
    description:
      'Join thousands of happy customers switching to solar energy with Sunwave Solar — trusted provider of solar panel installation and maintenance services in Pune and all over India.',
    url: 'https://www.sunwavesolar.in/about',
    type: 'website',
    locale: 'en_IN',
  },
};


export default function AboutPage() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
