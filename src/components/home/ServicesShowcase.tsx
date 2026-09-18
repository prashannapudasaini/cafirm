import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/services';

const ServicesShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Show only 6 services on the home page as requested
  const displayServices = servicesData.slice(0, 6);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-12 bg-primary-dark-blue relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4 leading-tight">
              Premium Strategic <span className="text-[#a5caff]">Advisory Services</span>
            </h2>
            <p className="text-lg text-text-secondary font-light">
              Transforming complex business challenges into opportunities for sustainable growth and operational excellence.
            </p>
          </div>
          <Link to="/services" className="hidden md:flex items-center text-white hover:text-royal-blue transition-colors font-medium border-b border-white/20 hover:border-royal-blue pb-1 mt-6 md:mt-0">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Dense 3-column layout with 16px gap (gap-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayServices.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.link)}
              className="service-card glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col transition-transform active:scale-[0.98]"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary-dark-blue/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 dark:bg-[#020A1A]/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-royal-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary font-light leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {service.shortDesc}
                </p>
                <div className="inline-flex items-center text-sm font-medium text-white group-hover:text-royal-blue transition-colors mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/services" className="inline-flex items-center px-6 py-3 bg-white/10 dark:bg-[#020A1A]/10 text-white rounded-lg hover:bg-white/20 dark:bg-[#020A1A]/20 transition-colors">
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
