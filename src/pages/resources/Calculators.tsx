import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { Calculator, Info } from 'lucide-react';

export default function Calculators() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [salary, setSalary] = useState<number | ''>('');
  const [months, setMonths] = useState<number>(12);
  const [bonus, setBonus] = useState<number | ''>('');
  const [isMarried, setIsMarried] = useState<boolean>(false);
  const [pfContribution, setPfContribution] = useState<number | ''>('');
  const [citContribution, setCitContribution] = useState<number | ''>('');
  const [insurance, setInsurance] = useState<number | ''>('');

  // Calculation State
  const [taxResult, setTaxResult] = useState<{
    assessableIncome: number;
    deductions: number;
    taxableIncome: number;
    totalTax: number;
    slabs: { name: string; amount: number; rate: number; tax: number }[];
  } | null>(null);

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

  const calculateTax = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Calculate Gross Assessable Income
    const annualSalary = (Number(salary) || 0) * months;
    const totalBonus = Number(bonus) || 0;
    let assessableIncome = annualSalary + totalBonus;

    // 2. Allowable Deductions
    const pf = Number(pfContribution) || 0;
    const cit = Number(citContribution) || 0;
    const lifeInsurance = Math.min(Number(insurance) || 0, 40000); // Max cap for life insurance is 40,000

    // Max retirement contribution (PF + CIT) is 1/3 of assessable income or 300,000 whichever is lower
    const maxRetirement = Math.min(assessableIncome / 3, 300000);
    const actualRetirement = Math.min(pf + cit, maxRetirement);

    const totalDeductions = actualRetirement + lifeInsurance;

    // 3. Taxable Income
    let taxableIncome = assessableIncome - totalDeductions;
    if (taxableIncome < 0) taxableIncome = 0;

    // 4. Tax Slabs (FY 2080/81 limits used as proxy, can be updated)
    // Individual: 500k, 200k, 300k, 1M, >2M
    // Couple: 600k, 200k, 300k, 900k, >2M
    const limits = isMarried 
      ? [600000, 200000, 300000, 900000, Infinity] 
      : [500000, 200000, 300000, 1000000, Infinity];
    
    const rates = [0.01, 0.10, 0.20, 0.30, 0.39];
    
    let remainingIncome = taxableIncome;
    let totalTax = 0;
    const appliedSlabs = [];

    for (let i = 0; i < limits.length; i++) {
      if (remainingIncome <= 0) break;

      const taxableAtThisSlab = Math.min(remainingIncome, limits[i]);
      const taxAtThisSlab = taxableAtThisSlab * rates[i];
      
      appliedSlabs.push({
        name: `Slab ${i + 1} (${rates[i] * 100}%)`,
        amount: taxableAtThisSlab,
        rate: rates[i],
        tax: taxAtThisSlab
      });

      totalTax += taxAtThisSlab;
      remainingIncome -= taxableAtThisSlab;
    }

    setTaxResult({
      assessableIncome,
      deductions: totalDeductions,
      taxableIncome,
      totalTax,
      slabs: appliedSlabs
    });
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#020A1A] min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Financial Calculators | Resources | Jay & Ajay Associates</title>
        <meta name="description" content="Interactive Nepalese salary tax calculator and financial tools." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-[#020A1A]/50 border border-indigo-100 dark:border-white/10 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-indigo-600">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            Financial <span className="text-royal-blue">Calculators</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
            Estimate your tax liabilities accurately based on the latest Nepalese Income Tax Act provisions.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 p-4 rounded-xl text-sm text-yellow-800 dark:text-yellow-200 text-left">
            <strong>Disclaimer:</strong> This is a Nepal CA firm website. All tax calculations, rates, deductions, and legal information provided in these tools are for estimation purposes. They must be validated against currently applicable Nepal laws and regulations before making financial decisions. If information cannot be verified, clearly indicate that professional advice should be obtained.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-up mb-16">
          
          {/* Input Form */}
          <div className="bg-white dark:bg-[#0A1128] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6 flex items-center">
              Salary Tax Calculator
            </h2>
            <form onSubmit={calculateTax} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Monthly Basic Salary (NPR)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-400">NRs</span>
                    <input type="number" required value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full pl-14 pr-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white" placeholder="0" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Number of Months</label>
                  <input type="number" required value={months} onChange={e => setMonths(Number(e.target.value))} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Annual Bonus / Allowances (NPR)</label>
                <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white" placeholder="0" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Marital Status</label>
                  <select value={isMarried ? "couple" : "single"} onChange={e => setIsMarried(e.target.value === "couple")} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white">
                    <option value="single">Single</option>
                    <option value="couple">Couple</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Life Insurance Premium (NPR)</label>
                  <input type="number" value={insurance} onChange={e => setInsurance(Number(e.target.value))} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white" placeholder="0" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Annual PF Contribution (NPR)</label>
                  <input type="number" value={pfContribution} onChange={e => setPfContribution(Number(e.target.value))} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Annual CIT Contribution (NPR)</label>
                  <input type="number" value={citContribution} onChange={e => setCitContribution(Number(e.target.value))} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#131B33] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all outline-none text-primary-dark-blue dark:text-white" placeholder="0" />
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-primary-dark-blue transition-colors mt-4">
                Calculate Tax Liability
              </button>
            </form>
          </div>

          {/* Output Results */}
          <div className="bg-gray-50 dark:bg-[#131B33] border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 h-full">
            <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-6">Tax Breakdown</h2>
            
            {!taxResult ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <Calculator className="w-12 h-12 mb-4 opacity-50" />
                <p>Enter your details and click calculate to see the breakdown.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Gross Assessable Income</span>
                  <span className="text-primary-dark-blue dark:text-white font-bold text-lg">NPR {taxResult.assessableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Allowable Deductions</span>
                  <span className="text-emerald-600 font-bold text-lg">- NPR {taxResult.deductions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Net Taxable Income</span>
                  <span className="text-primary-dark-blue dark:text-white font-bold text-lg">NPR {taxResult.taxableIncome.toLocaleString()}</span>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Tax Slabs Applied</h4>
                  <div className="space-y-3">
                    {taxResult.slabs.map((slab, i) => (
                      <div key={i} className="flex justify-between items-center bg-white dark:bg-[#0A1128] p-3 rounded-lg border border-gray-100 dark:border-white/5">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{slab.name}</span>
                        <span className="text-sm font-bold text-primary-dark-blue dark:text-white">NPR {slab.tax.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-royal-blue/10 dark:bg-royal-blue/20 p-6 rounded-xl border border-royal-blue/20">
                  <div className="flex justify-between items-center">
                    <span className="text-royal-blue font-bold text-lg">Total Annual Tax</span>
                    <span className="text-royal-blue font-bold text-3xl">NPR {taxResult.totalTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm text-royal-blue/80">
                    <span>Estimated Monthly Tax</span>
                    <span>NPR {Math.round(taxResult.totalTax / months).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-start mt-4 text-xs text-gray-500">
                  <Info className="w-4 h-4 mr-2 shrink-0" />
                  <p>This is an estimate based on standard tax slabs. Actual tax liability may vary based on specific exemptions, foreign tax credits, and exact SSF/CIT rules.</p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Future Calculators Expansion */}
        <div className="mb-24 animate-up">
          <h2 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-8 border-b border-gray-100 dark:border-white/10 pb-4">
            More Tools (Coming Soon)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['VAT Calculator', 'TDS Calculator', 'Loan EMI Calculator', 'SSF Contribution Calculator', 'Corporate Tax Estimator', 'Depreciation Calculator'].map((tool, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-[#0A1128] border border-gray-100 dark:border-white/10 rounded-xl p-6 flex flex-col items-center text-center opacity-70">
                <Calculator className="w-8 h-8 text-gray-400 mb-4" />
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">{tool}</h3>
                <span className="text-xs text-royal-blue font-bold uppercase tracking-wider mt-2">In Development</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Request CTA */}
        <div className="animate-up bg-primary-dark-blue rounded-[2rem] p-10 md:p-14 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Need precise calculations?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find the calculator you're looking for, or need validated calculations for your corporate tax return? Speak with our advisory team.
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
            Contact Our Advisors
          </a>
        </div>
      </div>
    </div>
  );
}
