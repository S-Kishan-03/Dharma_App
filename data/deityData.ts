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
    story: [
      {
        title: "The Cosmic Dancer",
        narrative: "Shiva, as the destroyer, maintains cosmic balance by dissolving the universe to pave the way for creation. He is worshiped as the supreme ascetic and the cosmic dancer (Nataraja), whose divine dance, the Tandava, sustains the rhythm of creation and destruction."
      },
      {
        title: "The Wedding of Shiva and Parvati",
        narrative: "When Parvati, the daughter of Himalaya, wished to marry Shiva, she performed severe penance to win his heart. Shiva, moved by her devotion, agreed to marry her. Their wedding, celebrated as Shivaratri, represents the union of consciousness (Shiva) with energy (Shakti), creating the perfect balance in the universe."
      },
      {
        title: "The Churning of the Ocean",
        narrative: "During the great churning of the ocean (Samudra Manthan), a deadly poison (Halahala) emerged that threatened to destroy all creation. Shiva, out of compassion, drank the poison to save the universe. Goddess Parvati held his throat to prevent the poison from reaching his stomach, turning his throat blue, earning him the name 'Neelkantha' (blue-throated one)."
      },
      {
        title: "The Burning of Kamadeva",
        narrative: "When Kamadeva (the god of love) tried to disturb Shiva's deep meditation by shooting his flower arrows, Shiva opened his third eye and reduced Kamadeva to ashes. Later, moved by the pleas of Kamadeva's wife Rati, Shiva granted him a new life, but only as a mental being without physical form."
      },
      {
        title: "The Destruction of Tripurasura",
        narrative: "Three demon brothers had built three fortresses in the sky, earth, and underworld, becoming invincible. They began terrorizing the universe. Shiva, with a single arrow, destroyed all three fortresses simultaneously, earning him the name 'Tripurantaka' (destroyer of the three cities)."
      }
    ],
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
          "हंसासन गरुड़ासन वृषवाहन साजे॥ ॐ जय शिव ओंकारा॥",
          "दो भुज चारु चतुर्भुज दस भुज अति सोहे।",
          "त्रिगुण रूप निरखते त्रिभुवन जन मोहे॥ ॐ जय शिव ओंकारा॥",
          "अक्षमाला वनमाला रुण्डमाला धारी।",
          "चन्दन मृगमद सोहै भाले शशिधारी॥ ॐ जय शिव ओंकारा॥",
          "श्वेताम्बर पीताम्बर बाघाम्बर अङ्गे।",
          "सनकादिक ब्रह्मादिक भूतादिक संगे॥ ॐ जय शिव ओंकारा॥",
          "कर के मध्य कमण्डलु चक्र त्रिशूलधारी।",
          "सुखकारी दुःखहारी जगपालनकर्ता॥ ॐ जय शिव ओंकारा॥"
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
          "जटाजूट में गंगा बहती है।",
          "भोले के माथे चंद्रमा सजता है॥",
          "हर हर हर महादेव!",
          "त्रिशूल लिए खड़े हैं भोले।",
          "नंदी बैल पर सवार हैं भोले॥",
          "हर हर हर महादेव!"
        ]
      },
      {
        name: "Shiv Chalisa",
        language: "Hindi",
        lyrics: [
          "जय गिरीशंकर हर हर हर महादेव।",
          "सब के सुखदाता जगत के देव॥",
          "भक्तों के रक्षक तुम ही हो।",
          "संकट हरने वाले तुम ही हो॥",
          "ओम नमः शिवाय ओम नमः शिवाय।",
          "ओम नमः शिवाय ओम नमः शिवाय॥",
          "नीलकंठ गले में विष भरा।",
          "जगत का कल्याण करने आया॥",
          "महाकाल रूप में तुम हो।",
          "भक्तों की रक्षा करने को तुम हो॥",
          "ओम नमः शिवाय ओम नमः शिवाय।",
          "ओम नमः शिवाय ओम नमः शिवाय॥"
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
          "देवों के हित विष पी डाला, नील कंठ को कोटि प्रणाम॥",
          "जटाजूट में गंगा बहती, चंद्रमा माथे पर सजता।",
          "नंदी बैल पर सवार होकर, भक्तों को दर्शन देता॥",
          "सुबह सुबह ले शिव का नाम, कर ले बन्दे यह शुभ काम।",
          "सुबह सुबह ले शिव का नाम, शिव आयेंगे तेरे काम॥"
        ]
      },
      {
        name: "Shiv Aarti - Complete Version",
        language: "Hindi",
        lyrics: [
          "जय शिव ओंकारा हर हर शिव ओंकारा।",
          "ब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा॥",
          "एकानन चतुरानन पंचानन राजे।",
          "हंसासन गरुड़ासन वृषवाहन साजे॥",
          "दो भुज चारु चतुर्भुज दस भुज अति सोहे।",
          "त्रिगुण रूप निरखते त्रिभुवन जन मोहे॥",
          "अक्षमाला वनमाला रुण्डमाला धारी।",
          "चन्दन मृगमद सोहै भाले शशिधारी॥",
          "श्वेताम्बर पीताम्बर बाघाम्बर अंगे।",
          "सनकादिक ब्रह्मादिक भूतादिक संगे॥",
          "कर के मध्य कमण्डलु चक्र त्रिशूलधारी।",
          "सुखकारी दु:खहारी जगपालनकर्ता॥",
          "ब्रह्म विष्णु सदाशिव जानत अविवेका।",
          "प्रणवाक्षर मध्ये ये तीनों एका॥",
          "त्रिगुणस्वामीजी की आरती जो कोई नर गावे।",
          "कहत शिवानन्द स्वामी मनवांछित फल पावे॥"
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
    story: [
      {
        title: "The Preserver God",
        narrative: "Vishnu maintains cosmic order and righteousness. He rests on the serpent Shesha in the cosmic ocean. He manifests in different avatars (incarnations), including Rama and Krishna, to restore dharma whenever evil forces threaten the world."
      },
      {
        title: "The Ten Avatars (Dashavatar)",
        narrative: "Vishnu has incarnated ten times to restore dharma. These include: Matsya (fish), Kurma (tortoise), Varaha (boar), Narasimha (half-man, half-lion), Vamana (dwarf), Parashurama (warrior with axe), Rama (prince of Ayodhya), Krishna (cowherd prince), Buddha (enlightened one), and Kalki (future incarnation). Each avatar represents different aspects of divine intervention."
      },
      {
        title: "The Birth of Lakshmi",
        narrative: "During the great churning of the ocean (Samudra Manthan), Lakshmi emerged from the ocean of milk. She chose Vishnu as her eternal consort, symbolizing the union of wealth (Lakshmi) with the preserver (Vishnu). This story explains why Lakshmi is always depicted with Vishnu."
      },
      {
        title: "The Three Steps of Vamana",
        narrative: "The demon king Bali had conquered the three worlds. Vishnu took the form of Vamana, a dwarf Brahmin, and asked for three paces of land. Bali agreed, but Vamana grew to cosmic proportions, covering the earth and sky in two steps. For the third step, Bali offered his head, demonstrating true humility and devotion."
      },
      {
        title: "The Narasimha Avatar",
        narrative: "The demon Hiranyakashipu had obtained a boon that he could not be killed by man or beast, indoors or outdoors, during day or night. His son Prahlada remained devoted to Vishnu despite his father's threats. Vishnu incarnated as Narasimha (half-man, half-lion), killed Hiranyakashipu at twilight (neither day nor night) on a threshold (neither indoors nor outdoors), protecting his devotee."
      }
    ],
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
          "सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥ ॐ जय जगदीश हरे॥",
          "मात पिता तुम मेरे, शरण गहूं किसकी।",
          "तुम बिन और न दूजा, आस करूं जिसकी॥ ॐ जय जगदीश हरे॥",
          "तुम पूरण परमात्मा, तुम अन्तर्यामी।",
          "पारब्रह्म परमेश्वर, तुम सबके स्वामी॥ ॐ जय जगदीश हरे॥",
          "तुम करुणा के सागर, तुम पालनकर्ता।",
          "मैं मूरख खल कामी, कृपा करो भर्ता॥ ॐ जय जगदीश हरे॥",
          "तुम हो एक अगोचर, सबके प्राणपति।",
          "किस विधि मिलूं दयामय, तुमको मैं कुमति॥ ॐ जय जगदीश हरे॥",
          "दीनबन्धु दुखहर्ता, तुम ठाकुर मेरे।",
          "अपने हाथ उठाओ, द्वार पड़ा तेरे॥ ॐ जय जगदीश हरे॥",
          "विषय विकार मिटाओ, पाप हरो देवा।",
          "श्रद्धा भक्ति बढ़ाओ, सन्तन की सेवा॥ ॐ जय जगदीश हरे॥"
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
          "अलकनंदा तट विराजत, नर नारायण ध्यान।",
          "केदार मंदिर शोभित, श्री बद्रीनाथ महान॥",
          "भक्त जनों के मनोरथ, पूर्ण करत सदा।",
          "दुःख हरत सुख देत, श्री बद्रीनाथ प्रभु॥"
        ]
      },
      {
        name: "Vishnu Aarti",
        language: "Hindi",
        lyrics: [
          "जय जगदीश हरे, स्वामी जय जगदीश हरे।",
          "भक्त जनों के संकट, क्षण में दूर करे॥",
          "जो ध्यावे फल पावे, दुख बिनसे मन का।",
          "सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥",
          "मात पिता तुम मेरे, शरण गहूं किसकी।",
          "तुम बिन और न दूजा, आस करूं जिसकी॥",
          "तुम पूरण परमात्मा, तुम अन्तर्यामी।",
          "पारब्रह्म परमेश्वर, तुम सबके स्वामी॥"
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
          "तिरूपति वेंकटेशा गोविंदा, गोविंदा नमो गोविंदा",
          "पद्मावती रमणा गोविंदा, गोविंदा नमो गोविंदा",
          "सत्यभामा रमणा गोविंदा, गोविंदा नमो गोविंदा",
          "रुक्मिणी रमणा गोविंदा, गोविंदा नमो गोविंदा"
        ]
      },
      {
        name: "Hari Om Tat Sat",
        language: "Sanskrit",
        lyrics: [
          "हरि ॐ तत् सत्, हरि ॐ तत् सत्",
          "हरि ॐ तत् सत्, हरि ॐ तत् सत्",
          "विष्णु सहस्रनामं स्तोत्रं",
          "हरि ॐ तत् सत्, हरि ॐ तत् सत्",
          "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं",
          "विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्",
          "हरि ॐ तत् सत्, हरि ॐ तत् सत्",
          "हरि ॐ तत् सत्, हरि ॐ तत् सत्"
        ]
      },
      {
        name: "Narayana Stotram",
        language: "Sanskrit",
        lyrics: [
          "नारायणं नमस्कृत्य नरं चैव नरोत्तमम्",
          "देवीं सरस्वतीं व्यासं ततो जयमुदीरयेत्",
          "नारायणाय विद्महे वासुदेवाय धीमहि",
          "तन्नो विष्णुः प्रचोदयात्",
          "विष्णु सहस्रनामं स्तोत्रं श्री महाभारतम्",
          "सर्व वेदांत सारं हि श्री भगवानुवाच यत्",
          "नारायणं नमस्कृत्य नरं चैव नरोत्तमम्",
          "देवीं सरस्वतीं व्यासं ततो जयमुदीरयेत्"
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
    story: [
      {
        title: "Slayer of Mahishasura",
        narrative: "Durga emerged from the combined energy of Brahma, Vishnu, and Shiva to defeat the powerful buffalo demon Mahishasura, who could not be defeated by any man or god. Her victory, celebrated as Durga Puja, symbolizes the triumph of righteousness (dharma) over evil (adharma)."
      },
      {
        title: "The Creation of Durga",
        narrative: "When the demon Mahishasura became too powerful and threatened the gods, they combined their energies to create Durga. Each god gave her their most powerful weapon - Shiva gave his trident, Vishnu his chakra, Brahma his rosary, and other gods contributed various weapons. Thus armed, she became the invincible warrior goddess."
      },
      {
        title: "Durga and the Buffalo Demon",
        narrative: "The battle between Durga and Mahishasura lasted for nine days and nights. Mahishasura kept changing forms - from buffalo to lion to elephant - but Durga adapted to each form. On the tenth day (Vijayadashami), she finally slew him with her trident, restoring peace to the universe."
      },
      {
        title: "The Nine Forms of Durga (Navadurga)",
        narrative: "During the nine days of Navratri, nine different forms of Durga are worshipped: Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Each form represents different aspects of the divine feminine power and cosmic energy."
      },
      {
        title: "Durga and the Chanda-Munda Demons",
        narrative: "When the demon brothers Chanda and Munda tried to attack Durga, she created Kali from her forehead. Kali swiftly beheaded both demons, earning her the name 'Chamunda'. This story demonstrates how Durga can manifest different forms to combat specific evils."
      }
    ],
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
          "उज्ज्वल से दोउ नैना, चन्द्रवदन नीको॥ ॐ जय अम्बे गौरी॥",
          "कनक समान कलेवर, रक्ताम्बर राजे।",
          "रक्तपुष्प गल माला, कण्ठन पर साजे॥ ॐ जय अम्बे गौरी॥",
          "केहरि वाहन राजत, खड्ग खप्परधारी।",
          "सुर-नर-मुनि-जन सेवत, तिनके दुखहारी॥ ॐ जय अम्बे गौरी॥",
          "कानन कुण्डल शोभित, नासाग्रे मोती।",
          "कोटिक चन्द्र दिवाकर, राजत सम ज्योति॥ ॐ जय अम्बे गौरी॥",
          "शुम्भ-निशुम्भ बिडारे, महिषासुर घाती।",
          "धूम्र विलोचन नैना, निशिदिन मदमाती॥ ॐ जय अम्बे गौरी॥",
          "चण्ड-मुण्ड संहारे, शोणित बीज हरे।",
          "मधु-कैटभ दोऊ मारे, सुर भयहीन करे॥ ॐ जय अम्बे गौरी॥",
          "ब्रह्माणी रुद्राणी तुम कमला रानी।",
          "आगम-निगम-बखानी, तुम शिव पटरानी॥ ॐ जय अम्बे गौरी॥",
          "चौंसठ योगिनी मंगल गावत, नृत्य करत भैरोन।",
          "बाजत ताल मृदंगा, अरु बाजत डमरू॥ ॐ जय अम्बे गौरी॥",
          "तुम ही जग की माता, तुम ही हो भर्ता।",
          "भक्तन की दुःख हरता, सुख सम्पत्ति करता॥ ॐ जय अम्बे गौरी॥",
          "भुजा चार अति शोभित, वर-मुद्रा धारी।",
          "मनवान्छित दान पावत, सेवत नर-नारी॥ ॐ जय अम्बे गौरी॥",
          "कनक थाल विराजत, अगर कपूर बाटी।",
          "श्रीमालकेतु में राजत, कोटि रतन ज्योति॥ ॐ जय अम्बे गौरी॥",
          "श्री अम्बेजी की आरती, जो कोई नर गावे।",
          "कहत शिवानन्द स्वामी, सुख सम्पत्ति पावे॥ ॐ जय अम्बे गौरी॥"
        ]
      },
      {
        name: "Maa Durga Aarti",
        language: "Hindi",
        lyrics: [
          "जय माँ दुर्गा जय माँ दुर्गा",
          "तुम ही हो सबकी सुखदायिका",
          "जय माँ दुर्गा जय माँ दुर्गा",
          "तुम ही हो सबकी रक्षिका",
          "महिषासुर का वध करके",
          "तुमने दिया जगत को सुख",
          "जय माँ दुर्गा जय माँ दुर्गा",
          "तुम ही हो सबकी रक्षिका"
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
          "शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तुते॥",
          "सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके।",
          "शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तुते॥",
          "सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके।",
          "शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तुते॥"
        ]
      },
      {
        name: "Durga Stotram",
        language: "Sanskrit",
        lyrics: [
          "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।",
          "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
          "या देवी सर्वभूतेषु मातृरूपेण संस्थिता।",
          "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
          "या देवी सर्वभूतेषु बुद्धिरूपेण संस्थिता।",
          "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥"
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
      },
      {
        "title": "The Birth of Hanuman",
        "narrative": "Hanuman was born to Anjana, a celestial nymph, and Kesari, the monkey king. His birth was blessed by Lord Shiva and Vayu (the wind god). As a child, he mistook the sun for a fruit and tried to catch it, leading to a series of adventures that established his divine powers and his role as Rama's devoted servant."
      },
      {
        "title": "Burning Lanka",
        "narrative": "When Hanuman was captured in Lanka after finding Sita, Ravana ordered his tail to be set on fire. Hanuman used this opportunity to escape and set fire to the entire city of Lanka with his burning tail, demonstrating his cleverness and loyalty to Rama."
      },
      {
        "title": "The Leap to Lanka",
        "narrative": "To find Sita in Lanka, Hanuman had to cross the vast ocean. He grew to enormous size and made a mighty leap across the ocean, overcoming obstacles like the demon Surasa and the demoness Simhika. This act symbolizes the power of devotion to overcome any obstacle."
      },
      {
        "title": "Hanuman and the Mountain",
        "narrative": "Once, when Rama needed a bridge to Lanka, Hanuman was asked to bring mountains. However, he brought the wrong mountain. When corrected, he was about to throw it away, but Rama stopped him, saying even mistakes made with devotion are valuable. This shows Rama's love for his devotee."
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
          "जाके बल से गिरिवर कांपे। रोग दोष जाके निकट न झाँके॥",
          "अंजनि पुत्र महावीर विक्रमा। रामदूत अतुलित बलधामा॥",
          "अंजनि पुत्र महावीर विक्रमा। रामदूत अतुलित बलधामा॥",
          "अंजनि पुत्र महावीर विक्रमा। रामदूत अतुलित बलधामा॥",
          "अंजनि पुत्र महावीर विक्रमा। रामदूत अतुलित बलधामा॥",
          "अंजनि पुत्र महावीर विक्रमा। रामदूत अतुलित बलधामा॥"
        ]
      },
      {
        "name": "Jai Hanuman Aarti",
        "language": "Hindi",
        "lyrics": [
          "जय हनुमान ज्ञान गुण सागर",
          "जय कपीस तिहुँ लोक उजागर",
          "राम दूत अतुलित बल धामा",
          "अंजनि पुत्र पवनसुत नामा",
          "महावीर विक्रम बजरंगी",
          "कुमति निवार सुमति के संगी",
          "कंचन बरन बिराज सुबेसा",
          "कानन कुण्डल कुञ्चित केसा"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Hanuman Chalisa (Excerpt)",
        "language": "Awadhi/Hindi",
        "lyrics": [
          "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
          "राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥",
          "महावीर विक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
          "कंचन बरन बिराज सुबेसा। कानन कुण्डल कुञ्चित केसा॥",
          "हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥",
          "शंकर सुवन केसरी नन्दन। तेज प्रताप महा जग वन्दन॥"
        ]
      },
      {
        "name": "Hanuman Stotram",
        "language": "Sanskrit",
        "lyrics": [
          "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।",
          "वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥",
          "अंजनिनन्दनं वीरं जानकीशोकनाशनम्।",
          "कपीशमक्षहन्तारं वन्दे लङ्काभयंकरम्॥"
        ]
      },
      {
        "name": "Bajrang Baan",
        "language": "Hindi",
        "lyrics": [
          "बजरंग बाण बजरंग बाण",
          "हनुमान जी की जय बोलो",
          "बजरंग बाण बजरंग बाण",
          "हनुमान जी की जय बोलो",
          "संकट मोचन हनुमान आए",
          "दुष्ट दलन रघुनाथ लाए",
          "बजरंग बाण बजरंग बाण",
          "हनुमान जी की जय बोलो"
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
      },
      {
        "title": "Lakshmi and the Lotus",
        "narrative": "Lakshmi is always depicted with a lotus, which represents her purity and spiritual power. The lotus grows in muddy water but remains untouched by it, symbolizing how Lakshmi bestows wealth and prosperity without being tainted by worldly desires. Her association with the lotus also represents the blooming of spiritual consciousness."
      },
      {
        "title": "The Test of the Demon King Bali",
        "narrative": "When the demon king Bali performed great penance to gain power, Lakshmi tested his devotion by appearing as a poor woman asking for alms. Bali, despite his immense wealth, gave her everything he had. Pleased with his selflessness, Lakshmi blessed him with prosperity and abundance, teaching that true wealth comes from generosity and detachment."
      },
      {
        "title": "Lakshmi and the Owl",
        "narrative": "Lakshmi's vehicle is an owl (Uluka), which represents wisdom in darkness. The owl can see in the dark, symbolizing Lakshmi's ability to bring prosperity even in difficult times. However, the owl also symbolizes that wealth without wisdom can lead to downfall, teaching the importance of using prosperity wisely."
      },
      {
        "title": "The Four Forms of Lakshmi",
        "narrative": "Lakshmi manifests in four forms: Dhana Lakshmi (wealth), Dhanya Lakshmi (agricultural prosperity), Gaja Lakshmi (royal prosperity), and Santana Lakshmi (progeny). Each form represents different aspects of abundance and prosperity that she bestows upon her devotees."
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
          "तुमको निशिदिन सेवत, हरि विष्णु विधाता॥ ॐ जय लक्ष्मी माता॥",
          "उमा रमा ब्रह्माणी, तुम ही जग माता।",
          "सूर्य-चन्द्रमा ध्यावत, नारद ऋषि गाता॥ ॐ जय लक्ष्मी माता॥",
          "दुर्गा रूप निरंजनी, सुख सम्पत्ति दाता।",
          "जो कोई तुमको ध्यावत, रिद्धि-सिद्धि धन पाता॥ ॐ जय लक्ष्मी माता॥",
          "तुम पाताल-निवासिनी, तुम ही शुभदाता।",
          "कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता॥ ॐ जय लक्ष्मी माता॥",
          "जिस घर तुम रहती हो, तहाँ सदगुण आता।",
          "सब सम्भव हो जाता है, मन नहीं घबराता॥ ॐ जय लक्ष्मी माता॥",
          "तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।",
          "खान-पान का वैभव, सब तुमसे आता॥ ॐ जय लक्ष्मी माता॥",
          "शुभ-गुण मन्दिर सुन्दर, क्षीरोदधि-जाता।",
          "रत्न चतुर्दश तुम बिन, कोई नहीं पाता॥ ॐ जय लक्ष्मी माता॥",
          "महालक्ष्मीजी की आरती, जो कोई नर गाता।",
          "उर आनन्द समाता है, पाप उतर जाता॥ ॐ जय लक्ष्मी माता॥"
        ]
      },
      {
        "name": "Lakshmi Aarti",
        "language": "Hindi",
        "lyrics": [
          "जय लक्ष्मी माता, जय लक्ष्मी माता",
          "तुम ही हो सबकी सुखदायिका",
          "जय लक्ष्मी माता, जय लक्ष्मी माता",
          "तुम ही हो सबकी रक्षिका",
          "धन धान्य से भर दो घर",
          "माता तुम ही हो करतार",
          "जय लक्ष्मी माता, जय लक्ष्मी माता"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Mahalakshmi Ashtakam (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।",
          "शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तुते॥",
          "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।",
          "शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तुते॥",
          "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।",
          "शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तुते॥"
        ]
      },
      {
        "name": "Lakshmi Stotram",
        "language": "Sanskrit",
        "lyrics": [
          "या सा पद्मासनस्था विपुलकतितटी पद्मपत्रायताक्षी",
          "गम्भीरावर्तनाभिस्तनभरनमिता शुभ्रवस्त्रोत्तरीया।",
          "या लक्ष्मीर्दिव्यरूपा मणिमयकुब्जा हेमवर्णा हिरण्मयी।",
          "सा पातु नः श्रियः पत्नी विष्णोः श्रीः सर्वमङ्गला॥"
        ]
      },
      {
        "name": "Shri Suktam",
        "language": "Sanskrit",
        "lyrics": [
          "हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम्।",
          "चन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह॥",
          "तां म आवह जातवेदो लक्ष्मीमनपगामिनीम्।",
          "यस्यां हिरण्यं विन्देयं गामश्वं पुरुषानहम्॥"
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
      },
      {
        "title": "The Birth of Krishna",
        "narrative": "Krishna was born in a prison cell in Mathura to Devaki and Vasudeva. His uncle Kamsa, who had imprisoned his parents, was destined to be killed by Devaki's eighth son. To protect Krishna, Vasudeva carried the newborn across the flooded Yamuna river to Gokul, where he was raised by Yashoda and Nanda."
      },
      {
        "title": "Killing of Kamsa",
        "narrative": "Kamsa had been terrorizing the people of Mathura and had imprisoned Krishna's parents. When Krishna grew up, he returned to Mathura and challenged Kamsa. In a fierce battle, Krishna defeated and killed Kamsa, freeing his parents and liberating the people of Mathura from tyranny."
      },
      {
        "title": "The Ras Leela",
        "narrative": "Krishna's divine dance with the Gopis (cowherd maidens) of Vrindavan, known as Ras Leela, represents the highest form of devotion and divine love. It symbolizes the soul's yearning for union with the Divine and Krishna's ability to be present with each devotee simultaneously."
      },
      {
        "title": "Lifting of Govardhan Hill",
        "narrative": "When Indra sent torrential rains to punish the people of Vrindavan for not worshipping him, Krishna lifted the entire Govardhan Hill on his little finger to provide shelter for all the people and animals. This act demonstrated his protection of devotees and his supremacy over all natural forces."
      },
      {
        "title": "The Butter Thief",
        "narrative": "As a child, Krishna was known for his mischievous behavior, especially stealing butter from the houses of Gopis. This playful aspect of Krishna represents the joy and sweetness of divine love, and how the Divine takes delight in the simple pleasures of his devotees."
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
          "गले में बैजंती माला। बजावे मुरली मधुर बाला॥",
          "श्री गिरिधर कृष्ण मुरारी की॥",
          "गले में बैजंती माला। बजावे मुरली मधुर बाला॥",
          "श्री गिरिधर कृष्ण मुरारी की॥",
          "गले में बैजंती माला। बजावे मुरली मधुर बाला॥"
        ]
      },
      {
        "name": "Krishna Aarti",
        "language": "Hindi",
        "lyrics": [
          "जय कृष्ण जय कृष्ण हरे राम",
          "जय कृष्ण जय कृष्ण हरे राम",
          "गोविंद गोपाल हरे राम",
          "जय कृष्ण जय कृष्ण हरे राम",
          "मुरली मनोहर हरे राम",
          "जय कृष्ण जय कृष्ण हरे राम",
          "राधा रमण हरे राम",
          "जय कृष्ण जय कृष्ण हरे राम"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Hare Krishna Mahamantra (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "हरे कृष्ण हरे कृष्ण। कृष्ण कृष्ण हरे हरे॥",
          "हरे राम हरे राम। राम राम हरे हरे॥",
          "हरे कृष्ण हरे कृष्ण। कृष्ण कृष्ण हरे हरे॥",
          "हरे राम हरे राम। राम राम हरे हरे॥",
          "हरे कृष्ण हरे कृष्ण। कृष्ण कृष्ण हरे हरे॥",
          "हरे राम हरे राम। राम राम हरे हरे॥"
        ]
      },
      {
        "name": "Govinda Jaya Jaya",
        "language": "Sanskrit",
        "lyrics": [
          "गोविन्द जय जय गोपाल जय जय",
          "राधारमण हरि गोविन्द जय जय",
          "गोविन्द जय जय गोपाल जय जय",
          "राधारमण हरि गोविन्द जय जय",
          "मुरली मनोहर मोहन कृष्णा",
          "गोविन्द जय जय गोपाल जय जय"
        ]
      },
      {
        "name": "Krishna Bhajan",
        "language": "Hindi",
        "lyrics": [
          "कृष्णा मैं तेरी राधा हूँ",
          "कृष्णा मैं तेरी राधा हूँ",
          "मेरे नैना में बस जाओ",
          "कृष्णा मैं तेरी राधा हूँ",
          "मुरली की धुन सुनाओ",
          "कृष्णा मैं तेरी राधा हूँ",
          "मेरे दिल में बस जाओ",
          "कृष्णा मैं तेरी राधा हूँ"
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
      },
      {
        "title": "The Exile to Forest",
        "narrative": "Rama, along with his wife Sita and brother Lakshmana, went into exile for 14 years to fulfill his father's promise to his stepmother Kaikeyi. This selfless act of obedience to his father's word demonstrates his commitment to dharma and duty above personal comfort."
      },
      {
        "title": "Breaking the Bow of Shiva",
        "narrative": "During Sita's swayamvara (marriage ceremony), Rama broke the divine bow of Lord Shiva that no other prince could even lift. This act won him Sita's hand in marriage and demonstrated his divine strength and destiny as the protector of dharma."
      },
      {
        "title": "The Bridge to Lanka",
        "narrative": "To reach Lanka and rescue Sita, Rama and his army of Vanaras built a bridge across the ocean. This engineering marvel, known as Rama Setu, was constructed with stones that floated on water when Rama's name was written on them, showing the power of devotion and divine intervention."
      },
      {
        "title": "The Ideal King (Rama Rajya)",
        "narrative": "After returning from exile and defeating Ravana, Rama ruled Ayodhya with perfect justice and compassion. His reign, known as Rama Rajya, became the ideal of perfect governance where every citizen was happy, prosperous, and virtuous."
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
          "गावत ब्रह्मादिक मुनि नारद। बाल्मीकि बिग्यान बिसारद॥",
          "आरती श्री रामायण जी की। कीरति कलित ललित सिय पी की॥",
          "गावत ब्रह्मादिक मुनि नारद। बाल्मीकि बिग्यान बिसारद॥",
          "आरती श्री रामायण जी की। कीरति कलित ललित सिय पी की॥",
          "गावत ब्रह्मादिक मुनि नारद। बाल्मीकि बिग्यान बिसारद॥"
        ]
      },
      {
        "name": "Rama Aarti",
        "language": "Hindi",
        "lyrics": [
          "जय राम जय राम जय जय राम",
          "जय राम जय राम जय जय राम",
          "सीता रमण जय जय राम",
          "जय राम जय राम जय जय राम",
          "रघुवर राम जय जय राम",
          "जय राम जय राम जय जय राम",
          "मर्यादा पुरुषोत्तम जय जय राम",
          "जय राम जय राम जय जय राम"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Shri Rama Raksha Stotram (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "रामं लक्ष्मण पूर्वजं रघुवरं सीतापतिं सुंदरम्।",
          "वन्दे लोकाभिरामं रघुकुलतिलकं राघवम् रावणारिम्॥",
          "रामं लक्ष्मण पूर्वजं रघुवरं सीतापतिं सुंदरम्।",
          "वन्दे लोकाभिरामं रघुकुलतिलकं राघवम् रावणारिम्॥",
          "रामं लक्ष्मण पूर्वजं रघुवरं सीतापतिं सुंदरम्।",
          "वन्दे लोकाभिरामं रघुकुलतिलकं राघवम् रावणारिम्॥"
        ]
      },
      {
        "name": "Rama Bhajan",
        "language": "Hindi",
        "lyrics": [
          "राम राम राम राम",
          "सीता रमण राम राम",
          "राम राम राम राम",
          "सीता रमण राम राम",
          "हनुमान के प्रभु राम",
          "राम राम राम राम",
          "सीता रमण राम राम"
        ]
      },
      {
        "name": "Ram Dhun",
        "language": "Hindi",
        "lyrics": [
          "राम नाम सत्य है",
          "राम नाम सत्य है",
          "सत्य बोलो राम राम",
          "राम नाम सत्य है",
          "राम नाम सत्य है",
          "राम नाम सत्य है"
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
  'd10':
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
      },
      {
        "title": "The Birth of Saraswati",
        "narrative": "Saraswati emerged from the mouth of Lord Brahma when he was creating the universe. She represents the power of speech and knowledge that enables creation. Her emergence from Brahma's mouth symbolizes that knowledge is the foundation of all creation and that speech has the power to manifest reality."
      },
      {
        "title": "Saraswati and the Vedas",
        "narrative": "Saraswati is considered the mother of the Vedas, the most ancient and sacred texts of Hinduism. She is said to have inspired the sages to compose these divine scriptures, making her the source of all spiritual and philosophical knowledge."
      },
      {
        "title": "The White Swan (Hamsa)",
        "narrative": "Saraswati's vehicle, the white swan (Hamsa), has the unique ability to separate milk from water. This symbolizes Saraswati's power to help devotees distinguish between true knowledge and ignorance, guiding them toward wisdom and enlightenment."
      },
      {
        "title": "Saraswati Puja and Learning",
        "narrative": "During Saraswati Puja, students place their books and instruments before the goddess, seeking her blessings for academic success. This tradition reflects the belief that all knowledge and skills come from Saraswati's grace and that learning should be approached with devotion and humility."
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
          "सद्गुण वैभवशालिनी। त्रिभुवन विख्याता॥",
          "करुणा सुखदायिनी। अम्बिके वीणावादिनी॥",
          "वेदमन्त्र मयी। पूर्ण सुखदायिनी॥",
          "सरस्वती महाभागे। विद्ये कमललोचने॥",
          "विद्यारूपे विशालाक्षी। विद्यां देहि नमोऽस्तुते॥",
          "सरस्वती नमस्तुभ्यं। वरदे कामरूपिणी॥",
          "विद्यारंभं करिष्यामि। सिद्धिर्भवतु मे सदा॥"
        ]
      },
      {
        "name": "Saraswati Aarti",
        "language": "Hindi",
        "lyrics": [
          "जय सरस्वती माता",
          "विद्या की देवी माता",
          "जय सरस्वती माता",
          "विद्या की देवी माता",
          "वीणा वादिनी माता",
          "जय सरस्वती माता",
          "विद्या की देवी माता"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Saraswati Vandana (Ya Kundendu - Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता।",
          "सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥",
          "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता।",
          "सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥",
          "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता।",
          "सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥"
        ]
      },
      {
        "name": "Saraswati Stotram",
        "language": "Sanskrit",
        "lyrics": [
          "नमस्ते शारदे देवि काश्मीरपुरवासिनि।",
          "त्वमहं प्रार्थये नित्यं विद्यादानं च देहि मे॥",
          "सरस्वती महाभागे विद्ये कमललोचने।",
          "विद्यारूपे विशालाक्षी विद्यां देहि नमोऽस्तुते॥"
        ]
      },
      {
        "name": "Vidya Stuti",
        "language": "Hindi",
        "lyrics": [
          "विद्या की देवी सरस्वती",
          "ज्ञान की रानी सरस्वती",
          "विद्या की देवी सरस्वती",
          "ज्ञान की रानी सरस्वती",
          "वीणा वादिनी माता",
          "विद्या की देवी सरस्वती",
          "ज्ञान की रानी सरस्वती"
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
  'd11':
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
      },
      {
        "title": "Kali and Shiva",
        "narrative": "After destroying the demons, Kali became so intoxicated with bloodlust that she began to dance on the battlefield, threatening to destroy the entire universe. To stop her destructive dance, Lord Shiva lay down in her path. When Kali stepped on Shiva's chest, she realized what she was doing and stuck out her tongue in embarrassment, ending her destructive frenzy."
      },
      {
        "title": "The Creation of Kali",
        "narrative": "Kali was created when the combined energy of all the gods merged to form a powerful goddess to combat the demon Mahishasura. She represents the collective power of the divine feminine energy (Shakti) and embodies the destructive aspect necessary for cosmic balance and transformation."
      },
      {
        "title": "Kali as the Destroyer of Time",
        "narrative": "Kali's name means 'time' or 'death' in Sanskrit. She represents the inevitable passage of time and the destruction of all that is temporary. Her dance symbolizes the eternal cycle of creation, preservation, and destruction, reminding devotees that everything in the material world is temporary and that liberation comes through transcending attachment."
      },
      {
        "title": "Kali's Compassionate Nature",
        "narrative": "Despite her fierce appearance, Kali is known as the compassionate mother who destroys evil to protect her children. She is often depicted with a gentle smile, showing that her destructive power is ultimately for the benefit of devotees, removing obstacles and negative forces that prevent spiritual progress."
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
          "तेरे ही गुण गावें भारती। ओ मैया हम सब उतारे तेरी आरती॥",
          "अम्बे तू है जगदम्बे काली। जय दुर्गे खप्पर वाली॥",
          "तेरे ही गुण गावें भारती। ओ मैया हम सब उतारे तेरी आरती॥",
          "अम्बे तू है जगदम्बे काली। जय दुर्गे खप्पर वाली॥",
          "तेरे ही गुण गावें भारती। ओ मैया हम सब उतारे तेरी आरती॥"
        ]
      },
      {
        "name": "Kali Aarti",
        "language": "Hindi",
        "lyrics": [
          "जय काली माता",
          "दुर्गा का रूप काली माता",
          "जय काली माता",
          "दुर्गा का रूप काली माता",
          "संकट हारिणी काली माता",
          "जय काली माता",
          "दुर्गा का रूप काली माता"
        ]
      }
    ],
    "bhajans": [
      {
        "name": "Mahakali Stotram (Excerpt)",
        "language": "Sanskrit",
        "lyrics": [
          "विश्र्वेश्वरीं जगद्धात्रीं स्थितिसंहारकारिणीम्।",
          "सुधा त्वमक्षरे नित्ये त्रिधा मात्रात्मिका स्थिता॥",
          "विश्र्वेश्वरीं जगद्धात्रीं स्थितिसंहारकारिणीम्।",
          "सुधा त्वमक्षरे नित्ये त्रिधा मात्रात्मिका स्थिता॥",
          "विश्र्वेश्वरीं जगद्धात्रीं स्थितिसंहारकारिणीम्।",
          "सुधा त्वमक्षरे नित्ये त्रिधा मात्रात्मिका स्थिता॥"
        ]
      },
      {
        "name": "Kali Stotram",
        "language": "Sanskrit",
        "lyrics": [
          "नमस्ते स्ते महारौद्रे महाघोरे महाशिवे।",
          "महावीर्ये महाशक्ते महाभीमे महाबले॥",
          "नमस्ते स्ते महारौद्रे महाघोरे महाशिवे।",
          "महावीर्ये महाशक्ते महाभीमे महाबले॥"
        ]
      },
      {
        "name": "Kali Bhajan",
        "language": "Hindi",
        "lyrics": [
          "काली माता की जय",
          "दुर्गा का रूप काली माता",
          "काली माता की जय",
          "दुर्गा का रूप काली माता",
          "संकट हारिणी काली",
          "काली माता की जय",
          "दुर्गा का रूप काली माता"
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