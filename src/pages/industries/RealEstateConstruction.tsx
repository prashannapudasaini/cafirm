import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, HardHat, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RealEstateConstruction() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#031B4E] min-h-screen">
      
      {/* 1. Industry Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <HardHat className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Real Estate & Construction
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Structuring project finance, enforcing rigorous cost controls, and mitigating tax exposure for Nepal’s largest infrastructure and real estate developers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white dark:bg-[#031B4E]">
        <div className="max-w-4xl mx-auto px-6 animate-up">
          <div className="space-y-16 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            
            {/* 2. Industry Landscape in Nepal */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">The Industry Landscape in Nepal</h2>
              <p className="mb-4">
                The real estate and construction sector is a massive, highly volatile engine of the Nepalese economy. Following rapid urbanization in the Kathmandu Valley and the emergence of new provincial capitals, the demand for high-rise commercial complexes, organized housing projects, and large-scale government infrastructure (roads, bridges, airports) has surged.
              </p>
              <p className="mb-4">
                However, the sector operates in a state of extreme cyclicality, heavily dictated by the macro-prudential policies of the Nepal Rastra Bank (NRB). When the central bank tightens liquidity or lowers the Loan-to-Value (LTV) ratio for real estate, the sector experiences severe capital crunches. 
              </p>
              <p>
                Simultaneously, the construction industry (Class A contractors) struggles with structural inefficiencies: delayed payments from government bodies, extreme volatility in the cost of raw materials (steel, cement), and the complex transition toward organized, corporate real estate development as opposed to traditional, informal land plotting.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Executing a multi-year construction project or a large-scale real estate development involves navigating severe financial and regulatory headwinds:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Project Financing & Working Capital</strong>
                    Real estate projects require massive upfront capital before pre-sales can be recognized. Fluctuating interest rates on consortium loans can obliterate a project's Internal Rate of Return (IRR). For contractors, delayed mobilization advances or stalled government payments frequently lead to severe liquidity traps.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Percentage of Completion Method (POCM)</strong>
                    Under NFRS, recognizing revenue for long-term construction contracts is highly complex. Inaccurately assessing the stage of completion leads to massive distortions in the income statement, either artificially inflating taxes or severely under-reporting revenue to shareholders.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Joint Venture (JV) Complexities</strong>
                    To qualify for massive public procurement contracts, local contractors frequently form JVs with international firms (e.g., Chinese or Indian developers). Managing the repatriation of profits, withholding taxes, and the complex accounting of these short-term legal entities requires immense precision.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We partner with Class A contractors, real estate developers, and infrastructure funds to install the rigorous financial architecture required to bring mega-projects to completion.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Project Finance & Feasibility</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We build institutional-grade financial models for commercial complexes and housing projects. We stress-test sales assumptions and structure consortium financing with commercial banks to optimize the developer’s equity IRR.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Cost Audit & Internal Controls</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Construction sites are highly vulnerable to material theft and procurement fraud. We deploy rigorous internal audits, implementing strict site-level controls to track cement, steel, and labor costs against the original Bill of Quantities (BOQ).</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Tax Strategy & JV Accounting</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We advise on the complex taxation of Joint Ventures. We handle capital gains tax on land acquisitions, manage complex VAT refund mechanisms for government contracts, and ensure accurate NFRS-compliant revenue recognition.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The regulatory burden in real estate and construction is heavily focused on taxation and central bank directives. The <strong>Nepal Rastra Bank (NRB)</strong> effectively dictates the market's trajectory by modifying the risk weightage for real estate loans. Developers must proactively align their capital structures to withstand sudden NRB liquidity tightening.
              </p>
              <p className="mb-4">
                The <strong>Inland Revenue Department (IRD)</strong> heavily scrutinizes the sector. Because real estate historically involved large volumes of informal, cash-based transactions, the IRD aggressively audits the valuation of land parcels to extract Capital Gains Tax (CGT). Furthermore, the complexities of claiming VAT inputs on construction materials versus the VAT-exempt nature of certain real estate sales require highly specialized tax planning.
              </p>
              <p>
                For public infrastructure, the <strong>Public Procurement Monitoring Office (PPMO)</strong> sets the rules of engagement. Bidding on these projects requires flawless financial documentation and the ability to rapidly secure massive Bid Bonds and Performance Guarantees from BFIs, a process that requires impeccable audited financial statements.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The greatest strategic opportunity lies in corporatization. The Nepalese real estate market is transitioning from informal, fragmented land plotting into the era of organized, corporate development. Developers who adopt holding-company structures—separating their land-bank assets from their operational construction entities—can ring-fence their liabilities and significantly reduce their overall tax burden.
              </p>
              <p>
                Additionally, there is a burgeoning opportunity for Real Estate Investment Trusts (REITs) or similarly structured syndicates. By institutionalizing their financial reporting, developers can bypass expensive bank financing and raise capital directly from private equity funds or public markets.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "In construction and real estate, profit is made in the procurement phase but lost in the accounting department. A developer can execute a flawless architectural vision, but if they mismanage their project financing or fail to implement strict BOQ variance controls on the ground, the project will hemorrhage cash. Success requires marrying engineering precision with ruthless financial discipline."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Protected Margins:</strong> Prevent massive cost overruns by installing rigorous internal audits that track real-time procurement against the project's original BOQ.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Optimized Financing:</strong> Secure massive syndicate loans by presenting commercial banks with defensible, institutional-grade project feasibility models.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Tax Defensibility:</strong> Navigate complex IRD audits by ensuring absolute accuracy in Capital Gains Tax, VAT reconciliations, and NFRS revenue recognition.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Corporate Scalability:</strong> Transition from an informal contracting business into a corporatized, SEBON-ready infrastructure development group.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/corporate-advisory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Project Financing</Link>
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Tax Strategy</Link>
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Cost Audits</Link>
                <Link to="/services/audit-and-assurance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Statutory Audit</Link>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* 10. Industry Consultation CTA */}
      <section className="py-24 bg-gray-50 dark:bg-[#031B4E] border-t border-gray-200 dark:border-white/20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-up">
          <Building2 className="w-12 h-12 text-royal-blue mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Build with Financial Certainty
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From structuring complex consortium financing to executing rigorous on-site cost audits, we provide the financial architecture required to bring massive infrastructure and real estate projects to profitable completion.
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
