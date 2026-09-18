import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GlobalStandards() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <FileCheck className="w-4 h-4 text-royal-blue" />
              <span>Premium Advantage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Global Standards
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Elevating local operations to meet the rigorous expectations of the international business community.
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
                In an increasingly interconnected global economy, geographic boundaries no longer define business standards. Capital flows freely toward environments that demonstrate transparency, predictability, and rigorous governance. Adhering to global standards is no longer a luxury reserved for multinational corporations; it is a fundamental prerequisite for any ambitious enterprise seeking sustainable growth, foreign investment, or institutional credibility.
              </p>
              <p>
                We bridge the gap between local operational realities and international expectations. Our firm operates on a foundational commitment to global best practices in audit methodology, financial reporting, and enterprise risk management. We do not compromise on quality, ensuring that the financial intelligence we deliver is universally respected and trusted by stakeholders across the globe.
              </p>
            </section>

            {/* Core Discussion */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Imperative of Quality</h3>
              <p className="mb-4">
                The adoption of global frameworks—such as the International Financial Reporting Standards (IFRS) and the International Standards on Auditing (ISA)—serves a critical purpose: it establishes a common language of business. When financial statements are prepared and audited under these rigorous frameworks, they convey absolute clarity. They eliminate the opacity that often deters institutional investors and cross-border partnerships.
              </p>
              <p>
                However, implementing these standards requires immense technical sophistication. Transitioning from legacy accounting practices to fair-value measurements, complex disclosures, and impairment testing is a resource-intensive endeavor. It requires advisory partners who possess not just theoretical knowledge, but the practical experience necessary to architect these complex financial transformations without disrupting daily operations.
              </p>
            </section>

            {/* Nepal Business Context */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Elevating the Nepalese Enterprise</h3>
              <p className="mb-4">
                Nepal’s corporate sector is experiencing a paradigm shift. The Institute of Chartered Accountants of Nepal (ICAN) has mandated the phased implementation of Nepal Financial Reporting Standards (NFRS)—which are heavily converged with IFRS—across commercial banks, insurance companies, listed entities, and large private enterprises. 
              </p>
              <p className="mb-4">
                Simultaneously, the influx of Foreign Direct Investment (FDI) and the involvement of international development partners (such as the IFC, World Bank, and ADB) in Nepalese infrastructure and financial sectors have drastically raised the bar for corporate governance. These entities do not accept localized, opaque financial reporting. They demand absolute adherence to global norms.
              </p>
              <p>
                We possess the highly specialized capabilities required to navigate this transition. We routinely assist Nepalese conglomerates and joint ventures in upgrading their financial reporting architecture to NFRS standards, ensuring that their financial statements can withstand the intense scrutiny of international auditors, foreign parent companies, and global regulatory bodies.
              </p>
            </section>

            {/* Strategic Perspective */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">A Strategic Perspective</h3>
              <p className="mb-4">
                Viewing global standards merely as a compliance exercise fundamentally misses their strategic value. Rigorous financial reporting and robust internal controls do more than just satisfy regulators; they optimize enterprise performance.
              </p>
              <p>
                When financial data is precise, timely, and aligned with international metrics, executive leadership can make resource allocation decisions with unprecedented confidence. Furthermore, a reputation for stringent governance serves as a powerful competitive differentiator. In a market where trust is paramount, an enterprise that voluntarily subjects itself to global standards immediately distinguishes itself from its peers, attracting premium talent, favorable credit terms, and high-value partnerships.
              </p>
            </section>

            {/* Business Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Practical Business Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Unlocking Foreign Capital:</strong> Provide international investors, private equity firms, and global lenders with the transparent, IFRS/NFRS-compliant financial data they require to authorize capital injections.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Seamless Cross-Border Integration:</strong> Ensure that the financial reporting of Nepalese subsidiaries integrates flawlessly into the consolidated accounts of their foreign parent companies.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Enhanced Valuations:</strong> Command higher enterprise valuations during Mergers and Acquisitions (M&A) by presenting financial records that are free from the risks associated with non-standard accounting practices.
                  </div>
                </li>
              </ul>
            </section>

            {/* Closing Insight */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Final Assessment</h3>
              <p className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 italic font-medium text-primary-dark-blue dark:text-white text-xl leading-relaxed text-center">
                "Local expertise is vital for survival, but global standards are the engine of scalability. To compete on the modern stage, an enterprise must speak the universal language of financial integrity."
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/20">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                Elevate Your Standards
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
