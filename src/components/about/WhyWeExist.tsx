import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const WhyWeExist = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exist-panel',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
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
    <section ref={containerRef} className="py-8 md:py-10 bg-white dark:bg-[#031B4E] relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="exist-panel relative rounded-[3rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(15,82,186,0.2)] bg-gradient-to-br from-white dark:from-[#031B4E] to-blue-50/50 border border-black/5">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Executive consultation" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#031B4E] via-white/95 dark:via-[#031B4E]/95 to-white/40 dark:to-[#031B4E]/40" />
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-24 max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-8 leading-tight">
              More Than Accountants.<br/>
              <span className="text-gradient">Strategic Business Partners.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
              We believe financial expertise should do more than ensure compliance. It should help organizations make better decisions, identify opportunities, manage risk, and build stronger futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
