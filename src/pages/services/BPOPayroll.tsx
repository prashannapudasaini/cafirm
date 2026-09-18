import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, FileKey, Calculator } from 'lucide-react';

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
  Title: Payroll & HR Compliance Services | Premium CA Firm Nepal
  Meta Description: Comprehensive payroll outsourcing, SSF compliance, and HR advisory in Nepal. Ensure absolute adherence to the Labor Act and optimize your workforce management.
  H1: Payroll & HR Compliance Services
*/

const faqs = [
  {
    q: "Is participation in the Social Security Fund (SSF) mandatory for all businesses in Nepal?",
    a: "Yes. Under the Contribution-based Social Security Act, it is mandatory for all formal sector employers to list their enterprise and all their employees in the SSF, irrespective of the number of employees. Failing to enroll and deposit the 31% monthly contribution (11% employee + 20% employer) results in severe statutory penalties."
  },
  {
    q: "How does outsourcing payroll protect my business?",
    a: "Payroll is high-risk. Incorrect TDS calculations lead to IRD fines; missed SSF deposits lead to Labor Office sanctions; delayed salaries destroy employee morale. By outsourcing, you shift this entire compliance burden to our team of experts, ensuring 100% accuracy, total data confidentiality, and zero statutory defaults."
  },
  {
    q: "Do you handle expatriate (foreign worker) payroll and taxation?",
    a: "Absolutely. Expatriate payroll is highly complex in Nepal, requiring distinct Department of Labor approvals, non-tourist visa processing, and specialized tax equalization strategies. We manage this end-to-end, ensuring your foreign talent is taxed correctly without inflating your corporate tax liability."
  },
  {
    q: "Can you assist with drafting employment contracts and HR policies?",
    a: "Yes. The Labor Act 2074 strictly regulates employment types, termination procedures, leave entitlements, and disciplinary actions. We draft robust employment contracts, employee handbooks, and HR bylaws that fiercely protect the employer's interests while remaining fully compliant with national labor laws."
  },
  {
    q: "What is the process for terminating an employee in Nepal?",
    a: "Termination is highly regulated and cannot be done arbitrarily. Depending on the reason (misconduct, poor performance, redundancy), a specific legal process involving warnings, clarifications, and potentially Department of Labor notifications must be followed. We provide precise legal advisory to execute terminations without triggering wrongful dismissal lawsuits."
  },
  {
    q: "How do you ensure the confidentiality of executive salaries?",
    a: "We utilize highly secure, encrypted payroll portals. When you outsource to us, your internal HR and finance staff no longer see the executive payroll data. We process the salaries externally and upload blind payment files directly to the bank, ensuring absolute internal discretion."
  },
  {
    q: "Can you manage the annual tax clearance process for our employees?",
    a: "Yes. As part of our comprehensive payroll service, we calculate the final year-end tax liability for every employee, adjust the final TDS, issue the statutory TDS certificates, and assist employees in filing their individual tax returns (D-01) with the IRD."
  },
  {
    q: "What happens if there is a dispute with a labor union?",
    a: "We provide strategic labor dispute resolution and collective bargaining advisory. We represent management in negotiations with recognized trade unions and liaise with the Department of Labor to mediate and resolve disputes before they escalate to strikes or lockouts."
  }
];

