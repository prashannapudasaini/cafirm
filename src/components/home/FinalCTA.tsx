import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
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
    <section ref={containerRef} className="py-10 md:py-12 px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="cta-content rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-br from-primary-dark-blue via-royal-blue to-white shadow-[0_20px_80px_-20px_rgba(15,82,186,0.5)] border border-black/5">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl bg-white/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 leading-tight">
              Let's Strengthen Your <br className="hidden sm:block" />
              Financial Foundation
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Partner with experts who understand Nepal's business landscape and compliance environment.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="px-8 py-4 bg-primary-dark-blue text-white rounded-xl font-medium transition-all hover:bg-royal-blue hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center w-full sm:w-auto justify-center">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white border border-gray-200 text-primary-dark-blue rounded-xl font-medium hover:bg-gray-50 transition-all active:scale-[0.98] w-full sm:w-auto text-center shadow-sm hover:shadow-md">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
