import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import AboutSection from '../components/home/AboutSection';
import ServicesShowcase from '../components/home/ServicesShowcase';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import Leadership from '../components/home/Leadership';
import ClientSuccess from '../components/home/ClientSuccess';
import Insights from '../components/home/Insights';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-primary-dark-blue min-h-screen">
      <Hero />
      <TrustedBy />
      <AboutSection />
      <ServicesShowcase />
      <WhyChooseUs />
      <Industries />
      <Leadership />
      <ClientSuccess />
      <Insights />
      <FinalCTA />
    </div>
  );
}
