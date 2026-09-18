import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { id: 'banking-finance', name: 'Banking & Financial Institutions', desc: 'Navigating NRB directives, risk management, and capital adequacy.', image: 'https://images.unsplash.com/photo-1616803140344-6682afb13cda?q=80&w=2070&auto=format&fit=crop' },
  { id: 'hydropower-renewable', name: 'Hydropower & Renewable Energy', desc: 'FDI structuring, PPA advisory, and complex capital modeling.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop' },
  { id: 'tourism-hospitality', name: 'Tourism & Hospitality', desc: 'Asset valuation, tax incentives, and robust revenue management.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop' },
  { id: 'manufacturing-trading', name: 'Manufacturing & Trading', desc: 'Supply chain optimization, cost accounting, and VAT strategy.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
  { id: 'ngo-ingo', name: 'NGOs & INGOs', desc: 'SWC compliance, donor reporting, and transparent fund management.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop' },
  { id: 'technology-startups', name: 'Technology & Startups', desc: 'SaaS revenue recognition, equity structuring, and R&D strategies.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { id: 'education-institutions', name: 'Education Institutions', desc: 'Institutional finance, tax structuring, and compliance reporting.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop' },
  { id: 'healthcare-pharma', name: 'Healthcare & Pharmaceuticals', desc: 'Clinical compliance audits, operational finance, and tax efficiency.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop' },
  { id: 'real-estate-construction', name: 'Real Estate & Construction', desc: 'Project financing, property portfolio tax planning, and valuation.', image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop' }
];

const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.industry-panel',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 md:py-12 bg-primary-dark-blue border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4 leading-tight">
              Deep Sector Expertise <br className="hidden md:block"/>
              <span className="text-[#a5caff]">Driving Sector Growth</span>
            </h2>
            <p className="text-lg text-text-secondary font-light">
              We bring specialized knowledge and global best practices to Nepal's key economic sectors, ensuring strategic alignment and regulatory confidence.
            </p>
          </div>
          <Link to="/industries" className="hidden md:flex items-center text-white hover:text-royal-blue transition-colors font-medium border-b border-white/20 hover:border-royal-blue pb-1 mt-6 md:mt-0">
            Explore All Industries
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, idx) => (
            <Link to={`/industries/${ind.id}`} key={idx} className="industry-panel group relative h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-deep-navy block">
              <img src={ind.image} alt={ind.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" />
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end bg-gradient-to-t from-primary-dark-blue via-primary-dark-blue/60 to-transparent">
                <div className="flex justify-between items-end transform transition-transform duration-500 group-hover:-translate-y-1">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-1 group-hover:text-royal-blue transition-colors">{ind.name}</h3>
                    <p className="text-sm text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-snug max-w-[90%]">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
