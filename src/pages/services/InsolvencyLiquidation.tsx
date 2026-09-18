import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Building2, ShieldAlert, FileWarning, Scale, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "What is the difference between voluntary liquidation and compulsory insolvency?",
    a: "Voluntary liquidation occurs when the shareholders formally resolve to wind up a solvent company. Compulsory insolvency is initiated by creditors or regulatory bodies when a company is unable to pay its debts as they fall due, requiring court intervention under the Insolvency Act, 2063."
  },
  {
    q: "Can you act as the official liquidator?",
    a: "Yes. Our senior partners include licensed insolvency practitioners who are legally authorized to be appointed by the Office of the Company Registrar (OCR) or the Commercial Court to manage the entire liquidation process."
  },
  {
    q: "How long does a standard voluntary liquidation take in Nepal?",
    a: "Due to the necessity of obtaining tax clearance from the IRD, finalizing outstanding assessments, and securing OCR approvals, a standard voluntary liquidation typically takes between 12 to 18 months, provided there are no major legal disputes."
  },
  {
    q: "What happens to the company's assets during liquidation?",
    a: "The liquidator takes control of all corporate assets. The assets are realized (sold), and the proceeds are distributed according to the strict hierarchy of claims defined in the Insolvency Act—typically prioritizing secured creditors, employee dues, and government taxes before any residual distribution to shareholders."
  }
];

export default function InsolvencyLiquidation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.animate-up' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#031B4E] min-h-screen">
      
      {/* 1. Advisory Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Building2 className="w-4 h-4 text-[#a5caff]" />
              <span>Restructuring Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Insolvency & <br />
              <span className="text-[#a5caff]">Liquidation</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Navigating corporate distress requires decisive, legally sound action. We provide expert advisory on restructuring turnaround strategies and manage graceful, compliant winding-down processes to protect stakeholder interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Consult Our Restructuring Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Challenges */}
      <section className="py-20 bg-gray-50 dark:bg-[#031B4E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
              Managing Corporate Distress
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When an enterprise faces insurmountable financial distress, the legal and financial ramifications are severe. Navigating the complex requirements of the Insolvency Act and the OCR demands experienced, objective counsel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Creditor Pressure</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Aggressive creditor actions and impending litigation can paralyze management, making objective decision-making impossible without independent restructuring advisory.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <FileWarning className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Director Liability</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Under Nepalese law, directors can face severe personal liability—including criminal charges—if they continue trading while knowingly insolvent or fail to act in the best interests of creditors.
              </p>
            </div>

            <div className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Bureaucratic Gridlock</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Executing a voluntary liquidation involves securing complex tax clearance certificates from the IRD, which often triggers rigorous audits and disputes that stall the process for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#031B4E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Strategic Restructuring & Liquidation
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Corporate Restructuring & Turnaround</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Before resorting to liquidation, we explore all viability options. We restructure debt obligations, negotiate with financial institutions (BFIs), and divest non-core assets to restore liquidity and stabilize operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Prevent bankruptcy and preserve enterprise value through aggressive financial re-engineering.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Negotiating a debt-to-equity swap with a syndicate of banks for a distressed manufacturing firm.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop" alt="Restructuring" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Liquidation" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Official Liquidator Services</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  When dissolution is inevitable, our licensed practitioners act as official liquidators. We manage the realization of assets, adjudicate creditor claims, resolve IRD tax assessments, and execute the final strike-off from the OCR registry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Ensure a legally compliant winding-down process that shields directors from future liability.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Managing the voluntary liquidation of a foreign IT subsidiary exiting the Nepalese market.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-gray-50 dark:bg-[#031B4E]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#031B4E] border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden animate-up">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 dark:bg-[#031B4E] transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-primary-dark-blue dark:text-white pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
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
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Navigate Corporate Distress
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not face insolvency without expert legal and financial counsel. Partner with us to explore restructuring options or manage a compliant liquidation.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Schedule a Confidential Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
