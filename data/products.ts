// src/data/products.ts

export type Locale = "en" | "te" | "hi";

export interface LocalizedText {
  en: string;
  te: string;
  hi: string;
}

export interface Product {
  id: string;
  slug: string;

  // Basic Details
  name: LocalizedText;
  shortName: LocalizedText;

  category:
    | "Bio Fertilizer"
    | "Bio Stimulant"
    | "Water Soluble"
    | "Micronutrient"
    | "Organic Fertilizer"
    | "Plant Growth Promoter";

  // Branding
  brand: string;
  companyLogo: string;
  brandLogo: string;
  themeColor: string;

  // Images
  thumbnail: string;
  images: string[];

  // Product Details
  shortDescription: LocalizedText;
  description: LocalizedText;

  // Benefits
  benefits: LocalizedText[];

  // Composition
  composition: string[];

  // Suitable Crops
  crops: {
    name: LocalizedText;
    image: string;
  }[];

  // Application
  dosage: {
    foliarSpray: LocalizedText;
    drip: LocalizedText;
    soilApplication: LocalizedText;
  };

  // Usage
  applicationStages: LocalizedText[];

  // Compatibility
  compatibleWith: string[];
  avoidMixingWith: string[];

  // Specifications
  specifications: {
    appearance: string;
    // Some products (e.g., water soluble) provide solubility and pH,
    // while others (e.g., granules) provide application and shelfLife.
    solubility?: string;
    pH?: string;
    application?: string;
    shelfLife?: string;
    packing: string[];
  };

  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Related Blogs
  relatedBlogs: string[];

  // FAQ
  faqs: {
    question: LocalizedText;
    answer: LocalizedText;
  }[];

