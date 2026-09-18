import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Landmark, Scale, FileText } from 'lucide-react';

import { ServiceHero } from '../../components/services/shared/ServiceHero';
import { BusinessChallenges } from '../../components/services/shared/BusinessChallenges';
import { ServiceBlocks } from '../../components/services/shared/ServiceBlocks';
import { AdvisoryProcess } from '../../components/services/shared/AdvisoryProcess';
import { BusinessOutcomes } from '../../components/services/shared/BusinessOutcomes';
import { IndustryExpertise } from '../../components/services/shared/IndustryExpertise';
import { FAQSection } from '../../components/services/shared/FAQSection';
import { ContactCTA } from '../../components/services/shared/ContactCTA';

const faqs = [
  {
    q: "Is VAT registration mandatory for all businesses?",
    a: "No, VAT registration is mandatory only if your annual turnover exceeds the threshold specified by the Inland Revenue Department (IRD), or if your business falls into specific mandatory sectors regardless of turnover. We help you determine your exact obligations."
  },
  {
    q: "How frequently must VAT returns be filed?",
    a: "Under Nepal's Value Added Tax Act, VAT returns must typically be filed on a monthly basis. Strict deadlines apply, and failure to file by the 25th of the following month results in immediate fines and interest."
  },
  {
    q: "Can we claim VAT refunds on exports?",
    a: "Yes. Exports are zero-rated for VAT in Nepal. If you are in a continuous credit position due to exports, you are legally entitled to claim a VAT refund from the IRD. We manage this highly bureaucratic refund process."
  }
];

export default function VATAdvisory() {
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
        badgeText="Indirect Tax"
        title1="VAT Advisory &"
        title2="Compliance Services"
        description="Value Added Tax is highly transactional and deeply scrutinized by the IRD. We provide rigorous VAT advisory, monthly compliance management, and strategic structuring to ensure absolute adherence to Nepal's VAT Act without compromising cash flow."
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop"
        ctaText="Consult our VAT Experts"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Burden of VAT Compliance"
        description="VAT requires meticulous day-to-day management. Errors in invoicing, missing input credits, or delayed filings instantly trigger IRD assessments and heavy penalties."
        challenges={[
          {
            icon: Landmark,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Strict IRD Scrutiny",
            description: "The IRD aggressively monitors VAT mismatches between buyers and sellers. Discrepancies immediately invite tax audits and punitive fines."
          },
          {
            icon: Scale,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Trapped Cash Flow",
            description: "Failing to properly claim input tax credits or efficiently process VAT refunds leaves your working capital trapped in the government treasury."
          },
          {
            icon: FileText,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Complex Exemptions",
            description: "Navigating the extensive list of VAT-exempt goods and services, and accurately apportioning input credits, requires deep technical tax knowledge."
          }
        ]}
      />

      <ServiceBlocks
        title="Our VAT Capabilities"
        blocks={[
          {
            title: "Monthly VAT Compliance",
            description: "End-to-end management of your monthly VAT cycle. We reconcile sales and purchase registers, compute the net VAT liability, and file accurate returns with the IRD well before statutory deadlines.",
            strategicPurpose: "Ensure zero statutory defaults and perfect alignment with IRD records.",
            clientBenefits: "Eliminates the risk of fines and frees internal teams from complex transactional tax calculations.",
            useCase: "All registered entities requiring flawless monthly compliance.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "VAT Refund Management",
            description: "For exporters and businesses in continuous credit positions, we aggressively pursue VAT refunds. We prepare the extensive documentation required, liaise directly with the IRD, and navigate the bureaucratic approvals to release your trapped capital.",
            strategicPurpose: "Unlock working capital trapped in continuous VAT credits.",
            clientBenefits: "Direct injection of cash flow back into the business operations.",
            useCase: "Manufacturing exporters, continuous capital expenditure projects, and diplomatic missions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="VAT Management Methodology"
        description="A systematic approach to indirect tax compliance."
        steps={[
          { title: "Data Ingestion", description: "Securely receiving your monthly sales and purchase data." },
          { title: "Reconciliation", description: "Matching invoices and validating eligible input tax credits." },
          { title: "Preparation", description: "Drafting the VAT return and calculating the final payable or refundable amount." },
          { title: "Filing & Deposit", description: "Submitting the return to the IRD portal and executing the tax payment." }
        ]}
      />

      <BusinessOutcomes
        title="Strategic Tax Value"
        description="Proactive VAT management yields immediate operational benefits."
        outcomes={[
          { title: "Zero Penalties", description: "Completely eliminate late filing fines and interest." },
          { title: "Optimized Cash Flow", description: "Ensure every eligible input credit is claimed and refunds are processed rapidly." },
          { title: "Audit Readiness", description: "Maintain pristine, IRD-ready tax records that withstand any regulatory scrutiny." },
          { title: "Operational Focus", description: "Shift the transactional burden to our tax experts, allowing you to focus on core business." }
        ]}
      />

      <IndustryExpertise
        title="Sector-Specific VAT Rules"
        description="VAT application varies wildly across different industries."
        industries={[
          { title: "Trading & Retail", description: "Managing high-volume transactional data, POS integrations, and complex inventory VAT reconciliations." },
          { title: "Manufacturing & Export", description: "Handling zero-rated export invoicing, machinery import credits, and aggressive VAT refund strategies." },
          { title: "Services & Tech", description: "Navigating reverse charge mechanisms for imported digital services and software." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Common queries regarding Nepal's VAT framework."
        faqs={faqs}
      />

      <ContactCTA
        title="Optimize Your VAT Position"
        description="Do not let transactional errors trigger massive tax assessments. Partner with our specialized indirect tax team today."
        ctaText="Consult with Us"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  );
}
