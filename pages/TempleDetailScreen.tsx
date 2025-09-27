
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TEMPLES } from '../data/mockData';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { MapPinIcon, SparklesIcon, CalendarIcon, BookOpenIcon } from '../components/Icon';

const TempleDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const temple = TEMPLES.find((t) => t.id === id);
  const { language } = useLanguage();

  if (!temple) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold dark:text-white">{translations.templeNotFound[language]}</h1>
        <Link to="/temples" className="mt-4 inline-block text-brand-saffron hover:underline">
          {translations.backToTemples[language]}
        </Link>
      </div>
    );
  }

  const DetailItem: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({ icon, label, value }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 text-brand-saffron dark:text-brand-gold mt-1">{icon}</div>
        <div>
            <p className="font-semibold text-brand-warm-brown/80 dark:text-gray-400">{label}</p>
            <p className="text-brand-warm-brown dark:text-gray-200">{value}</p>
        </div>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="p-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{temple.name}</h1>
          <div className="mt-2 inline-flex items-center space-x-2 text-lg text-brand-warm-brown/70 dark:text-gray-400">
            <MapPinIcon className="w-5 h-5" />
            <span>{temple.location}, {temple.state}</span>
          </div>
          <div className="mt-4 text-lg text-brand-warm-brown/90 dark:text-gray-300">
            <span className="font-semibold">{translations.deity[language]}:</span> {temple.deity}
          </div>
        </div>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">{translations.importance[language]}</h2>
        <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed">
          {temple.importance}
        </p>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">{translations.story[language]}</h2>
        <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {temple.story}
        </p>
      </Card>

      <Card className="p-8 space-y-6">
          <DetailItem icon={<SparklesIcon className="w-5 h-5"/>} label={translations.famousFor[language]} value={temple.famousFor} />
          <div className="w-full h-px bg-brand-saffron/10 dark:bg-brand-gold/10"></div>
          <DetailItem icon={<CalendarIcon className="w-5 h-5"/>} label={translations.bestTimeToVisit[language]} value={temple.bestTimeToVisit} />
          <div className="w-full h-px bg-brand-saffron/10 dark:bg-brand-gold/10"></div>
          <DetailItem icon={<BookOpenIcon className="w-5 h-5"/>} label={translations.rituals[language]} value={temple.rituals} />
      </Card>
    </div>
  );
};

export default TempleDetailScreen;