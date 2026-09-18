import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: '/hero/hero1.jpg',
    title: (
      <>
        Excellence in <br className="hidden md:block" />
        <span className="text-[#a5caff]">Audit & Assurance</span>
      </>
    ),
    subtitle: "Upholding Integrity and Transparency",
    description: "Delivering meticulous audit services to ensure your financial statements present a true and fair view of your business performance."
  },
  {
    image: '/hero/hero2.jpg',
    title: (
      <>
        Strategic Business <br className="hidden md:block" />
        <span className="text-[#a5caff]">Advisory Services</span>
      </>
    ),
    subtitle: "Navigating Complexities, Driving Growth",
    description: "Partner with our expert consultants to overcome challenges, optimize operations, and unlock sustainable value in Nepal's dynamic market."
  },
  {
    image: '/hero/hero3.jpg',
    title: (
      <>
        Expert Tax <br className="hidden md:block" />
        <span className="text-[#a5caff]">Consulting</span>
      </>
    ),
    subtitle: "Optimizing Your Tax Strategy",
    description: "Comprehensive tax planning and compliance services designed to minimize liabilities and ensure adherence to local and international regulations."
  },
  {
    image: '/hero/hero4.jpg',
    title: (
      <>
        Empowering Financial <br className="hidden md:block" />
        <span className="text-[#a5caff]">Decisions</span>
      </>
    ),
    subtitle: "Data-Driven Insights for the Future",
    description: "Leveraging advanced analytics and financial expertise to help you make informed decisions that propel your business forward."
  }
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4000); // 4 seconds to allow reading

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initial animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.1 }
      );

      // Gentle floating animation loop for cards
      gsap.to('.floating-card-1', { y: -15, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.floating-card-2', { y: 15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
      gsap.to('.floating-card-3', { y: -10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
      gsap.to('.floating-card-4', { y: 12, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate text on slide change
    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [currentSlideIndex]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-primary-dark-blue"
    >
      {/* Background Slider */}
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.image} 
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt={`Hero background ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-[#031B4E]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031B4E]/95 via-[#031B4E]/70 to-transparent" />
        </div>
      ))}

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 relative z-10">
        
        {/* Left Content */}
        <div ref={contentRef} className="flex flex-col justify-center">
          <div ref={textContainerRef} className="min-h-[260px] md:min-h-[220px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white mb-6 leading-tight">
              {heroSlides[currentSlideIndex].title}
            </h1>
            
            <p className="text-xl text-white font-medium mb-4 leading-relaxed">
              {heroSlides[currentSlideIndex].subtitle}
            </p>

            <p className="text-base text-white/90 mb-10 font-light leading-relaxed max-w-xl">
              {heroSlides[currentSlideIndex].description}
            </p>
          </div>

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

        {/* Right Visual (Floating Cards) */}
        <div className="relative hidden lg:flex items-center justify-center h-full">
          <div className="floating-card-1 absolute top-[15%] right-[10%] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl flex items-center space-x-4 w-64">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Tax Advisory</p>
            </div>
          </div>

          <div className="floating-card-2 absolute bottom-[25%] left-[5%] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl flex items-center space-x-4 w-64">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Audit & Assurance</p>
            </div>
          </div>

          <div className="floating-card-3 absolute top-[45%] right-[0%] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl flex items-center space-x-4 w-64">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Corporate Services</p>
            </div>
          </div>

          <div className="floating-card-4 absolute bottom-[5%] right-[20%] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl flex items-center space-x-4 w-64">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
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
