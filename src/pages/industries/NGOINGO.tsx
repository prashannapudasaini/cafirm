import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Globe2, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NGOINGO() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Globe2 className="w-4 h-4 text-royal-blue" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              NGOs & INGOs
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Ensuring absolute donor accountability, regulatory compliance, and operational transparency for Nepal’s development sector.
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
                The Non-Governmental Organization (NGO) and International Non-Governmental Organization (INGO) sector is a massive pillar of Nepal’s socio-economic development. Fueled by bilateral aid, multilateral agencies (like USAID, DFID, and the UN), and private foundations, this sector deploys billions of rupees annually across healthcare, education, climate resilience, and infrastructure projects.
              </p>
              <p className="mb-4">
                However, the landscape is experiencing a paradigm shift. International donors are moving away from traditional grant-making models toward "results-based financing." They demand unprecedented levels of financial transparency, real-time monitoring of fund utilization, and sophisticated impact reporting.
              </p>
              <p>
                Simultaneously, the Government of Nepal has aggressively tightened its oversight. Regulatory bodies are demanding strict alignment of INGO projects with national development goals, and failure to meticulously document the inflow and deployment of foreign aid often results in severe regulatory sanctions, including the freezing of institutional bank accounts.
              </p>
            </section>

            {/* 3. Key Business Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Key Business Challenges</h2>
              <p className="mb-6">
                Operating a large-scale INGO or managing a complex consortium of local NGO partners in Nepal involves extreme fiduciary and regulatory pressure:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Donor Compliance & Fund Commingling</strong>
                    Major donors impose highly specific, often conflicting, compliance mandates regarding procurement, travel allowances, and staff compensation. Commingling funds from different donors or failing to adhere to specific budget lines can trigger massive grant clawbacks.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Local Partner Risk Management</strong>
                    INGOs typically execute projects through local NGO partners. Ensuring that these grassroots organizations possess the financial literacy and internal controls necessary to manage donor funds transparently is a massive operational bottleneck.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 dark:bg-[#131B33] p-2 rounded-lg shrink-0 mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Navigating the Social Welfare Council (SWC)</strong>
                    Securing Project Agreements (PA) and General Agreements (GA) from the SWC is heavily bureaucratic. Furthermore, the SWC mandates its own independent project audits, and negative findings can jeopardize an INGO’s legal right to operate in Nepal.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. How We Support the Sector */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">How We Support the Sector</h2>
              <p className="mb-6">
                We provide the financial architecture that guarantees donor trust and regulatory immunity, allowing INGOs to focus entirely on their programmatic impact.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Fund Accountability Statements (FAS) Audits</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We conduct specialized audits specifically designed to meet the rigorous demands of USAID, the European Union, and the UN. We verify that every rupee spent directly correlates to the approved project budget and donor procurement guidelines.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Local Partner Capacity Building</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We mitigate consortium risk by auditing local NGO implementing partners. We design and install robust financial manuals, procurement policies, and internal control frameworks at the grassroots level to prevent fund leakage.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10">
                  <h3 className="font-bold text-primary-dark-blue dark:text-white mb-2">Outsourced CFO & Payroll Services</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">For INGOs establishing a new presence in Nepal, we offer fully outsourced financial management. We handle multi-currency donor reporting, complex expat payroll taxation, and Social Security Fund (SSF) compliance, acting as your localized finance department.</p>
                </div>
              </div>
            </section>

            {/* 5. Regulatory & Compliance Environment */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Regulatory & Compliance Environment</h2>
              <p className="mb-4">
                The regulatory matrix for the development sector is highly specialized. The <strong>Social Welfare Council (SWC)</strong> is the primary gatekeeper. INGOs must navigate complex pre-approvals for any foreign fund inflows, and must allocate specific percentages of their budget directly to programmatic activities versus administrative overheads.
              </p>
              <p className="mb-4">
                The <strong>Inland Revenue Department (IRD)</strong> scrutinizes the sector heavily for Withholding Tax (WHT) compliance. Because NGOs/INGOs are generally tax-exempt entities, tax officers aggressively audit their procurement processes to ensure WHT is correctly deducted and deposited on payments to vendors, consultants, and landlords.
              </p>
              <p>
                Furthermore, the <strong>Nepal Rastra Bank (NRB)</strong> strictly monitors the inflow of foreign aid. Any deviation in the project agreement or failure to route funds through designated commercial banking channels can trigger money-laundering investigations. We provide the meticulous documentation and liaison services required to keep operations running smoothly across all three regulatory bodies.
              </p>
            </section>

            {/* 6. Strategic Opportunities */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Strategic Opportunities</h2>
              <p className="mb-4">
                The most significant opportunity for INGOs in Nepal is the transition to localized leadership. Donors strongly prefer funding local NGOs over international headquarters to reduce administrative overhead. INGOs that proactively spin off their local operations into highly compliant, self-governing Nepalese NGOs will secure a massive competitive advantage in future grant applications.
              </p>
              <p>
                Additionally, the adoption of cloud-based grant management software presents a huge opportunity to streamline consortium reporting. Implementing systems that allow real-time visibility into the spending of local implementing partners drastically reduces the risk of post-project audit failures.
              </p>
            </section>

            {/* 7. Industry-Specific Advisory Perspective */}
            <section>
              <div className="bg-primary-dark-blue text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10">An Advisory Perspective</h2>
                <p className="font-light italic text-lg leading-relaxed relative z-10">
                  "In the development sector, good intentions do not compensate for poor financial governance. A single disallowed cost finding from a major donor can irreparably damage an INGO's global reputation. True sustainability requires treating donor funds with the exact same ruthless financial discipline that a Fortune 500 company applies to its shareholder capital."
                </p>
              </div>
            </section>

            {/* 8. Business Outcomes */}
            <section>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Business Outcomes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Zero Disallowed Costs:</strong> Eliminate the financial risk of grant clawbacks by ensuring absolute compliance with complex, donor-specific procurement and expenditure guidelines.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Uninterrupted Operations:</strong> Prevent the freezing of organizational bank accounts by flawlessly navigating the SWC’s bureaucratic approval processes.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Consortium Security:</strong> Protect the lead applicant's reputation by aggressively auditing and building the financial capacity of local implementing partners.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 dark:bg-[#031B4E] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-royal-blue mt-1 mr-3 shrink-0" />
                  <span className="text-sm"><strong>Tax Compliance:</strong> Avoid massive IRD penalties by implementing automated Withholding Tax (WHT) and payroll tax (TDS) deduction protocols across the organization.</span>
                </li>
              </ul>
            </section>

            {/* 9. Related Services */}
            <section className="border-t border-gray-200 dark:border-white/20 pt-10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Explore Related Services</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/ngo-ingo-advisory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Donor Audits (FAS)</Link>
                <Link to="/services/bpo-and-payroll" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Expat Payroll Management</Link>
                <Link to="/services/risk-and-compliance" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">Internal Control Design</Link>
                <Link to="/services/tax-and-regulatory" className="px-4 py-2 bg-blue-50 text-royal-blue text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">SWC Compliance</Link>
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
            Secure Your Institutional Funding
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            From conducting rigorous USAID-compliant audits to navigating the complexities of SWC project approvals, we provide the fiduciary architecture required to protect your funding and maximize your programmatic impact.
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
