interface ProcessStep {
  title: string;
  description: string;
}

interface AdvisoryProcessProps {
  title?: string;
  description?: string;
  steps: ProcessStep[];
}

export const AdvisoryProcess = ({
  title = "Our Professional Advisory Process",
  description = "A systematic, deeply analytical approach engineered to deliver clarity, mitigate risk, and unlock enterprise value.",
  steps
}: AdvisoryProcessProps) => {
  return (
    <section className="py-20 bg-deep-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center animate-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative animate-up">
              <div className="text-5xl font-bold text-white/10 mb-4">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-royal-blue mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              {idx < 4 && <div className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-white/20 dark:bg-[#020A1A]/20"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
