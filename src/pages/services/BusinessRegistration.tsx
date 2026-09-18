import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, FileText, Building2, Clock, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  SEO RECOMMENDATIONS
  Title: Business Registration & Corporate Secretarial Services | CA Firm Nepal
  Meta Description: Expert corporate structuring and secretarial services in Nepal. Navigate OCR, DOI, and shareholder compliance with our senior advisory team.
  H1: Business Registration & Secretarial: Establishing Robust Foundations
*/

const faqs = [
  {
    q: "How long does it take to register a Private Limited Company in Nepal?",
    a: "Assuming all documentation (citizenships, pre-approved name, MOA/AOA) is flawlessly prepared, the Office of the Company Registrar (OCR) typically processes a registration within 3 to 7 working days. However, the true variable is the time taken to draft bespoke, legally sound Memorandums and Articles of Association. We ensure this foundational step is never rushed, preventing structural issues down the line."
  },
  {
    q: "What is the difference between OCR registration and Ward Office/PAN registration?",
    a: "OCR incorporation grants your company legal existence. However, before commencing commercial operations or opening a bank account, you must register your business at the local Ward Office and obtain a Permanent Account Number (PAN) or VAT certificate from the Inland Revenue Department (IRD). We manage this entire end-to-end multi-agency process."
  },
  {
    q: "Can a foreign national be a director of a Nepalese company?",
    a: "Yes, subject to the provisions of the Companies Act and the Foreign Investment and Technology Transfer Act (FITTA). Foreign directors must comply with specific documentation requirements (notarized passports, police clearances) and usually require Department of Industry (DOI) approval. We navigate this complex cross-border documentation process seamlessly."
  },
  {
    q: "What are the mandatory annual compliance filings required by the OCR?",
    a: "Every company must hold an Annual General Meeting (AGM) within six months of the fiscal year-end. Following the AGM, you must file the audited financial statements, the Board of Directors' report, and an updated shareholder register with the OCR. Failure to file these documents on time incurs compounding penalties and can ultimately lead to the company's status being frozen."
  },
  {
    q: "How do you manage disputes between shareholders or directors?",
    a: "Prevention is our primary strategy. We draft robust Articles of Association and Shareholder Agreements that clearly delineate voting rights, dividend policies, and dispute resolution mechanisms. If disputes arise, our corporate advisory team leverages the Companies Act to mediate conflicts, facilitate buyouts, or restructure the board legally and efficiently."
  },
  {
    q: "What is involved in altering a company's share capital?",
    a: "Increasing authorized or issued share capital requires a special resolution at a General Meeting, followed by stringent filing procedures with the OCR and IRD (to ensure no undeclared capital gains are triggered). We handle the drafting of minutes, the filing of the amended MOA/AOA, and the issuance of new share certificates."
  },
  {
    q: "Do you offer 'registered office' or nominee services?",
    a: "While we do not provide nominee director services due to our strict risk and independence policies, we do offer comprehensive corporate secretarial retainers. We act as your external compliance department, managing your registered office's statutory registers, drafting board minutes, and ensuring all OCR filings are immaculate."
  },
  {
    q: "Why shouldn't we just use a standard template for our MOA/AOA?",
    a: "Standard templates available outside OCR are dangerously generic. They often restrict a company from pivoting its business model or fail to protect minority shareholders. We draft bespoke foundational documents tailored specifically to your strategic business plan, ensuring you possess the legal agility required to scale."
  }
];