  // Status
  featured: boolean;
  active: boolean;
}
export const products: Product[] = [
 {
  id: "1",

  slug: "potassium-humate-98-flakes",

  name: {
    en: "Potassium Humate 98% Flakes",
    te: "పొటాషియం హ్యూమేట్ 98% ఫ్లేక్స్",
    hi: "पोटेशियम ह्यूमेट 98% फ्लेक्स",
  },

  shortName: {
    en: "Humate 98",
    te: "హ్యూమేట్ 98",
    hi: "ह्यूमेट 98",
  },

  category: "Bio Stimulant",

  brand: "Sunshine Agrichem",

  thumbnail: "/products/power.png",

  companyLogo: "/logos/sunshine-logo.png",

  brandLogo: "/logos/sunshine-icon.png",

  themeColor: "#0EA54B",

  images: [
    "/products/magic.png",
    "/products/space.png",
  ],

  shortDescription: {
    en: "Premium Potassium Humate Flakes for enhanced root growth, nutrient uptake and soil fertility.",
    te: "వేర్ల పెరుగుదల, పోషకాల శోషణ మరియు నేల సారాన్ని పెంచే ప్రీమియం పొటాషియం హ్యూమేట్.",
    hi: "जड़ों की वृद्धि, पोषक तत्वों के अवशोषण और मिट्टी की उर्वरता बढ़ाने वाला प्रीमियम पोटेशियम ह्यूमेट।",
  },

  description: {
    en: "Potassium Humate 98% Flakes is a highly concentrated organic soil conditioner that enhances nutrient availability, improves soil structure, stimulates microbial activity and promotes healthy plant growth.",
    te: "పొటాషియం హ్యూమేట్ 98% ఫ్లేక్స్ నేల సారాన్ని పెంచి, సూక్ష్మజీవుల కార్యకలాపాన్ని ఉత్తేజపరచి, మొక్కల ఆరోగ్యకరమైన పెరుగుదలకు సహాయపడే అధిక సాంద్రత కలిగిన సేంద్రీయ నేల మెరుగుదల ఉత్పత్తి.",
    hi: "पोटेशियम ह्यूमेट 98% फ्लेक्स एक उच्च सांद्रता वाला जैविक मिट्टी सुधारक है जो पोषक तत्वों की उपलब्धता बढ़ाता है, मिट्टी की संरचना में सुधार करता है और पौधों की स्वस्थ वृद्धि को बढ़ावा देता है।",
  },

  benefits: [
    {
      en: "Improves soil fertility",
      te: "నేల సారాన్ని పెంచుతుంది",
      hi: "मिट्टी की उर्वरता बढ़ाता है",
    },
    {
      en: "Enhances root development",
      te: "వేర్ల అభివృద్ధిని మెరుగుపరుస్తుంది",
      hi: "जड़ों के विकास में सुधार करता है",
    },
    {
      en: "Increases nutrient absorption",
      te: "పోషకాల శోషణను పెంచుతుంది",
      hi: "पोषक तत्वों का अवशोषण बढ़ाता है",
    },
    {
      en: "Promotes microbial activity",
      te: "సూక్ష్మజీవుల కార్యకలాపాన్ని పెంచుతుంది",
      hi: "सूक्ष्मजीव गतिविधि बढ़ाता है",
    },
    {
      en: "Improves water retention",
      te: "నీటి నిల్వ సామర్థ్యాన్ని పెంచుతుంది",
      hi: "जल धारण क्षमता बढ़ाता है",
    },
    {
      en: "Boosts crop yield",
      te: "పంట దిగుబడిని పెంచుతుంది",
      hi: "फसल उत्पादन बढ़ाता है",
    },
    {
      en: "Reduces fertilizer requirement",
      te: "రసాయన ఎరువుల అవసరాన్ని తగ్గిస్తుంది",
      hi: "रासायनिक उर्वरकों की आवश्यकता कम करता है",
    },
    {
      en: "Enhances stress tolerance",
      te: "వాతావరణ ఒత్తిడిని తట్టుకునే శక్తిని పెంచుతుంది",
      hi: "तनाव सहनशीलता बढ़ाता है",
    },
  ],

  composition: [
    "Humic Acid",
    "Fulvic Acid",
    "Potassium Oxide",
    "Organic Carbon",
  ],

  crops: [
    {
      name: {
        en: "Tomato",
        te: "టమాటా",
        hi: "टमाटर",
      },
      image: "/lion.png",
    },
    {
      name: {
        en: "Cucumber",
        te: "దోసకాయ",
        hi: "खीरा",
      },
      image: "/crops/cucumber.png",
    },
    {
      name: {
        en: "Potato",
        te: "బంగాళాదుంప",
        hi: "आलू",
      },
      image: "/crops/potato.png",
    },
    {
      name: {
        en: "Carrot",
        te: "క్యారెట్",
        hi: "गाजर",
      },
      image: "/crops/carrot.png",
    },
  ],

  dosage: {
    foliarSpray: {
      en: "2-3 g/L",
      te: "2-3 గ్రా / లీటర్",
      hi: "2-3 ग्राम / लीटर",
    },
    drip: {
      en: "1 kg/acre",
      te: "1 కిలో / ఎకరం",
      hi: "1 किलो / एकड़",
    },
    soilApplication: {
      en: "2-5 kg/acre",
      te: "2-5 కిలోలు / ఎకరం",
      hi: "2-5 किलो / एकड़",
    },
  },

  applicationStages: [
    {
      en: "Seedling Stage",
      te: "నాటు దశ",
      hi: "पौध अवस्था",
    },
    {
      en: "Vegetative Stage",
      te: "ఏపుగా పెరిగే దశ",
      hi: "वृद्धि अवस्था",
    },
    {
      en: "Flowering",
      te: "పుష్పించే దశ",
      hi: "फूल आने की अवस्था",
    },
    {
      en: "Fruit Development",
      te: "కాయ అభివృద్ధి దశ",
      hi: "फल विकास अवस्था",
    },
  ],

  compatibleWith: [
    "NPK Fertilizers",
    "Micronutrients",
    "Seaweed Extract",
    "Amino Acid",
  ],

  avoidMixingWith: [
    "Strong Acidic Products",
  ],

  specifications: {
    appearance: "Black Flakes",
    solubility: "100% Water Soluble",
    pH: "9-10",
    packing: [
      "250g",
      "500g",
      "1kg",
      "5kg",
      "25kg",
    ],
  },

  seo: {
    title: "Potassium Humate 98% Flakes | Sunshine Agrichem",
    description:
      "Premium Potassium Humate Flakes for improved soil health, nutrient uptake and higher crop yield.",
    keywords: [
      "Potassium Humate",
      "Humic Acid",
      "Organic Fertilizer",
      "Soil Conditioner",
      "Bio Stimulant",
      "Sunshine Agrichem",
    ],
  },

  relatedBlogs: [
    "benefits-of-humic-acid",
    "how-to-improve-soil-health",
    "best-root-growth-products",
  ],

  faqs: [
    {
      question: {
        en: "Can it be used with NPK fertilizers?",
        te: "ఎన్‌పీకే ఎరువులతో కలిపి వాడవచ్చా?",
        hi: "क्या इसे NPK उर्वरकों के साथ उपयोग किया जा सकता है?",
      },
      answer: {
        en: "Yes, it is compatible with most NPK fertilizers.",
        te: "అవును, చాలా ఎన్‌పీకే ఎరువులతో కలిపి ఉపయోగించవచ్చు.",
        hi: "हाँ, इसे अधिकांश NPK उर्वरकों के साथ उपयोग किया जा सकता है।",
      },
    },
  ],

  featured: true,

  active: true,
},

{
  id: "2",

  slug: "suntop-granules",

  name: {
    en: "SUNTOP Granules",
    te: "సన్‌టాప్ గ్రాన్యూల్స్",
    hi: "सनटॉप ग्रेन्यूल्स",
  },

  shortName: {
    en: "SUNTOP",
    te: "సన్‌టాప్",
    hi: "सनटॉप",
  },

  category: "Bio Stimulant",

  brand: "Sunshine Agrichem",

  thumbnail: "/products/suntop-thumb.png",

  companyLogo: "/logos/sunshine-logo.png",

  brandLogo: "/logos/sunshine-icon.png",

  themeColor: "#2E8B57",

  images: [
    "/products/suntop-1.png",
    "/products/suntop-2.png",
  ],

  shortDescription: {
    en: "Premium soil application granules that improve crop health, increase resistance and deliver higher yields.",
    te: "పంటల ఆరోగ్యాన్ని మెరుగుపరచి, నిరోధక శక్తిని పెంచి అధిక దిగుబడిని అందించే ప్రీమియం గ్రాన్యూల్స్.",
    hi: "फसल स्वास्थ्य, रोग प्रतिरोधक क्षमता और अधिक उपज के लिए प्रीमियम मिट्टी में प्रयोग होने वाले ग्रेन्यूल्स।",
  },

  description: {
    en: "SUNTOP Granules is a premium bio-stimulant formulated for soil application. It improves soil health, stimulates beneficial microbial activity, enhances crop resistance against diseases and adverse climatic conditions, and supports vigorous crop growth for better quality and higher yields.",
    te: "సన్‌టాప్ గ్రాన్యూల్స్ నేలలో వేయడానికి ప్రత్యేకంగా రూపొందించిన ప్రీమియం బయో స్టిమ్యులెంట్. ఇది నేల ఆరోగ్యాన్ని మెరుగుపరచి, ప్రయోజనకరమైన సూక్ష్మజీవుల కార్యకలాపాన్ని పెంచి, వ్యాధులు మరియు ప్రతికూల వాతావరణ పరిస్థితులను తట్టుకునే శక్తిని పెంచి, అధిక నాణ్యతతో కూడిన దిగుబడిని అందిస్తుంది.",
    hi: "सनटॉप ग्रेन्यूल्स मिट्टी में प्रयोग के लिए विकसित एक प्रीमियम बायो-स्टिमुलेंट है। यह मिट्टी की गुणवत्ता सुधारता है, लाभकारी सूक्ष्मजीवों की गतिविधि बढ़ाता है, रोग एवं प्रतिकूल मौसम से लड़ने की क्षमता बढ़ाता है तथा अधिक उपज प्राप्त करने में सहायता करता है।",
  },

  benefits: [
    {
      en: "Produces higher crop yields",
      te: "అధిక దిగుబడిని అందిస్తుంది",
      hi: "अधिक उपज प्राप्त होती है",
    },
    {
      en: "Easy soil application",
      te: "సులభంగా నేలలో వేయవచ్చు",
      hi: "मिट्टी में आसानी से उपयोग किया जा सकता है",
    },
    {
      en: "Highly concentrated formula",
      te: "అధిక సాంద్రత కలిగిన ఫార్ములా",
      hi: "उच्च सांद्रता वाला फॉर्मूला",
    },
    {
      en: "Improves beneficial microbial activity",
      te: "ప్రయోజనకరమైన సూక్ష్మజీవుల కార్యకలాపాన్ని పెంచుతుంది",
      hi: "लाभकारी सूक्ष्मजीवों की गतिविधि बढ़ाता है",
    },
    {
      en: "Eco-friendly formulation",
      te: "పర్యావరణానికి అనుకూలమైనది",
      hi: "पर्यावरण के अनुकूल",
    },
    {
      en: "Long shelf life",
      te: "ఎక్కువ కాలం నిల్వ ఉంటుంది",
      hi: "लंबी शेल्फ लाइफ",
    },
    {
      en: "Improves crop resistance",
      te: "పంటల నిరోధక శక్తిని పెంచుతుంది",
      hi: "फसल की प्रतिरोधक क्षमता बढ़ाता है",
    },
    {
      en: "Helps plants withstand adverse climatic conditions",
      te: "ప్రతికూల వాతావరణ పరిస్థితులను తట్టుకునే శక్తిని పెంచుతుంది",
      hi: "प्रतिकूल मौसम की परिस्थितियों से लड़ने में सहायता करता है",
    },
    {
      en: "Supports healthy plant growth",
      te: "మొక్కల ఆరోగ్యకరమైన పెరుగుదలకు సహాయపడుతుంది",
      hi: "स्वस्थ पौध विकास को बढ़ावा देता है",
    },
  ],

  composition: [
    "Organic Granules",
    "Bio Stimulant Complex",
    "Natural Growth Promoters",
  ],

  crops: [
    {
      name: {
        en: "Paddy",
        te: "వరి",
        hi: "धान",
      },
      image: "/crops/paddy.png",
    },
    {
      name: {
        en: "Sugarcane",
        te: "చెరకు",
        hi: "गन्ना",
      },
      image: "/crops/sugarcane.png",
    },
    {
      name: {
        en: "Brinjal",
        te: "వంకాయ",
        hi: "बैंगन",
      },
      image: "/crops/brinjal.png",
    },
    {
      name: {
        en: "Vegetables",
        te: "కూరగాయలు",
        hi: "सब्जियाँ",
      },
      image: "/crops/vegetables.png",
    },
  ],

  dosage: {
    foliarSpray: {
      en: "Not applicable",
      te: "ప్రయోజనం లేదు",
      hi: "लागू नहीं है",
    },
    drip: {
      en: "Not applicable",
      te: "ప్రయోజనం లేదు",
      hi: "लागू नहीं है",
    },
    soilApplication: {
      en: "Paddy: 4 kg/acre, Sugarcane: 8 kg/acre, Vegetables: 6-7 kg/acre",
      te: "వరి: 4 కిలోలు / ఎకరం, చెరకు: 8 కిలోలు / ఎకరం, కూరగాయలు: 6-7 కిలోలు / ఎకరం",
      hi: "धान: 4 किलो / एकड़, गन्ना: 8 किलो / एकड़, सब्जियाँ: 6-7 किलो / एकड़",
    },
  },

  applicationStages: [
    {
      en: "Basal Application",
      te: "మూల ఎరువు దశ",
      hi: "बेसल एप्लिकेशन",
    },
    {
      en: "Vegetative Stage",
      te: "ఏపుగా పెరిగే దశ",
      hi: "वृद्धि अवस्था",
    },
    {
      en: "Flowering Stage",
      te: "పుష్పించే దశ",
      hi: "फूल आने की अवस्था",
    },
  ],

  compatibleWith: [
    "Organic Fertilizers",
    "NPK Fertilizers",
    "Micronutrients",
    "Bio Fertilizers",
  ],

  avoidMixingWith: [
    "Strong Acidic Chemicals",
  ],

  specifications: {
    appearance: "Brown Granules",
    application: "Soil Application",
    shelfLife: "24 Months",
    packing: [
      "4kg",
      "8kg",
      "25kg",
    ],
  },

  seo: {
    title: "SUNTOP Granules | Soil Bio Stimulant | Sunshine Agrichem",
    description:
      "Premium SUNTOP Granules for soil application. Improves crop resistance, enhances soil health and delivers higher yields in paddy, sugarcane and vegetable crops.",
    keywords: [
      "SUNTOP Granules",
      "Soil Bio Stimulant",
      "Granules for Paddy",
      "Sugarcane Granules",
      "Vegetable Bio Stimulant",
      "Soil Conditioner",
      "Sunshine Agrichem",
    ],
  },

  relatedBlogs: [
    "importance-of-soil-application",
    "how-biostimulants-improve-crop-yield",
    "improving-crop-resistance-naturally",
  ],

  faqs: [
    {
      question: {
        en: "Can SUNTOP Granules be applied with fertilizers?",
        te: "సన్‌టాప్ గ్రాన్యూల్స్‌ను ఎరువులతో కలిసి వేయవచ్చా?",
        hi: "क्या सनटॉप ग्रेन्यूल्स को उर्वरकों के साथ प्रयोग किया जा सकता है?",
      },
      answer: {
        en: "Yes. It is compatible with most organic and NPK fertilizers for soil application.",
        te: "అవును. చాలా ఆర్గానిక్ మరియు ఎన్‌పీకే ఎరువులతో కలిసి నేలలో ఉపయోగించవచ్చు.",
        hi: "हाँ। इसे अधिकांश जैविक एवं NPK उर्वरकों के साथ प्रयोग किया जा सकता है।",
      },
    },
    {
      question: {
        en: "When should SUNTOP Granules be applied?",
        te: "సన్‌టాప్ గ్రాన్యూల్స్‌ను ఎప్పుడు వేయాలి?",
        hi: "सनटॉप ग्रेन्यूल्स कब डालना चाहिए?",
      },
      answer: {
        en: "It is best applied during basal application or early crop growth stages.",
        te: "మూల ఎరువు దశలో లేదా పంట ప్రారంభ పెరుగుదల దశలో వేయడం ఉత్తమం.",
        hi: "इसे बेसल एप्लिकेशन या फसल की प्रारंभिक वृद्धि अवस्था में डालना सबसे उपयुक्त है।",
      },
    },
  ],

  featured: true,

  active: true,
}
]