import type { Product } from "@/types/product";

type ProductMeta = {
  composition?: Record<"en" | "te" | "hi", string[]>;
  specifications?: Record<"en" | "te" | "hi", Array<{ label: string; value: string }>>;
};

const buildProduct = (
  id: string,
  slug: string,
  category: string,
  image: string,
  name: Record<"en" | "te" | "hi", string>,
  shortDescription: Record<"en" | "te" | "hi", string>,
  description: Record<"en" | "te" | "hi", string>,
  dosage: Record<"en" | "te" | "hi", string>,
  benefits: Record<"en" | "te" | "hi", string[]>,
  featured = true,
  meta?: ProductMeta,
): Product => ({
  id,
  slug,
  category,
  images: [image],
  brochure: `/brochures/${slug}.pdf`,
  featured,
  translations: {
    en: {
      name: name.en,
      shortDescription: shortDescription.en,
      description: description.en,
      dosage: dosage.en,
      crops: "Rice, maize, tomato, chili",
      benefits: benefits.en,
      composition: meta?.composition?.en ?? ["Nitrogen", "Phosphorus", "Potassium", "Micronutrients"],
      specifications: meta?.specifications?.en ?? [
        { label: "Form", value: "Liquid" },
        { label: "Packaging", value: "1L, 5L" },
      ],
      faqTitle: "Frequently asked questions",
      faqDescription: `Common queries about ${name.en}.`,
    },
    te: {
      name: name.te,
      shortDescription: shortDescription.te,
      description: description.te,
      dosage: dosage.te,
      crops: "వరి, మొక్కజొన్న, టమోటా, మిరప",
      benefits: benefits.te,
      composition: meta?.composition?.te ?? ["నైట్రోజన్", "ఫాస్పరస్", "పొటాషియమ్", "మైక్రో న్యూట్రియంట్స్"],
      specifications: meta?.specifications?.te ?? [
        { label: "రూపం", value: "ద్రవం" },
        { label: "ప్యాకేజింగ్", value: "1L, 5L" },
      ],
      faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
      faqDescription: `${name.te} గురించి సాధారణ ప్రశ్నలు.`,
    },
    hi: {
      name: name.hi,
      shortDescription: shortDescription.hi,
      description: description.hi,
      dosage: dosage.hi,
      crops: "चावल, मक्का, टमाटर, मिर्च",
      benefits: benefits.hi,
      composition: meta?.composition?.hi ?? ["नाइट्रोजन", "फॉस्फोरस", "पोटैशियम", "सूक्ष्म पोषक तत्व"],
      specifications: meta?.specifications?.hi ?? [
        { label: "प्रकार", value: "तरल" },
        { label: "पैकेजिंग", value: "1L, 5L" },
      ],
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faqDescription: `${name.hi} के बारे में सामान्य प्रश्न।`,
    },
  },
});

