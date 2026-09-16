import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Cpu, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnologyStartups() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Cpu className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Technology & Startups
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Architecting the financial governance, valuation frameworks, and FDI structures required to scale Nepal’s most disruptive digital enterprises.
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
                Nepal’s technology and startup ecosystem is experiencing explosive growth, rapidly shifting from a landscape of localized IT outsourcing vendors into a vibrant hub of venture-backed SaaS platforms, fintech disruptors, and e-commerce aggregators. The proliferation of digital payment gateways and increased internet penetration has unlocked massive domestic consumer markets.
              </p>
              <p className="mb-4">
                Simultaneously, international Private Equity (PE) and Venture Capital (VC) funds are increasingly viewing Nepalese startups as high-yield frontier market opportunities. This influx of foreign capital is fundamentally altering the trajectory of domestic founders, forcing them to transition rapidly from scrappy, informal operations into corporatized, heavily governed entities capable of absorbing millions of dollars in institutional funding.
              </p>
              <p>
                However, scaling a tech company in Nepal is fraught with unique hurdles. Founders often grapple with archaic regulatory frameworks that were designed for traditional brick-and-mortar manufacturing, making the financial structuring of intangible assets, intellectual property (IP), and equity-based compensation exceptionally complex.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Fast-growing startups routinely break things. While this is acceptable for software code, applying this mentality to financial governance leads to catastrophic consequences:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue mb-1">Investment Readiness & Valuation</strong>
                    Founders frequently enter fundraising negotiations without defensible financial models. Over-relying on vanity metrics rather than robust discounted cash flow (DCF) models or standardized ARR (Annual Recurring Revenue) metrics severely damages credibility with institutional VCs.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue mb-1">Complex Equity Structuring</strong>
                    Implementing Employee Stock Ownership Plans (ESOPs) or structuring convertible notes in Nepal requires navigating a rigid Companies Act. Poorly drafted term sheets can lead to founder dilution, unmanageable tax liabilities for employees, or illegal capital structures.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue mb-1">Cross-Border Revenue & Digital Taxation</strong>
                    For IT export firms and SaaS companies serving global clients, repatriating foreign currency earnings and navigating the evolving digital service tax landscape across multiple jurisdictions (while avoiding double taxation) is a constant operational friction.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We act as the strategic financial partner for high-growth tech companies, bridging the gap between visionary founders and institutional capital.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-primary-dark-blue mb-2">Fundraising & Valuation Modeling</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We build institutional-grade financial models to defend your valuation during Series A/B rounds. We prepare comprehensive pitch-deck financials, cap-table scenarios, and unit economic analyses (CAC/LTV) that speak the exact language of global VCs.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-primary-dark-blue mb-2">FDI & Term Sheet Structuring</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We manage the entire bureaucratic lifecycle of foreign investment. We advise on term sheet mechanics (liquidation preferences, anti-dilution clauses) and navigate FITTA and NRB regulations to ensure the seamless, legal injection of foreign capital.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-primary-dark-blue mb-2">Virtual CFO Services</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Early-stage startups cannot afford a full-time, Big-4 trained CFO. We provide fractional CFO services, managing your burn rate, optimizing working capital, and ensuring rigorous bookkeeping to prepare you for future financial due diligence.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The regulatory environment for tech startups in Nepal is rapidly evolving, often reacting to innovation rather than preceding it. The <strong>Companies Act 2063</strong> governs all equity issuances. Startups attempting to issue sweat equity, ESOPs, or preference shares must ensure absolute alignment with the Office of the Company Registrar (OCR), as mistakes here can instantly derail a future M&A exit.
              </p>
              <p className="mb-4">
                For foreign investments, the <strong>Foreign Investment and Technology Transfer Act (FITTA)</strong> and the <strong>Nepal Rastra Bank (NRB)</strong> dictate the rules. The NRB’s strict controls on capital account convertibility mean that SaaS companies must meticulously document their software exports and secure prior approvals to pay for critical foreign services like AWS, Google Cloud, or international marketing.
              </p>
              <p>
                From a tax perspective, the <strong>Inland Revenue Department (IRD)</strong> offers significant income tax holidays for IT and software export companies under the Finance Act. However, claiming these exemptions requires perfect segregation of domestic versus export revenue and meticulous adherence to NFRS standards for recognizing intangible assets.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The global shift toward remote work has created a massive opportunity for Nepalese IT outsourcing firms to transition into high-margin product development companies. By legally protecting their Intellectual Property (IP) and structuring their global sales through tax-efficient holding companies (e.g., in Singapore or Delaware, compliant with NRB regulations), founders can drastically multiply their enterprise valuation.
              </p>
              <p>
                Furthermore, the domestic fintech sector is primed for consolidation. Startups that proactively install bank-grade internal controls and data security protocols (IS Audits) will position themselves as prime acquisition targets for large commercial banks looking to acquire digital infrastructure.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "Founders often view financial compliance as a bureaucratic distraction from product development. This is a fatal error. When a global VC firm conducts due diligence, a messy cap table or commingled personal and corporate funds will kill the deal instantly, regardless of how brilliant the technology is. Financial governance is not overhead; it is the foundation of your valuation."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Maximized Valuations:</strong> Enter funding rounds armed with defensible, institutional-grade financial models that prevent VCs from arbitrarily discounting your enterprise value.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Frictionless FDI:</strong> Eliminate the bureaucratic delays of foreign fundraising by perfectly executing FITTA and NRB compliance protocols for cross-border capital injections.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Founder Protection:</strong> Protect your control over the company through strategically drafted term sheets, robust cap-table management, and legally sound ESOP structures.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Due Diligence Readiness:</strong> Maintain a state of perpetual readiness for M&A acquisitions or Series B funding through rigorous, outsourced CFO and bookkeeping services.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/due-diligence-and-valuation" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Startup Valuation</Link>
                <Link to="/services/fdi-and-investment" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">FDI Advisory</Link>
                <Link to="/services/corporate-advisory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Term Sheet Structuring</Link>
                <Link to="/services/bpo-and-payroll" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Virtual CFO</Link>
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
            Scale with Institutional Confidence
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            From defending your valuation in a Series A term sheet to navigating the complexities of NRB foreign exchange regulations, we provide the financial architecture required to scale your startup globally.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
            Schedule a Founder Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
