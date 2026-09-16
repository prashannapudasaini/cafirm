import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, ShieldAlert, BarChart3, SearchCheck, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Audit & Assurance Services in Nepal | Premium CA Advisory
  Meta Description: Enhance stakeholder confidence and ensure NFRS compliance with our risk-based audit and assurance services. Expert guidance for Nepalese enterprises.
  H1: Audit & Assurance: Elevating Financial Integrity
*/

const faqs = [
  {
    q: "How does the transition to NFRS impact our upcoming statutory audit?",
    a: "The transition to Nepal Financial Reporting Standards (NFRS) fundamentally changes how assets, liabilities, and revenues are recognized and measured. It introduces stringent requirements for fair value measurements and extensive disclosures. Our audit process doesn't just check the math; we assess your accounting policies to ensure they align with ICAN’s NFRS roadmap, preventing costly restatements and compliance breaches."
  },
  {
    q: "What is a risk-based audit approach and how does it benefit my business?",
    a: "Unlike traditional substantive testing that treats every transaction equally, a risk-based approach focuses our audit resources on areas with the highest probability of material misstatement or fraud. This means we spend less time on routine, low-risk transactions and more time analyzing complex estimates, revenue recognition, and internal control weaknesses, ultimately providing you with highly actionable insights."
  },
  {
    q: "Can you assist with internal control audits mandated by regulatory bodies?",
    a: "Yes. Regulators, particularly the Nepal Rastra Bank (NRB) and the Insurance Authority, mandate robust internal control frameworks. We conduct comprehensive reviews of your internal control environment, identifying vulnerabilities in financial reporting, operational efficiency, and compliance, helping you strengthen governance before statutory inspections occur."
  },
  {
    q: "How do your audits add value beyond statutory compliance?",
    a: "We view the statutory audit not as a compliance exercise, but as a strategic health check. Through our Management Letter, we highlight systemic inefficiencies, potential tax exposures, and operational risks. Our goal is to provide the Board and Management with the intelligence needed to optimize capital, improve cash flows, and mitigate enterprise risk."
  },
  {
    q: "What is the timeline for completing a statutory audit for a large-scale manufacturing firm?",
    a: "Timelines vary based on the complexity of your operations, the maturity of your internal controls, and the number of branches/subsidiaries. A typical comprehensive audit involves a 2-3 week planning and interim phase, followed by 4-6 weeks of fieldwork after financial year-end. We deploy agile methodologies to ensure statutory deadlines with the OCR and IRD are comfortably met without sacrificing audit quality."
  },
  {
    q: "Do you provide assurance services for foreign investors (FDI)?",
    a: "Absolutely. Foreign investors require absolute certainty regarding the financial health of their Nepalese subsidiaries or joint ventures. We provide tailored assurance reports, group reporting packages aligned with IFRS, and specific agreed-upon procedures (AUPs) to satisfy the rigorous demands of international stakeholders and parent companies."
  },
  {
    q: "How are Information Systems (IS) audits integrated into your financial audits?",
    a: "In today's digital landscape, financial integrity relies heavily on IT systems. Our audit teams include IS audit specialists who evaluate your IT General Controls (ITGC), application controls, and data integrity. This is particularly critical for financial institutions and e-commerce platforms operating in Nepal, ensuring financial data cannot be maliciously altered."
  },
  {
    q: "What happens if a material misstatement is found during the audit?",
    a: "If we identify a material misstatement, our immediate focus is collaborative resolution. We discuss the finding with management, evaluate the root cause, and advise on the necessary adjustments to correct the financial statements prior to issuance. We then provide strategic recommendations to fortify internal controls to prevent recurrence."
  }
];

