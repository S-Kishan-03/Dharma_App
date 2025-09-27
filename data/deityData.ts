import type { StaticDeityInfo } from '../types';
import { ganeshaStaticInfo } from './ganeshaData';

export const staticDeityData: Record<string, StaticDeityInfo> = {
  'd1': ganeshaStaticInfo,
  'd2': {
    name: "Shiva",
    description: "The destroyer, one of the principal deities of Hinduism.",
    other_names: ["Mahadeva", "Shankara", "Bholenath", "Nataraja", "Rudra"],
    symbolism: {
      vehicle: "Nandi (Bull)",
      elements: [
        { name: "Trident (Trishula)", significance: "Represents the three fundamental powers of will, action, and knowledge, and control over the past, present, and future." },
        { name: "Crescent Moon", significance: "Symbolizes control over time and cycles, and his eternal nature." },
        { name: "Snake Around Neck (Vasuki)", significance: "Represents fearlessness, control over cosmic energy, and the dormant Kundalini Shakti." },
        { name: "Third Eye", significance: "Symbolizes wisdom, insight, and the destruction of evil and ignorance." }
      ],
      significance: "Represents destruction, transformation, meditation, and regeneration."
    },
    story: [{
      title: "The Cosmic Dancer",
      narrative: "Shiva, as the destroyer, maintains cosmic balance by dissolving the universe to pave the way for creation. He is worshiped as the supreme ascetic and the cosmic dancer (Nataraja), whose divine dance, the Tandava, sustains the rhythm of creation and destruction."
    }],
    temples: [
      { name: "Kashi Vishwanath Temple", location: "Varanasi, Uttar Pradesh", importance: "One of the twelve Jyotirlingas and one of the holiest temples for Shaivites." },
      { name: "Mahakaleshwar Temple", location: "Ujjain, Madhya Pradesh", importance: "One of the twelve Jyotirlingas, famous for its 'Bhasma Aarti'." },
      { name: "Kedarnath Temple", location: "Rudraprayag, Uttarakhand", importance: "A Jyotirlinga located in the Himalayas, part of the Char Dham pilgrimage." },
      { name: "Somnath Temple", location: "Prabhas Patan, Gujarat", importance: "The first among the twelve Jyotirlinga shrines of Shiva." }
    ],
    aarti: [
      {
        name: "Om Jai Shiv Omkara",
        language: "Hindi",
        lyrics: [
          "ॐ जय शिव ओंकारा, प्रभु जय शिव ओंकारा।",
          "ब्रह्मा विष्णु सदाशिव, अर्द्धाङ्गी धारा॥ ॐ जय शिव ओंकारा॥",
          "एकानन चतुरानन पञ्चानन राजे।",
          "हंसासन गरुड़ासन वृषवाहन साजे॥ ॐ जय शिव ओंकारा॥"
        ]
      },
      {
        name: "Karpur Gauram Karunavtaram",
        language: "Sanskrit",
        lyrics: [
            "कर्पूरगौरं करुणावतारं, संसारसारं भुजगेन्द्रहारम्।",
            "सदा वसन्तं हृदयारविन्दे, भवं भवानीसहितं नमामि॥"
        ]
      },
      {
        name: "Har Har Har Mahadev",
        language: "Hindi",
        lyrics: [
          "हर हर हर महादेव!",
          "सत्य, सनातन, सुन्दर, शिव सबके स्वामी।",
          "अविकारी, अविनाशी, अज, अन्तर्यामी॥",
          "हर हर हर महादेव!",
        ]
      }
    ],
    bhajans: [
      {
        name: "Shiv Tandav Stotram (Excerpt)",
        language: "Sanskrit",
        lyrics: [
          "जटाटवीगलज्जल प्रवाहपावितस्थले।",
          "गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्॥",
          "डमड्डमड्डमड्डमन्निनादवड्डमर्वयं।",
          "चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥"
        ]
      },
      {
        name: "Shiva Rudrashtakam Stotram (Excerpt)",
        language: "Sanskrit",
        lyrics: [
          "नमामीशमीशान निर्वाणरूपं।",
          "विभुं व्यापकं ब्रह्मवेदस्वरूपम्॥",
          "निजं निर्गुणं निर्विकल्पं निरीहं।",
          "चिदाकाशमाकाशवासं भजेऽहम्॥"
        ]
      },
      {
        name: "Hey Shambhu Baba Mere Bhole Nath",
        language: "Hindi",
        lyrics: [
            "हे शम्भू बाबा मेरे भोले नाथ",
            "तीनो लोक में तू ही तू।",
            "श्रद्धा मेरी तू भक्ति मेरी",
            "जन्मों जन्मों का साथी तू॥"
        ]
      },
      {
        name: "Subah Subah Le Shiv Ka Naam",
        language: "Hindi",
        lyrics: [
          "सुबह सुबह ले शिव का नाम, कर ले बन्दे यह शुभ काम।",
          "सुबह सुबह ले शिव का नाम, शिव आयेंगे तेरे काम॥",
          "खुद को राख लपेटे फिरते, औरों को देते धन धाम।",
          "देवों के हित विष पी डाला, नील कंठ को कोटि प्रणाम॥"
        ]
      }
    ],
    mantras: [
      {
        name: "Panchakshara Mantra",
        mantra: "ॐ नमः शिवाय॥",
        meaning: "Salutations to Lord Shiva, the auspicious one. It signifies devotion to Shiva."
      },
      {
        name: "Mahamrityunjaya Mantra",
        mantra: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
        meaning: "We worship the three-eyed One who is fragrant and who nourishes all. May He liberate us from death for the sake of immortality, even as the cucumber is severed from its bondage to the creeper."
      },
      {
        name: "Rudra Gayatri Mantra",
        mantra: "ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
        meaning: "Om, let me meditate on the great Purusha, Oh, greatest God, give me higher intellect, and let God Rudra illuminate my mind."
      },
      {
        name: "Shiva Dhyana Mantra",
        mantra: "करचरणकृतं वाक् कायजं कर्मजं वा श्रवणनयनजं वा मानसंवापराधं। विहितं विहितं वा सर्व मेतत् क्षमस्व जय जय करुणाब्धे श्री महादेव शम्भो॥",
        meaning: "A prayer asking for forgiveness for sins committed through actions, thoughts, and senses, acknowledging Shiva as the ocean of compassion."
      }
    ],
    festivals: [{
      name: "Maha Shivaratri",
      date_range: "Phalguna month, Krishna Paksha Chaturdashi",
      importance: "The great night of Shiva, where devotees observe fasting and night-long worship for spiritual purification and blessings."
    }]
  },
  'd3': {
    name: "Vishnu",
    description: "The preserver and protector of creation.",
    other_names: ["Narayana", "Hari", "Padmanabha", "Govinda"],
    symbolism: {
      vehicle: "Garuda (Eagle)",
      elements: [
        { name: "Conch (Panchajanya)", significance: "Represents the cosmic sound 'Om' and the origin of existence." },
        { name: "Chakra (Sudarshana)", significance: "A divine weapon that symbolizes the mind, destroys evil, and protects dharma." },
        { name: "Mace (Kaumodaki)", significance: "Represents mental and physical strength and the power of knowledge." },
        { name: "Lotus (Padma)", significance: "Symbolizes purity, beauty, spiritual liberation, and cosmic creation." }
      ],
      significance: "Maintains cosmic order (dharma), protects the universe from evil, and incarnates as avatars to restore balance."
    },
    story: [{
      title: "The Preserver God",
      narrative: "Vishnu maintains cosmic order and righteousness. He rests on the serpent Shesha in the cosmic ocean. He manifests in different avatars (incarnations), including Rama and Krishna, to restore dharma whenever evil forces threaten the world."
    }],
    temples: [
      { name: "Tirupati Balaji Temple", location: "Tirupati, Andhra Pradesh", importance: "A form of Vishnu, it is one of the richest and most visited temples in the world." },
      { name: "Padmanabhaswamy Temple", location: "Thiruvananthapuram, Kerala", importance: "Famous for its vast hidden treasures and the reclining idol of Vishnu." },
      { name: "Jagannath Temple", location: "Puri, Odisha", importance: "One of the Char Dham pilgrimage sites, dedicated to a form of Vishnu." },
      { name: "Badrinath Temple", location: "Badrinath, Uttarakhand", importance: "A Char Dham site dedicated to Vishnu as Badrinarayan." }
    ],
    aarti: [
      {
        name: "Om Jai Jagdish Hare",
        language: "Hindi",
        lyrics: [
          "ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।",
          "भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे॥ ॐ जय जगदीश हरे॥",
          "जो ध्यावे फल पावे, दुख बिनसे मन का।",
          "सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥ ॐ जय जगदीश हरे॥"
        ]
      },
      {
        name: "Shri Badrinath Ji Ki Aarti",
        language: "Hindi",
        lyrics: [
          "पवन मंद सुगंध शीतल, हेम मंदिर शोभितम।",
          "निकट गंगा बहत निर्मल, श्री बद्रीनाथ विश्व्म्भरम॥",
          "शेष सुमरन करत निशदिन, धरत ध्यान महेश्वरम।",
          "वेद ब्रह्मा करत स्तुति, श्री बद्रीनाथ विश्व्म्भरम॥",
        ]
      }
    ],
    bhajans: [
      {
        name: "Vishnu Sahasranama (Excerpt)",
        language: "Sanskrit",
        lyrics: [
          "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं।",
          "विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्॥",
          "लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं।",
          "वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥"
        ]
      },
      {
        name: "Achyutam Keshavam",
        language: "Sanskrit",
        lyrics: [
          "अच्युतम केशवं राम नारायणं, कृष्ण दामोदरं वासुदेवं हरिम्।",
          "श्रीधरं माधवं गोपिकावल्लभं, जानकी नायकं रामचंद्रं भजे॥",
        ]
      },
      {
        name: "Govinda Namalu",
        language: "Sanskrit",
        lyrics: [
          "गोविंदा नमो गोविंदा, श्रीनिवासा गोविंदा",
          "वेंकटरमणा गोविंदा, गोविंदा नमो गोविंदा",
          "तिरूपति वेंकटेशा गोविंदा, गोविंदा नमो गोविंदा"
        ]
      }
    ],
    mantras: [
      {
        name: "Dwadasakshari Mantra",
        mantra: "ॐ नमो भगवते वासुदेवाय॥",
        meaning: "Om, I bow to Lord Vasudeva. This mantra is a powerful tool for attaining spiritual liberation."
      },
      {
        name: "Vishnu Gayatri Mantra",
        mantra: "ॐ नारायणाय विद्महे वासुदेवाय धीमहि। तन्नो विष्णुः प्रचोदयात्॥",
        meaning: "Om, let me meditate on Lord Narayana, Oh, Lord Vasudeva, give me higher intellect, and let Lord Vishnu illuminate my mind."
      },
      {
        name: "Shantakaram Bhujagashayanam",
        mantra: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।",
        meaning: "A meditation on the peaceful form of Vishnu, who rests on a serpent, from whose navel springs the lotus of creation."
      },
      {
        name: "Mangalam Bhagwan Vishnu",
        mantra: "मङ्गलम् भगवान विष्णुः, मङ्गलम् गरुणध्वजः। मङ्गलम् पुण्डरी काक्षः, मङ्गलाय तनो हरिः॥",
        meaning: "Auspicious is Lord Vishnu, auspicious is the one with Garuda as his flag. Auspicious is the one with lotus-like eyes, Hari provides auspiciousness."
      }
    ],
    festivals: [{
      name: "Vaikuntha Ekadashi",
      date_range: "Margashirsha month, Shukla Paksha Ekadashi",
      importance: "An important fasting day dedicated to Lord Vishnu. It is believed that the gates of heaven (Vaikuntha) are opened on this day."
    }]
  },
  'd4': {
    name: "Durga",
    description: "The mother goddess, representing the power of good.",
    other_names: ["Parvati", "Chandi", "Shakti", "Mahishasuramardini"],
    symbolism: {
      vehicle: "Lion or Tiger",
      elements: [
        { name: "Trident (Trishula)", significance: "Gifted by Shiva, it symbolizes her power over the three worlds and three qualities (sattva, rajas, tamas)." },
        { name: "Multiple Arms with Weapons", significance: "Shows her readiness to combat evil from all directions, with weapons gifted by various gods." },
        { name: "Lotus", significance: "Represents detachment and spiritual consciousness, as she fights evil without being tainted by it." },
        { name: "Abhaya Mudra (Gesture of Fearlessness)", significance: "Assures her devotees of protection from all harm and fear." }
      ],
      significance: "Represents the collective divine energy (Shakti), protection, and the ultimate victory of good over evil."
    },
    story: [{
      title: "Slayer of Mahishasura",
      narrative: "Durga emerged from the combined energy of Brahma, Vishnu, and Shiva to defeat the powerful buffalo demon Mahishasura, who could not be defeated by any man or god. Her victory, celebrated as Durga Puja, symbolizes the triumph of righteousness (dharma) over evil (adharma)."
    }],
    temples: [
      { name: "Vaishno Devi Temple", location: "Katra, Jammu and Kashmir", importance: "A major pilgrimage site located in a cave, dedicated to the forms of the mother goddess." },
      { name: "Kamakhya Temple", location: "Guwahati, Assam", importance: "One of the oldest and most powerful" }
    ],
    aarti: [
      {
        name: "Jai Ambe Gauri",
        language: "Hindi",
        lyrics: [
          "जय अम्बे गौरी, मैया जय श्यामा गौरी।",
          "तुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥ ॐ जय अम्बे गौरी॥",
          "माँग सिन्दूर विराजत, टीको मृगमद को।",
          "उज्ज्वल से दोउ नैना, चन्द्रवदन नीको॥ ॐ जय अम्बे गौरी॥"
        ]
      }
    ],
    bhajans: [
      {
        name: "Durga Chalisa (Excerpt)",
        language: "Hindi",
        lyrics: [
          "नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥",
          "निरंकार है ज्योति तुम्हारी। तिहूँ लोक फैली उजियारी॥",
          "शशि ललाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥",
          "रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥"
        ]
      },
      {
        name: "Sarva Mangala Mangalye",
        language: "Sanskrit",
        lyrics: [
          "सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके।",
          "शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तुते॥"
        ]
      }
    ],
    mantras: [
      {
        name: "Durga Beej Mantra",
        mantra: "ॐ दुं दुर्गायै नमः॥",
        meaning: "Om, salutations to Goddess Durga. This is a powerful seed mantra to invoke her protection and blessings."
      },
      {
        name: "Navarna Mantra",
        mantra: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चै॥",
        meaning: "A powerful mantra dedicated to the nine forms of Durga, seeking blessings for knowledge, wealth, and protection."
      }
    ],
    festivals: [
      {
        name: "Navratri",
        date_range: "Ashvin month, Shukla Paksha Pratipada to Navami",
        importance: "A nine-night festival celebrating the nine forms of Goddess Durga, culminating in Vijayadashami."
      },
      {
        name: "Durga Puja",
        date_range: "Ashvin month, concurrent with Navratri",
        importance: "A major festival, especially in West Bengal, celebrating Durga's victory over Mahishasura."
      }
    ]
  },
  'd5': {
    name: "Hanuman",
    description: "The divine vanara companion of the god Rama.",
    other_names: ["Hanumanji", "Hanuman Chalisa"],
    symbolism: {
      vehicle: "Vahana (Eagle)",
      elements: [
        { name: "Trident (Trishula)", significance: "Gifted by Shiva, it symbolizes her power over the three worlds and three qualities (sattva, rajas, tamas)." },
        { name: "Multiple Arms with Weapons", significance: "Shows her readiness to combat evil from all directions, with weapons gifted by various gods." },
        { name: "Lotus", significance: "Represents detachment and spiritual consciousness, as she fights evil without being tainted by it." },
        { name: "Abhaya Mudra (Gesture of Fearlessness)", significance: "Assures her devotees of protection from all harm and fear." }
      ],
      significance: "Represents the collective divine energy (Shakti), protection, and the ultimate victory of good over evil."
    },
    story: [{
      title: "The Divine Vanara Companion of Rama",
      narrative: "Hanuman is a Hindu god and a divine vanara companion of the god Rama. Hanuman is one of the central characters of the Hindu epic Ramayana. He is an ardent devotee of Rama and one of the chiranjivis. He is the son of Anjana and Kesari, and is also described as the son of the wind-god Vayu, who according to several stories, played a role in his birth."
    }],
    temples: [
      { name: "Hanuman Temple", location: "Varanasi, Uttar Pradesh", importance: "A major pilgrimage site dedicated to Hanuman." },
      { name: "Hanuman Temple", location: "Varanasi, Uttar Pradesh", importance: "A major pilgrimage site dedicated to Hanuman." }
    ],
    aarti: [
      {
        name: "Jai Hanuman",
        language: "Hindi",
        lyrics: [
          "जय हनुमान, मैया जय हनुमान।",
          "तुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥ ॐ जय हनुमान॥",
          "माँग सिन्दूर विराजत, टीको मृगमद को।",
          "उज्ज्वल से दोउ नैना, चन्द्रवदन नीको॥ ॐ जय हनुमान॥"
        ]
      }
    ],
    bhajans: [
      {
        name: "Hanuman Chalisa (Excerpt)",
        language: "Hindi",
        lyrics: [
          "नमो नमो हनुमाने सुख करनी। नमो नमो हनुमाने दुःख हरनी॥",
          "निरंकार है ज्योति तुम्हारी। तिहूँ लोक फैली उजियारी॥",
          "शशि ललाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥",
          "रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥"
        ]
      }
    ],
    mantras: [
      {
        name: "Hanuman Beej Mantra",
        mantra: "ॐ हनुमानाय नमः॥",
        meaning: "Om, salutations to Lord Hanuman. This is a powerful seed mantra to invoke his protection and blessings."
      },
      {
        name: "Hanuman Chalisa Mantra",
        mantra: "ॐ हनुमानाय नमः॥",
        meaning: "Om, salutations to Lord Hanuman. This is a powerful seed mantra to invoke his protection and blessings."
      }
    ],
    festivals: [
      {
        name: "Hanuman Jayanti",
        date_range: "Chaitra Shukla Chaturthi (usually March/April)",
        importance: "A major festival celebrating the birth of Lord Hanuman."
      }
    ]
  },
  'd6' :{
    "name": "Hanuman",
    "description": "The Vanara (monkey) devotee of Lord Rama and a central character in the Ramayana. He symbolizes strength, devotion, perseverance, and celibacy.",
    "other_names": [
      "Anjaneya",
      "Maruti",
      "Pavanputra",
      "Bajrangbali",
      "Sankat Mochan"
    ],
    "symbolism": {
      "vehicle": "N/A (He can fly and leap great distances)",
      "elements": [
        {
          "name": "Gada (Mace)",
          "significance": "Symbolizes physical strength, authority, self-control, and the destruction of evil."
        },
        {
          "name": "Mountain (Dronagiri Parvat)",
          "significance": "Represents his ability to overcome any obstacle, as he lifted the entire mountain to bring the Sanjeevani herb."
        },
        {
          "name": "Vajra (Thunderbolt-like body)",
          "significance": "Symbolizes his immense power and invincibility, often referred to by his name 'Bajrangbali' (one whose limbs are as strong as a Vajra)."
        },
        {
          "name": "Namaste/Folded Hands",
          "significance": "Often depicted in an attitude of eternal service and devotion (Bhakti) to Lord Rama."
        }
      ],
      "significance": "Embodies the ideal of selfless devotion, courage, and complete surrender to the Divine Will (Dharma)."
    },
    "story": [
      {
        "title": "Bringing the Sanjeevani Herb",
        "narrative": "During the war in Lanka, when Rama's brother Lakshmana was grievously wounded, Hanuman was sent to the Dronagiri mountain to fetch the Sanjeevani (life-restoring) herb. Unable to identify the herb before sunrise, he lifted the entire mountain and carried it back, saving Lakshmana's life and proving his superhuman strength and dedication."
      }
    ],
    "temples": [
      {
        "name": "Mehandipur Balaji Temple",
        "location": "Rajasthan, India",
        "importance": "A famous temple known for its healing powers, particularly concerning mental health and exorcism."
      },
      {
        "name": "Sankat Mochan Hanuman Temple",
        "location": "Varanasi, Uttar Pradesh, India",
        "importance": "Believed to be established by the poet-saint Tulsidas, dedicated to Hanuman as the 'remover of difficulties' (Sankat Mochan)."
      }
    ],
    "aarti": [
      {
        "name": "Aarti Keeje Hanuman Lala Ki (Excerpt)",
        "language": "Hindi",
        "lyrics": [
          "आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥",
          "जाके बल से गिरिवर कांपे। रोग दोष जाके निकट न झाँके॥"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Hanuman Chalisa (Excerpt)",
        "language": "Awadhi/Hindi",
        "lyrics": [
          "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
          "राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥"
        ]
      }
    ],
    "mantras": [
      {
        "name": "Hanuman Beej Mantra",
        "mantra": "ॐ हं हनुमते रुद्रात्मकाय हुं फट्॥",
        "meaning": "Salutations to Hanuman, the son of the Wind God and an incarnation of Lord Shiva, a mantra for protection and strength."
      }
    ],
    "festivals": [
      {
        "name": "Hanuman Jayanti",
        "date_range": "Chaitra Purnima (full moon day of the Hindu lunar month of Chaitra)",
        "importance": "Celebrates the birth of Lord Hanuman, with devotees applying vermillion (sindoor) to his idol and reciting the Hanuman Chalisa."
      }
    ]
  },
  'd7' :
  {
    "name": "Lakshmi",
    "description": "The Hindu Goddess of wealth, fortune, prosperity (both material and spiritual), and the embodiment of beauty.",
    "other_names": [
      "Shri",
      "Kamala",
      "Padma",
      "Jaladhi-ja (Ocean-born)",
      "Vishnu Priya"
    ],
    "symbolism": {
      "vehicle": "Owl (Ulooka)",
      "elements": [
        {
          "name": "Lotus (Padma)",
          "significance": "Represents purity, beauty, and spiritual power, as she is often depicted standing or sitting on a fully bloomed lotus (Padmasana)."
        },
        {
          "name": "Gold Coins",
          "significance": "Flowing from her hands, they symbolize the wealth and prosperity she bestows."
        },
        {
          "name": "Four Hands",
          "significance": "Represent the four goals of human life (Purusharthas): Dharma, Artha, Kama, and Moksha."
        },
        {
          "name": "Elephants",
          "significance": "Often shown flanking her, spraying water, they symbolize royalty, rain, and fertility."
        }
      ],
      "significance": "Represents fortune, grace, and the energy (Shakti) that enables Lord Vishnu to maintain cosmic order and fulfill the desires of his devotees."
    },
    "story": [
      {
        "title": "Samudra Manthan (Churning of the Ocean)",
        "narrative": "Lakshmi emerged from the ocean of milk (Kshira Sagara) during the great churning performed by the Devas and Asuras. She chose Lord Vishnu as her eternal consort, symbolizing the highest form of spiritual and material abundance attained after great collective effort."
      }
    ],
    "temples": [
      {
        "name": "Mahalakshmi Temple",
        "location": "Kolhapur, Maharashtra, India",
        "importance": "A major Shakti Peetha and one of the most significant temples dedicated to the Goddess."
      },
      {
        "name": "Padmavathi Ammavari Temple",
        "location": "Tiruchanur, Andhra Pradesh, India",
        "importance": "Dedicated to Goddess Padmavathi, a form of Lakshmi and the consort of Lord Venkateswara (Vishnu)."
      }
    ],
    "aarti": [
      {
        "name": "Om Jai Lakshmi Mata (Excerpt)",
        "language": "Hindi",
        "lyrics": [
          "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।",
          "तुमको निशिदिन सेवत, हरि विष्णु विधाता॥ ॐ जय लक्ष्मी माता॥"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Mahalakshmi Ashtakam (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।",
          "शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तुते॥"
        ]
      }
    ],
    "mantras": [
      {
        "name": "Mahalakshmi Mantra",
        "mantra": "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥",
        "meaning": "Salutations to the Great Goddess Lakshmi, residing in the lotus, please shower your grace and prosperity."
      }
    ],
    "festivals": [
      {
        "name": "Diwali (Deepavali)",
        "date_range": "Kartik Amavasya (new moon day of the Hindu lunar month of Kartik)",
        "importance": "The most significant festival dedicated to Lakshmi, where she is worshipped to invoke wealth and prosperity for the coming year."
      },
      {
        "name": "Sharad Purnima (Kojagiri Purnima)",
        "date_range": "Ashwin Purnima (full moon day of the Hindu lunar month of Ashwin)",
        "importance": "Lakshmi is said to visit the earth on this night, bestowing wealth on those who are awake."
      }
    ]
  },
  'd8':
  {
    "name": "Krishna",
    "description": "The eighth avatar of the god Vishnu. A major deity in Hinduism, he is the God of protection, compassion, tenderness, and love.",
    "other_names": [
      "Govinda",
      "Gopala",
      "Keshava",
      "Madhava",
      "Murali Manohar"
    ],
    "symbolism": {
      "vehicle": "Garuda (though often depicted on foot or chariot with Arjuna)",
      "elements": [
        {
          "name": "Flute (Murali)",
          "significance": "Represents the call of the Divine, which enchants all creation and summons souls to the path of devotion (Bhakti)."
        },
        {
          "name": "Peacock Feather (Mayura-mukut)",
          "significance": "Worn on his crown, it symbolizes divine beauty, purity, and the fullness of his life."
        },
        {
          "name": "Cows",
          "significance": "As a cowherd (Gopala), the cows symbolize the gentle and nurturing aspect of nature and the Supreme Being's role as protector."
        },
        {
          "name": "Blue/Dark Color (Shyam)",
          "significance": "Symbolizes the infinite, all-attractive nature of the Divine, like the vastness of the sky or the ocean."
        }
      ],
      "significance": "Represents the supreme reality, divine love, and the integration of both the absolute and personal aspects of God."
    },
    "story": [
      {
        "title": "Bhagavad Gita",
        "narrative": "As the charioteer and counselor to Arjuna during the Mahabharata war, Krishna delivers the discourse known as the Bhagavad Gita, teaching the paths of duty (Karma Yoga), knowledge (Jnana Yoga), and devotion (Bhakti Yoga)."
      }
    ],
    "temples": [
      {
        "name": "Jagannath Temple",
        "location": "Puri, Odisha, India",
        "importance": "A major pilgrimage site for Lord Jagannath, a form of Krishna."
      },
      {
        "name": "Banke Bihari Temple",
        "location": "Vrindavan, Uttar Pradesh, India",
        "importance": "One of the most famous temples dedicated to the youthful form of Krishna."
      }
    ],
    "aarti": [
      {
        "name": "Aarti Kunj Bihari Ki (Excerpt)",
        "language": "Hindi",
        "lyrics": [
          "आरती कुञ्ज बिहारी की। श्री गिरिधर कृष्ण मुरारी की॥",
          "गले में बैजंती माला। बजावे मुरली मधुर बाला॥"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Hare Krishna Mahamantra (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "हरे कृष्ण हरे कृष्ण। कृष्ण कृष्ण हरे हरे॥",
          "हरे राम हरे राम। राम राम हरे हरे॥"
        ]
      }
    ],
    "mantras": [
      {
        "name": "Moola Mantra (Klim Krishnaya)",
        "mantra": "ॐ क्लीं कृष्णाय नमः॥",
        "meaning": "Salutations to Lord Krishna, the mantra focuses on his all-attractive, captivating, and loving divine form."
      }
    ],
    "festivals": [
      {
        "name": "Krishna Janmashtami",
        "date_range": "Bhadrapada month, Krishna Paksha Ashtami (8th day of the dark fortnight)",
        "importance": "Celebrates the birth of Lord Krishna. Devotees fast until midnight (his time of birth) and perform a ceremonial birth ritual."
      },
      {
        "name": "Holi",
        "date_range": "Phalguna Purnima (full moon day of the Hindu lunar month of Phalguna)",
        "importance": "The festival of colors is strongly associated with Krishna and his playful pastimes with Radha and the Gopis in Vrindavan."
      }
    ]
  },
  'd9':
  {
    "name": "Rama",
    "description": "The seventh avatar of the god Vishnu. He is the central figure of the epic Ramayana and is revered as the epitome of righteousness, virtue, and ideal kingship (Maryada Purushottam).",
    "other_names": [
      "Raghuveer",
      "Raghava",
      "Dasharathi",
      "Sita Ram",
      "Maryada Purushottam"
    ],
    "symbolism": {
      "vehicle": "Chariot (Vimana, often a representation of his journey)",
      "elements": [
        {
          "name": "Bow (Kodanda) and Arrow",
          "significance": "Symbolizes his readiness to uphold Dharma (righteousness), vanquish evil, and his status as a master archer."
        },
        {
          "name": "Quiver",
          "significance": "Symbolizes his inexhaustible energy and determination to protect the good."
        },
        {
          "name": "Royal Crown",
          "significance": "Represents his status as a rightful king and the embodiment of ideal governance (Rama Rajya)."
        }
      ],
      "significance": "Represents moral integrity, duty, perfect human conduct, and the ultimate triumph of justice."
    },
    "story": [
      {
        "title": "The Killing of Ravana",
        "narrative": "After his wife Sita was abducted by the demon-king Ravana, Rama led an army of Vanaras (monkeys) and bears to Lanka. He fought a great war to rescue her, culminating in the defeat and death of Ravana, which symbolized the victory of Dharma over Adharma."
      }
    ],
    "temples": [
      {
        "name": "Ram Janmabhoomi Temple",
        "location": "Ayodhya, Uttar Pradesh, India",
        "importance": "The believed birthplace of Lord Rama and a major site of devotion."
      },
      {
        "name": "Ramaswamy Temple",
        "location": "Kumbakonam, Tamil Nadu, India",
        "importance": "Known for having a rare depiction of Rama with his brothers, Bharata, Lakshmana, and Shatrughna, all sitting together."
      }
    ],
    "aarti": [
      {
        "name": "Aarti Shri Ramayan Ji Ki (Excerpt)",
        "language": "Hindi",
        "lyrics": [
          "आरती श्री रामायण जी की। कीरति कलित ललित सिय पी की॥",
          "गावत ब्रह्मादिक मुनि नारद। बाल्मीकि बिग्यान बिसारद॥"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Shri Rama Raksha Stotram (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "रामं लक्ष्मण पूर्वजं रघुवरं सीतापतिं सुंदरम्।",
          "वन्दे लोकाभिरामं रघुकुलतिलकं राघवम् रावणारिम्॥"
        ]
      }
    ],
    "mantras": [
      {
        "name": "Rama Taraka Mantra",
        "mantra": "श्री राम जय राम जय जय राम॥",
        "meaning": "Glory to Lord Rama, the one who brings joy and liberation (taraka). A powerful mantra for crossing the ocean of worldly existence."
      }
    ],
    "festivals": [
      {
        "name": "Rama Navami",
        "date_range": "Chaitra month, Shukla Paksha Navami (9th day of the bright fortnight)",
        "importance": "Celebrates the birth of Lord Rama. Devotees fast, read the Ramayana, and conduct special prayers."
      },
      {
        "name": "Dussehra/Vijayadashami",
        "date_range": "Ashwin month, Shukla Paksha Dashami (10th day after Navratri)",
        "importance": "Celebrates the victory of Rama over Ravana, marking the triumph of good over evil."
      }
    ]
  },
  'd9' :
  {
    "name": "Saraswati",
    "description": "The Hindu Goddess of knowledge, music, arts, wisdom, and learning. She is the consort of Lord Brahma.",
    "other_names": [
      "Vani",
      "Veena Vadini",
      "Bharati",
      "Sharada",
      "Vagdevi"
    ],
    "symbolism": {
      "vehicle": "White Swan (Hamsa) or Peacock",
      "elements": [
        {
          "name": "Veena (Lute)",
          "significance": "The musical instrument symbolizes the arts and sciences, and that knowledge is harmonious like music."
        },
        {
          "name": "Book (Pustaka)",
          "significance": "Represents the Vedas and all forms of knowledge (Vidya) and learning."
        },
        {
          "name": "Rosary (Mala)",
          "significance": "Symbolizes the power of concentration, meditation, and spiritual knowledge."
        },
        {
          "name": "White Saree",
          "significance": "Symbolizes purity, serenity, and the untainted nature of true knowledge."
        }
      ],
      "significance": "Represents the power of speech (Vak), intellect, and the creative energy that allows knowledge to manifest."
    },
    "story": [
      {
        "title": "Goddess of the River and Knowledge",
        "narrative": "Originally a powerful Vedic river deity, Saraswati's identity transitioned to the goddess of knowledge and the arts. The legendary Saraswati river is considered a source of purity and wisdom, just as the goddess is the source of all learning and arts."
      }
    ],
    "temples": [
      {
        "name": "Gnana Saraswati Temple",
        "location": "Basar, Telangana, India",
        "importance": "One of the two most famous temples in India dedicated to Goddess Saraswati, known for the tradition of Akshara-abhyasam (initiation to learning)."
      },
      {
        "name": "Shri Saraswati Temple",
        "location": "Pushkar, Rajasthan, India",
        "importance": "Associated with Lord Brahma and a significant site for the worship of the Goddess of knowledge."
      }
    ],
    "aarti": [
      {
        "name": "Om Jai Saraswati Mata (Excerpt)",
        "language": "Hindi",
        "lyrics": [
          "ॐ जय सरस्वती माता। जय जय हे सरस्वती माता॥",
          "सद्गुण वैभवशालिनी। त्रिभुवन विख्याता॥"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Saraswati Vandana (Ya Kundendu - Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता।",
          "सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥"
        ]
      }
    ],
    "mantras": [
      {
        "name": "Saraswati Beej Mantra",
        "mantra": "ॐ ऐं सरस्वत्यै नमः॥",
        "meaning": "Salutations to Goddess Saraswati. The sound 'Aim' is the beej (seed) mantra for wisdom and knowledge."
      }
    ],
    "festivals": [
      {
        "name": "Vasant Panchami / Saraswati Puja",
        "date_range": "Magha month, Shukla Paksha Panchami (5th day of the bright fortnight)",
        "importance": "The day Saraswati is believed to have been born. It is a day for students and artists to worship their tools of trade and learning."
      }
    ]
  },
  'd10' :
  {
    "name": "Kali",
    "description": "The fierce manifestation of the Divine Mother (Durga/Parvati). She is the Goddess of time, change, power, creation, preservation, and destruction.",
    "other_names": [
      "Mahakali",
      "Bhadrakali",
      "Dakshinakali",
      "Shamshan Kali",
      "Chandi"
    ],
    "symbolism": {
      "vehicle": "Shava (Corpse of Shiva, which she stands upon)",
      "elements": [
        {
          "name": "Dark/Black Skin",
          "significance": "Symbolizes her all-encompassing, formless nature (Nirguna Brahman) and that she is beyond all classifications of color or form."
        },
        {
          "name": "Garland of Skulls (Mundamala)",
          "significance": "Represents the letters of the Sanskrit alphabet (Matrikas), symbolizing the power of sound and knowledge, and the vanquishing of ego."
        },
        {
          "name": "Cut Head/Scimitar",
          "significance": "Symbolizes the severing of the ego and attachment to the physical body and illusion (Maya)."
        },
        {
          "name": "Tongue Protruding",
          "significance": "Signifies the pause of her destructive frenzy when she steps on Lord Shiva."
        }
      ],
      "significance": "Represents the ultimate transformative power, the destructive aspect that clears away ignorance and ego to grant liberation (Moksha), and the protective mother to her devotees."
    },
    "story": [
      {
        "title": "Slayer of Raktabīja",
        "narrative": "Kali emerged from the forehead of Goddess Durga during a battle with the demon Raktabīja, who could reproduce a new demon from every drop of his blood. Kali immediately consumed his blood before it could touch the ground, thereby destroying him and ending the battle."
      }
    ],
    "temples": [
      {
        "name": "Kalighat Temple",
        "location": "Kolkata, West Bengal, India",
        "importance": "One of the most revered Shakti Peethas and a primary center for Kali worship."
      },
      {
        "name": "Dakhineswar Kali Temple",
        "location": "Kolkata, West Bengal, India",
        "importance": "Famous for its association with the saint Ramakrishna Paramahamsa and a major center of Kali worship."
      }
    ],
    "aarti": [
      {
        "name": "Ambe Tu Hai Jagdambe Kali (Excerpt)",
        "language": "Hindi",
        "lyrics": [
          "अम्बे तू है जगदम्बे काली। जय दुर्गे खप्पर वाली॥",
          "तेरे ही गुण गावें भारती। ओ मैया हम सब उतारे तेरी आरती॥"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Mahakali Stotram (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "विश्र्वेश्वरीं जगद्धात्रीं स्थितिसंहारकारिणीम्।",
          "सुधा त्वमक्षरे नित्ये त्रिधा मात्रात्मिका स्थिता॥"
        ]
      }
    ],
    "mantras": [
      {
        "name": "Dakshinakali Mantra",
        "mantra": "ॐ क्रीं कालिकायै नमः॥",
        "meaning": "Salutations to Kali. The sound 'Krim' is the beej (seed) mantra for Kali, invoking her power of creation, maintenance, and dissolution."
      }
    ],
    "festivals": [
      {
        "name": "Kali Puja",
        "date_range": "Kartik Amavasya (new moon day of the Hindu lunar month of Kartik, coinciding with Diwali)",
        "importance": "A major festival dedicated to the worship of Goddess Kali to ward off evil and seek happiness and prosperity."
      }
    ]
  }
}