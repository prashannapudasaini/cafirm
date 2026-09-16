import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Globe, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto glass-panel rounded-[2rem] pt-16 pb-12 px-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-royal-blue/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-royal-blue/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-4">
              <img src={logo} alt="Jay & Ajay Associates" className="h-10 w-auto" />
            </Link>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-widest mb-6 border-l-2 border-royal-blue pl-3">
              Chartered Accountants • Auditors • Tax Consultants • Business Advisors
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed max-w-sm text-sm">
              Helping businesses navigate audit, tax, compliance, and financial success with confidence. Trusted by industry leaders.
            </p>
            <div className="flex flex-col space-y-2 mb-8">
              <a href="tel:+9779851311960" className="text-white hover:text-royal-blue transition-colors font-medium flex items-center">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Globe className="w-4 h-4" /> {/* Or Phone icon if available, but let's stick to what we import */}
                </span>
                +977 9851311960
              </a>
              <a href="mailto:info@jayajay.com.np" className="text-white hover:text-royal-blue transition-colors font-medium flex items-center">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4" />
                </span>
                info@jayajay.com.np
              </a>
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-royal-blue">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-royal-blue">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Firm</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-text-secondary hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/leadership" className="text-sm text-text-secondary hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/careers" className="text-sm text-text-secondary hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-text-secondary hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/audit" className="text-sm text-text-secondary hover:text-white transition-colors">Audit & Assurance</Link></li>
              <li><Link to="/services/tax" className="text-sm text-text-secondary hover:text-white transition-colors">Tax Advisory</Link></li>
              <li><Link to="/services/accounting" className="text-sm text-text-secondary hover:text-white transition-colors">Accounting</Link></li>
              <li><Link to="/services/advisory" className="text-sm text-text-secondary hover:text-white transition-colors">Business Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Insights</h4>
            <ul className="space-y-4">
              <li><Link to="/insights/articles" className="text-sm text-text-secondary hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/insights/tax-updates" className="text-sm text-text-secondary hover:text-white transition-colors">Tax Updates</Link></li>
              <li><Link to="/insights/news" className="text-sm text-text-secondary hover:text-white transition-colors">Firm News</Link></li>
              <li><Link to="/resources/downloads" className="text-sm text-text-secondary hover:text-white transition-colors">Downloads</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Jay & Ajay Associates. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-xs text-text-secondary hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-text-secondary hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-xs text-text-secondary hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
