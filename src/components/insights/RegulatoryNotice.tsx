import { AlertTriangle } from 'lucide-react';

export const RegulatoryNotice = () => {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 my-10 rounded-r-xl">
      <div className="flex items-start">
        <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 mr-4 shrink-0 mt-1" />
        <div>
          <h4 className="text-amber-800 dark:text-amber-400 font-bold mb-2">Regulatory Disclaimer</h4>
          <p className="text-amber-700 dark:text-amber-300/80 text-sm leading-relaxed">
            This article is intended for general informational purposes only and should not be considered professional, legal, tax, or financial advice. Regulations, including those from the Nepal Rastra Bank (NRB), Inland Revenue Department (IRD), and other statutory bodies, are subject to frequent changes. Businesses should seek formal professional guidance from Jay & Ajay Associates based on their specific corporate circumstances before making financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
};
