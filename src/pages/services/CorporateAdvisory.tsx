import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, TrendingUp, Network, Lightbulb, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Corporate Advisory & Business Restructuring in Nepal | Premium CA Firm
  Meta Description: Expert corporate advisory for M&A, business restructuring, and strategic growth in Nepal. Navigate the Companies Act and NRB directives with our senior advisors.
  H1: Corporate Advisory: Architecting Strategic Growth
*/

const faqs = [
  {
    q: "How do you navigate the regulatory complexities of Mergers and Acquisitions (M&A) in Nepal?",
    a: "M&A in Nepal requires orchestration across multiple regulatory bodies. Beyond the standard Companies Act 2063 requirements at the OCR, sector-specific approvals are mandatory. For instance, BFIs require Nepal Rastra Bank (NRB) approval, while insurance firms must navigate the Nepal Insurance Authority’s directives. We manage this entire cross-agency approval matrix, ensuring compliance without stalling deal momentum."
  },
  {
    q: "What role does your firm play in corporate restructuring?",
    a: "Corporate restructuring is often triggered by the need to optimize capital, prepare for an IPO, or untangle complex family-owned conglomerates. We evaluate your current operational model, identify tax-efficient restructuring pathways under Section 57 of the Income Tax Act, and manage the legal execution of demergers or holding company formations, ensuring seamless continuity of business."
  },
  {
    q: "Can you assist with raising capital or securing debt financing?",
    a: "Yes. Lenders and institutional investors require rigorous financial models and feasibility studies before deploying capital. We prepare bankable detailed project reports (DPRs), conduct stress-tested financial modeling, and assist management in negotiating term sheets with a consortium of banks or private equity firms operating in Nepal."
  },
  {
    q: "How do you approach designing a corporate governance framework?",
    a: "We move beyond boilerplate 'Code of Conduct' documents. We design bespoke governance architectures that define clear board mandates, establish active audit and risk committees, and create transparent reporting lines. This is particularly crucial for companies planning to list on the Nepal Stock Exchange (NEPSE) or seeking foreign institutional investment."
  },
  {
    q: "Do you advise on joint venture (JV) structuring?",
    a: "Absolutely. Successful JVs require more than just a shared vision; they require meticulous legal and financial structuring to protect both parties. We advise on equity splits, profit repatriation mechanisms (especially in FDI scenarios under FITTA), dispute resolution frameworks, and exit strategies, ensuring the JV agreement is robust and enforceable under Nepalese law."
  },
  {
    q: "What is your approach to operational performance improvement?",
    a: "We deploy a data-driven approach to identify bottlenecks eroding your EBITDA margins. This involves deep-dive analyses of your cost structures, supply chain inefficiencies, and working capital cycles. We then work alongside your management team to implement stringent financial controls and KPI monitoring systems that drive sustainable profitability."
  },
  {
    q: "How do you manage the valuation aspects during a corporate transaction?",
    a: "Valuation is a critical friction point in any transaction. While we offer a standalone Due Diligence & Valuation service, within our corporate advisory scope, we utilize internationally recognized methodologies (DCF, Net Asset Value, Comparable Multiples) adjusted for Nepal's specific risk premiums to establish a defensible, objective enterprise value that withstands OCR and IRD scrutiny."
  },
  {
    q: "At what stage of a business lifecycle should we engage your corporate advisory services?",
    a: "We advise clients across the entire lifecycle. Whether you are a high-growth startup navigating Series A funding, a mature enterprise considering diversification, or a legacy conglomerate requiring succession planning and restructuring, our strategic interventions are tailored to your specific growth phase and overarching business objectives."
  }
];

