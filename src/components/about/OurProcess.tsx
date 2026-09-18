import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business operations and financial landscape.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
  },
  {
    num: '02',
    title: 'Analysis',
    desc: 'Rigorous assessment of risks, compliance, and growth opportunities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '03',
    title: 'Strategy',
    desc: 'Crafting bespoke tax, audit, and advisory roadmaps.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '04',
    title: 'Execution & Support',
    desc: 'Implementation and continuous proactive partnership.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2024&auto=format&fit=crop'
  }
];

const OurProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Line growth
      gsap.fromTo(
        '.timeline-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          }
        }
      );

      // Card reveals
      gsap.fromTo(
        '.process-step',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-8 md:py-10 bg-white dark:bg-[#020A1A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
            Our <span className="text-royal-blue">Process</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            A systematic, structured approach to delivering financial excellence.
          </p>
        </div>

        <div className="relative">
          {/* Continuous Line Background (Desktop) */}
          <div className="hidden md:block absolute top-[120px] left-[10%] right-[10%] h-[2px] bg-gray-200" />
          
          {/* Animated Line Progress */}
          <div className="timeline-line hidden md:block absolute top-[120px] left-[10%] right-[10%] h-[2px] bg-royal-blue origin-left" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="process-step flex flex-col items-center text-center">
                <div className="w-full aspect-[4/3] md:h-60 rounded-xl overflow-hidden mb-6 relative shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-dark-blue/20 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 dark:bg-[#020A1A]/90 backdrop-blur flex items-center justify-center font-heading font-bold text-primary-dark-blue dark:text-white shadow-md">
                    {step.num}
                  </div>
                </div>
                
                <div className="hidden md:flex w-6 h-6 rounded-full bg-white dark:bg-[#020A1A] border-4 border-royal-blue absolute top-[108px] z-20 shadow-md" />

                <h3 className="text-xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-2 mt-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light px-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
