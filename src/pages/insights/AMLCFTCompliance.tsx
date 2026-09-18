import { ArticleLayout } from '../../components/insights/ArticleLayout';
import { ArticleSection } from '../../components/insights/ArticleSection';
import { RegulatoryNotice } from '../../components/insights/RegulatoryNotice';
import { Link } from 'react-router-dom';

export default function AMLCFTCompliance() {
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
      title="Anti-Money Laundering (AML) and CFT Compliance for Nepalese Enterprises"
      metaDescription="A critical guide to the AL/CFT Act, Financial Information Unit (FIU) reporting, and KYC protocols required for institutions operating in Nepal."
      category="Corporate Governance & Risk"
      categoryUrl="/insights/governance-risk"
      date="November 20, 2026"
      heroImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop"
      canonicalUrl="/insights/governance-risk/aml-cft-compliance"
      sections={sections}
    >
      <RegulatoryNotice />

      <ArticleSection id="executive-summary" title="1. Executive Summary">
        <p>
          Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) are no longer exclusive concerns of the banking sector. Nepal's increasing integration into the global financial system has prompted stringent evaluations by the Financial Action Task Force (FATF) and the Asia/Pacific Group on Money Laundering (APG). 
        </p>
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Compliance team reviewing transaction logs" className="w-full h-80 object-cover rounded-2xl my-8 shadow-md" />
        <p>
          Consequently, the regulatory net has expanded massively. Today, insurance companies, securities brokers, real estate agencies, and dealers in precious metals (Designated Non-Financial Businesses and Professions - DNFBPs) are under intense scrutiny. This advisory provides a framework for establishing robust Know Your Customer (KYC) protocols, navigating Suspicious Transaction Reports (STR), and ensuring compliance with the directives of the Financial Information Unit (FIU).
        </p>
      </ArticleSection>

      <ArticleSection id="business-context" title="2. Business Context">
        <p>
          Historically, Nepal's cash-heavy economy and porous borders facilitated informal capital flows, notably through the "Hundi" system. To combat this and avoid international blacklisting, the Government of Nepal has aggressively modernized its regulatory apparatus.
        </p>
        <p>
          For corporate entities, this means that ignorance of the source of funds is no longer a legal defense. Accepting large cash deposits, facilitating complex cross-border trade transactions without verifying the ultimate beneficial owner (UBO), or failing to screen clients against UN sanction lists can result in immediate asset freezing and criminal prosecution of the company's directors.
        </p>
      </ArticleSection>

      <ArticleSection id="key-challenges" title="3. Key Challenges">
        <p>Implementing AML/CFT frameworks in Nepal presents distinct operational challenges:</p>
        <ul>
          <li><strong>UBO Identification:</strong> Tracing the Ultimate Beneficial Owner in Nepal is extremely difficult due to the prevalent use of proxy directors, shell companies, and complex family-owned holding structures.</li>
          <li><strong>Data Quality and KYC Updates:</strong> Legacy databases in BFIs and insurance companies often lack complete KYC information. Forcing existing customers to update their records (KYC remediation) is a massive, resource-intensive undertaking.</li>
          <li><strong>False Positives in Screening:</strong> Nepalese names often lack standardized English spelling. When screening against global sanction lists (like OFAC), automated systems generate a high volume of false positives that require manual, time-consuming resolution.</li>
          <li><strong>DNFBPs Awareness:</strong> Non-financial sectors like real estate and casinos severely lack the institutional capacity and awareness required to implement AML software and file complex STRs.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="detailed-analysis" title="4. Detailed Analysis: The Three Pillars of AML">
        <p>
          A functional AML/CFT compliance program must be built on three operational pillars.
        </p>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategic compliance planning session" className="w-full h-80 object-cover rounded-2xl my-8 shadow-md" />
        <h4>1. Customer Due Diligence (CDD)</h4>
        <p>
          CDD is not merely collecting a citizenship certificate. It requires an institutional understanding of the customer's business model, expected transaction volume, and source of wealth. High-risk customers—such as Politically Exposed Persons (PEPs) or non-resident entities—require Enhanced Due Diligence (EDD), demanding senior management approval before onboarding.
        </p>
        <h4>2. Transaction Monitoring</h4>
        <p>
          Organizations must deploy rule-based systems to monitor transactions. If a retail client who typically deposits NPR 50,000 monthly suddenly receives an international wire transfer of NPR 10 million, the system must immediately flag it for investigation by the AML Compliance Officer.
        </p>
        <h4>3. Reporting to the FIU</h4>
        <p>
          If an investigation cannot reasonably explain a flagged transaction, the entity must file a Suspicious Transaction Report (STR) or a Suspicious Activity Report (SAR) with the Financial Information Unit (FIU) of Nepal Rastra Bank. Crucially, the entity must not "tip off" the customer that a report has been filed, as this is a criminal offense.
        </p>
      </ArticleSection>

      <ArticleSection id="regulatory-perspective" title="5. Regulatory Perspective">
        <p>
          The primary legal framework is the <strong>Asset (Money) Laundering Prevention Act, 2064 (2008)</strong>, supplemented by the AL/CFT Rules.
        </p>
        <p>
          The regulatory ecosystem is overseen by the National Coordination Committee and enforced by sector-specific regulators (NRB for banks, Beema Samiti for insurance, SEBON for capital markets). The FIU acts as the central intelligence hub, analyzing STRs and disseminating actionable intelligence to law enforcement agencies like the Department of Money Laundering Investigation (DMLI).
        </p>
      </ArticleSection>

      <ArticleSection id="business-implications" title="6. Business Implications">
        <p>
          The consequences of AML/CFT failures are existential:
        </p>
        <ul>
          <li><strong>Massive Fines:</strong> Regulators in Nepal have shifted from issuing warnings to levying multi-million rupee fines on institutions failing to conduct adequate CDD.</li>
          <li><strong>Loss of Correspondent Banking:</strong> If a Nepalese bank's AML controls are deemed weak, international correspondent banks will sever ties ("de-risking"), instantly paralyzing the bank's ability to process international trade finance and remittances.</li>
          <li><strong>Criminal Prosecution:</strong> Directors and Compliance Officers can face direct criminal charges under the AL/CFT Act if they are found willfully negligent in facilitating illicit transactions.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="recommendations" title="7. Practical Recommendations">
        <p>
          To safeguard the institution, Boards must take the following proactive steps:
        </p>
        <ol>
          <li><strong>Appoint an Empowered AML/CFT Officer:</strong> This role cannot be a secondary duty for the head of operations. The AML officer must be a senior executive with direct reporting lines to the Board Risk Committee and the authority to halt any suspicious transaction.</li>
          <li><strong>Invest in Automated Screening Tech:</strong> Manual screening is impossible at scale. Invest in robust, locally calibrated AML software that connects directly to the FIU's goAML reporting portal.</li>
          <li><strong>Enterprise-Wide Training:</strong> AML is not just the compliance department's job. Every frontline teller, relationship manager, and real estate broker must undergo rigorous annual training on how to spot the "red flags" of money laundering.</li>
        </ol>
      </ArticleSection>

      <ArticleSection id="faq" title="8. Frequently Asked Questions">
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-primary-dark-blue dark:text-white">What is the Threshold Transaction Report (TTR) limit in Nepal?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Currently, financial institutions must automatically file a TTR with the FIU for any single or linked cash transaction exceeding NPR 1 Million (or equivalent in foreign currency) in a single day.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary-dark-blue dark:text-white">Who qualifies as a Politically Exposed Person (PEP) in Nepal?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">A PEP includes current or former high-ranking government officials, politicians, senior executives of state-owned enterprises, judicial officials, and military leaders, as well as their immediate family members and close business associates.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary-dark-blue dark:text-white">Do real estate agents really need to comply with AML laws?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Yes. Under the expanded definitions of DNFBPs, real estate agents facilitating high-value property transactions are required to identify their clients and report suspicious activity, as real estate is a primary vehicle for integrating illicit funds.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="conclusion" title="9. Conclusion">
        <p>
          AML/CFT compliance is a non-negotiable imperative for operating within Nepal's formal economy. As international scrutiny intensifies, regulatory leniency has vanished. By institutionalizing rigorous KYC procedures, deploying advanced transaction monitoring, and cultivating a culture of compliance, organizations can protect themselves from devastating financial and reputational ruin.
        </p>
      </ArticleSection>

      <ArticleSection id="related-services" title="10. Related Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/services/risk-and-compliance" className="p-4 border border-gray-200 dark:border-white/10 rounded-xl hover:border-royal-blue hover:bg-blue-50 dark:hover:bg-white/5 transition-colors">
            <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">AML & CFT Advisory</h4>
            <p className="text-sm text-gray-500">Developing institutional AML frameworks, conducting CDD audits, and goAML integration.</p>
          </Link>
          <Link to="/services/corporate-advisory" className="p-4 border border-gray-200 dark:border-white/10 rounded-xl hover:border-royal-blue hover:bg-blue-50 dark:hover:bg-white/5 transition-colors">
            <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">Corporate Governance</h4>
            <p className="text-sm text-gray-500">Structuring Board Risk Committees and establishing comprehensive enterprise risk management (ERM) policies.</p>
          </Link>
        </div>
      </ArticleSection>
    </ArticleLayout>
  );
}
