import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FileText, Globe, Building2 } from 'lucide-react';

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
  Title: Business Registration & FDI Advisory | Premium CA Firm Nepal
  Meta Description: Expert corporate structuring, company registration, and Foreign Direct Investment (FDI) advisory in Nepal. Seamlessly navigate the OCR, DOI, and NRB.
  H1: Business Registration & FDI Advisory
*/

const faqs = [
  {
    q: "What is the minimum capital requirement to register a company in Nepal?",
    a: "For domestic investors establishing a Private Limited Company, there is theoretically no minimum authorized capital requirement under the Companies Act, though practical minimums apply depending on the sector. However, for Foreign Direct Investment (FDI), the minimum threshold is currently set at NPR 20 Million (approx. USD 150,000) per investor, subject to sectoral regulations."
  },
  {
    q: "Can a foreign company establish a 100% wholly-owned subsidiary in Nepal?",
    a: "Yes, under the Foreign Investment and Technology Transfer Act (FITTA), 100% foreign ownership is permitted in the vast majority of sectors (e.g., manufacturing, IT, hydropower). However, there is a 'Negative List' of sectors where FDI is strictly prohibited (such as real estate, primary agriculture, and certain retail operations)."
  },
  {
    q: "How long does it take to register a company and begin operations?",
    a: "For a domestic company, registration at the Office of the Company Registrar (OCR), followed by Ward registration and Inland Revenue Department (IRD) tax registration, typically takes 7-14 working days. For FDI, the process is significantly longer—involving Department of Industry (DOI) approval and Nepal Rastra Bank (NRB) capital bringing approval—which can take 4-8 weeks."
  },
  {
    q: "What is the difference between a Branch Office and a Subsidiary for a foreign firm?",
    a: "A Subsidiary is a distinct legal entity (a Nepalese Private Limited company) whose shares are held by the foreign parent. A Branch Office is merely an extension of the foreign company. Branch offices face severe operational restrictions and cannot engage in general commercial trading; they are typically used for executing specific, time-bound government contracts or projects."
  },
  {
    q: "Do I need to be physically present in Nepal to incorporate a company?",
    a: "No. We utilize legally binding Power of Attorney (POA) frameworks. As your designated legal and financial representatives, we can execute the entire incorporation, FDI approval, and tax registration processes on your behalf, requiring your physical presence only for final bank account authorizations."
  },
  {
    q: "How does the profit repatriation process work for foreign investors?",
    a: "Repatriating dividends requires strict sequential compliance. You must first complete the statutory audit, clear all corporate taxes, and hold the Annual General Meeting (AGM). Following this, you must apply to the DOI for recommendation and finally to the NRB for foreign exchange approval. We manage this entire bureaucratic pipeline to ensure frictionless capital extraction."
  },
  {
    q: "What are the ongoing compliance requirements after registration?",
    a: "Incorporation is just the beginning. You must maintain statutory registers, file annual returns with the OCR, submit audited financial statements, conduct Annual General Meetings within statutory deadlines, and file monthly VAT/TDS returns with the IRD. We provide complete outsourced corporate secretarial services to manage this burden."
  },
  {
    q: "Can you assist with obtaining industry-specific licenses?",
    a: "Absolutely. Beyond basic OCR and IRD registration, sectors like Hydropower (DoED), Banking (NRB), Insurance (Beema Samiti), and Tourism (Department of Tourism) require rigorous sectoral licensing. We manage the end-to-end dossier preparation and regulatory liaison for these complex approvals."
  }
];

