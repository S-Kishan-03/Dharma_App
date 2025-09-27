import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { DeityPrayers } from '../types';
import { getPrayersForDeity } from '../services/geminiService';
import { DEITIES } from '../data/mockData';

interface DeityContentContextType {
  prayers: Record<string, DeityPrayers>;
  isLoading: boolean;
  progress: number;
  statusMessage: string;
  generateAllPrayers: (language: 'en' | 'hi') => Promise<void>;
  saveAllPrayers: () => void;
  importAllPrayers: (file: File) => void;
  fetchPrayersForDeity: (deityId: string, deityName: string, language: 'en' | 'hi') => Promise<DeityPrayers | null>;
}

const DeityContentContext = createContext<DeityContentContextType | undefined>(undefined);

export const DeityContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prayers, setPrayers] = useState<Record<string, DeityPrayers>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  const generateAllPrayers = async (language: 'en' | 'hi') => {
    setIsLoading(true);
    setProgress(0);
    const newPrayers: Record<string, DeityPrayers> = {};
    for (let i = 0; i < DEITIES.length; i++) {
      const deity = DEITIES[i];
      setStatusMessage(`Generating prayers for ${deity.name}... (${i + 1}/${DEITIES.length})`);
      try {
        const result = await getPrayersForDeity(deity.name, language);
        if (result) {
          newPrayers[deity.id] = result;
        }
      } catch (error) {
        console.error(`Failed to generate prayers for ${deity.name}:`, error);
      }
      setProgress(((i + 1) / DEITIES.length) * 100);
    }
    setPrayers(prev => ({ ...prev, ...newPrayers }));
    setStatusMessage('All prayers generated successfully!');
    setIsLoading(false);
  };

  const fetchPrayersForDeity = async (deityId: string, deityName: string, language: 'en' | 'hi') => {
    // Avoid refetching if already present
    if (prayers[deityId]) {
      return prayers[deityId];
    }
    const result = await getPrayersForDeity(deityName, language);
    if (result) {
      setPrayers(prev => ({ ...prev, [deityId]: result }));
      return result;
    }
    return null;
  }

  const saveAllPrayers = () => {
    const jsonString = JSON.stringify(prayers, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sanatan_path_all_deity_prayers.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importAllPrayers = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') throw new Error("File content is not a string");
        const importedData = JSON.parse(text);
        // Basic validation
        if (typeof importedData === 'object' && importedData !== null) {
          setPrayers(importedData);
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
    <DeityContentContext.Provider value={{ prayers, isLoading, progress, statusMessage, generateAllPrayers, saveAllPrayers, importAllPrayers, fetchPrayersForDeity }}>
      {children}
    </DeityContentContext.Provider>
  );
};

export const useDeityContent = (): DeityContentContextType => {
  const context = useContext(DeityContentContext);
  if (!context) {
    throw new Error('useDeityContent must be used within a DeityContentProvider');
  }
  return context;
};