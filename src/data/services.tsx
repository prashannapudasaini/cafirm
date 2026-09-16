import { ShieldCheck, Landmark, Briefcase, Scale, FileText, Globe, PieChart, TrendingUp, Network, Search, MonitorCheck, Users2, Calculator, Building2 } from 'lucide-react';

export const servicesData = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    icon: <ShieldCheck className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Enhancing stakeholder trust and financial transparency through rigorous, independent audits.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    link: "/services/audit-and-assurance"
  },
  {
    id: "tax-regulatory",
    title: "Tax & Regulatory Services",
    icon: <Landmark className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Strategic tax planning, optimization, and seamless compliance with complex domestic frameworks.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    link: "/services/tax-and-regulatory"
  },
  {
    id: "corporate-advisory",
    title: "Corporate Advisory",
    icon: <Briefcase className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Navigating complex business challenges, strategic restructuring, and governance optimization.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    link: "/services/corporate-advisory"
  },
  {
    id: "risk-compliance",
    title: "Risk & Compliance",
    icon: <Scale className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Safeguarding assets and fortifying internal controls against emerging enterprise risks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/services/risk-and-compliance"
  },
  {
    id: "business-registration",
    title: "Business Registration & Secretarial",
    icon: <FileText className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Streamlining corporate structuring, entity formation, and ongoing lifecycle management.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    link: "/services/business-registration"
  },
  {
    id: "fdi-investment",
    title: "FDI & Investment Advisory",
    icon: <Globe className="w-8 h-8 text-royal-blue" />,
    shortDesc: "End-to-end guidance and regulatory clearance for foreign investors entering the Nepalese market.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "/services/fdi-and-investment"
  },
  {
    id: "outsourced-cfo",
    title: "Accounting & Outsourced CFO",
    icon: <PieChart className="w-8 h-8 text-royal-blue" />,
    shortDesc: "High-level financial leadership, performance reporting, and operational efficiency.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop",
    link: "/services/accounting-and-cfo"
  },
  {
    id: "due-diligence",
    title: "Due Diligence & Valuation",
    icon: <TrendingUp className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Actionable intelligence and robust financial modeling for M&A and critical investments.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    link: "/services/due-diligence-and-valuation"
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing & International Tax",
    icon: <Network className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Navigating cross-border transactions, DTAA, and transfer pricing documentation for MNCs.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop", // Reusing image, ideally a different one
    link: "/services/transfer-pricing"
  },
  {
    id: "forensic-audit",
    title: "Forensic Audit & Investigation",
    icon: <Search className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Deep-dive investigations for dispute resolution, embezzlement, and financial irregularities.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
    link: "/services/forensic-audit"
  },
  {
    id: "is-audit",
    title: "Information Systems (IS) Audit",
    icon: <MonitorCheck className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Auditing IT infrastructure, cybersecurity, and compliance with NRB IT Guidelines.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "/services/is-audit"
  },
  {
    id: "ngo-ingo",
    title: "NGO / INGO Advisory",
    icon: <Users2 className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Specialized compliance, fund accountability, and SWC reporting for the development sector.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop",
    link: "/services/ngo-ingo-advisory"
  },
  {
    id: "bpo-payroll",
    title: "BPO & Payroll Management",
    icon: <Calculator className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Complete back-office outsourcing, payroll processing, SSF compliance, and TDS deductions.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop",
    link: "/services/bpo-payroll"
  },
  {
    id: "insolvency-liquidation",
    title: "Insolvency & Liquidation",
    icon: <Building2 className="w-8 h-8 text-royal-blue" />,
    shortDesc: "Advisory on corporate restructuring and graceful winding-down processes.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    link: "/services/insolvency-liquidation"
  }
];
