import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Award,
  Building,
  Target,
  Shield,
  Send,
  CheckCircle2
} from 'lucide-react';


const benefits = [
  {
    title: 'Diverse Client Engagements',
    icon: Building,
    description: 'Gain invaluable experience across audit, taxation, accounting, compliance, risk advisory, business consulting, and regulatory matters.'
  },
  {
    title: 'Rigorous Technical Training',
    icon: BookOpen,
    description: 'Continuous professional education covering ICAN standards, NFRS, NSA, Income Tax Act, and VAT Regulations.'
  },
  {
    title: 'Merit-Based Progression',
    icon: TrendingUp,
    description: 'Clear, structured career paths from Intern to Partner, governed by objective performance metrics and technical proficiency.'
  },
  {
    title: 'Cross-Disciplinary Advisory',
    icon: Users,
    description: 'Collaborate with audit, tax, and advisory specialists, developing a holistic understanding of corporate finance.'
  }
];

const values = [
  {
    title: 'Integrity & Objectivity',
    icon: Shield,
    description: 'Upholding the highest ethical standards in all engagements, ensuring independent and unbiased professional judgment.'
  },
  {
    title: 'Technical Excellence',
    icon: Award,
    description: 'Commitment to continuous learning and mastery of evolving accounting standards, tax legislation, and corporate law.'
  },
  {
    title: 'Client Confidentiality',
    icon: Briefcase,
    description: 'Maintaining strict data security and discretion when handling sensitive corporate financial information.'
  },
  {
    title: 'Professional Skepticism',
    icon: Target,
    description: 'Applying a questioning mind and critical assessment to audit evidence and financial reporting structures.'
  }
];

const careerPath = [
  { level: 'Intern / Trainee', desc: 'Foundational learning, executing audit procedures, and basic compliance tasks under supervision.' },
  { level: 'Associate', desc: 'Developing technical proficiency in tax computations, regulatory filings, and field audits.' },
  { level: 'Senior Associate', desc: 'Leading field engagements, handling complex assignments, and guiding junior staff.' },
  { level: 'Assistant Manager', desc: 'Transitioning to leadership, managing client relationships and reviewing technical deliverables.' },
  { level: 'Manager', desc: 'Overseeing multiple engagements, ensuring technical quality, and managing team deployment.' },
  { level: 'Senior Manager', desc: 'Driving practice growth, advanced advisory, and high-level strategic risk management.' },
  { level: 'Director / Practice Lead', desc: 'Leading service lines, extensive business development, and executive client management.' },
  { level: 'Partner', desc: 'Firm leadership, ultimate signing authority, and strategic direction of the practice.' }
];

const qualities = [
  'Professional integrity',
  'Analytical thinking',
  'Attention to detail',
  'Commitment to learning',
  'Communication skills',
  'Client-focused mindset',
  'Problem solving',
  'Team collaboration'
];

