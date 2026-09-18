import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, GraduationCap, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EducationInstitutions() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      
      {/* 1. Industry Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Updated Image: Professional institutional/governance architecture rather than graduation */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <GraduationCap className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Education Institutions
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Transforming academic excellence into institutional sustainability through rigorous financial governance, tax planning, and strategic capital structuring.
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
                The private education sector in Nepal—encompassing massive K-12 school networks, specialized medical and engineering colleges, and university-affiliated management institutes—is a multi-billion rupee industry. It is driven by an exploding middle class that prioritizes premium, internationally affiliated education over traditional public schooling.
              </p>
              <p className="mb-4">
                Historically, many of these institutions were founded by academics or tight-knit families. While their educational pedagogy may be exceptional, their financial and corporate governance structures have often remained highly informal. 
              </p>
              <p>
                Today, this informality is a massive liability. The sector is undergoing rapid corporatization. Large institutional investors and private equity funds are aggressively acquiring fragmented schools to build national chains. Concurrently, regulatory bodies are heavily scrutinizing the financial operations of schools, particularly regarding fee structures, teacher taxation (TDS), and the legal conversion from non-profit trusts (Guthi) to for-profit corporate entities.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Operating a large-scale educational institution involves managing massive cash flows and high fixed overheads within a highly sensitive socio-political environment:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Corporate Structuring & Guthi Laws</strong>
                    Many older institutions were established as non-profit 'Guthis' (trusts) to secure land and tax benefits. Modernizing these institutions to attract private capital or execute succession planning requires navigating extremely complex, often contradictory, legal frameworks to legally transition into private limited companies.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Revenue Leakage & Internal Controls</strong>
                    Large schools handle thousands of individual fee transactions monthly. A lack of robust, automated ERP systems frequently leads to massive revenue leakage, delayed receivables, and untracked discounts that severely erode institutional cash flow.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Tax & SSF Compliance</strong>
                    Institutions are frequently penalized by the IRD for failing to correctly deduct Tax Deducted at Source (TDS) on visiting faculty and part-time lecturers. Additionally, strict compliance with the Social Security Fund (SSF) for all academic and administrative staff is now heavily enforced.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We partner with school boards, university administrators, and educational investors to install corporate-grade financial discipline.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Corporate Restructuring & M&A</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We architect the complex legal and financial restructuring of educational institutions. For expanding networks, we conduct exhaustive financial due diligence on target acquisitions, ensuring liabilities are correctly valued before purchase.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Internal Audit & Revenue Assurance</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We conduct rigorous internal audits focused specifically on the fee-collection cycle. We reconcile student registers with bank deposits to eliminate cash leakage and recommend robust ERP integrations.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Statutory Audit & Tax Advisory</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We provide comprehensive statutory audits that satisfy the Ministry of Education and the OCR. We also design highly efficient tax structures for promoters while ensuring absolute compliance with SSF and TDS regulations.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                Educational institutions operate in a highly scrutinized environment. The <strong>Ministry of Education, Science and Technology (MoEST)</strong> dictates fee caps and infrastructure requirements, which heavily dictate an institution's financial modeling and profitability caps.
              </p>
              <p className="mb-4">
                Furthermore, institutions affiliated with foreign universities (e.g., UK or Australian boards) must navigate strict <strong>Nepal Rastra Bank (NRB)</strong> regulations to legally repatriate franchise fees, royalty payments, and examination fees in foreign currency. 
              </p>
              <p>
                From a corporate perspective, the <strong>Office of the Company Registrar (OCR)</strong> and the <strong>Inland Revenue Department (IRD)</strong> treat for-profit schools exactly like commercial enterprises. However, they are subject to specific Education Service Taxes (EST) and unique VAT exemptions on core educational services, requiring highly precise accounting to avoid massive tax penalties or the loss of legitimate exemptions.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The most significant opportunity in the education sector is the transition from localized, single-campus models into heavily corporatized, national education brands. By separating the real estate assets (land and buildings) from the operational 'schooling' entity, promoters can unlock massive amounts of capital. This 'Asset-Light' model allows the operational entity to scale rapidly across the country while the real estate entity generates steady rental yields.
              </p>
              <p>
                Additionally, there is a massive opportunity to optimize working capital. Educational institutions receive large influxes of cash at the beginning of academic cycles. Institutions that proactively deploy treasury management strategies can generate significant non-operating income on this idle cash.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "Academic excellence will build your reputation, but financial governance will determine your survival. As the Nepalese education sector consolidates, schools governed like traditional 'family trusts' will inevitably be acquired or outcompeted. The future belongs to institutions that combine premium pedagogy with the ruthless financial discipline of a Fortune 500 company."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Zero Revenue Leakage:</strong> Maximize profitability by installing impenetrable internal controls and automated reconciliations across the entire student fee lifecycle.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Frictionless Repatriation:</strong> Seamlessly pay international university partners and franchise boards by maintaining flawless NRB and FITTA compliance.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Tax Defensibility:</strong> Protect the institution from crippling IRD penalties by ensuring absolute accuracy in TDS, SSF, and Education Service Tax calculations.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#0A1128] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>M&A Readiness:</strong> Position the institution for lucrative private equity investment or acquisition by adopting a highly corporatized, transparent financial structure.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/corporate-advisory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Corporate Restructuring</Link>
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Internal Audit</Link>
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Tax Advisory</Link>
                <Link to="/services/due-diligence-and-valuation" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Financial Due Diligence</Link>
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
            Institutionalize Your Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From executing complex corporate restructuring to installing rigorous internal controls over student revenues, we provide the executive financial architecture required to scale your educational institution safely and profitably.
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
