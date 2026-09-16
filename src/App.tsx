import { useEffect } from 'react';
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
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

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
    window.scrollTo({ top: 0, behavior: 'instant' });
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
        <Route path="resources" element={<Resources />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
