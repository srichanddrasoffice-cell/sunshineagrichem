import { about } from "./about";
import { blogs } from "./blogs";
import { common } from "./common";
import { footer } from "./footer";
import { hero } from "./hero";
import { navbar } from "./navbar";
import { products } from "./products";

export const hi = {
  hero,
  navbar,
  footer,
  about,
  products,
  blogs,
  common,
  contact: {
    heading: "हमारी टीम से संपर्क करें",
    subheading: "हम फसल योजना, डीलर ऑनबोर्डिंग और उत्पाद समर्थन के लिए तैयार हैं।",
    name: "नाम",
    phone: "फोन",
    email: "ईमेल",
    location: "स्थान",
    cropname: "फसल का नाम",
    message: "संदेश",
    submit: "पूछताछ भेजें",
    successTitle: "संपर्क करने के लिए धन्यवाद",
    successDescription: "हम आपको जल्द ही संपर्क करेंगे।",
  },
  seo: {
    homeTitle: "GreenGrow Agriculture | उन्नत कृषि समाधान",
    homeDescription: "लचीली खेती के लिए आधुनिक फसल पोषण और सुरक्षा समाधान खोजें।",
    aboutTitle: "GreenGrow Agriculture के बारे में",
    aboutDescription: "हमारे मिशन, दृष्टि और क्षेत्र-आधारित दृष्टिकोण के बारे में जानें।",
    productsTitle: "उत्पाद | GreenGrow Agriculture",
    productsDescription: "उच्च-प्रदर्शन पोषण और फसल सुरक्षा उत्पादों का अन्वेषण करें।",
    blogsTitle: "अंतर्दृष्टि | GreenGrow Agriculture",
    blogsDescription: "मिट्टी स्वास्थ्य, सिंचाई और फसल योजना पर विशेषज्ञ लेख पढ़ें।",
    contactTitle: "GreenGrow Agriculture से संपर्क करें",
    contactDescription: "उत्पाद समर्थन, डीलर ऑनबोर्डिंग या विशेषज्ञ सलाह के लिए हमसे संपर्क करें।",
  },
};

export type HindiDictionary = typeof hi;