export default function BusinessRegistration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.animate-up' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      
      {/* 1. Advisory Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Building2 className="w-4 h-4 text-[#a5caff]" />
              <span>Premium Advisory Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Business Registration: <br />
              <span className="text-[#a5caff]">Establishing Robust Foundations</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              Move beyond mere administrative filing. We architect the legal and corporate structures of your enterprise from day one, ensuring your foundational documents support rapid scaling, protect shareholder value, and guarantee frictionless compliance across Nepal's regulatory landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Consult on Corporate Structuring
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Challenges */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
              The Cost of Poor Corporate Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              In Nepal, corporate structuring is often treated as a cheap, one-off administrative hurdle. This short-term thinking invariably results in catastrophic long-term consequences when the business attempts to scale, raise capital, or manage leadership transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Restrictive Foundations</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Utilizing generic 'copy-paste' Memorandums of Association (MOA) frequently locks companies into narrow operational scopes. When the company attempts to pivot or diversify, they face grueling, expensive legal processes to amend their core documents.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Shareholder Disputes</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Failing to draft robust Articles of Association (AOA) or shareholder agreements leaves the company highly vulnerable to crippling boardroom deadlocks, minority shareholder oppression, and legally messy founder exits.
              </p>
            </div>

            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">Compliance Paralysis</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Ignoring continuous statutory compliance—such as failing to file AGMs, board minutes, or share transfer registers with the OCR—triggers compounding fines and frequently results in the freezing of corporate bank accounts or halting of vital operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#020A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Comprehensive Corporate Capabilities
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Strategic Entity Structuring & Incorporation</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We don't just register companies; we architect them. We analyze your long-term business plan, intended capital structure, and exit strategies to determine the optimal legal entity. We then draft highly bespoke foundational documents (MOA/AOA) that provide ultimate operational agility while strictly adhering to the Companies Act 2063.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Establish a resilient, legally sound foundation designed explicitly for scale and capital acquisition.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> Prevents future legal bottlenecks, protects founder equity, and accelerates go-to-market timelines across all regulatory agencies (OCR, IRD, Ward).</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Technology startups preparing for future venture capital rounds, or foreign entities establishing local subsidiaries.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Company Incorporation" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Corporate Secretarial" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Outsourced Corporate Secretarial Services</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Maintaining immaculate corporate records is a fiduciary duty. We act as your external Company Secretary, managing the drafting of critical board minutes, orchestrating Annual General Meetings (AGMs), and ensuring that all statutory registers and mandatory OCR filings are executed flawlessly and on time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Eliminate the administrative burden of compliance while ensuring absolute statutory perfection.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> Shields directors from legal liabilities, prevents compounding OCR fines, and ensures the company is perpetually 'audit-ready'.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Established SMEs and corporate groups requiring dedicated compliance management without the overhead of an in-house legal team.</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">Shareholder Management & Corporate Alterations</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  As your business evolves, so must its structure. We manage the complex legal procedures required for altering authorized capital, executing share transfers, changing corporate objectives, or onboarding new directors—managing the intricate cross-agency reporting required between the OCR, IRD, and DOI.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> Facilitate corporate agility while ensuring structural changes are legally binding and tax-efficient.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> Prevents disputes during ownership transitions and mitigates unintended tax consequences (e.g., Section 57 liabilities).</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> Companies executing a buyout of a founding partner or bringing on external investors.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop" alt="Shareholder Management" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 bg-deep-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our Professional Advisory Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We reject the volume-driven, 'tick-box' approach to corporate registration. Every entity we establish is treated as a bespoke legal architecture project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Strategic Assessment", desc: "Consulting deeply with founders to understand capital requirements, operational goals, and long-term exit strategies." },
              { title: "Legal Drafting", desc: "Drafting highly customized MOAs, AOAs, and Shareholder Agreements that preemptively resolve future conflicts." },
              { title: "Agency Navigation", desc: "Executing parallel registrations across the OCR, IRD (PAN/VAT), and local Ward Offices to accelerate time-to-market." },
              { title: "Implementation", desc: "Conducting inaugural board meetings, issuing formalized share certificates, and establishing statutory registers." },
              { title: "Continuous Monitoring", desc: "Providing ongoing secretarial oversight, tracking statutory deadlines, and managing annual compliance filings." }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-up">
                <div className="text-5xl font-bold text-white/10 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-white/20 dark:bg-[#020A1A]/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Regulatory Perspective */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
                Mastering Nepal's Corporate Frameworks
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A strong corporate foundation requires a deep understanding of how different regulatory acts intersect and overlap in practice.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">The Companies Act 2063</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    This is the bedrock of corporate existence. We ensure strict adherence to its complex stipulations regarding board composition, mandatory meeting quorum, minority shareholder protections, and fiduciary duties of directors.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">OCR Administrative Precedence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    The law is one thing; administrative practice is another. Our deep experience with the Office of the Company Registrar allows us to navigate unwritten procedural nuances, preventing frustrating delays during registrations or capital alterations.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">Cross-Agency Compliance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Corporate changes rarely happen in a vacuum. A simple share transfer at the OCR may trigger severe tax implications under the Income Tax Act or require prior approvals from the Department of Industry (DOI) if foreign investment is involved. We manage this entire matrix.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white dark:bg-[#020A1A] p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100 dark:border-white/10">
                <Building2 className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "Founders often view registration as a bureaucratic hurdle to be cleared as cheaply as possible. We view it as the most critical architectural decision a business will ever make. A flawed structure will inevitably fracture under the weight of future growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why It Matters (Outcomes) */}
      <section className="py-20 bg-white dark:bg-[#020A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
              Empowering Sustainable Operations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our secretarial and structuring services provide tangible, operational peace of mind, allowing management to focus entirely on commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Frictionless Growth", desc: "Build on a corporate structure that easily accommodates future capital injections, M&A activities, or pivots in business strategy." },
              { title: "Risk Reduction", desc: "Eliminate the threat of compounding OCR fines, frozen bank accounts, or directors facing personal liability for statutory negligence." },
              { title: "Enhanced Governance", desc: "Establish clear, legally binding frameworks that govern boardroom behavior, protecting minority shareholders and preventing deadlocks." },
              { title: "Operational Efficiency", desc: "Completely offload the tedious administrative burden of drafting minutes, maintaining registers, and filing annual returns." },
              { title: "Investor Readiness", desc: "Maintain immaculate corporate records that immediately pass the stringent legal due diligence required by institutional investors." },
              { title: "Dispute Mitigation", desc: "Rely on robustly drafted foundational documents that provide clear, legally enforceable mechanisms for resolving inevitable shareholder conflicts." }
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gray-50 dark:bg-[#0A1128] rounded-xl border border-gray-100 dark:border-white/10 animate-up">
                <CheckCircle2 className="w-6 h-6 text-royal-blue shrink-0 mr-4" />
                <div>
                  <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">{outcome.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Applications */}
      <section className="py-20 bg-primary-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Sector-Specific Structuring
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Corporate structuring is highly dependent on your industry. We architect entities designed specifically for the unique regulatory pressures of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Technology & Startups</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Drafting dynamic AOA/MOAs that accommodate future multi-tier equity structures, employee stock option pools (ESOPs), and strict founder vesting schedules.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Foreign Direct Investment (FDI)</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Navigating the intersection of the Companies Act and FITTA, ensuring that incorporation documents explicitly align with pre-approved DOI objectives to guarantee smooth capital repatriation.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">NGOs (Section 149 Companies)</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Registering Not-for-Profit companies (Section 149), ensuring founding documents align with both OCR mandates and stringent Social Welfare Council (SWC) requirements.</p>
            </div>
            <div className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">Manufacturing Conglomerates</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Establishing optimized holding and subsidiary structures that isolate high-risk industrial operations from core real estate or trading assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Expert answers to your corporate structuring and compliance inquiries.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#020A1A] border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden animate-up">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 dark:bg-[#0A1128] transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-primary-dark-blue dark:text-white pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Related Insights & Services */}
      <section className="py-20 bg-white dark:bg-[#020A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 animate-up">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-2">Continue Exploring</h2>
            <div className="w-16 h-1 bg-royal-blue rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Related Service</span>
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors">Corporate Advisory</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">If your existing corporate structure is hindering growth, engage our senior advisors for comprehensive corporate restructuring and holding company formation.</p>
              </div>
              <Link to="/services/corporate-advisory" className="inline-flex items-center text-sm font-bold text-primary-dark-blue dark:text-white group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10 flex flex-col justify-between group cursor-pointer animate-up">
              <div>
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2 block">Related Service</span>
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors">FDI & Investment Advisory</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">For foreign investors, corporate registration is only one piece of the puzzle. We manage the entire FITTA framework to ensure seamless market entry.</p>
              </div>
              <Link to="/services/fdi-and-investment" className="inline-flex items-center text-sm font-bold text-primary-dark-blue dark:text-white group-hover:text-royal-blue transition-colors">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="py-24 bg-primary-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Build a Foundation for Scale
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Do not leave your enterprise's legal architecture to chance. Partner with our senior advisory team to establish a robust, compliant, and agile corporate structure that confidently supports your most ambitious growth objectives.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Schedule an Advisory Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
