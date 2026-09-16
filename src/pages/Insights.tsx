import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Calendar, BookOpen, FileText, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Tax Updates', icon: FileText, count: 24, path: '/insights/tax-updates' },
  { name: 'Firm News', icon: Newspaper, count: 12, path: '/insights/news' },
  { name: 'Thought Leadership', icon: BookOpen, count: 18, path: '/insights/articles' },
];

const featuredArticle = {
  category: 'Tax Advisory',
  title: 'Navigating the New Fiscal Year Budget: Strategic Implications for Foreign Investors in Nepal',
  date: 'August 15, 2026',
  readTime: '8 min read',
  excerpt: 'A comprehensive analysis of the recent changes in the Income Tax Act and how multinational corporations can optimize their corporate structures to align with the new regulatory framework.',
  author: 'Ajay Sharma, Managing Partner',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000'
};

const recentArticles = [
  {
    category: 'Audit & Assurance',
    title: 'The Evolution of NFRS: Preparing for the 2027 Accounting Standards Overhaul',
    date: 'August 10, 2026',
    readTime: '6 min read',
    excerpt: 'Key differences between the current NFRS framework and the upcoming mandatory adoptions for public entities.'
  },
  {
    category: 'Regulatory Compliance',
    title: 'NRB Working Capital Guidelines: Compliance Strategies for Manufacturing Firms',
    date: 'August 02, 2026',
    readTime: '5 min read',
    excerpt: 'How manufacturers can structure their credit lines to remain compliant with the central bank\'s stringent new working capital limits.'
  },
  {
    category: 'Foreign Direct Investment',
    title: 'Repatriation of Dividends: Overcoming OCR and NRB Procedural Hurdles',
    date: 'July 28, 2026',
    readTime: '10 min read',
    excerpt: 'A step-by-step guide to documenting and executing dividend repatriation for foreign institutional investors operating in Nepal.'
  }
];

export default function Insights() {
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
    <div ref={containerRef} className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue mb-6">
            Expert <span className="text-royal-blue">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Stay informed with our latest analysis on tax legislation, regulatory shifts, and business strategy in Nepal.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-24 animate-up group cursor-pointer relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] flex items-end">
          <div className="absolute inset-0">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue via-primary-dark-blue/60 to-transparent" />
          </div>
          <div className="relative z-10 p-10 md:p-16 max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-royal-blue text-white text-sm font-semibold tracking-wide">
                {featuredArticle.category}
              </span>
              <span className="text-white/80 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {featuredArticle.date}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight group-hover:text-royal-blue transition-colors duration-300">
              {featuredArticle.title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{featuredArticle.author}</span>
              <button className="flex items-center text-royal-blue font-semibold hover:text-white transition-colors">
                Read Full Article <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-8 animate-up">
            <h3 className="text-xl font-bold text-primary-dark-blue mb-6 pb-4 border-b border-gray-100">Browse Topics</h3>
            <ul className="space-y-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <li key={cat.name}>
                    <Link to={cat.path} className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-royal-blue transition-colors">
                          <Icon className="w-5 h-5 text-royal-blue group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-primary-dark-blue">{cat.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-royal-blue transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="bg-primary-dark-blue p-8 rounded-3xl mt-12 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-royal-blue/30 rounded-full blur-2xl" />
              <h4 className="text-white font-bold text-xl mb-4 relative z-10">Subscribe to Updates</h4>
              <p className="text-text-secondary text-sm mb-6 relative z-10">Get the latest tax circulars and regulatory news delivered to your inbox.</p>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-royal-blue mb-4 relative z-10" />
              <button className="w-full py-3 bg-royal-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors relative z-10">
                Subscribe
              </button>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center justify-between mb-8 animate-up border-b border-gray-100 pb-4">
              <h3 className="text-2xl font-bold text-primary-dark-blue">Latest Publications</h3>
              <button className="text-royal-blue font-semibold hover:text-primary-dark-blue transition-colors flex items-center">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentArticles.map((article, index) => (
                <div key={index} className="animate-up group cursor-pointer border border-gray-100 rounded-3xl p-8 hover:border-royal-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all bg-white flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-semibold text-royal-blue">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-primary-dark-blue mb-4 group-hover:text-royal-blue transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                    <span className="text-sm font-medium text-gray-500">{article.readTime}</span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-royal-blue group-hover:border-royal-blue transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8 flex justify-center animate-up">
              <button className="px-8 py-4 bg-white border border-gray-200 text-primary-dark-blue rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                Load More Articles
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
