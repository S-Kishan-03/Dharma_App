import React, { useMemo } from 'react';
import type { PanchangDay } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCalendarData } from '../contexts/CalendarDataContext';
import { translations } from '../lib/translations';

const CalendarScreen: React.FC = () => {
  const { language } = useLanguage();
  const currentDate = new Date();
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
  
  const { calendarData } = useCalendarData();
  const monthData = useMemo(() => calendarData[monthKey] || [], [calendarData, monthKey]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const monthName = currentDate.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { month: 'long', year: 'numeric' });

  const weekdays = language === 'hi' 
    ? ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const eventsMap = useMemo(() => {
    const map: Record<number, PanchangDay> = {};
    monthData.forEach(dayData => {
      map[dayData.day] = dayData;
    });
    return map;
  }, [monthData]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-saffron-dark dark:text-brand-gold">{translations.panchangCalendar[language]}</h1>
        <p className="mt-2 text-lg text-brand-warm-brown/80 dark:text-gray-400">{translations.monthlyView[language]}</p>
      </div>

      <div className="bg-white/50 dark:bg-brand-deep-blue-light rounded-xl shadow-lg border border-amber-900/10 dark:border-brand-gold/20 p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold text-brand-saffron-dark dark:text-brand-gold">{monthName}</h2>
        </div>
        
        {monthData.length === 0 ? (
          <p className="text-center text-brand-warm-brown/80 dark:text-gray-400 py-10">
            Calendar data for the current month is not available.
          </p>
        ) : (
        <div className="grid grid-cols-7 gap-px text-center bg-brand-saffron/20 dark:bg-brand-gold/20 border border-brand-saffron/20 dark:border-brand-gold/20 rounded-lg overflow-hidden">
          {weekdays.map(day => ( <div key={day} className="py-2 font-bold text-brand-saffron-dark dark:text-brand-gold bg-brand-parchment/80 dark:bg-brand-deep-blue/50 text-xs sm:text-sm">{day}</div> ))}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => ( <div key={`empty-${i}`} className="bg-brand-parchment/50 dark:bg-brand-deep-blue/30"></div> ))}
          {Array.from({ length: daysInMonth }).map((_, day) => {
            const dayNumber = day + 1;
            const dayData = eventsMap[dayNumber];
            const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, dayNumber).toDateString();

            return (
              <div key={dayNumber} className="relative pt-2 pb-4 min-h-[120px] sm:min-h-[140px] bg-brand-parchment dark:bg-brand-deep-blue-light flex flex-col">
                <time dateTime={`${currentYear}-${currentMonth + 1}-${dayNumber}`} className={`font-semibold block mx-auto mb-1 w-7 h-7 flex items-center justify-center rounded-full text-sm ${isToday ? 'bg-brand-saffron text-white' : 'text-brand-warm-brown dark:text-gray-300'}`}>
                  {dayNumber}
                </time>
                {dayData ? (
                <div className="text-xs text-brand-warm-brown/70 dark:text-gray-400 px-1 flex-grow">
                    <p className="truncate" title={dayData.tithi}>{dayData.tithi}</p>
                    <p className="truncate" title={dayData.nakshatra}>{dayData.nakshatra}</p>
                    <div className="text-xs space-y-1 mt-1">
                      {dayData.events.map((event, i) => (
                         <div key={i} className="bg-brand-saffron/20 text-brand-saffron-dark dark:bg-brand-gold/20 dark:text-brand-gold p-1 rounded-md truncate" title={event.description}>
                            {event.eventName}
                         </div>
                      ))}
                    </div>
                </div>
                ) : <div className="flex-grow"></div>}
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
};

export default CalendarScreen;