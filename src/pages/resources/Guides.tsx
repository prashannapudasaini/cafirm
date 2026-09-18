import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: 'Doing Business in Nepal',
    description: 'A comprehensive handbook for foreign investors covering market entry, FITTA regulations, and profit repatriation guidelines under NRB directives.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    category: 'Foreign Investment'
  },
  {
    title: 'NFRS Implementation Guide',
    description: 'Practical insights into adopting the Nepal Financial Reporting Standards, bridging the gap between local GAAP and IFRS requirements.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    category: 'Accounting'
  },
  {
    title: 'Corporate Governance Guide',
    description: 'Reference material for Boards and Directors detailing SEBON guidelines, independent director mandates, and risk committee structuring.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    category: 'Governance'
  },
  {
    title: 'Labour Compliance Guide',
    description: 'A detailed manual on the Labour Act 2074 and the Social Security Fund (SSF), focusing on employer liabilities and gratuity calculations.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    category: 'Payroll & HR'
  },
  {
    title: 'Tax Compliance Handbook',
    description: 'The definitive reference for corporate entities navigating the Income Tax Act, VAT provisions, and transfer pricing in Nepal.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop',
    category: 'Taxation'
  },
  {
    title: 'Mergers & Acquisitions Manual',
    description: 'Strategic and regulatory guidance on executing M&A in Nepal, including due diligence requirements and NRB merger bylaws.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    category: 'Corporate Finance'
  }
];

export default function Guides() {
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
        <title>Business Guides | Resources | Jay & Ajay Associates</title>
        <meta name="description" content="Authoritative reference materials and handbooks for operating businesses in Nepal." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 dark:bg-[#031B4E]/50 border border-emerald-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-emerald-600">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Assets</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Business <span className="text-royal-blue">Guides</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Authoritative reference materials designed to help corporate leaders navigate Nepal's complex regulatory landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, idx) => (
            <div key={idx} className="animate-up group bg-white dark:bg-[#031B4E] border border-gray-100 dark:border-white/10 rounded-[2rem] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-royal-blue/20 transition-all flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-[#031B4E]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-dark-blue dark:text-white">
                  {guide.category}
                </div>
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-3 group-hover:text-royal-blue transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {guide.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-royal-blue group/link">
                  Request Access <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Request CTA */}
        <div className="animate-up bg-primary-dark-blue rounded-[2rem] p-10 md:p-14 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Can't find the resource you're looking for?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our advisory team produces custom whitepapers and bespoke compliance manuals tailored to your specific industry.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
            Speak with our Advisory Team
          </Link>
        </div>
      </div>
    </div>
  );
}
