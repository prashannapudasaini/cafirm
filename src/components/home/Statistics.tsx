import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Client Engagements' },
  { value: 12, suffix: '+', label: 'Industries Served' },
  { value: 250, suffix: '+', label: 'Advisory Projects' }
];

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in the section
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );

      // Number count up animation
      countersRef.current.forEach((counter, index) => {
        if (!counter) return;
        
        const targetValue = stats[index].value;
        
        gsap.to(counter, {
          innerHTML: targetValue,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary-dark-blue relative overflow-hidden z-10">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline mb-2">
                <span 
                  ref={el => { countersRef.current[index] = el; }} 
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight"
                >
                  0
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-royal-blue ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm md:text-base text-text-secondary uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
