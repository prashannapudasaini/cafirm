import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BarChart3, ShieldAlert, Briefcase } from 'lucide-react';

import { ServiceHero } from '../../components/services/shared/ServiceHero';
import { BusinessChallenges } from '../../components/services/shared/BusinessChallenges';
import { ServiceBlocks } from '../../components/services/shared/ServiceBlocks';
import { AdvisoryProcess } from '../../components/services/shared/AdvisoryProcess';
import { RegulatoryPerspective } from '../../components/services/shared/RegulatoryPerspective';
import { BusinessOutcomes } from '../../components/services/shared/BusinessOutcomes';
import { IndustryExpertise } from '../../components/services/shared/IndustryExpertise';
import { FAQSection } from '../../components/services/shared/FAQSection';
import { ContactCTA } from '../../components/services/shared/ContactCTA';

/* 
  SEO RECOMMENDATIONS
  Title: Audit & Assurance Services in Nepal | Premium CA Advisory
  Meta Description: Enhance stakeholder confidence and ensure NFRS compliance with our risk-based audit and assurance services. Expert guidance for Nepalese enterprises.
  H1: Audit & Assurance: Elevating Financial Integrity
*/

const faqs = [
  {
    q: "How does the transition to NFRS impact our upcoming statutory audit?",
    a: "The transition to Nepal Financial Reporting Standards (NFRS) fundamentally changes how assets, liabilities, and revenues are recognized and measured. It introduces stringent requirements for fair value measurements and extensive disclosures. Our audit process doesn't just check the math; we assess your accounting policies to ensure they align with ICAN’s NFRS roadmap, preventing costly restatements and compliance breaches."
  },
  {
    q: "What is a risk-based audit approach and how does it benefit my business?",
    a: "Unlike traditional substantive testing that treats every transaction equally, a risk-based approach focuses our audit resources on areas with the highest probability of material misstatement or fraud. This means we spend less time on routine, low-risk transactions and more time analyzing complex estimates, revenue recognition, and internal control weaknesses, ultimately providing you with highly actionable insights."
  },
  {
    q: "Can you assist with internal control audits mandated by regulatory bodies?",
    a: "Yes. Regulators, particularly the Nepal Rastra Bank (NRB) and the Insurance Authority, mandate robust internal control frameworks. We conduct comprehensive reviews of your internal control environment, identifying vulnerabilities in financial reporting, operational efficiency, and compliance, helping you strengthen governance before statutory inspections occur."
  },
  {
    q: "How do your audits add value beyond statutory compliance?",
    a: "We view the statutory audit not as a compliance exercise, but as a strategic health check. Through our Management Letter, we highlight systemic inefficiencies, potential tax exposures, and operational risks. Our goal is to provide the Board and Management with the intelligence needed to optimize capital, improve cash flows, and mitigate enterprise risk."
  },
  {
    q: "What is the timeline for completing a statutory audit for a large-scale manufacturing firm?",
    a: "Timelines vary based on the complexity of your operations, the maturity of your internal controls, and the number of branches/subsidiaries. A typical comprehensive audit involves a 2-3 week planning and interim phase, followed by 4-6 weeks of fieldwork after financial year-end. We deploy agile methodologies to ensure statutory deadlines with the OCR and IRD are comfortably met without sacrificing audit quality."
  },
  {
    q: "Do you provide assurance services for foreign investors (FDI)?",
    a: "Absolutely. Foreign investors require absolute certainty regarding the financial health of their Nepalese subsidiaries or joint ventures. We provide tailored assurance reports, group reporting packages aligned with IFRS, and specific agreed-upon procedures (AUPs) to satisfy the rigorous demands of international stakeholders and parent companies."
  },
  {
    q: "How are Information Systems (IS) audits integrated into your financial audits?",
    a: "In today's digital landscape, financial integrity relies heavily on IT systems. Our audit teams include IS audit specialists who evaluate your IT General Controls (ITGC), application controls, and data integrity. This is particularly critical for financial institutions and e-commerce platforms operating in Nepal, ensuring financial data cannot be maliciously altered."
  },
  {
    q: "What happens if a material misstatement is found during the audit?",
    a: "If we identify a material misstatement, our immediate focus is collaborative resolution. We discuss the finding with management, evaluate the root cause, and advise on the necessary adjustments to correct the financial statements prior to issuance. We then provide strategic recommendations to fortify internal controls to prevent recurrence."
  }
];