export default function AuditAssurance() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <ShieldAlert className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Audit & Assurance: <br />
              <span className="text-royal-blue">Elevating Financial Integrity</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Beyond standard compliance, our risk-based audit methodologies deliver profound strategic insights, fortify internal controls, and foster unwavering trust among investors, lenders, and regulators across Nepal's dynamic economic landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Schedule a Consultation
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
              Navigating Modern Financial Complexities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In Nepal’s rapidly formalizing corporate environment, businesses face immense pressure to maintain immaculate financial records while driving operational growth. Standard bookkeeping is no longer sufficient to satisfy the demands of institutional stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Regulatory Scrutiny</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                With the Inland Revenue Department (IRD) and Nepal Rastra Bank (NRB) deploying advanced data analytics, material misstatements or non-compliance with the Companies Act 2063 can trigger severe financial penalties and reputational damage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Internal Vulnerabilities</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Rapidly scaling enterprises often outgrow their internal control frameworks, leading to revenue leakage, inefficient capital allocation, and heightened susceptibility to internal fraud or operational errors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Investor Confidence</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Foreign Direct Investment (FDI) partners, institutional lenders, and prospective shareholders demand absolute financial transparency aligned with global standards like NFRS. Lack of rigorous assurance stalls critical capital injections.
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
              Comprehensive Assurance Capabilities
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Statutory & External Audits</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We execute rigorous, independent statutory audits designed to meet the highest standards of the Institute of Chartered Accountants of Nepal (ICAN). Our objective is not merely to sign off on financial statements, but to provide stakeholders with a deep, objective understanding of the firm's financial health.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Validate financial accuracy and ensure strict adherence to statutory reporting mandates.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Mitigates regulatory risk, satisfies shareholder mandates, and establishes an unshakeable foundation of trust.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Annual financial reporting for public and private limited companies operating in Nepal.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Statutory Audit" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Internal Audit" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Internal Audit & Risk Assurance</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our internal audit practice transforms compliance from a cost center into a strategic asset. We dissect operational workflows, evaluate internal controls, and identify systemic inefficiencies that erode enterprise value. We act as the proactive defense mechanism for your Board of Directors.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Identify, evaluate, and mitigate operational, financial, and compliance risks before they materialize.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Optimizes process efficiency, stops revenue leakage, and fortifies corporate governance structures.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Large-scale manufacturing and trading firms requiring continuous risk monitoring.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">NFRS & IFRS Advisory</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transitioning to and maintaining compliance with Nepal Financial Reporting Standards (NFRS) is a highly technical endeavor. We provide end-to-end advisory on complex accounting treatments, fair value measurements, and comprehensive disclosure requirements mandated by regulatory bodies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Seamlessly align local financial reporting with complex global accounting standards.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Prevents statutory non-compliance, facilitates international investments, and ensures absolute financial clarity.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> BFIs, listed companies, and multinational subsidiaries navigating complex reporting frameworks.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop" alt="NFRS Advisory" className="w-full h-full object-cover" />
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
              Our Professional Advisory Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We reject the 'tick-box' approach to auditing. Our methodology is rooted in a profound understanding of your business model, enabling us to deliver actionable intelligence alongside rigorous assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Assessment", desc: "Deep-dive analysis of your industry, business model, and overarching risk landscape." },
              { title: "Planning", desc: "Designing a targeted, risk-based audit strategy focusing on material vulnerabilities." },
              { title: "Execution", desc: "Deploying senior experts to conduct rigorous testing of controls and transactions." },
              { title: "Evaluation", desc: "Synthesizing findings to assess the true integrity of financial statements." },
              { title: "Reporting", desc: "Delivering statutory reports alongside a highly strategic Management Letter." }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-up">
                <div className="text-5xl font-bold text-white/10 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-white/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Regulatory & Industry Perspective */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
                Mastering Nepal's <br/>Regulatory Ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Operating in Nepal requires deft navigation of a complex and continuously evolving regulatory environment. Our audit philosophy is inextricably linked to the legal realities your enterprise faces.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">The Companies Act 2063</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We ensure your financial disclosures and board reporting structures strictly align with statutory mandates, protecting directors from personal liabilities and avoiding scrutiny from the Office of the Company Registrar (OCR).
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">NFRS & NSA Directives</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Compliance with Nepal Standards on Auditing (NSA) and NFRS is not optional for large entities. We bridge the gap between legacy accounting practices and modern, fair-value driven reporting requirements mandated by ICAN.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Sectoral Frameworks (NRB & Beema Samiti)</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    For our BFI and insurance clients, we overlay strict statutory audits with deep-dive assessments of capital adequacy, liquidity risk, and regulatory directives, safeguarding against severe regulatory interventions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <SearchCheck className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "Regulatory frameworks in Nepal should not be viewed merely as hurdles; they are blueprints for enterprise resilience. By integrating rigorous compliance directly into your operational DNA through our assurance processes, we transform regulatory obligations into a distinct competitive advantage—securing investor trust and ensuring frictionless growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why It Matters (Outcomes) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
              Catalyzing Business Outcomes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our assurance engagements are explicitly designed to yield tangible, strategic value that reverberates across your entire organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enhanced Governance", desc: "Strengthen the overarching control environment, providing the Board of Directors with absolute clarity and oversight over management operations." },
              { title: "Investor Confidence", desc: "Facilitate smoother capital raising and FDI injections by presenting transparent, internationally recognizable financial health metrics." },
              { title: "Risk Reduction", desc: "Systematically identify and mitigate financial, operational, and tax-related vulnerabilities before they trigger regulatory or financial crises." },
              { title: "Operational Efficiency", desc: "Streamline financial workflows and eliminate redundant processes through insights generated during the rigorous audit process." },
              { title: "Compliance Readiness", desc: "Maintain a state of perpetual readiness for sudden IRD assessments or sectoral regulatory inspections." },
              { title: "Sustainable Growth", desc: "Build a rock-solid financial foundation that safely supports aggressive expansion, M&A activities, or market diversification." }
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100 animate-up">
                <CheckCircle2 className="w-6 h-6 text-royal-blue shrink-0 mr-4" />
                <div>
                  <h4 className="font-bold text-primary-dark-blue mb-2">{outcome.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Applications */}
      <section className="py-20 bg-primary-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Sector-Specific Expertise
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              We apply our robust audit methodologies through the lens of deep industry specialization, recognizing that the risks faced by a commercial bank are vastly different from those of a hydropower developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Banking & Financial Institutions (BFIs)</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Evaluating credit risk portfolios, capital adequacy ratios, and strict adherence to complex NRB unified directives and NFRS 9 implementations.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Hydropower & Renewable Energy</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Auditing massive capital expenditure (CAPEX) allocations, complex project financing structures, and ensuring compliance with DoED regulations.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & Trading</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Rigorous inventory valuations, cost accounting verifications, supply chain risk assessments, and complex VAT reconciliation audits.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">NGOs & INGOs</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Specialized fund accountability audits, verifying donor compliance mandates, and ensuring strict adherence to Social Welfare Council (SWC) guidelines.</p>
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
            <p className="text-gray-600">Expert insights into common assurance inquiries in Nepal.</p>
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

      {/* 9. Related Insights & Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 animate-up">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-dark-blue mb-2">Continue Exploring</h2>
            <div className="w-16 h-1 bg-royal-blue rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Related Service</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Tax & Regulatory Services</h3>
                <p className="text-sm text-gray-600 mb-6">Seamlessly integrate your statutory audit with strategic tax planning and robust IRD compliance management to protect your bottom line.</p>
              </div>
              <Link to="/services/tax-and-regulatory" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Navigating NFRS Compliance: A Guide for Growing Enterprises</h3>
                <p className="text-sm text-gray-600 mb-6">Read our latest advisory on how medium-to-large enterprises in Nepal can smoothly transition to Nepal Financial Reporting Standards.</p>
              </div>
              <Link to="/insights" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Read Article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="py-24 bg-primary-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Secure Your Financial Integrity
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Partner with senior Chartered Accountants dedicated to providing rigorous assurance, safeguarding your assets, and empowering your strategic decisions. Let us help you navigate Nepal’s regulatory landscape with absolute confidence.
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
