import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Calculator, AlertTriangle, FileSearch, Scale, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Strategic Tax Planning & Regulatory Advisory | Premium CA Firm Nepal
  Meta Description: Navigate Nepal's Income Tax Act and VAT Act with confidence. We provide strategic tax planning, IRD assessment support, and compliance advisory for leading enterprises.
  H1: Tax & Regulatory Services: Strategic Compliance & Optimization
*/

const faqs = [
  {
    q: "How does the Inland Revenue Department (IRD) select companies for full tax assessments?",
    a: "The IRD increasingly utilizes data analytics to flag inconsistencies across VAT returns, custom declarations, and income tax filings. Anomalies in profit margins compared to industry averages, continuous VAT credit carry-forwards, or significant related-party transactions often trigger full assessments. Our proactive compliance reviews aim to identify and rectify these red flags before the IRD initiates an audit."
  },
  {
    q: "What is required for Transfer Pricing documentation in Nepal?",
    a: "Under Section 33 of the Income Tax Act 2058, transactions between related parties must be conducted at arm's length. While Nepal doesn't have highly codified, distinct transfer pricing rules like the OECD framework, the IRD rigorously scrutinizes cross-border royalties, management fees, and inter-company loans. We assist multinationals in establishing and documenting robust arm’s length justifications to withstand IRD scrutiny."
  },
  {
    q: "Can you assist in resolving disputes resulting from a recent IRD tax assessment?",
    a: "Yes. If you receive an assessment order you disagree with, you have the right to file an administrative review with the Director General of the IRD, and subsequently appeal to the Revenue Tribunal. We provide end-to-end dispute support—from drafting rigorous, fact-based legal arguments to representing your enterprise during tribunal hearings."
  },
  {
    q: "How can a manufacturing firm optimize its VAT credit mechanisms?",
    a: "Manufacturers often face working capital bottlenecks due to trapped VAT credits, especially when exporting or dealing with mixed (taxable and exempt) transactions. We conduct deep-dive VAT reviews to ensure you are maximizing allowable input tax credits, correctly apportioning overhead VAT, and swiftly securing VAT refunds as permitted under the VAT Act 2052."
  },
  {
    q: "What are the tax implications for a foreign company operating a branch in Nepal?",
    a: "A foreign branch is treated as a resident entity for tax purposes on the income sourced in Nepal. It is subject to corporate income tax (typically 25%, depending on the sector) and a repatriation tax on profits remitted to the head office. We advise foreign entities on structuring their operations to ensure compliance with the Income Tax Act while optimizing their global effective tax rate."
  },
  {
    q: "How frequently do you advise conducting a 'Tax Health Check'?",
    a: "For medium to large enterprises, we highly recommend a comprehensive Tax Health Check annually, ideally two months before the close of the fiscal year. This allows management sufficient time to correct compliance gaps, optimize tax provisions, and gather necessary documentation (such as TDS certificates) before finalizing the statutory accounts."
  },
  {
    q: "How do you handle changes introduced in the Annual National Budget?",
    a: "The Annual Finance Act frequently alters tax rates, exemptions, and compliance timelines. Our team conducts an immediate, exhaustive analysis of the Budget Speech. Within 48 hours, we issue targeted advisory briefs to our clients, modeling exactly how the new provisions will impact their specific cash flows and strategic plans for the upcoming fiscal year."
  },
  {
    q: "Does your firm handle day-to-day TDS compliance and filings?",
    a: "Yes. Tax Deducted at Source (TDS) is a major compliance burden and a frequent source of IRD penalties for Nepalese businesses. We provide comprehensive outsourced TDS management, ensuring correct deduction rates, timely deposits, and accurate electronic filings, thereby completely removing this administrative burden from your internal finance team."
  }
];

