import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ChevronDown, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '/about',
    desc: 'Learn about our firm, leadership, and our unwavering commitment to excellence in Nepal.',
    dropdown: [
      { name: 'Firm Overview', path: '/about#overview' },
      { name: 'Leadership Team', path: '/about#leadership' },
      { name: 'Vision & Mission', path: '/about#vision' },
      { name: 'Why Choose Us', path: '/about#why-us' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    desc: 'Comprehensive financial, advisory, and compliance services tailored for modern businesses.',
    dropdown: [
      { name: 'Audit & Assurance', path: '/services/audit' },
      { name: 'Tax Advisory', path: '/services/tax' },
      { name: 'Accounting & Bookkeeping', path: '/services/accounting' },
      { name: 'Company Registration', path: '/services/registration' },
      { name: 'VAT Services', path: '/services/vat' },
      { name: 'Business Advisory', path: '/services/advisory' },
      { name: 'Risk Consulting', path: '/services/risk' },
      { name: 'Financial Planning', path: '/services/planning' },
      { name: 'Payroll Services', path: '/services/payroll' },
      { name: 'Compliance Services', path: '/services/compliance' },
    ],
  },
  {
    name: 'Industries',
    path: '/industries',
    desc: 'Deep industry expertise across key sectors driving the Nepalese economy.',
    dropdown: [
      { name: 'Banking & Finance', path: '/industries/banking-finance' },
      { name: 'Manufacturing', path: '/industries/manufacturing-trading' },
      { name: 'Healthcare', path: '/industries/healthcare-pharma' },
      { name: 'Education', path: '/industries/education-institutions' },
      { name: 'Technology', path: '/industries/technology-startups' },
      { name: 'Hospitality', path: '/industries/tourism-hospitality' },
      { name: 'Real Estate', path: '/industries/real-estate-construction' },
      { name: 'NGOs & INGOs', path: '/industries/ngo-ingo' },
      { name: 'Energy', path: '/industries/hydropower-renewable' },
    ],
  },
  {
    name: 'Insights',
    path: '/insights',
    desc: 'Stay informed with the latest regulatory updates, tax changes, and firm news.',
    dropdown: [
      { name: 'Articles', path: '/insights/articles' },
      { name: 'Tax Updates', path: '/insights/tax-updates' },
      { name: 'News & Circulars', path: '/insights/news' },
      { name: 'Publications', path: '/insights/publications' },
    ],
  },
  {
    name: 'Resources',
    path: '/resources',
    desc: 'Helpful tools, calculators, and guides for your financial planning.',
    dropdown: [
      { name: 'Downloads', path: '/resources/downloads' },
      { name: 'Calculators', path: '/resources/calculators' },
      { name: 'Guides', path: '/resources/guides' },
      { name: 'FAQs', path: '/resources/faqs' },
    ],
  },
  { name: 'Careers', path: '/careers' },
];

