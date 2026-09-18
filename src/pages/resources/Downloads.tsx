import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { Download, FileText } from 'lucide-react';

const downloads = [
  {
    category: "Tax Compliance",
    items: [
      { name: "Income Tax Return Checklist (FY 2083/84)", size: "124 KB", ext: "PDF" },
      { name: "VAT Purchase/Sales Register Format", size: "45 KB", ext: "XLSX" },
      { name: "TDS Deduction Rate Chart 2083", size: "88 KB", ext: "PDF" }
    ]
  },
  {
    category: "Corporate Secretarial",
    items: [
      { name: "Company Registration Document Checklist", size: "112 KB", ext: "PDF" },
      { name: "Standard Memorandum of Association (MoA)", size: "210 KB", ext: "DOCX" },
      { name: "Board Resolution Format for Bank Account Opening", size: "34 KB", ext: "DOCX" }
    ]
  },
  {
    category: "Foreign Investment (FDI)",
    items: [
      { name: "Department of Industry (DOI) FDI Application Form", size: "450 KB", ext: "PDF" },
      { name: "NRB Foreign Currency Repatriation Checklist", size: "156 KB", ext: "PDF" },
      { name: "Share Purchase Agreement (SPA) Term Sheet Template", size: "90 KB", ext: "PDF" }
    ]
  }
];

export default function Downloads() {
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
        <title>Forms & Downloads | Resources | Jay & Ajay Associates</title>
        <meta name="description" content="Download essential Nepalese tax forms, compliance checklists, and corporate templates." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-[#031B4E]/50 border border-blue-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-royal-blue">
            <Download className="w-4 h-4" />
            <span>Document Library</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Forms & <span className="text-royal-blue">Downloads</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Access our curated library of statutory forms, compliance checklists, and corporate templates required for operating in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((section, idx) => (
            <div key={idx} className="animate-up bg-white dark:bg-[#031B4E] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-4">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-start p-4 hover:bg-gray-50 dark:hover:bg-[#131B33] rounded-xl transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-white/5 flex items-center justify-center mr-4 shrink-0">
                      <FileText className="w-5 h-5 text-royal-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-royal-blue transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{item.ext} • Available upon request</p>
                    </div>
                    <a href="/contact" className="text-xs font-bold text-royal-blue bg-blue-50 dark:bg-white/5 px-3 py-1.5 rounded-lg whitespace-nowrap self-center hover:bg-royal-blue hover:text-white transition-colors">
                      Request Resource
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resource Request CTA */}
        <div className="animate-up mt-16 bg-primary-dark-blue rounded-[2rem] p-10 md:p-14 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Can't find the resource you're looking for?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our library contains hundreds of specialized forms and templates. If you need a specific regulatory document, speak with our advisory team.
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
            Request Custom Document
          </a>
        </div>
      </div>
    </div>
  );
}
