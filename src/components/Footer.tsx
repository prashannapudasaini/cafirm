import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark-blue text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Contact */}
          <div className="lg:col-span-4">
            <Link to="/" className="block mb-6">
              <img src={logo} alt="Jay & Ajay Associates" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Providing premium advisory, audit, and tax solutions to Nepal's leading enterprises, driven by technical excellence and professional integrity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-royal-blue shrink-0 mt-0.5" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-royal-blue shrink-0" />
                <span className="text-sm">+977 9851311960</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-royal-blue shrink-0" />
                <span className="text-sm">info@jaa.com.np</span>
              </div>
            </div>
          </div>

          {/* Firm */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">The Firm</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/audit-assurance" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Audit & Assurance</Link></li>
              <li><Link to="/services/tax-advisory" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Tax Advisory</Link></li>
              <li><Link to="/services/risk-compliance" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Risk & Compliance</Link></li>
              <li><Link to="/services/business-advisory" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Business Advisory</Link></li>
            </ul>
          </div>

          {/* Insights & Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Knowledge Hub</h4>
            <ul className="space-y-3">
              <li><Link to="/insights" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">All Insights</Link></li>
              <li><Link to="/insights/tax-regulatory-updates" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Tax & Regulatory Updates</Link></li>
              <li><Link to="/resources/calculators" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Tax Calculators</Link></li>
              <li><Link to="/resources/downloads" className="text-sm text-gray-400 hover:text-royal-blue transition-colors">Forms & Downloads</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} Jay & Ajay Associates. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>
              Designed and Developed by{' '}
              <a href="https://motionage.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                MotionAge
              </a>
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
