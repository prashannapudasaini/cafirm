import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, PieChart, TrendingUp, LineChart, Target, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Outsourced CFO & Strategic Accounting Services | Premium CA Firm Nepal
  Meta Description: Elevate your financial leadership with our Outsourced CFO services in Nepal. Expert NFRS accounting, FP&A, and cash flow management for growing enterprises.
  H1: Accounting & Outsourced CFO: Elevating Financial Leadership
*/

const faqs = [
  {
    q: "How does an Outsourced CFO differ from a traditional accountant or controller?",
    a: "A traditional accountant focuses on historical data—recording what has already happened to ensure compliance. An Outsourced CFO is entirely forward-looking. We focus on strategic financial planning (FP&A), cash flow forecasting, optimizing capital structures, and providing the executive board with data-driven insights to drive future growth and profitability."
  },
  {
    q: "At what stage of growth should a company consider an Outsourced CFO?",
    a: "Enterprises typically require CFO-level intervention when they hit inflection points: preparing for a major capital raise, navigating a complex merger, experiencing rapid revenue growth that outpaces internal controls, or when founders realize that reactive, historical accounting is no longer sufficient to guide strategic decision-making."
  },
  {
    q: "Do you handle day-to-day bookkeeping as part of this service?",
    a: "Yes. Our service is highly scalable. We can provide end-to-end finance department outsourcing—from deploying cloud-based bookkeeping and payroll processing to high-level CFO advisory. Alternatively, if you have an internal accounting team, our CFOs can sit above them to provide strategic oversight, review month-end closes, and generate executive board reports."
  },
  {
    q: "How do you ensure our financial statements comply with NFRS?",
    a: "The transition to Nepal Financial Reporting Standards (NFRS) is complex. Our teams are deeply trained in NFRS mandates. We design your Chart of Accounts, configure your ERP/accounting software, and establish monthly closing checklists explicitly aligned with NFRS, ensuring your year-end statutory audit is a frictionless event."
  },
  {
    q: "Can you manage complex payroll and TDS compliance?",
    a: "Absolutely. Payroll in Nepal involves complex calculations of Tax Deducted at Source (TDS), Social Security Fund (SSF) contributions, and provident funds. We manage the entire payroll lifecycle, ensuring absolute confidentiality, flawless statutory compliance, and timely disbursements, completely offloading this burden from your HR and management teams."
  },
  {
    q: "What kind of management reports will we receive?",
    a: "We replace generic, static profit and loss statements with dynamic, highly visual Management Information Systems (MIS) dashboards. You will receive customized monthly reporting packages that track specific KPIs, analyze budget-to-actual variances, forecast rolling cash flows, and provide actionable commentary on overarching financial health."
  },
  {
    q: "How do you assist with budgeting and forecasting?",
    a: "We move your enterprise away from static, incremental budgeting. We implement zero-based budgeting or rolling forecasts that align strictly with your strategic objectives. We continuously monitor actual performance against these forecasts, allowing management to pivot rapidly in response to market volatility or unexpected capital requirements."
  },
  {
    q: "Is it secure to outsource our entire financial function?",
    a: "We treat data security and confidentiality as our highest priority. We implement institutional-grade, cloud-based accounting ecosystems with strict role-based access controls, robust audit trails, and bank-level encryption, ensuring your financial data is significantly more secure than typical on-premise legacy systems."
  }
];

