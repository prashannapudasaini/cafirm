import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Scale, Activity, ShieldAlert } from 'lucide-react';

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
  Title: Risk Management & Compliance Advisory | Premium CA Firm Nepal
  Meta Description: Protect your enterprise with elite risk management and AML/CFT compliance frameworks. Expert advisory for navigating NRB directives and complex regulatory environments in Nepal.
  H1: Risk & Compliance: Safeguarding Enterprise Resilience
*/

const faqs = [
  {
    q: "How do your services differ from a standard statutory audit?",
    a: "A statutory audit is a retrospective examination of financial statements to ensure historical compliance. Our Risk & Compliance advisory is a forward-looking, proactive engagement. We assess systemic vulnerabilities, design resilient internal control architectures, and implement continuous monitoring mechanisms to prevent risks from crystallizing into financial or reputational damage."
  },
  {
    q: "What is required for AML/CFT compliance under current Nepal regulations?",
    a: "Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) directives apply not just to BFIs, but increasingly to real estate, casinos, and designated non-financial businesses and professions (DNFBPs). Compliance requires rigorous KYC/CDD (Customer Due Diligence) procedures, robust transaction monitoring systems, and mandatory reporting of suspicious activities to the Financial Information Unit (FIU) of the NRB."
  },
  {
    q: "How can you assist a commercial bank facing a regulatory penalty from the NRB?",
    a: "We deploy rapid response teams to conduct root-cause analyses of the cited regulatory breaches. We then work collaboratively with bank management to design a remediation roadmap, overhaul the defective compliance frameworks, and assist in drafting rigorous, fact-based responses to the NRB to mitigate further sanctions and restore regulatory confidence."
  },
  {
    q: "What is Enterprise Risk Management (ERM) and why is it necessary for a manufacturing firm?",
    a: "ERM is a holistic framework that identifies and manages risk across the entire organization—not just financial risk, but operational, supply chain, and strategic risks. For a manufacturer in Nepal, this means systematically mitigating risks related to raw material volatility, fluctuating import duties, labor disruptions, and shifting VAT regulations, ensuring stable margins despite market turbulence."
  },
  {
    q: "Do you provide IT and cybersecurity risk assessments?",
    a: "Yes. In an era of aggressive digital transformation, IT risk is enterprise risk. Our Information Systems (IS) audit specialists evaluate your IT General Controls (ITGC), data privacy frameworks, and cybersecurity postures. We ensure your digital infrastructure complies with industry-specific mandates, such as the NRB IT Guidelines for financial institutions."
  },
  {
    q: "How do you handle internal fraud investigations?",
    a: "We conduct highly discreet forensic accounting investigations. Utilizing advanced data analytics, we trace financial anomalies, quantify the extent of the fraud, and identify the control failures that permitted it. Post-investigation, we provide actionable recommendations to seal those vulnerabilities and assist in preparing evidence for legal or disciplinary action."
  },
  {
    q: "Can you help us build an internal compliance team from scratch?",
    a: "Absolutely. We offer compliance capacity-building services. We will design the departmental structure, draft comprehensive Standard Operating Procedures (SOPs) and risk charters, and provide intensive, hands-on training to your internal staff, ensuring they are fully equipped to manage the compliance architecture we deploy."
  },
  {
    q: "How frequently should our internal controls be reviewed?",
    a: "Risk is dynamic. A control that was effective a year ago may be obsolete today due to operational scaling or regulatory amendments. We advise a comprehensive, independent review of your internal control environment annually, supplemented by continuous monitoring of high-risk processes such as procurement, treasury management, and payroll."
  }
];

