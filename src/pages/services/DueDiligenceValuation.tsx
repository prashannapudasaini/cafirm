import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Search, Calculator, ShieldCheck, Scale, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Due Diligence & Business Valuation in Nepal | Premium CA Firm
  Meta Description: Expert financial, legal, and tax due diligence in Nepal. Defensible business valuations for M&A, FDI, and dispute resolution utilizing DCF and multiple methodologies.
  H1: Due Diligence & Valuation: Quantifying True Enterprise Value
*/

const faqs = [
  {
    q: "How does your Due Diligence differ from a standard Statutory Audit?",
    a: "A statutory audit merely opines on whether financial statements are free from material misstatement according to historical accounting standards. Due Diligence is an investigative, forward-looking process. We actively hunt for hidden liabilities (e.g., unrecorded tax exposures, pending litigation, aggressive revenue recognition) that could materially impact a transaction's valuation or strategic viability."
  },
  {
    q: "What types of Due Diligence do you conduct?",
    a: "We conduct comprehensive Financial, Tax, and Commercial Due Diligence. While we are not a law firm, we work alongside leading corporate lawyers to integrate Legal Due Diligence into our findings. This ensures you receive a holistic view of the target entity's operational, financial, and regulatory health."
  },
  {
    q: "What valuation methodologies do you employ in the Nepalese context?",
    a: "Valuation is both an art and a science. We employ internationally recognized methodologies—primarily Discounted Cash Flow (DCF), Comparable Company Multiples, and Net Asset Value (NAV)—rigorously adjusted for Nepal's specific macroeconomic factors, liquidity discounts, and sector-specific risk premiums."
  },
  {
    q: "Why is a formal valuation report necessary for foreign investment (FDI)?",
    a: "Under the Foreign Investment and Technology Transfer Act (FITTA) and NRB directives, any cross-border share transfer or acquisition requires a defensible, independent valuation. The Department of Industry (DOI) and Nepal Rastra Bank scrutinize these valuations to prevent capital flight and ensure fair value transactions. Our reports are built specifically to withstand this intense regulatory scrutiny."
  },
  {
    q: "Can you assist with valuing intangible assets?",
    a: "Yes. Valuing intellectual property, brand equity, or complex software algorithms requires highly specialized modeling. We employ relief-from-royalty or excess earnings methodologies to quantify these intangibles, which is increasingly critical for technology startups seeking venture capital or entities structuring Technology Transfer Agreements (TTAs)."
  },
  {
    q: "How do you handle valuation disputes between shareholders?",
    a: "In cases of shareholder disputes or partner buyouts, emotion often overrides financial reality. We act as an independent, objective expert. We provide a rigorous, data-driven valuation that serves as a neutral baseline for negotiations, frequently preventing the dispute from escalating into costly, drawn-out litigation."
  },
  {
    q: "How long does a comprehensive Due Diligence process take?",
    a: "The timeline is entirely dependent on the target's size, the complexity of its operations, and the quality of its internal records (the 'data room'). A standard financial and tax due diligence for a mid-market Nepalese enterprise typically requires 3 to 6 weeks of intensive investigation and analysis."
  },
  {
    q: "What is a 'Quality of Earnings' (QoE) report?",
    a: "A QoE report strips away accounting anomalies, one-time gains, and aggressive accruals to reveal the true, sustainable cash-generating ability of a business. It is a critical component of our financial due diligence, ensuring buyers do not overpay based on artificially inflated historical EBITDA."
  }
];

