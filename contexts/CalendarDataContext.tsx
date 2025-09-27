import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import type { PanchangDay } from '../types';
import { getMonthlyPanchang } from '../services/geminiService';

interface CalendarDataContextType {
  calendarData: Record<string, PanchangDay[]>;
  isLoading: boolean;
  progress: number;
  statusMessage: string;
  fetchMonthData: (month: number, year: number, language: 'en' | 'hi', force?: boolean) => Promise<boolean>;
  generateYearData: (year: number, language: 'en' | 'hi') => Promise<void>;
  saveYearData: (year: number) => void;
  importYearData: (file: File) => void;
}

const CalendarDataContext = createContext<CalendarDataContextType | undefined>(undefined);

const getInitialCalendarData = (): Record<string, PanchangDay[]> => {
    try {
        const cachedData = localStorage.getItem('calendarData');
        return cachedData ? JSON.parse(cachedData) : {};
    } catch (error) {
        console.error("Error reading calendar data from localStorage", error);
        return {};
    }
};

export const CalendarDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [calendarData, setCalendarData] = useState<Record<string, PanchangDay[]>>(getInitialCalendarData);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('calendarData', JSON.stringify(calendarData));
    } catch (error) {
      console.error("Error saving calendar data to localStorage", error);
    }
  }, [calendarData]);

  const fetchMonthData = async (month: number, year: number, language: 'en' | 'hi', force = false): Promise<boolean> => {
    const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
    if (calendarData[monthKey] && !force) return true;

    try {
      const result = await getMonthlyPanchang(month, year, language);
      if (result && result.length > 0) {
        setCalendarData(prev => ({ ...prev, [monthKey]: result }));
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Failed to fetch data for ${monthKey}:`, error);
      return false;
    }
  };

  const generateYearData = async (year: number, language: 'en' | 'hi') => {
    setIsLoading(true);
    setProgress(0);
    const newYearData: Record<string, PanchangDay[]> = {};
    for (let month = 0; month < 12; month++) {
      const monthName = new Date(year, month).toLocaleString('en-US', { month: 'long' });
      setStatusMessage(`Generating data for ${monthName} ${year}... (${month + 1}/12)`);
      try {
        const result = await getMonthlyPanchang(month, year, language);
        if (result) {
          const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
          newYearData[monthKey] = result;
        }
      } catch (error) {
        console.error(`Failed to generate data for ${month + 1}/${year}:`, error);
      }
      setProgress(((month + 1) / 12) * 100);
    }
    setCalendarData(prev => ({ ...prev, ...newYearData }));
    setStatusMessage(`Data for ${year} generated successfully!`);
    setIsLoading(false);
  };

  const saveYearData = (year: number) => {
    const yearData: Record<string, PanchangDay[]> = {};
    Object.keys(calendarData).forEach(key => {
      if (key.startsWith(String(year))) {
        yearData[key] = calendarData[key];
      }
    });

    const jsonString = JSON.stringify(yearData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sanatan_path_calendar_${year}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importYearData = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') throw new Error("File content is not a string");
        const importedData = JSON.parse(text);
        if (typeof importedData === 'object' && importedData !== null) {
          setCalendarData(prev => ({ ...prev, ...importedData }));
        } else {
          throw new Error("Invalid file format.");
        }
      } catch (err) {
        console.error("Failed to parse or validate imported file:", err);
        alert("Import failed. Please select a valid JSON file.");
      }
    };
    reader.onerror = () => alert("Failed to read the selected file.");
    reader.readAsText(file);
  };

  return (
    <CalendarDataContext.Provider value={{ calendarData, isLoading, progress, statusMessage, fetchMonthData, generateYearData, saveYearData, importYearData }}>
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