export default function AuditAssurance() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.animate-up' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#031B4E] min-h-screen">
      <ServiceHero
        badgeText="Premium Advisory Service"
        title1="Audit & Assurance:"
        title2="Elevating Financial Integrity"
        description="Beyond standard compliance, our risk-based audit methodologies deliver profound strategic insights, fortify internal controls, and foster unwavering trust among investors, lenders, and regulators across Nepal's dynamic economic landscape."
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="Navigating Modern Financial Complexities"
        description="In Nepal’s rapidly formalizing corporate environment, businesses face immense pressure to maintain immaculate financial records while driving operational growth. Standard bookkeeping is no longer sufficient to satisfy the demands of institutional stakeholders."
        challenges={[
          {
            icon: BarChart3,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Regulatory Scrutiny",
            description: "With the Inland Revenue Department (IRD) and Nepal Rastra Bank (NRB) deploying advanced data analytics, material misstatements or non-compliance with the Companies Act 2063 can trigger severe financial penalties and reputational damage."
          },
          {
            icon: ShieldAlert,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Internal Vulnerabilities",
            description: "Rapidly scaling enterprises often outgrow their internal control frameworks, leading to revenue leakage, inefficient capital allocation, and heightened susceptibility to internal fraud or operational errors."
          },
          {
            icon: Briefcase,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Investor Confidence",
            description: "Foreign Direct Investment (FDI) partners, institutional lenders, and prospective shareholders demand absolute financial transparency aligned with global standards like NFRS. Lack of rigorous assurance stalls critical capital injections."
          }
        ]}
      />

      <ServiceBlocks
        title="Comprehensive Assurance Capabilities"
        blocks={[
          {
            title: "Statutory & External Audits",
            description: "We execute rigorous, independent statutory audits designed to meet the highest standards of the Institute of Chartered Accountants of Nepal (ICAN). Our objective is not merely to sign off on financial statements, but to provide stakeholders with a deep, objective understanding of the firm's financial health.",
            strategicPurpose: "Validate financial accuracy and ensure strict adherence to statutory reporting mandates.",
            clientBenefits: "Mitigates regulatory risk, satisfies shareholder mandates, and establishes an unshakeable foundation of trust.",
            useCase: "Annual financial reporting for public and private limited companies operating in Nepal.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Internal Audit & Risk Assurance",
            description: "Our internal audit practice transforms compliance from a cost center into a strategic asset. We dissect operational workflows, evaluate internal controls, and identify systemic inefficiencies that erode enterprise value. We act as the proactive defense mechanism for your Board of Directors.",
            strategicPurpose: "Identify, evaluate, and mitigate operational, financial, and compliance risks before they materialize.",
            clientBenefits: "Optimizes process efficiency, stops revenue leakage, and fortifies corporate governance structures.",
            useCase: "Large-scale manufacturing and trading firms requiring continuous risk monitoring.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "NFRS & IFRS Advisory",
            description: "Transitioning to and maintaining compliance with Nepal Financial Reporting Standards (NFRS) is a highly technical endeavor. We provide end-to-end advisory on complex accounting treatments, fair value measurements, and comprehensive disclosure requirements mandated by regulatory bodies.",
            strategicPurpose: "Seamlessly align local financial reporting with complex global accounting standards.",
            clientBenefits: "Prevents statutory non-compliance, facilitates international investments, and ensures absolute financial clarity.",
            useCase: "BFIs, listed companies, and multinational subsidiaries navigating complex reporting frameworks.",
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=1974&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="Our Professional Advisory Process"
        description="We reject the 'tick-box' approach to auditing. Our methodology is rooted in a profound understanding of your business model, enabling us to deliver actionable intelligence alongside rigorous assurance."
        steps={[
          { title: "Assessment", description: "Deep-dive analysis of your industry, business model, and overarching risk landscape." },
          { title: "Planning", description: "Designing a targeted, risk-based audit strategy focusing on material vulnerabilities." },
          { title: "Execution", description: "Deploying senior experts to conduct rigorous testing of controls and transactions." },
          { title: "Evaluation", description: "Synthesizing findings to assess the true integrity of financial statements." },
          { title: "Reporting", description: "Delivering statutory reports alongside a highly strategic Management Letter." }
        ]}
      />

      <RegulatoryPerspective
        title="Mastering Nepal's Regulatory Ecosystem"
        description="Operating in Nepal requires deft navigation of a complex and continuously evolving regulatory environment. Our audit philosophy is inextricably linked to the legal realities your enterprise faces."
        quoteText="Regulatory frameworks in Nepal should not be viewed merely as hurdles; they are blueprints for enterprise resilience. By integrating rigorous compliance directly into your operational DNA through our assurance processes, we transform regulatory obligations into a distinct competitive advantage—securing investor trust and ensuring frictionless growth."
        regulations={[
          { title: "The Companies Act 2063", description: "We ensure your financial disclosures and board reporting structures strictly align with statutory mandates, protecting directors from personal liabilities and avoiding scrutiny from the Office of the Company Registrar (OCR)." },
          { title: "NFRS & NSA Directives", description: "Compliance with Nepal Standards on Auditing (NSA) and NFRS is not optional for large entities. We bridge the gap between legacy accounting practices and modern, fair-value driven reporting requirements mandated by ICAN." },
          { title: "Sectoral Frameworks (NRB & Beema Samiti)", description: "For our BFI and insurance clients, we overlay strict statutory audits with deep-dive assessments of capital adequacy, liquidity risk, and regulatory directives, safeguarding against severe regulatory interventions." }
        ]}
      />

      <BusinessOutcomes
        title="Catalyzing Business Outcomes"
        description="Our assurance engagements are explicitly designed to yield tangible, strategic value that reverberates across your entire organization."
        outcomes={[
          { title: "Enhanced Governance", description: "Strengthen the overarching control environment, providing the Board of Directors with absolute clarity and oversight over management operations." },
          { title: "Investor Confidence", description: "Facilitate smoother capital raising and FDI injections by presenting transparent, internationally recognizable financial health metrics." },
          { title: "Risk Reduction", description: "Systematically identify and mitigate financial, operational, and tax-related vulnerabilities before they trigger regulatory or financial crises." },
          { title: "Operational Efficiency", description: "Streamline financial workflows and eliminate redundant processes through insights generated during the rigorous audit process." },
          { title: "Compliance Readiness", description: "Maintain a state of perpetual readiness for sudden IRD assessments or sectoral regulatory inspections." },
          { title: "Sustainable Growth", description: "Build a rock-solid financial foundation that safely supports aggressive expansion, M&A activities, or market diversification." }
        ]}
      />

      <IndustryExpertise
        title="Sector-Specific Expertise"
        description="We apply our robust audit methodologies through the lens of deep industry specialization, recognizing that the risks faced by a commercial bank are vastly different from those of a hydropower developer."
        industries={[
          { title: "Banking & Financial Institutions (BFIs)", description: "Evaluating credit risk portfolios, capital adequacy ratios, and strict adherence to complex NRB unified directives and NFRS 9 implementations." },
          { title: "Hydropower & Renewable Energy", description: "Auditing massive capital expenditure (CAPEX) allocations, complex project financing structures, and ensuring compliance with DoED regulations." },
          { title: "Manufacturing & Trading", description: "Rigorous inventory valuations, cost accounting verifications, supply chain risk assessments, and complex VAT reconciliation audits." },
          { title: "NGOs & INGOs", description: "Specialized fund accountability audits, verifying donor compliance mandates, and ensuring strict adherence to Social Welfare Council (SWC) guidelines." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Expert insights into common assurance inquiries in Nepal."
        faqs={faqs}
      />


      <ContactCTA
        title="Secure Your Financial Integrity"
        description="Partner with senior Chartered Accountants dedicated to providing rigorous assurance, safeguarding your assets, and empowering your strategic decisions. Let us help you navigate Nepal’s regulatory landscape with absolute confidence."
        ctaText="Schedule an Advisory Session"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  );
}
