import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Landmark, Scale, Calculator } from 'lucide-react';

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
  Title: Tax & Regulatory Advisory | Premium CA Services Nepal
  Meta Description: Expert tax advisory, transfer pricing, and VAT compliance services in Nepal. Protect your margins and ensure absolute IRD compliance with our senior tax consultants.
  H1: Tax & Regulatory Advisory: Strategic Tax Optimization
*/

const faqs = [
  {
    q: "How often do Nepal’s tax laws change, and how do you keep us compliant?",
    a: "The Income Tax Act and VAT Act undergo significant amendments annually through the Finance Act (Budget). Additionally, the Inland Revenue Department (IRD) frequently issues new administrative directives. We maintain a dedicated regulatory intelligence team that continuously monitors these shifts, instantly translating legislative changes into actionable tax strategies for our clients before they take effect."
  },
  {
    q: "What is Transfer Pricing, and does it apply to our Nepalese subsidiary?",
    a: "Transfer Pricing refers to the rules and methods for pricing transactions within and between enterprises under common ownership or control. If your Nepalese entity conducts cross-border transactions (management fees, royalties, loans) with a foreign parent or sister company, you are strictly required to adhere to arm’s length principles. We provide comprehensive transfer pricing documentation to defend your margins during IRD audits."
  },
  {
    q: "Can you assist with representing our firm during an IRD tax assessment or dispute?",
    a: "Absolutely. Tax disputes can be incredibly disruptive. We represent our clients at all levels of the tax authority—from initial IRD assessments to Administrative Reviews at the Department General level, and up to the Revenue Tribunal. We build unassailable, fact-based defenses anchored in deep legal precedents."
  },
  {
    q: "What are the common pitfalls in VAT compliance for manufacturing firms?",
    a: "Manufacturing firms often struggle with complex VAT credit apportionments, especially when dealing with mixed supplies (taxable and exempt goods) or significant export volumes. Miscalculations lead to severe penalties or delayed VAT refunds. We engineer robust automated reconciliation processes to ensure every rupee of eligible VAT credit is claimed correctly and defensively."
  },
  {
    q: "How can foreign investors navigate the complexities of dividend repatriation taxes?",
    a: "Dividend repatriation is heavily scrutinized by both the IRD and the Nepal Rastra Bank (NRB). We structure your initial FDI and ongoing capital management to optimize tax exposure utilizing Double Taxation Avoidance Agreements (DTAAs) where applicable, ensuring smooth, compliant repatriation of your legitimate returns."
  },
  {
    q: "Do you handle expatriate taxation and payroll structuring for INGOs?",
    a: "Yes. The taxation of expatriate staff, particularly concerning global income, housing allowances, and foreign tax credits, is highly complex. We provide specialized tax equalization strategies and structuring for INGOs and multinational corporations to ensure absolute compliance with the Income Tax Act without inflating staffing costs."
  },
  {
    q: "Are there specific tax exemptions available for IT startups in Nepal?",
    a: "The government periodically introduces tax holidays and concessions for specific sectors, including IT and software development, particularly for companies operating in Special Economic Zones (SEZs) or generating export revenue. We conduct deep-dive eligibility assessments to ensure you legally capitalize on every available statutory incentive."
  },
  {
    q: "How do you conduct a Tax Due Diligence for an M&A transaction?",
    a: "Before acquiring a company, you must uncover hidden tax liabilities. Our Tax Due Diligence process involves an exhaustive forensic review of the target company's historical tax filings, pending litigations, deferred tax assets, and unrecorded contingencies, allowing you to negotiate purchase prices effectively or walk away from toxic assets."
  }
];

