import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'Building a Robust Corporate Governance Framework in Nepal',
    excerpt: 'An advisory perspective on navigating the complexities of corporate governance in Nepal, focusing on Board dynamics, regulatory compliance, and attracting institutional investment.',
    path: '/insights/governance-risk/corporate-governance-framework',
    date: 'Aug 28, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Anti-Money Laundering (AML) and CFT Compliance for Nepalese Enterprises',
    excerpt: 'A critical guide to the AL/CFT Act, Financial Information Unit (FIU) reporting, and KYC protocols required for institutions operating in Nepal.',
    path: '/insights/governance-risk/aml-cft-compliance',
    date: 'Nov 20, 2026',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop'
  },
  {
    title: 'Board Effectiveness and the Role of Independent Directors in Nepal',
    excerpt: 'An advisory perspective on evaluating board dynamics, SEBON guidelines, and the critical mandate of Independent Directors under the Companies Act 2063.',
    path: '/insights/governance-risk/board-effectiveness',
    date: 'Dec 05, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function GovernanceCategory() {
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
        <title>Corporate Governance & Risk | Insights | Jay & Ajay Associates</title>
        <meta name="description" content="Expert insights on enterprise risk management, internal controls, and corporate governance for businesses operating in Nepal." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-[#031B4E]/50 border border-blue-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-royal-blue">
            <Scale className="w-4 h-4" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark-blue dark:text-white mb-6">
            Corporate Governance & Risk
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Strategic perspectives on mitigating enterprise risk, structuring effective board oversight, and implementing internal controls that protect organizational value in a volatile regulatory environment.
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
