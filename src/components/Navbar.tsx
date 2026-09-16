import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../lib/utils';

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
      { name: 'Banking & Finance', path: '/industries/banking' },
      { name: 'Manufacturing', path: '/industries/manufacturing' },
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Education', path: '/industries/education' },
      { name: 'Technology', path: '/industries/technology' },
      { name: 'Hospitality', path: '/industries/hospitality' },
      { name: 'Real Estate', path: '/industries/real-estate' },
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
  category,
  desc,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onLinkClick
}: {
  category: string;
  desc?: string;
  items: { name: string; path: string }[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: (path: string) => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20, pointerEvents: 'none' },
        { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -20, pointerEvents: 'none', duration: 0.2, ease: 'power2.in' });
    }
  }, [isOpen]);

  const mid = Math.ceil(items.length / 2);
  const col1 = items.slice(0, mid);
  const col2 = items.slice(mid);

  return (
    <div
      ref={menuRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "fixed top-[100px] left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl bg-primary-dark-blue border border-white/10 rounded-3xl shadow-2xl p-10 z-[60] opacity-0 pointer-events-none before:absolute before:-top-6 before:left-0 before:right-0 before:h-6 before:bg-transparent",
        isOpen && "pointer-events-auto"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:border-r border-white/10 md:pr-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">{category}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              {desc || 'Explore our comprehensive professional services and resources.'}
            </p>
          </div>
          <Link to={navLinks.find(l => l.name === category)?.path || '/'} onClick={() => onLinkClick(navLinks.find(l => l.name === category)?.path || '/')} className="inline-flex items-center text-royal-blue font-medium hover:text-white transition-colors">
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
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
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (name: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent flickering when moving to the menu
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-center transition-transform duration-300",
      !isVisible ? "-translate-y-full" : "translate-y-0"
    )}>
      <nav className={cn(
        "w-full max-w-7xl rounded-full px-6 h-[72px] flex items-center justify-between transition-all duration-500",
        isScrolled
          ? "bg-gradient-to-r from-white from-5% via-royal-blue via-20% to-primary-dark-blue shadow-2xl border border-white/10"
          : "bg-gradient-to-r from-white/95 from-5% via-royal-blue/95 via-20% to-primary-dark-blue/95 backdrop-blur-md border border-white/10"
      )}>
        <Link to="/" onClick={() => handleLinkClick('/')} className="flex items-center shrink-0">
          <img src={logo} alt="Jay & Ajay Associates" className="h-18 sm:h-12 w-auto relative z-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => link.dropdown ? handleMouseEnter(link.name) : handleMouseEnter('')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={cn(
                  "flex items-center space-x-1 px-5 py-2 text-base font-semibold transition-all duration-300 rounded-full",
                  activeDropdown === link.name ? "text-white bg-white/20 shadow-sm" : "text-white/95 hover:text-white hover:bg-white/15"
                )}
              >
                <span>{link.name}</span>
                {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm font-medium bg-white text-primary-dark-blue hover:bg-text-secondary rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mega Menus Rendered Outside Nav for Fixed Positioning */}
      {navLinks.map(link => link.dropdown && (
        <MegaMenu
          key={`mega-${link.name}`}
          category={link.name}
          desc={link.desc}
          items={link.dropdown}
          isOpen={activeDropdown === link.name}
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
          onLinkClick={handleLinkClick}
        />
      ))}

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
