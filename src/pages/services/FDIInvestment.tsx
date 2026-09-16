import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, Globe, FileKey, BarChart4, Network, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: FDI & Investment Advisory in Nepal | Premium CA Firm
  Meta Description: Expert Foreign Direct Investment (FDI) advisory in Nepal. Navigate FITTA, secure DOI/IBN approvals, and ensure seamless capital repatriation under NRB bylaws.
  H1: FDI & Investment Advisory: Facilitating Seamless Market Entry
*/

const faqs = [
  {
    q: "What is the minimum threshold for Foreign Direct Investment (FDI) in Nepal?",
    a: "Under the current Foreign Investment and Technology Transfer Act (FITTA) framework, the minimum FDI threshold is NPR 20 Million (approximately USD 150,000) per foreign investor. However, this threshold is subject to periodic reviews by the Government of Nepal. We continuously monitor these thresholds and advise clients on optimal initial capital structuring."
  },
  {
    q: "Which regulatory bodies are involved in approving FDI?",
    a: "FDI approval is a multi-agency process. Investments under NPR 6 Billion are approved by the Department of Industry (DOI). Investments exceeding NPR 6 Billion fall under the jurisdiction of the Investment Board Nepal (IBN). Furthermore, post-approval, bringing foreign currency into Nepal requires explicit recording and approval from the Nepal Rastra Bank (NRB)."
  },
  {
    q: "Can a foreign company acquire shares in an existing Nepalese company?",
    a: "Yes. Foreign investors can acquire shares in existing Nepalese entities through a Share Purchase Agreement (SPA). However, this transaction requires prior approval from the DOI (or IBN) and the NRB, and is subject to rigorous valuation scrutiny by the Office of the Company Registrar (OCR) and the Inland Revenue Department (IRD) to assess potential capital gains."
  },
  {
    q: "Are there any sectors in Nepal restricted for foreign investment?",
    a: "Yes, the 'Negative List' under FITTA restricts FDI in certain sectors, including poultry farming, primary agriculture, real estate (excluding construction industries), retail business, and mass media. We conduct exhaustive pre-investment feasibility studies to ensure your intended business model does not conflict with this Negative List."
  },
  {
    q: "How difficult is it to repatriate dividends or profits from Nepal?",
    a: "Repatriation is a statutory right under FITTA, provided that the initial investment was legally approved and recorded with the NRB. The 'difficulty' often stems from poor initial structuring or failure to maintain immaculate audit and tax records. Our advisory ensures that your corporate structure and compliance frameworks are built specifically to facilitate frictionless repatriation."
  },
  {
    q: "What is a Technology Transfer Agreement (TTA) and is it considered FDI?",
    a: "A TTA allows foreign entities to transfer proprietary knowledge, trademarks, or technical services to a Nepalese enterprise in exchange for royalties or fees. Under Nepalese law, a TTA is classified as a form of foreign investment and requires DOI approval. We assist in drafting TTAs and securing approvals for royalty repatriation."
  },
  {
    q: "How does the Double Taxation Avoidance Agreement (DTAA) impact FDI?",
    a: "Nepal has signed DTAAs with several countries (including India, China, South Korea, etc.). These agreements can significantly reduce withholding taxes on dividends, interest, and royalties repatriated to the investor's home country. We structure investments to legally maximize the benefits of these bilateral treaties."
  },
  {
    q: "How long does the entire FDI approval and company registration process take?",
    a: "A standard greenfield FDI project involving DOI approval, OCR incorporation, NRB recording, and local ward registration typically takes 6 to 10 weeks, assuming all foreign documentation is appropriately notarized and consularized. We actively manage this timeline, eliminating bureaucratic delays through proactive, expert agency navigation."
  }
];

