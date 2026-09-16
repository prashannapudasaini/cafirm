import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Landmark, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BankingFinance() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* 1. Industry Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Landmark className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Banking & Financial Institutions
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Transforming regulatory pressure into institutional resilience. We provide advanced advisory, risk, and assurance services to BFIs navigating Nepal’s complex financial ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-up">
          <div className="space-y-16 text-lg text-gray-700 leading-relaxed">
            
            {/* 2. Industry Landscape in Nepal */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">The Industry Landscape in Nepal</h2>
              <p className="mb-4">
                The Nepalese banking and financial sector is experiencing a period of profound structural transformation. Driven by the Nepal Rastra Bank’s (NRB) aggressive push for consolidation through highly incentivized mergers and acquisitions, the landscape is rapidly shifting from a fragmented market of smaller institutions to an oligopoly of highly capitalized, systemically critical "Mega Banks."
              </p>
              <p className="mb-4">
                This consolidation is occurring against a backdrop of tight liquidity, fluctuating interest rates, and an increasingly stringent regulatory environment. Furthermore, the advent of digital banking, mobile payment gateways (like fonepay and ConnectIPS), and the integration of API-driven financial services are fundamentally altering consumer expectations and operational delivery models. 
              </p>
              <p>
                While the growth drivers are robust—fueled by increasing remittance inflows, a growing middle class, and expanding financial inclusion in rural provinces—the inherent macroeconomic risks require BFIs to operate with unprecedented strategic precision. Profit margins are narrowing under regulatory caps on interest rate spreads, compelling institutions to optimize their capital structures and rigorously manage their non-performing loans (NPLs).
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Operating a BFI in Nepal is no longer merely about capturing deposits and deploying credit; it is an exercise in extreme risk management and regulatory navigation. The sector is currently grappling with several critical constraints:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue mb-1">Asset Quality Deterioration</strong>
                    Macroeconomic slowdowns directly impact the repayment capacity of corporate borrowers. BFIs are struggling to accurately classify loans and provision for Non-Performing Assets (NPAs) while maintaining capital adequacy.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue mb-1">Stringent NRB Directives</strong>
                    The NRB’s frequent issuance of Unified Directives regarding working capital loans, CD ratios, and interest rate corridors creates a volatile compliance environment where misinterpretation can lead to severe institutional penalties.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue mb-1">NFRS 9 Implementation Complexity</strong>
                    Transitioning to the Expected Credit Loss (ECL) model under Nepal Financial Reporting Standard 9 (NFRS 9) requires highly sophisticated financial modeling and vast amounts of historical data, which many legacy IT systems cannot support.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We act as a critical line of defense and a catalyst for strategic growth for commercial banks (Class A), development banks (Class B), finance companies (Class C), and microfinance institutions (Class D). Our multidisciplinary teams deliver targeted solutions:
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-primary-dark-blue mb-2">Assurance Services</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We conduct rigorous statutory audits that satisfy both ICAN and NRB requirements. We go beyond the balance sheet to assess the true valuation of collateral, the integrity of loan files, and the mathematical accuracy of interest capitalization.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-primary-dark-blue mb-2">Risk Advisory (IS Audit)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">As BFIs digitize, cybersecurity is paramount. We conduct comprehensive Information Systems (IS) Audits, evaluating core banking software (CBS) controls, API vulnerabilities, and disaster recovery protocols to protect against systemic data breaches.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-primary-dark-blue mb-2">Corporate Advisory (M&A)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">During bank mergers, we conduct exhaustive financial and tax due diligence. We facilitate the valuation of swap ratios and manage the complex post-merger integration of distinct corporate cultures and IT infrastructures.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The regulatory ecosystem governing BFIs is arguably the most complex in Nepal. A superficial reading of regulations is insufficient; institutions require proactive interpretation. 
              </p>
              <p className="mb-4">
                The <strong>Nepal Rastra Bank (NRB)</strong> wields immense authority, issuing Unified Directives that dictate everything from promoter share lock-in periods to strict guidelines on the disbursement of Working Capital Loans. Failure to accurately compute the Credit-to-Deposit (CD) ratio or maintain the mandatory Capital Adequacy Ratio (CAR) under Basel III frameworks results in immediate regulatory intervention.
              </p>
              <p>
                Concurrently, BFIs must satisfy the <strong>Inland Revenue Department (IRD)</strong> regarding complex taxation issues, particularly the tax treatment of loan loss provisions and the capitalization of interest in suspense. Furthermore, strict adherence to the <strong>Nepal Financial Reporting Standards (NFRS)</strong>—specifically NFRS 9 (Financial Instruments)—is heavily scrutinized by the Institute of Chartered Accountants of Nepal (ICAN). We provide the interpretive mastery required to ensure that compliance architecture is seamlessly woven into daily operations.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                While heavily regulated, the sector presents vast opportunities for agile institutions. The ongoing digital transformation allows BFIs to drastically reduce overhead costs associated with physical branch networks. By migrating toward a robust omnichannel banking model, institutions can capture the vast unbanked demographic in rural provinces while serving tech-savvy urban millennials.
              </p>
              <p>
                Additionally, the push for sustainable finance—including green bonds and subsidized lending for renewable energy projects—opens new avenues for accessing cheap international capital from development finance institutions (DFIs). Institutions that proactively optimize their governance and ESG reporting will command a significant advantage in securing foreign debt and equity investments.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "The era of the traditional 'spread-based' banking model is ending in Nepal. As the NRB tightens interest rate corridors, future profitability will be dictated entirely by operational efficiency and fee-based digital services. BFIs must stop viewing NFRS 9 and IS Audits as regulatory burdens, and instead weaponize them as advanced data-analytics tools to optimize their loan portfolios and predict customer behavior."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Regulatory Immunity:</strong> Eliminate the risk of NRB penalties through proactive compliance modeling and strict internal control environments.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Accurate Valuations:</strong> Ensure loan portfolios are accurately provisioned, protecting the institutional balance sheet from unexpected shocks.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Seamless Mergers:</strong> Execute highly complex M&A transactions with perfectly calibrated swap ratios and zero post-merger tax liabilities.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Systemic Security:</strong> Fortify core banking systems against cyber threats, ensuring the absolute integrity of millions of daily transactions.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/audit-and-assurance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Statutory Audit</Link>
                <Link to="/services/is-audit" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">IS Audit</Link>
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Risk Advisory</Link>
                <Link to="/services/due-diligence-and-valuation" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">M&A Due Diligence</Link>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* 10. Industry Consultation CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center animate-up">
          <Building2 className="w-12 h-12 text-royal-blue mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
            Fortify Your Financial Institution
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Partner with a firm that intimately understands the mechanics of Nepal’s banking sector. From complex NFRS 9 implementation to rigorous IS Audits, we provide the executive-level advisory required to safeguard your institution and drive sustainable profitability.
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
