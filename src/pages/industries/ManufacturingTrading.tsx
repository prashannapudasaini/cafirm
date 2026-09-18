import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Factory, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ManufacturingTrading() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Factory className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Manufacturing & Trading
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Optimizing supply chains, mitigating tax exposure, and driving operational efficiency for Nepal’s industrial and commercial backbone.
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
                The manufacturing and trading sectors represent the historical core of Nepal’s formal economy, dominated largely by massive, multi-generational family conglomerates. These entities operate vast, diversified portfolios encompassing FMCG, cement, steel, automotive distributorships, and heavy machinery.
              </p>
              <p className="mb-4">
                The landscape is heavily defined by Nepal's geopolitical positioning. As a landlocked, import-dependent nation, the trading sector thrives on robust consumer demand, while domestic manufacturing is often heavily reliant on imported raw materials. This creates a volatile operational environment highly susceptible to global supply chain disruptions, fluctuating logistics costs, and the devaluation of the Nepalese Rupee against the US Dollar.
              </p>
              <p>
                Despite these headwinds, the sector is modernizing. The government’s strategic push to reduce the trade deficit has led to the introduction of protective tariffs and tax incentives aimed at boosting domestic production. Consequently, traditional trading houses are increasingly pivoting toward domestic manufacturing, setting up assembly plants and production facilities to capture these fiscal benefits.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Profit margins in trading and manufacturing are notoriously thin, meaning that operational inefficiencies or tax miscalculations can instantly destroy profitability:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Working Capital & Inventory Traps</strong>
                    Import-dependent businesses require massive upfront capital to open Letters of Credit (LCs). Inefficient inventory management, stock obsolescence, or delays at customs borders trap critical liquidity, forcing businesses to rely on expensive short-term bank financing.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Aggressive IRD Scrutiny</strong>
                    Because trading and manufacturing involve high volumes of transactions, they are prime targets for Inland Revenue Department (IRD) audits. Issues such as the misclassification of Harmonized System (HS) codes at customs, improper VAT reconciliation, or undocumented inventory shrinkage frequently lead to massive statutory penalties.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Cost Accounting Complexities</strong>
                    For manufacturers, determining the true cost of production—allocating overheads, factoring in energy volatility, and managing byproducts/wastage—is highly complex. Inaccurate costing data leads to flawed pricing strategies and hidden margin erosion.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We partner with industrial houses to install rigorous financial discipline, transforming chaotic supply chains into streamlined, tax-efficient operations.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Cost & Inventory Audits</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We deploy specialized teams to physically verify massive inventory stockpiles across national depots. We reconstruct product costing models, identify exactly where manufacturing yield is being lost, and recommend protocols to optimize raw material procurement.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Strategic Tax Planning</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We analyze your entire supply chain to legally minimize customs duties, excise taxes, and VAT leakage. We represent large taxpayers during aggressive IRD assessments, utilizing deep precedents to defend transfer pricing policies and margin declarations.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Corporate Restructuring</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">As family conglomerates expand, commingled assets become a liability. We execute complex corporate demergers, separating risky manufacturing divisions from stable trading entities to ring-fence enterprise risk and optimize tax structures.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The regulatory burden on this sector is immense. The <strong>Value Added Tax (VAT) Act</strong> and <strong>Income Tax Act</strong> are the primary battlegrounds. The government frequently weaponizes the annual Finance Act to alter customs duties and excise rates overnight to manage the national trade deficit, requiring businesses to possess extreme financial agility.
              </p>
              <p className="mb-4">
                Furthermore, the <strong>Nepal Rastra Bank (NRB)</strong> tightly controls the mechanisms of international trade. Directives regarding the opening of LCs, cash margin requirements for imports, and restrictions on usance credit directly dictate a trading firm's ability to operate. 
              </p>
              <p>
                For manufacturers, the <strong>Industrial Enterprise Act</strong> offers significant concessions, including income tax holidays for industries established in specific underdeveloped regions or Special Economic Zones (SEZs). However, successfully claiming and defending these concessions against skeptical tax officers requires ironclad accounting documentation and flawless statutory compliance, areas where our firm excels.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The transition from trading to manufacturing—driven by protectionist government policies—offers massive opportunities for margin expansion. Trading houses that successfully vertically integrate by setting up domestic assembly lines (e.g., in automotive or electronics) can capture significant tax rebates and establish insurmountable competitive moats.
              </p>
              <p>
                Additionally, the implementation of massive Enterprise Resource Planning (ERP) systems presents a transformative opportunity. While the initial integration is painful, organizations that successfully transition from legacy accounting software to unified ERPs (like SAP or Oracle) gain real-time visibility into their supply chains, enabling predictive inventory management and precise working capital optimization.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "In the Nepalese trading and manufacturing sectors, scale does not guarantee survival—efficiency does. An enterprise generating billions in revenue can bleed to death if its inventory turnover ratio slows or if it mismanages its LC financing. True strategic advisory in this space is about tightening the nuts and bolts: relentless cost control, aggressive tax defense, and absolute visibility over working capital."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Protected Margins:</strong> Prevent profit erosion by identifying the true cost of production and eliminating hidden supply chain inefficiencies.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Tax Defensibility:</strong> Face IRD audits with absolute confidence, backed by rigorously documented transfer pricing policies and precise VAT reconciliations.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Optimized Liquidity:</strong> Free up trapped cash by restructuring LC financing facilities and streamlining inventory management protocols.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Generational Transition:</strong> Safely restructure complex, multi-generational family conglomerates into highly focused, tax-efficient corporate entities.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Tax & Customs Advisory</Link>
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Inventory Audit</Link>
                <Link to="/services/corporate-advisory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Corporate Restructuring</Link>
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
            Streamline Your Industrial Operations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From defending complex tax positions at the LTO to conducting rigorous physical inventory audits across nationwide supply chains, we provide the financial oversight required to maximize margins in a volatile market.
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
