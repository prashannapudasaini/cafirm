import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
          '-=0.6'
        );

        // Gentle floating animation loop
        gsap.to('.floating-card-1', {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        gsap.to('.floating-card-2', {
          y: 15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1
        });
        gsap.to('.floating-card-3', {
          y: -10,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5
        });
        gsap.to('.floating-card-4', {
          y: 12,
          duration: 4.5,
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
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-primary-dark-blue via-[#0a2f7a] to-white"
    >
      {/* Subtle animated glass layers */}
      <div className="hero-glass absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="hero-glass absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary-dark-blue/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 55/45 Layout */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 relative z-10">
        
        {/* Left Content (55%) */}
        <div ref={leftContentRef} className="flex flex-col justify-center pr-0 lg:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white mb-6 leading-tight">
            Driving Growth, Governance, <br className="hidden md:block" />
            and Trust in <span className="text-[#a5caff]">Nepal's Dynamic Economy</span>
          </h1>
          
          <p className="text-xl text-white font-medium mb-4 leading-relaxed">
            A premier strategic partner for forward-thinking enterprises.
          </p>

          <p className="text-base text-white/90 mb-10 font-light leading-relaxed max-w-xl">
            We deliver premium advisory, assurance, and tax solutions that empower businesses to navigate complexity with confidence, optimize performance, and achieve sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link to="/contact" className="px-8 py-4 bg-white text-primary-dark-blue rounded-xl font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-medium text-lg hover:bg-white/20 transition-all active:scale-[0.98] flex items-center justify-center">
              Explore Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 font-medium text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#88baff] shrink-0" />
              <span>Audit & Assurance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#88baff] shrink-0" />
              <span>Tax Advisory</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#88baff] shrink-0" />
              <span>Corporate Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#88baff] shrink-0" />
              <span>FDI Support</span>
            </div>
          </div>
        </div>

        {/* Right Visual (45%) */}
        <div ref={rightContentRef} className="relative hidden lg:flex items-center justify-center pl-4">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
            {/* Using a South Asian/Nepali corporate meeting image */}
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1969&auto=format&fit=crop" 
              alt="Nepali CA professionals reviewing financial statements" 
              className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 bg-primary-dark-blue/20 mix-blend-multiply" />
          </div>

          {/* Floating Glass Cards */}
          <div className="floating-card floating-card-1 absolute top-[15%] -left-[10%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-xl shadow-xl flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-royal-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-dark-blue">Tax Advisory</p>
            </div>
          </div>

          <div className="floating-card floating-card-2 absolute bottom-[25%] -right-[15%] bg-primary-dark-blue/90 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Audit & Assurance</p>
            </div>
          </div>

          <div className="floating-card floating-card-3 absolute top-[40%] -right-[10%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-xl shadow-xl flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-royal-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-dark-blue">Corporate Services</p>
            </div>
          </div>

          <div className="floating-card floating-card-4 absolute bottom-[10%] -left-[5%] bg-primary-dark-blue/90 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">FDI Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
