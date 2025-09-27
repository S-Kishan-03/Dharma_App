
import React from 'react';
import { SparklesIcon } from '../components/Icon';

interface ComingSoonProps {
    pageTitle: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ pageTitle }) => {
  return (
    <div className="text-center py-20 flex flex-col items-center justify-center h-full">
      <SparklesIcon className="w-24 h-24 text-amber-400 mb-6" />
      <h1 className="text-4xl font-bold font-serif text-amber-900 dark:text-amber-300">{pageTitle}</h1>
      <p className="mt-4 text-2xl text-gray-600 dark:text-gray-400">Coming Soon!</p>
      <p className="mt-2 text-gray-500 dark:text-gray-500 max-w-md">
        We are working hard to bring this feature to you. Stay tuned for exciting updates and new content.
      </p>
    </div>
  );
};

export default ComingSoon;