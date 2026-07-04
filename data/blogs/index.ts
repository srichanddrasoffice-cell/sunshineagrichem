import type { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: "soil-health",
    slug: "soil-health-essentials",
    coverImage: "/products/1.jpg",
    publishedAt: "2026-06-15",
    relatedSlugs: ["smart-irrigation"],
    translations: {
      en: {
        title: "Soil Health Essentials for Better Yields",
        excerpt: "Learn how balanced soil care improves long-term productivity.",
        content: "Healthy soil is the foundation of resilient farming. Focus on structure, moisture retention, and organic matter.",
        category: "Soil",
      },
      te: {
        title: "ఎక్కువ దిగుబడుల కోసం మట్టి ఆరోగ్యం అవసరాలు",
        excerpt: "సంతులిత మట్టి సంరక్షణ దీర్ఘకాలిక ఉత్పాదకతను ఎలా మెరుగుపరుస్తుందో తెలుసుకోండి.",
        content: "ಆరోగ్యకరమైన మట్టి స్థిరమైన వ్యవసాయానికి ఆధారం. నిర్మాణం, తేమ నిలుపుదల మరియు సేంద్రియ పదార్థంపై దృష్టి పెట్టండి.",
        category: "మట్టి",
      },
      hi: {
        title: "बेहतर उपज के लिए मिट्टी स्वास्थ्य के मूल सिद्धांत",
        excerpt: "जानें कि संतुलित मिट्टी देखभाल लंबे समय तक उत्पादकता को कैसे बेहतर बनाती है।",
        content: "स्वस्थ मिट्टी लचीले खेती की आधारशिला है। संरचना, नमी-धारण और कार्बनिक पदार्थ पर ध्यान दें।",
        category: "मिट्टी",
      },
    },
  },
  {
    id: "smart-irrigation",
    slug: "smart-irrigation-tips",
    coverImage: "/products/2.jpg",
    publishedAt: "2026-06-20",
    relatedSlugs: ["soil-health"],
    translations: {
      en: {
        title: "Smart Irrigation Tips for Modern Farms",
        excerpt: "Reduce water waste and improve timing with smarter irrigation decisions.",
        content: "Precision irrigation helps farmers reduce costs while improving crop consistency.",
        category: "Water",
      },
      te: {
        title: "ఆధునిక వ్యవసాయానికి తెలివైన सिंచన సూచనలు",
        excerpt: "తెలివైన सिंచన నిర్ణయాలతో నీటి వ్యర్థతను తగ్గించి సమయాన్ని మెరుగుపరచండి.",
        content: "సూక్ష్మ सिंచన వ్యవసాయదారులకు ఖర్చులను తగ్గించడంలో మరియు పంట స్థిరత్వాన్ని మెరుగుపరచడంలో సహాయం చేస్తుంది.",
        category: "నీరు",
      },
      hi: {
        title: "आधुनिक farms के लिए स्मार्ट सिंचाई टिप्स",
        excerpt: "स्मार्ट सिंचाई निर्णयों के साथ पानी की बर्बादी कम करें और समय को बेहतर बनाएं।",
        content: "सटीक सिंचाई किसानों को लागत कम करने और फसल की सुसंगतता बढ़ाने में मदद करती है।",
        category: "पानी",
      },
    },
  },
];
