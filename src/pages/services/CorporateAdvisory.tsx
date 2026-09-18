import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, TrendingUp, Network } from 'lucide-react';

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
  Title: Business Advisory & Corporate Consulting | Premium CA Firm Nepal
  Meta Description: Expert business advisory, corporate restructuring, and strategic management consulting for Nepalese enterprises. Drive growth and operational excellence with our elite advisors.
  H1: Business Advisory & Corporate Consulting
*/

const faqs = [
  {
    q: "What exactly does your Business Advisory service entail?",
    a: "Unlike traditional accounting which looks backward, our Business Advisory looks forward. We act as strategic partners to the CEO and Board. This entails corporate restructuring, designing scalable operational frameworks, engineering financial turnarounds for distressed assets, and providing high-level management consulting to drive sustainable market expansion."
  },
  {
    q: "How can you help a family-owned business transition to a corporate structure?",
    a: "Many successful enterprises in Nepal are family-run but eventually hit a growth ceiling due to informal governance. We facilitate this critical transition. We draft family charters, establish professional Boards of Directors, implement rigorous corporate governance protocols, and restructure the equity holding to ensure smooth succession planning and attract institutional capital."
  },
  {
    q: "Do you assist with Mergers and Acquisitions (M&A)?",
    a: "Yes. We provide end-to-end M&A advisory. This ranges from identifying strategic targets or buyers, conducting exhaustive financial and tax due diligence, engineering the deal structure to optimize tax incidence, and guiding you through the complex regulatory approvals required by the OCR, NRB, or SEBON."
  },
  {
    q: "What is corporate restructuring, and when is it necessary?",
    a: "Corporate restructuring involves reorganizing the legal, ownership, operational, or other structures of a company to make it more profitable or better organized. It is critical when preparing for an IPO, absorbing a merger, navigating a severe financial crisis, or separating distinct business units (e.g., spinning off a manufacturing arm from a trading arm) to unlock shareholder value."
  },
  {
    q: "How do you approach a financial turnaround for a struggling enterprise?",
    a: "We deploy a rapid diagnostic team to halt cash burn immediately. We then restructure existing debt facilities with BFIs, renegotiate vendor contracts, divest non-core toxic assets, and implement stringent cost-control mechanisms. Simultaneously, we rebuild the revenue model to ensure long-term solvency."
  },
  {
    q: "Can you advise on expanding operations outside of Nepal?",
    a: "While the Foreign Investment and Technology Transfer Act (FITTA) and NRB regulations heavily restrict outward foreign investment from Nepal, there are highly specific, legally permissible avenues for tech companies or exporters (e.g., establishing branch offices for export promotion). We provide the definitive legal and financial roadmap for these complex maneuvers."
  },
  {
    q: "Do you provide advisory for establishing Joint Ventures (JVs)?",
    a: "Absolutely. We negotiate and draft robust Joint Venture agreements, clearly defining capital contributions, profit-sharing ratios, IP ownership, and exit mechanisms. We ensure the JV structure complies perfectly with the Companies Act and provides an equitable, highly functional framework for both local and foreign partners."
  },
  {
    q: "How do you ensure your strategic advice is actually implemented?",
    a: "We do not deliver theoretical reports and walk away. Our advisory process includes an 'Implementation Support' phase where our consultants work directly alongside your management team. We establish KPIs, monitor progress through executive dashboards, and drive the change management required to turn strategy into reality."
  }
];

