import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'Strategic Business Expansion in Nepal: Navigating Market Complexities',
    excerpt: 'An advisory guide on formulating market entry strategies, optimizing capital structures, and managing regulatory risks when scaling operations in Nepal.',
    path: '/insights/business-strategy/strategic-expansion-nepal',
    date: 'Aug 15, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Mergers and Acquisitions (M&A) in Nepal: Navigating Financial and Regulatory Due Diligence',
    excerpt: 'An executive guide to M&A in Nepal, covering target valuation, NRB merger bylaws, and the tax implications of asset versus share transfers.',
    path: '/insights/business-strategy/m-and-a-nepal',
    date: 'Jan 10, 2027',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop'
  },
  {
    title: 'Financial Restructuring and Turnaround Strategies for Distressed Assets in Nepal',
    excerpt: 'A strategic guide for CFOs on managing liquidity crises, debt restructuring with Nepalese banks, and executing corporate turnarounds.',
    path: '/insights/business-strategy/financial-restructuring',
    date: 'Feb 18, 2027',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function BusinessStrategyCategory() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Business Growth & Strategy | Insights | Jay & Ajay Associates</title>
        <meta name="description" content="Expert insights on scaling operations, optimizing capital structures, and driving strategic growth in the Nepalese market." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-[#020A1A]/50 border border-blue-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-royal-blue">
            <TrendingUp className="w-4 h-4" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark-blue dark:text-white mb-6">
            Business Growth & Strategy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Strategic perspectives on expanding market share, financial structuring, and leveraging macroeconomic trends in Nepal to drive sustainable institutional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link key={i} to={article.path} className="group block h-full animate-up">
              <div className="bg-white dark:bg-[#0A1128] border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden hover:border-royal-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all h-full flex flex-col">
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
