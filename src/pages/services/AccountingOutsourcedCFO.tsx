import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PieChart, Calculator, TrendingUp } from 'lucide-react';

import { ServiceHero } from '../../components/services/shared/ServiceHero';
import { BusinessChallenges } from '../../components/services/shared/BusinessChallenges';
import { ServiceBlocks } from '../../components/services/shared/ServiceBlocks';
import { AdvisoryProcess } from '../../components/services/shared/AdvisoryProcess';
import { BusinessOutcomes } from '../../components/services/shared/BusinessOutcomes';
import { IndustryExpertise } from '../../components/services/shared/IndustryExpertise';
import { FAQSection } from '../../components/services/shared/FAQSection';
import { ContactCTA } from '../../components/services/shared/ContactCTA';
import { TrustCredibility } from '../../components/services/shared/TrustCredibility';

/* 
  SEO RECOMMENDATIONS
  Title: Accounting Outsourcing & Virtual CFO Services | Premium CA Firm
  Meta Description: Elite accounting outsourcing, bookkeeping, and virtual CFO services in Nepal. Scale your finance function with our expert team and robust reporting systems.
  H1: Accounting Outsourcing & CFO Services
*/

const faqs = [
  {
    q: "Why should we outsource our accounting function instead of hiring an internal team?",
    a: "Outsourcing immediately upgrades your finance function from basic bookkeeping to institutional-grade accounting without the overhead of hiring, training, and retaining senior talent. We provide continuity, eliminate single-person dependency, and ensure your accounts are always managed by professionals adhering to the latest NFRS updates and tax laws."
  },
  {
    q: "What does a Virtual CFO actually do for my business?",
    a: "A Virtual CFO acts as a strategic financial partner. While standard accountants record history, a CFO shapes the future. They provide high-level financial modeling, cash flow forecasting, budgeting variance analysis, and strategic advice on capital raising, pricing models, and aggressive cost optimization."
  },
  {
    q: "Is our financial data secure if we outsource to your firm?",
    a: "Absolute data security is our foundational promise. We utilize enterprise-grade, cloud-based accounting systems with strict access controls, multi-factor authentication, and automated backups. Our internal network is fortified with robust Information Security (IS) controls designed to prevent any unauthorized data extraction."
  },
  {
    q: "Can you manage our accounting using our existing ERP software (e.g., Tally, SAP, Oracle)?",
    a: "Yes. Our teams are highly proficient in all major ERP ecosystems operating in Nepal, including SAP, Oracle, Tally ERP 9 / Prime, and modern cloud platforms like Xero and QuickBooks. We can seamlessly integrate into your existing infrastructure or migrate you to a more efficient platform."
  },
  {
    q: "How frequently will we receive financial reports?",
    a: "We establish a customized reporting cadence—typically a comprehensive 'Month-End Close' package delivered by the 10th of the following month. This includes a Profit & Loss statement, Balance Sheet, Cash Flow analysis, and a customized executive dashboard tracking your specific KPIs."
  },
  {
    q: "Do you handle the actual payment processing to vendors and employees?",
    a: "We engineer strict procurement-to-pay workflows. We prepare the payment vouchers, verify them against budgets, deduct appropriate TDS, and stage the payments in your banking portal. Management retains the final authorization 'click' to release funds, ensuring complete control and segregation of duties."
  },
  {
    q: "How does your service integrate with the annual statutory audit?",
    a: "Because we maintain your accounts to the highest NFRS standards and ensure all tax compliance is handled concurrently, your books are essentially 'audit-ready' 365 days a year. This eliminates the frantic year-end rush and significantly reduces the time and cost of the statutory audit."
  },
  {
    q: "Can you assist foreign subsidiaries in reporting back to their parent company?",
    a: "Yes. We specialize in group reporting. We maintain the local books in compliance with Nepal laws while simultaneously preparing group reporting packages (under IFRS or US GAAP) and translating local currency financials into the parent company's functional currency for rapid consolidation."
  }
];

