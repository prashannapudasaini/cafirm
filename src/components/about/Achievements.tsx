import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Users, Clock, Briefcase, HeartHandshake } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-royal-blue" />,
    value: 500,
    suffix: '+',
    label: 'Clients Served',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
  },
  {
    icon: <Clock className="w-6 h-6 text-royal-blue" />,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <Briefcase className="w-6 h-6 text-royal-blue" />,
    value: 25,
    suffix: '+',
    label: 'Industries Supported',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-royal-blue" />,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
  }
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in cards
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Animate numbers
      const counters = gsap.utils.toArray<HTMLElement>('.counter-value');
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: 'power3.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-8 md:py-10 bg-primary-dark-blue relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 z-0">
                <img 
                  src={stat.image} 
                  alt={stat.label} 
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-primary-dark-blue/80 mix-blend-multiply" />
              </div>

              <div className="relative z-10 p-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 dark:bg-[#031B4E]/10 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="counter-value text-4xl md:text-5xl font-heading font-bold text-white" data-target={stat.value}>
                    0
                  </span>
                  <span className="text-3xl font-heading font-bold text-royal-blue ml-1">{stat.suffix}</span>
                </div>
                <p className="text-sm text-text-secondary font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
