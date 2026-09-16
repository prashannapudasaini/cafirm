import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, ShieldAlert, Activity, Scale, ShieldCheck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Risk Management & Compliance Advisory | Premium CA Firm Nepal
  Meta Description: Protect your enterprise with elite risk management and AML/CFT compliance frameworks. Expert advisory for navigating NRB directives and complex regulatory environments in Nepal.
  H1: Risk & Compliance: Safeguarding Enterprise Resilience
*/

const faqs = [
  {
    q: "How do your services differ from a standard statutory audit?",
    a: "A statutory audit is a retrospective examination of financial statements to ensure historical compliance. Our Risk & Compliance advisory is a forward-looking, proactive engagement. We assess systemic vulnerabilities, design resilient internal control architectures, and implement continuous monitoring mechanisms to prevent risks from crystallizing into financial or reputational damage."
  },
  {
    q: "What is required for AML/CFT compliance under current Nepal regulations?",
    a: "Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) directives apply not just to BFIs, but increasingly to real estate, casinos, and designated non-financial businesses and professions (DNFBPs). Compliance requires rigorous KYC/CDD (Customer Due Diligence) procedures, robust transaction monitoring systems, and mandatory reporting of suspicious activities to the Financial Information Unit (FIU) of the NRB."
  },
  {
    q: "How can you assist a commercial bank facing a regulatory penalty from the NRB?",
    a: "We deploy rapid response teams to conduct root-cause analyses of the cited regulatory breaches. We then work collaboratively with bank management to design a remediation roadmap, overhaul the defective compliance frameworks, and assist in drafting rigorous, fact-based responses to the NRB to mitigate further sanctions and restore regulatory confidence."
  },
  {
    q: "What is Enterprise Risk Management (ERM) and why is it necessary for a manufacturing firm?",
    a: "ERM is a holistic framework that identifies and manages risk across the entire organization—not just financial risk, but operational, supply chain, and strategic risks. For a manufacturer in Nepal, this means systematically mitigating risks related to raw material volatility, fluctuating import duties, labor disruptions, and shifting VAT regulations, ensuring stable margins despite market turbulence."
  },
  {
    q: "Do you provide IT and cybersecurity risk assessments?",
    a: "Yes. In an era of aggressive digital transformation, IT risk is enterprise risk. Our Information Systems (IS) audit specialists evaluate your IT General Controls (ITGC), data privacy frameworks, and cybersecurity postures. We ensure your digital infrastructure complies with industry-specific mandates, such as the NRB IT Guidelines for financial institutions."
  },
  {
    q: "How do you handle internal fraud investigations?",
    a: "We conduct highly discreet forensic accounting investigations. Utilizing advanced data analytics, we trace financial anomalies, quantify the extent of the fraud, and identify the control failures that permitted it. Post-investigation, we provide actionable recommendations to seal those vulnerabilities and assist in preparing evidence for legal or disciplinary action."
  },
  {
    q: "Can you help us build an internal compliance team from scratch?",
    a: "Absolutely. We offer compliance capacity-building services. We will design the departmental structure, draft comprehensive Standard Operating Procedures (SOPs) and risk charters, and provide intensive, hands-on training to your internal staff, ensuring they are fully equipped to manage the compliance architecture we deploy."
  },
  {
    q: "How frequently should our internal controls be reviewed?",
    a: "Risk is dynamic. A control that was effective a year ago may be obsolete today due to operational scaling or regulatory amendments. We advise a comprehensive, independent review of your internal control environment annually, supplemented by continuous monitoring of high-risk processes such as procurement, treasury management, and payroll."
  }
];

