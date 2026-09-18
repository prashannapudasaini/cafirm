import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessFocused() {
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
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Lightbulb className="w-4 h-4 text-royal-blue" />
              <span>Premium Advantage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Business-Focused Solutions
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Translating complex financial data into actionable, commercial strategies that drive enterprise growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-[#031B4E]">
        <div className="max-w-4xl mx-auto px-6 animate-up">
          <div className="space-y-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Executive Introduction */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Executive Introduction</h3>
              <p className="mb-4">
                Traditional accounting firms often view their mandate through a narrow, retrospective lens: validating historical data to satisfy statutory requirements. While compliance is non-negotiable, a purely backward-looking approach provides zero strategic value to an executive team tasked with navigating future market volatility and driving commercial expansion.
              </p>
              <p>
                We fundamentally redefine the role of the modern financial advisor. We believe that financial data is only valuable when it is weaponized as a strategic asset. Our advisory model looks beyond the ledger, focusing intensely on the commercial realities of your business. We engineer solutions designed not merely to balance the books, but to optimize capital allocation, accelerate revenue growth, and fortify your competitive market position.
              </p>
            </section>

            {/* Core Discussion */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Moving Beyond the Ledger</h3>
              <p className="mb-4">
                A flawless statutory audit confirms that your financial statements are accurate; it does not tell you if your underlying business model is sustainable. When management only receives technical compliance reports, they are deprived of the analytical intelligence required to make critical operational decisions, such as whether to offshore production, how to structure a complex joint venture, or when to divest underperforming assets.
              </p>
              <p>
                Our approach bridges the gap between financial compliance and commercial strategy. We deploy multidisciplinary teams—comprising chartered accountants, financial modelers, and industry specialists—who analyze your operational workflows with the same rigor applied to your financial statements. We dissect your supply chain for tax inefficiencies, analyze your working capital cycle to unlock trapped cash, and build predictive financial models that stress-test your strategic initiatives against worst-case macroeconomic scenarios.
              </p>
            </section>

            {/* Nepal Business Context */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Driving Growth in Nepal’s Economy</h3>
              <p className="mb-4">
                The Nepalese market is uniquely challenging. Businesses contend with highly constrained liquidity in the banking sector, fluctuating interest rates, complex foreign exchange regulations mandated by the Nepal Rastra Bank (NRB), and a frequently shifting tax regime dictated by the annual national budget. 
              </p>
              <p className="mb-4">
                In this volatile environment, generic financial advice is useless. Nepalese enterprises require highly contextualized, business-focused solutions. For instance, when advising a hydropower developer, we do not simply audit their Capital Expenditure (CAPEX); we structure their project financing to minimize the impact of interest rate volatility and ensure they fully leverage the tax holidays provided under the Industrial Enterprise Act. 
              </p>
              <p>
                Similarly, when assisting a domestic manufacturing conglomerate facing aggressive foreign competition, our focus shifts to optimizing their working capital, conducting robust product-line profitability analyses, and strategically structuring their imports to legally minimize customs duties and VAT leakage.
              </p>
            </section>

            {/* Strategic Perspective */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">A Strategic Perspective</h3>
              <p className="mb-4">
                A business-focused advisor acts as a catalyst for executive decision-making. We recognize that the CEO and the Board of Directors are not interested in accounting theory; they are interested in commercial outcomes. 
              </p>
              <p>
                Our deliverables are explicitly designed for the boardroom. We translate complex regulatory and financial constraints into clear, actionable executive summaries. Whether we are advising on a complex corporate restructuring, guiding a company through an Initial Public Offering (IPO) on the Nepal Stock Exchange (NEPSE), or formulating a turnaround strategy for a distressed subsidiary, our primary objective is to maximize shareholder value while aggressively mitigating commercial risk.
              </p>
            </section>

            {/* Business Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Practical Business Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Capital Optimization:</strong> Unlock trapped liquidity by restructuring working capital cycles, optimizing debt-to-equity ratios, and restructuring high-interest corporate loans.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Data-Driven Strategy:</strong> Equip executive leadership with robust financial modeling, scenario planning, and precise valuation metrics to support aggressive M&A activities or market expansion.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-royal-blue rounded-full shrink-0"></span>
                  <div>
                    <strong>Operational Efficiency:</strong> Identify and eliminate redundancies in organizational workflows, utilizing targeted internal audits to reduce overhead costs and improve overall profit margins.
                  </div>
                </li>
              </ul>
            </section>

            {/* Closing Insight */}
            <section>
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Final Assessment</h3>
              <p className="bg-gray-50 dark:bg-[#031B4E] p-8 rounded-2xl border border-gray-100 dark:border-white/10 italic font-medium text-primary-dark-blue dark:text-white text-xl leading-relaxed text-center">
                "Compliance looks to the past to tell you where you have been. True advisory looks to the future to tell you where you can go—and precisely how to get there."
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/20">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                Explore Business Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
