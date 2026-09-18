import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Globe, Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Jay Sharma',
    role: 'Managing Partner',
    desc: '20+ years of expertise in corporate strategy, restructuring, and M&A advisory for Fortune 500 companies.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Ajay Patel',
    role: 'Audit & Assurance Director',
    desc: 'Former Big 4 auditor specializing in complex regulatory compliance and international financial reporting.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Priya Singh',
    role: 'Tax Advisory Head',
    desc: 'Renowned expert in cross-border taxation, transfer pricing, and strategic corporate tax planning.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  }
];

const LeadershipTeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.leader-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-8 md:py-10 bg-primary-dark-blue border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
            Leadership <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light">
            Guided by industry veterans with a singular focus on your financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div 
              key={idx} 
              className="leader-card glass-card rounded-[2rem] overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue via-transparent to-transparent opacity-80" />
                
                {/* Social Links on Hover */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-royal-blue transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-royal-blue transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow bg-white/5 dark:bg-[#020A1A]/5">
                <h3 className="text-2xl font-heading font-semibold text-white mb-1 group-hover:text-royal-blue transition-colors">{leader.name}</h3>
                <p className="text-sm font-medium text-royal-blue mb-4 uppercase tracking-wider">{leader.role}</p>
                <p className="text-sm text-text-secondary font-light leading-relaxed flex-grow">
                  {leader.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
