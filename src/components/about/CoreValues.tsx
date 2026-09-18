import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Shield, Star, Lock, Eye, Lightbulb, HeartHandshake } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    desc: 'Uncompromising ethical standards in every financial assessment.',
    icon: <Shield className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2024&auto=format&fit=crop'
  },
  {
    title: 'Excellence',
    desc: 'Delivering world-class precision and strategic rigor.',
    icon: <Star className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Confidentiality',
    desc: 'Absolute protection of your sensitive corporate data.',
    icon: <Lock className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'
  },
  {
    title: 'Transparency',
    desc: 'Clear, jargon-free communication and reporting.',
    icon: <Eye className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: 'Innovation',
    desc: 'Leveraging technology for modern financial modeling.',
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Client Success',
    desc: 'Your financial growth is our ultimate metric of success.',
    icon: <HeartHandshake className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
  }
];

const CoreValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={containerRef} className="py-8 md:py-10 bg-deep-navy relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg text-text-secondary font-light max-w-2xl mx-auto">
            The foundational principles that guide every audit, advisory, and tax engagement we undertake.
          </p>
        </div>

        {/* 16px gap (gap-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, idx) => (
            <div key={idx} className="value-card glass-card rounded-xl flex items-center overflow-hidden group cursor-pointer h-28">
              <div className="w-28 h-full relative overflow-hidden shrink-0">
                <img 
                  src={value.image} 
                  alt={value.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary-dark-blue/50 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-royal-blue/80 backdrop-blur-sm flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-royal-blue transition-colors">{value.title}</h3>
                <p className="text-xs text-text-secondary leading-snug font-light">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
