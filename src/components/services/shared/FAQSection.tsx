import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQ[];
}

export const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Expert guidance on mitigating enterprise risk and navigating complex compliance mandates.",
  faqs
}: FAQSectionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#031B4E]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-dark-blue dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-[#031B4E] border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden animate-up">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 dark:bg-[#031B4E] transition-colors focus:outline-none"
              >
                <span className="font-semibold text-primary-dark-blue dark:text-white pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
