import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Compass, Target } from 'lucide-react';

const VisionMission = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vm-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={containerRef} className="py-8 md:py-10 bg-primary-dark-blue relative border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark-blue to-deep-navy pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="vm-card glass-card rounded-[2rem] overflow-hidden flex flex-col group h-full">
            <div className="relative h-48 w-full overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Business growth roadmap" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary-dark-blue/40 mix-blend-multiply" />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-royal-blue/20 rounded-xl text-royal-blue">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed font-light flex-grow">
                To become the most trusted financial advisory and chartered accountancy firm, empowering businesses through expertise, innovation, and ethical practice.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card glass-card rounded-[2rem] overflow-hidden flex flex-col group h-full">
            <div className="relative h-48 w-full overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional financial consultation" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary-dark-blue/40 mix-blend-multiply" />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-white border border-white/10">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed font-light flex-grow">
                To deliver exceptional accounting, audit, taxation, and advisory services that support informed decision-making and long-term success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