export const products: Product[] = [
  buildProduct(
    "suntop",
    "suntop",
    "Nutrition",
    "/products/suntop.png",
    {
      en: "Suntop",
      te: "హుసిక్",
      hi: "हुसिक",
    },
    {
      en: "Suntop make your crops achieve high yields by increasing beneficial insects and providing extra power to stand with adverse climate conditions.",
      te: "సన్‌టాప్ వాడటం ద్వారా పంటలు అధిక దిగుబడిని అందుకుంటాయి. ఇది ఉపయోగకరమైన సూక్ష్మజీవుల చురుకుదనాన్ని పెంచి, ప్రతికూల వాతావరణ పరిస్థితులను తట్టుకునే శక్తిని మొక్కలకు అందిస్తుంది.",
      hi: "उच्च उपज वाले खेतों के लिए संतुलित फसल पोषण।",
    },
    {
      en: "Suntop make your crops achieve high yields by increasing beneficial insects and providing extra power to stand with adverse climate conditions.",
      te: "ధాన్యాలు మరియు కూరగాయలకు రూపొందించిన శాస్త్రీయంగా రూపొందించబడిన పోషక మిశ్రమం.",
      hi: "अनाज और सब्जियों के लिए वैज्ञानिक रूप से तैयार किया गया पोषक मिश्रण।",
    },
    {
      en: "4kg (Paddy), 8kg (Sugarcane), or 6–7kg (Vegetables)/per Acer.",
      te: "మోతాదు: వరి – 4 కిలోలు/ఎకరం | చెరకు – 8 కిలోలు/ఎకరం | కూరగాయలు – 6 నుండి 7 కిలోలు/ఎకరం",
      hi: "विकास की प्रारंभिक अवस्थाओं में प्रति एकड़ 2-3 लीटर का उपयोग करें।",
    },
    {
      en: ["Improves root strength", "Boosts flowering", "Enhances color"],
      te: ["మూల బలాన్ని మెరుగుపరుస్తుంది", "పూలను ప్రోత్సహిస్తుంది", "రంగును మెరుగుపరుస్తుంది"],
      hi: ["जड़ शक्ति बढ़ाता है", "फूल आने में मदद करता है", "रंग को बेहतर बनाता है"],
    },
    true,
    {
      composition: {
        en: ["12% Humic Acid", "Drip Special", "Improves Soil", "Better Root Growth"],
        te: ["12% హ్యూమిక్ యాసిడ్", "డ్రిప్ స్పెషల్", "నేల ఆరోగ్యం", "వేర్ల వృద్ధి"],
        hi: ["12% ह्यूमिक एसिड", "ड्रिप स्पेशल", "मिट्टी स्वास्थ्य", "बेहतर जड़ वृद्धि"],
      },
      specifications: {
        en: [
          { label: "Form", value: "Liquid" },
          { label: "Packaging", value: "1 liter bottle" },
        ],
        te: [
          { label: "రూపం", value: "ద్రవం" },
          { label: "ప్యాకేజింగ్", value: "1 లీటర్ బాటిల్" },
        ],
        hi: [
          { label: "प्रकार", value: "तरल" },
          { label: "पैकेजिंग", value: "1 लीटर बोतल" },
        ],
      },
    },
  ),
  buildProduct(
    "pest-shield",
    "pest-shield",
    "Protection",
    "/products/no1.png",
    {
      en: "Pest Shield",
      te: "పెస్ట్ షీల్డ్",
      hi: "पेस्ट शील्ड",
    },
    {
      en: "Reliable field protection against common pests.",
      te: "సాధారణ పురుగుల నుంచి విశ్వసనీయ క్షేత్ర రక్షణ.",
      hi: "सामान्य कीटों से विश्वसनीय खेत संरक्षण।",
    },
    {
      en: "A durable foliar protection product for broad range pest control.",
      te: "విస్తృత క్షేత్ర పురుగుల నియంత్రణకు రూపొందించిన నిలకడైన ఫోలియార్ రక్షణ ఉత్పత్తి.",
      hi: "व्यापक कीट नियंत्रण के लिए डिज़ाइन किया गया टिकाऊ पत्तीय संरक्षण उत्पाद।",
    },
    {
      en: "Spray at 400ml per acre during pest pressure.",
      te: "పురుగుల పీడన సమయంలో ఒక ఎకరానికి 400ml స్ప్రే చేయండి.",
      hi: "कीट दबाव के दौरान प्रति एकड़ 400ml स्प्रे करें।",
    },
    {
      en: ["Fast action", "Long residual effect", "Safe application"],
      te: ["త్వరగా చర్య", "పొడవైన అవశేష ప్రభావం", "సురక్షిత అనువర్తనం"],
      hi: ["तेज़ कार्रवाई", "लंबा अवशेष प्रभाव", "सुरक्षित उपयोग"],
    },
  ),
  buildProduct(
    "soil-boost",
    "soil-boost",
    "Soil Health",
    "/products/lion.png",
    {
      en: "Soil Boost",
      te: "సాయిల్ బూస్ట్",
      hi: "सॉइल बूस्ट",
    },
    {
      en: "Improves soil structure and moisture retention.",
      te: "మట్టి నిర్మాణం మరియు తేమ నిలుపుదలను మెరుగుపరుస్తుంది.",
      hi: "मिट्टी की संरचना और नमी प्रतिधारण में सुधार करता है।",
    },
    {
      en: "A balanced soil conditioner designed for long-term fertility.",
      te: "దీర్ఘకాల భూసారాన్ని 향ిపరచే సమతుల్య మట్టి కండీషనర్.",
      hi: "दीर्घकालिक उर्वरता के लिए डिज़ाइन किया गया संतुलित मिट्टी कंडीशनर।",
    },
    {
      en: "Mix 1-2 liters per acre before sowing.",
      te: "విత్తనానికి ముందే ఒక ఎకరానికి 1-2 లీటర్లు మిక్స్ చేయండి.",
      hi: "बुआई से पहले प्रति एकड़ 1-2 लीटर मिलाएँ।",
    },
    {
      en: ["Better aeration", "Higher water retention", "Stronger roots"],
      te: ["మెరుగైన వాయు వినిమయం", "ఎక్కువ నీరు నిలుపుదల", "బలమైన వేర్లు"],
      hi: ["बेहतर वायु निकास", "अधिक जल प्रतिधारण", "मजबूत जड़ें"],
    },
  ),
  buildProduct(
    "leaf-gold",
    "leaf-gold",
    "Foliar",
    "/products/quantum.png",
    {
      en: "Leaf Gold",
      te: "లీఫ్ గోల్డ్",
      hi: "लीफ गोल्ड",
    },
    {
      en: "Fast foliar feeding for greener leaves.",
      te: "ಹಸಿರು ಎಲೆలకు వేగవంతమైన ఫోలియార్ ఫీడింగ్.",
      hi: "हरे पत्तियों के लिए तेज पत्तीय पोषण।",
    },
    {
      en: "Supports quick nutrient uptake during crop stress.",
      te: "పంట ప్రతికూల పరిస్థితులలో వేగవంతమైన పోషక గ్రహణానికి మద్దతు ఇస్తుంది.",
      hi: "फसल तनाव के दौरान त्वरित पोषक अवशोषण का समर्थन करता है।",
    },
    {
      en: "Spray 500ml per acre in the morning.",
      te: "ఉదయం ఒక ఎకరానికి 500ml స్ప్రే చేయండి.",
      hi: "सुबह प्रति एकड़ 500ml स्प्रे करें।",
    },
    {
      en: ["Greener foliage", "Rapid recovery", "Improved vigor"],
      te: ["ಹಸಿರು పత్రాలు", "ವೇಗవంతమైన కోలుకోవడం", "మెరుగైన శక్తి"],
      hi: ["हरी पत्तियाँ", "तेज़ रिकवरी", "बेहतर vigor"],
    },
  ),
  buildProduct(
    "root-max",
    "root-max",
    "Root Care",
    "/products/allright.png",
    {
      en: "Root Max",
      te: "రూట్ మాక్స్",
      hi: "रूट मैक्स",
    },
    {
      en: "Strengthens roots and improves plant establishment.",
      te: "వేర్లను బలోపేతం చేసి మొక్క స్థాపనను మెరుగుపరుస్తుంది.",
      hi: "जड़ों को मजबूत करता है और पौधे की स्थापना में सुधार करता है।",
    },
    {
      en: "Designed for early-stage crop resilience and stress tolerance.",
      te: "తొలి దశల పంట సహనశీలత మరియు ప్రతికూల పరిస్థితుల लिए రూపొందించబడింది.",
      hi: "प्रारंभिक चरण की फसल लचीलापन और तनाव सहिष्णुता के लिए डिज़ाइन किया गया।",
    },
    {
      en: "Apply 1 liter per acre after transplanting.",
      te: "నర్సరీ తర్వాత ఒక ఎకరానికి 1 లీటర్ వర్తించండి.",
      hi: "रोपाई के बाद प्रति एकड़ 1 लीटर लागू करें।",
    },
    {
      en: ["Stronger root mass", "Better survival", "Improved uptake"],
      te: ["బలమైన మూలం సముదాయం", "మెరుగైన బతుకుదై", "మెరుగైన గ్రహణశక్తి"],
      hi: ["मजबूत जड़ द्रव्यमान", "बेहतर अस्तित्व", "बेहतर अवशोषण"],
    },
  ),
  buildProduct(
    "crop-vital",
    "crop-vital",
    "Nutrition",
    "/products/sarkar.png",
    {
      en: "Crop Vital",
      te: "క్రాప్ విల్ట్",
      hi: "क्रॉप वाइटल",
    },
    {
      en: "Complete nutrition for healthy, high-performing crops.",
      te: "ఆరోగ్యకరమైన, అధిక సామర్థ్యం గల పంటలకు సంపూర్ణ పోషణ.",
      hi: "स्वस्थ और उच्च-प्रदर्शन वाली फसलों के लिए पूर्ण पोषण।",
    },
    {
      en: "A versatile blend suitable for multiple crop cycles.",
      te: "బహుళ పంట చక్రాలకు అనుకూలమైన బహుముఖ మిశ్రమం.",
      hi: "कई फसल चक्रों के लिए उपयुक्त बहुमुखी मिश्रण।",
    },
    {
      en: "Use 2 liters per acre during vegetative growth.",
      te: "వెజిటేటివ్ వృద్ధిలో ఒక ఎకరానికి 2 లీటర్లు ఉపయోగించండి.",
      hi: "शाकीय वृद्धि के दौरान प्रति एकड़ 2 लीटर उपयोग करें।",
    },
    {
      en: ["Balanced nutrition", "Improved vigor", "Higher yields"],
      te: ["సమతుల్య పోషణ", "మెరుగైన శక్తి", "ఎక్కువ దిగుబడి"],
      hi: ["संतुलित पोषण", "बेहतर vigor", "ऊँची उपज"],
    },
  ),
  buildProduct(
    "green-guard",
    "green-guard",
    "Protection",
    "/products/hycross.png",
    {
      en: "Green Guard",
      te: "గ్రీన్ గార్డ్",
      hi: "ग्रीन गार्ड",
    },
    {
      en: "Protects crops from stress and opportunistic disease.",
      te: "పంటలను పీడన మరియు అవకాశవాద వ్యాధుల నుంచి రక్షిస్తుంది.",
      hi: "फसलों को तनाव और अवसरवादी रोगों से बचाता है।",
    },
    {
      en: "A protective solution with strong field stability.",
      te: "బలమైన క్షేత్ర స్థిరత్వం గల రక్షణాత్మక పరిష్కారం.",
      hi: "मजबूत खेत स्थिरता वाला सुरक्षात्मक समाधान।",
    },
    {
      en: "Apply 300ml per acre at early symptom stage.",
      te: "ప్రారంభ లక్షణ దశలో ఒక ఎకరానికి 300ml వర్తించండి.",
      hi: "प्रारंभिक लक्षण चरण में प्रति एकड़ 300ml लागू करें।",
    },
    {
      en: ["Disease defense", "Field resilience", "Low phytotoxicity"],
      te: ["వ్యాధి రక్షణ", "క్షేత్ర సహనం", "తక్కువ ఫైటోటాక్సిసిటీ"],
      hi: ["रोग सुरक्षा", "खेत लचीलापन", "कम फाइटोटॉक्सिसिटी"],
    },
  ),
  buildProduct(
    "micro-plus",
    "micro-plus",
    "Micronutrients",
    "/products/nexus.png",
    {
      en: "Micro Plus",
      te: "మైక్రో ప్లస్",
      hi: "माइक्रो प्लस",
    },
    {
      en: "Delivers essential micronutrients for balanced growth.",
      te: "సమతుల్య వృద్ధికి అవసరమైన సూక్ష్మ పోషకాలను అందిస్తుంది.",
      hi: "संतुलित वृद्धि के लिए आवश्यक सूक्ष्म पोषक तत्व प्रदान करता है।",
    },
    {
      en: "Ideal for correcting deficiencies in high-demand crops.",
      te: "అధిక డిమాండ్ ఉన్న పంటల్లో లోపాలను సరిచేయడానికి ఉత్తమం.",
      hi: "उच्च मांग वाली फसलों में कमी को दूर करने के लिए आदर्श।",
    },
    {
      en: "Drip 500ml per acre weekly.",
      te: "వారానికి ఒక ఎకరానికి 500ml డ్రిప్ చేయండి.",
      hi: "प्रति सप्ताह प्रति एकड़ 500ml ड्रिप करें।",
    },
    {
      en: ["Corrects deficiencies", "Improves quality", "Fine-tunes growth"],
      te: ["లోపాలను సరిచేస్తుంది", "నాణ్యతను మెరుగుపరుస్తుంది", "వృద్ధిని సరిదిద్దుతుంది"],
      hi: ["कमियों को दूर करता है", "गुणवत्ता में सुधार", "वृद्धि को ठीक करता है"],
    },
  ),
  buildProduct(
    "plant-boost",
    "plant-boost",
    "Biostimulant",
    "/products/idea.png",
    {
      en: "Plant Boost",
      te: "ప్లాంట్ బూస్ట్",
      hi: "प्लांट बूस्ट",
    },
    {
      en: "Improves plant metabolism and stress tolerance.",
      te: "మొక్క జీవక్రియ మరియు ప్రతికూల పరిస్థితులకు తట్టుకునే శక్తిని మెరుగుపరుస్తుంది.",
      hi: "पौधे की चयापचय और तनाव सहिष्णुता में सुधार करता है।",
    },
    {
      en: "A biostimulant that supports faster recovery and better quality.",
      te: "వేగవంతమైన కోలుకోవడం మరియు మెరుగైన నాణ్యతకు మద్దతు ఇచ్చే బయోస్టిమ్యులంట్.",
      hi: "तेज़ रिकवरी और बेहतर गुणवत्ता का समर्थन करने वाला बायोस्टिमुलेन्ट।",
    },
    {
      en: "Apply 750ml per acre during flowering.",
      te: "పూలిన సమయంలో ఒక ఎకరానికి 750ml వర్తించండి.",
      hi: "फूल आने के दौरान प्रति एकड़ 750ml लागू करें।",
    },
    {
      en: ["Better metabolism", "Improved flowering", "Higher resilience"],
      te: ["మెరుగైన జీవక్రియా", "మెరుగైన పూలు", "ఎక్కువ సహనం"],
      hi: ["बेहतर चयापचय", "बेहतर फूलना", "उच्च लचीलापन"],
    },
  ),
  buildProduct(
    "yield-max",
    "yield-max",
    "Yield Booster",
    "/products/rafel.png",
    {
      en: "Yield Max",
      te: "యీల్డ్ మాక్స్",
      hi: "यील्ड मैक्स",
    },
    {
      en: "Increases yield potential with targeted nutrient delivery.",
      te: "లక్ష్యిత పోషక సరఫరాతో దిగుబడి సంభావ్యతను పెంచుతుంది.",
      hi: "लक्षित पोषक वितरण के साथ उपज क्षमता बढ़ाता है।",
    },
    {
      en: "A performance booster for large-scale commercial farming.",
      te: "విశాల శ్రేణి వాణిజ్య వ్యవసాయానికి పనితీరు బూస్టర్.",
      hi: "व्यापक वाणिज्यिक खेती के लिए एक प्रदर्शन बूस्टर।",
    },
    {
      en: "Use 1.5 liters per acre during peak growth.",
      te: "శిఖర వృద్ధి సమయంలో ఒక ఎకరానికి 1.5 లీటర్లు ఉపయోగించండి.",
      hi: "उच्चतम वृद्धि के दौरान प्रति एकड़ 1.5 लीटर उपयोग करें।",
    },
    {
      en: ["Higher yield", "Better quality", "Efficient use"],
      te: ["ఎక్కువ దిగుబడి", "మెరుగైన నాణ్యత", "సమర్థవంతమైన ఉపయోగం"],
      hi: ["उच्च उपज", "बेहतर गुणवत्ता", "कुशल उपयोग"],
    },
  ),
  buildProduct(
    "nano-zinc",
    "nano-zinc",
    "Micronutrients",
    "/products/war.png",
    {
      en: "Nano Zinc",
      te: "నానో జింక్",
      hi: "नैनो जिंक",
    },
    {
      en: "Supports strong grain filling and healthy leaf development.",
      te: "బలమైన ధాన్య పూరణ మరియు ఆరోగ్యకరమైన ఆకుల అభివృద్ధికి మద్దతు ఇస్తుంది.",
      hi: "मजबूत दाना भराव और स्वस्थ पत्तियों के विकास का समर्थन करता है।",
    },
    {
      en: "A nano-formulated zinc solution for fast correction of deficiencies.",
      te: "లోపాలను త్వరగా సరిచేయడానికి నానో-ఫార్మ్యులేటెడ్ జింక్ పరిష్కారం.",
      hi: "कमियों के तेजी से सुधार के लिए नैनो-फॉर्म्युलेटेड जिंक समाधान।",
    },
    {
      en: "Apply 250ml per acre through drip or foliar application.",
      te: "డ్రిప్ లేదా ఫోలియార్ అప్లికేషన్ ద్వారా ఒక ఎకరానికి 250ml వర్తించండి.",
      hi: "ड्रिप या पत्तीय उपयोग से प्रति एकड़ 250ml लागू करें।",
    },
    {
      en: ["Fast nutrient correction", "Better grain fill", "Stronger leaves"],
      te: ["వేగవంతమైన పోషక సవరణ", "మెరుగైన ధాన్య పూరణ", "బలమైన ఆకులు"],
      hi: ["तेज़ पोषक सुधार", "बेहतर दाना भराव", "मजबूत पत्तियाँ"],
    },
    false,
  ),
  buildProduct(
    "citrus-fuel",
    "citrus-fuel",
    "Foliar",
    "/products/expert.png",
    {
      en: "Citrus Fuel",
      te: "సిట్రస్ ఫ్యూల్",
      hi: "सिटरस फ्यूल",
    },
    {
      en: "Promotes fruit size and better color in orchards.",
      te: "పండ్ల తోటల్లో పండు పరిమాణం మరియు మెరుగైన రంగును ప్రోత్సహిస్తుంది.",
      hi: "बगीचों में फल के आकार और बेहतर रंग को बढ़ावा देता है।",
    },
    {
      en: "A high-performance foliar feed for horticulture crops.",
      te: "ఉద్యాన పంటల కోసం అధిక-పనితీరు గల ఫోలియార్ ఫీడ్.",
      hi: "बागवानी फसलों के लिए उच्च-प्रदर्शन पत्तीय पोषण।",
    },
    {
      en: "Spray 400ml per acre during fruit development.",
      te: "పండు అభివృద్ధి సమయంలో ఒక ఎకరానికి 400ml స్ప్రే చేయండి.",
      hi: "फल विकास के दौरान प्रति एकड़ 400ml छिड़कें।",
    },
    {
      en: ["Larger fruits", "Improved skin color", "Better shelf life"],
      te: ["పెద్ద పండ్లు", "మెరుగైన చర్మ రంగు", "మెరుగైన నిల్వ జీవితము"],
      hi: ["बड़े फल", "बेहतर त्वचा रंग", "बेहतर शेल्फ लाइफ"],
    },
    false,
  ),
  buildProduct(
    "water-balance",
    "water-balance",
    "Water Care",
    "/products/demand.png",
    {
      en: "Water Balance",
      te: "వాటర్ బ్యాలన్స్",
      hi: "वाटर बैलेंस",
    },
    {
      en: "Helps crops handle water stress during dry spells.",
      te: "పొడుగుపాటు కాలంలో నీటి ఒత్తిడిని తట్టుకోడానికి సహాయపడుతుంది.",
      hi: "सूखे के दौर में फसलों को पानी के तनाव से निपटने में मदद करता है।",
    },
    {
      en: "A smart formulation that improves drought resilience in field crops.",
      te: "క్షేత్ర పంటలలో పొడి períodos సాహసాన్ని మెరుగుపరచే తెలివైన ఫార్ములేషన్.",
      hi: "खेत की फसलों में सूखा सहिष्णुता सुधारने वाला स्मार्ट फार्मूलेशन।",
    },
    {
      en: "Apply 750ml per acre before expected moisture stress.",
      te: "అంచనా వేసిన తేమ ఒత్తిడికి ముందే ఒక ఎకరానికి 750ml వర్తించండి.",
      hi: "अपेक्षित नमी तनाव से पहले प्रति एकड़ 750ml लागू करें।",
    },
    {
      en: ["Improved drought response", "Less wilting", "Better vigor"],
      te: ["మెరుగైన పొడి ప్రతిస్పందన", "తక్కువ వాడి", "మెరుగైన శక్తి"],
      hi: ["बेहतर सूखा प्रतिक्रिया", "कम मुरझाना", "बेहतर vigor"],
    },
    false,
  ),
  buildProduct(
    "blast-protect",
    "blast-protect",
    "Protection",
    "/products/allrightGR.png",
    {
      en: "Blast Protect",
      te: "బ్లాస్ట్ ప్రొటెక్ట్",
      hi: "ब्लास्ट प्रोटेक्ट",
    },
    {
      en: "Provides strong defense during sudden disease outbreaks.",
      te: "హఠాత్తుగా వ్యాధి வெடிப்பుల సమయంలో బలమైన రక్షణ ఇస్తుంది.",
      hi: "अचानक रोग outbreaks के दौरान मजबूत बचाव प्रदान करता है।",
    },
    {
      en: "A fast-acting protective solution for high-risk crop seasons.",
      te: "అధిక-जोखिम కలిగిన పంట ఋతువుల కోసం వేగంగా పనిచేసే రక్షణాత్మక పరిష్కారం.",
      hi: "उच्च-जोखिम वाली फसल मौसमों के लिए तेजी से असर करने वाला सुरक्षात्मक समाधान।",
    },
    {
      en: "Use 300ml per acre at the first sign of infection.",
      te: "వ్యాధి సంకేతాలు మొదలైనప్పుడు ఒక ఎకరానికి 300ml ఉపయోగించండి.",
      hi: "संक्रमण के पहले संकेत पर प्रति एकड़ 300ml उपयोग करें।",
    },
    {
      en: ["Rapid protection", "Lower infection", "Field stability"],
      te: ["వేగవంతమైన రక్షణ", "తగ్గిన సంక్రమణ", "క్షేత్ర స్థిరత్వం"],
      hi: ["तेज़ सुरक्षा", "कम संक्रमण", "खेत स्थिरता"],
    },
    false,
  ),
  buildProduct(
    "silo-boost",
    "silo-boost",
    "Soil Health",
    "/products/ara.png",
    {
      en: "Silo Boost",
      te: "సిలో బూస్ట్",
      hi: "सिलो बूस्ट",
    },
    {
      en: "Improves soil organic matter and beneficial biology.",
      te: "మట్టిలో సేంద్రీయ పదార్థం మరియు ప్రయోజనకరమైన జీవసంబంధాన్ని మెరుగుపరుస్తుంది.",
      hi: "मिट्टी में कार्बनिक पदार्थ और लाभकारी जैविकी में सुधार करता है।",
    },
    {
      en: "A soil enrichment product for sustained fertility and better structure.",
      te: "నిరంతర భూసారథ్యం మరియు మెరుగైన నిర్మాణం కోసం మట్టి enriquecరణ ఉత్పత్తి.",
      hi: "स्थायी उर्वरता और बेहतर संरचना के लिए मिट्टी प्र enrich उत्पाद।",
    },
    {
      en: "Mix 1 liter per acre before sowing or transplanting.",
      te: "విత్తకం లేదా నర్సరీకి ముందే ఒక ఎకరానికి 1 లీటర్ మిక్స్ చేయండి.",
      hi: "बुवाई या रोपाई से पहले प्रति एकड़ 1 लीटर मिलाएँ।",
    },
    {
      en: ["More organic matter", "Healthier soil", "Stronger growth"],
      te: ["మరిన్ని సేంద్రీయ పదార్థం", "ఆరోగ్యకరమైన మట్టి", "బలమైన వృద్ధి"],
      hi: ["अधिक जैविक पदार्थ", "स्वस्थ मिट्टी", "मजबूत वृद्धि"],
    },
    false,
  ),
  buildProduct(
    "green-mix",
    "green-mix",
    "Nutrition",
    "/products/kingkong.png",
    {
      en: "Green Mix",
      te: "గ్రీన్ మిక్స్",
      hi: "ग्रीन मिक्स",
    },
    {
      en: "Provides a balanced feed for leafy vegetables and fodder.",
      te: "ఆకుపచ్చ కూరగాయలు మరియు మంచినీటి మేతకు సమతుల్య పోషణ ఇస్తుంది.",
      hi: "हरी सब्जियों और चारे के लिए संतुलित पोषण प्रदान करता है।",
    },
    {
      en: "A versatile nutrition blend for quick crop response.",
      te: "వేగవంతమైన పంట ప్రతిస్పందన కోసం బహుముఖ పోషక మిశ్రమం.",
      hi: "तेज़ फसल प्रतिक्रिया के लिए बहुमुखी पोषण मिश्रण।",
    },
    {
      en: "Use 1.5 liters per acre during active growth.",
      te: "సక్రియ వృద్ధి సమయంలో ఒక ఎకరానికి 1.5 లీటర్లు ఉపయోగించండి.",
      hi: "सक्रिय वृद्धि के दौरान प्रति एकड़ 1.5 लीटर उपयोग करें।",
    },
    {
      en: ["Balanced feed", "Vegetative growth", "Healthy color"],
      te: ["సమతుల్య పోషణ", "పత్ర వృద్ధి", "ఆరోగ్యకరమైన రంగు"],
      hi: ["संतुलित पोषण", "शाकीय वृद्धि", "स्वस्थ रंग"],
    },
    false,
  ),
  buildProduct(
    "root-nourish",
    "root-nourish",
    "Root Care",
    "/products/kohinoor.png",
    {
      en: "Root Nourish",
      te: "రూట్ నూరిష్",
      hi: "रूट नॉरिश",
    },
    {
      en: "Strengthens early root development and nutrient uptake.",
      te: "ప్రారంభ మూలాభివృద్ధి మరియు పోషక గ్రహణశక్తిని బలోపేతం చేస్తుంది.",
      hi: "प्रारंभिक जड़ विकास और पोषक अवशोषण को मजबूत करता है।",
    },
    {
      en: "Designed for young plants and transplant establishment.",
      te: "యువ మొక్కలు మరియు నర్సరీ స్థాపన కోసం రూపొందించబడింది.",
      hi: "नवोदित पौधों और रोपाई स्थापना के लिए डिज़ाइन किया गया।",
    },
    {
      en: "Apply 600ml per acre after transplanting.",
      te: "నర్సరీ తర్వాత ఒక ఎకరానికి 600ml వర్తించండి.",
      hi: "रोपाई के बाद प्रति एकड़ 600ml लागू करें।",
    },
    {
      en: ["Better rooting", "More survival", "Healthy establishment"],
      te: ["మెరుగైన మూలాభివృద్ధి", "మరిన్ని బతుకుదై", "ఆరోగ్యకరమైన స్థాపన"],
      hi: ["बेहतर जड़ें", "अधिक अस्तित्व", "स्वस्थ स्थापना"],
    },
    false,
  ),
  buildProduct(
    "bio-fix",
    "bio-fix",
    "Biostimulant",
    "/products/magic.png",
    {
      en: "Bio Fix",
      te: "బయో ఫిక్స్",
      hi: "बायो फिक्स",
    },
    {
      en: "Boosts natural metabolic processes and plant resilience.",
      te: "సహజ జీవక్రియ ప్రక్రియలను మరియు మొక్క సహనశీలతను ప్రోత్సహిస్తుంది.",
      hi: "प्राकृतिक चयापचय प्रक्रियाओं और पौधे की लचीलापन को बढ़ाता है।",
    },
    {
      en: "A biostimulant that supports efficient growth under stress.",
      te: "పీడన పరిస్థితులలో సమర్థవంతమైన వృద్ధికి మద్దతు ఇచ్చే బయోస్టిమ్యులంట్.",
      hi: "तनाव के तहत कुशल वृद्धि का समर्थन करने वाला बायोस्टिमुलेन्ट।",
    },
    {
      en: "Apply 500ml per acre during early vegetative stages.",
      te: "ప్రారంభ ఆకుపచ్చ వృద్ధి దశలలో ఒక ఎకరానికి 500ml వర్తించండి.",
      hi: "प्रारंभिक शाकीय चरणों के दौरान प्रति एकड़ 500ml लागू करें।",
    },
    {
      en: ["Faster recovery", "Improved resilience", "Healthier canopy"],
      te: ["వేగవంతమైన కోలుకోవడం", "మెరుగైన సహనశీలత", "ఆరోగ్యకరమైన కప్పు"],
      hi: ["तेज़ रिकवरी", "बेहतर लचीलापन", "स्वस्थ छत्र"],
    },
    false,
  ),
  buildProduct(
    "harvest-max",
    "harvest-max",
    "Yield Booster",
    "/products/marq999.png",
    {
      en: "Harvest Max",
      te: "హార్వెస్ట్ మాక్స్",
      hi: "हार्वेस्ट मैक्स",
    },
    {
      en: "Improves crop performance before harvest for better output.",
      te: "పంట ఉత్పత్తి సమయం ముందు పనితీరును మెరుగుపరుస్తుంది.",
      hi: "कटाई से पहले फसल प्रदर्शन में सुधार करता है।",
    },
    {
      en: "A practical booster for farmers seeking better market yield.",
      te: "మెరుగైన మార్కెట్ దిగుబడి కోరుకునే రైతుల కోసం ఆచరణాత్మక బూస్టర్.",
      hi: "बेहतर बाजार उपज चाहने वाले किसानों के लिए एक व्यावहारिक बूस्टर।",
    },
    {
      en: "Use 1 liter per acre during the final growth phase.",
      te: "చివరి వృద్ధి దశలో ఒక ఎకరానికి 1 లీటర్ ఉపయోగించండి.",
      hi: "अंतिम वृद्धि चरण में प्रति एकड़ 1 लीटर उपयोग करें।",
    },
    {
      en: ["Higher harvest", "Better quality", "Reliable output"],
      te: ["ఎక్కువ harvest", "మెరుగైన నాణ్యత", "విశ్వసనీయ ఉత్పత్తి"],
      hi: ["उच्च कटाई", "बेहतर गुणवत्ता", "विश्वसनीय उत्पादन"],
    },
    false,
  ),
  buildProduct(
    "nutri-gold",
    "nutri-gold",
    "Nutrition",
    "/products/moove.png",
    {
      en: "Nutri Gold",
      te: "న్యూట్రి గోల్డ్",
      hi: "न्यूट्री गोल्ड",
    },
    {
      en: "Supports strong growth in high-demand crop cycles.",
      te: "అధిక డిమాండ్ గల పంట చక్రాల్లో బలమైన వృద్ధికి మద్దతు ఇస్తుంది.",
      hi: "उच्च मांग वाली फसल चक्रों में मजबूत वृद्धि का समर्थन करता है।",
    },
    {
      en: "A premium nutrient blend for modern farm management.",
      te: "ఆధునిక వ్యవసాయ నిర్వహణకు ప్రీమియం పోషక మిశ్రమం.",
      hi: "आधुनिक कृषि प्रबंधन के लिए एक प्रीमियम पोषक मिश्रण।",
    },
    {
      en: "Apply 2 liters per acre during the active season.",
      te: "సక్రియ సీజన్లో ఒక ఎకరానికి 2 లీటర్లు వర్తించండి.",
      hi: "सक्रिय मौसम में प्रति एकड़ 2 लीटर लागू करें।",
    },
    {
      en: ["Balanced nutrition", "Efficient uptake", "Premium quality"],
      te: ["సమతుల్య పోషణ", "సమర్థవంతమైన గ్రహణం", "ప్రీమియం నాణ్యత"],
      hi: ["संतुलित पोषण", "कुशल अवशोषण", "प्रीमियम गुणवत्ता"],
    },
    false,
  ),
];
