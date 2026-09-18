import type { LucideIcon } from 'lucide-react';

interface Challenge {
  icon: LucideIcon;
  iconBgColor: string; // e.g. "bg-red-50"
  iconColor: string; // e.g. "text-red-600"
  title: string;
  description: string;
}

interface BusinessChallengesProps {
  title: string;
  description: string;
  challenges: Challenge[];
}

export const BusinessChallenges = ({ title, description, challenges }: BusinessChallengesProps) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#031B4E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white dark:bg-[#031B4E] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 animate-up">
              <div className={`w-12 h-12 ${challenge.iconBgColor} rounded-xl flex items-center justify-center mb-6`}>
                <challenge.icon className={`w-6 h-6 ${challenge.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary-dark-blue dark:text-white mb-4">{challenge.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
