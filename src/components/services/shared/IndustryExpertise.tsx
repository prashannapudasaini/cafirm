interface Industry {
  title: string;
  description: string;
}

interface IndustryExpertiseProps {
  title?: string;
  description?: string;
  industries: Industry[];
}

export const IndustryExpertise = ({
  title = "Sector-Specific Intelligence",
  description = "We deploy specialized advisory teams possessing deep, native experience within Nepal’s most highly regulated and complex industries.",
  industries
}: IndustryExpertiseProps) => {
  return (
    <section className="py-20 bg-primary-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            {title}
          </h2>
          <div className="w-20 h-1 bg-royal-blue rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="border-l-2 border-royal-blue pl-6 animate-up">
              <h3 className="text-xl font-bold mb-2">{ind.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
