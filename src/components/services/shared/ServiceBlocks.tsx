import { CheckCircle2 } from 'lucide-react';

interface ServiceBlock {
  title: string;
  description: string;
  strategicPurpose: string;
  clientBenefits: string;
  useCase: string;
  image: string;
}

interface ServiceBlocksProps {
  title?: string;
  blocks: ServiceBlock[];
}

export const ServiceBlocks = ({ title = "Strategic Capabilities", blocks }: ServiceBlocksProps) => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#031B4E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-royal-blue rounded-full"></div>
        </div>

        <div className="space-y-16">
          {blocks.map((block, index) => {
            const isEven = index % 2 === 1; // 0 is false, 1 is true
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-up">
                <div className={`${isEven ? 'order-2 lg:order-1' : ''} bg-gray-100 dark:bg-[#131B33] rounded-2xl aspect-[4/3] overflow-hidden`}>
                  <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
                </div>
                <div className={`${isEven ? 'order-1 lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-primary-dark-blue dark:text-white mb-4">{block.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {block.description}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5" /> 
                      <span className="text-gray-600 dark:text-gray-400 text-sm"><span className="text-gray-700 dark:text-gray-300 font-medium">Strategic Purpose:</span> {block.strategicPurpose}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5" /> 
                      <span className="text-gray-600 dark:text-gray-400 text-sm"><span className="text-gray-700 dark:text-gray-300 font-medium">Client Benefits:</span> {block.clientBenefits}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5" /> 
                      <span className="text-gray-600 dark:text-gray-400 text-sm"><span className="text-gray-700 dark:text-gray-300 font-medium">Use Case:</span> {block.useCase}</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
