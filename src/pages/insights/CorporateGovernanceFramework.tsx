import { ArticleLayout } from '../../components/insights/ArticleLayout';
import { ArticleSection } from '../../components/insights/ArticleSection';
import { RegulatoryNotice } from '../../components/insights/RegulatoryNotice';
import { Link } from 'react-router-dom';

export default function CorporateGovernanceFramework() {
  const sections = [
    { id: "executive-summary", title: "1. Executive Summary" },
    { id: "business-context", title: "2. Business Context" },
    { id: "key-challenges", title: "3. Key Challenges" },
    { id: "detailed-analysis", title: "4. Detailed Analysis" },
    { id: "regulatory-perspective", title: "5. Regulatory Perspective" },
    { id: "business-implications", title: "6. Business Implications" },
    { id: "recommendations", title: "7. Practical Recommendations" },
    { id: "faq", title: "8. Frequently Asked Questions" },
    { id: "conclusion", title: "9. Conclusion" },
    { id: "related-services", title: "10. Related Services" }
  ];

  return (
    <ArticleLayout
      title="Building a Robust Corporate Governance Framework in Nepal"
      metaDescription="An advisory blueprint for boards and directors in Nepal to establish resilient governance structures, mitigate operational risks, and adhere to regulatory directives."
      category="Corporate Governance & Risk"
      categoryUrl="/insights/governance-risk"
      date="August 28, 2026"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      canonicalUrl="/insights/governance-risk/corporate-governance-framework"
      sections={sections}
    >
      <RegulatoryNotice />

      <ArticleSection id="executive-summary" title="1. Executive Summary">
        <p>
          Corporate governance in Nepal has rapidly evolved from a theoretical compliance checklist into a critical determinant of institutional survival. For Banks and Financial Institutions (BFIs), listed companies, and large corporate houses, the era of owner-managed, opaque decision-making is closing. Regulatory bodies, led by the <strong>Nepal Rastra Bank (NRB)</strong> and the <strong>Securities Board of Nepal (SEBON)</strong>, are aggressively enforcing strict governance mandates to protect public shareholders and systemic financial stability.
        </p>
        <p>
          This insight outlines the foundational pillars of a resilient corporate governance framework, the systemic risks associated with weak internal controls, and the strategic interventions required by Boards of Directors to foster an environment of transparency, accountability, and sustainable long-term value creation.
        </p>
      </ArticleSection>

      <ArticleSection id="business-context" title="2. Business Context">
        <p>
          The Nepalese corporate landscape has traditionally been dominated by family-owned conglomerates. While this structure allows for rapid, entrepreneurial decision-making, it inherently blurs the lines between ownership and management. As these entities seek capital expansion through Initial Public Offerings (IPOs) or foreign joint ventures, they encounter severe structural friction. 
        </p>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Board of directors meeting and governance review" className="w-full h-80 object-cover rounded-2xl my-8 shadow-md" />
        <p>
          Institutional investors and Private Equity (PE) firms deploying capital in Nepal place a massive premium on corporate governance. They demand independent board representation, rigorous internal audit charters, and transparent related-party transaction protocols. Companies that fail to institutionalize their governance frameworks face drastically lower valuations and severe constraints in accessing both domestic and international capital markets.
        </p>
      </ArticleSection>

      <ArticleSection id="key-challenges" title="3. Key Challenges in Governance">
        <p>Implementing effective governance frameworks in Nepal frequently encounters these systemic hurdles:</p>
        <ul>
          <li><strong>Lack of Board Independence:</strong> Independent directors are often appointed based on personal networks rather than industry expertise or willingness to challenge the executive management.</li>
          <li><strong>Ineffective Audit Committees:</strong> Audit committees frequently lack members with deep financial literacy (Chartered Accountants or seasoned CFOs), rendering their oversight of complex NFRS implementations superficial.</li>
          <li><strong>Related Party Transactions (RPTs):</strong> In closely held corporate groups, cross-subsidization and undocumented inter-company loans are common, creating massive compliance risks under the Companies Act.</li>
          <li><strong>Absence of Enterprise Risk Management (ERM):</strong> Risk management is often relegated to a purely compliance-driven, "tick-box" exercise, rather than a proactive strategy for identifying macroeconomic and operational threats.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="detailed-analysis" title="4. Detailed Analysis: The Pillars of Governance">
        <p>
          A world-class corporate governance architecture rests on three operational pillars.
        </p>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Executive planning session and corporate risk mitigation" className="w-full h-80 object-cover rounded-2xl my-8 shadow-md" />
        <h4>1. Board Composition and Dynamics</h4>
        <p>
          The Board must transition from a rubber-stamp authority to a strategic oversight body. This requires a balanced composition of executive, non-executive, and genuinely independent directors. The Chairman of the Board and the Chief Executive Officer (CEO) roles must be strictly separated to prevent the concentration of absolute power. Board evaluations should be conducted annually to assess the efficacy of sub-committees (Audit, Risk Management, Human Resources).
        </p>
        <h4>2. The Three Lines of Defense</h4>
        <p>
          Organizations must operationalize the 'Three Lines of Defense' model. 
          The <em>first line</em> is operational management, responsible for maintaining effective internal controls day-to-day. 
          The <em>second line</em> comprises the risk management and compliance functions, providing frameworks and monitoring operational adherence. 
          The <em>third line</em> is a fully resourced, independent Internal Audit department reporting functionally directly to the Audit Committee, not to the CEO.
        </p>
      </ArticleSection>

      <ArticleSection id="regulatory-perspective" title="5. Regulatory Perspective: SEBON and NRB Directives">
        <p>
          The regulatory environment for governance in Nepal is increasingly prescriptive. 
        </p>
        <p>
          The <strong>SEBON Corporate Governance Guidelines</strong> mandate strict disclosures for listed entities, particularly concerning insider trading, the disclosure of price-sensitive information, and the precise composition of the Board of Directors. 
        </p>
        <p>
          For BFIs, the <strong>NRB Unified Directives</strong> dictate virtually every aspect of corporate governance. NRB strictly limits the tenure of CEOs and Directors, enforces "cooling-off" periods to prevent conflicts of interest, and mandates the immediate establishment of specialized Risk Management Committees. Breaches of NRB governance directives result in immediate, punitive action, including the suspension of the Board.
        </p>
      </ArticleSection>

      <ArticleSection id="business-implications" title="6. Business Implications">
        <p>
          The consequences of weak corporate governance extend far beyond regulatory fines.
        </p>
        <ul>
          <li><strong>Fraud and Embezzlement:</strong> Weak internal controls and dominant executives create environments ripe for financial misappropriation, leading to catastrophic reputational destruction.</li>
          <li><strong>Capital Acquisition:</strong> Foreign Direct Investors (FDI) and DFIs (like the IFC or CDC) conduct exhaustive governance due diligence. A poor governance framework is an immediate dealbreaker.</li>
          <li><strong>Operational Paralysis:</strong> When decision-making is concentrated solely in the hands of the promoters, the organization becomes entirely dependent on a few key individuals, severely threatening business continuity.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="recommendations" title="7. Practical Recommendations for the Board">
        <p>
          We strongly advise Promoters and Boards of Directors to take the following actionable steps:
        </p>
        <ol>
          <li><strong>Draft a Formal Governance Charter:</strong> Explicitly document the division of responsibilities between the Board (oversight and strategy) and the Executive Management (execution).</li>
          <li><strong>Empower the Internal Audit Function:</strong> Ensure the Chief Internal Auditor has unfiltered, direct access to the Audit Committee. Co-source complex internal audits (such as IT/IS Audits) to external specialized firms if internal capacity is lacking.</li>
          <li><strong>Formalize RPT Policies:</strong> Implement a strict, board-approved policy for Related Party Transactions. Ensure all transactions are conducted at arm’s length and transparently disclosed in the NFRS financial statements.</li>
          <li><strong>Institute Whistleblower Protocols:</strong> Create secure, anonymous channels for employees to report ethical breaches or financial irregularities without fear of retaliation.</li>
        </ol>
      </ArticleSection>

      <ArticleSection id="faq" title="8. Frequently Asked Questions">
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-primary-dark-blue dark:text-white">Is it mandatory to have an independent director?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Under the Companies Act, 2063, public limited companies are required to appoint at least one independent director possessing relevant professional experience. However, best practices and SEBON guidelines strongly recommend a higher proportion for effective oversight.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary-dark-blue dark:text-white">Who should chair the Audit Committee?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">The Audit Committee must be chaired by a Non-Executive Director (preferably the Independent Director) who possesses strong financial literacy. Executive directors or the CEO should never chair or be members of the Audit Committee.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary-dark-blue dark:text-white">What is a 'Cooling-off' period in NRB directives?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">To prevent conflicts of interest and the concentration of power, NRB mandates that a CEO or Director of a BFI cannot immediately join another BFI in a similar capacity without serving a mandatory wait time (cooling-off period), typically 6 months.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="conclusion" title="9. Conclusion">
        <p>
          Corporate governance is the bedrock upon which sustainable corporate empires are built. In Nepal’s rapidly formalizing economy, entities that proactively institutionalize transparent governance frameworks will attract premium valuations, secure top-tier talent, and navigate regulatory scrutiny with ease. Conversely, those that cling to opaque, owner-centric models will face increasing isolation from capital markets and severe regulatory backlash.
        </p>
      </ArticleSection>

      <ArticleSection id="related-services" title="10. Related Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/services/corporate-advisory" className="p-4 border border-gray-200 dark:border-white/10 rounded-xl hover:border-royal-blue hover:bg-blue-50 dark:hover:bg-white/5 transition-colors">
            <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">Corporate Advisory</h4>
            <p className="text-sm text-gray-500">Board restructuring, governance charters, and strategic enterprise consulting.</p>
          </Link>
          <Link to="/services/risk-and-compliance" className="p-4 border border-gray-200 dark:border-white/10 rounded-xl hover:border-royal-blue hover:bg-blue-50 dark:hover:bg-white/5 transition-colors">
            <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">Risk & Governance</h4>
            <p className="text-sm text-gray-500">Implementation of Enterprise Risk Management (ERM) frameworks and internal control reviews.</p>
          </Link>
        </div>
      </ArticleSection>
    </ArticleLayout>
  );
}
