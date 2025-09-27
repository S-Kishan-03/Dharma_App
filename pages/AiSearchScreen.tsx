import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getAiSearchResponse } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import { translations } from '../lib/translations';

const AiSearchScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { language } = useLanguage();

  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      const fetchResult = async () => {
        setIsLoading(true);
        setError(null);
        setResult(null);
        try {
          const response = await getAiSearchResponse(query, language);
          if (response) {
            setResult(response);
          } else {
            setError(translations.failedToFetchGuidance[language]); // Reusing translation
          }
        } catch (err) {
          setError(translations.failedToFetchGuidance[language]);
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchResult();
    }
  }, [query, language]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">
          {translations.aiSearch[language]}
        </h1>
        {query && <p className="mt-2 text-lg text-brand-warm-brown/80 dark:text-gray-400">{translations.showingResultsFor[language]} "{query}"</p>}
      </div>

      {isLoading && (
          <div className="flex justify-center py-10">
            <LoadingSpinner />
          </div>
      )}

      {error && (
        <Card className="p-6">
          <p className="text-center text-red-600 dark:text-red-400">{error}</p>
        </Card>
      )}

      {!query && !isLoading && (
        <Card className="p-6 text-center">
            <p>{translations.performASearch[language]}</p>
            <Link to="/" className="mt-4 inline-block text-brand-saffron hover:underline">
                {translations.backToHome[language]}
            </Link>
        </Card>
      )}
      
      {result && (
        <Card className="p-8">
          <div className="max-w-none">
            <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {result}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AiSearchScreen;