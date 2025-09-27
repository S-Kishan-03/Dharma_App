import React, { useState, useEffect, useCallback } from 'react';
import { getDailyMantra } from '../services/geminiService';
import type { DailyMantra } from '../types';
import Card from '../components/Card';
import { SparklesIcon, RefreshIcon } from '../components/Icon';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { philosophyDataEn, philosophyDataHi } from '../data/philosophyData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const DailyMantraCard: React.FC = () => {
    const { language } = useLanguage();
    const [mantra, setMantra] = useState<DailyMantra | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    const fetchMantra = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const dailyMantra = await getDailyMantra(language);
            setMantra(dailyMantra);
        } catch (err) {
            setError(translations.failedToFetchMantra[language]);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [language]);

    useEffect(() => {
        fetchMantra();
    }, [fetchMantra]);

    const MantraSkeleton = () => (
        <div className="animate-pulse space-y-4">
            <div className="h-6 bg-white/30 dark:bg-white/10 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-white/30 dark:bg-white/10 rounded w-full"></div>
            <div className="h-4 bg-white/30 dark:bg-white/10 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-white/30 dark:bg-white/10 rounded w-1/4 mt-2 ml-auto"></div>
        </div>
    );

    return (
        <div 
            ref={ref}
            className={`relative bg-gradient-to-br from-brand-marigold to-brand-saffron dark:from-brand-deep-blue-light dark:to-brand-deep-blue text-white dark:border dark:border-brand-gold/30 p-8 rounded-2xl shadow-2xl my-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
             <h2 className="text-2xl font-bold font-serif mb-4 text-center text-white dark:text-brand-gold">{translations.mantraOfTheDay[language]}</h2>
             
             <button
                onClick={fetchMantra}
                disabled={loading}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={translations.refresh[language]}
             >
                <RefreshIcon className={`w-6 h-6 text-white ${loading ? 'animate-spin' : ''}`} />
             </button>
             
             {loading ? (
                <MantraSkeleton />
             ) : error ? (
                <p className="text-center text-amber-100">{error}</p>
             ) : mantra ? (
                <div className="text-center">
                    <p className="text-xl lg:text-2xl italic font-serif leading-relaxed text-brand-warm-brown dark:text-white">"{mantra.quote}"</p>
                    <p className="mt-4 text-brand-warm-brown/80 dark:text-gray-300">{mantra.meaning}</p>
                    <p className="text-right mt-4 font-semibold text-brand-warm-brown dark:text-brand-gold">- {mantra.source}</p>
                </div>
             ) : null}
        </div>
    )
}

const FundamentalBeliefs: React.FC = () => {
    const { language } = useLanguage();
    const data = language === 'hi' ? philosophyDataHi : philosophyDataEn;
    const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLHeadingElement>();
    const { ref: introRef, isVisible: isIntroVisible } = useScrollAnimation<HTMLParagraphElement>();

    return (
        <section>
            <h2 ref={titleRef} className={`text-3xl font-bold font-serif text-center text-brand-saffron-dark dark:text-brand-gold mb-4 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>{data.title}</h2>
            <p ref={introRef} className={`text-center text-lg text-brand-warm-brown/80 dark:text-gray-400 mb-10 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 ${isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>{data.introduction}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.core_concepts.map((concept, index) => (
                    <Card key={index} className="p-6 flex flex-col items-start space-y-3 bg-white/60 dark:bg-brand-deep-blue-light/80 !shadow-lg" style={{ transitionDelay: `${index * 100}ms`}}>
                        <div className="flex items-baseline space-x-3">
                           <h3 className="text-2xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{concept.term}</h3>
                           <span className="text-lg text-brand-warm-brown/60 dark:text-gray-400 font-serif">{concept.sanskrit}</span>
                        </div>
                        <p className="text-brand-warm-brown/90 dark:text-gray-300 flex-grow">{concept.definition}</p>
                        <div className="pt-4 mt-auto border-t border-brand-saffron/20 dark:border-brand-gold/20 w-full flex items-start space-x-3">
                            <SparklesIcon className="w-5 h-5 text-brand-marigold flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-brand-warm-brown/70 dark:text-gray-400 italic">{concept.significance}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

const HomeScreen: React.FC = () => {
  const { language } = useLanguage();
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="space-y-16">
      <div ref={heroRef} className={`text-center transition-all duration-700 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{translations.welcome[language]}</h1>
        <p className="mt-4 text-lg text-brand-warm-brown/80 dark:text-gray-400">{translations.explore[language]}</p>
      </div>
      
      <DailyMantraCard />

      <FundamentalBeliefs />
    </div>
  );
};

export default HomeScreen;