import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Calculator, FileText, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-glass',
        { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.2 }
      )
        .fromTo(
          leftContentRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=1'
        )
        .fromTo(
          rightContentRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          '.floating-card',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          '-=0.6'
        );

      // Floating animation loops
      gsap.to('.floating-card-1', {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.floating-card-2', {
        y: 12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });
      gsap.to('.floating-card-3', {
        y: -15,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });
      gsap.to('.floating-card-4', {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-primary-dark-blue via-[#0a2f7a] to-white dark:to-[#020A1A]"
    >
      {/* Subtle animated glass layers */}
      <div className="hero-glass absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/10 dark:bg-[#020A1A]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="hero-glass absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary-dark-blue/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left Content */}
        <div ref={leftContentRef} className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white mb-6 leading-tight">
            Building Financial Confidence Through <br className="hidden lg:block" />
            <span className="text-[#a5caff]">Expertise & Integrity</span>
          </h1>
          
          <p className="text-lg text-white/90 max-w-lg mb-10 font-light leading-relaxed">
            For years, Jay & Ajay Associates has helped businesses, entrepreneurs, and organizations navigate complex financial, taxation, compliance, and audit challenges with clarity and confidence.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="px-8 py-4 bg-white dark:bg-[#020A1A] text-primary-dark-blue dark:text-white rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/10 dark:bg-[#020A1A]/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 dark:bg-[#020A1A]/20 transition-all active:scale-[0.98] flex items-center justify-center">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div ref={rightContentRef} className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Corporate Strategy Meeting" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark-blue/60 to-transparent mix-blend-multiply" />
          </div>

          {/* Floating Glass Cards */}
          <div className="floating-card floating-card-1 absolute top-[5%] -left-[5%] bg-white/80 dark:bg-[#020A1A]/80 backdrop-blur-xl border border-white/50 p-3 rounded-xl shadow-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Calculator className="w-4 h-4 text-royal-blue" />
            </div>
            <p className="text-sm font-semibold text-primary-dark-blue dark:text-white pr-2">Tax Planning</p>
          </div>

          <div className="floating-card floating-card-2 absolute top-[25%] -right-[5%] bg-primary-dark-blue/90 backdrop-blur-xl border border-white/20 p-3 rounded-xl shadow-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-[#020A1A]/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm font-semibold text-white pr-2">Audit Reports</p>
          </div>

          <div className="floating-card floating-card-3 absolute bottom-[25%] -left-[10%] bg-white/90 dark:bg-[#020A1A]/90 backdrop-blur-xl border border-white/50 p-3 rounded-xl shadow-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-royal-blue" />
            </div>
            <p className="text-sm font-semibold text-primary-dark-blue dark:text-white pr-2">Financial Compliance</p>
          </div>

          <div className="floating-card floating-card-4 absolute bottom-[5%] -right-[5%] bg-primary-dark-blue/90 backdrop-blur-xl border border-white/20 p-3 rounded-xl shadow-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-[#020A1A]/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm font-semibold text-white pr-2">Business Growth</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;
