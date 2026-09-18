import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EthicalIndependent() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2024&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <ShieldCheck className="w-4 h-4 text-royal-blue" />
              <span>Premium Advantage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Ethical & Independent
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Delivering uncompromising objectivity to safeguard your corporate governance and institutional trust.
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
                In the realm of professional advisory, technical proficiency is merely the baseline; the true currency of our profession is trust. An audit report or a valuation is completely devoid of value if the market suspects that the advisor's independence was compromised.
              </p>
              <p>
                Our firm is anchored by an uncompromising commitment to ethical conduct and absolute independence. We understand that our role is to act as the objective guardian of financial truth. We do not bend to managerial pressure, we do not obscure financial realities, and we maintain an impermeable firewall against conflicts of interest. This rigid adherence to ethics is not just a compliance requirement—it is the foundation of the institutional credibility we lend to your enterprise.
              </p>
            </section>

            {/* Core Discussion */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Cost of Compromised Integrity</h3>
              <p className="mb-4">
                History is replete with corporate catastrophes born from the failure of independent oversight. When advisors prioritize the retention of lucrative client fees over their duty of objectivity, they become complicit in the destruction of enterprise value. A compromised audit may temporarily satisfy management, but it ultimately leaves the organization exposed to devastating regulatory backlash, shareholder litigation, and catastrophic reputational ruin.
              </p>
              <p>
                We enforce stringent internal independence protocols to prevent these scenarios. Before accepting any engagement, we conduct rigorous conflict-of-interest checks. Our partners and staff are strictly prohibited from holding financial interests in audit clients, and we maintain strict rotation policies to ensure that familiarity never breeds complacency. Our mandate is to tell you the truth, especially when it is difficult to hear.
              </p>
            </section>

            {/* Nepal Business Context */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Governance in the Nepalese Market</h3>
              <p className="mb-4">
                The Nepalese corporate sector is evolving rapidly. Regulatory bodies like the Securities Board of Nepal (SEBON) and the Nepal Rastra Bank (NRB) are aggressively tightening corporate governance requirements, demanding greater transparency from Boards of Directors. 
              </p>
              <p className="mb-4">
                In closely-held family businesses and expanding domestic conglomerates, the lines between ownership and management are often blurred. This dynamic frequently leads to complex related-party transactions and the commingling of personal and corporate assets. Navigating this environment requires an advisor who possesses the fortitude to push back against entrenched ownership structures and demand strict adherence to the Companies Act and NFRS disclosure requirements.
              </p>
              <p>
                By partnering with our firm, you are sending a powerful signal to the Nepalese market. Our signature on your financial statements serves as a hallmark of uncompromised integrity, instantly elevating your credibility with the Inland Revenue Department (IRD), institutional lenders, and prospective joint-venture partners.
              </p>
            </section>

            {/* Strategic Perspective */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">A Strategic Perspective</h3>
              <p className="mb-4">
                Ethical independence is a powerful strategic asset. For a Board of Directors or an Audit Committee, attempting to govern an enterprise based on filtered, overly optimistic financial data is akin to flying blind.
              </p>
              <p>
                Our objective, independent reporting strips away the inherent biases of internal management. We provide the Board with an unvarnished, empirically sound view of the organization’s true financial health and operational vulnerabilities. This level of radical transparency is the only viable foundation upon which executives can build sustainable, long-term growth strategies and effectively mitigate enterprise risk.
              </p>
            </section>

            {/* Business Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Practical Business Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Stakeholder Confidence:</strong> Assure shareholders, foreign investors, and regulatory bodies that your financial reporting has been validated by an unimpeachable, independent authority.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Board Protection:</strong> Shield the Board of Directors from personal liability and regulatory scrutiny by providing them with objective, uncompromised financial intelligence to inform their oversight duties.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Confidentiality & Discretion:</strong> Operate with the absolute assurance that your sensitive commercial data, M&A strategies, and proprietary operational metrics are protected by the highest standards of professional secrecy.
                  </div>
                </li>
              </ul>
            </section>

            {/* Closing Insight */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Final Assessment</h3>
              <p className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 italic font-medium text-primary-dark-blue dark:text-white text-xl leading-relaxed text-center">
                "Technical expertise dictates what an advisor can do; ethical independence dictates what they will do. We protect your enterprise by guarding the absolute integrity of your financial truth."
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/20">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                Secure Independent Advisory
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
