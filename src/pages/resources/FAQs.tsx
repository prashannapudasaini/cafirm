import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqCategories = [
  {
    name: 'Tax',
    faqs: [
      { q: "What is the threshold for mandatory VAT registration in Nepal?", a: "Currently, businesses dealing in goods must register for VAT if their annual turnover exceeds NPR 5 Million. For businesses dealing in services (or a mix of goods and services), the threshold is NPR 2 Million. However, certain specified businesses require mandatory VAT registration regardless of turnover." },
      { q: "Can a company carry forward its losses indefinitely?", a: "No. Under the Income Tax Act, a business loss can generally be carried forward for up to 7 consecutive income years. However, businesses in specific sectors (like infrastructure projects or those operating in specific zones) may have extended carry-forward provisions (up to 12 years)." }
    ]
  },
  {
    name: 'Audit & Accounting',
    faqs: [
      { q: "Is an annual statutory audit mandatory for small private companies?", a: "Yes. Under the Companies Act, 2063, every company registered in Nepal, regardless of its size, turnover, or whether it is private or public, must undergo an annual statutory audit by a licensed auditor holding a Certificate of Practice (CoP) from ICAN." },
      { q: "What is NFRS and who needs to adopt it?", a: "NFRS stands for Nepal Financial Reporting Standards, which are converged with IFRS. Adoption is mandatory for all multinational companies, listed companies, BFIs, and State-Owned Enterprises (SOEs). Small and Medium Enterprises (SMEs) are required to adopt NFRS for SMEs." }
    ]
  },
  {
    name: 'Corporate Compliance',
    faqs: [
      { q: "What is the penalty for failing to hold an AGM on time?", a: "Public companies must hold their AGM within 6 months of the fiscal year-end. Failing to do so attracts significant fines from the Office of the Company Registrar (OCR). Prolonged failure can lead to the freezing of the company's bank accounts and inability to process corporate changes." },
      { q: "Do private companies need an independent director?", a: "No. The requirement to appoint an independent director applies strictly to public limited companies under the Companies Act, 2063, though it is considered a best practice for large private conglomerates." }
    ]
  },
  {
    name: 'FDI (Foreign Direct Investment)',
    faqs: [
      { q: "What is the minimum threshold for Foreign Direct Investment in Nepal?", a: "The minimum threshold for Foreign Direct Investment (FDI) in Nepal is currently set at NPR 20 Million per foreign investor, following a recent revision by the Government of Nepal aimed at encouraging mid-tier investments." },
      { q: "Can foreign investors repatriate dividends easily?", a: "Yes, dividends can be repatriated. However, the process requires prior approval from Nepal Rastra Bank (NRB) and the Department of Industry (DOI), and is contingent upon proving full compliance with local tax laws (e.g., payment of dividend withholding tax)." }
    ]
  },
  {
    name: 'Labour & Payroll',
    faqs: [
      { q: "Is registration with the Social Security Fund (SSF) mandatory?", a: "Yes. Registration and regular contribution to the SSF is mandatory for all formal sector employers in Nepal. The total contribution is 31% of the basic salary (11% deducted from the employee, and 20% contributed by the employer)." }
    ]
  }
];

export default function FAQs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openCategory, setOpenCategory] = useState<string>('Tax');
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

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
    <div ref={containerRef} className="bg-gray-50 dark:bg-[#020A1A] min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Frequently Asked Questions | Resources | Jay & Ajay Associates</title>
        <meta name="description" content="Answers to common regulatory, tax, audit, and FDI questions in Nepal." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-50 dark:bg-[#020A1A]/50 border border-orange-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-orange-600">
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Frequently Asked <span className="text-royal-blue">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
            Clear, authoritative answers to the most common corporate compliance inquiries in Nepal.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 p-4 rounded-xl text-sm text-yellow-800 dark:text-yellow-200 text-left">
            <strong>Regulatory Disclaimer:</strong> The information provided in this FAQ is for general guidance only and is based on regulations active as of mid-2026. Regulatory thresholds (such as FDI minimums and VAT limits) are subject to change by the Government of Nepal. Professional advice should be obtained before acting upon this information.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-up">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-[#0A1128] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/10 sticky top-32">
              <h3 className="text-lg font-bold text-primary-dark-blue dark:text-white mb-4 px-4">Topics</h3>
              <div className="space-y-2">
                {faqCategories.map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setOpenCategory(category.name);
                      setOpenQuestion(0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                      openCategory === category.name 
                        ? 'bg-royal-blue text-white shadow-md' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#131B33]'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion Questions */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#0A1128] rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10">
              <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-8 border-b border-gray-100 dark:border-white/10 pb-4">
                {openCategory} FAQs
              </h2>
              
              <div className="space-y-4">
                {faqCategories.find(c => c.name === openCategory)?.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-[#0A1128] hover:bg-gray-50 dark:hover:bg-[#131B33] transition-colors"
                    >
                      <span className={`font-semibold pr-8 ${openQuestion === idx ? 'text-royal-blue' : 'text-primary-dark-blue dark:text-white'}`}>
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openQuestion === idx ? 'rotate-180 text-royal-blue' : 'text-gray-400'}`} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-white/5">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resource Request CTA */}
        <div className="animate-up mt-16 bg-primary-dark-blue rounded-[2rem] p-10 md:p-14 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Can't find the answer you're looking for?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Complex regulatory issues often require tailored analysis. Speak with our advisory team to get precise guidance for your business.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
            Contact Our Advisors
          </Link>
        </div>
      </div>
    </div>
  );
}
