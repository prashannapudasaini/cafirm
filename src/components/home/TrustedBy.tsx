

const sectors = [
  'Startups',
  'Trading Companies',
  'Manufacturers',
  'Educational Institutions',
  'NGOs',
  'Hospitality Businesses',
  'Professional Service Firms',
];

const TrustedBy = () => {
  return (
    <section className="py-6 bg-white dark:bg-[#020A1A] relative overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h3 className="text-sm font-semibold text-primary-dark-blue dark:text-white uppercase tracking-widest">
          Trusted by Businesses Across Nepal
        </h3>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        <div className="animate-marquee flex space-x-8 px-4 items-center whitespace-nowrap">
          {/* Double the elements for seamless looping */}
          {[...sectors, ...sectors].map((sector, idx) => (
            <div key={idx} className="flex items-center space-x-3 px-6 py-3 bg-gray-50 dark:bg-[#0A1128] border border-gray-100 dark:border-white/10 rounded-full shadow-sm min-w-max">
              <span className="w-2 h-2 rounded-full bg-royal-blue" />
              <span className="text-sm font-medium text-primary-dark-blue dark:text-white">{sector}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradients for smooth fade */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0A1128] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0A1128] to-transparent pointer-events-none" />
    </section>
  );
};

export default TrustedBy;
