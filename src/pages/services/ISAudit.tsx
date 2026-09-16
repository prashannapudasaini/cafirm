import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, MonitorCheck, ShieldAlert, ServerCrash, Database, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Is an IS Audit mandatory for all companies in Nepal?",
    a: "While not mandatory for all, the Nepal Rastra Bank (NRB) strictly mandates comprehensive IS Audits for all Banks and Financial Institutions (BFIs). Additionally, payment service providers (PSPs) and payment system operators (PSOs) must undergo rigorous IT audits to maintain their operating licenses."
  },
  {
    q: "How frequently should an IS Audit be conducted?",
    a: "Regulatory frameworks generally require an annual IS Audit. However, best practice dictates that an audit should also be triggered after any major system upgrade, migration to a new core banking system (CBS), or following a significant cybersecurity incident."
  },
  {
    q: "Does your IS Audit cover cloud infrastructure?",
    a: "Yes. As Nepalese enterprises increasingly adopt cloud solutions (AWS, Azure, or local data centers), our audits extend to reviewing cloud security configurations, data residency compliance, and third-party vendor risk management."
  },
  {
    q: "What framework do you use for your IS Audits?",
    a: "Our methodology is aligned with global standards such as ISACA's COBIT framework and ISO/IEC 27001, rigorously adapted to meet the specific requirements of the NRB IT Guidelines and the Electronic Transactions Act, 2063."
  }
];

export default function ISAudit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.animate-up' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* 1. Advisory Hero */}
      <section className="relative bg-primary-dark-blue text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue via-primary-dark-blue/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <MonitorCheck className="w-4 h-4 text-royal-blue" />
              <span>Technology & Risk Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
              Information Systems <br />
              <span className="text-royal-blue">(IS) Audit</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              In an era of rapid digital transformation, technological vulnerabilities are your greatest enterprise risk. We provide uncompromising IT audits to secure your digital assets and ensure strict compliance with central bank directives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-royal-blue text-white rounded-xl font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center">
                Assess Your IT Vulnerabilities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
              The Digital Threat Landscape
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As Nepalese enterprises rapidly adopt digital payment gateways and cloud infrastructure, the attack surface has expanded exponentially. Boardrooms can no longer treat IT security as solely an IT department problem—it is a critical governance issue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Cybersecurity Breaches</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Ransomware attacks and unauthorized access can instantly cripple operations. The reputational and financial damage resulting from compromised customer data is often irreversible for financial institutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <ServerCrash className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">System Outages</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Inadequate Business Continuity Planning (BCP) and Disaster Recovery (DR) protocols leave enterprises highly vulnerable to extended downtimes during natural disasters or hardware failures, halting revenue generation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-up">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Regulatory Penalties</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The Nepal Rastra Bank explicitly mandates rigorous IT audits for BFIs. Failure to maintain compliant IT governance frameworks invites severe operational restrictions and massive regulatory fines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-4">
              Comprehensive IS Auditing
            </h2>
            <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">IT Governance & Risk Assessment</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We evaluate the strategic alignment of your IT infrastructure with your business objectives. Our experts assess IT steering committee effectiveness, IT policy frameworks, and overall enterprise risk management, ensuring the board has true visibility into technological risks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Bridge the communication gap between technical IT teams and executive management.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Auditing the IT governance framework of a newly merged Class 'A' Commercial Bank.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="IT Governance" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" alt="Network Security" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Network & Cybersecurity Audits</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We conduct rigorous Vulnerability Assessments and Penetration Testing (VAPT) to expose exploitable flaws in your network architecture, applications, and APIs. We review firewall configurations, encryption standards, and user access management protocols.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Prevent unauthorized access and data breaches before they occur.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Security audit of a high-volume digital wallet app (PSP) prior to its public launch.</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Business Continuity (BCP) & DR Audits</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We aggressively test the viability of your Disaster Recovery plans. We audit data backup frequencies, server redundancy, and RTO/RPO (Recovery Time/Point Objectives) to guarantee your business can survive catastrophic system failures.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Strategic Purpose:</span> Ensure absolute operational resilience against physical or cyber disasters.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"/> <span className="text-gray-700 font-medium">Use Case:</span> Verifying the failover capabilities of a broker's trading platform to a secondary data center.</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" alt="Disaster Recovery" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 bg-deep-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our IS Audit Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We leverage Certified Information Systems Auditors (CISA) to deploy a risk-based approach, focusing resources on the most critical digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Planning", desc: "Understanding the enterprise architecture, IT environment, and mapping critical business processes." },
              { title: "Risk Assessment", desc: "Identifying vulnerabilities and inherent risks within the network, applications, and databases." },
              { title: "Control Testing", desc: "Executing rigorous tests on general IT controls (ITGC) and automated application controls." },
              { title: "VAPT Execution", desc: "Conducting authorized simulated cyberattacks to validate the effectiveness of security defenses." },
              { title: "Remediation", desc: "Delivering actionable, prioritized recommendations to close identified security gaps." }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-up">
                <div className="text-5xl font-bold text-white/10 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-white/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Regulatory Perspective */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 animate-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-6">
                The Regulatory Mandate
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In Nepal, information security is no longer an optional best practice; it is aggressively enforced by statutory bodies to protect the financial ecosystem.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">NRB IT Guidelines</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    The central bank explicitly requires all BFIs to conduct comprehensive, independent IS Audits. Our audits rigorously verify compliance with NRB mandates regarding core banking security, password policies, and data encryption.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Electronic Transactions Act, 2063</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We ensure that your digital signatures, electronic record keeping, and online transaction processing strictly adhere to the legal requirements of the ETA, mitigating legal liabilities in digital commerce.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-dark-blue">Data Privacy Directives</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    With increasing scrutiny on data protection, our audits verify that customer PII (Personally Identifiable Information) is handled, stored, and transmitted in compliance with prevailing privacy laws.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                <MonitorCheck className="w-12 h-12 text-royal-blue mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">The Strategic Implication</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "A proactive IS Audit is infinitely less expensive than managing the catastrophic fallout of a data breach or a central bank sanction. We turn IT security from a cost center into a strategic pillar of stakeholder trust."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden animate-up">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-100 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-primary-dark-blue pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="py-24 bg-primary-dark-blue text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Fortify Your Digital Infrastructure
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Don't wait for a breach to expose your vulnerabilities. Partner with our CISA-certified auditors to secure your enterprise today.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Schedule an IS Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
