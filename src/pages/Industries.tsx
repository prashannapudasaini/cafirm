import { Building2 } from 'lucide-react';
import IndustriesList from '../components/home/Industries';

export default function Industries() {
  return (
    <div className="bg-white dark:bg-[#020A1A] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 dark:bg-[#020A1A]/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <Building2 className="w-4 h-4 text-royal-blue" />
              <span>Sectors We Serve</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Industry <span className="text-royal-blue">Expertise</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              We bring specialized knowledge and global best practices to Nepal's key economic sectors, ensuring strategic alignment and regulatory confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Reusing the industries grid component but stripping the top padding so it flows nicely */}
      <div className="-mt-12 relative z-20">
        <IndustriesList />
      </div>
    </div>
  );
}