export default function RiskCompliance() {
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
        title1="Risk & Compliance:"
        title2="Safeguarding Enterprise Resilience"
        description="In an era of intensified regulatory scrutiny, defensive posturing is insufficient. We architect proactive enterprise risk management frameworks and rigorous internal controls that protect your assets, preserve corporate reputation, and ensure uninterrupted operational continuity."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        ctaText="Assess Your Risk Exposure"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Cost of Compliance Failure"
        description="Regulatory bodies in Nepal are pivoting from passive oversight to aggressive enforcement. A single systemic failure in compliance or risk management can now trigger catastrophic financial penalties, board-level liabilities, and irreversible reputational damage."
        challenges={[
          {
            icon: Scale,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Regulatory Sanctions",
            description: "Aggressive enforcement of Anti-Money Laundering (AML) directives and rigid sectoral mandates by the Nepal Rastra Bank (NRB) mean that procedural oversights now result in multi-million rupee fines and severe operational restrictions."
          },
          {
            icon: Activity,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Operational Vulnerability",
            description: "As enterprises scale rapidly across Nepal, foundational internal controls often fracture. This operational 'debt' inevitably leads to procurement fraud, massive inventory shrinkage, and significant revenue leakage."
          },
          {
            icon: ShieldAlert,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Cyber & Data Exposure",
            description: "The rapid digitization of Nepalese businesses has far outpaced the implementation of robust Information Security (IS) controls, leaving critical financial data and proprietary assets dangerously exposed to systemic breaches."
          }
        ]}
      />

      <ServiceBlocks
        title="Strategic Risk & Compliance Capabilities"
        blocks={[
          {
            title: "Enterprise Risk Management (ERM)",
            description: "We deploy comprehensive ERM architectures that elevate risk discussions from the operational basement to the boardroom. We systematically identify, quantify, and prioritize risks across your entire value chain—allowing management to proactively deploy capital and resources to mitigate high-impact vulnerabilities.",
            strategicPurpose: "Transition the organization from reactive crisis management to proactive risk mitigation.",
            clientBenefits: "Drastically reduces earnings volatility and provides the Board with immense clarity regarding strategic threats.",
            useCase: "Large conglomerates seeking to standardize risk protocols across diverse operating subsidiaries.",
            image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop"
          },
          {
            title: "Internal Controls Design & Optimization",
            description: "A business without robust internal controls is hemorrhaging value. We conduct exhaustive analyses of your critical processes—procurement to pay, order to cash, inventory management—and engineer stringent, segregation-of-duties focused control mechanisms that are highly resistant to circumvention or fraud.",
            strategicPurpose: "Eliminate operational friction and structurally prevent financial leakage and internal fraud.",
            clientBenefits: "Immediately improves EBITDA margins and ensures financial data integrity for executive decision-making.",
            useCase: "Manufacturing or trading firms experiencing unexplained inventory shrinkage or procurement anomalies.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "AML/CFT & Regulatory Compliance Readiness",
            description: "Regulatory compliance cannot be left to chance. We design and implement airtight Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) frameworks. From robust KYC/CDD protocols to transaction monitoring and FIU reporting structures, we ensure your operations are perpetually audit-ready.",
            strategicPurpose: "Ensure absolute adherence to stringent national and international regulatory mandates.",
            clientBenefits: "Completely shields the enterprise and its directors from devastating civil and criminal regulatory sanctions.",
            useCase: "BFIs, insurance companies, real estate developers, and high-value dealers navigating FIU mandates.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="Our Professional Advisory Process"
        description="Effective risk management is a continuous lifecycle, not a static binder on a shelf. We embed resilience directly into your daily operational workflows."
        steps={[
          { title: "Assessment", description: "Exhaustive audits of current risk exposures, compliance gaps, and the existing control environment architecture." },
          { title: "Review", description: "Benchmarking current practices against stringent industry standards, NRB directives, and global best practices." },
          { title: "Strategic Planning", description: "Architecting bespoke, scalable control frameworks and compliance SOPs that do not stifle operational agility." },
          { title: "Implementation Support", description: "Collaborating deeply with management to embed new controls, re-train staff, and deploy automated monitoring tools." },
          { title: "Monitoring", description: "Establishing continuous feedback loops and KPI dashboards to ensure controls evolve alongside emerging business risks." }
        ]}
      />

      <RegulatoryPerspective
        title="Navigating Nepal's Compliance Frameworks"
        description="We translate dense regulatory code into actionable, streamlined operational procedures, ensuring compliance acts as a shield rather than a costly administrative burden."
        quoteText="In the modern regulatory landscape, ignorance is not a defense; it is a profound liability. By architecting compliance directly into the operational DNA of the enterprise, we allow the Board of Directors to sleep soundly, confident that their legacy and capital are entirely secure."
        regulations={[
          { title: "NRB Unified Directives", description: "For BFIs, we meticulously align internal risk models with the highly prescriptive mandates of the NRB—encompassing credit risk provisioning, liquidity ratios, and rigorous corporate governance stipulations." },
          { title: "AML/CFT Act", description: "The FIU’s enforcement of AML/CFT is intensifying. We ensure your reporting mechanisms, politically exposed person (PEP) screening, and ultimate beneficial ownership (UBO) identification processes are robust enough to withstand deep regulatory audits." },
          { title: "Corporate Governance Directives", description: "Whether adhering to the Companies Act stipulations on related-party transactions or SEBON’s corporate governance guidelines for listed entities, we establish unassailable frameworks that protect minority shareholders and institutional investors alike." }
        ]}
      />

      <BusinessOutcomes
        title="Securing Tangible Business Outcomes"
        description="Our risk and compliance interventions are specifically designed to yield high-impact results that protect and enhance enterprise value."
        outcomes={[
          { title: "Risk Reduction", description: "Systematically identify and neutralize internal fraud, revenue leakage, and critical compliance vulnerabilities before they trigger catastrophic losses." },
          { title: "Operational Efficiency", description: "Streamline Byzantine, legacy operational processes through the intelligent redesign and automation of internal controls." },
          { title: "Enhanced Governance", description: "Provide the Board of Directors and Audit Committees with the objective, data-driven assurance required to fulfill their fiduciary duties." },
          { title: "Compliance Readiness", description: "Maintain a perpetual state of audit-readiness, entirely eliminating the disruptive panic associated with sudden NRB or FIU inspections." },
          { title: "Stronger Investor Confidence", description: "Demonstrate institutional-grade risk maturity to foreign investors, private equity firms, and syndicated lenders, facilitating smoother capital raising." },
          { title: "Sustainable Growth", description: "Build a resilient operational foundation capable of securely supporting rapid market expansion without fracturing under stress." }
        ]}
      />

      <IndustryExpertise
        title="Sector-Specific Risk Intelligence"
        description="Risk is entirely contextual. We deploy specialized advisory teams possessing deep, native experience within Nepal’s most highly regulated and complex industries."
        industries={[
          { title: "Banking & Financial Institutions", description: "Ensuring absolute adherence to complex NRB directives, deploying rigorous AML/CFT transaction monitoring, and fortifying IT General Controls against cyber threats." },
          { title: "Manufacturing & Supply Chain", description: "Engineering stringent procurement-to-pay controls, mitigating widespread inventory shrinkage, and implementing anti-fraud mechanisms across decentralized factory operations." },
          { title: "Real Estate & Construction", description: "Navigating new FIU reporting mandates for DNFBPs, establishing robust contractor payment controls, and managing complex project finance compliance." },
          { title: "NGOs & Development Agencies", description: "Architecting transparent fund utilization frameworks that satisfy stringent international donor requirements and Social Welfare Council (SWC) regulations." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Expert guidance on mitigating enterprise risk and navigating complex compliance mandates."
        faqs={faqs}
      />


      <ContactCTA
        title="Fortify Your Enterprise Today"
        description="Do not wait for a regulatory sanction or internal fraud event to expose your vulnerabilities. Partner with our senior advisory team to build a resilient, institutional-grade risk and compliance architecture."
        ctaText="Schedule a Risk Assessment"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      />
    </div>
  );
}