// Assuming no active openings right now to show the fallback state.
const openings: Array<{
  role: string;
  department: string;
  experience: string;
  qualification: string;
  type: string;
  location: string;
}> = [];

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'experienced' | 'graduates'>('experienced');

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
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen pt-32 pb-10 md:pb-16">
      <Helmet>
        <title>Careers | Jay & Ajay Associates - CA Firm Jobs Nepal</title>
        <meta name="description" content="Build a long-term career of impact at Jay & Ajay Associates. Explore professional opportunities in Audit, Tax, and Advisory in Nepal." />
      </Helmet>

      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <div className="text-center max-w-4xl mx-auto animate-up">
          <span className="px-4 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue text-sm font-bold tracking-wide uppercase mb-6 inline-block">
            Professional Careers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-8 leading-tight">
            Build a Career of <span className="text-royal-blue">Impact</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-10">
            Join a firm defined by technical excellence and professional integrity. We provide the structure, mentorship, and industry exposure necessary to develop the next generation of financial leaders in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg">
              View Current Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* 2. Our People, Our Strength */}
      <div className="bg-gray-50 dark:bg-[#0A1128] py-10 md:py-16 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center animate-up">
          <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-6">Our People, Our Strength</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            The quality of our work is driven by the quality of our people. We believe in developing professionals who combine technical expertise, ethical judgment, and business insight to help clients navigate complexity in the Nepalese corporate landscape.
          </p>
        </div>
      </div>

      {/* 3. Why Join Us */}
      <div className="py-10 md:py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-4">Why Jay & Ajay Associates?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We invest heavily in the professional advancement of our personnel, providing a platform where rigorous standards meet diverse industry exposure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="animate-up bg-white dark:bg-[#131B33] rounded-2xl p-8 border border-gray-100 dark:border-white/10 hover:border-royal-blue/30 transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#020A1A] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-royal-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. What We Value in Professionals */}
      <div className="bg-primary-dark-blue py-10 md:py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">What We Value in Professionals</h2>
            <p className="text-gray-300">
              We look for individuals who demonstrate a strong foundation in these core attributes, essential for advisory excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {qualities.map((quality, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-royal-blue shrink-0" />
                <span className="font-medium text-sm text-gray-200">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Career Path Framework */}
      <div className="py-10 md:py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-4">Career Progression Framework</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A transparent and structured pathway for long-term career growth, rewarding technical mastery and leadership capability.
          </p>
        </div>
        
        <div className="relative animate-up max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-royal-blue/20 via-royal-blue to-royal-blue/20 -translate-x-1/2"></div>
          <div className="space-y-12 relative">
            {careerPath.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="w-12 h-12 absolute left-4 md:left-1/2 -translate-x-1/2 rounded-full bg-white dark:bg-[#020A1A] border-4 border-royal-blue flex items-center justify-center z-10 shadow-lg">
                  <span className="text-royal-blue font-bold">{idx + 1}</span>
                </div>
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-gray-50 dark:bg-[#0A1128] p-6 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-royal-blue/50 transition-colors">
                    <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-2">{step.level}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6 & 7. Professional Development & Graduate Program */}
      <div className="bg-gray-50 dark:bg-[#0A1128] py-10 md:py-16 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-12 animate-up">
            <div className="flex bg-white dark:bg-[#131B33] p-1 rounded-xl shadow-sm border border-gray-200 dark:border-white/10 mb-12">
              <button 
                onClick={() => setActiveTab('experienced')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeTab === 'experienced' ? 'bg-royal-blue text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-primary-dark-blue dark:hover:text-white'}`}
              >
                Experienced Professionals
              </button>
              <button 
                onClick={() => setActiveTab('graduates')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeTab === 'graduates' ? 'bg-royal-blue text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-primary-dark-blue dark:hover:text-white'}`}
              >
                Students & Graduates
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-up">
            {activeTab === 'experienced' ? (
              <>
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-6">Continuous Professional Development</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    We recognize that maintaining advisory excellence requires constant learning. We support our qualified professionals through structured Continuing Professional Education (CPE), providing exposure to complex engagements that refine technical expertise.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-royal-blue/10 flex items-center justify-center mr-4 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-royal-blue" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Extensive exposure to ICAN standards, NFRS, and NSA updates.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-royal-blue/10 flex items-center justify-center mr-4 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-royal-blue" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Practical involvement in Business Advisory Projects and Corporate Compliance.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-royal-blue/10 flex items-center justify-center mr-4 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-royal-blue" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Direct mentorship from Senior Partners on practice management and firm operations.</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Professional Development" className="w-full h-full object-cover" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-6">Foundation of Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    We welcome CA Students, ACCA Students, BBS/BBA/BBM/BIM Graduates, MBA Graduates, and Finance & Accounting Students to begin their professional journey with us.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-royal-blue/10 flex items-center justify-center mr-4 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-royal-blue" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Comprehensive on-the-job training in auditing, accounting, and tax filing.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-royal-blue/10 flex items-center justify-center mr-4 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-royal-blue" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Study leave policies aligned with ICAN, ACCA, and university requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-royal-blue/10 flex items-center justify-center mr-4 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-royal-blue" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Rotations across Audit, Tax, and Advisory departments for holistic development.</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1000" alt="Graduate Training" className="w-full h-full object-cover" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 8. Core Values */}
      <div className="py-10 md:py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-4">Firm Values & Ethics</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our reputation is our most valuable asset. We expect every member of our firm to embody these professional principles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="animate-up p-8 border-l-2 border-royal-blue bg-gray-50 dark:bg-[#0A1128] rounded-r-2xl">
                <Icon className="w-8 h-8 text-royal-blue mb-4" />
                <h3 className="text-lg font-bold text-primary-dark-blue dark:text-white mb-2">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* 9. Application Process */}
      <div className="bg-gray-50 dark:bg-[#0A1128] py-10 md:py-16 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-4">The Application Process</h2>
            <p className="text-gray-600 dark:text-gray-400">
              A transparent, merit-based selection process designed to assess technical competence and professional alignment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Application Review', desc: 'Initial screening of academic credentials, professional qualifications, and relevant experience.' },
              { step: '02', title: 'Technical Assessment', desc: 'Written or situational assessment evaluating proficiency in auditing standards and tax laws.' },
              { step: '03', title: 'Partner Interview', desc: 'In-depth discussion assessing professional judgment, ethics, and long-term career alignment.' },
              { step: '04', title: 'Offer & Onboarding', desc: 'Formal offer extension followed by a structured orientation into the firm\'s methodologies.' }
            ].map((process, idx) => (
              <div key={idx} className="animate-up relative">
                {idx !== 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gray-300 dark:bg-gray-700"></div>}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-[#020A1A] border-4 border-royal-blue flex items-center justify-center text-xl font-bold text-primary-dark-blue dark:text-white mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark-blue dark:text-white mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10. Open Opportunities */}
      <div id="open-roles" className="py-10 md:py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-up">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary-dark-blue dark:text-white mb-4">Current Opportunities</h2>
            <p className="text-gray-600 dark:text-gray-400">Review our open positions and submit your application.</p>
          </div>
        </div>

        {openings.length > 0 ? (
          <div className="space-y-4 animate-up">
            {openings.map((job, index) => (
              <div key={index} className="group bg-white dark:bg-[#020A1A] border border-gray-200 dark:border-white/20 rounded-2xl p-6 md:p-8 hover:border-royal-blue hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-3 group-hover:text-royal-blue transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium border border-gray-200 dark:border-white/5">
                      {job.department}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium border border-gray-200 dark:border-white/5">
                      {job.experience}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium border border-gray-200 dark:border-white/5">
                      {job.qualification}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#131B33] px-3 py-1 rounded-md font-medium border border-gray-200 dark:border-white/5">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="w-full md:w-auto px-6 py-3 bg-white dark:bg-[#020A1A] border border-gray-300 dark:border-white/20 text-primary-dark-blue dark:text-white font-bold rounded-xl group-hover:bg-royal-blue group-hover:border-royal-blue group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-white/10 rounded-2xl p-12 text-center animate-up">
            <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">We currently have no active vacancies.</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              However, we welcome applications from talented professionals interested in future opportunities. Please join our Talent Community below, and our HR team will reach out when a suitable position aligns with your profile.
            </p>
          </div>
        )}
      </div>

      {/* 11. Talent Community Form & Contact CTA */}
      <div className="max-w-7xl mx-auto px-6 animate-up">
        <div className="bg-primary-dark-blue rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-white">
              <Users className="w-4 h-4" />
              <span>Talent Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We are constantly expanding our practice areas. Submit your professional profile, and our Talent Acquisition team will contact you when an opportunity matching your expertise arises.
            </p>
            <div className="flex items-center space-x-4">
              <a href="mailto:hr@jaa.com.np" className="text-white hover:text-royal-blue transition-colors flex items-center font-semibold">
                Direct Contact: hr@jaa.com.np <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-white dark:bg-[#020A1A] p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10">
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-6">Submit Your Profile</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all text-primary-dark-blue dark:text-white" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all text-primary-dark-blue dark:text-white" placeholder="email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Area of Interest</label>
                  <select className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all text-primary-dark-blue dark:text-white">
                    <option>Audit & Assurance</option>
                    <option>Taxation & Regulatory</option>
                    <option>Corporate Advisory</option>
                    <option>Accounting & Compliance</option>
                    <option>Articleship / Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn Profile / Portfolio</label>
                  <input type="url" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all text-primary-dark-blue dark:text-white" placeholder="https://linkedin.com/in/..." />
                </div>
                <button type="button" className="w-full py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center mt-2">
                  Join Talent Community <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
