import type { StaticDeityInfo } from '../types';

// This data is a merge of the original ganeshaData.ts and the more complete
// arrays from the previous hardcoded object in deityData.ts.
export const ganeshaStaticInfo: StaticDeityInfo = {
  name: "Ganesha",
  description: "The remover of obstacles, god of new beginnings.",
  other_names: ["Ganapati", "Vinayaka", "Vighnaharta", "Pillaiyar", "Gajanana", "Bhalchandra"],
  symbolism: {
    vehicle: "Mouse (Mushak)",
    elements: [
      { name: "Elephant Head", significance: "Symbolizes wisdom, understanding, and a discriminating intellect." },
      { name: "Large Ears", significance: "Represent listening more and paying attention to knowledge." },
      { name: "Trunk", significance: "Represents high efficiency and adaptability." },
      { name: "Four Arms", significance: "Represent the four inner attributes of the subtle body: mind, intellect, ego, and conditioned conscience." },
      { name: "Modak", significance: "His favorite sweet, which represents the reward of spiritual seeking." },
      { name: "Snake Belt", significance: "Represents the cosmic energy in all its forms." },
    ],
    significance: "Remover of obstacles, God of wisdom, intellect, and prosperity."
  },
  story: [
    {
      title: "The Story of Birth",
      narrative: "Ganesha was created by Goddess Parvati from turmeric paste to guard her while she bathed. When Lord Shiva returned, Ganesha, unaware of his identity, denied him entry. In the ensuing fight, Shiva unknowingly beheaded the boy. To appease a distraught Parvati, Shiva replaced Ganesha's head with that of the first living creature he found, which was an elephant."
    },
    {
      title: "The Broken Tusk and Mahabharata",
      narrative: "When the sage Vyasa wanted to compose the Mahabharata, he needed a scribe who could write as fast as he could dictate. Lord Brahma suggested Ganesha for this task. Ganesha agreed on one condition - that Vyasa would not pause in his dictation. When Ganesha's pen broke during writing, he broke off one of his own tusks to continue, ensuring the epic was completed without interruption."
    },
    {
      title: "The Race Around the World",
      narrative: "Once, Shiva and Parvati wanted to find the most suitable husband for their daughter. They decided to hold a contest - whoever could circle the world three times the fastest would win her hand. Ganesha's brother Kartikeya immediately set off on his peacock. Ganesha, however, simply circled his parents three times, saying 'My parents are my world.' Impressed by his wisdom, they declared him the winner."
    },
    {
      title: "The Moon's Curse",
      narrative: "After defeating the demon Gajamukhasura, Ganesha was returning home when the moon and his wives laughed at his large belly. Angered, Ganesha cursed the moon that anyone who looked at it on Ganesh Chaturthi would be accused of stealing. Later, when he realized his curse was too harsh, he modified it so that those who accidentally saw the moon could remedy it by listening to or reading the story of the Syamantaka jewel."
    }
  ],
  temples: [
    { name: "Siddhivinayak Temple", location: "Mumbai, Maharashtra", importance: "One of the richest and most visited Ganesha temples in India." },
    { name: "Dagdusheth Halwai Ganpati Temple", location: "Pune, Maharashtra", importance: "Famous for its grand Ganesh Chaturthi celebrations and opulent idol." },
    { name: "Ganpatipule Temple", location: "Ratnagiri, Maharashtra", importance: "A self-manifested (swayambhu) idol located on the scenic Konkan coast." },
    { name: "Uchi Pillayar Temple", location: "Tiruchirappalli, Tamil Nadu", importance: "A historic temple situated atop a hill, offering panoramic views of the city." },
    { name: "Kanipakam Vinayaka Temple", location: "Chittoor, Andhra Pradesh", importance: "Known for its self-manifested idol of Ganesha that is believed to grow in size." },
    { name: "Moti Dungri Ganesh Temple", location: "Jaipur, Rajasthan", importance: "A prominent hilltop temple with a rich history, attracting thousands of devotees." },
  ],
  aarti: [
    {
      name: "Sukhakarta Dukhaharta",
      language: "Marathi",
      lyrics: [
        "Sukh karta dukh harta, varta vighnachi",
        "Nurvi purvi prem krupa jayachi",
        "Sarvangi sundar uti shendurachi",
        "Kanthi jhalke mal mukataphalaanchi",
        "Jaidev jaidev jai mangal murti",
        "Darshanmatre mankamana purti",
        "Ratnakhachit fara tuj gaurikumra",
        "Chandanachi uti kumkumkeshara",
        "Hirejadit mugut shobhato bara",
        "Runjhunati nupure charni ghagaria",
        "Jaidev jaidev jai mangal murti",
        "Darshanmatre mankamana purti",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra",
        "Mahaduti pavitra pavitra pavitra"
      ]
    },
    {
      name: "Jai Ganesh Jai Ganesh Deva",
      language: "Hindi",
      lyrics: [
        "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva.",
        "Mata jaki Parvati, Pita Mahadeva.",
        "Ek dant dayavant, char bhuja dhari.",
        "Mathe par tilak sohe, muse ki savari.",
        "Pan chadhe, phul chadhe, aur chadhe meva.",
        "Laduan ka bhog lage, sant kare seva.",
        "Andhan ko ankh det, kodhin ko kaya.",
        "Banjhan ko putra det, nirdhan ko maya.",
        "'Sur' shyam sharan aye, safal kije seva.",
        "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva.",
      ]
    },
    {
        name: "Shendur Lal Chadhayo",
        language: "Hindi",
        lyrics: [
          "Shendur laal chadhaayo achchhaa gajamukha ko",
          "Dondil laal biraaje sut gaurihar ko",
          "Hath liye gud laddu saai survarko",
          "Mahimaa kahe na jaay laagat hun pad ko",
          "Jai Dev, Jai Dev",
        ]
    },
    {
        name: "Ghalin Lotangan",
        language: "Marathi",
        lyrics: [
            "Ghalin lotangan vandin charan",
            "Dolyani pahin rup tujhe",
            "Preme alingin anande pujin",
            "Bhave ovalin mhane nama",
            "Sukhachi dayi tu mala",
            "Dukhachi harta tu mala",
            "Vighnachi nashak tu mala",
            "Vighnachi nashak tu mala"
        ]
    },
    {
        name: "Ganapati Bappa Morya",
        language: "Marathi",
        lyrics: [
            "Ganapati Bappa Morya",
            "Pudhchya varshi lavkar ya",
            "Ganapati Bappa Morya",
            "Pudhchya varshi lavkar ya",
            "Ganapati Bappa Morya",
            "Pudhchya varshi lavkar ya",
            "Ganapati Bappa Morya",
            "Pudhchya varshi lavkar ya",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa",
            "Agle baras tu jaldi aa"
        ]
    },
    {
        name: "Om Jai Ganeshaya Namaha",
        language: "Sanskrit",
        lyrics: [
            "Om Jai Ganeshaya Namaha",
            "Om Jai Ganeshaya Namaha",
            "Om Jai Ganeshaya Namaha",
            "Om Jai Ganeshaya Namaha",
            "Gajaananam Bhoota Ganaadhi Sevitam",
            "Kapitta Jamboophala Saara Bhakshitam",
            "Uma Sutam Shoka Vinaasha Kaaranam",
            "Namaami Vighneshwara Paada Pankajam",
            "Om Jai Ganeshaya Namaha",
            "Om Jai Ganeshaya Namaha",
            "Om Jai Ganeshaya Namaha",
            "Om Jai Ganeshaya Namaha"
        ]
    }
  ],
  bhajans: [
    {
      name: "Vakratunda Mahakaya",
      language: "Sanskrit",
      lyrics: [
        "Vakratunda Mahakaya, Surya Koti Samaprabha",
        "Nirvighnam Kuru Me Deva, Sarva Karyeshu Sarvada"
      ]
    },
    {
      name: "Om Gan Ganapataye Namo Namah",
      language: "Sanskrit",
      lyrics: [
        "Om Gan Ganapataye Namo Namah",
        "Shree Siddhi Vinayak Namo Namah",
        "Ashta Vinayak Namo Namah",
        "Ganapati Bappa Moraya"
      ]
    },
    {
      name: "Gajanan Shri Ganaraya",
      language: "Marathi",
      lyrics: [
        "Gajanana shri ganaraya, aadhi vandu tujha morya",
        "Mangalmurti Morya, sindhur charchit",
        "Dhavale muskache vahan, Gajanana shri ganaraya",
      ]
    },
    {
      name: "Morya Re Bappa Morya Re",
      language: "Marathi",
      lyrics: [
          "Morya re, Bappa Morya re",
          "Morya re, Bappa Morya re",
          "Deva tuzhya navacha yed lagala",
          "Sara gao govind jhalay, anand sajala",
          "Morya re, Bappa Morya re",
          "Morya re, Bappa Morya re",
          "Tuzhya charani majhya manacha",
          "Nirantar prema priti anand sajala",
          "Morya re, Bappa Morya re",
          "Morya re, Bappa Morya re"
      ]
    },
    {
      name: "Ganesh Stotram",
      language: "Sanskrit",
      lyrics: [
          "Shuklaambara Dharam Vishnum",
          "Shashi Varnam Chatur Bhujam",
          "Prasanna Vadanam Dhyayet",
          "Sarva Vighnopa Shaantaye",
          "Agajaanana Padmaarkam",
          "Gajaananam Aharnisham",
          "Aneka Danta Bhaktam",
          "Tam Ekadantam Upasmahe",
          "Vakratunda Mahakaya",
          "Surya Koti Samaprabha",
          "Nirvighnam Kuru Me Deva",
          "Sarva Kaaryeshu Sarvada"
      ]
    },
    {
      name: "Ganesh Atharvashirsha",
      language: "Sanskrit",
      lyrics: [
          "Om Bhadram Karnebhih Shrnuyama Devah",
          "Bhadram Pashyemaakshabhir Yajatrah",
          "Sthirair Angais Tushhtuvaamsas Tanubhih",
          "Vyashema Devahitam Yadaayuh",
          "Swasti Na Indro Vridhashravah",
          "Swasti Nah Pushha Vishva Vedah",
          "Swasti Nastarkshyo Arishtanemih",
          "Swasti No Brihaspatir Dadhaatu"
      ]
    }
  ],
  mantras: [
    {
      name: "Ganesh Gayatri Mantra",
      mantra: "Om Ekadantaya Viddhamahe, Vakratundaya Dhimahi, Tanno Danti Prachodayat",
      meaning: "We pray to the one with a single tusk and the curved trunk. May the tusked one illuminate our minds."
    },
    {
      name: "Simple Ganesha Mantra",
      mantra: "Om Gam Ganapataye Namaha",
      meaning: "Salutations to Lord Ganesha, the remover of obstacles. This is a powerful mantra to invoke his blessings."
    },
    {
      name: "Shree Ganesh Mool Mantra",
      mantra: "ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वर वरद सर्वजनं मे वशमानय स्वाहा।",
      meaning: "This is a powerful mantra that combines several 'beej' (seed) sounds to invoke Lord Ganesha's blessings for success, wealth, and influence."
    },
    {
      name: "Vighna Nashan Mantra",
      mantra: "गणपतिर्विघ्नराजो लम्बतुण्डो गजाननः। द्वैमातुरश्च हेरम्ब एकदन्तो गणाधिपः॥",
      meaning: "A prayer invoking various names of Ganesha to remove all obstacles from one's path."
    }
  ],
  festivals: [
    {
      name: "Ganesh Chaturthi",
      date_range: "Bhadrapada Shukla Chaturthi (usually August/September)",
      importance: "The primary festival celebrating the birth of Lord Ganesha, with ten days of elaborate festivities and idol immersion."
    },
    {
      name: "Ganesh Jayanti",
      date_range: "Magha Shukla Chaturthi (usually January/February)",
      importance: "Also marks the birth of Lord Ganesha, primarily celebrated in Maharashtra and the Konkan coast."
    },
  ]
};
