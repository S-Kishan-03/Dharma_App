import React, { useState } from 'react';
import { getSpiritualGuidance } from '../services/geminiService';
import type { SpiritualGuidance } from '../types';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import { HeartIcon } from '../components/Icon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const GuidanceScreen: React.FC = () => {
  const { language } = useLanguage();
  const [userInput, setUserInput] = useState('');
  const [guidance, setGuidance] = useState<SpiritualGuidance | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchGuidance = async () => {
    if (!userInput.trim()) return;
    setIsLoading(true);
    setError(null);
    setGuidance(null);
    try {
      const fetchedGuidance = await getSpiritualGuidance(userInput, language);
      if (fetchedGuidance) {
        setGuidance(fetchedGuidance);
      } else {
        setError(translations.failedToFetchGuidance[language]);
      }
    } catch (err) {
      setError(translations.failedToFetchGuidance[language]);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold text-center">{translations.spiritualGuidance[language]}</h1>
        <p className="text-lg text-brand-warm-brown/80 dark:text-gray-400 text-center">{translations.shareYourThoughts[language]}</p>
      </div>
      
      <Card className="p-6">
        <div className="space-y-4">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={translations.yourFeelings[language]}
            className="w-full h-32 p-3 border border-brand-saffron/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-saffron dark:bg-brand-deep-blue-light dark:border-brand-gold/30 dark:text-white dark:placeholder-gray-400"
            aria-label="Your feelings or situation"
          />
          <button
            onClick={handleFetchGuidance}
            disabled={isLoading || !userInput.trim()}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-brand-saffron to-brand-marigold hover:from-brand-saffron-dark hover:to-brand-saffron focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-marigold transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <LoadingSpinner /> : (
              <>
                <HeartIcon className="w-5 h-5 mr-2 -ml-1" />
                {translations.getGuidance[language]}
              </>
            )}
          </button>
        </div>
      </Card>

      {error && <p className="text-center text-red-600 bg-red-100 dark:bg-red-900/50 dark:text-red-400 p-4 rounded-lg">{error}</p>}

      {guidance && (
        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">{translations.aiGuidance[language]}</h2>
            <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {guidance.guidance}
            </p>
          </Card>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-2">{translations.relatedStory[language]}</h2>
            <h3 className="text-xl font-semibold text-brand-warm-brown/80 dark:text-gray-400 mb-4 italic">"{guidance.story.title}"</h3>
            <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {guidance.story.narrative}
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GuidanceScreen;