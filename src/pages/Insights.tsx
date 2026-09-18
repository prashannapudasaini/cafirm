import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ArrowRight, Calendar, FileText, ShieldCheck, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Tax & Regulatory Updates', icon: FileText, count: 3, path: '/insights/tax-regulatory-updates' },
  { name: 'Audit & Assurance Insights', icon: ShieldCheck, count: 3, path: '/insights/audit-assurance-insights' },
  { name: 'Corporate Governance & Risk', icon: Scale, count: 3, path: '/insights/governance-risk' },
  { name: 'Business Growth & Strategy', icon: TrendingUp, count: 3, path: '/insights/business-strategy' },
];

const featuredArticle = {
  category: 'Tax & Regulatory Updates',
  title: 'Income Tax Compliance in Nepal: Navigating the Fiscal Year Transition',
  date: 'Sep 10, 2026',
  readTime: '12 min read',
  excerpt: 'An executive analysis of the Income Tax Act implications for corporate entities navigating the transition between fiscal years. We detail mandatory provisions, deductible expenses, and compliance deadlines.',
  author: 'Jay & Ajay Associates',
  path: '/insights/tax-regulatory-updates/income-tax-compliance-nepal',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop'
};

const recentArticles = [
  {
    category: 'Audit & Assurance',
    title: 'Statutory Audit Requirements in Nepal: Preparing for NFRS Compliance',
    date: 'Sep 05, 2026',
    readTime: '10 min read',
    path: '/insights/audit-assurance-insights/statutory-audit-nepal',
    excerpt: 'An in-depth guide for corporate entities to navigate statutory audit processes, focusing on the rigorous requirements of NFRS and the Companies Act.'
  },
  {
    category: 'Corporate Governance',
    title: 'Building a Robust Corporate Governance Framework in Nepal',
    date: 'Aug 28, 2026',
    readTime: '15 min read',
    path: '/insights/governance-risk/corporate-governance-framework',
    excerpt: 'An advisory blueprint for boards and directors in Nepal to establish resilient governance structures and mitigate enterprise risk.'
  }
];

export default function Insights() {
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
        <title>Insights Knowledge Hub | Jay & Ajay Associates</title>
        <meta name="description" content="Professional insights, tax updates, audit guidance, and corporate advisory from leading Chartered Accountants in Nepal." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Insights & <span className="text-royal-blue">Advisory</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Strategic perspectives from our Chartered Accountants and Business Advisors. Explore deep-dive analyses on taxation, statutory audit, and corporate governance in Nepal.
          </p>
        </div>

        {/* Featured Article */}
        <Link to={featuredArticle.path} className="block mb-24 animate-up group cursor-pointer relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] flex items-end">
          <div className="absolute inset-0">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue via-primary-dark-blue/80 to-transparent" />
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
              <span className="text-white font-medium">Reviewed By {featuredArticle.author}</span>
              <div className="flex items-center text-royal-blue font-semibold group-hover:text-white transition-colors">
                Read Full Insight <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-8 animate-up">
            <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-white/10">Insight Categories</h3>
            <ul className="space-y-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <li key={cat.name}>
                    <Link to={cat.path} className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 transition-colors group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-royal-blue/20 flex items-center justify-center mr-4 group-hover:bg-royal-blue transition-colors">
                          <Icon className="w-5 h-5 text-royal-blue group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-primary-dark-blue dark:text-white text-sm leading-tight max-w-[140px]">{cat.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-[#131B33] px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-royal-blue transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="bg-primary-dark-blue p-8 rounded-3xl mt-12 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-royal-blue/30 rounded-full blur-2xl" />
              <h4 className="text-white font-bold text-xl mb-4 relative z-10">Professional Briefing</h4>
              <p className="text-text-secondary text-sm mb-6 relative z-10">Receive critical tax and regulatory updates directly from our partners.</p>
              <input type="email" placeholder="Corporate email" className="w-full px-4 py-3 bg-white/10 dark:bg-[#031B4E]/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-royal-blue mb-4 relative z-10" />
              <button className="w-full py-3 bg-royal-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors relative z-10">
                Subscribe
              </button>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center justify-between mb-8 animate-up border-b border-gray-100 dark:border-white/10 pb-4">
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white">Latest Advisory Publications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentArticles.map((article, index) => (
                <Link key={index} to={article.path} className="animate-up group block border border-gray-100 dark:border-white/10 rounded-3xl p-8 hover:border-royal-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all bg-white dark:bg-[#031B4E] flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-royal-blue">{article.category}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4 group-hover:text-royal-blue transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/5 mt-auto">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{article.readTime}</span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:bg-royal-blue group-hover:border-royal-blue transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
