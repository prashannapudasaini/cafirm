import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TrustItem {
  title: string;
  description: string;
}

interface TrustCredibilityProps {
  title?: string;
  description?: string;
  items: TrustItem[];
}

export const TrustCredibility = ({
  title = "Uncompromising Standards & Trust",
  description = "Our advisory practice is strictly governed by the highest national and international regulatory frameworks.",
  items
}: TrustCredibilityProps) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-royal-blue/10 border border-royal-blue/20 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            <ShieldCheck className="w-4 h-4 text-royal-blue" />
            <span className="text-royal-blue">Regulatory Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#020A1A] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-royal-blue shrink-0 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
