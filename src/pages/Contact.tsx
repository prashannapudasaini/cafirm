import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Get in <span className="text-royal-blue">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Our partners and senior advisors are ready to discuss how we can support your business objectives in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-up">
            <div className="bg-gray-50 dark:bg-[#0A1128] p-8 rounded-2xl border border-gray-100 dark:border-white/10">
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-6">Kathmandu Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Address</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Level 4, Trade Tower Nepal<br/>Thapathali, Kathmandu<br/>Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Phone</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">+977 9851311960</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Email</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">info@jaa.com.np</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <strong className="block text-primary-dark-blue dark:text-white mb-1">Business Hours</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sun - Fri: 9:30 AM - 5:30 PM<br/>Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-up">
            <div className="bg-white dark:bg-[#020A1A] p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-white/10">
              <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Company Name (Optional)</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue transition-all" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Service of Interest</label>
                  <select className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue transition-all text-gray-600 dark:text-gray-400">
                    <option>Audit & Assurance</option>
                    <option>Tax Advisory</option>
                    <option>Business Advisory</option>
                    <option>FDI & Investment</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">How can we help?</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue transition-all resize-none" placeholder="Briefly describe your requirements..."></textarea>
                </div>

                <button type="submit" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 w-full sm:w-auto">
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