export default function BPOPayroll() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      <ServiceHero
        badgeText="Workforce & Compliance"
        title1="Payroll & HR"
        title2="Compliance Services"
        description="Your workforce is your greatest asset, but managing the associated statutory compliance is a high-risk administrative burden. We provide elite payroll outsourcing and strategic HR legal advisory to ensure absolute compliance with Nepal's stringent labor laws."
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop"
        ctaText="Outsource Your Payroll"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Complexity of Workforce Management"
        description="The introduction of the new Labor Act and the mandatory Social Security Fund (SSF) fundamentally altered employer obligations in Nepal. Non-compliance is no longer an option—it is a fast track to severe financial penalties and operational disruption."
        challenges={[
          {
            icon: FileKey,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Strict Labor Regulations",
            description: "The Labor Act 2074 heavily favors employee rights. Failing to maintain precise attendance records, properly calculate overtime, or execute terminations legally exposes the firm to crippling lawsuits and Department of Labor sanctions."
          },
          {
            icon: Calculator,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Tax & SSF Chaos",
            description: "Calculating monthly TDS across diverse salary brackets, reconciling allowances, and ensuring the timely deposit of the 31% SSF contribution for every employee is a monumental, error-prone monthly task for internal teams."
          },
          {
            icon: Users,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Confidentiality Breaches",
            description: "Managing payroll internally often leads to salary leaks, instantly destroying team morale. Executives and founders require absolute discretion regarding compensation structures, which internal HR simply cannot guarantee."
          }
        ]}
      />

      <ServiceBlocks
        title="Comprehensive HR & Payroll Solutions"
        blocks={[
          {
            title: "End-to-End Payroll Outsourcing",
            description: "We completely isolate the payroll function from your internal operations. We process monthly salaries, calculate highly complex TDS based on individual tax brackets and exemptions, generate encrypted payslips, and manage the direct bank transfer files for final management approval.",
            strategicPurpose: "Eradicate monthly administrative chaos and guarantee absolute data confidentiality.",
            clientBenefits: "Ensures employees are paid flawlessly on time, while eliminating internal salary disputes and data leaks.",
            useCase: "Enterprises of all sizes seeking to modernize their back-office operations.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop"
          },
          {
            title: "SSF & Statutory Compliance",
            description: "We act as your shield against the Department of Labor and the IRD. We manage the entire Social Security Fund (SSF) lifecycle: initial enterprise listing, employee enrollment, rigorous monthly contribution calculations (31%), and seamless deposit execution, alongside managing all ETDS filings.",
            strategicPurpose: "Ensure 100% adherence to national labor and tax directives.",
            clientBenefits: "Completely eliminates the risk of punitive fines, interest penalties, and targeted regulatory audits.",
            useCase: "All registered entities operating in Nepal with formal employees.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Strategic HR Legal Advisory",
            description: "Beyond numbers, we provide the legal architecture for your workforce. We draft ironclad employment contracts, comprehensive HR manuals, NDA agreements, and provide strict legal counsel on dispute resolution, collective bargaining, and lawful termination procedures.",
            strategicPurpose: "Protect the employer's interests while maintaining a legally sound, highly motivated workforce.",
            clientBenefits: "Prevents wrongful dismissal lawsuits, secures intellectual property, and establishes clear corporate governance.",
            useCase: "Rapidly scaling startups, INGOs, and manufacturing firms dealing with large labor unions.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="The Payroll Integration Process"
        description="Transitioning your payroll to our secure infrastructure is seamless, highly structured, and completely secure."
        steps={[
          { title: "Onboarding", description: "Securely migrating historical employee data, tax profiles, and SSF numbers into our encrypted systems." },
          { title: "Configuration", description: "Mapping your specific attendance, leave policies, and allowance structures to our payroll algorithms." },
          { title: "Processing", description: "Executing the monthly calculation cycle: gross pay, TDS deductions, SSF contributions, and net pay." },
          { title: "Verification", description: "Providing management with a concise summary report for final approval before fund disbursement." },
          { title: "Filing", description: "Executing the statutory deposits (SSF/TDS) and issuing secure digital payslips to all employees." }
        ]}
      />

      <TrustCredibility
        title="Governed by the Rule of Law"
        description="Our HR and Payroll advisory is meticulously aligned with the complex legal frameworks governing employment in Nepal."
        items={[
          { title: "Labor Act 2074 & Rules", description: "Strict adherence to minimum wage directives, working hours, overtime calculations, and leave entitlements." },
          { title: "Contribution-Based SSF Act", description: "Flawless management of the mandatory 31% provident fund, gratuity, and insurance contributions." },
          { title: "Income Tax Act 2058 (Schedule 1)", description: "Precise application of individual tax brackets, remote area concessions, and life insurance exemptions for TDS." },
          { title: "Bonus Act", description: "Ensuring accurate calculation and distribution of statutory bonuses from net profits." },
          { title: "Foreign Employment Regulations", description: "Navigating the Department of Labor approvals required for hiring and taxing expatriate professionals." },
          { title: "Trade Union Act", description: "Providing legal parameters for collective bargaining and dispute resolution." }
        ]}
      />

      <BusinessOutcomes
        title="Operational Resilience"
        description="Outsourcing your HR compliance transforms a high-risk liability into a streamlined, invisible operation."
        outcomes={[
          { title: "Zero Statutory Fines", description: "Completely eliminate the financial bleeding caused by missed SSF deadlines and incorrect TDS filings." },
          { title: "Absolute Confidentiality", description: "Protect your executive compensation structures from internal leaks, preserving corporate harmony." },
          { title: "Legal Protection", description: "Shield the enterprise from aggressive labor lawsuits and wrongful termination claims with ironclad HR policies." },
          { title: "Administrative Freedom", description: "Free your internal HR team from data entry, allowing them to focus on talent acquisition and culture building." },
          { title: "Expatriate Ease", description: "Seamlessly integrate foreign talent into your operations without triggering complex international tax liabilities." },
          { title: "Employee Satisfaction", description: "Guarantee on-time, accurate salaries and transparent payslips, boosting overall workforce morale." }
        ]}
      />

      <IndustryExpertise
        title="Workforce Intelligence by Sector"
        description="Managing a tech team requires entirely different HR compliance than managing a factory floor. We tailor our services to your industry."
        industries={[
          { title: "Technology & IT Services", description: "Managing highly dynamic compensation structures, ESOP (Employee Stock Ownership Plan) taxation, and retention bonuses." },
          { title: "INGOs & Development", description: "Executing complex expatriate tax equalization, project-based contract management, and rigorous donor-compliant HR audits." },
          { title: "Manufacturing & Construction", description: "Navigating daily-wage calculations, strict overtime compliance, safety regulations, and aggressive labor union negotiations." },
          { title: "Hospitality & Retail", description: "Managing high-turnover shift work, service charge distributions, and complex multi-location payroll consolidations." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Expert answers regarding payroll outsourcing, SSF mandates, and labor law in Nepal."
        faqs={faqs}
      />


      <ContactCTA
        title="Secure Your Workforce Operations"
        description="Do not let HR compliance errors derail your business. Partner with our specialized team to automate your payroll and fortify your legal defenses."
        ctaText="Request a Payroll Proposal"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop"
      />
    </div>
  );
}
