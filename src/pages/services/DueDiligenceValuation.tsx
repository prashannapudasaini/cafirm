import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PieChart, BarChart3, LineChart } from 'lucide-react';

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
  Title: Financial Planning & Transaction Advisory | Premium CA Firm Nepal
  Meta Description: Elite financial modeling, valuation, and transaction advisory in Nepal. Secure capital, execute M&A, and drive strategic growth with expert financial planning.
  H1: Financial Planning & Transaction Advisory
*/

const faqs = [
  {
    q: "What exactly does Transaction Advisory entail?",
    a: "Transaction Advisory involves providing strategic, financial, and tax counsel during major corporate events—such as Mergers and Acquisitions (M&A), initial public offerings (IPOs), or massive capital raises (Private Equity/Venture Capital). We conduct due diligence, value the assets, and structure the deal to ensure you extract maximum value while mitigating hidden risks."
  },
  {
    q: "Why is a professional business valuation necessary?",
    a: "Valuation is both an art and a strict financial science. Whether you are selling your business, bringing in a new equity partner, resolving a shareholder dispute, or preparing for a merger, you need a highly defensible, data-driven valuation (using DCF, comparable multiples, or asset-based models) to negotiate from a position of absolute power."
  },
  {
    q: "How does Financial Due Diligence (FDD) differ from an audit?",
    a: "An audit assures that historical financial statements are materially correct. Financial Due Diligence is entirely forward-looking and deal-specific. In an FDD, we tear apart the target company’s financials to assess the 'quality of earnings', identify hidden liabilities (like pending tax litigations or toxic debt), and validate whether the projected cash flows justify your purchase price."
  },
  {
    q: "Can you help us secure syndicated loans from Nepalese BFIs for a mega-project?",
    a: "Yes. Raising billions of rupees requires more than a simple business plan. We build institutional-grade, highly complex financial models (Detailed Project Reports - DPRs) that stress-test cash flows, DSCR (Debt Service Coverage Ratio), and IRR. We then represent you in negotiations with a consortium of banks to secure the debt facility on favorable terms."
  },
  {
    q: "What is the role of financial modeling in strategic planning?",
    a: "Financial modeling translates your strategic vision into hard numbers. If you plan to launch a new product, enter a new market, or acquire a competitor, we build dynamic models that simulate the financial impact under various scenarios (best case, worst case, base case), allowing the Board to make decisions based on data, not intuition."
  },
  {
    q: "Do you advise startups looking to raise Venture Capital (VC)?",
    a: "Absolutely. We help high-growth startups prepare for institutional funding. This includes cleaning up the cap table, determining a realistic pre-money valuation, building the financial pitch deck, and advising on the term sheet negotiations to protect founders from aggressive equity dilution."
  },
  {
    q: "How do you handle the tax implications of an M&A transaction?",
    a: "Tax structuring is the most critical element of deal-making. If structured poorly, the capital gains tax and subsequent dividend taxes can destroy the value of the transaction. We engineer the legal and financial structure of the deal (e.g., asset purchase vs. share purchase) to legally minimize the immediate and future tax burden."
  },
  {
    q: "What is Post-Merger Integration (PMI) support?",
    a: "The deal is only the beginning. The majority of mergers fail to realize their projected value because of poor integration. We assist in merging the financial systems, aligning the accounting policies, streamlining the workforce, and realizing the operational synergies (cost savings) promised during the deal phase."
  }
];

