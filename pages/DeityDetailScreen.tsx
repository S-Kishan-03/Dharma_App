import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DEITIES, TEMPLES } from '../data/mockData';
import { staticDeityData } from '../data/deityData';
import type { Deity, DeityPrayers, StaticDeityInfo } from '../types';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import { SparklesIcon, SaveIcon, UploadIcon, MapPinIcon } from '../components/Icon';
import { useLanguage } from '../contexts/LanguageContext';
import { useDeityContent } from '../contexts/DeityContentContext';
import { translations } from '../lib/translations';

// =================================================================
// Reusable Static Content Component for all Deities
// =================================================================
const StaticDeityDetailContent: React.FC<{ deity: Deity; deityInfo: StaticDeityInfo }> = ({ deity, deityInfo }) => {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('stories');
    const navigate = useNavigate();

    const tabClass = (tabName: string) => `px-4 py-2 font-medium rounded-md transition-colors ${activeTab === tabName ? 'bg-brand-saffron/20 text-brand-saffron-dark dark:bg-brand-gold/20 dark:text-brand-gold' : 'hover:bg-brand-saffron/10 dark:hover:bg-brand-gold/10'}`;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{deityInfo.name}</h1>
                    <p className="text-lg text-brand-warm-brown/70 dark:text-gray-400 italic mt-1">{deityInfo.description}</p>
                </div>
                 <div className="w-24 h-px bg-brand-saffron/30 dark:bg-brand-gold/30 my-6 mx-auto"></div>
                <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed text-center">{deityInfo.other_names.join(' • ')}</p>
            </Card>

            <Card className="p-8">
                <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">Symbolism</h2>
                <div className="space-y-4">
                    {deityInfo.symbolism.elements.map(item => (
                        <div key={item.name}>
                            <h3 className="font-semibold text-brand-warm-brown dark:text-gray-200">{item.name}</h3>
                            <p className="text-brand-warm-brown/80 dark:text-gray-400">{item.significance}</p>
                        </div>
                    ))}
                </div>
            </Card>
            
            <div>
                <h2 className="text-3xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold mb-6">Prayers & Hymns</h2>
                 <div className="border-b border-brand-saffron/20 dark:border-brand-gold/20 mb-6">
                    <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto" aria-label="Tabs">
                        <button className={tabClass('stories')} onClick={() => setActiveTab('stories')}>{translations.stories[language]}</button>
                        <button className={tabClass('mantras')} onClick={() => setActiveTab('mantras')}>{translations.mantras[language]}</button>
                        <button className={tabClass('aartis')} onClick={() => setActiveTab('aartis')}>{translations.aartis[language]}</button>
                        <button className={tabClass('bhajans')} onClick={() => setActiveTab('bhajans')}>{translations.bhajans[language]}</button>
                    </nav>
                </div>
                <div className="space-y-6">
                    {activeTab === 'stories' && deityInfo.story.map((storyItem, index) => (
                        <Card key={index} className="p-6">
                            <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{storyItem.title}</h4>
                            <p className="text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed whitespace-pre-line mt-4">{storyItem.narrative}</p>
                        </Card>
                    ))}
                    {activeTab === 'mantras' && deityInfo.mantras.map((mantra, index) => (
                        <Card key={index} className="p-6">
                            <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{mantra.name}</h4>
                            <p className="text-lg text-brand-warm-brown/90 dark:text-gray-300 italic my-2">{mantra.mantra}</p>
                            <p className="text-brand-warm-brown/80 dark:text-gray-400">{mantra.meaning}</p>
                        </Card>
                    ))}
                    {activeTab === 'aartis' && deityInfo.aarti.map((aarti, index) => (
                        <Card key={index} className="p-6">
                            <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{aarti.name}</h4>
                            <div className="mt-4 space-y-2 text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-line">{aarti.lyrics.join('\n')}</div>
                        </Card>
                    ))}
                    {activeTab === 'bhajans' && deityInfo.bhajans.map((bhajan, index) => (
                        <Card key={index} className="p-6">
                           <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{bhajan.name}</h4>
                            <div className="mt-4 space-y-2 text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-line">{bhajan.lyrics.join('\n')}</div>
                        </Card>
                    ))}
                </div>
            </div>

            <Card className="p-8">
                <h2 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">Major Festivals</h2>
                <div className="space-y-4">
                    {deityInfo.festivals.map(festival => (
                        <div key={festival.name}>
                            <h3 className="font-semibold text-brand-warm-brown dark:text-gray-200">{festival.name} <span className="text-sm font-normal text-brand-warm-brown/70 dark:text-gray-400">({festival.date_range})</span></h3>
                            <p className="text-brand-warm-brown/80 dark:text-gray-400">{festival.importance}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <div>
                <h2 className="text-3xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold mb-6">Prominent Temples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {deityInfo.temples.map((temple, index) => {
                        const templeData = TEMPLES.find(t => temple.name.toLowerCase().includes(t.name.split(' ')[0].toLowerCase()) || t.name.toLowerCase().includes(temple.name.toLowerCase()));
                        const canNavigate = !!templeData;
                        
                        return (
                            <Card key={index} className="p-6" onClick={canNavigate ? () => navigate(`/temple/${templeData.id}`) : undefined}>
                                <h3 className="text-xl font-bold text-brand-saffron-dark dark:text-brand-gold">{temple.name}</h3>
                                <div className="flex items-center space-x-1 mt-1 text-brand-warm-brown/70 dark:text-gray-400">
                                    <MapPinIcon className="w-4 h-4" />
                                    <span>{temple.location}</span>
                                </div>
                                <p className="text-brand-warm-brown/80 dark:text-gray-400 mt-2 text-sm">{temple.importance}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

// =================================================================
// AI-Powered Dynamic Content Component (Fallback)
// =================================================================
const AiPoweredDetailContent: React.FC<{ deity: Deity }> = ({ deity }) => {
  const { language } = useLanguage();
  const { prayers, fetchPrayersForDeity, isLoading: isContextLoading } = useDeityContent();

  const [localPrayers, setLocalPrayers] = useState<DeityPrayers | null>(prayers[deity.id!] || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalPrayers(prayers[deity.id!] || null);
  }, [prayers, deity.id]);

  const handleFetchPrayers = async () => {
    if (!deity) return;
    setIsLoading(true);
    setError(null);
    try {
      const fetchedPrayers = await fetchPrayersForDeity(deity.id, deity.name, language);
      if (fetchedPrayers) {
        setLocalPrayers(fetchedPrayers);
      } else {
        setError(translations.failedToFetchPrayers[language]);
      }
    } catch (err) {
      setError(translations.failedToFetchPrayers[language]);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSavePrayers = () => {
    if (!localPrayers || !deity) return;
    const jsonString = JSON.stringify(localPrayers, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `prayers_for_${deity.name.toLowerCase().replace(/\s+/g, '_')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const text = e.target?.result;
            if (typeof text !== 'string') throw new Error("File content is not a string");
            const importedData = JSON.parse(text);
            if (importedData && Array.isArray(importedData.mantras) && Array.isArray(importedData.aartis) && Array.isArray(importedData.bhajans)) {
                setLocalPrayers(importedData as DeityPrayers);
                setError(null);
            } else {
                throw new Error("Invalid prayer file format.");
            }
        } catch (err) {
            console.error("Failed to parse or validate imported file:", err);
            setError(translations.importFailed[language]);
            setLocalPrayers(null);
        }
    };
    reader.onerror = () => setError(translations.failedToReadFile[language]);
    reader.readAsText(file);
    if (event.target) event.target.value = '';
  };

  return (
    <div className="max-w-3xl mx-auto">
        <Card className="p-8">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{deity.name}</h1>
                <p className="text-lg text-brand-warm-brown/70 dark:text-gray-400 italic mt-1">{deity.description}</p>
            </div>
            <div className="w-24 h-px bg-brand-saffron/30 dark:bg-brand-gold/30 my-6 mx-auto"></div>
            <p className="mt-6 text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed">{deity.longDescription}</p>
        </Card>

        <div className="mt-12">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{translations.associatedPrayers[language]}</h2>
                {localPrayers && (
                    <div className="flex items-center space-x-2">
                        <button onClick={handleSavePrayers} className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-brand-warm-brown bg-white border border-brand-saffron/30 rounded-lg hover:bg-brand-saffron/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-saffron transition dark:bg-brand-deep-blue-light dark:text-gray-200 dark:border-brand-gold/30 dark:hover:bg-brand-gold/10">
                            <SaveIcon className="w-5 h-5" />
                            <span>{translations.save[language]}</span>
                        </button>
                        <button onClick={handleImportClick} className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-brand-warm-brown bg-white border border-brand-saffron/30 rounded-lg hover:bg-brand-saffron/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-saffron transition dark:bg-brand-deep-blue-light dark:text-gray-200 dark:border-brand-gold/30 dark:hover:bg-brand-gold/10">
                            <UploadIcon className="w-5 h-5" />
                            <span>{translations.import[language]}</span>
                        </button>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="application/json" className="hidden" aria-hidden="true" />
                    </div>
                )}
            </div>
            
            {!localPrayers && !isLoading && (
              <div className="text-center">
                <button onClick={handleFetchPrayers} disabled={isContextLoading} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-brand-saffron to-brand-marigold hover:from-brand-saffron-dark hover:to-brand-saffron focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-marigold transition-transform transform hover:scale-105 disabled:opacity-50">
                  <SparklesIcon className="w-5 h-5 mr-2 -ml-1" />
                  {translations.discoverPrayers[language]}
                </button>
              </div>
            )}
            
            {isLoading && <LoadingSpinner />}
            {error && <p className="text-center text-red-600 bg-red-100 dark:bg-red-900/50 dark:text-red-400 p-4 rounded-lg">{error}</p>}

            {localPrayers && (
              <div className="space-y-10">
                {localPrayers.mantras?.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">{translations.mantras[language]}</h3>
                    <div className="space-y-6">
                      {localPrayers.mantras.map((mantra, index) => (
                        <Card key={`mantra-${index}`} className="p-6">
                           <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{mantra.title}</h4>
                            <div className="mt-4 space-y-4">
                              <div><p className="font-medium text-brand-warm-brown/60 dark:text-gray-400 text-sm">Sanskrit</p><p className="text-xl text-brand-warm-brown dark:text-gray-200 font-serif">{mantra.sanskrit}</p></div>
                              <div><p className="font-medium text-brand-warm-brown/60 dark:text-gray-400 text-sm">Transliteration</p><p className="text-lg text-brand-warm-brown/90 dark:text-gray-300 italic">{mantra.transliteration}</p></div>
                              <div><p className="font-medium text-brand-warm-brown/60 dark:text-gray-400 text-sm">Translation</p><p className="text-brand-warm-brown/80 dark:text-gray-400">{mantra.translation}</p></div>
                            </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                {localPrayers.aartis?.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">{translations.aartis[language]}</h3>
                     <div className="space-y-6">
                      {localPrayers.aartis.map((item, index) => (
                        <Card key={`aarti-${index}`} className="p-6">
                            <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{item.title}</h4>
                             <div className="mt-4 space-y-2 text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-line">{item.lyrics.join('\n')}</div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {localPrayers.bhajans?.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold mb-4">{translations.bhajans[language]}</h3>
                     <div className="space-y-6">
                      {localPrayers.bhajans.map((item, index) => (
                        <Card key={`bhajan-${index}`} className="p-6">
                            <h4 className="text-xl font-semibold font-serif text-brand-saffron-dark dark:text-brand-gold">{item.title}</h4>
                             <div className="mt-4 space-y-2 text-brand-warm-brown/90 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-line">{item.lyrics.join('\n')}</div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
        </div>
    </div>
  );
};

// =================================================================
// Main Router Component
// =================================================================
const DeityDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const deity = DEITIES.find((d) => d.id === id);
  const staticInfo = staticDeityData[id!];
  const { language } = useLanguage();

  if (!deity) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold dark:text-white">{translations.deityNotFound[language]}</h1>
        <Link to="/deities" className="mt-4 inline-block text-brand-saffron hover:underline">
          {translations.backToDeities[language]}
        </Link>
      </div>
    );
  }

  // If static info exists for this ID, render the static component
  if (staticInfo) {
    return <StaticDeityDetailContent deity={deity} deityInfo={staticInfo} />;
  }

  // Otherwise, render the default AI-powered component
  return <AiPoweredDetailContent deity={deity} />;
};

export default DeityDetailScreen;