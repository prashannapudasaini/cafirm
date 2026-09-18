import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'Accelerated Growth',
    icon: TrendingUp,
    description: 'Clear progression paths with performance-based promotions and continuous learning opportunities.'
  },
  {
    title: 'Collaborative Culture',
    icon: Users,
    description: 'Work alongside industry veterans in an open, inclusive, and highly supportive team environment.'
  },
  {
    title: 'Premium Client Exposure',
    icon: Briefcase,
    description: 'Gain invaluable experience advising top-tier corporations, multinationals, and leading financial institutions.'
  },
  {
    title: 'Merit-Based Rewards',
    icon: Award,
    description: 'Competitive compensation packages with comprehensive benefits and performance bonuses.'
  }
];

const openings = [
  {
    role: 'Audit Manager',
    department: 'Audit & Assurance',
    experience: '5+ Years (CA Qualified)',
    type: 'Full-time',
    location: 'Kathmandu, Nepal'
  },
  {
    role: 'Senior Tax Consultant',
    department: 'Tax Advisory',
    experience: '3+ Years (CA/ACCA)',
    type: 'Full-time',
    location: 'Kathmandu, Nepal'
  },
  {
    role: 'Risk Advisory Associate',
    department: 'Consulting',
    experience: '1-3 Years',
    type: 'Full-time',
    location: 'Kathmandu, Nepal'
  },
  {
    role: 'Articled Trainee (CAP III)',
    department: 'Audit & Tax',
    experience: 'Entry Level',
    type: 'Articleship',
    location: 'Kathmandu, Nepal'
  }
];

export default function Careers() {
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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 animate-up">
          <span className="px-4 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue text-sm font-bold tracking-wide uppercase mb-6 inline-block">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-8 leading-tight">
            Shape the Future of <br/><span className="text-royal-blue">Business in Nepal</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            We are always looking for exceptional talent. Whether you are an experienced professional or a promising graduate, discover a career where you can make a profound impact.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 animate-up">
          <div className="rounded-[2rem] overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" alt="Team meeting" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Professional environment" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-4">Why Jay & Ajay Associates?</h2>
            <p className="text-gray-600 dark:text-gray-400">We invest heavily in our people, providing the platform, tools, and mentorship needed to build an extraordinary career.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="animate-up bg-gray-50 dark:bg-[#0A1128] rounded-2xl p-8 border border-gray-100 dark:border-white/10 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#020A1A] shadow-sm flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-royal-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="animate-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-4">Current Openings</h2>
              <p className="text-gray-600 dark:text-gray-400">Find the role that matches your expertise and ambition.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="text-sm font-semibold text-royal-blue bg-royal-blue/10 px-4 py-2 rounded-full">
                {openings.length} Roles Available
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="group bg-white dark:bg-[#020A1A] border border-gray-200 dark:border-white/20 rounded-2xl p-6 md:p-8 hover:border-royal-blue hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-3 group-hover:text-royal-blue transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium">
                      {job.department}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium">
                      {job.experience}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div>
                  <button className="w-full md:w-auto px-6 py-3 bg-white dark:bg-[#020A1A] border-2 border-gray-200 dark:border-white/20 text-primary-dark-blue dark:text-white font-bold rounded-xl group-hover:bg-royal-blue group-hover:border-royal-blue group-hover:text-white transition-colors flex items-center justify-center">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process CTA */}
        <div className="mt-24 animate-up bg-gradient-to-br from-gray-50 dark:from-[#0A1128] to-white dark:to-[#020A1A] border border-gray-200 dark:border-white/20 rounded-[2.5rem] p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6">Don't see a perfect fit?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We are constantly growing and actively seeking talented individuals. Send us your resume, and our HR team will contact you when a suitable position opens up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:hr@jaa.com.np" className="px-8 py-4 bg-primary-dark-blue text-white rounded-xl font-bold hover:bg-royal-blue transition-colors shadow-lg flex items-center">
              Submit Resume
            </a>
            <Link to="/contact" className="px-8 py-4 bg-white dark:bg-[#020A1A] border border-gray-200 dark:border-white/20 text-primary-dark-blue dark:text-white rounded-xl font-bold hover:bg-gray-50 dark:bg-[#0A1128] transition-colors">
              Contact HR Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
