import { about } from "./about";
import { blogs } from "./blogs";
import { common } from "./common";
import { footer } from "./footer";
import { hero } from "./hero";
import { navbar } from "./navbar";
import { products } from "./products";

export const en = {
  hero,
  navbar,
  footer,
  about,
  products,
  blogs,
  common,
  contact: {
    heading: "Contact our team",
    subheading: "We are ready to help with crop planning, dealer onboarding, and product support.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    location: "Location",
    cropname: "Crop name",
    message: "Message",
    submit: "Send enquiry",
    successTitle: "Thanks for reaching out",
    successDescription: "We will contact you shortly.",
  },
  seo: {
    homeTitle: "GreenGrow Agriculture | Advanced agricultural solutions",
    homeDescription: "Discover modern crop nutrition and protection solutions for resilient farming.",
    aboutTitle: "About GreenGrow Agriculture",
    aboutDescription: "Learn about our mission, vision, and field-first approach.",
    productsTitle: "Products | GreenGrow Agriculture",
    productsDescription: "Explore high-performance nutrition and crop protection products.",
    blogsTitle: "Insights | GreenGrow Agriculture",
    blogsDescription: "Read expert articles on soil health, irrigation, and crop planning.",
    contactTitle: "Contact GreenGrow Agriculture",
    contactDescription: "Get in touch for product support, dealer onboarding, or expert advice.",
  },
};

export type EnglishDictionary = typeof en;
