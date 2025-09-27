
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEMPLES } from '../data/mockData';
import type { Temple } from '../types';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { MapPinIcon } from '../components/Icon';

const TemplesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const templesByState = useMemo(() => {
    return TEMPLES.reduce((acc, temple) => {
      const state = temple.state;
      if (!acc[state]) {
        acc[state] = [];
      }
      acc[state].push(temple);
      return acc;
    }, {} as Record<string, Temple[]>);
  }, []);
  
  const sortedStates = Object.keys(templesByState).sort();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{translations.sacredTemples[language]}</h1>
        <p className="mt-2 text-lg text-brand-warm-brown/80 dark:text-gray-400">{translations.exploreTemples[language]}</p>
      </div>

      <div className="space-y-12">
        {sortedStates.map((state) => (
          <div key={state}>
            <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4 border-b-2 border-brand-saffron/20 dark:border-brand-gold/20 pb-2">{state}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {templesByState[state].map((temple) => (
                <Card key={temple.id} onClick={() => navigate(`/temple/${temple.id}`)} className="p-6 flex flex-col">
                  <div className="flex-grow">
                     <h3 className="text-xl font-bold text-brand-saffron-dark dark:text-brand-gold">{temple.name}</h3>
                     <div className="flex items-center space-x-1 mt-2 text-brand-warm-brown/70 dark:text-gray-400">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{temple.location}</span>
                     </div>
                     <p className="text-brand-warm-brown/80 dark:text-gray-400 mt-2 text-sm line-clamp-3">{temple.importance}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplesScreen;