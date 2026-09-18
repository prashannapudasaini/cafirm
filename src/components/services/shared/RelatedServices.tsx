import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RelatedService {
  tag?: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

interface RelatedServicesProps {
  title?: string;
  services: RelatedService[];
}

export const RelatedServices = ({
  title = "Continue Exploring",
  services
}: RelatedServicesProps) => {
  return (
    <section className="py-20 bg-white dark:bg-[#020A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 animate-up">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-2">{title}</h2>
          <div className="w-16 h-1 bg-royal-blue rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">{service.tag || "Related Service"}</span>
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              </div>
              <Link to={service.link} className="inline-flex items-center text-sm font-bold text-primary-dark-blue dark:text-white group-hover:text-royal-blue transition-colors">
                {service.linkText || "Explore Service"} <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
