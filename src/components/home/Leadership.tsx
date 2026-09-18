import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Briefcase } from 'lucide-react';

const leaders = [
  {
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    desc: '20+ years of experience in international tax law and corporate restructuring.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'Head of Audit',
    desc: 'Former Big 4 partner specializing in complex financial instruments and compliance.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of Advisory',
    desc: 'Expert in M&A strategy, valuation, and post-merger integration.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  }
];

const Leadership = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.leader-card',
        { opacity: 0, scale: 0.95, filter: 'blur(5px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-32 bg-deep-navy relative border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6">
            Meet Our <span className="text-[#a5caff]">Leadership</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
            Guided by industry veterans who have shaped the financial landscapes of Fortune 500 companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card group relative rounded-[2rem] overflow-hidden aspect-[3/4]">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue via-primary-dark-blue/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="glass-panel p-6 rounded-2xl border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-white">{leader.name}</h3>
                      <p className="text-royal-blue font-medium">{leader.role}</p>
                    </div>
                    <a href="#" className="text-white/50 hover:text-white transition-colors">
                      <Briefcase className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
