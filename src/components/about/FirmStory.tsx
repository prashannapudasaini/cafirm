import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const FirmStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-image',
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

      gsap.fromTo(
        '.story-content > *',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.1,
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
    <section ref={containerRef} className="py-8 md:py-10 lg:py-12 bg-white dark:bg-[#031B4E] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="story-image relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern boardroom meeting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark-blue/10 mix-blend-multiply" />
          </div>

          {/* Right: Content */}
          <div className="story-content flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-8 leading-tight">
              Our Story
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
              Jay & Ajay Associates was founded with a simple mission: to provide businesses with reliable financial guidance, transparent advisory services, and compliance solutions that enable sustainable growth.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light border-l-4 border-royal-blue pl-6">
              From startups to established enterprises, we partner with clients to simplify financial complexity and create long-term value through strategic expertise and professional integrity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirmStory;