export default function DueDiligenceValuation() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      
      {/* 1. Advisory Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Search className="w-4 h-4 text-[#a5caff]" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Due Diligence & Valuation: <br />
              <span className="text-[#a5caff]">Quantifying True Enterprise Value</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Corporate transactions demand absolute clarity. We provide institutional-grade due diligence to uncover hidden liabilities, and rigorous, defensible valuations that empower decisive negotiations and withstand stringent regulatory scrutiny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Engage Our Advisory Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Challenges */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
              The Perils of Information Asymmetry
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              In Mergers and Acquisitions (M&A) or capital raising, relying on surface-level financials is extraordinarily dangerous. Sellers inherently highlight strengths; buyers require an aggressive, independent investigation to protect their capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Hidden Liabilities</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                A target company may appear highly profitable, yet harbor massive unrecorded tax liabilities, pending IRD assessments, or crippling off-balance-sheet debt that immediately destroys shareholder value post-acquisition.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Valuation Disconnects</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Founders often vastly overvalue their enterprises based on emotional attachment or unrealistic growth projections. Without an objective, data-driven valuation model, transaction negotiations quickly devolve into irreconcilable deadlocks.
              </p>
            </div>

            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Regulatory Scrutiny</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                For cross-border transactions, the Nepal Rastra Bank (NRB) and Department of Industry (DOI) strictly mandate independent valuations. Submitting poorly constructed, non-compliant valuations results in immediate transaction blockages and trapped capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#020A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Specialized Transaction Advisory
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Financial & Tax Due Diligence</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We deploy senior forensic and tax specialists to dissect the target’s financial history. We produce exhaustive 'Quality of Earnings' (QoE) reports, identify historical tax exposures (VAT/TDS anomalies), and assess the sustainability of working capital—providing buyers with the leverage needed to negotiate purchase price adjustments or comprehensive indemnities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Uncover material risks and validate historical EBITDA before capital is irrevocably committed.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> Prevents disastrous acquisitions, protects post-merger shareholder value, and informs optimal deal structuring.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> A Private Equity firm evaluating a multi-million dollar acquisition of a Nepalese manufacturing plant.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Financial Due Diligence" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Business Valuation" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Enterprise & Equity Valuation</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Valuation is not a theoretical exercise; it requires deep market context. We build complex, multi-scenario Discounted Cash Flow (DCF) models, cross-referenced with comparable market multiples. We aggressively adjust for Nepal-specific country risk premiums and liquidity constraints to deliver a highly defensible, objective enterprise value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Establish an authoritative financial baseline for negotiations, regulatory filings, or dispute resolution.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> Maximizes exit multiples for sellers, prevents overpayment for buyers, and effortlessly passes NRB/DOI regulatory scrutiny.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Valuing a high-growth fintech startup for a Series B venture capital funding round.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Vendor Due Diligence (Sell-Side)</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We assist founders and boards in preparing their enterprise for a successful exit or capital raise. By conducting a rigorous, independent 'mock' due diligence before engaging buyers, we identify and remediate internal weaknesses—ensuring maximum valuation and a highly accelerated, frictionless transaction process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Regain control of the M&A narrative by proactively addressing operational and financial vulnerabilities.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> Prevents buyers from using discovered flaws to aggressively negotiate down the purchase price at the last minute.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> A family-owned conglomerate preparing to divest a non-core subsidiary to a foreign institutional investor.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop" alt="Vendor Due Diligence" className="w-full h-full object-cover" />
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
              Our Diagnostic Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We employ a highly aggressive, data-centric approach to transaction advisory, stripping away accounting illusions to reveal fundamental commercial reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Scoping", desc: "Aligning intimately with the buyer’s strategic intent to focus our investigation on the most critical value drivers and deal-breakers." },
              { title: "Interrogation", desc: "Deploying secure virtual data rooms (VDRs) and conducting rigorous Q&A sessions with target management to stress-test assertions." },
              { title: "Modeling", desc: "Rebuilding financial statements to calculate normalized EBITDA, free cash flows, and normalized working capital requirements." },
              { title: "Reporting", desc: "Delivering executive-level 'Red Flag' reports that clearly quantify identified risks in absolute monetary terms." },
              { title: "Negotiation Support", desc: "Advising the M&A legal team on drafting specific warranties, indemnities, and earn-out mechanisms to shield the buyer." }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-up">
                <div className="text-5xl font-bold text-white/10 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-white/20 dark:bg-[#020A1A]/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Regulatory Perspective */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
                Navigating the Regulatory Imperative
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                In Nepal, a valuation report is not merely a negotiation tool; it is a strict statutory requirement designed to prevent tax evasion and capital flight.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">NRB & DOI Mandates (FDI)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Any cross-border share transfer requires an independent valuation to ensure the transaction occurs at 'fair market value'. We structure our reports to proactively address the specific macroeconomic and risk factors scrutinized by the central bank.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">Income Tax Act (Section 57)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    A change in control (exceeding 50%) triggers a deemed disposal of assets and liabilities. Our due diligence explicitly models these massive Section 57 tax exposures, ensuring they are factored into the final purchase price or indemnified by the seller.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">Office of the Company Registrar (OCR)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Issuing shares at a premium requires a formalized valuation report to be filed with the OCR. We provide the statutory backing required to execute complex capital restructurings and venture capital equity injections.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white dark:bg-[#020A1A] p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100 dark:border-white/10">
                <Search className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "A transaction's success is determined long before the final contracts are signed. By uncovering foundational risks and establishing an unassailable valuation, we shift the balance of power in the boardroom entirely in our client's favor."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why It Matters (Outcomes) */}
      <section className="py-20 bg-white dark:bg-[#020A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
              Protecting Transaction Value
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our due diligence and valuation services provide absolute clarity, empowering you to execute, renegotiate, or aggressively abandon high-stakes transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Capital Protection", desc: "Prevent the disastrous destruction of capital associated with acquiring an entity masking severe operational or tax liabilities." },
              { title: "Negotiation Leverage", desc: "Utilize quantified 'Quality of Earnings' adjustments to aggressively negotiate down inflated purchase prices or demand escrow holdbacks." },
              { title: "Regulatory Clearance", desc: "Ensure complex cross-border M&A transactions sail through NRB and DOI approvals via highly defensible, compliant valuation reports." },
              { title: "Dispute Resolution", desc: "Neutralize emotional shareholder disputes or complicated partner buyouts with objective, data-backed enterprise valuations." },
              { title: "Synergy Validation", desc: "Test the target's financial infrastructure to ensure anticipated post-merger synergies are realistically achievable, not just spreadsheet fantasies." },
              { title: "Investor Confidence", desc: "Present prospective institutional investors or venture capitalists with independent valuation metrics that accelerate term sheet finalization." }
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10 animate-up">
                <CheckCircle2 className="w-6 h-6 text-royal-blue shrink-0 mr-4" />
                <div>
                  <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">{outcome.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{outcome.desc}</p>
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
              Sector-Specific Transaction Expertise
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Due diligence must be deeply contextualized to the target's industry. We bring specialized advisory teams to uncover the unique operational risks within Nepal's key sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Technology & E-Commerce</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Valuing proprietary algorithms, auditing aggressive SaaS revenue recognition models, and conducting diligence on complex, multi-tiered equity structures.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Hydropower & Energy</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Modeling complex project finance DCFs, auditing highly sensitive Power Purchase Agreements (PPAs), and analyzing capital expenditure (CAPEX) overrun risks.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & FMCG</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Conducting deep-dive audits into inventory valuation methodologies, unearthing hidden excise duty liabilities, and normalizing aggressive working capital assumptions.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Banking & Insurance</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Executing specialized diligence for NRB-mandated mergers, scrutinizing loan loss provisioning adequacy, and valuing complex financial instruments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Executive clarity on navigating complex corporate transactions.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#020A1A] border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden animate-up">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 dark:bg-[#0A1128] transition-colors focus:outline-none"
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

      {/* 9. Related Insights & Services */}
      <section className="py-20 bg-white dark:bg-[#020A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 animate-up">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-2">Continue Exploring</h2>
            <div className="w-16 h-1 bg-royal-blue rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Related Service</span>
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors">Corporate Advisory</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Following a successful transaction, engage our advisory team to manage post-merger integration and corporate restructuring to realize anticipated synergies.</p>
              </div>
              <Link to="/services/corporate-advisory" className="inline-flex items-center text-sm font-bold text-primary-dark-blue dark:text-white group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors">Section 57: Mitigating Tax Risks During M&A</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Read our critical analysis of the Income Tax Act's Change in Control provisions and how buyers must protect themselves during Nepalese transactions.</p>
              </div>
              <Link to="/insights" className="inline-flex items-center text-sm font-bold text-primary-dark-blue dark:text-white group-hover:text-royal-blue transition-colors">
                Read Article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="py-24 bg-primary-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Execute Transactions with Certainty
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not let information asymmetry compromise your capital. Partner with our senior transaction advisory team to uncover critical risks and establish unassailable enterprise valuations.
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
