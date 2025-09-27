import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { FestivalStory } from '../types';
import { getFestivalStory } from '../services/geminiService';
import { FESTIVALS } from '../data/mockData';

interface FestivalContentContextType {
  stories: Record<string, FestivalStory>;
  isLoading: boolean;
  progress: number;
  statusMessage: string;
  generateAllStories: (language: 'en' | 'hi') => Promise<void>;
  saveAllStories: () => void;
  importAllStories: (file: File) => void;
  fetchStoryForFestival: (festivalId: string, festivalName: string, language: 'en' | 'hi') => Promise<FestivalStory | null>;
}

const FestivalContentContext = createContext<FestivalContentContextType | undefined>(undefined);

export const FestivalContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stories, setStories] = useState<Record<string, FestivalStory>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  const generateAllStories = async (language: 'en' | 'hi') => {
    setIsLoading(true);
    setProgress(0);
    const newStories: Record<string, FestivalStory> = {};
    for (let i = 0; i < FESTIVALS.length; i++) {
      const festival = FESTIVALS[i];
      setStatusMessage(`Generating story for ${festival.name}... (${i + 1}/${FESTIVALS.length})`);
      try {
        const result = await getFestivalStory(festival.name, language);
        if (result) {
          newStories[festival.id] = result;
        }
      } catch (error) {
        console.error(`Failed to generate story for ${festival.name}:`, error);
      }
      setProgress(((i + 1) / FESTIVALS.length) * 100);
    }
    setStories(prev => ({ ...prev, ...newStories }));
    setStatusMessage('All stories generated successfully!');
    setIsLoading(false);
  };

  const fetchStoryForFestival = async (festivalId: string, festivalName: string, language: 'en' | 'hi') => {
    if (stories[festivalId]) {
      return stories[festivalId];
    }
    const result = await getFestivalStory(festivalName, language);
    if (result) {
      setStories(prev => ({ ...prev, [festivalId]: result }));
      return result;
    }
    return null;
  }

  const saveAllStories = () => {
    const jsonString = JSON.stringify(stories, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sanatan_path_all_festival_stories.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importAllStories = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') throw new Error("File content is not a string");
        const importedData = JSON.parse(text);
        if (typeof importedData === 'object' && importedData !== null) {
          setStories(importedData);
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
    <FestivalContentContext.Provider value={{ stories, isLoading, progress, statusMessage, generateAllStories, saveAllStories, importAllStories, fetchStoryForFestival }}>
      {children}
    </FestivalContentContext.Provider>
  );
};

export const useFestivalContent = (): FestivalContentContextType => {
  const context = useContext(FestivalContentContext);
  if (!context) {
    throw new Error('useFestivalContent must be used within a FestivalContentProvider');
  }
  return context;
};