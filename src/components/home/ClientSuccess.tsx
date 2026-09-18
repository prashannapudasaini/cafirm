import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const stories = [
  {
    client: 'National Manufacturing Conglomerate',
    challenge: 'Struggling with complex multi-company inventory reconciliation and facing significant VAT inefficiencies due to outdated compliance systems.',
    solution: 'Implemented a centralized ERP audit structure, optimized VAT credit mechanisms, and successfully navigated the IRD tax assessment.',
    outcome: 'Saved over NPR 15 Million in potential penalties and improved VAT recovery efficiency by 60%.'
  },
  {
    client: 'Multinational Infrastructure Developer',
    challenge: 'Required structural advisory for a large-scale project while navigating complex Department of Industry (DOI) and NRB foreign investment regulations.',
    solution: 'Designed a compliant FDI framework, managed all regulatory approvals, and established robust cross-border transfer pricing models.',
    outcome: 'Successfully cleared $20M+ FDI without regulatory bottlenecks, ensuring project commencement ahead of schedule.'
  },
  {
    client: 'Global INGO Operating in Nepal',
    challenge: 'Faced challenges aligning international donor reporting standards with stringent Social Welfare Council (SWC) and local tax compliance requirements.',
    solution: 'Developed a comprehensive compliance framework, conducted specialized fund audits, and restructured internal controls for transparent reporting.',
    outcome: 'Achieved zero-exception statutory audits and secured renewed donor funding through enhanced financial transparency.'
  }
];

const ClientSuccess = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-card',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.15,
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
    <section ref={containerRef} className="py-10 md:py-12 bg-white dark:bg-[#020A1A] relative z-10 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
            Client <span className="text-royal-blue">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Real challenges faced by businesses in Nepal. Strategic solutions delivered by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="story-card bg-gray-50 dark:bg-[#0A1128] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue/5 rounded-bl-[100px] pointer-events-none" />
              
              <h3 className="text-lg font-heading font-semibold text-primary-dark-blue dark:text-white mb-8 border-b border-gray-200 dark:border-white/20 pb-4">
                {story.client}
              </h3>

              <div className="space-y-6 flex-grow">
                <div>
                  <div className="flex items-center space-x-2 mb-2 text-red-600">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">The Challenge</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {story.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2 text-royal-blue">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Our Solution</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {story.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/20">
                <div className="flex items-center space-x-2 mb-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">The Outcome</span>
                </div>
                <p className="text-sm font-semibold text-primary-dark-blue dark:text-white leading-relaxed">
                  {story.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
