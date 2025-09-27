import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UsersIcon, BookOpenIcon, CalendarIcon, HeartIcon, TempleIcon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center w-full justify-center px-2 py-1 transition-colors ${
      isActive ? 'text-brand-saffron' : 'text-gray-500 hover:text-brand-saffron dark:text-gray-400 dark:hover:text-brand-gold'
    }`;

  return (
    <>
      {/* Spacer for fixed footer */}
      <div className="h-16 md:hidden"></div> 
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-brand-parchment dark:bg-brand-deep-blue-light border-t border-brand-saffron/20 dark:border-brand-gold/20 mt-12">
        <div className="container mx-auto py-6 px-4 text-center text-brand-warm-brown/70 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanatan Path. All rights reserved.</p>
          <p className="text-sm mt-2">A guide to explore the depths of Sanatan Dharma.</p>
        </div>
      </footer>
      {/* Mobile Footer Navigation */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-parchment dark:bg-brand-deep-blue-light border-t border-brand-saffron/20 dark:border-brand-gold/20 shadow-t-lg z-50">
         <nav className="flex items-center justify-around h-16">
            <NavLink to="/" className={navLinkClass}>
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">{translations.home[language]}</span>
            </NavLink>
            <NavLink to="/deities" className={navLinkClass}>
              <UsersIcon className="w-6 h-6" />
              <span className="text-xs">{translations.deities[language]}</span>
            </NavLink>
            <NavLink to="/festivals" className={navLinkClass}>
              <BookOpenIcon className="w-6 h-6" />
              <span className="text-xs">{translations.festivals[language]}</span>
            </NavLink>
             <NavLink to="/temples" className={navLinkClass}>
              <TempleIcon className="w-6 h-6" />
              <span className="text-xs">{translations.temples[language]}</span>
            </NavLink>
            <NavLink to="/calendar" className={navLinkClass}>
              <CalendarIcon className="w-6 h-6" />
              <span className="text-xs">{translations.calendar[language]}</span>
            </NavLink>
          </nav>
      </footer>
    </>
  );
};

export default Footer;