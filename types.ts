

export interface Deity {
  id: string;
  name: string;
  description: string;
  longDescription: string;
}

export interface DailyMantra {
  quote: string;
  meaning: string;
  source: string;
}

export interface PrayerMantra {
  title: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
}

export interface PrayerAartiBhajan {
    title: string;
    lyrics: string[];
}

export interface DeityPrayers {
  mantras: PrayerMantra[];
  aartis: PrayerAartiBhajan[];
  bhajans: PrayerAartiBhajan[];
}

export interface Festival {
  id: string;
  name: string;
  description: string;
  month: string;
  states: string[];
}

export interface Temple {
  id: string;
  name: string;
  state: string;
  location: string;
  deity: string;
  importance: string;
  story: string;
  famousFor: string;
  bestTimeToVisit: string;
  rituals: string;
}

export interface FestivalStory {
  title: string;
  story: string;
  significance: string;
}

export interface FestivalEvent {
    eventName: string;
    description: string;
}

export interface PanchangDay {
    day: number;
    tithi: string;
    nakshatra: string;
    events: FestivalEvent[];
}

export interface SpiritualGuidance {
  guidance: string;
  story: {
    title: string;
    narrative: string;
  };
}

export interface SearchResult {
  id: string;
  name: string;
  type: 'deity' | 'festival' | 'temple';
  path: string;
  description: string;
}

export interface StaticDeityInfo {
  name: string;
  description: string;
  other_names: string[];
  symbolism: {
    vehicle: string;
    elements: { name: string; significance: string }[];
    significance: string;
  };
  story: {
    title: string;
    narrative: string;
  }[];
  temples: {
    name: string;
    location: string;
    importance: string;
  }[];
  aarti: {
    name: string;
    language: string;
    lyrics: string[];
  }[];
  bhajans: {
    name: string;
    language: string;
    lyrics: string[];
  }[];
  mantras: {
    name: string;
    mantra: string;
    meaning: string;
  }[];
  festivals: {
    name: string;
    date_range: string;
    importance: string;
  }[];
}

export interface CoreConcept {
  term: string;
  sanskrit: string;
  definition: string;
  significance: string;
}

export interface PhilosophyData {
  title: string;
  introduction: string;
  core_concepts: CoreConcept[];
}