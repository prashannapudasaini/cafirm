import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { Bell, ArrowRight, ExternalLink, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const updates = [
  {
    authority: "Inland Revenue Department (IRD)",
    date: "Latest Notice",
    title: "Mandatory CBMS Integration for Hospitality Sector",
    description: "The IRD has mandated that all hotels, restaurants, and bars must integrate their billing systems with the Centralized Billing Management System (CBMS). Failure to comply will result in immediate suspension of the EXIM code and heavy penalties.",
    type: "Critical",
    color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50"
  },
  {
    authority: "Nepal Rastra Bank (NRB)",
    date: "Unified Directives Update",
    title: "Revised Working Capital Loan Guidelines",
    description: "NRB has amended the Working Capital Loan Guidelines, providing temporary relief for manufacturing industries by allowing working capital limits up to 40% of estimated annual turnover, depending on the operating cycle.",
    type: "Regulatory",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50"
  },
  {
    authority: "Office of the Company Registrar (OCR)",
    date: "Circular",
    title: "Digitization of Share Registers",
    description: "OCR has issued a circular requiring all public and private companies to maintain a digitized share register and update ultimate beneficial ownership (UBO) details on the online portal within 3 months.",
    type: "Compliance",
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50"
  },
  {
    authority: "Department of Industry (DOI)",
    date: "Policy Update",
    title: "Fast-Track FDI Approval System",
    description: "The automated route for Foreign Direct Investment (FDI) approvals up to NPR 500 Million is now fully operational via the DOI web portal, drastically reducing the approval timeline from months to a few weeks.",
    type: "Opportunity",
    color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50"
  }
];

export default function RegulatoryUpdates() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#031B4E] min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Regulatory Updates | Resources | Jay & Ajay Associates</title>
        <meta name="description" content="Stay informed with the latest regulatory notices from IRD, NRB, OCR, and DOI in Nepal." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 dark:bg-[#031B4E]/50 border border-red-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-red-600">
            <Bell className="w-4 h-4" />
            <span>Compliance Alerts</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Regulatory <span className="text-royal-blue">Updates</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
            A curated feed of critical directives and compliance notices impacting corporate operations in Nepal.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 p-4 rounded-xl text-sm text-yellow-800 dark:text-yellow-200 text-left flex items-start">
            <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
            <div>
              <strong>Advisory Notice:</strong> This feed aggregates publicly available regulatory circulars for informational purposes. Regulations can be rescinded, amended, or re-interpreted by authorities at any time. Professional verification is required before initiating compliance actions based on these updates.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {updates.map((update, idx) => (
            <div key={idx} className="animate-up bg-white dark:bg-[#031B4E] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 hover:shadow-lg hover:border-royal-blue/20 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${update.color}`}>
                    {update.type}
                  </span>
                  <span className="text-sm font-semibold text-gray-400">{update.date}</span>
                </div>
                <div className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center bg-gray-50 dark:bg-[#131B33] px-4 py-2 rounded-lg">
                  {update.authority}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors">
                {update.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {update.description}
              </p>
              
              <div className="flex items-center">
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-royal-blue">
                  Consult regarding this update <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="mx-4 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors cursor-not-allowed" title="Link to official gazette (simulation)">
                  View Official Circular <ExternalLink className="ml-2 w-4 h-4 opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Request CTA */}
        <div className="animate-up bg-primary-dark-blue rounded-[2rem] p-10 md:p-14 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Unsure how these changes impact you?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Regulatory non-compliance carries severe financial and operational penalties. Speak with our advisory team for a comprehensive compliance health check.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
            Request a Compliance Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
