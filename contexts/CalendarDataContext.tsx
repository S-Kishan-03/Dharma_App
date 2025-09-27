import React, { createContext, useContext, ReactNode } from 'react';
import type { PanchangDay } from '../types';
import { staticCalendarData } from '../data/calendarData';

interface CalendarDataContextType {
  calendarData: Record<string, PanchangDay[]>;
}

const CalendarDataContext = createContext<CalendarDataContextType | undefined>(undefined);

export const CalendarDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CalendarDataContext.Provider value={{ calendarData: staticCalendarData }}>
      {children}
    </CalendarDataContext.Provider>
  );
};

export const useCalendarData = (): CalendarDataContextType => {
  const context = useContext(CalendarDataContext);
  if (!context) {
    throw new Error('useCalendarData must be used within a CalendarDataProvider');
  }
  return context;
};