export default function TaxRegulatory() {
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
        badgeText="Premium Tax Advisory"
        title1="Tax & Regulatory Advisory:"
        title2="Strategic Margin Optimization"
        description="In an environment of aggressive fiscal enforcement, tax is no longer a mere compliance exercise—it is a critical driver of shareholder value. We deploy sophisticated tax structuring and rigorous regulatory defense to protect your margins, optimize cash flows, and eliminate compliance risk."
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        ctaText="Optimize Your Tax Strategy"
        ctaLink="/contact"
      />

      <BusinessChallenges
        title="The Burden of Regulatory Complexity"
        description="The Nepalese tax landscape is characterized by frequent legislative amendments, complex administrative directives, and aggressive revenue collection targets. Navigating this without expert counsel guarantees financial leakage."
        challenges={[
          {
            icon: Landmark,
            iconBgColor: "bg-red-50",
            iconColor: "text-red-600",
            title: "Aggressive Assessments",
            description: "The Inland Revenue Department (IRD) is utilizing advanced data reconciliation (e.g., ASYCUDA and VCTS integration) to conduct highly aggressive tax assessments, resulting in massive, unexpected tax liabilities and severe statutory penalties."
          },
          {
            icon: Calculator,
            iconBgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            title: "Cross-Border Complexities",
            description: "Multinational entities and foreign investors face severe scrutiny regarding transfer pricing, permanent establishment (PE) risks, and dividend repatriation. Without utilizing DTAAs effectively, you risk double taxation."
          },
          {
            icon: Scale,
            iconBgColor: "bg-blue-50",
            iconColor: "text-royal-blue",
            title: "Protracted Litigations",
            description: "When disputes arise, defending your tax positions at the Administrative Review or Revenue Tribunal levels requires immense legal and accounting expertise. Poor defense strategies lead to frozen assets and lost capital."
          }
        ]}
      />

      <ServiceBlocks
        title="Comprehensive Tax & Regulatory Solutions"
        blocks={[
          {
            title: "Corporate Tax Strategy & Compliance",
            description: "We transition your tax function from reactive filing to proactive strategy. We conduct deep analyses of your corporate structure, revenue streams, and supply chain to legally minimize effective tax rates. We handle all complexities of corporate tax returns, advance tax estimations, and deferred tax computations with absolute precision.",
            strategicPurpose: "Legally optimize the overarching corporate tax burden to maximize retained earnings.",
            clientBenefits: "Eliminates penalties for underpayment, optimizes cash flow through accurate advance tax, and secures long-term capital.",
            useCase: "Large domestic conglomerates and listed companies requiring sophisticated, multi-entity tax consolidation.",
            image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "International Tax & Transfer Pricing",
            description: "For multinational corporations and FDIs, cross-border taxation is a minefield. We provide authoritative advisory on Double Taxation Avoidance Agreements (DTAAs), withholding tax optimization on royalties and technical fees, and robust Transfer Pricing (TP) documentation that withstands intense IRD scrutiny.",
            strategicPurpose: "Prevent double taxation and defend intra-group pricing strategies against regulatory challenges.",
            clientBenefits: "Ensures seamless capital repatriation and completely insulates the parent company from unexpected Nepalese tax liabilities.",
            useCase: "Foreign subsidiaries operating in Nepal, INGOs with regional offices, and tech firms exporting services.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Indirect Tax (VAT, Excise & Customs)",
            description: "Indirect taxes directly impact your daily liquidity and pricing competitiveness. We engineer rigorous internal mechanisms for VAT credit reconciliation, ensuring you claim every eligible rupee while preventing disastrous misclassifications. We also provide strategic advisory on customs valuations and excise duty optimization for manufacturing units.",
            strategicPurpose: "Optimize the indirect tax supply chain to improve daily working capital and pricing leverage.",
            clientBenefits: "Accelerates VAT refunds, eliminates statutory fines for misfiling, and lowers the landed cost of imported raw materials.",
            useCase: "Large-scale manufacturing firms, importers, and major trading houses dealing with high transaction volumes.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
          }
        ]}
      />

      <AdvisoryProcess
        title="Our Tax Optimization Methodology"
        description="We approach taxation not as historians recording the past, but as architects designing your financial future. Our methodology is rigorous, legally grounded, and highly strategic."
        steps={[
          { title: "Diagnostic", description: "Comprehensive review of historical filings, business models, and existing tax positions to identify hidden exposures." },
          { title: "Structuring", description: "Designing optimal corporate structures, transactional flows, and contract wordings to legally minimize tax incidence." },
          { title: "Implementation", description: "Deploying tax automation tools and standard operating procedures (SOPs) into your finance department." },
          { title: "Compliance", description: "Ensuring flawless, on-time execution of all statutory filings, advance taxes, and regulatory reporting." },
          { title: "Defense", description: "Standing firmly between you and the tax authority, managing all assessments, audits, and appellate litigations." }
        ]}
      />

      <TrustCredibility
        title="Anchored in Legislative Authority"
        description="Our tax advisory is built on an encyclopedic understanding of Nepal's fiscal legislation. We do not deal in assumptions; we deal in statutory law."
        items={[
          { title: "Income Tax Act, 2058", description: "Mastery over complex provisions regarding depreciation bases, allowable deductions, and international taxation." },
          { title: "Value Added Tax Act, 2052", description: "Rigorous application of VAT crediting rules, zero-rating provisions for exports, and reverse charge mechanisms." },
          { title: "Finance Acts (Annual)", description: "Immediate integration of annual budgetary changes, ensuring you capitalize on new concessions the day they are enacted." },
          { title: "Double Taxation Avoidance Agreements (DTAAs)", description: "Leveraging international treaties signed by Nepal to protect foreign investors and multinational entities." },
          { title: "Customs & Excise Acts", description: "Strategic navigation of valuation protocols and duty drawbacks for manufacturing and trading conglomerates." },
          { title: "IRD Administrative Directives", description: "Deep knowledge of departmental circulars and precedent-setting Supreme Court tax verdicts." }
        ]}
      />

      <BusinessOutcomes
        title="Measurable Fiscal Impact"
        description="Elite tax advisory is a revenue-generating function. Our interventions deliver highly tangible, bottom-line results."
        outcomes={[
          { title: "Preserved EBITDA", description: "Legally optimize your effective tax rate, directly increasing retained earnings and maximizing shareholder dividends." },
          { title: "Risk Eradication", description: "Completely eliminate the threat of sudden, crippling statutory penalties and compounding interest from the IRD." },
          { title: "Capital Liquidity", description: "Improve daily working capital through highly efficient VAT management, rapid refund processing, and optimized advance tax outlays." },
          { title: "M&A Readiness", description: "Ensure your enterprise is a highly attractive acquisition target by presenting a completely clean, risk-free tax history to buyers." },
          { title: "Frictionless Repatriation", description: "Allow foreign investors to extract their rightful profits from Nepal without facing regulatory roadblocks or double taxation." },
          { title: "Boardroom Confidence", description: "Provide the Board of Directors with absolute certainty that the firm's fiscal strategies are legally unassailable." }
        ]}
      />

      <IndustryExpertise
        title="Tax Intelligence by Sector"
        description="Tax law applies differently across industries. We bring deep, sector-specific tax intelligence to optimize your unique business model."
        industries={[
          { title: "Hydropower & Infrastructure", description: "Maximizing the benefits of statutory tax holidays, optimizing interest capitalization during construction, and managing complex VAT refund mechanisms for mega-projects." },
          { title: "Banking & Financial Institutions", description: "Navigating complex provisioning deductions, managing tax implications of mergers and acquisitions (M&A) driven by NRB mandates, and optimizing employee taxation." },
          { title: "Technology & BPO Services", description: "Structuring export revenue to leverage specific tax concessions, managing the taxation of digital services, and optimizing expatriate payroll." },
          { title: "Manufacturing & Fast-Moving Consumer Goods (FMCG)", description: "Engineering the indirect tax supply chain, optimizing excise duties, and managing complex transfer pricing for imported raw materials from foreign parent companies." }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        description="Authoritative answers to complex tax and regulatory inquiries in Nepal."
        faqs={faqs}
      />


      <ContactCTA
        title="Defend Your Margins"
        description="Do not let regulatory complexity erode your hard-earned capital. Partner with Nepal's premier tax advisory team to build a legally unassailable, highly optimized fiscal strategy."
        ctaText="Schedule a Tax Diagnostic"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  );
}
