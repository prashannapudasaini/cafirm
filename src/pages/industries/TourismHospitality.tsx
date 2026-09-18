import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Palmtree, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TourismHospitality() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      
      {/* 1. Industry Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=2036&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Palmtree className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Tourism & Hospitality
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Navigating aggressive expansion, capital structuring, and tax compliance for Nepal's premier hospitality groups and international franchises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white dark:bg-[#020A1A]">
        <div className="max-w-4xl mx-auto px-6 animate-up">
          <div className="space-y-16 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            
            {/* 2. Industry Landscape in Nepal */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">The Industry Landscape in Nepal</h2>
              <p className="mb-4">
                Tourism is the most universally recognized pillar of the Nepalese economy. The sector is currently experiencing a historic period of capital injection and modernization. Driven by the expansion of international airports (Bhairahawa and Pokhara) and aggressive private sector investment, Nepal is shifting away from its legacy as a budget backpacking destination toward a high-yield, luxury ecotourism and commercial hospitality hub.
              </p>
              <p className="mb-4">
                This transition is marked by the unprecedented entry of massive international hotel chains (Marriott, Hilton, Taj, Dusit Thani) operating under complex management contracts or franchise agreements with local developers. Concurrently, domestic conglomerates are aggressively expanding their portfolios, establishing massive resorts, casinos, and integrated cable-car tourism destinations.
              </p>
              <p>
                However, the sector remains highly sensitive to macroeconomic shocks and geopolitical stability. Furthermore, rapid capacity expansion is creating intense market competition, compressing Average Daily Rates (ADR) and forcing developers to rigorously scrutinize their operational expenditures (OPEX) and capital structures.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Operating a large-scale hospitality enterprise in Nepal requires managing intense capital demands alongside significant regulatory scrutiny:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Complex Franchise & Management Contracts</strong>
                    Negotiating and executing cross-border franchise agreements involves highly complex transfer pricing regulations, withholding tax (WHT) obligations on royalty payments, and NRB approvals for foreign currency repatriation.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Asset Heavy Balance Sheets</strong>
                    Hotels are exceptionally capital-intensive. Prolonged construction delays—frequent in Nepal—lead to massive interest capitalization. If the debt-to-equity ratio is not strategically structured from the outset, the debt servicing burden will instantly consume operational cash flows upon launch.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Revenue Recognition & Tax Leakage</strong>
                    The hospitality industry involves multiple revenue streams (rooms, F&B, MICE, casinos). Tracking these streams across fragmented Point-of-Sale (POS) systems often leads to accidental VAT under-reporting or the misapplication of Tourism Service Fees, triggering severe IRD penalties.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We advise hotel developers, casino operators, airlines, and travel aggregators, providing the financial architecture required to scale operations and maximize asset yields.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Investment Structuring & Feasibility</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Before breaking ground, we conduct rigorous financial feasibility studies, stress-testing RevPAR (Revenue Per Available Room) assumptions against realistic debt-servicing costs to validate the investment thesis for banks and private equity partners.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Cross-Border Tax Advisory</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We structure international franchise and management agreements to legally minimize Withholding Taxes (WHT) on royalties and technical fees, strictly adhering to Double Taxation Avoidance Agreements (DTAAs).</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Operational Internal Audits</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We conduct aggressive internal audits focused on revenue assurance. We reconcile property management systems (PMS) with financial ledgers to eliminate pilferage in F&B, optimize procurement supply chains, and verify statutory compliances like the Social Security Fund (SSF).</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The hospitality sector intersects with multiple regulatory bodies. The <strong>Department of Tourism (DoT)</strong> dictates classification standards (e.g., the requirements for a 5-star rating), which directly impact the property's ability to secure casino licenses or specific tax benefits.
              </p>
              <p className="mb-4">
                For properties leveraging international brands, the <strong>Foreign Investment and Technology Transfer Act (FITTA)</strong> mandates that all technology transfers and management contracts receive prior approval from the Department of Industry (DOI) before the <strong>Nepal Rastra Bank (NRB)</strong> will authorize the repatriation of management fees in foreign currency. 
              </p>
              <p>
                Furthermore, the <strong>Inland Revenue Department (IRD)</strong> scrutinizes the sector heavily due to its high volume of cash transactions. Proper integration of billing systems with the IRD’s Central Billing Monitoring System (CBMS) is mandatory, and failure to meticulously reconcile VAT inputs on massive construction expenditures can result in the permanent loss of multi-million-rupee tax credits.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The modernization of Nepalese hospitality presents immense opportunities for consolidation. Developers with strong balance sheets are perfectly positioned to acquire distressed, under-capitalized properties that struggled post-pandemic, rebranding and integrating them into larger portfolios.
              </p>
              <p>
                Additionally, there is a significant opportunity to tap into the capital markets. As seen with recent successful hospitality IPOs on the NEPSE, public markets have a strong appetite for tourism assets. Transitioning a family-owned hotel into a public limited company not only raises cheap capital for expansion but also forces a level of corporate governance that drastically improves operational efficiency.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "In the rush to build five-star infrastructure, many developers neglect the financial foundation. A beautiful hotel with a toxic debt structure is not a sustainable business—it is a distressed asset waiting to happen. The key to long-term profitability in Nepalese hospitality is aggressive equity mobilization, ironclad internal controls over daily revenue, and a tax-efficient corporate structure."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Optimized Cash Flow:</strong> Prevent operational leakage through robust internal audits and strict revenue reconciliation protocols.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Frictionless Repatriation:</strong> Ensure international management companies receive their royalties without bureaucratic delays by flawlessly navigating FITTA and NRB regulations.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Maximized Tax Credits:</strong> Ensure every eligible rupee spent during construction is accurately captured to maximize VAT refunds and minimize corporate tax burdens.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Investment Readiness:</strong> Transition family-owned assets into corporatized, SEBON-compliant entities ready for public offering or private equity acquisition.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/fdi-and-investment" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">FDI Advisory</Link>
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Transfer Pricing</Link>
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Internal Audit</Link>
                <Link to="/services/due-diligence-and-valuation" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Asset Valuation</Link>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* 10. Industry Consultation CTA */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A1128] border-t border-gray-200 dark:border-white/20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-up">
          <Building2 className="w-12 h-12 text-royal-blue mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Elevate Your Hospitality Enterprise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From structuring international management contracts to executing rigorous operational audits across your F&B and room divisions, we provide the financial discipline required to scale luxury hospitality assets in Nepal.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
            Schedule a Sector Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
