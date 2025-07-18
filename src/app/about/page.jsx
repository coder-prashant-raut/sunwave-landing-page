// app/about/page.jsx
import AboutUs from '../../components/AboutUs.jsx';

export const metadata = {
  title: 'About Us | Sunwave Solar',
  description:
    'Learn more about Sunwave Solar — our mission, vision, and the clean energy solutions we provide across India.',
  openGraph: {
    title: 'About Us | Sunwave Solar',
    description:
      'We are a leading solar energy company in India helping homes and businesses go green with affordable solar power.',
    url: 'https://www.sunwavesolar.com/about',
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
