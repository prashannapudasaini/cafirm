import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Calculator, Users, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Why should we outsource our payroll instead of managing it internally?",
    a: "Payroll in Nepal has become increasingly complex due to evolving Social Security Fund (SSF) regulations, changing TDS slabs, and strict labor laws. Outsourcing guarantees compliance, eliminates the risk of regulatory penalties, and ensures complete confidentiality of executive compensation."
  },
  {
    q: "Do you handle Social Security Fund (SSF) registrations and monthly deposits?",
    a: "Yes. We manage the entire SSF lifecycle—from the initial registration of the employer and employees to the accurate calculation and monthly deposit of the 31% contributions (11% employee, 20% employer)."
  },
  {
    q: "Can you manage the accounting for our foreign branch office in Nepal?",
    a: "Absolutely. We specialize in BPO services for foreign branches and wholly-owned subsidiaries. We manage day-to-day bookkeeping in compliance with NFRS, handle vendor payments, and generate monthly management reports configured to your parent company's chart of accounts."
  },
  {
    q: "How do you ensure data security for our financial records?",
    a: "We utilize secure, cloud-based accounting infrastructure (like Xero or QuickBooks Online) with strict access controls. Your sensitive financial and payroll data is encrypted and handled only by our dedicated BPO team, ensuring institutional-grade data security."
  }
];

export default function BPOPayroll() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Calculator className="w-4 h-4 text-royal-blue" />
              <span>Operational Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              BPO & Payroll <br />
              <span className="text-royal-blue">Management</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Transform your back-office from a cost center into a strategic asset. We provide end-to-end accounting outsourcing, complex payroll processing, and strict regulatory compliance, allowing you to focus entirely on core business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Optimize Your Operations
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
              The Burden of Administration
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Managing payroll and bookkeeping in-house is increasingly inefficient. The constant changes in tax slabs, SSF regulations, and reporting standards drain executive time and create significant compliance risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Compliance Penalties</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A single error in calculating TDS (Tax Deducted at Source) or a delay in depositing SSF contributions immediately triggers compounding fines and interest from regulatory bodies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Loss of Executive Focus</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Founders and country managers spend disproportionate amounts of time managing administrative overhead, reconciling bank statements, and processing employee reimbursements instead of driving revenue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Confidentiality Risks</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                In-house payroll management inherently risks exposing sensitive executive compensation data to internal staff, leading to internal friction and compromised privacy.
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
              Comprehensive BPO Solutions
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">End-to-End Payroll & SSF</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We assume complete responsibility for your payroll lifecycle. We process precise salary calculations, manage leave encashments, calculate complex TDS brackets, and ensure timely filing and deposition of Social Security Fund (SSF) contributions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Eliminate payroll errors, guarantee compliance, and maintain absolute confidentiality.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Managing payroll for a 200+ employee tech firm with diverse contract structures.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop" alt="Payroll Processing" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Bookkeeping" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Accounting & Bookkeeping</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We deploy expert accountants to maintain your general ledger in real-time. We manage accounts payable/receivable, conduct regular bank reconciliations, and prepare your books for seamless year-end statutory audits.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Maintain pristine, audit-ready financials without the overhead of an internal finance team.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Full-service bookkeeping for a foreign IT subsidiary operating in Nepal.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-up">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-primary-dark-blue pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
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
            Focus on What You Do Best
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Outsource your administrative burdens. Partner with us for flawless payroll execution and pristine financial management.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Discuss Outsourcing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
