import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LongTerm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Clock className="w-4 h-4 text-royal-blue" />
              <span>Premium Advantage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Long-Term Relationships
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Building enduring institutional partnerships based on trust, continuity, and compounding strategic value.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-up">
          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            {/* Executive Introduction */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Executive Introduction</h3>
              <p className="mb-4">
                In an era defined by rapid corporate turnover and hyper-commoditized consulting services, the true value of a professional advisory relationship has often been degraded to a transactional exchange of fees for reports. This short-term paradigm serves neither the client nor the advisor.
              </p>
              <p>
                At our firm, we do not pursue transactions; we invest in institutional partnerships. We recognize that the most profound strategic insights and the most effective risk mitigation strategies cannot be formulated during a brief, isolated audit engagement. They require a deep, enduring understanding of the client’s historical trajectory, corporate culture, and long-term strategic ambitions. We measure our success not by the volume of our client roster, but by the generational longevity of the enterprises we advise.
              </p>
            </section>

            {/* Core Discussion */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Value of Institutional Continuity</h3>
              <p className="mb-4">
                When businesses frequently cycle through different audit and advisory firms in search of marginal cost savings, they suffer a massive loss of institutional knowledge. Every new engagement requires a steep, inefficient learning curve. Crucial nuances regarding complex intercompany transactions, legacy tax disputes, or the intricacies of the firm's supply chain must be repeatedly explained and rediscovered.
              </p>
              <p>
                A long-term advisory relationship eliminates this friction. When we partner with an enterprise over decades, our institutional memory becomes a formidable strategic asset for the client. We understand exactly why a specific corporate structure was implemented ten years ago; we remember the nuances of past IRD assessments; and we intimately understand the risk appetite of the Board of Directors. This continuity allows us to bypass the basics and immediately focus on high-level, value-additive strategic planning.
              </p>
            </section>

            {/* Nepal Business Context */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Partnership in the Nepalese Context</h3>
              <p className="mb-4">
                The backbone of the Nepalese economy is built on large family-owned conglomerates and tightly-held private enterprises that are currently navigating complex, multi-generational transitions. As founders look to pass control to the next generation, they require advisors who understand both the unwritten familial dynamics and the formal requirements of corporate governance under the Companies Act. 
              </p>
              <p className="mb-4">
                In Nepal, trust is the ultimate commercial currency. Navigating sensitive issues—such as family wealth structuring, aggressive succession planning, or managing complex disputes with local regulatory bodies—requires an advisor who has stood shoulder-to-shoulder with the founders through previous economic cycles and regulatory shifts.
              </p>
              <p>
                Our senior partners routinely serve as trusted confidants to the patriarchs, matriarchs, and executive boards of Nepal's most prominent business houses. We provide the stability, discretion, and unwavering loyalty required to successfully guide these enterprises through critical phases of scaling, modernization, and generational succession.
              </p>
            </section>

            {/* Strategic Perspective */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">A Strategic Perspective</h3>
              <p className="mb-4">
                A long-term relationship transforms our role from an external observer to a deeply invested strategic ally. Because our success is inextricably linked to the sustained growth of our clients, our advisory is inherently forward-looking. 
              </p>
              <p>
                We do not wait for the client to ask a question; we proactively monitor the horizon. If we foresee a shift in Nepal Rastra Bank (NRB) lending policies that could threaten the client's capital structure, or if we identify an impending change in international tax treaties that could impact their foreign subsidiaries, we initiate the strategic pivot long before the threat materializes. This proactive, anticipatory advisory is the hallmark of a true institutional partnership.
              </p>
            </section>

            {/* Business Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Practical Business Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Seamless Succession Planning:</strong> Facilitate smooth, legally sound, and tax-efficient transitions of corporate leadership and wealth across generations within family-owned enterprises.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Crisis Resilience:</strong> Rely on an advisory team that possesses the deep historical context necessary to rapidly construct highly effective defense strategies during sudden regulatory audits or severe macroeconomic downturns.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Proactive Value Creation:</strong> Benefit from a dedicated team that actively continuously monitors the regulatory and economic landscape to identify strategic opportunities uniquely suited to your specific corporate profile.
                  </div>
                </li>
              </ul>
            </section>

            {/* Closing Insight */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Final Assessment</h3>
              <p className="bg-gray-50 p-8 rounded-2xl border border-gray-100 italic font-medium text-primary-dark-blue text-xl leading-relaxed text-center">
                "A transactional advisor will tell you what happened yesterday. A long-term strategic partner will build the architecture to ensure you dominate tomorrow."
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