export default function AccountingOutsourcedCFO() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <PieChart className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Accounting & CFO: <br />
              <span className="text-royal-blue">Elevating Financial Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Transform your finance function from a reactive compliance center into a proactive strategic engine. We provide elite, scalable financial leadership, delivering the rigorous NFRS accounting, dynamic forecasting, and capital optimization required to scale aggressively in Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Consult on CFO Services
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
              The Leadership Gap in Corporate Finance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As Nepalese enterprises rapidly scale, their financial complexity frequently outpaces the capabilities of their legacy accounting teams. Operating a high-growth company with retroactive, purely compliance-focused financial data is akin to driving blindfolded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Strategic Blindspots</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Relying solely on year-end statutory audits provides zero actionable intelligence. Without dynamic, real-time Management Information Systems (MIS), founders and boards cannot identify underperforming business units or optimize resource allocation until it is too late.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Cash Flow Volatility</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Profitable companies frequently collapse due to poor liquidity management. Inability to forecast rolling cash flows accurately leaves enterprises highly vulnerable to severe working capital shortages, jeopardizing vendor relationships and stalling growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Talent & Overhead Costs</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Recruiting and retaining a full-time, highly experienced Chief Financial Officer in Nepal is immensely expensive and often unnecessary for mid-market firms. Consequently, critical strategic financial decisions are left to junior accountants or overburdened founders.
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
              Comprehensive Financial Leadership
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Strategic Outsourced CFO</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We deploy senior financial executives on a fractional basis to guide your corporate strategy. From orchestrating complex debt refinancing and optimizing capital structures to representing the enterprise before institutional investors and the Board of Directors, we provide the elite financial acumen necessary to scale aggressively.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Inject top-tier financial leadership directly into the executive team without the overhead of a full-time hire.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Optimizes enterprise valuation, secures favorable financing, and aligns financial strategy intimately with corporate objectives.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> High-growth tech startups preparing for Series A funding, or mature family businesses undergoing professionalization.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Outsourced CFO" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="FP&A" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Financial Planning & Analysis (FP&A)</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We transform raw accounting data into actionable executive intelligence. We build dynamic financial models, implement rolling cash flow forecasts, and design bespoke MIS dashboards that track granular KPIs across all your business units, enabling highly agile, data-driven decision-making.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Provide management with absolute clarity on future financial trajectories and operational bottlenecks.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Completely eliminates cash flow crises, maximizes ROI on capital expenditures, and enforces strict budgetary discipline.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A manufacturing conglomerate needing to assess the profitability of distinct product lines in real-time.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">End-to-End Accounting & Compliance (NFRS)</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We provide a completely managed finance function. From daily bookkeeping and automated payroll processing (including SSF/TDS compliance) to executing rigorous month-end closes. We ensure your entire financial architecture is strictly aligned with Nepal Financial Reporting Standards (NFRS), rendering the annual statutory audit frictionless.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Guarantee immaculate financial records and seamless regulatory compliance, offloading the entire administrative burden.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Drastically reduces the cost of internal finance operations, prevents IRD penalties, and ensures perpetual audit-readiness.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Multinational branches (FDI) operating in Nepal requiring flawless local compliance and seamless IFRS group reporting.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Accounting & Compliance" className="w-full h-full object-cover" />
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
              We do not simply replace your bookkeeper; we engineer a high-performance financial ecosystem tailored to your strategic ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Diagnostic", desc: "A rigorous audit of your legacy accounting systems, chart of accounts, and historical financial integrity." },
              { title: "System Design", desc: "Architecting a modernized, cloud-based financial infrastructure explicitly aligned with NFRS and your specific KPIs." },
              { title: "Transition", desc: "Seamlessly migrating historical data, establishing rigorous Month-End Close (MEC) checklists, and training key personnel." },
              { title: "Execution", desc: "Managing daily financial operations, executing precise payroll, and handling all continuous tax compliance." },
              { title: "Strategic Advisory", desc: "Delivering executive-level MIS reports and presenting strategic financial insights directly to the Board of Directors." }
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

      {/* 5. Regulatory Perspective */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
                Mastering the Compliance Ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Strategic financial leadership requires an immaculate foundation of compliance. We ensure that every operational decision is supported by a perfectly compliant financial architecture.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">NFRS Implementation</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    The Institute of Chartered Accountants of Nepal (ICAN) mandates NFRS for a growing tier of businesses. We manage this highly technical transition, ensuring fair value measurements and complex disclosures are accurately embedded into your daily accounting routines.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Payroll & Labor Compliance</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We navigate the intricate intersections of the Labor Act and the Income Tax Act, flawlessly executing complex Tax Deducted at Source (TDS) calculations and ensuring strict, timely adherence to Social Security Fund (SSF) mandates.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Continuous IRD Readiness</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    By maintaining immaculate, real-time ledgers and rigorously reconciling VAT inputs/outputs monthly, we completely neutralize the threat of aggressive, surprise assessments from the Inland Revenue Department (IRD).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <PieChart className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "Founders should not spend their time scrutinizing spreadsheets or worrying about unfiled TDS returns. By outsourcing the entire financial apparatus to elite professionals, executive bandwidth is entirely liberated to focus on commercial expansion and market domination."
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
              Empowering Strategic Execution
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our CFO and accounting services are explicitly designed to yield high-impact, measurable results that fundamentally alter the trajectory of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enhanced Visibility", desc: "Gain absolute, real-time clarity into the financial health of your enterprise through bespoke, highly visual executive MIS dashboards." },
              { title: "Optimized Liquidity", desc: "Eradicate cash flow crises through rigorous rolling forecasts, optimized working capital cycles, and strategic debt management." },
              { title: "Frictionless Audits", desc: "Maintain a perpetual state of 'audit-readiness', drastically reducing the time, cost, and stress associated with year-end statutory compliance." },
              { title: "Scalable Infrastructure", desc: "Build a highly scalable, cloud-based financial ecosystem capable of supporting rapid geographical expansion or complex M&A activities." },
              { title: "Cost Efficiency", desc: "Secure elite, C-suite financial intelligence at a fraction of the cost required to recruit, train, and retain a full-time, highly experienced internal CFO." },
              { title: "Investor Readiness", desc: "Present immaculate, NFRS-compliant financial models and historical data that immediately instills confidence in institutional lenders and private equity." }
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
              Sector-Specific Financial Leadership
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Strategic finance is not a one-size-fits-all discipline. We deploy CFOs with deep, native experience within the specific operational nuances of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Technology & Startups</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Managing cash burn rates, architecting complex SaaS revenue recognition models, and preparing immaculate financial data rooms for Series A and B funding rounds.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Multinational Branches (FDI)</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Ensuring flawless compliance with complex local tax regimes while simultaneously delivering highly standardized IFRS reporting packages to foreign parent companies.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Hospitality & Retail</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Deploying rigorous daily revenue reconciliations, optimizing complex multi-location inventory models, and managing aggressive seasonal cash flow volatility.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & Agribusiness</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Implementing granular standard costing systems, analyzing product-line profitability, and aggressively optimizing supply chain working capital cycles.</p>
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
            <p className="text-gray-600">Executive insights into managed finance and strategic accounting.</p>
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
                <p className="text-sm text-gray-600 mb-6">Our outsourced accounting frameworks are inextricably linked to robust tax planning, ensuring that daily financial operations inherently minimize corporate tax liabilities.</p>
              </div>
              <Link to="/services/tax-and-regulatory" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Navigating NFRS Compliance: A Guide for Growing Enterprises</h3>
                <p className="text-sm text-gray-600 mb-6">Explore our executive briefing on how medium-to-large enterprises in Nepal can smoothly transition to Nepal Financial Reporting Standards.</p>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Empower Your Financial Strategy
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not let a reactive finance department stall your enterprise growth. Partner with our senior advisory team to establish elite, proactive financial leadership and highly scalable accounting frameworks.
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