export default function TaxRegulatory() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Calculator className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Tax & Regulatory: <br />
              <span className="text-royal-blue">Strategic Compliance & Optimization</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Navigate Nepal's intricate tax landscape with foresight and integrity. We provide sophisticated tax planning, robust compliance frameworks, and steadfast representation, transforming regulatory obligations into strategic financial advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Schedule a Tax Consultation
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
              The Reality of Regulatory Complexity
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In an era of aggressive revenue mobilization by the state, tax compliance is no longer a year-end administrative task—it is a continuous strategic imperative. Ambiguous statutory interpretations and aggressive assessments pose significant risks to corporate balance sheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Aggressive IRD Assessments</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The Inland Revenue Department is increasingly sophisticated, leveraging data integration between customs, banks, and VAT systems. Unprepared enterprises face grueling audits, resulting in unexpected tax demands and compounded penalty interest.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Statutory Ambiguity</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Frequent amendments via the annual Finance Act often create interpretive friction between taxpayers and tax officers. Without authoritative, precedent-backed interpretation, businesses risk costly compliance missteps or missed optimization opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Cross-Border Friction</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Multinational entities operating in Nepal struggle with complex transfer pricing justifications, dividend repatriation taxes, and the nuances of Double Taxation Avoidance Agreements (DTAAs), threatening global effective tax rates.
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
              Comprehensive Tax Capabilities
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Strategic Corporate Tax Planning</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We do not seek out 'grey areas' or aggressive avoidance schemes. Instead, we deeply analyze your operational model to align with intended statutory concessions, ensuring your capital structure, supply chain, and expansion plans are engineered for maximum tax efficiency under the Income Tax Act 2058.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Legally optimize the effective corporate tax rate while ensuring bulletproof statutory compliance.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Preserves working capital, enhances shareholder returns, and entirely eliminates the stress of year-end compliance shocks.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Pre-transaction structuring for mergers, or annual tax modeling for large-scale manufacturers.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Tax Planning" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" alt="Tax Assessment Representation" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">IRD Assessment & Dispute Resolution</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Facing an IRD full audit or receiving a revised assessment order is highly disruptive. Our senior tax advisors provide formidable representation. We meticulously prepare defensive documentation, manage all interactions with assessing officers, and craft rigorous appellate submissions for the Revenue Tribunal if necessary.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Defend the enterprise against aggressive or miscalculated statutory assessments.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Prevents unjustified cash outflows, resolves disputes expediently, and shields management from administrative harassment.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Representation during Section 64 (Full Audit) assessments or contesting arbitrary administrative reviews.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">VAT & Indirect Tax Advisory</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The mechanics of the Value Added Tax Act 2052 require precise execution to avoid trapped working capital. We conduct exhaustive VAT health checks, optimize input credit apportionments for mixed-transaction entities, and oversee complex refund processes for exporters and infrastructure developers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Ensure absolute transactional compliance while optimizing indirect tax cash flows.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Unlocks trapped VAT credits, prevents mismatch penalties, and streamlines monthly filing procedures.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Hydropower projects seeking VAT refunds or hospitals managing exempt vs. taxable supply complexities.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="VAT Advisory" className="w-full h-full object-cover" />
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
              Our Professional Tax Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We replace reactive, chaotic year-end filings with a structured, year-round advisory process designed to keep your enterprise securely ahead of the compliance curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Diagnostic Assessment", desc: "A rigorous initial 'Health Check' of historical filings to quantify existing exposures and systemic errors." },
              { title: "Strategic Planning", desc: "Modeling future transactions against current tax laws to architect the most tax-efficient corporate structures." },
              { title: "Implementation Support", desc: "Assisting your internal finance team in embedding robust tax accounting controls directly into daily workflows." },
              { title: "Ongoing Review", desc: "Conducting pre-filing reviews of monthly VAT, TDS, and quarterly advance tax installments to guarantee accuracy." },
              { title: "Representation", desc: "Acting as your steadfast advocate before the IRD, ensuring assessments remain fair and strictly within statutory bounds." }
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
                Interpreting Nepal's Statutory Framework
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expertise is not merely knowing the text of the Income Tax Act; it is understanding its application, historical precedence, and the unwritten administrative practices of the IRD.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">The Income Tax Act 2058</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We navigate the complexities of Section 57 (Change in Control), intricate depreciation schedules, and rigorous transfer pricing justifications to ensure your corporate structuring remains unassailable.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Value Added Tax Act 2052</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Beyond monthly filings, we leverage the VAT Act to architect highly efficient supply chains, particularly focusing on the correct classification of exempt vs. zero-rated supplies to optimize your working capital.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">The Annual Finance Act</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    The tax landscape shifts annually. We provide immediate, executive-level briefings on the strategic implications of the national budget, allowing your enterprise to pivot and adapt long before the new fiscal year commences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <Scale className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "Tax compliance should never be a source of anxiety for the C-Suite. By replacing reactive scrambling with proactive, architected compliance frameworks, we allow management to focus entirely on enterprise growth, secure in the knowledge that their regulatory flank is heavily guarded."
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
              Driving Tangible Business Outcomes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our tax advisory transcends administrative filing; it is designed to materially protect and enhance your enterprise’s financial performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Risk Reduction", desc: "Systematically eradicate historical compliance gaps, minimizing exposure to severe IRD penalties and compounded interest during future assessments." },
              { title: "Working Capital Optimization", desc: "Unlock liquidity by accelerating delayed VAT refunds, optimizing advance tax payouts, and ensuring efficient TDS recovery." },
              { title: "Strategic Agility", desc: "Enter into new markets, M&A transactions, or cross-border agreements with absolute certainty regarding the ultimate tax implications." },
              { title: "Enhanced Governance", desc: "Establish institutional-grade tax policies and internal controls that satisfy the rigorous demands of institutional investors and foreign parent companies." },
              { title: "Dispute Mitigation", desc: "Resolve ongoing tax disputes efficiently and favorably, preventing drawn-out litigation from draining management focus and corporate resources." },
              { title: "Predictable Financials", desc: "Eliminate the shock of unexpected year-end tax provisions, allowing for highly accurate budgeting and strategic financial forecasting." }
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
              Sector-Specific Tax Intelligence
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              The application of Nepal's tax law varies wildly across sectors. We bring specialized, industry-native expertise to your specific regulatory challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Technology & FDI Entities</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Structuring cross-border service agreements, navigating software royalties, and ensuring transfer pricing documentation meets strict IRD standards for foreign subsidiaries.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & FMCG</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Managing complex excise duty frameworks, optimizing input VAT credits across massive supply chains, and resolving factory-level inventory valuation disputes.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Hydropower & Infrastructure</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Navigating extensive VAT refund mechanisms for national priority projects and securing statutory tax holidays mandated under the Income Tax Act.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Healthcare & Education</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Advising on the complex bifurcation of VAT-exempt core services versus taxable auxiliary supplies to prevent massive penalty exposures.</p>
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
            <p className="text-gray-600">Expert guidance on Nepal’s most pressing tax and regulatory concerns.</p>
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
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Corporate Advisory</h3>
                <p className="text-sm text-gray-600 mb-6">Ensure your strategic growth initiatives, M&A activities, and corporate restructuring are inherently tax-efficient and legally sound.</p>
              </div>
              <Link to="/services/corporate-advisory" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Annual Budget 2081/82: Business Impact Analysis</h3>
                <p className="text-sm text-gray-600 mb-6">Read our executive summary on the latest amendments to the Finance Act and how they directly impact enterprise taxation in Nepal.</p>
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
            Optimize Your Tax Position Today
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not let regulatory ambiguity hinder your growth. Partner with our senior tax advisors to build a resilient, highly optimized compliance framework that withstands the most rigorous IRD scrutiny.
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
