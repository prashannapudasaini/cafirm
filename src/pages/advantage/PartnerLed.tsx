import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerLed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <HeartHandshake className="w-4 h-4 text-royal-blue" />
              <span>Premium Advantage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Partner-Led Service
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Ensuring every engagement benefits from decades of strategic judgment and executive oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-[#020A1A]">
        <div className="max-w-4xl mx-auto px-6 animate-up">
          <div className="space-y-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Executive Introduction */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Executive Introduction</h3>
              <p className="mb-4">
                In the professional services industry, the traditional model often relies on heavy delegation. Senior partners secure the engagement, but the actual execution is handed down to junior staff, with leadership only resurfacing for final signatures. While this model maximizes firm profitability, it fundamentally dilutes the quality of advisory provided to the client.
              </p>
              <p>
                We operate on a fundamentally different paradigm. We believe that complex business challenges cannot be solved by checklists and junior-level execution alone. They require nuance, strategic intuition, and the kind of judgment that can only be forged through decades of experience. Our partner-led service model guarantees that the individuals with the deepest expertise are intimately involved in the architecture, execution, and delivery of your advisory solutions.
              </p>
            </section>

            {/* Core Discussion */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Danger of the Delegation Deficit</h3>
              <p className="mb-4">
                When critical financial, tax, or operational audits are pushed too far down the corporate hierarchy, nuance is lost. Junior staff are highly capable of processing routine transactions, but they often lack the commercial perspective required to identify systemic risks or strategic opportunities hidden within the numbers. 
              </p>
              <p>
                A junior associate might flag a minor accounting error, but a senior partner will recognize that the error is symptomatic of a broader breakdown in internal controls that exposes the enterprise to fraud. By maintaining active, hands-on partner involvement throughout the engagement lifecycle, we ensure that our advisory is characterized by deep commercial insight, rapid issue resolution, and unwavering quality control.
              </p>
            </section>

            {/* Nepal Business Context */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Navigating Nepalese Complexities</h3>
              <p className="mb-4">
                The business landscape in Nepal is heavily relationship-driven and operationally nuanced. Legal frameworks are often subject to varying interpretations by different regulatory authorities. Resolving a complex tax dispute with the Large Taxpayers Office (LTO) or securing a specialized regulatory approval from the Nepal Rastra Bank (NRB) rarely involves a simple, linear process.
              </p>
              <p>
                In these high-stakes scenarios, the presence of a senior partner is invaluable. Our partners possess the professional credibility, the deep institutional networks, and the authoritative gravitas necessary to negotiate complex regulatory impasses on your behalf. They understand the unwritten administrative protocols and historical precedents that govern Nepalese corporate affairs—knowledge that simply cannot be found in a textbook or delegated to an entry-level auditor.
              </p>
            </section>

            {/* Strategic Perspective */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">A Strategic Perspective</h3>
              <p className="mb-4">
                A partner-led engagement fundamentally transforms the nature of the advisory relationship. Rather than a transactional exchange of services, it becomes a peer-to-peer strategic collaboration. When your Board of Directors or CEO interacts with our firm, they are engaging directly with their equals—seasoned business leaders who understand the pressures of executive management.
              </p>
              <p>
                This high-level alignment enables us to move beyond standard reporting. We are able to challenge management assumptions constructively, offer unsolicited strategic insights regarding capital restructuring or M&A opportunities, and act as a true sounding board for your most critical corporate decisions.
              </p>
            </section>

            {/* Business Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Practical Business Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Rapid Decision Making:</strong> Eliminate the bureaucratic delays inherent in highly tiered advisory firms. Direct access to decision-makers ensures your urgent commercial queries are resolved instantly.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Enhanced Quality Assurance:</strong> Benefit from an engagement where the overarching strategy and final deliverables are meticulously vetted by the firm’s most experienced minds.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Strategic Advocacy:</strong> Leverage the professional reputation and authoritative voice of our senior partners during critical negotiations with tax authorities, regulatory bodies, and financial institutions.
                  </div>
                </li>
              </ul>
            </section>

            {/* Closing Insight */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Final Assessment</h3>
              <p className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 italic font-medium text-primary-dark-blue dark:text-white text-xl leading-relaxed text-center">
                "Methodologies can be standardized, but judgment cannot be delegated. We commit our highest level of expertise to every engagement because your enterprise deserves nothing less than executive-level precision."
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/20">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                Engage Our Partners
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
