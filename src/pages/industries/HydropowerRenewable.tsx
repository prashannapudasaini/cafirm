import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Zap, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HydropowerRenewable() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Zap className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Hydropower & Renewable Energy
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Structuring capital, mitigating project risks, and ensuring rigorous financial governance for the engine of Nepal’s economic future.
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
                Hydropower represents the absolute cornerstone of Nepal’s long-term economic strategy. With thousands of megawatts currently under construction and cross-border energy trade with India and Bangladesh rapidly expanding, the sector has transitioned from a domestic infrastructure initiative into a highly lucrative, export-oriented asset class.
              </p>
              <p className="mb-4">
                This explosive growth is driving massive capital mobilization. Domestic institutional investors, private equity funds, and international Foreign Direct Investment (FDI) are pouring into Independent Power Producers (IPPs). Furthermore, hydropower companies overwhelmingly dominate the Initial Public Offering (IPO) pipeline on the Nepal Stock Exchange (NEPSE), democratizing equity ownership across the nation.
              </p>
              <p>
                However, the sector is notoriously capital-intensive and possesses exceptionally long gestation periods. Developers must navigate a labyrinth of environmental approvals, complex Power Purchase Agreements (PPAs) with the Nepal Electricity Authority (NEA), and volatile interest rates that can instantly obliterate the financial viability of a heavily leveraged project.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Constructing a hydropower project in the Himalayas involves immense geological and logistical hurdles. However, the financial and regulatory hurdles are equally formidable:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Capital Expenditure (CAPEX) Overruns</strong>
                    Due to geological surprises, supply chain disruptions, and bureaucratic delays, projects frequently exceed their initial budgets. Financing these overruns—while maintaining optimal debt-to-equity ratios—is a critical challenge.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Complex Tax Holidays & Exemptions</strong>
                    The Industrial Enterprise Act provides specific tax holidays and VAT exemptions for energy projects. However, misclassifying project expenses or failing to secure the correct recommendation letters from the Department of Electricity Development (DoED) results in massive, unrecoverable tax leakage.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">FDI Repatriation Friction</strong>
                    For international investors, navigating the Foreign Investment and Technology Transfer Act (FITTA) to secure approvals for equity injections, debt financing, and eventual dividend repatriation remains a heavily bureaucratic and time-consuming process.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We provide end-to-end financial advisory for IPPs—from the initial feasibility studies through construction, IPO, and commercial operation.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Project Financing & Capital Structuring</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We develop robust financial models to secure syndicate loans from domestic BFIs. We structure the capital to optimize the Weighted Average Cost of Capital (WACC) and ensure the project remains financially viable despite interest rate fluctuations.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Cost Audit & CAPEX Verification</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">During the construction phase, we deploy targeted cost audits. We verify contractor billings, ensure the correct capitalization of borrowing costs (as per NAS 23), and tightly monitor budget variances to prevent capital leakage.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">FDI Advisory & NRB Compliance</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We act as the localized bridge for international investors. We handle the entire bureaucratic lifecycle of foreign investment—securing Department of Industry (DOI) approvals, managing NRB foreign exchange accounting, and facilitating frictionless capital repatriation.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                Hydropower development is subject to oversight by multiple, often overlapping, authorities. Our role is to synthesize these requirements into a cohesive compliance strategy.
              </p>
              <p className="mb-4">
                The <strong>Power Purchase Agreement (PPA)</strong> with the NEA is the defining legal document of any project, dictating the 'Take or Pay' provisions and tariff escalations that underpin the entire financial model. Concurrently, developers must adhere to the regulations of the <strong>Department of Electricity Development (DoED)</strong> regarding generation licenses and capacity upgrades.
              </p>
              <p>
                From a financial reporting perspective, the <strong>Inland Revenue Department (IRD)</strong> heavily scrutinizes the commencement date of commercial operations to determine the exact applicability of corporate tax holidays (e.g., the 10-year 100% tax exemption). Furthermore, when IPPs go public, they are subjected to stringent corporate governance and quarterly reporting mandates enforced by the <strong>Securities Board of Nepal (SEBON)</strong> and the <strong>Nepal Stock Exchange (NEPSE)</strong>.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The most significant opportunity in the sector lies in the imminent opening of cross-border power trading markets. IPPs that can secure direct PPAs with Indian or Bangladeshi commercial entities will unlock tariff structures far more lucrative than domestic rates.
              </p>
              <p>
                Additionally, the issuance of green bonds and climate financing instruments presents a massive opportunity to refinance expensive domestic debt with cheaper, long-term international capital. However, accessing these funds requires absolute adherence to international Environmental, Social, and Governance (ESG) reporting standards and flawless IFRS-aligned financial statements—areas where our advisory expertise is critical.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "Building a dam is an engineering challenge; building a profitable energy company is a financial one. Many IPPs bleed capital during the 5-year construction phase due to poor contract structuring and tax leakage. The most successful developers in Nepal are those who treat their financial architecture with the exact same rigor as their civil engineering."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Preserved Capital:</strong> Avoid massive financial penalties and unrecoverable VAT by establishing strict cost controls and compliance protocols during the construction phase.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Successful IPOs:</strong> Ensure a heavily oversubscribed public offering by presenting SEBON-approved, meticulously audited financial statements and robust corporate governance.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Optimized Tax Strategy:</strong> Legally maximize all available statutory tax holidays and concessions to accelerate the payback period for promoters and investors.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>FDI Attraction:</strong> Provide international investors with the absolute transparency, IFRS alignment, and localized bureaucratic support required to deploy capital into Nepal safely.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/fdi-and-investment" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">FDI Advisory</Link>
                <Link to="/services/corporate-advisory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Project Financing</Link>
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Tax Optimization</Link>
                <Link to="/services/due-diligence-and-valuation" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Financial Modeling</Link>
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
            Empower Your Energy Project
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From navigating the complexities of FITTA to conducting rigorous CAPEX audits, we provide the strategic financial architecture required to bring your hydropower project to commercial operation on time and under budget.
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
