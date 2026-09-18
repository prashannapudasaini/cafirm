import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AuditAssurance from './pages/services/AuditAssurance';
import TaxRegulatory from './pages/services/TaxRegulatory';
import CorporateAdvisory from './pages/services/CorporateAdvisory';
import RiskCompliance from './pages/services/RiskCompliance';
import BusinessRegistration from './pages/services/BusinessRegistration';
import FDIInvestment from './pages/services/FDIInvestment';
import VATAdvisory from './pages/services/VATAdvisory';

import AccountingOutsourcedCFO from './pages/services/AccountingOutsourcedCFO';
import DueDiligenceValuation from './pages/services/DueDiligenceValuation';
import TransferPricing from './pages/services/TransferPricing';
import ForensicAudit from './pages/services/ForensicAudit';
import ISAudit from './pages/services/ISAudit';
import NGOINGOAdvisory from './pages/services/NGOINGOAdvisory';
import BPOPayroll from './pages/services/BPOPayroll';
import InsolvencyLiquidation from './pages/services/InsolvencyLiquidation';
import DeepRegulatory from './pages/advantage/DeepRegulatory';
import GlobalStandards from './pages/advantage/GlobalStandards';
import PartnerLed from './pages/advantage/PartnerLed';
import EthicalIndependent from './pages/advantage/EthicalIndependent';
import BusinessFocused from './pages/advantage/BusinessFocused';
import LongTerm from './pages/advantage/LongTerm';
import Industries from './pages/Industries';
import BankingFinance from './pages/industries/BankingFinance';
import HydropowerRenewable from './pages/industries/HydropowerRenewable';
import TourismHospitality from './pages/industries/TourismHospitality';
import ManufacturingTrading from './pages/industries/ManufacturingTrading';
import NGOINGO from './pages/industries/NGOINGO';
import TechnologyStartups from './pages/industries/TechnologyStartups';
import EducationInstitutions from './pages/industries/EducationInstitutions';
import HealthcarePharma from './pages/industries/HealthcarePharma';
import RealEstateConstruction from './pages/industries/RealEstateConstruction';
import Insights from './pages/Insights';
import TaxCategory from './pages/insights/categories/TaxCategory';
import AuditCategory from './pages/insights/categories/AuditCategory';
import GovernanceCategory from './pages/insights/categories/GovernanceCategory';
import BusinessStrategyCategory from './pages/insights/categories/BusinessStrategyCategory';
import IncomeTaxCompliance from './pages/insights/IncomeTaxCompliance';
import VATAuditCompliance from './pages/insights/VATAuditCompliance';
import TransferPricingNepal from './pages/insights/TransferPricingNepal';
import StatutoryAuditNepal from './pages/insights/StatutoryAuditNepal';
import InternalAuditBFIs from './pages/insights/InternalAuditBFIs';
import FraudRiskAssessment from './pages/insights/FraudRiskAssessment';
import CorporateGovernanceFramework from './pages/insights/CorporateGovernanceFramework';
import AMLCFTCompliance from './pages/insights/AMLCFTCompliance';
import BoardEffectiveness from './pages/insights/BoardEffectiveness';
import StrategicExpansionNepal from './pages/insights/StrategicExpansionNepal';
import MANDANepal from './pages/insights/MANDANepal';
import FinancialRestructuring from './pages/insights/FinancialRestructuring';
import Resources from './pages/Resources';
import Calculators from './pages/resources/Calculators';
import Downloads from './pages/resources/Downloads';
import Guides from './pages/resources/Guides';
import FAQs from './pages/resources/FAQs';
import RegulatoryUpdates from './pages/resources/RegulatoryUpdates';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        
        <Route path="services/audit-and-assurance" element={<AuditAssurance />} />
        <Route path="services/tax-and-regulatory" element={<TaxRegulatory />} />
        <Route path="services/corporate-advisory" element={<CorporateAdvisory />} />
        <Route path="services/risk-and-compliance" element={<RiskCompliance />} />
        <Route path="services/business-registration" element={<BusinessRegistration />} />
        <Route path="services/fdi-and-investment" element={<FDIInvestment />} />
        <Route path="services/accounting-and-cfo" element={<AccountingOutsourcedCFO />} />
        <Route path="services/due-diligence-and-valuation" element={<DueDiligenceValuation />} />
        <Route path="services/transfer-pricing" element={<TransferPricing />} />
        <Route path="services/forensic-audit" element={<ForensicAudit />} />
        <Route path="services/is-audit" element={<ISAudit />} />
        <Route path="services/ngo-ingo-advisory" element={<NGOINGOAdvisory />} />
        <Route path="services/bpo-payroll" element={<BPOPayroll />} />
        <Route path="services/insolvency-liquidation" element={<InsolvencyLiquidation />} />
        <Route path="services/vat-advisory" element={<VATAdvisory />} />
        <Route path="advantage/deep-regulatory" element={<DeepRegulatory />} />
        <Route path="advantage/global-standards" element={<GlobalStandards />} />
        <Route path="advantage/partner-led" element={<PartnerLed />} />
        <Route path="advantage/ethical-independent" element={<EthicalIndependent />} />
        <Route path="advantage/business-focused" element={<BusinessFocused />} />
        <Route path="advantage/long-term" element={<LongTerm />} />
        <Route path="industries" element={<Industries />} />
        <Route path="industries/banking-finance" element={<BankingFinance />} />
        <Route path="industries/hydropower-renewable" element={<HydropowerRenewable />} />
        <Route path="industries/tourism-hospitality" element={<TourismHospitality />} />
        <Route path="industries/manufacturing-trading" element={<ManufacturingTrading />} />
        <Route path="industries/ngo-ingo" element={<NGOINGO />} />
        <Route path="industries/technology-startups" element={<TechnologyStartups />} />
        <Route path="industries/education-institutions" element={<EducationInstitutions />} />
        <Route path="industries/healthcare-pharma" element={<HealthcarePharma />} />
        <Route path="industries/real-estate-construction" element={<RealEstateConstruction />} />
        <Route path="insights" element={<Insights />} />
        
        {/* Insights Category Routes */}
        <Route path="insights/tax-regulatory-updates" element={<TaxCategory />} />
        <Route path="insights/audit-assurance-insights" element={<AuditCategory />} />
        <Route path="insights/governance-risk" element={<GovernanceCategory />} />
        <Route path="insights/business-strategy" element={<BusinessStrategyCategory />} />
        
        {/* Insights Article Routes */}
        <Route path="insights/tax-regulatory-updates/income-tax-compliance-nepal" element={<IncomeTaxCompliance />} />
        <Route path="insights/tax-regulatory-updates/vat-audit-compliance-nepal" element={<VATAuditCompliance />} />
        <Route path="insights/tax-regulatory-updates/transfer-pricing-nepal" element={<TransferPricingNepal />} />
        <Route path="insights/audit-assurance-insights/statutory-audit-nepal" element={<StatutoryAuditNepal />} />
        <Route path="insights/audit-assurance-insights/internal-audit-bfis" element={<InternalAuditBFIs />} />
        <Route path="insights/audit-assurance-insights/fraud-risk-assessment" element={<FraudRiskAssessment />} />
        <Route path="insights/governance-risk/corporate-governance-framework" element={<CorporateGovernanceFramework />} />
        <Route path="insights/governance-risk/aml-cft-compliance" element={<AMLCFTCompliance />} />
        <Route path="insights/governance-risk/board-effectiveness" element={<BoardEffectiveness />} />
        <Route path="insights/business-strategy/strategic-expansion-nepal" element={<StrategicExpansionNepal />} />
        <Route path="insights/business-strategy/m-and-a-nepal" element={<MANDANepal />} />
        <Route path="insights/business-strategy/financial-restructuring" element={<FinancialRestructuring />} />
        
        <Route path="resources" element={<Resources />} />
        <Route path="resources/calculators" element={<Calculators />} />
        <Route path="resources/downloads" element={<Downloads />} />
        <Route path="resources/guides" element={<Guides />} />
        <Route path="resources/faqs" element={<FAQs />} />
        <Route path="resources/regulatory-updates" element={<RegulatoryUpdates />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
