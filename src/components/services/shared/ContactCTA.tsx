import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
}

export const ContactCTA = ({
  title = "Fortify Your Enterprise Today",
  description = "Partner with our senior advisory team to build a resilient, institutional-grade architecture.",
  ctaText = "Schedule a Consultation",
  ctaLink = "/contact",
  bgImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
}: ContactCTAProps) => {
  return (
    <section className="py-24 bg-primary-dark-blue text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-luminosity"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
          {description}
        </p>
        <Link to={ctaLink} className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
          {ctaText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};
