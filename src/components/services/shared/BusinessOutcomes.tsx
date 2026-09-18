import { CheckCircle2 } from 'lucide-react';

interface Outcome {
  title: string;
  description: string;
}

interface BusinessOutcomesProps {
  title?: string;
  description?: string;
  outcomes: Outcome[];
}

export const BusinessOutcomes = ({
  title = "Securing Tangible Business Outcomes",
  description = "Our interventions are specifically designed to yield high-impact results that protect and enhance enterprise value.",
  outcomes
}: BusinessOutcomesProps) => {
  return (
    <section className="py-20 bg-white dark:bg-[#031B4E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start p-6 bg-gray-50 dark:bg-[#031B4E] rounded-xl border border-gray-100 dark:border-white/10 animate-up">
              <CheckCircle2 className="w-6 h-6 text-royal-blue shrink-0 mr-4" />
              <div>
                <h4 className="font-bold text-primary-dark-blue dark:text-white mb-2">{outcome.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
