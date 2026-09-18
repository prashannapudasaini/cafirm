import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'Income Tax Compliance in Nepal: Navigating the Fiscal Year Transition',
    excerpt: 'An executive analysis of the Income Tax Act implications for corporate entities navigating the transition between fiscal years. We detail mandatory provisions, deductible expenses, and compliance deadlines.',
    path: '/insights/tax-regulatory-updates/income-tax-compliance-nepal',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop'
  },
  {
    title: 'Navigating Value Added Tax (VAT) Audits and Compliance in Nepal',
    excerpt: 'A comprehensive guide to managing VAT compliance, input tax credit mechanisms, and mitigating risks during Inland Revenue Department (IRD) audits.',
    path: '/insights/tax-regulatory-updates/vat-audit-compliance-nepal',
    date: 'Oct 05, 2026',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d04?q=80&w=2026&auto=format&fit=crop'
  },
  {
    title: 'Transfer Pricing Regulations in Nepal: A Guide for Multinational Entities',
    excerpt: 'An advisory breakdown of Section 33 of the Income Tax Act, Double Taxation Avoidance Agreements (DTAA), and arm\'s length pricing requirements in Nepal.',
    path: '/insights/tax-regulatory-updates/transfer-pricing-nepal',
    date: 'Sep 20, 2026',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop'
  }
];

export default function TaxCategory() {
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
        <title>Tax & Regulatory Updates | Insights | Jay & Ajay Associates</title>
        <meta name="description" content="Stay updated with the latest Tax & Regulatory changes in Nepal. Expert insights on Income Tax, VAT, IRD directives, and corporate tax structuring." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-[#031B4E]/50 border border-blue-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-royal-blue">
            <FileText className="w-4 h-4" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark-blue dark:text-white mb-6">
            Tax & Regulatory Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Expert analysis of Nepal's evolving tax landscape. From Inland Revenue Department (IRD) circulars to strategic corporate tax planning, our insights help you navigate compliance and optimize your tax position.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link key={i} to={article.path} className="group block h-full animate-up">
              <div className="bg-white dark:bg-[#031B4E] border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden hover:border-royal-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-royal-blue font-semibold">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
