import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const industries = [
  { name: 'Banking & Finance', desc: 'Regulatory compliance, risk modeling, and capital optimization.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Healthcare', desc: 'Revenue cycle management and clinical compliance audits.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Technology', desc: 'SaaS revenue recognition, R&D tax credits, and scaling strategies.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { name: 'Education', desc: 'Endowment accounting, grant audits, and institutional finance.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Manufacturing', desc: 'Supply chain cost analysis, inventory valuation, and tax structuring.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Hospitality', desc: 'Operational margin analysis and real-time financial reporting.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Real Estate', desc: 'Property portfolio tax planning and investment yield analysis.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Retail', desc: 'Omnichannel inventory accounting and margin optimization.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop' },
];

const AboutIndustries = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-industry-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.05,
          ease: 'power2.out',
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
    <section ref={containerRef} className="py-8 md:py-10 bg-deep-navy relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-lg text-text-secondary font-light max-w-2xl mx-auto">
            Providing specialized financial clarity across diverse sectors.
          </p>
        </div>

        {/* Compact grid (4 columns on large desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, idx) => (
            <div key={idx} className="about-industry-card group relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-primary-dark-blue">
              <div className="absolute inset-0 bg-deep-navy/80 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-40" />
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
              />
              
              <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end bg-gradient-to-t from-primary-dark-blue via-primary-dark-blue/80 to-transparent">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-lg font-heading font-semibold text-white mb-1 group-hover:text-royal-blue transition-colors">{ind.name}</h3>
                  <p className="text-xs text-text-secondary/90 leading-snug">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIndustries;
