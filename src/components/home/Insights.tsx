import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    category: 'Thought Leadership',
    title: 'Annual Budget 2081/82: Strategic Business Impact and Tax Implications',
    date: 'June 01, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    category: 'Advisory',
    title: 'Navigating NFRS Compliance: A Guide for Growing Nepali Enterprises',
    date: 'May 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    category: 'Foreign Investment',
    title: 'Optimizing FDI Frameworks: Strategic Entry and Repatriation in Nepal',
    date: 'April 20, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  }
];

const Insights = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.insight-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 bg-gray-50 dark:bg-[#0A1128] relative z-10 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
              Latest <span className="text-royal-blue">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
              Professional perspectives on Nepal's evolving tax laws, regulatory landscape, and business climate.
            </p>
          </div>
          <Link to="/insights" className="hidden md:flex items-center text-primary-dark-blue dark:text-white hover:text-royal-blue transition-colors font-medium border-b border-primary-dark-blue/20 hover:border-royal-blue pb-1 mt-6 md:mt-0">
            View All Articles
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="insight-card group cursor-pointer flex flex-col h-full bg-white dark:bg-[#020A1A] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-[#020A1A]/90 backdrop-blur text-primary-dark-blue dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors leading-snug">
                  {article.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center text-sm font-medium text-royal-blue">
                  Read Article
                  <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
