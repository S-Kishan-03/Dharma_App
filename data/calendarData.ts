import type { PanchangDay } from '../types';

const tithis = ["Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima", "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"];
const nakshatras = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashirsha", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];

const generateMonthData = (daysInMonth: number, eventMap: Record<number, { eventName: string; description: string }[]>) => {
  const data: PanchangDay[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    data.push({
      day,
      tithi: tithis[(day - 1 + Math.floor(day/2)) % tithis.length],
      nakshatra: nakshatras[(day - 1 + Math.floor(day/3)) % nakshatras.length],
      events: eventMap[day] || [],
    });
  }
  return data;
};

export const staticCalendarData: Record<string, PanchangDay[]> = {
  '2024-01': generateMonthData(31, {
    15: [{ eventName: 'Makar Sankranti / Pongal', description: 'Harvest festival marking the sun\'s transit into Capricorn.' }]
  }),
  '2024-02': generateMonthData(29, {
    14: [{ eventName: 'Vasant Panchami', description: 'Celebrates the arrival of spring and honors Goddess Saraswati.' }]
  }),
  '2024-03': generateMonthData(31, {
    8: [{ eventName: 'Maha Shivaratri', description: 'The great night of Shiva, observed with fasting and prayer.' }],
    25: [{ eventName: 'Holi', description: 'Festival of colors, celebrating spring and the victory of good over evil.' }]
  }),
  '2024-04': generateMonthData(30, {
    9: [{ eventName: 'Ugadi / Gudi Padwa', description: 'New Year festival in several Indian states.' }],
    13: [{ eventName: 'Vaisakhi / Vishu', description: 'Harvest festival celebrated in Punjab, Kerala, and other regions.' }],
    17: [{ eventName: 'Ram Navami', description: 'Celebration of the birth of Lord Rama.' }],
    23: [{ eventName: 'Hanuman Jayanti', description: 'Celebration of the birth of Lord Hanuman.' }]
  }),
  '2024-05': generateMonthData(31, {
    10: [{ eventName: 'Akshaya Tritiya', description: 'Auspicious day for new beginnings and investments.' }],
    23: [{ eventName: 'Buddha Purnima', description: 'Commemorates the birth, enlightenment, and passing of Lord Buddha.' }]
  }),
  '2024-06': generateMonthData(30, {}),
  '2024-07': generateMonthData(31, {}),
  '2024-08': generateMonthData(31, {
    7: [{ eventName: 'Hariyali Teej', description: 'Festival celebrating monsoon and Goddess Parvati.' }],
    9: [{ eventName: 'Nag Panchami', description: 'Day of traditional worship of snakes or serpents.' }],
    19: [{ eventName: 'Raksha Bandhan', description: 'Celebrates the bond between brothers and sisters.' }],
    26: [{ eventName: 'Janmashtami', description: 'Celebration of the birth of Lord Krishna.' }]
  }),
  '2024-09': generateMonthData(30, {
    7: [{ eventName: 'Ganesh Chaturthi', description: 'Celebration of the birth of Lord Ganesha.' }],
    15: [{ eventName: 'Onam', description: 'Harvest festival celebrated in Kerala.' }]
  }),
  '2024-10': generateMonthData(31, {
    3: [{ eventName: 'Navratri Begins', description: 'Start of the nine-night festival dedicated to Goddess Durga.' }],
    12: [{ eventName: 'Dussehra', description: 'Celebrates the victory of Lord Rama over Ravana.' }]
  }),
  '2024-11': generateMonthData(30, {
    1: [{ eventName: 'Diwali', description: 'Festival of lights, celebrating the victory of good over evil.' }]
  }),
  '2024-12': generateMonthData(31, {}),
};