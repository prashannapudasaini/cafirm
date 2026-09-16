import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Search, ShieldAlert, FileSearch, Scale, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How does a Forensic Audit differ from a Statutory Audit?",
    a: "A statutory audit merely verifies that financial statements are free from material misstatements based on sampling. A forensic audit is an exhaustive, investigative procedure designed specifically to detect fraud, embezzlement, or financial irregularities, often to provide evidence suitable for a court of law."
  },
  {
    q: "When should management initiate a Forensic Audit?",
    a: "Initiate an investigation immediately if there are whistleblower complaints, unexplained inventory discrepancies, sudden drops in profitability without market drivers, or if regulatory bodies (like NRB or SEBON) mandate an investigation."
  },
  {
    q: "Can forensic audit reports be used in a Nepalese court of law?",
    a: "Yes. Our forensic reports are drafted to withstand rigorous judicial scrutiny. Our senior partners frequently act as expert witnesses in commercial disputes and fraud litigations in Nepalese courts."
  },
  {
    q: "Will a forensic audit disrupt our daily operations?",
    a: "We deploy discreet methodologies. Our data extraction processes are designed to be non-intrusive, utilizing digital forensics and off-site data analysis to minimize disruption while ensuring targets remain unaware of the investigation."
  }
];

export default function ForensicAudit() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Search className="w-4 h-4 text-royal-blue" />
              <span>Investigative Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Forensic Audit & <br />
              <span className="text-royal-blue">Fraud Investigation</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              When financial integrity is compromised, aggressive action is required. We deploy highly specialized forensic accountants to trace misappropriated assets, quantify financial damages, and provide litigation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Request Confidential Consultation
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
              The Reality of Corporate Fraud
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Financial irregularities rarely surface through routine checks. By the time embezzlement or asset misappropriation is suspected, the financial and reputational damage is often already devastating. Swift, specialized intervention is critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Internal Embezzlement</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Collusion among employees or management to siphon funds through ghost employees, fictitious vendors, or manipulated expense reports is a pervasive threat in organizations with weak internal controls.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Financial Statement Fraud</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Management may deliberately overstate revenues or understate liabilities to artificially inflate valuations prior to an acquisition, or to secure unauthorized credit from Banks and Financial Institutions (BFIs).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Shareholder Disputes</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Complex joint ventures often break down over allegations of fund diversion or unequal profit distribution, requiring independent financial quantification before litigation can proceed.
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
              Uncovering Financial Truth
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Embezzlement & Fraud Investigation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We utilize advanced data analytics to identify red flags in payroll, vendor payments, and expense reimbursements. Our experts reconstruct tampered accounting records to map exactly how funds were siphoned and by whom.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Identify the perpetrators, quantify the exact loss, and provide actionable evidence for recovery.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Investigating a multi-million rupee procurement fraud within a manufacturing conglomerate.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" alt="Forensic Investigation" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" alt="Litigation Support" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Litigation Support & Expert Witness</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We translate complex financial data into compelling, court-ready evidence. Our senior forensic partners work closely with your legal counsel and provide expert testimony in commercial courts or arbitration panels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Strengthen legal standing in commercial disputes and maximize the probability of asset recovery.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Acting as an independent expert witness in a hostile partner buyout dispute.</li>
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
              Our Investigative Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We deploy a discreet, legally robust methodology to uncover financial truth without compromising ongoing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Triage & Scoping", desc: "Confidential initial assessment to define the scope, preserve digital evidence, and establish investigative protocols." },
              { title: "Data Analytics", desc: "Extraction and forensic analysis of massive datasets (ERP logs, bank statements) using advanced fraud-detection algorithms." },
              { title: "Interviews", desc: "Conducting discreet, fact-finding interviews with key personnel, vendors, and stakeholders to corroborate data." },
              { title: "Reporting", desc: "Delivery of a court-admissible forensic report detailing the methodology, findings, quantification of loss, and evidence." }
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
                The Legal & Regulatory Mandate
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fraud is not merely a financial loss; it triggers severe statutory liabilities under Nepalese law that directors cannot ignore.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Anti-Money Laundering (AML) Compliance</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Under the Money Laundering Prevention Act, companies are obligated to report suspicious transactions. A forensic audit provides the necessary evidence to file Suspicious Transaction Reports (STRs) with the Financial Information Unit (FIU).
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Banking Offense and Punishment Act</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    For Banks and Financial Institutions, any misappropriation of funds falls under banking offenses. Our forensic reports are frequently mandated by the NRB prior to initiating criminal proceedings.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <Search className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "When fraud is suspected, inaction is complicity. A swift, independent forensic investigation is the only way a Board of Directors can fulfill their fiduciary duty and protect the enterprise from legal contagion."
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
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Restore Financial Integrity
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Time is critical in fraud investigations. Engage our forensic experts immediately to secure evidence and trace misappropriated assets.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Engage Our Forensic Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