export default function CorporateAdvisory() {
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
        badgeText="Strategic Growth Partner"
        title1="Business Advisory &"
        title2="Corporate Consulting"
        description="Transforming ambition into enterprise value. We provide elite strategic counsel, corporate restructuring, and financial engineering to help Nepal’s most dynamic businesses overcome growth plateaus and dominate their markets."
        bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
        ctaText="Discuss Your Strategic Vision"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Architectures of Stagnation"
        description="Scaling an enterprise in Nepal’s volatile economic environment is phenomenally difficult. Businesses frequently hit critical inflection points where their founding operational structures actively choke further growth."
        challenges={[
          {
            icon: Network,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Governance Deficits",
            description: "Informal, founder-led decision making works for startups but destroys value in mid-to-large enterprises. Lack of professional governance repels institutional investors and causes severe operational bottlenecks."
          },
          {
            icon: TrendingUp,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Capital Inefficiency",
            description: "Many highly profitable businesses suffer from toxic capital structures—over-leveraged with high-interest short-term debt, while massive amounts of capital are trapped in stagnant inventory or inefficient subsidiaries."
          },
          {
            icon: Briefcase,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Strategic Drift",
            description: "Without rigorous, data-driven strategic planning, enterprises lose market share to agile competitors. They diversify into unrelated sectors without proper due diligence, burning cash reserves and diluting their core brand."
          }
        ]}
      />

      <ServiceBlocks
        title="Elite Advisory Capabilities"
        blocks={[
          {
            title: "Corporate Restructuring & Governance",
            description: "We re-engineer the foundational architecture of your enterprise. We separate ownership from management by establishing highly professional Boards of Directors, drafting executive mandates, and implementing sophisticated corporate governance frameworks that rival listed multinational entities.",
            strategicPurpose: "Institutionalize the business to ensure survivability beyond the founding generation.",
            clientBenefits: "Unlocks the ability to attract private equity, execute IPOs, and dramatically accelerates executive decision-making.",
            useCase: "Large family-owned conglomerates seeking to modernize or prepare for succession.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Mergers, Acquisitions & Deal Advisory",
            description: "We guide you through complex corporate transactions. From identifying strategic targets to conducting exhaustive financial, tax, and legal due diligence. We structure the deal to optimize tax outcomes and negotiate fiercely on your behalf to ensure the valuation heavily favors our client.",
            strategicPurpose: "Execute high-stakes corporate transactions with absolute financial and legal certainty.",
            clientBenefits: "Prevents the acquisition of hidden liabilities and guarantees maximum ROI on corporate buyouts.",
            useCase: "Enterprises seeking aggressive horizontal integration or foreign investors acquiring Nepalese assets.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
          },
          {
            title: "Financial Turnaround & Restructuring",
            description: "For distressed assets, we provide aggressive financial triage. We parachute into failing operations to halt cash burn, renegotiate suffocating debt facilities with BFIs, divest toxic assets, and architect a brutal but necessary path back to sustained profitability and solvency.",
            strategicPurpose: "Rescue distressed enterprises from the brink of insolvency and liquidation.",
            clientBenefits: "Protects shareholder equity, preserves jobs, and restores the confidence of institutional creditors.",
            useCase: "Highly leveraged manufacturing or infrastructure projects facing severe cash flow crises.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="Our Strategic Methodology"
        description="We combine the analytical rigor of an audit firm with the forward-looking, aggressive growth mindset of elite management consultants."
        steps={[
          { title: "Discovery", description: "Deep-dive interviews with the C-suite and exhaustive analysis of historical financial and operational data." },
          { title: "Diagnosis", description: "Identifying the root causes of stagnation—be it capital structure, governance, or market positioning." },
          { title: "Architecture", description: "Drafting the strategic blueprint: restructuring plans, M&A targets, or financial turnaround models." },
          { title: "Execution", description: "Working alongside your team to implement governance protocols, negotiate with banks, or execute the merger." },
          { title: "Optimization", description: "Post-implementation monitoring through executive dashboards to ensure the strategic objectives are met." }
        ]}
      />

      <TrustCredibility
        title="Governed by Excellence"
        description="Our advisory services are deeply rooted in the legal and financial frameworks governing Nepal’s corporate sector."
        items={[
          { title: "The Companies Act 2063", description: "Expertise in complex legal structuring, holding company formations, and minority shareholder protections." },
          { title: "SEBON Regulations", description: "Guiding enterprises through the rigorous compliance required for IPOs and public market operations." },
          { title: "NRB Directives", description: "Navigating complex debt restructuring guidelines and foreign exchange repatriation regulations." },
          { title: "FITTA 2019", description: "Strategic structuring of joint ventures and technology transfer agreements under the Foreign Investment Act." },
          { title: "Corporate Governance Guidelines", description: "Implementing best-in-class board structures and audit committees that exceed statutory minimums." },
          { title: "Insolvency Act", description: "Navigating the legal intricacies of corporate rescue and debt recovery mechanisms." }
        ]}
      />

      <BusinessOutcomes
        title="Transformational Outcomes"
        description="Our advisory interventions are designed to fundamentally alter the trajectory and valuation of your enterprise."
        outcomes={[
          { title: "Multiplied Valuation", description: "By institutionalizing governance and optimizing capital structures, we drastically increase the enterprise value of your firm." },
          { title: "Capital Access", description: "Transform your balance sheet to unlock massive institutional debt facilities and attract elite private equity." },
          { title: "Crisis Resolution", description: "Navigate severe financial distress with a clear, aggressive roadmap back to operational solvency." },
          { title: "Seamless Succession", description: "Transition leadership and equity smoothly across generations without fracturing the business." },
          { title: "Market Dominance", description: "Execute strategic acquisitions that instantly capture market share and eliminate fierce competition." },
          { title: "Operational Agility", description: "Strip away bureaucratic bloat to create a lean, highly responsive corporate machine." }
        ]}
      />

      <IndustryExpertise
        title="Cross-Sector Strategic Insight"
        description="We have engineered growth and orchestrated turnarounds across the most critical sectors of the Nepalese economy."
        industries={[
          { title: "Hospitality & Tourism", description: "Restructuring heavy debt loads for luxury hotel projects and advising on international management company (IMC) agreements." },
          { title: "Hydropower & Energy", description: "Advising on complex project finance structuring, M&A of specific cascade projects, and IPO readiness." },
          { title: "Manufacturing & Trading", description: "Engineering the spin-off of distinct operational divisions to unlock value and optimize tax incidence." },
          { title: "Technology & E-Commerce", description: "Advising high-growth startups on series-funding valuation, cap-table management, and corporate governance." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Insights into our strategic advisory and corporate consulting engagements."
        faqs={faqs}
      />


      <ContactCTA
        title="Unlock Your Enterprise Value"
        description="Growth plateaus and financial distress require decisive, expert intervention. Partner with our elite advisory team to architect the future of your business."
        ctaText="Schedule a Strategy Session"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  );
}
