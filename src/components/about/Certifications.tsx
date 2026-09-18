import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { CheckCircle2, ShieldCheck, Award, FileCheck } from 'lucide-react';

const certifications = [
  { title: 'FCA Registered Firm', icon: <Award className="w-5 h-5 text-royal-blue" /> },
  { title: 'ISO 27001 Certified', icon: <ShieldCheck className="w-5 h-5 text-royal-blue" /> },
  { title: 'Public Company Accounting Oversight Board', icon: <CheckCircle2 className="w-5 h-5 text-royal-blue" /> },
  { title: 'Government Empanelled Auditors', icon: <FileCheck className="w-5 h-5 text-royal-blue" /> },
];

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-content > *',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
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
        '.cert-image',
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
    <section ref={containerRef} className="py-8 md:py-10 bg-white dark:bg-[#020A1A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="cert-content flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-8 leading-tight">
              Trusted. Certified.<br/>
              <span className="text-royal-blue">Compliant.</span>
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 font-light mb-10 max-w-lg leading-relaxed">
              We adhere strictly to global regulatory frameworks, maintaining the highest levels of accreditation to ensure your business remains secure and compliant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-100 dark:border-white/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2 bg-white dark:bg-[#020A1A] rounded-lg shadow-sm shrink-0">
                    {cert.icon}
                  </div>
                  <span className="text-sm font-semibold text-primary-dark-blue dark:text-white leading-snug">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cert-image relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2 border border-gray-100 dark:border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
              alt="Certification documents" 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-primary-dark-blue/5 mix-blend-multiply" />
            
            <div className="absolute top-6 right-6 w-20 h-20 bg-white/90 dark:bg-[#020A1A]/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-royal-blue opacity-80">
                <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[14px] font-bold tracking-widest fill-current uppercase">
                  <textPath href="#curve">
                    Certified • Compliant • Trusted • 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
