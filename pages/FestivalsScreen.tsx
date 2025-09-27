
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FESTIVALS } from '../data/mockData';
import type { Festival } from '../types';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const FestivalsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const festivalsByMonth = useMemo(() => {
    return FESTIVALS.reduce((acc, festival) => {
      const month = festival.month;
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(festival);
      return acc;
    }, {} as Record<string, Festival[]>);
  }, []);

  const monthOrder = [
    "January", 
    "February",
    "February/March", 
    "March", 
    "March/April", 
    "April",
    "April/May",
    "May",
    "August", 
    "August/September", 
    "September/October", 
    "October/November"
  ];
  
  const sortedMonths = monthOrder.filter(month => festivalsByMonth[month]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{translations.majorFestivals[language]}</h1>
        <p className="mt-2 text-lg text-brand-warm-brown/80 dark:text-gray-400">{translations.exploreTraditions[language]}</p>
      </div>

      <div className="space-y-12">
        {sortedMonths.map((month) => (
          <div key={month}>
            <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4 border-b-2 border-brand-saffron/20 dark:border-brand-gold/20 pb-2">{month}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {festivalsByMonth[month].map((festival) => (
                <Card key={festival.id} onClick={() => navigate(`/festival/${festival.id}`)} className="p-6 flex flex-col">
                  <div className="flex-grow">
                     <h3 className="text-xl font-bold text-brand-saffron-dark dark:text-brand-gold">{festival.name}</h3>
                     <p className="text-brand-warm-brown/80 dark:text-gray-400 mt-2">{festival.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-brand-saffron/10 dark:border-brand-gold/10">
                      <p className="text-sm font-semibold text-brand-warm-brown/60 dark:text-gray-500">{translations.celebratedIn[language]}:</p>
                      <p className="text-sm text-brand-warm-brown dark:text-gray-300">{festival.states.join(', ')}</p>
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

export default FestivalsScreen;