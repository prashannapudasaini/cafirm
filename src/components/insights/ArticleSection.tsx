import type { ReactNode } from 'react';

interface ArticleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const ArticleSection = ({ id, title, children }: ArticleSectionProps) => {
  return (
    <section id={id} className="scroll-mt-32 mb-12 animate-up">
      <h2 className="text-3xl font-bold text-primary-dark-blue dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
        {title}
      </h2>
      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
};