export default function FDIInvestment() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Globe className="w-4 h-4 text-royal-blue" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              FDI & Investment: <br />
              <span className="text-royal-blue">Facilitating Seamless Market Entry</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Cross-border investment into Nepal demands meticulous legal architecture and aggressive regulatory navigation. We provide foreign investors and multinational corporations with elite, end-to-end advisory—from initial FITTA feasibility to securing frictionless capital repatriation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Consult on Market Entry
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
              The Complexities of Capital Inflow
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nepal presents immense opportunities for foreign capital, yet the bureaucratic labyrinth frequently paralyzes unprepared investors. Market entry cannot rely on assumptions; it requires precise execution across multiple statutory bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Multi-Agency Friction</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                FDI in Nepal is not approved by a single entity. It requires harmonized approvals from the DOI (or IBN), the OCR, and crucially, the Nepal Rastra Bank. Misalignment between these agencies traps capital and halts project commencement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <FileKey className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Repatriation Roadblocks</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The most severe risk for foreign investors is trapped liquidity. If the initial capital injection is not rigorously recorded with the NRB, or if subsequent tax audits fail, the legal right to repatriate dividends is severely jeopardized.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <BarChart4 className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Structuring Vulnerabilities</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Entering Nepal via an inappropriate joint venture structure, or failing to leverage Double Taxation Avoidance Agreements (DTAAs), results in lost executive control and massive, unnecessary tax leakage on cross-border transactions.
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
              End-to-End Market Entry Capabilities
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">FDI Route Planning & Structuring</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Before a single dollar crosses borders, we conduct exhaustive feasibility analyses against the FITTA 'Negative List' and sectoral caps. We then architect the optimal investment vehicle—whether a wholly-owned subsidiary, a strategic joint venture, or a branch office—designed specifically to maximize tax efficiency and operational control.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Eliminate statutory roadblocks before they occur by aligning commercial objectives with legal realities.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Prevents wasted legal expenditures and ensures the ultimate corporate structure supports future capital repatriation.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A multinational technology firm evaluating the legal feasibility of establishing a development center in Kathmandu.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="FDI Route Planning" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Regulatory Approvals" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Multi-Agency Regulatory Approvals</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We act as your authorized representative across the entire Nepalese bureaucratic spectrum. From drafting comprehensive business plans for the Department of Industry (DOI) to securing the vital foreign currency recording approvals from the Nepal Rastra Bank (NRB), we aggressively manage the timeline to ensure rapid market entry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Cut through administrative inertia to secure binding legal approvals for capital injection.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Significantly accelerates project commencement and completely shields foreign executives from bureaucratic harassment.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> An international hospitality group seeking to inject USD 10M for a new luxury resort.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Repatriation & Cross-Border Advisory</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  An investment is only successful if the capital can exit. We structure initial investments, draft Technology Transfer Agreements (TTAs), and manage ongoing statutory audits explicitly to guarantee that the eventual repatriation of dividends, royalties, or liquidated capital is a frictionless, legally unassailable process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Protect the ultimate financial objective of the foreign investor: yielding and repatriating returns.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Client Benefits:</span> Eliminates trapped liquidity risks and legally minimizes withholding taxes via DTAA utilization.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> A foreign Private Equity firm seeking to repatriate dividends and management fees from its Nepalese portfolio company.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop" alt="Repatriation Advisory" className="w-full h-full object-cover" />
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
              We replace assumptions with rigorous statutory analysis, ensuring that your capital deployment strategy is legally impenetrable from the very first day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Assessment", desc: "Cross-referencing your business model against the FITTA Negative List and sectoral FDI thresholds." },
              { title: "Structuring", desc: "Architecting the corporate entity (subsidiary, JV, branch) optimized for DTAA benefits and operational control." },
              { title: "Approvals", desc: "Executing the parallel approval process across DOI, IBN, OCR, and local municipal wards." },
              { title: "Capital Injection", desc: "Overseeing the legal transfer of funds and securing the mandatory initial investment recording with the NRB." },
              { title: "Continuous Compliance", desc: "Assuming the role of your local compliance anchor, ensuring your operations remain in a state of perpetual audit-readiness." }
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
                Mastering the FDI Architecture
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Successful FDI in Nepal requires synthesizing investment law, corporate law, and central bank directives into a singular, cohesive market entry strategy.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">The FITTA Framework</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    The Foreign Investment and Technology Transfer Act provides statutory guarantees for repatriation and national treatment. We ensure your investment is explicitly categorized and approved under this Act to lock in these protections.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">NRB Foreign Exchange Bylaws</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    The Nepal Rastra Bank tightly controls cross-border currency movements. We rigorously manage the documentation required for capital recording, preventing the devastating scenario where unrecorded capital is legally barred from future repatriation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Double Taxation Avoidance (DTAA)</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We meticulously analyze the interplay between Nepal's Income Tax Act and applicable DTAAs, structuring dividend and royalty payouts to legally minimize withholding tax exposures for the foreign parent entity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <Globe className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "Foreign capital is highly mobile; regulatory frustration should not dictate its deployment. By entirely offloading the burden of regulatory navigation to our advisory team, multinational executives can focus exclusively on commercial strategy and market capture."
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
              Ensuring Global Capital Agility
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our FDI advisory is singularly focused on protecting foreign capital and ensuring its ability to operate and exit the Nepalese market without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Accelerated Market Entry", desc: "Cut through administrative inertia to drastically reduce the timeline between initial feasibility and operational launch." },
              { title: "Guaranteed Repatriation", desc: "Ensure every dollar injected is rigorously recorded, legally guaranteeing the right to repatriate dividends and liquidated capital." },
              { title: "Tax Optimization", desc: "Structure cross-border transactions and TTAs to legally minimize global effective tax rates via intelligent DTAA application." },
              { title: "Local Autonomy", desc: "Establish corporate architectures that provide foreign parent companies with absolute oversight while empowering local operational agility." },
              { title: "Risk Mitigation", desc: "Prevent the devastating financial penalties associated with unapproved capital injections or violations of the FITTA Negative List." },
              { title: "Seamless JVs", desc: "Architect Joint Venture agreements that aggressively protect foreign equity, intellectual property, and management control." }
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
              Sectoral Investment Dynamics
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              FDI regulations in Nepal are highly sector-dependent. We provide specialized entry strategies tailored to the specific regulatory thresholds of your target industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Hydropower & Infrastructure</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Navigating massive project finance approvals through the Investment Board Nepal (IBN) and securing necessary exemptions for imported construction machinery.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Information Technology & BPO</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Structuring wholly-owned subsidiaries that capitalize on statutory tax holidays for software development, while ensuring smooth repatriation of global service fees.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Tourism & Hospitality</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Advising international hotel chains on Franchise Agreements and Technology Transfer Agreements (TTAs) to ensure seamless royalty repatriation.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing & Agribusiness</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Carefully navigating the FITTA Negative List regarding primary agriculture while structuring compliant JVs for agro-processing and large-scale manufacturing operations.</p>
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
            <p className="text-gray-600">Executive clarity on navigating foreign investment regulations in Nepal.</p>
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
                <p className="text-sm text-gray-600 mb-6">Ensure your cross-border transactions and dividend distributions are engineered for maximum tax efficiency under Nepalese law and relevant DTAAs.</p>
              </div>
              <Link to="/services/tax-and-regulatory" className="inline-flex items-center text-sm font-bold text-primary-dark-blue group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Strategic Insight</span>
                <h3 className="text-xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors">Optimizing FDI Frameworks: Entry to Repatriation</h3>
                <p className="text-sm text-gray-600 mb-6">Read our executive briefing on recent amendments to the FITTA guidelines and how they impact capital repatriation timelines for multinationals.</p>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Execute Your Market Entry
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not let regulatory ambiguity delay your capital deployment. Partner with our senior advisory team to architect a legally unassailable, highly tax-efficient market entry strategy in Nepal.
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