export default function RiskCompliance() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <ShieldCheck className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Risk & Compliance: <br />
              <span className="text-royal-blue">Safeguarding Enterprise Resilience</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              In an era of intensified regulatory scrutiny, defensive posturing is insufficient. We architect proactive enterprise risk management frameworks and rigorous internal controls that protect your assets, preserve corporate reputation, and ensure uninterrupted operational continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Assess Your Risk Exposure
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
              The Cost of Compliance Failure
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Regulatory bodies in Nepal are pivoting from passive oversight to aggressive enforcement. A single systemic failure in compliance or risk management can now trigger catastrophic financial penalties, board-level liabilities, and irreversible reputational damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Regulatory Sanctions</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Aggressive enforcement of Anti-Money Laundering (AML) directives and rigid sectoral mandates by the Nepal Rastra Bank (NRB) mean that procedural oversights now result in multi-million rupee fines and severe operational restrictions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Operational Vulnerability</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                As enterprises scale rapidly across Nepal, foundational internal controls often fracture. This operational 'debt' inevitably leads to procurement fraud, massive inventory shrinkage, and significant revenue leakage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Cyber & Data Exposure</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The rapid digitization of Nepalese businesses has far outpaced the implementation of robust Information Security (IS) controls, leaving critical financial data and proprietary assets dangerously exposed to systemic breaches.
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
              Strategic Risk & Compliance Capabilities
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Enterprise Risk Management (ERM)</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We deploy comprehensive ERM architectures that elevate risk discussions from the operational basement to the boardroom. We systematically identify, quantify, and prioritize risks across your entire value chain—allowing management to proactively deploy capital and resources to mitigate high-impact vulnerabilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Transition the organization from reactive crisis management to proactive risk mitigation.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Drastically reduces earnings volatility and provides the Board with immense clarity regarding strategic threats.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Large conglomerates seeking to standardize risk protocols across diverse operating subsidiaries.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop" alt="Enterprise Risk Management" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Internal Controls Design" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Internal Controls Design & Optimization</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A business without robust internal controls is hemorrhaging value. We conduct exhaustive analyses of your critical processes—procurement to pay, order to cash, inventory management—and engineer stringent, segregation-of-duties focused control mechanisms that are highly resistant to circumvention or fraud.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Eliminate operational friction and structurally prevent financial leakage and internal fraud.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Immediately improves EBITDA margins and ensures financial data integrity for executive decision-making.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Manufacturing or trading firms experiencing unexplained inventory shrinkage or procurement anomalies.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">AML/CFT & Regulatory Compliance Readiness</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Regulatory compliance cannot be left to chance. We design and implement airtight Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) frameworks. From robust KYC/CDD protocols to transaction monitoring and FIU reporting structures, we ensure your operations are perpetually audit-ready.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Ensure absolute adherence to stringent national and international regulatory mandates.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Completely shields the enterprise and its directors from devastating civil and criminal regulatory sanctions.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> BFIs, insurance companies, real estate developers, and high-value dealers navigating FIU mandates.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="AML Compliance" className="w-full h-full object-cover" />
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
              Effective risk management is a continuous lifecycle, not a static binder on a shelf. We embed resilience directly into your daily operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Assessment", desc: "Exhaustive audits of current risk exposures, compliance gaps, and the existing control environment architecture." },
              { title: "Review", desc: "Benchmarking current practices against stringent industry standards, NRB directives, and global best practices." },
              { title: "Strategic Planning", desc: "Architecting bespoke, scalable control frameworks and compliance SOPs that do not stifle operational agility." },
              { title: "Implementation Support", desc: "Collaborating deeply with management to embed new controls, re-train staff, and deploy automated monitoring tools." },
              { title: "Monitoring", desc: "Establishing continuous feedback loops and KPI dashboards to ensure controls evolve alongside emerging business risks." }
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
                Navigating Nepal's Compliance Frameworks
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We translate dense regulatory code into actionable, streamlined operational procedures, ensuring compliance acts as a shield rather than a costly administrative burden.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">NRB Unified Directives</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    For BFIs, we meticulously align internal risk models with the highly prescriptive mandates of the NRB—encompassing credit risk provisioning, liquidity ratios, and rigorous corporate governance stipulations.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">AML/CFT Act</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    The FIU’s enforcement of AML/CFT is intensifying. We ensure your reporting mechanisms, politically exposed person (PEP) screening, and ultimate beneficial ownership (UBO) identification processes are robust enough to withstand deep regulatory audits.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Corporate Governance Directives</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Whether adhering to the Companies Act stipulations on related-party transactions or SEBON’s corporate governance guidelines for listed entities, we establish unassailable frameworks that protect minority shareholders and institutional investors alike.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <ShieldCheck className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "In the modern regulatory landscape, ignorance is not a defense; it is a profound liability. By architecting compliance directly into the operational DNA of the enterprise, we allow the Board of Directors to sleep soundly, confident that their legacy and capital are entirely secure."
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
              Securing Tangible Business Outcomes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our risk and compliance interventions are specifically designed to yield high-impact results that protect and enhance enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Risk Reduction", desc: "Systematically identify and neutralize internal fraud, revenue leakage, and critical compliance vulnerabilities before they trigger catastrophic losses." },
              { title: "Operational Efficiency", desc: "Streamline Byzantine, legacy operational processes through the intelligent redesign and automation of internal controls." },
              { title: "Enhanced Governance", desc: "Provide the Board of Directors and Audit Committees with the objective, data-driven assurance required to fulfill their fiduciary duties." },
              { title: "Compliance Readiness", desc: "Maintain a perpetual state of audit-readiness, entirely eliminating the disruptive panic associated with sudden NRB or FIU inspections." },
              { title: "Stronger Investor Confidence", desc: "Demonstrate institutional-grade risk maturity to foreign investors, private equity firms, and syndicated lenders, facilitating smoother capital raising." },
              { title: "Sustainable Growth", desc: "Build a resilient operational foundation capable of securely supporting rapid market expansion without fracturing under stress." }
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
              Sector-Specific Risk Intelligence
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Risk is entirely contextual. We deploy specialized advisory teams possessing deep, native experience within Nepal’s most highly regulated and complex industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Banking & Financial Institutions</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Ensuring absolute adherence to complex NRB directives, deploying rigorous AML/CFT transaction monitoring, and fortifying IT General Controls against cyber threats.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & Supply Chain</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Engineering stringent procurement-to-pay controls, mitigating widespread inventory shrinkage, and implementing anti-fraud mechanisms across decentralized factory operations.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Real Estate & Construction</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Navigating new FIU reporting mandates for DNFBPs, establishing robust contractor payment controls, and managing complex project finance compliance.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">NGOs & Development Agencies</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Architecting transparent fund utilization frameworks that satisfy stringent international donor requirements and Social Welfare Council (SWC) regulations.</p>
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
            <p className="text-gray-600">Expert guidance on mitigating enterprise risk and navigating complex compliance mandates.</p>
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
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Audit & Assurance</h3>
                <p className="text-sm text-gray-600 mb-6">Pair our proactive risk management frameworks with rigorous statutory and internal audit services to provide stakeholders with absolute transparency.</p>
              </div>
              <Link to="/services/audit-and-assurance" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Navigating Nepal Rastra Bank's Evolving AML Directives</h3>
                <p className="text-sm text-gray-600 mb-6">Read our executive briefing on the recent amendments to AML/CFT requirements and how DNFBPs must urgently adapt their compliance structures.</p>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Fortify Your Enterprise Today
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not wait for a regulatory sanction or internal fraud event to expose your vulnerabilities. Partner with our senior advisory team to build a resilient, institutional-grade risk and compliance architecture.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Schedule a Risk Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
