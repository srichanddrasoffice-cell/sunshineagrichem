import { about } from "./about";
import { blogs } from "./blogs";
import { common } from "./common";
import { footer } from "./footer";
import { hero } from "./hero";
import { navbar } from "./navbar";
import { products } from "./products";

export const te = {
  hero,
  navbar,
  footer,
  about,
  products,
  blogs,
  common,
  contact: {
    heading: "మా బృందాన్ని సంప్రదించండి",
    subheading: "పంట ప్రణాళిక, డీలర్ ఆన్‌బోర్డింగ్ మరియు ఉత్పత్తి మద్దతు కోసం మేము సిద్ధంగా ఉన్నాం.",
    name: "పేరు",
    phone: "ఫోన్",
    email: "ఇమెయిల్",
    location: "స్థానం",
    cropname: "పంట పేరు",
    message: "సందేశం",
    submit: "విచారణ పంపండి",
    successTitle: "మమ్మల్ని సంప్రదించినందుకు ధన్యవాదాలు",
    successDescription: "మేము కొద్ది సమయం తర్వాత మీతో సంప్రదిస్తాము.",
  },
  seo: {
    homeTitle: "గ్రీన్గ్రో వ్యవసాయం | ఆధునిక వ్యవసాయ పరిష్కారాలు",
    homeDescription: "స్థిరమైన వ్యవసాయానికి ఆధునిక పంట పోషణ మరియు రక్షణ పరిష్కారాలను కనుగొనండి.",
    aboutTitle: "గ్రీన్గ్రో వ్యవసాయంతో మేము",
    aboutDescription: "మా మిషన్, దృష్టి మరియు క్షేత్ర-ఆధారిత విధానాన్ని తెలుసుకోండి.",
    productsTitle: "ఉత్పత్తులు | గ్రీన్గ్రో వ్యవసాయం",
    productsDescription: "అధిక-పనితీరు గల పోషణ మరియు పంట రక్షణ ఉత్పత్తులను అన్వేషించండి.",
    blogsTitle: "ఇంటెలిజెన్స్ | గ్రీన్గ్రో వ్యవసాయం",
    blogsDescription: "మట్టి ఆరోగ్యం, సిచ్చన మరియు పంట ప్రణాళికపై నిపుణుల కథలను చదవండి.",
    contactTitle: "గ్రీన్గ్రో వ్యవసాయంతో సంప్రదించండి",
    contactDescription: "ఉత్పత్తి మద్దతు, డీలర్ ఆన్‌بోర్డింగ్ లేదా నిపుణుల సలహా కోసం మమ్మల్ని సంప్రదించండి.",
  },
};

export type TeluguDictionary = typeof te;
