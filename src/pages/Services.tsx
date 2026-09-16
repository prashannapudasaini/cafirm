import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';

/* 
  SEO RECOMMENDATIONS
  Title: Premium Strategic Advisory & CA Services in Nepal
  Meta Description: Explore our comprehensive suite of enterprise-grade advisory services including Audit, Tax, Corporate Restructuring, FDI, and Risk Management in Nepal.
*/

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Slight delay to ensure DOM is ready and styles are applied
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Animate hero text
        gsap.fromTo('.services-hero-text', 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );

        // Animate the cards
        gsap.fromTo('.service-card',
          { opacity: 0, y: 30 },
          { 
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: {
              trigger: '.services-grid',
              start: 'top 85%'
            }
          }
        );
      }, containerRef);
      
      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-dark-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="services-hero-text text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6">
            Premium Strategic <span className="text-royal-blue">Advisory Services</span>
          </h1>
          <p className="services-hero-text text-xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            Delivering deep regulatory expertise and business-focused intelligence to empower Nepal's most ambitious enterprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 services-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(service.link)}
                className="service-card bg-white rounded-2xl overflow-hidden group cursor-pointer flex flex-col shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 active:scale-[0.98]"
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-dark-blue/20 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-heading font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {service.shortDesc}
                  </p>
                  <div className="inline-flex items-center text-sm font-bold text-royal-blue mt-auto">
                    Explore Service Details
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