export default function AccountingOutsourcedCFO() {
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
        badgeText="Operational Excellence"
        title1="Accounting Outsourcing &"
        title2="Virtual CFO Services"
        description="Elevate your finance function from a chaotic administrative burden into a strategic asset. We deploy elite accounting teams and senior CFOs to deliver immaculate ledgers, deep financial intelligence, and absolute compliance."
        bgImage="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop"
        ctaText="Upgrade Your Finance Function"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Cost of Poor Financial Visibility"
        description="Many high-growth enterprises in Nepal are flying blind. Their accounting departments are bogged down in manual data entry, constantly battling tax compliance fires, and failing to provide management with timely, actionable data."
        challenges={[
          {
            icon: Calculator,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Talent Bottlenecks",
            description: "Recruiting, training, and retaining competent accountants in Nepal is incredibly difficult. High turnover in the finance department leads to catastrophic knowledge loss, delayed reporting, and ultimately, massive statutory fines."
          },
          {
            icon: TrendingUp,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Stagnant Reporting",
            description: "When accounts are treated merely as a year-end compliance task, management receives financial data that is 6 to 12 months old. You cannot steer a fast-growing company by looking in the rearview mirror."
          },
          {
            icon: PieChart,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Compliance Chaos",
            description: "Failing to deduct TDS accurately, missing monthly VAT filing deadlines, or incorrectly calculating advance tax disrupts cash flow and triggers aggressive, punitive scrutiny from the Inland Revenue Department (IRD)."
          }
        ]}
      />

      <ServiceBlocks
        title="Elite Financial Operations"
        blocks={[
          {
            title: "Comprehensive Accounting & Bookkeeping",
            description: "We take absolute ownership of your daily financial operations. From recording complex transactions and managing accounts payable/receivable to executing rigorous bank reconciliations. We ensure your ledgers are impeccably maintained, fully compliant with NFRS, and always audit-ready.",
            strategicPurpose: "Eradicate accounting backlogs and establish a flawless foundation of financial data.",
            clientBenefits: "Eliminates the stress of managing an internal team and dramatically reduces statutory audit timelines.",
            useCase: "Fast-growing SMEs, INGOs, and foreign subsidiaries that require institutional-grade accounting without the overhead.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop"
          },
          {
            title: "Virtual CFO & Strategic Leadership",
            description: "Access the strategic horsepower of a seasoned Chief Financial Officer without the prohibitive full-time salary. Our Virtual CFOs provide aggressive cash flow management, sophisticated financial modeling for new projects, budget variance analysis, and represent you in critical negotiations with banks and investors.",
            strategicPurpose: "Provide executive-level financial intelligence to drive aggressive scaling and profitability.",
            clientBenefits: "Unlocks the ability to make data-driven strategic decisions, optimize capital structures, and raise institutional funding.",
            useCase: "Mid-market enterprises preparing for major expansions, IPOs, or seeking private equity injections.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Tax Compliance & Payroll Processing",
            description: "We seamlessly integrate tax and payroll into the accounting lifecycle. We calculate and file your monthly VAT returns, execute precise TDS deductions, manage Social Security Fund (SSF) contributions, and handle the complex monthly payroll processing for your entire workforce.",
            strategicPurpose: "Centralize and automate all statutory financial obligations to guarantee zero defaults.",
            clientBenefits: "Completely insulates the firm from IRD and Labor Office penalties while ensuring employees are paid accurately and on time.",
            useCase: "Enterprises with large headcounts or complex, multi-state tax obligations.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="The Onboarding & Execution Process"
        description="Transitioning your finance function requires precision. We execute a seamless, highly structured onboarding process that causes zero disruption to your daily operations."
        steps={[
          { title: "Discovery & Blueprint", description: "Deep analysis of your current accounting ecosystem, software, and reporting requirements." },
          { title: "System Migration", description: "Cleaning historical data, setting up the Chart of Accounts, and configuring cloud ERPs." },
          { title: "Workflow Engineering", description: "Establishing stringent SOPs for document flow, invoice approvals, and payment processing." },
          { title: "Daily Execution", description: "Our teams take over the daily bookkeeping, reconciliations, and tax compliance." },
          { title: "Executive Reporting", description: "Delivery of the monthly 'Close Package' and strategic review sessions with the Virtual CFO." }
        ]}
      />

      <TrustCredibility
        title="Uncompromising Standards"
        description="When you outsource to us, you are relying on a highly regulated, professional CA firm bound by rigorous statutory standards."
        items={[
          { title: "NFRS & IFRS Compliance", description: "Guaranteeing your accounts meet the stringent reporting standards mandated by ICAN." },
          { title: "Income Tax Act 2058", description: "Ensuring flawless application of depreciation, allowable deductions, and TDS provisions." },
          { title: "Labor Act & SSF", description: "Strict adherence to the Labor Act for payroll processing and mandatory Social Security Fund contributions." },
          { title: "Data Privacy & Confidentiality", description: "Bound by professional codes of ethics to maintain absolute secrecy of your financial data." },
          { title: "Information Security (IS)", description: "Utilizing enterprise-grade encryption and secure document management protocols." },
          { title: "Companies Act 2063", description: "Ensuring all accounting records satisfy the legal requirements for maintenance and preservation." }
        ]}
      />

      <BusinessOutcomes
        title="Transformative Outcomes"
        description="Outsourcing your finance function is not a cost—it is an investment in unparalleled operational efficiency."
        outcomes={[
          { title: "Strategic Focus", description: "Free the CEO and founders from the minutiae of bookkeeping to focus entirely on revenue generation and market expansion." },
          { title: "Actionable Intelligence", description: "Receive real-time, highly accurate financial dashboards that allow you to pivot strategies immediately based on data, not gut feelings." },
          { title: "Zero Compliance Risk", description: "Completely eliminate the anxiety of missed VAT deadlines, incorrect TDS filings, and the resulting punitive IRD fines." },
          { title: "Cost Optimization", description: "Access a multi-tiered team of accountants, tax experts, and a CFO for less than the cost of a single, full-time senior hire." },
          { title: "Audit Readiness", description: "Transform the stressful, month-long annual statutory audit into a smooth, frictionless event." },
          { title: "Scalable Infrastructure", description: "As your revenue doubles, your accounting team instantly scales with you—no hiring, no training, no delays." }
        ]}
      />

      <IndustryExpertise
        title="Tailored Financial Operations"
        description="We customize our Chart of Accounts and reporting metrics to track the KPIs that actually matter in your specific industry."
        industries={[
          { title: "Technology & IT Services", description: "Tracking Software-as-a-Service (SaaS) metrics like ARR, Churn, and CAC, while managing complex foreign currency inward remittances." },
          { title: "NGOs & INGOs", description: "Executing strict fund-accounting, tracking grant utilizations against specific donor budgets, and preparing SWC-compliant reports." },
          { title: "E-Commerce & Retail", description: "Managing massive daily transaction volumes, complex payment gateway reconciliations, and highly dynamic inventory accounting." },
          { title: "Foreign Subsidiaries (FDI)", description: "Maintaining dual ledgers—local NFRS books for Nepalese authorities and IFRS-compliant reporting packages for the foreign parent entity." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Insights into our outsourcing models and virtual CFO engagements."
        faqs={faqs}
      />


      <ContactCTA
        title="Scale Your Finance Function"
        description="Stop fighting administrative fires and start driving strategic growth. Partner with our elite accounting team to build a world-class financial operation."
        ctaText="Schedule a Capability Briefing"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop"
      />
    </div>
  );
}
