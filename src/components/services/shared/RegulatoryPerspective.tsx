import { ShieldCheck } from 'lucide-react';

interface Regulation {
  title: string;
  description: string;
}

interface RegulatoryPerspectiveProps {
  title?: string;
  description?: string;
  regulations: Regulation[];
  quoteText: string;
}

export const RegulatoryPerspective = ({
  title = "Navigating Compliance Frameworks",
  description = "We translate dense regulatory code into actionable, streamlined operational procedures, ensuring compliance acts as a shield rather than a costly administrative burden.",
  regulations,
  quoteText
}: RegulatoryPerspectiveProps) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-6 animate-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-6">
              {regulations.map((reg, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-bold text-primary-dark-blue dark:text-white">{reg.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    {reg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-royal-blue rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
            <div className="bg-white dark:bg-[#020A1A] p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100 dark:border-white/10">
              <ShieldCheck className="w-12 h-12 text-royal-blue mb-6" />
              <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">The Strategic Implication</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "{quoteText}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