export default function BusinessRegistration() {
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
        badgeText="Corporate Structuring"
        title1="Business Registration &"
        title2="FDI Advisory"
        description="The foundation of a successful enterprise is its legal and capital structure. We provide frictionless market entry, rigorous corporate structuring, and end-to-end Foreign Direct Investment (FDI) advisory to ensure your business is engineered for scale from day one."
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        ctaText="Initiate Incorporation"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Perils of Poor Incorporation"
        description="Many entrepreneurs and foreign investors view company registration as a mere administrative hurdle. In reality, a flawed initial corporate structure creates disastrous legal and tax liabilities that compound as the business grows."
        challenges={[
          {
            icon: Building2,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Bureaucratic Friction",
            description: "Navigating the disjointed silos of Nepal's government agencies—OCR, IRD, DOI, NRB, and local Wards—without deep institutional knowledge leads to months of agonizing delays and stalled market entry."
          },
          {
            icon: FileText,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Flawed Legal Architecture",
            description: "Using 'copy-paste' Articles of Association (AOA) leaves founders vulnerable to vicious equity disputes, prevents the issuance of complex share classes to future investors, and severely restricts operational agility."
          },
          {
            icon: Globe,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "FDI Capital Traps",
            description: "Bringing foreign capital into Nepal without securing prior NRB approvals and strictly adhering to FITTA mandates renders the investment 'illegal,' making future dividend repatriation or capital exit mathematically impossible."
          }
        ]}
      />

      <ServiceBlocks
        title="Market Entry & Structuring Capabilities"
        blocks={[
          {
            title: "Strategic Corporate Incorporation",
            description: "We do not just file paperwork; we architect your enterprise. We draft bespoke Memorandum and Articles of Association (MOA/AOA) tailored to your specific growth trajectory, defining clear dispute resolution mechanisms, pre-emptive rights, and flexible capital structures that appeal to future institutional investors.",
            strategicPurpose: "Establish a robust legal foundation capable of supporting aggressive scaling and future M&A.",
            clientBenefits: "Prevents founder disputes, optimizes the initial tax structure, and ensures rapid, error-free registration across all state departments.",
            useCase: "High-growth tech startups, heavy manufacturing plants, and complex joint ventures.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "End-to-End FDI & Repatriation Advisory",
            description: "We provide the definitive roadmap for foreign capital entering Nepal. We manage the entire lifecycle: securing Department of Industry (DOI) approvals, navigating the Investment Board Nepal (IBN) for mega-projects, obtaining critical NRB approvals for capital injection, and engineering the legal pathways for frictionless dividend repatriation.",
            strategicPurpose: "Legitimize foreign capital and ensure absolute freedom of capital mobility.",
            clientBenefits: "Eliminates regulatory roadblocks for foreign investors and guarantees the legal right to extract profits and exit capital.",
            useCase: "Multinational corporations establishing subsidiaries or foreign private equity funds investing in Nepalese assets.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Corporate Secretarial & Compliance",
            description: "Post-incorporation compliance in Nepal is rigorous and unforgiving. We act as your outsourced Company Secretary, managing statutory registers, drafting complex board resolutions, filing annual returns with the OCR, and ensuring every Annual General Meeting (AGM) is executed flawlessly to avoid statutory penalties.",
            strategicPurpose: "Maintain immaculate corporate hygiene and shield directors from personal legal liabilities.",
            clientBenefits: "Frees management from bureaucratic administration and ensures the firm remains in 'Good Standing' for banking and investment purposes.",
            useCase: "All registered private and public limited companies requiring professional governance maintenance.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="The Incorporation Methodology"
        description="We execute a highly structured, sequential process that eliminates bureaucratic friction and drastically accelerates your time-to-market."
        steps={[
          { title: "Structuring", description: "Determining the optimal entity type (Pvt Ltd, Public, Branch) and equity distribution based on tax and liability profiles." },
          { title: "Drafting", description: "Creating bespoke constitutional documents (MOA/AOA) and comprehensive Joint Venture or Shareholder agreements." },
          { title: "Approvals (FDI)", description: "Liaising with the DOI/IBN for foreign investment sanction and securing NRB approval for inward remittances." },
          { title: "Registration", description: "Executing the multi-agency registration cascade: OCR, Ward Office, and IRD (PAN/VAT) concurrently." },
          { title: "Post-Setup", description: "Opening corporate bank accounts, establishing statutory registers, and initiating initial tax compliance protocols." }
        ]}
      />

      <TrustCredibility
        title="Navigating the Regulatory Matrix"
        description="Our advisory teams possess unparalleled institutional knowledge of Nepal’s corporate and investment legislation."
        items={[
          { title: "The Companies Act 2063", description: "The definitive legal framework governing the incorporation, operation, and dissolution of all corporate entities." },
          { title: "FITTA 2019", description: "The Foreign Investment and Technology Transfer Act, dictating permissible sectors, minimum thresholds, and repatriation rights for FDI." },
          { title: "NRB Foreign Exchange Directives", description: "Rigorous compliance with the central bank’s mandates regarding the influx of foreign capital and outflow of dividends." },
          { title: "Industrial Enterprise Act", description: "Leveraging statutory tax holidays, rebates, and facility concessions granted to specific manufacturing and IT sectors." },
          { title: "SEBON Directives", description: "Advising on the stringent requirements for converting to a Public Limited Company in preparation for an IPO." },
          { title: "Income Tax Act 2058", description: "Ensuring the chosen corporate structure optimally aligns with domestic tax regulations and international DTAAs." }
        ]}
      />

      <BusinessOutcomes
        title="Engineering Enterprise Value"
        description="A flawless incorporation and capital structure yields immense strategic advantages throughout the lifecycle of the business."
        outcomes={[
          { title: "Accelerated Market Entry", description: "Bypass months of bureaucratic delays. We execute the registration matrix with precision, allowing you to commence commercial operations rapidly." },
          { title: "Founder Protection", description: "Bespoke shareholder agreements legally ring-fence founders, preventing hostile takeovers, equity dilution, and paralyzing board disputes." },
          { title: "Capital Agility", description: "Architect a flexible share structure capable of easily absorbing future rounds of Venture Capital or Private Equity without requiring total corporate restructuring." },
          { title: "Repatriation Certainty", description: "Foreign investors gain absolute, documented legal certainty that their capital and dividends can be extracted from Nepal without NRB friction." },
          { title: "Tax Optimization", description: "Selecting the correct jurisdiction for a foreign holding company and the correct local entity type legally minimizes long-term tax exposure." },
          { title: "Regulatory Peace of Mind", description: "Directors operate without the fear of personal liability or sudden OCR penalties due to missed statutory filings." }
        ]}
      />

      <IndustryExpertise
        title="Sector-Specific Incorporation"
        description="Different industries face entirely different regulatory hurdles at incorporation. We provide specialized market entry advisory across key sectors."
        industries={[
          { title: "Technology & Software", description: "Structuring IP ownership, advising on SEZ/IT Park tax holidays, and managing technology transfer (franchise/royalty) approvals under FITTA." },
          { title: "Hydropower & Infrastructure", description: "Navigating the Investment Board Nepal (IBN) for mega-projects exceeding NPR 6 Billion, and structuring complex Special Purpose Vehicles (SPVs)." },
          { title: "Tourism & Hospitality", description: "Managing the dense web of approvals required from the Department of Tourism and Ministry of Industry for foreign-invested luxury hotels and casinos." },
          { title: "Manufacturing & Assembly", description: "Securing industrial licenses, executing Environmental Impact Assessments (EIA), and structuring joint ventures with local land-holding partners." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Expert guidance on corporate structuring and foreign investment in Nepal."
        faqs={faqs}
      />


      <ContactCTA
        title="Architect Your Enterprise"
        description="Do not jeopardize your business with a flawed legal foundation or illegal capital structures. Partner with our senior advisory team to engineer your market entry."
        ctaText="Start Your Registration"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  );
}