const MegaMenu = ({
  data,
  isOpen,
  onMouseEnter,
  onLinkClick,
  onExited
}: {
  data: typeof navLinks[0];
  isOpen: boolean;
  onMouseEnter: () => void;
  onLinkClick: (path: string) => void;
  onExited: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;
    
    // Kill any existing animations to prevent conflicts between rapidly changing states
    gsap.killTweensOf(menuRef.current);

    if (isOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, { 
        opacity: 0, 
        y: -10, 
        duration: 0.2, 
        ease: 'power2.in',
        onComplete: onExited 
      });
    }
    
    return () => {
      if (menuRef.current) gsap.killTweensOf(menuRef.current);
    };
  }, [isOpen, onExited]);

  if (!data || !data.dropdown) return null;

  const mid = Math.ceil(data.dropdown.length / 2);
  const col1 = data.dropdown.slice(0, mid);
  const col2 = data.dropdown.slice(mid);

  return (
    <div
      ref={menuRef}
      onMouseEnter={onMouseEnter}
      className={cn(
        "absolute top-[85px] left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl bg-primary-dark-blue border border-white/10 rounded-3xl shadow-2xl p-10 z-[60] before:absolute before:-top-6 before:left-0 before:right-0 before:h-6 before:bg-transparent",
        !isOpen && "pointer-events-none"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:border-r border-white/10 md:pr-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">{data.name}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              {data.desc || 'Explore our comprehensive professional services and resources.'}
            </p>
          </div>
          <Link to={data.path} onClick={() => onLinkClick(data.path)} className="inline-flex items-center text-royal-blue font-medium hover:text-white transition-colors">
            Explore All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          <div className="flex flex-col space-y-4">
            {col1.map(item => (
              <Link key={item.name} to={item.path} onClick={() => onLinkClick(item.path)} className="text-text-secondary hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue opacity-0 group-hover:opacity-100 transition-opacity mr-3" />
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            {col2.map(item => (
              <Link key={item.name} to={item.path} onClick={() => onLinkClick(item.path)} className="text-text-secondary hover:text-white transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue opacity-0 group-hover:opacity-100 transition-opacity mr-3" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [renderedMenu, setRenderedMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setActiveMenu(null);
    setRenderedMenu(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveMenu(null);
  };

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(name);
    if (name) setRenderedMenu(name);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleExited = useCallback(() => {
    setRenderedMenu(null);
  }, []);

  const activeData = navLinks.find(l => l.name === activeMenu);
  const renderedData = navLinks.find(l => l.name === renderedMenu);
  
  const isOpen = !!(activeData && activeData.dropdown);
  const displayData = isOpen ? activeData : renderedData;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] px-0 py-0 lg:px-6 lg:py-4 flex justify-center transition-transform duration-300",
      !isVisible ? "-translate-y-full" : "translate-y-0"
    )}>
      <div 
        className="w-full max-w-7xl mx-auto relative flex flex-col items-center"
        onMouseLeave={handleMouseLeave}
      >
        <nav className={cn(
          "w-full rounded-none lg:rounded-full px-4 sm:px-6 h-[72px] flex items-center justify-between transition-all duration-500",
          isScrolled
            ? "bg-white dark:bg-[#020A1A] lg:bg-transparent lg:bg-gradient-to-r from-white dark:from-[#0A1128] from-5% via-royal-blue via-20% to-primary-dark-blue shadow-lg lg:shadow-2xl border-b border-gray-100 dark:border-white/10 lg:border-white/10 lg:border"
            : "bg-white/95 dark:bg-[#020A1A]/95 lg:bg-transparent backdrop-blur-md lg:bg-gradient-to-r from-white/95 dark:from-[#0A1128]/95 from-5% via-royal-blue/95 via-20% to-primary-dark-blue/95 border-b border-gray-100 dark:border-white/10 lg:border-white/10 lg:border"
        )}>
          <Link to="/" onClick={() => handleLinkClick('/')} className="flex items-center shrink-0">
            <img src={logo} alt="Jay & Ajay Associates" className="h-12 sm:h-14 w-auto relative z-10" />
          </Link>

          {/* Mobile Firm Name */}
          <div className="lg:hidden flex-1 text-center font-heading font-bold text-[17px] sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-dark-blue to-royal-blue px-1 whitespace-nowrap leading-none">
            J. Ajay & Associates
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => handleMouseEnter(link.dropdown ? link.name : '')}
              >
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={cn(
                    "flex items-center space-x-1 px-5 py-2 text-base font-semibold transition-all duration-300 rounded-full",
                    activeMenu === link.name ? "text-white bg-white/20 dark:bg-[#020A1A]/20 shadow-sm" : "text-white/95 hover:text-white hover:bg-white/15 dark:bg-[#020A1A]/15"
                  )}
                >
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300", 
                      activeMenu === link.name && "rotate-180"
                    )} />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex shrink-0 items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-white/90 hover:text-white transition-colors rounded-full hover:bg-white/10 dark:bg-[#020A1A]/10"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/contact"
              className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-[#020A1A] text-primary-dark-blue dark:text-white hover:bg-text-secondary rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-1 shrink-0">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-primary-dark-blue dark:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-primary-dark-blue dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mega Menu Container */}
        {displayData && displayData.dropdown && (
          <MegaMenu
            data={displayData}
            isOpen={isOpen}
            onMouseEnter={() => handleMouseEnter(displayData.name)}
            onLinkClick={handleLinkClick}
            onExited={handleExited}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 bg-primary-dark-blue border border-white/10 shadow-2xl rounded-2xl p-6 lg:hidden max-h-[80vh] overflow-y-auto z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col space-y-2">
                <Link to={link.path} onClick={() => { setIsMobileMenuOpen(false); handleLinkClick(link.path); }} className="text-lg font-medium text-white pb-2 border-b border-white/10">
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col space-y-3 pt-2 pl-2">
                    {link.dropdown.map((subLink) => (
                      <Link key={subLink.name} to={subLink.path} onClick={() => { setIsMobileMenuOpen(false); handleLinkClick(subLink.path); }} className="text-sm text-text-secondary hover:text-white">
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
