import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Activity, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HealthcarePharma() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Activity className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Healthcare & Pharmaceuticals
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Fortifying internal controls, optimizing CAPEX, and navigating complex regulatory matrices for hospitals, clinics, and pharmaceutical manufacturers.
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
                Nepal’s healthcare and pharmaceutical sectors are undergoing massive capital expansion. The proliferation of private super-specialty hospitals, diagnostic chains, and state-of-the-art pharmaceutical manufacturing plants reflects a sharp pivot toward domestic self-reliance and premium healthcare delivery.
              </p>
              <p className="mb-4">
                This growth is highly capital-intensive. Hospitals require millions of dollars in advanced biomedical equipment, while pharma companies must heavily invest in Good Manufacturing Practice (GMP) compliant facilities. Consequently, the sector is heavily leveraged and increasingly attracting Foreign Direct Investment (FDI) and private equity.
              </p>
              <p>
                However, scaling a healthcare enterprise is operationally brutal. Hospitals deal with massive, fragmented cash flows, complex doctor compensation structures, and high-value inventory (pharmaceuticals and surgical implants). Simultaneously, domestic pharma manufacturers face fierce price competition from Indian imports and strict pricing caps dictated by the government.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                In healthcare, poor financial hygiene doesn't just erode profit margins; it cripples the ability to deliver quality care. Key challenges include:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Inventory & Pharmacy Shrinkage</strong>
                    The pharmacy is often a hospital's highest revenue-generating—and most vulnerable—department. Poor internal controls over fast-moving drugs, expiring medications, and high-value surgical implants lead to massive, untraceable financial losses.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Complex Doctor Compensation (TDS/VAT)</strong>
                    Hospitals employ complex fee-sharing arrangements with consultant doctors (OPD fees, surgical cuts). Failing to accurately deduct Tax Deducted at Source (TDS) or misclassifying VAT-exempt health services versus taxable auxiliary services triggers devastating IRD audits.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">CAPEX Valuation & Depreciation</strong>
                    Importing an MRI machine involves customs duties, LC financing, and installation costs. Incorrectly capitalizing these assets or utilizing the wrong depreciation slabs under the Income Tax Act artificially inflates tax liabilities.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We partner with hospital boards and pharmaceutical executives to engineer financial architectures that maximize operational efficiency and safeguard institutional capital.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Hospital Revenue & Inventory Audits</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We conduct specialized internal audits that reconcile Hospital Management Information Systems (HMIS) with financial ledgers. We perform surprise physical verifications of pharmacy stock to eliminate shrinkage and optimize procurement cycles.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Pharma Cost Accounting & Pricing</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">For pharmaceutical manufacturers, we build precise cost-accounting models. We accurately allocate overheads and active pharmaceutical ingredient (API) costs, allowing management to price competitively while defending margins against government price caps.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Tax & Transfer Pricing Advisory</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We structure highly defensible transfer pricing policies for multinational pharma subsidiaries. For hospitals, we design tax-efficient doctor compensation models and ensure absolute compliance with Health Service Tax exemptions.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The healthcare and pharmaceutical sectors operate under a microscope. The <strong>Department of Drug Administration (DDA)</strong> heavily regulates pharmaceutical pricing and product approvals, directly dictating revenue models. 
              </p>
              <p className="mb-4">
                From a financial perspective, the <strong>Inland Revenue Department (IRD)</strong> scrutinizes the sector relentlessly. Health services are generally VAT-exempt, but auxiliary services (e.g., cafeteria sales, certain diagnostic tests) are taxable. Hospitals frequently face massive penalties for failing to perfectly segregate taxable and non-taxable revenue streams.
              </p>
              <p>
                Furthermore, the <strong>Ministry of Health and Population (MoHP)</strong> mandates that a percentage of hospital beds be allocated for indigent care (free of cost). We ensure that the financial costs of these Corporate Social Responsibility (CSR) mandates are properly accounted for and leveraged for maximum allowable tax deductions under the Income Tax Act.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The fragmented nature of Nepal's diagnostic and clinical sector presents a massive opportunity for M&A roll-ups. Well-capitalized hospitals that aggressively acquire specialized diagnostic centers (pathology, radiology) can vertically integrate their services, capturing higher margins and controlling the entire patient journey.
              </p>
              <p>
                For pharmaceutical manufacturers, the strategic opportunity lies in import substitution. By leveraging the specific tax holidays and customs duty exemptions provided to domestic manufacturers by the <strong>Industrial Enterprise Act</strong>, local firms can aggressively undercut imported Indian generics while maintaining highly lucrative net margins.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "A hospital is fundamentally two businesses: a clinical operation and a massive hospitality/retail operation. Executives often excel at managing the clinical side but lose millions to poor inventory controls and tax leakage on the retail side. Sustainable healthcare requires treating the pharmacy and procurement departments with the exact same rigor as the intensive care unit."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Eliminated Shrinkage:</strong> Maximize hospital profitability by installing bulletproof internal controls over high-value pharmacy inventory and surgical consumables.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Tax Optimization:</strong> Protect the institution from IRD audits by ensuring flawless VAT segregation and legally optimizing doctor compensation structures.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Protected Pharma Margins:</strong> Utilize advanced cost-accounting models to defend pricing strategies against government caps and aggressive foreign competition.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>M&A Integration:</strong> Seamlessly execute the acquisition of diagnostic centers or smaller clinics through rigorous financial and tax due diligence.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Internal Audit</Link>
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Tax Advisory</Link>
                <Link to="/services/due-diligence-and-valuation" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Financial Due Diligence</Link>
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
            Optimize Your Clinical Operations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From executing rigorous internal audits on pharmacy operations to structuring tax-efficient compensation models, we provide the financial architecture required to scale your healthcare institution profitably.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
            Schedule a Board Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
