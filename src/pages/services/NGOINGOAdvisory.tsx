import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Users2, FileWarning, Search, Landmark, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Why is SWC reporting so critical for NGOs in Nepal?",
    a: "The Social Welfare Council (SWC) is the primary regulatory body for the non-profit sector. Failure to submit accurate financial evaluations and project reports can result in the revocation of an NGO's affiliation, immediately halting their operations and blocking foreign funding."
  },
  {
    q: "Do NGOs have to pay taxes in Nepal?",
    a: "While NGOs enjoy tax-exempt status on their core philanthropic income, they are strictly required to deduct TDS (Tax Deducted at Source) on salaries, rent, and vendor payments. Non-compliance with the Income Tax Act leads to heavy fines from the IRD."
  },
  {
    q: "How do you assist with international donor compliance?",
    a: "International agencies (e.g., USAID, DFID, UN) require stringent financial accountability. We conduct specialized project audits that ensure funds are utilized exactly as budgeted, providing assurance reports directly aligned with specific donor guidelines."
  },
  {
    q: "Can you help set up a new INGO branch in Nepal?",
    a: "Yes. Establishing an INGO requires complex navigation of the SWC, the relevant line ministries, and the Ministry of Finance. We handle the entire legal structuring, securing general and project agreements seamlessly."
  }
];

export default function NGOINGOAdvisory() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Users2 className="w-4 h-4 text-[#a5caff]" />
              <span>Development Sector Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              NGO / INGO <br />
              <span className="text-[#a5caff]">Advisory & Audit</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              The development sector faces intense regulatory scrutiny. We provide specialized compliance, fund accountability, and SWC reporting to ensure your philanthropic mission operates with absolute financial transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Consult Our Non-Profit Experts
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
              The Compliance Burden
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Non-governmental organizations in Nepal must navigate a labyrinth of regulations involving the SWC, local CDOs, the IRD, and international donor requirements. Non-compliance threatens funding and existence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <FileWarning className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">SWC Scrutiny</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                The Social Welfare Council aggressively monitors project expenditures. Failing their mid-term or final evaluations can lead to project cancellations and blacklisting.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Donor Audits</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                International agencies demand forensic-level tracking of funds. Co-mingling of funds or undocumented administrative expenses routinely lead to funding freezes.
              </p>
            </div>

            <div className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Tax Misconceptions</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Many NGOs falsely believe their tax-exempt status absolves them of all tax duties. The IRD strictly penalizes failures in TDS compliance and annual tax return filings.
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
              Comprehensive Sector Support
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">SWC & Regulatory Compliance</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We handle the bureaucratic complexities of SWC affiliations, project approvals, and mandatory evaluations. We ensure your financial statements are formatted specifically to satisfy SWC auditors and the District Administration Office (DAO).
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Maintain flawless legal standing to ensure uninterrupted operations.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Preparing an INGO for its mandatory 5-year SWC comprehensive evaluation.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" alt="NGO Compliance" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Project Audit" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Donor-Specific Project Audits</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We conduct independent project audits tailored to the unique financial guidelines of your international funders. We verify fund utilization, overhead allocations, and procurement transparency to build absolute donor trust.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Secure continuous funding by demonstrating unimpeachable financial stewardship.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> A financial verification audit for a multi-million dollar USAID grant.</li>
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
            Focus on Your Mission
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Leave the regulatory complexities to us. We ensure your NGO remains compliant, transparent, and fully fundable.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Schedule an Advisory Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
