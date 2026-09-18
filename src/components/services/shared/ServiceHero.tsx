import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceHeroProps {
  badgeText?: string;
  title1: string;
  title2: string;
  description: string;
  bgImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export const ServiceHero = ({
  badgeText = "Premium Advisory Service",
  title1,
  title2,
  description,
  bgImage,
  ctaText = "Assess Your Risk Exposure",
  ctaLink = "/contact"
}: ServiceHeroProps) => {
  return (
    <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            <ShieldCheck className="w-4 h-4 text-[#a5caff]" />
            <span>{badgeText}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
            {title1} <br />
            <span className="text-[#a5caff]">{title2}</span>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={ctaLink} className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