export default function DueDiligenceValuation() {
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
        badgeText="Capital & Deal Advisory"
        title1="Financial Planning &"
        title2="Transaction Advisory"
        description="Navigate high-stakes corporate transactions and aggressive growth phases with absolute certainty. We provide institutional-grade financial modeling, rigorous due diligence, and elite deal structuring to maximize enterprise value and secure capital."
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
        ctaText="Discuss Your Next Transaction"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Risks of Uninformed Capital Allocation"
        description="In high-stakes environments like M&A, project financing, or capital raising, relying on gut instinct or basic spreadsheets is a recipe for catastrophic value destruction. Capital is unforgiving."
        challenges={[
          {
            icon: LineChart,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Flawed Valuations",
            description: "Overpaying for an acquisition or undervaluing your own firm during an equity raise instantly destroys years of hard-earned shareholder equity. Subjective valuations fall apart under institutional scrutiny."
          },
          {
            icon: BarChart3,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Hidden Liabilities",
            description: "Acquiring a target company without executing aggressive Financial and Tax Due Diligence guarantees you will inherit toxic debt, pending IRD litigations, and fundamentally broken operational workflows."
          },
          {
            icon: PieChart,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Capital Rejection",
            description: "Banks and Private Equity (PE) firms instantly reject funding proposals that lack rigorous, dynamic financial models demonstrating clear Debt Service Coverage Ratios (DSCR) and realistic Internal Rates of Return (IRR)."
          }
        ]}
      />

      <ServiceBlocks
        title="Elite Financial & Deal Capabilities"
        blocks={[
          {
            title: "M&A and Transaction Advisory",
            description: "We act as your financial architects during Mergers, Acquisitions, and joint ventures. From identifying strategic targets and negotiating term sheets to structuring the deal for optimal tax efficiency. We manage the entire transaction lifecycle to ensure the deal closes on your terms.",
            strategicPurpose: "Execute high-stakes corporate transactions while maximizing financial leverage.",
            clientBenefits: "Prevents toxic acquisitions, optimizes the purchase price, and completely insulates the buyer from hidden liabilities.",
            useCase: "Enterprises seeking aggressive horizontal integration, or founders preparing for a lucrative exit.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
          },
          {
            title: "Financial & Tax Due Diligence (FDD)",
            description: "Before you sign the term sheet, we tear the target company apart. Our forensic FDD process analyzes the 'quality of earnings', normalizes EBITDA, uncovers unrecorded liabilities, and identifies severe tax exposures that the seller attempted to hide.",
            strategicPurpose: "Provide absolute transparency into the financial reality of a target acquisition.",
            clientBenefits: "Empowers the buyer to renegotiate the purchase price downward or walk away from a disastrous investment.",
            useCase: "Private Equity funds, venture capitalists, and corporate buyers evaluating Nepalese targets.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          },
          {
            title: "Financial Modeling & Valuation",
            description: "We build highly sophisticated, dynamic financial models tailored to your specific industry dynamics. Using DCF (Discounted Cash Flow) and comparable market multiples, we provide legally defensible, institutional-grade business valuations required by SEBON, NRB, and international investors.",
            strategicPurpose: "Translate strategic vision into rigorous, stress-tested mathematical realities.",
            clientBenefits: "Unlocks massive debt syndication from BFIs and ensures founders do not suffer unnecessary equity dilution during funding rounds.",
            useCase: "Hydropower projects seeking debt consortiums, or tech startups raising Series A/B funding.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="Our Transaction Methodology"
        description="We approach every transaction with intense analytical rigor and an aggressive commitment to protecting our client's capital."
        steps={[
          { title: "Strategic Alignment", description: "Defining the ultimate goal: raising capital, acquiring market share, or executing a founder exit." },
          { title: "Modeling & Valuation", description: "Building the financial architecture and determining the definitive, data-backed value of the asset." },
          { title: "Due Diligence", description: "Deploying forensic accountants to validate every assumption and uncover every hidden risk." },
          { title: "Deal Structuring", description: "Engineering the equity/debt mix and legal framework to minimize tax and maximize ROI." },
          { title: "Execution & Integration", description: "Closing the transaction and driving post-merger integration to realize the promised synergies." }
        ]}
      />

      <TrustCredibility
        title="Anchored in Regulatory Reality"
        description="In Nepal, financial planning and transactions are heavily dictated by strict regulatory mandates. Our models are built on legal certainty."
        items={[
          { title: "SEBON & Nepse Directives", description: "Valuations and pricing models meticulously aligned with the Securities Board of Nepal for IPOs and FPOs." },
          { title: "NRB Capital Directives", description: "Structuring banking M&A and ensuring models meet the stringent stress-testing requirements of the central bank." },
          { title: "Income Tax Act 2058", description: "Aggressive optimization of Capital Gains Tax (CGT) and leveraging tax holidays for mega-infrastructure projects." },
          { title: "FITTA & Foreign Exchange", description: "Structuring FDI inflows and modeling legally guaranteed dividend repatriation pathways for foreign funds." },
          { title: "Companies Act 2063", description: "Ensuring all corporate restructuring, share transfers, and equity issuances are legally flawless." },
          { title: "IFRS / NFRS Standards", description: "Ensuring the financial models and FDD reports meet the rigorous standards demanded by global institutional investors." }
        ]}
      />

      <BusinessOutcomes
        title="Maximizing Shareholder Value"
        description="Our transaction advisory is explicitly designed to engineer massive financial leverage and protect your equity."
        outcomes={[
          { title: "Optimized Deal Value", description: "Negotiate from a position of absolute data superiority, ensuring you buy low and sell at a premium." },
          { title: "Capital Liquidity", description: "Successfully secure billions in syndicated debt or private equity by presenting unassailable financial models." },
          { title: "Risk Eradication", description: "Completely eliminate the threat of post-acquisition surprises, toxic debt, or inherited tax litigations." },
          { title: "Tax Efficiency", description: "Legally structure the transaction to preserve millions in capital that would otherwise be lost to inefficient taxation." },
          { title: "Strategic Agility", description: "Enable the Board to simulate the financial impact of massive strategic pivots before committing a single rupee." },
          { title: "Seamless Integration", description: "Ensure that 1+1 actually equals 3 by successfully merging operations and realizing cost synergies post-acquisition." }
        ]}
      />

      <IndustryExpertise
        title="Sector-Specific Financial Engineering"
        description="A financial model for a bank is entirely different from a model for a cement factory. We bring deep sector intelligence to every transaction."
        industries={[
          { title: "Hydropower & Infrastructure", description: "Building complex 30-year BOOT (Build-Own-Operate-Transfer) models, optimizing debt-equity ratios, and securing syndicated financing." },
          { title: "Banking & Financial Institutions", description: "Executing highly regulated M&A mandated by the NRB, conducting massive loan portfolio due diligence, and modeling capital adequacy." },
          { title: "Manufacturing & Heavy Industry", description: "Modeling CAPEX expansions, evaluating the ROI of new production lines, and executing supply-chain acquisitions." },
          { title: "Technology & Startups", description: "Conducting highly specialized valuations (using DCF and VC methods) for tech firms lacking historical profitability but possessing massive growth potential." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Authoritative insights into M&A, valuations, and capital raising in Nepal."
        faqs={faqs}
      />


      <ContactCTA
        title="Execute Your Transaction with Certainty"
        description="Do not leave millions on the negotiating table. Partner with our elite financial architects to value, structure, and execute your most critical corporate transactions."
        ctaText="Request a Consultation"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
      />
    </div>
  );
}
