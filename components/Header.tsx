import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UsersIcon, CalendarIcon, SparklesIcon, SunIcon, MoonIcon, HeartIcon, SearchIcon, TempleIcon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { useTheme } from '../contexts/ThemeContext';
import { useSearch } from '../contexts/SearchContext';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { openSearch } = useSearch();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand-saffron/20 text-brand-saffron-dark dark:bg-brand-gold/20 dark:text-brand-gold'
        : 'text-brand-warm-brown/70 hover:bg-brand-saffron/10 hover:text-brand-saffron-dark dark:text-gray-300 dark:hover:bg-brand-gold/10 dark:hover:text-brand-gold'
    }`;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'hi');
  };

  return (
    <header className="bg-brand-parchment/80 backdrop-blur-md shadow-sm sticky top-0 z-40 dark:bg-brand-deep-blue/80 dark:border-b dark:border-brand-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Left Group */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center space-x-2">
              <SparklesIcon className="w-8 h-8 text-brand-saffron" />
              <span className="text-2xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">Sanatan Path</span>
            </Link>
          </div>

          {/* Center: Nav */}
          <div className="hidden md:flex items-center justify-center">
            <nav className="flex items-center space-x-1 lg:space-x-2">
              <NavLink to="/" className={navLinkClass}>
                <HomeIcon className="w-5 h-5" />
                <span>{translations.home[language]}</span>
              </NavLink>
              <NavLink to="/deities" className={navLinkClass}>
                <UsersIcon className="w-5 h-5" />
                <span>{translations.deities[language]}</span>
              </NavLink>
              <NavLink to="/guidance" className={navLinkClass}>
                <HeartIcon className="w-5 h-5" />
                <span>{translations.guidance[language]}</span>
              </NavLink>
              <NavLink to="/festivals" className={navLinkClass}>
                <BookOpenIcon className="w-5 h-5" />
                <span>{translations.festivals[language]}</span>
              </NavLink>
              <NavLink to="/temples" className={navLinkClass}>
                <TempleIcon className="w-5 h-5" />
                <span>{translations.temples[language]}</span>
              </NavLink>
              <NavLink to="/calendar" className={navLinkClass}>
                <CalendarIcon className="w-5 h-5" />
                <span>{translations.calendar[language]}</span>
              </NavLink>
            </nav>
          </div>

          {/* Right Group */}
          <div className="flex-1 flex justify-end">
             <div className="flex items-center space-x-2 md:space-x-4">
                {/* Desktop Search Button */}
                <div className="hidden lg:block">
                    <button
                        onClick={openSearch}
                        className="flex items-center space-x-2 px-4 py-2 w-48 text-left text-brand-warm-brown/60 dark:text-gray-400 bg-white/50 dark:bg-brand-deep-blue-light border border-brand-saffron/30 dark:border-brand-gold/30 rounded-full hover:border-brand-saffron dark:hover:border-brand-gold transition-colors"
                        aria-label={translations.search[language]}
                    >
                        <SearchIcon className="w-4 h-4" />
                        <span>{translations.search[language]}</span>
                    </button>
                </div>
                {/* Mobile Search Button */}
                <div className="lg:hidden">
                    <button
                        onClick={openSearch}
                        className="p-2 rounded-full hover:bg-brand-saffron/10 dark:hover:bg-brand-gold/10"
                        aria-label={translations.search[language]}
                    >
                        <SearchIcon className="w-5 h-5 text-brand-saffron-dark dark:text-brand-gold" />
                    </button>
                </div>
                 <div className="flex items-center space-x-2">
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="bg-brand-parchment border border-brand-saffron/30 rounded-full text-sm px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-saffron dark:bg-brand-deep-blue-light dark:border-brand-gold/30 dark:text-white"
                        aria-label="Select language"
                    >
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                    </select>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-brand-saffron/10 dark:hover:bg-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-saffron"
                        aria-label="Toggle dark mode"
                    >
                        {theme === 'dark' ? <SunIcon className="w-5 h-5 text-brand-marigold" /> : <MoonIcon className="w-5 h-5 text-brand-saffron-dark" />}
                    </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;