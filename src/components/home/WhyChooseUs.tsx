import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BookOpen, ShieldCheck, FileCheck, HeartHandshake, Clock, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    id: 'deep-regulatory',
    title: 'Deep Regulatory Understanding',
    desc: 'Unmatched expertise in navigating Nepal’s complex financial, tax, and corporate laws.',
    icon: <BookOpen className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: 'global-standards',
    title: 'Global Standards',
    desc: 'Adhering to international best practices, tailored precisely for the Nepalese market.',
    icon: <FileCheck className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'partner-led',
    title: 'Partner-Led Service',
    desc: 'Direct engagement with senior partners ensuring premium quality and strategic focus on every engagement.',
    icon: <HeartHandshake className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ethical-independent',
    title: 'Ethical & Independent',
    desc: 'An unwavering commitment to professional integrity, independence, and objective advisory.',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2024&auto=format&fit=crop'
  },
  {
    id: 'business-focused',
    title: 'Business-Focused Solutions',
    desc: 'We look beyond the numbers to deliver actionable intelligence that drives enterprise growth.',
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'long-term',
    title: 'Long-Term Relationships',
    desc: 'Building enduring partnerships based on trust, consistent value creation, and mutual success.',
    icon: <Clock className="w-5 h-5 text-white" />,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'
  }
];

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reason-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
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
    <section ref={containerRef} className="py-10 bg-deep-navy relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4">
              The Premium <span className="text-[#a5caff]">Advantage</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light">
              We merge analytical rigor with forward-thinking strategies to deliver unparalleled advisory services for Nepal's most ambitious enterprises.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-card">
              <Link to={`/advantage/${reason.id}`} className="glass-card rounded-2xl flex flex-col sm:flex-row overflow-hidden group cursor-pointer h-auto sm:h-32 block">
                <div className="sm:w-32 h-40 sm:h-full relative overflow-hidden shrink-0">
                  <img 
                    src={reason.image} 
                    alt={reason.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-dark-blue/40 mix-blend-multiply" />
                </div>
                
                <div className="p-5 flex flex-col justify-center flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-1.5 bg-royal-blue rounded-lg shrink-0">
                      {reason.icon}
                    </div>
                    <h3 className="text-base font-heading font-semibold text-white group-hover:text-royal-blue transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-snug mb-3">
                    {reason.desc}
                  </p>
                  <span className="text-xs font-semibold text-royal-blue uppercase tracking-wider group-hover:text-white transition-colors flex items-center">
                    Read Advisory <span className="ml-1 text-[10px]">▶</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
