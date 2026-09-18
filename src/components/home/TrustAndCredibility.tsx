import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, FileText, Scale, Landmark, Building2, Gavel } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const trustIndicators = [
  { icon: ShieldCheck, title: 'ICAN Professional Standards' },
  { icon: FileText, title: 'NFRS Compliance' },
  { icon: Scale, title: 'NSA Compliance' },
  { icon: Landmark, title: 'Income Tax Act Expertise' },
  { icon: Building2, title: 'Companies Act Advisory' },
  { icon: Gavel, title: 'Regulatory & Governance' }
];

const TrustAndCredibility = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trust-badge',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white dark:bg-[#020A1A] relative z-10 border-b border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-royal-blue uppercase tracking-widest">Trusted Expertise & Compliance</p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustIndicators.map((item, index) => (
            <div 
              key={index} 
              className="trust-badge glass-card bg-gray-50 dark:bg-[#0A1128] rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#020A1A] shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-400">
                <item.icon className="w-5 h-5 text-primary-dark-blue dark:text-white" />
              </div>
              <h3 className="text-sm font-semibold text-primary-dark-blue dark:text-white leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAndCredibility;
