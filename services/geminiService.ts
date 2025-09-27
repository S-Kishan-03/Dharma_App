import { GoogleGenAI, Type } from "@google/genai";
import type { DailyMantra, DeityPrayers, FestivalStory, SpiritualGuidance } from '../types';

// Safely access the API key to prevent crashes in environments where process.env is not defined.
const API_KEY = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  // In a real app, you'd handle this more gracefully, maybe showing a message in the UI.
  // For this project, we assume the API_KEY is always available, but this makes the app runnable if it's not.
  console.error("API_KEY environment variable not set. AI features will be disabled.");
}

export const getDailyMantra = async (language: 'en' | 'hi'): Promise<DailyMantra | null> => {
  const fallbackMantra = {
    quote: "Om Bhur Bhuvah Swaha, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat",
    meaning: "We meditate on the glory of the Creator; Who has created the Universe; Who is worthy of Worship; Who is the embodiment of Knowledge and Light; Who is the remover of all Sin and Ignororance; May He enlighten our Intellect.",
    source: "Gayatri Mantra, Rigveda"
  };

  if (!ai) {
    console.error("Error fetching daily mantra: Gemini AI client not initialized.");
    return fallbackMantra;
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a single, short, inspirational Hindu mantra or a quote from a sacred text like the Vedas or Bhagavad Gita. The content (quote, meaning, source) should be in ${language === 'hi' ? 'Hindi (Devanagari script)' : 'English'}. The JSON keys must remain in English.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            quote: {
              type: Type.STRING,
              description: "The transliterated mantra or quote in the requested language.",
            },
            meaning: {
              type: Type.STRING,
              description: "A brief one-sentence explanation of the quote's meaning in the requested language.",
            },
            source: {
              type: Type.STRING,
              description: "The source of the quote, e.g., 'Bhagavad Gita 2.47', in the requested language."
            }
          },
          required: ["quote", "meaning", "source"]
        },
      },
    });

    const text = response.text.trim();
    const mantraData: DailyMantra = JSON.parse(text);
    return mantraData;

  } catch (error) {
    console.error("Error fetching daily mantra from Gemini API:", error);
    // Return a fallback mantra in case of an API error
    return fallbackMantra;
  }
};

export const getPrayersForDeity = async (deityName: string, language: 'en' | 'hi'): Promise<DeityPrayers | null> => {
  if (!ai) {
    console.error(`Error fetching prayers for ${deityName}: Gemini AI client not initialized.`);
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a detailed list of prayers for the Hindu deity '${deityName}'. Provide a list of 4-5 famous mantras, 4-5 famous aartis, and 4-5 famous bhajans. The text content (titles, lyrics, translations) should be in ${language === 'hi' ? 'Hindi (using Devanagari script)' : 'English'}. For mantras, provide title, original Sanskrit, transliteration, and a translation in the requested language. For aartis and bhajans, provide title and lyrics. The JSON schema keys must remain in English as specified.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mantras: {
              type: Type.ARRAY,
              description: "A list of 4-5 famous mantras for the deity.",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Title of the mantra." },
                  sanskrit: { type: Type.STRING, description: "Mantra in Sanskrit script." },
                  transliteration: { type: Type.STRING, description: "Mantra in romanized script." },
                  translation: { type: Type.STRING, description: "Translation of the mantra in the requested language." }
                },
                required: ["title", "sanskrit", "transliteration", "translation"]
              }
            },
            aartis: {
              type: Type.ARRAY,
              description: "A list of 4-5 famous aartis for the deity.",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Title of the aarti." },
                  lyrics: {
                    type: Type.ARRAY,
                    description: "Lyrics of the aarti, with each line as a separate string.",
                    items: { type: Type.STRING }
                  }
                },
                 required: ["title", "lyrics"]
              }
            },
            bhajans: {
              type: Type.ARRAY,
              description: "A list of 4-5 famous bhajans for the deity.",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Title of the bhajan." },
                  lyrics: {
                    type: Type.ARRAY,
                    description: "Lyrics of the bhajan, with each line as a separate string.",
                    items: { type: Type.STRING }
                  }
                },
                 required: ["title", "lyrics"]
              }
            }
          },
          required: ["mantras", "aartis", "bhajans"]
        },
      },
    });
    
    const text = response.text.trim();
    const prayersData: DeityPrayers = JSON.parse(text);
    return prayersData;
  } catch (error) {
    console.error(`Error fetching prayers for ${deityName}:`, error);
    return null;
  }
};

