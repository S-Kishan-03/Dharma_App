import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FESTIVALS } from '../data/mockData';
import type { FestivalStory } from '../types';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import { SparklesIcon } from '../components/Icon';
import { useLanguage } from '../contexts/LanguageContext';
import { useFestivalContent } from '../contexts/FestivalContentContext';
import { translations } from '../lib/translations';

const FestivalDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const festival = FESTIVALS.find((f) => f.id === id);
  const { language } = useLanguage();
  const { stories, fetchStoryForFestival, isLoading: isContextLoading } = useFestivalContent();
  
  const [story, setStory] = useState<FestivalStory | null>(stories[id!] || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStory(stories[id!] || null);
  }, [stories, id]);


  const handleFetchStory = async () => {
    if (!festival) return;
    setIsLoading(true);
    setError(null);
    try {
      const fetchedStory = await fetchStoryForFestival(festival.id, festival.name, language);
      if (fetchedStory) {
        setStory(fetchedStory);
      } else {
        setError(translations.failedToFetchStory[language]);
      }
    } catch (err) {
      setError(translations.failedToFetchStory[language]);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!festival) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold dark:text-white">{translations.festivalNotFound[language]}</h1>
        <Link to="/festivals" className="mt-4 inline-block text-brand-saffron hover:underline">
          {translations.backToFestivals[language]}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{festival.name}</h1>
          <p className="text-lg text-brand-warm-brown/70 dark:text-gray-400 italic mt-1">{festival.description}</p>
        </div>
        <div className="mt-6 flex justify-center divide-x divide-brand-saffron/20 dark:divide-brand-gold/20 text-center">
            <div className="px-4">
                <p className="text-sm font-semibold text-brand-warm-brown/60 dark:text-gray-500">{translations.month[language]}</p>
                <p className="font-medium text-brand-saffron-dark dark:text-brand-gold">{festival.month}</p>
            </div>
            <div className="px-4">
                <p className="text-sm font-semibold text-brand-warm-brown/60 dark:text-gray-500">{translations.celebratedIn[language]}</p>
                <p className="font-medium text-brand-saffron-dark dark:text-brand-gold">{festival.states.join(', ')}</p>
            </div>
        </div>
      </Card>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold mb-6 text-left">
            {translations.storyOf[language]} {festival.name}
        </h2>
        
        {!story && !isLoading && (
          <div className="text-center">
            <button
              onClick={handleFetchStory}
              disabled={isContextLoading}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-brand-saffron to-brand-marigold hover:from-brand-saffron-dark hover:to-brand-saffron focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-marigold transition-transform transform hover:scale-105 disabled:opacity-50"
            >
              <SparklesIcon className="w-5 h-5 mr-2 -ml-1" />
              {translations.discoverStory[language]}
            </button>
          </div>
        )}
        
        {isLoading && <LoadingSpinner />}

        {error && <p className="text-center text-red-600 bg-red-100 dark:bg-red-900/50 dark:text-red-400 p-4 rounded-lg">{error}</p>}

        {story && (
          <Card className="p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-2">{story.title}</h3>
              <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line">{story.story}</p>
            </div>
             <div className="w-24 h-px bg-brand-saffron/20 dark:bg-brand-gold/20 my-4 mx-auto"></div>
            <div>
              <h3 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-2">{language === 'hi' ? 'महत्व' : 'Significance'}</h3>
              <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line">{story.significance}</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FestivalDetailScreen;