export default function CorporateAdvisory() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Briefcase className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Corporate Advisory: <br />
              <span className="text-royal-blue">Architecting Strategic Growth</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Transform corporate ambition into measurable enterprise value. We provide C-suite executives and Boards with elite, data-driven counsel on complex restructuring, M&A transactions, and operational optimization within Nepal's evolving economic landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Engage Our Advisors
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
              The Barriers to Enterprise Expansion
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Scaling an enterprise in Nepal requires navigating a labyrinth of structural, financial, and regulatory constraints. Without decisive, expert intervention, growth initiatives often stall, destroying potential shareholder value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Structural Inefficiencies</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Many Nepalese conglomerates operate under legacy structures that obscure financial visibility, complicate succession planning, and trigger unnecessary tax liabilities under stringent cross-holding regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Capital Constraints</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Securing institutional debt or private equity requires rigorous, bankable financial modeling. Unstructured funding requests frequently face rejection from BFIs due to perceived strategic misalignment or inadequate risk mitigation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Transaction Friction</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Mergers and acquisitions often fail not because of poor strategic fit, but due to disastrous post-merger integration, miscalculated valuations, or failure to secure mandatory approvals from bodies like the OCR or NRB in a timely manner.
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
              Catalysts for Corporate Transformation
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Mergers, Acquisitions & JVs</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We act as the strategic architect for your most critical corporate transactions. From identifying synergistic targets to negotiating term sheets and navigating the complex multi-agency approval processes in Nepal, we ensure transactions close efficiently and create immediate stakeholder value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Facilitate inorganic growth, market consolidation, or strategic market entry via joint ventures.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Maximizes deal value, entirely mitigates regulatory deal-breakers, and ensures rapid post-merger integration.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A manufacturing entity acquiring a competitor, or a local firm structuring a JV with a foreign technology partner.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Mergers and Acquisitions" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Corporate Restructuring" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Corporate Restructuring & Succession</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Legacy structures stifle agility. We design and execute comprehensive demergers, spin-offs, and holding company formations. For family-owned conglomerates, we facilitate seamless succession planning, establishing holding structures that preserve wealth while professionalizing management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Optimize capital allocation, separate high-risk and low-risk assets, and professionalize governance.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Unlocks trapped enterprise value, significantly optimizes tax burdens, and ensures multi-generational business continuity.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A family-owned group separating its real estate assets from its core trading operations.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Financial Modeling & Capital Advisory</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Capital intensive projects require flawless financial architecture. We build robust, stress-tested financial models and Detailed Project Reports (DPRs) that withstand the rigorous scrutiny of domestic BFIs, multilateral agencies, and private equity investors.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Secure vital growth capital by proving project viability and demonstrating impeccable risk mitigation.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Accelerates funding approvals, secures highly favorable debt covenants, and provides management with a clear financial roadmap.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A hydropower developer seeking syndicated loan financing from a consortium of Nepalese banks.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Capital Advisory" className="w-full h-full object-cover" />
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
              The Strategic Advisory Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We do not offer pre-packaged templates. Every advisory engagement is a bespoke intervention, driven by rigorous data analysis and deep contextual understanding of your unique market position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Discovery", desc: "Intensive alignment with the Board to define absolute strategic objectives and evaluate the current operational baseline." },
              { title: "Diagnostic", desc: "Rigorous financial, structural, and regulatory analysis to identify critical constraints and latent value opportunities." },
              { title: "Structuring", desc: "Architecting the optimal transaction or restructuring pathway, heavily optimized for tax efficiency and legal compliance." },
              { title: "Execution", desc: "Managing the complexities of implementation—from negotiating terms to securing OCR and sectoral approvals." },
              { title: "Integration", desc: "Providing robust post-transaction support to ensure operational synergies are rapidly realized and sustained." }
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
                Navigating the Legal Architecture of Growth
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A brilliant corporate strategy is worthless if it cannot be legally executed in Nepal. We ensure your strategic ambitions are built upon an unshakeable regulatory foundation.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">The Companies Act 2063</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We expertly manage the procedural rigidities of the OCR. Whether executing a complex scheme of arrangement, altering share capital, or managing minority shareholder rights, we ensure your corporate maneuvers are legally impenetrable.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Income Tax Act 2058 (Section 57)</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Changes in ownership structure (exceeding 50%) trigger severe tax implications under Section 57. We architect M&A and restructuring timelines to strategically mitigate these deemed disposal liabilities, preserving massive amounts of transaction value.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Sectoral Regulatory Directives</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    For highly regulated sectors, we manage the critical pre-approvals required from the Nepal Rastra Bank (for BFIs) or the Nepal Insurance Authority, ensuring that statutory capital requirements and cross-holding limits are strictly observed during consolidation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <Briefcase className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "In corporate advisory, legal compliance and financial strategy cannot exist in silos. By synthesizing deep regulatory knowledge with aggressive commercial acumen, we allow management to pursue ambitious growth targets without fear of administrative roadblocks or hidden liabilities."
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
              Engineering Lasting Enterprise Value
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our advisory interventions are specifically designed to yield high-impact, measurable results that fundamentally alter the trajectory of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Optimized Capital", desc: "Unlock trapped liquidity and restructure debt/equity ratios to dramatically improve overarching capital efficiency and ROI." },
              { title: "Seamless Transitions", desc: "Facilitate smooth, conflict-free ownership transitions and generational succession, preserving legacy wealth and business continuity." },
              { title: "Accelerated Funding", desc: "Dramatically shorten the time required to secure institutional debt or private equity through the presentation of bankable, rigorous financial models." },
              { title: "Frictionless Integration", desc: "Ensure that M&A transactions quickly move past the legal closing to realize actual operational and financial synergies." },
              { title: "Robust Governance", desc: "Implement institutional-grade governance frameworks that attract premium valuations and sophisticated international investors." },
              { title: "Sustainable Scale", desc: "Re-architect operational and corporate structures to safely support aggressive geographical or vertical market expansion." }
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
              Contextual Industry Expertise
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Strategic advice must be deeply rooted in industry realities. We leverage our extensive sectoral exposure to deliver highly contextualized advisory services across Nepal’s economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Banking & Insurance</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Navigating NRB and NIA mandated 'forced' mergers, advising on capital restructuring to meet paid-up capital requirements, and managing post-merger cultural integration.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Hydropower & Infrastructure</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Structuring complex consortium financing models, advising on optimal debt-to-equity ratios, and preparing entities for highly regulated Initial Public Offerings (IPOs).</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & Trading Conglomerates</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Executing complex demergers to separate trading arms from manufacturing units, optimizing holding structures, and formalizing family governance charters.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Technology & Startups</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Advising on venture capital term sheets, structuring employee stock ownership plans (ESOPs), and preparing financial data rooms for Series A funding rounds.</p>
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
            <p className="text-gray-600">Insights into complex corporate advisory engagements.</p>
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
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Due Diligence & Valuation</h3>
                <p className="text-sm text-gray-600 mb-6">Before executing any corporate transaction, empower your decision-making with our exhaustive financial due diligence and objective enterprise valuation services.</p>
              </div>
              <Link to="/services/due-diligence-and-valuation" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Optimizing Capital Structures in High-Interest Environments</h3>
                <p className="text-sm text-gray-600 mb-6">Explore strategic methodologies for refinancing corporate debt and optimizing equity structures amidst Nepal's fluctuating liquidity landscape.</p>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Execute Your Strategic Vision
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not let structural inefficiencies or regulatory red tape stall your enterprise growth. Partner with our senior advisory team to architect and flawlessly execute your most ambitious corporate transactions.
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
