import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ShieldCheck, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleLayoutProps {
  title: string;
  metaDescription: string;
  category: string;
  categoryUrl: string;
  date: string;
  heroImage: string;
  canonicalUrl: string;
  sections: { id: string; title: string }[];
  children: ReactNode;
}

export const ArticleLayout = ({
  title,
  metaDescription,
  category,
  categoryUrl,
  date,
  heroImage,
  canonicalUrl,
  sections,
  children
}: ArticleLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('');

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

  // Intersection Observer for Table of Contents
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": heroImage,
    "datePublished": new Date(date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Jay & Ajay Associates",
      "url": "https://www.jayajay.com.np"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jay & Ajay Associates",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.jayajay.com.np/logo.png"
      }
    },
    "description": metaDescription
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen">
      <Helmet>
        <title>{title} | Insights | Jay & Ajay Associates</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.jayajay.com.np${canonicalUrl}`} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.jayajay.com.np${canonicalUrl}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Article Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue via-primary-dark-blue/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-up">
            <div className="flex items-center space-x-4 mb-6">
              <Link to={categoryUrl} className="px-4 py-1.5 bg-royal-blue hover:bg-blue-600 transition-colors text-white text-sm font-semibold tracking-wide rounded-full">
                {category}
              </Link>
              <span className="text-white/80 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
              {title}
            </h1>
            
            {/* Author Credibility Block */}
            <div className="flex items-center space-x-4 border-t border-white/20 pt-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shrink-0">
                <ShieldCheck className="w-full h-full text-royal-blue" />
              </div>
              <div>
                <p className="text-sm text-gray-300 uppercase tracking-widest font-semibold mb-1">Reviewed & Published By</p>
                <p className="text-lg font-bold">Jay & Ajay Associates</p>
                <p className="text-sm text-gray-400">Chartered Accountants | Tax Advisors | Business Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Sidebar: Table of Contents */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32 animate-up">
                <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Contents</h3>
                <nav className="space-y-3 border-l-2 border-gray-100 dark:border-white/10 pl-4">
                  {sections.map((section) => (
                    <a 
                      key={section.id} 
                      href={`#${section.id}`}
                      className={`block text-sm transition-colors ${
                        activeSection === section.id 
                          ? 'text-royal-blue font-bold -ml-[18px] border-l-2 border-royal-blue pl-4' 
                          : 'text-gray-500 dark:text-gray-400 hover:text-primary-dark-blue dark:hover:text-white'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-12">
                  <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Share Insight</h3>
                  <div className="flex items-center space-x-4">
                    <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#131B33] flex items-center justify-center hover:bg-royal-blue hover:text-white transition-colors text-gray-500">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <article className="flex-1 max-w-4xl">
              {children}

              {/* Bottom CTA Box */}
              <div className="mt-20 p-10 bg-primary-dark-blue rounded-3xl text-center relative overflow-hidden animate-up">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Require Strategic Advisory on this Topic?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                  Our team of Chartered Accountants and legal experts in Nepal can provide bespoke guidance tailored specifically to your organization's compliance and growth needs.
                </p>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors relative z-10">
                  Consult an Expert <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
};
