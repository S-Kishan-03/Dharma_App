import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import DeitiesScreen from './pages/DeitiesScreen';
import DeityDetailScreen from './pages/DeityDetailScreen';
import FestivalsScreen from './pages/FestivalsScreen';
import FestivalDetailScreen from './pages/FestivalDetailScreen';
import CalendarScreen from './pages/CalendarScreen';
import GuidanceScreen from './pages/GuidanceScreen';
import TemplesScreen from './pages/TemplesScreen';
import TempleDetailScreen from './pages/TempleDetailScreen';
import AiSearchScreen from './pages/AiSearchScreen';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { DeityContentProvider } from './contexts/DeityContentContext';
import { FestivalContentProvider } from './contexts/FestivalContentContext';
import { CalendarDataProvider } from './contexts/CalendarDataContext';
import { SearchProvider } from './contexts/SearchContext';
import SearchModal from './components/SearchModal';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DeityContentProvider>
          <FestivalContentProvider>
            <CalendarDataProvider>
              <SearchProvider>
                <HashRouter>
                  <div className="flex flex-col min-h-screen font-sans bg-brand-parchment dark:bg-brand-deep-blue text-brand-warm-brown dark:text-gray-300">
                    <Header />
                    <SearchModal />
                    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/deities" element={<DeitiesScreen />} />
                        <Route path="/deity/:id" element={<DeityDetailScreen />} />
                        <Route path="/festivals" element={<FestivalsScreen />} />
                        <Route path="/festival/:id" element={<FestivalDetailScreen />} />
                        <Route path="/calendar" element={<CalendarScreen />} />
                        <Route path="/guidance" element={<GuidanceScreen />} />
                        <Route path="/temples" element={<TemplesScreen />} />
                        <Route path="/temple/:id" element={<TempleDetailScreen />} />
                        <Route path="/ai-search" element={<AiSearchScreen />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                </HashRouter>
              </SearchProvider>
            </CalendarDataProvider>
          </FestivalContentProvider>
        </DeityContentProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;