import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Network, ShieldAlert, FileSearch, Calculator, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Is Transfer Pricing documentation mandatory in Nepal?",
    a: "Yes. Under Section 33 of the Income Tax Act, 2058, the Inland Revenue Department (IRD) holds the authority to re-characterize income or disallow deductions if transactions between associated entities are not conducted at an arm's length price. Maintaining robust TP documentation is the only defense against severe tax assessments."
  },
  {
    q: "How do Double Taxation Avoidance Agreements (DTAA) impact our foreign investments?",
    a: "Nepal has active DTAAs with several nations (e.g., India, China, Qatar, South Korea). These treaties allow foreign investors and expatriates to claim tax credits, reduce withholding tax (WHT) rates on royalties or dividends, and avoid being taxed on the same income in both jurisdictions."
  },
  {
    q: "What transfer pricing methods are acceptable to the IRD?",
    a: "The IRD generally accepts internationally recognized OECD methodologies, including the Comparable Uncontrolled Price (CUP) method, Resale Price Method (RPM), Cost Plus Method, and Transactional Net Margin Method (TNMM). The choice of method depends entirely on the functional, asset, and risk (FAR) profile of your enterprise."
  },
  {
    q: "We are paying management fees to our foreign parent company. Will the IRD challenge this?",
    a: "Management fees, royalties, and technical service fees paid to foreign affiliates are the most heavily scrutinized transactions by the Large Taxpayers Office (LTO). Without a robust transfer pricing study proving that actual services were rendered at market value, these deductions will almost certainly be disallowed."
  }
];

export default function TransferPricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.animate-up' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* 1. Advisory Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Network className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Transfer Pricing & <br />
              <span className="text-royal-blue">International Tax</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Cross-border transactions are under unprecedented scrutiny by Nepalese tax authorities. We provide institutional-grade transfer pricing documentation, DTAA advisory, and aggressive tax defense to protect your multinational operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Consult Our Tax Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
              The Reality of Cross-Border Taxation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For Multinational Corporations (MNCs) operating in Nepal, intercompany transactions are heavily targeted by the Large Taxpayers Office (LTO). Inadequate documentation leads to massive tax re-assessments and severe penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Aggressive IRD Scrutiny</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The LTO frequently challenges payments for royalties, IT services, and management fees to foreign parent companies, aggressively disallowing these as deductible expenses if they fail the arm's length test.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Lack of Comparables</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A major challenge in Nepal is the lack of a robust public database for comparable uncontrolled transactions, making it extremely difficult to defend pricing models without highly specialized economic analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Double Taxation Risks</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Without properly structuring transactions to leverage Double Taxation Avoidance Agreements (DTAAs), enterprises face the crippling reality of paying taxes on the same income in both Nepal and their home jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-4">
              Advanced International Tax Architecture
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Transfer Pricing Studies & Defense</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We prepare robust Transfer Pricing (TP) documentation that acts as a fortress against IRD audits. We conduct Functional, Asset, and Risk (FAR) analyses and utilize global databases to establish defensible arm's length ranges for your intercompany transactions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Preemptively defend the deductibility of intra-group service charges and royalties.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A foreign FMCG brand charging its Nepalese subsidiary a 3% royalty on sales.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Transfer Pricing" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="DTAA Advisory" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">DTAA Optimization</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We meticulously analyze Nepal's active tax treaties to ensure your entity legally minimizes Withholding Tax (WHT) on dividends, interest, and royalties. We guide foreign investors through the complex process of obtaining treaty benefits from the LTO.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Prevent capital erosion during the repatriation of profits to foreign holding companies.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Reducing withholding tax on dividend repatriation for an Indian joint venture partner.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 bg-deep-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our Transfer Pricing Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We leverage OECD guidelines and deep local tax expertise to build defensible pricing frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "FAR Analysis", desc: "Detailed mapping of Functions performed, Assets utilized, and Risks assumed by each entity." },
              { title: "Method Selection", desc: "Identifying the most appropriate OECD pricing method (CUP, RPM, Cost Plus, TNMM, or PSM)." },
              { title: "Benchmarking", desc: "Utilizing global financial databases to establish a statistically valid arm's length interquartile range." },
              { title: "Documentation", desc: "Drafting the final Master File and Local File to preemptively satisfy LTO audit requirements." }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-up">
                <div className="text-5xl font-bold text-white/10 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-white/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Regulatory Perspective */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
                The Regulatory Mandate
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Nepalese government is aggressively closing loopholes related to cross-border profit shifting. Compliance requires mastery of intersecting regulatory frameworks.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Section 33, Income Tax Act, 2058</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Provides the Inland Revenue Department with the absolute authority to reallocate, re-characterize, and adjust income or deductions between related parties to reflect an arm's length outcome.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Double Taxation Avoidance Agreements (DTAA)</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Nepal's bilateral treaties supersede domestic tax laws. We leverage these treaties to legally minimize withholding tax exposure for foreign investors and prevent dual taxation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <Network className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "In the eyes of the LTO, a lack of transfer pricing documentation is an admission of guilt. Proactive documentation is not just a compliance exercise; it is an insurance policy for your corporate profits."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden animate-up">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-100 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-primary-dark-blue pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="py-24 bg-primary-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Secure Your Cross-Border Operations
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Don't leave your intercompany pricing to chance. Partner with our international tax experts to build an unassailable transfer pricing framework.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Schedule a Tax Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
