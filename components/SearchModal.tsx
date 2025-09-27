import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useLanguage } from '../contexts/LanguageContext';
import { DEITIES, FESTIVALS, TEMPLES } from '../data/mockData';
import type { SearchResult } from '../types';
import { translations } from '../lib/translations';
import { SearchIcon, XIcon, UsersIcon, BookOpenIcon, TempleIcon, SparklesIcon } from './Icon';

const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch } = useSearch();
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchResults = useMemo<SearchResult[]>(() => {
    if (!query.trim()) {
      return [];
    }

    const lowerCaseQuery = query.toLowerCase();
    // Tokenize search query and filter out very short, common words (stop words) to improve relevance.
    const queryWords = lowerCaseQuery.split(/\s+/).filter(w => w.length > 2);

    // If the query consists only of short words (e.g., "om"), use the whole query.
    if (queryWords.length === 0 && lowerCaseQuery.length > 0) {
      queryWords.push(lowerCaseQuery);
    }
    
    if (queryWords.length === 0) {
        return [];
    }

    const deityResults: SearchResult[] = DEITIES.filter(d => {
      const searchableText = `${d.name} ${d.description}`.toLowerCase();
      return queryWords.some(word => searchableText.includes(word));
    }).map(d => ({
      id: d.id,
      name: d.name,
      description: d.description,
      type: 'deity',
      path: `/deity/${d.id}`,
    }));

    const festivalResults: SearchResult[] = FESTIVALS.filter(f => {
      const searchableText = `${f.name} ${f.description}`.toLowerCase();
      return queryWords.some(word => searchableText.includes(word));
    }).map(f => ({
      id: f.id,
      name: f.name,
      description: f.description,
      type: 'festival',
      path: `/festival/${f.id}`,
    }));
    
    const templeResults: SearchResult[] = TEMPLES.filter(t => {
      const searchableText = `${t.name} ${t.location} ${t.state} ${t.deity} ${t.importance}`.toLowerCase();
      return queryWords.some(word => searchableText.includes(word));
    }).map(t => ({
      id: t.id,
      name: t.name,
      description: `${t.location}, ${t.state}`,
      type: 'temple',
      path: `/temple/${t.id}`,
    }));

    const allResults = [...deityResults, ...festivalResults, ...templeResults];
    // Remove duplicates that might arise from different search fields matching
    return allResults.filter((v, i, a) => a.findIndex(t => (t.id === v.id && t.type === v.type)) === i);
  }, [query]);
  
  useEffect(() => {
    // Reset query when modal closes
    if (!isSearchOpen) {
      setTimeout(() => setQuery(''), 300); // delay to allow for fade out animation
    }
  }, [isSearchOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeSearch]);

  if (!isSearchOpen) {
    return null;
  }

  const handleResultClick = () => {
    closeSearch();
  };

  const handleAiSearchClick = () => {
    if (query.trim()) {
        navigate(`/ai-search?q=${encodeURIComponent(query.trim())}`);
        closeSearch();
    }
  };

  const ResultIcon: React.FC<{type: SearchResult['type']}> = ({ type }) => {
    const iconClass = "w-6 h-6 text-brand-saffron-dark dark:text-brand-gold";
    if (type === 'deity') return <UsersIcon className={iconClass} />;
    if (type === 'festival') return <BookOpenIcon className={iconClass} />;
    if (type === 'temple') return <TempleIcon className={iconClass} />;
    return null;
  };

  return (
    <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 pt-[15vh] animate-fade-in"
        onClick={closeSearch}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
    >
        <div 
            className="w-full max-w-2xl bg-brand-parchment dark:bg-brand-deep-blue-light rounded-xl shadow-2xl border border-amber-900/10 dark:border-brand-gold/20 animate-slide-down"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="relative p-4">
                <SearchIcon className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={translations.searchPlaceholder[language]}
                    className="w-full bg-transparent pl-10 pr-10 py-3 border-b border-brand-saffron/20 dark:border-brand-gold/20 focus:outline-none focus:border-brand-saffron dark:focus:border-brand-gold text-lg"
                    autoFocus
                    aria-label="Search"
                />
                 <button onClick={closeSearch} className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10" aria-label="Close search">
                    <XIcon className="w-6 h-6"/>
                </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto">
                {query.trim() && searchResults.length === 0 && (
                    <div className="text-center p-16 text-gray-500">
                        <p>{translations.noResults[language]}</p>
                    </div>
                )}
                
                <ul className="divide-y divide-brand-saffron/10 dark:divide-brand-gold/10">
                    {searchResults.map(result => (
                        <li key={result.id + result.type}>
                            <Link 
                                to={result.path} 
                                onClick={handleResultClick}
                                className="flex items-start space-x-4 p-4 hover:bg-brand-saffron/10 dark:hover:bg-brand-gold/10 transition-colors duration-200"
                            >
                                <div className="flex-shrink-0 p-2 bg-brand-saffron/10 dark:bg-brand-gold/10 rounded-full">
                                    <ResultIcon type={result.type} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-brand-saffron-dark dark:text-brand-gold">{result.name}</h3>
                                    <p className="text-sm text-brand-warm-brown/80 dark:text-gray-400 line-clamp-2">{result.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                    {query.trim() && (
                        <li>
                            <button
                                onClick={handleAiSearchClick}
                                className="flex items-start space-x-4 p-4 w-full text-left hover:bg-brand-saffron/10 dark:hover:bg-brand-gold/10 transition-colors duration-200"
                            >
                                <div className="flex-shrink-0 p-2 bg-brand-saffron/10 dark:bg-brand-gold/10 rounded-full">
                                    <SparklesIcon className="w-6 h-6 text-brand-saffron-dark dark:text-brand-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-brand-saffron-dark dark:text-brand-gold">{translations.askAI[language]} "{query}"</h3>
                                    <p className="text-sm text-brand-warm-brown/80 dark:text-gray-400">{translations.askAIDescription[language]}</p>
                                </div>
                            </button>
                        </li>
                    )}
                </ul>
                
            </div>
        </div>
    </div>
  );
};

export default SearchModal;