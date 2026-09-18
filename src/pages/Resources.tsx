import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Download, Calculator, BookOpen, HelpCircle, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const resourceCategories = [
  {
    title: 'Forms & Downloads',
    icon: Download,
    description: 'Essential tax templates, compliance forms, and statutory documents.',
    items: ['KYC Form Templates', 'Tax Return Checklists', 'Company Registration Forms', 'FDI Approval Document Checklist'],
    color: 'bg-blue-50 text-royal-blue',
    path: '/resources/downloads'
  },
  {
    title: 'Financial Calculators',
    icon: Calculator,
    description: 'Interactive tools to estimate your tax liabilities and financial planning.',
    items: ['Salary Tax Calculator (FY 2083/84)', 'Corporate Tax Estimator', 'EMI & Loan Calculator', 'Gratuity & Leave Encashment'],
    color: 'bg-indigo-50 text-indigo-600',
    path: '/resources/calculators'
  },
  {
    title: 'Business Guides',
    icon: BookOpen,
    description: 'Comprehensive guides on doing business and regulatory navigation in Nepal.',
    items: ['Doing Business in Nepal Guide', 'FDI Repatriation Handbook', 'Navigating the New NFRS', 'Guide to Labor Act Compliance'],
    color: 'bg-emerald-50 text-emerald-600',
    path: '/resources/guides'
  },
  {
    title: 'FAQs',
    icon: HelpCircle,
    description: 'Answers to common questions regarding tax, audit, and advisory services.',
    items: ['Tax Filing Deadlines', 'Audit Requirements for Pvt. Ltd.', 'Foreign Investment Thresholds', 'VAT Registration Threshold'],
    color: 'bg-orange-50 text-orange-600',
    path: '/resources/faqs'
  }
];

export default function Resources() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Client <span className="text-royal-blue">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            A comprehensive hub of tools, templates, and knowledge to empower your financial decision-making.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="animate-up group bg-white dark:bg-[#020A1A] border border-gray-100 dark:border-white/10 rounded-[2rem] p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-royal-blue/20 transition-all">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color} mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <Link to={category.path} className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:bg-royal-blue group-hover:border-royal-blue group-hover:text-white text-gray-400 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-royal-blue transition-colors cursor-pointer">
                      <FileText className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Client Portal CTA */}
        <div className="animate-up bg-primary-dark-blue rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <div className="md:max-w-2xl relative z-10 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Secure Client Portal</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Access your firm's confidential tax returns, audit reports, and securely exchange documents with our advisory team through our encrypted portal.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <button className="px-8 py-4 bg-white dark:bg-[#020A1A] text-primary-dark-blue dark:text-white rounded-xl font-bold hover:bg-gray-50 dark:bg-[#0A1128] transition-colors shadow-lg flex items-center">
              Login to Portal <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