export const getFestivalStory = async (festivalName: string, language: 'en' | 'hi'): Promise<FestivalStory | null> => {
  if (!ai) {
    console.error(`Error fetching story for ${festivalName}: Gemini AI client not initialized.`);
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a story and significance for the Hindu festival '${festivalName}'. The content should be in ${language === 'hi' ? 'Hindi (Devanagari script)' : 'English'}. The JSON keys must remain in English.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "The title of the story in the requested language.",
            },
            story: {
              type: Type.STRING,
              description: "The story behind the festival in the requested language.",
            },
            significance: {
              type: Type.STRING,
              description: "The cultural and spiritual significance of the festival in the requested language."
            }
          },
          required: ["title", "story", "significance"]
        },
      },
    });

    const text = response.text.trim();
    const storyData: FestivalStory = JSON.parse(text);
    return storyData;

  } catch (error)
 {
    console.error(`Error fetching story for ${festivalName}:`, error);
    return null;
  }
};

export const getSpiritualGuidance = async (userInput: string, language: 'en' | 'hi'): Promise<SpiritualGuidance | null> => {
  if (!ai) {
    console.error("Error fetching spiritual guidance: Gemini AI client not initialized.");
    return null;
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Act as a wise and compassionate spiritual guide rooted in Sanatan Dharma. The user is seeking guidance for the following situation: "${userInput}". First, provide practical and comforting advice based on Hindu philosophy (concepts like Dharma, Karma, selfless action from the Bhagavad Gita, etc.). Keep this guidance concise and uplifting. Second, find and recount a relevant mythological story from Hindu scriptures (like the Puranas, Ramayana, Mahabharata, etc.) that offers a lesson or perspective related to the user's situation. The entire response must be in ${language === 'hi' ? 'Hindi (Devanagari script)' : 'English'}. The JSON keys must remain in English.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            guidance: {
              type: Type.STRING,
              description: "Comforting advice based on Hindu philosophy in the requested language."
            },
            story: {
              type: Type.OBJECT,
              properties: {
                title: {
                  type: Type.STRING,
                  description: "The title of the related mythological story in the requested language."
                },
                narrative: {
                  type: Type.STRING,
                  description: "The full narrative of the story in the requested language."
                }
              },
              required: ["title", "narrative"]
            }
          },
          required: ["guidance", "story"]
        },
      },
    });

    const text = response.text.trim();
    const guidanceData: SpiritualGuidance = JSON.parse(text);
    return guidanceData;

  } catch (error) {
    console.error("Error fetching spiritual guidance:", error);
    return null;
  }
};

export const getAiSearchResponse = async (query: string, language: 'en' | 'hi'): Promise<string | null> => {
  if (!ai) {
    console.error(`Error fetching AI search response for "${query}": Gemini AI client not initialized.`);
    return null;
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `As an expert on Sanatan Dharma, provide a detailed and readable explanation about '${query}'. Structure the response with clear headings for different sections (e.g., Introduction, Symbolism, Stories, Significance, etc., where applicable). Use paragraphs and line breaks to make it easy to read. Ensure the response is in ${language === 'hi' ? 'Hindi (Devanagari script)' : 'English'}. Do not use markdown formatting.`,
    });

    return response.text.trim();
  } catch (error) {
    console.error(`Error fetching AI search response for "${query}":`, error);
    return null;
  }
};