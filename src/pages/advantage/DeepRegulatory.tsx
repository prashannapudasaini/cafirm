import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeepRegulatory() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <BookOpen className="w-4 h-4 text-royal-blue" />
              <span>Premium Advantage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Deep Regulatory Understanding
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Transforming statutory compliance from a business constraint into a sustainable competitive advantage for Nepal's most ambitious enterprises.
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
                In modern commerce, regulatory frameworks are not merely legal boundaries; they are the architectural blueprints that dictate how value is created, protected, and transferred. A superficial understanding of these laws leads to reactive compliance—a fragile state where businesses operate in constant fear of regulatory reprimand. 
              </p>
              <p>
                At our firm, we view regulatory understanding as a foundational strategic asset. True advisory requires moving beyond the basic interpretation of legal texts. It demands an intimate, predictive understanding of how regulatory bodies function, how policies intersect, and how enforcement mechanisms impact daily operations. Our objective is to insulate your enterprise from regulatory shock while maximizing operational agility within the boundaries of the law.
              </p>
            </section>

            {/* Core Discussion */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Complexity of Compliance</h3>
              <p className="mb-4">
                The regulatory landscape is characterized by its volatility. For enterprises, the challenge is rarely a deliberate desire to circumvent the law; rather, it is the immense complexity of interpreting overlapping, and sometimes contradictory, legal requirements. Tax authorities, central banks, and corporate registries frequently issue sudden directives that can instantly render existing business models non-compliant.
              </p>
              <p>
                When compliance is treated as a back-office administrative task, organizations expose themselves to profound risks. A failure to accurately interpret transfer pricing regulations, or a misclassification of a VAT-exempt transaction, can result in crippling financial penalties and devastating reputational damage. Our role is to elevate compliance to the boardroom, ensuring that every strategic initiative—from mergers and acquisitions to market expansion—is stress-tested against current and anticipated regulatory frameworks.
              </p>
            </section>

            {/* Nepal Business Context */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Navigating the Nepalese Ecosystem</h3>
              <p className="mb-4">
                Nepal’s regulatory environment is undergoing a rapid, aggressive formalization. The transition toward rigorous enforcement is spearheaded by institutions like the Inland Revenue Department (IRD), the Office of the Company Registrar (OCR), and the Nepal Rastra Bank (NRB). 
              </p>
              <p className="mb-4">
                For domestic conglomerates and Foreign Direct Investment (FDI) entities alike, the intersecting demands of the <strong>Companies Act 2063</strong>, the <strong>Income Tax Act 2058</strong>, and the <strong>Foreign Investment and Technology Transfer Act (FITTA)</strong> create a formidable matrix of obligations. Furthermore, the mandatory implementation of <strong>Nepal Financial Reporting Standards (NFRS)</strong> and <strong>Nepal Standards on Auditing (NSA)</strong> has fundamentally altered how assets are valued and revenues are recognized. 
              </p>
              <p>
                In this environment, reading the law is insufficient; one must understand the precedent. We possess deep institutional knowledge of how Nepalese authorities interpret gray areas. Whether navigating complex dividend repatriation protocols under FITTA or defending tax positions during rigorous IRD assessments, our localized expertise ensures our clients are never caught off guard.
              </p>
            </section>

            {/* Strategic Perspective */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">A Strategic Perspective</h3>
              <p className="mb-4">
                Our advisory philosophy is rooted in proactive anticipation rather than reactive firefighting. When new NRB unified directives are issued, or when the national budget introduces sweeping changes to the VAT framework, we do not simply inform our clients of the changes; we model the financial impact.
              </p>
              <p>
                By integrating regulatory intelligence into your strategic planning processes, we enable you to structure transactions, manage supply chains, and optimize capital allocations in the most tax-efficient and legally robust manner possible. Regulatory understanding becomes a shield against litigation and a catalyst for strategic capitalization.
              </p>
            </section>

            {/* Business Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Practical Business Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Risk Mitigation:</strong> Preemptively identify and neutralize compliance gaps before they trigger statutory audits, minimizing the risk of arbitrary tax assessments and penalties.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Frictionless Operations:</strong> Streamline interactions with the OCR and Department of Industries, ensuring that corporate restructuring, share transfers, and capital injections proceed without bureaucratic delays.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Optimized Tax Strategy:</strong> Leverage deep knowledge of the Income Tax Act and Double Taxation Avoidance Agreements (DTAAs) to legally minimize tax liabilities and preserve enterprise capital.
                  </div>
                </li>
              </ul>
            </section>

            {/* Closing Insight */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Final Assessment</h3>
              <p className="bg-gray-50 p-8 rounded-2xl border border-gray-100 italic font-medium text-primary-dark-blue text-xl leading-relaxed text-center">
                "Ignorance of the law is not a defense; but mere awareness of the law is not a strategy. True enterprise resilience is achieved only when regulatory mastery is woven directly into the fabric of your business model."
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                Discuss Your Regulatory Strategy
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
