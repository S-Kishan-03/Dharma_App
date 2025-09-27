import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEITIES } from '../data/mockData';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { useDeityContent } from '../contexts/DeityContentContext';
import { translations } from '../lib/translations';
import { staticDeityData } from '../data/deityData';

const DeitiesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { prayers } = useDeityContent();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{translations.godsAndDeities[language]}</h1>
        <p className="mt-2 text-lg text-brand-warm-brown/80 dark:text-gray-400">{translations.discoverDivine[language]}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DEITIES.map((deity) => {
          const hasStaticContent = !!staticDeityData[deity.id];
          const hasAiContent = !!prayers[deity.id];
          const hasContent = hasStaticContent || hasAiContent;
          return (
             <Card key={deity.id} onClick={() => navigate(`/deity/${deity.id}`)} className="p-6 text-center relative">
              {hasContent && (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full" title={translations.contentAvailable[language]}></div>
              )}
              <h3 className="text-xl font-bold text-brand-saffron-dark dark:text-brand-gold">{deity.name}</h3>
              <p className="text-brand-warm-brown/80 dark:text-gray-400 mt-2">{deity.description}</p>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default DeitiesScreen;
