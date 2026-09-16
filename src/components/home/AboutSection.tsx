import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo(
        '.about-image',
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
    <section ref={containerRef} className="py-10 md:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="about-image relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="CA Partners discussing strategy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-primary-dark-blue/10 mix-blend-multiply" />

            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center space-x-4">
              <Award className="w-10 h-10 text-royal-blue" />
              <div>
                <p className="text-3xl font-heading font-bold text-primary-dark-blue">15+</p>
                <p className="text-sm font-medium text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content flex flex-col justify-center">
            <h2 className="text-sm font-bold text-royal-blue uppercase tracking-widest mb-3">About The Firm</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-primary-dark-blue mb-6 leading-tight">
              Empowering Enterprise Growth & Corporate Governance.
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jay & Ajay Associates is a trusted strategic partner to some of Nepal's most forward-thinking enterprises. We deliver premium advisory and assurance solutions rooted in excellence, integrity, and long-term client success.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Beyond traditional compliance, we provide practical, business-focused insights that help our clients navigate complex market dynamics, fortify their operations, and achieve sustainable strategic growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-dark-blue/5 rounded-lg text-royal-blue mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark-blue mb-1">Strategic Advisory</h4>
                  <p className="text-sm text-gray-600">Actionable business intelligence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-dark-blue/5 rounded-lg text-royal-blue mt-1">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark-blue mb-1">Sustainable Growth</h4>
                  <p className="text-sm text-gray-600">Focused on long-term outcomes.</p>
                </div>
              </div>
            </div>

            <div>
              <Link to="/about" className="inline-flex items-center text-royal-blue font-semibold hover:text-primary-dark-blue transition-colors group">
                Discover Our Story
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
