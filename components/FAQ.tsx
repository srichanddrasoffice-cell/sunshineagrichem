"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Who is the best dentist in Jubilee Hills, Hyderabad?",
    a: "If you are looking for an experienced and trusted dentist in Kukatpally, Hyderabad, our clinic provides advanced dental treatments with modern equipment and patient-friendly care."
  },
  {
    q: "How much does root canal treatment cost in Hyderabad?",
    a: "The cost of root canal treatment in Hyderabad depends on the tooth condition and complexity. We offer affordable and transparent pricing for RCT procedures."
  },
  {
    q: "Is dental treatment painful?",
    a: "Most modern dental treatments are painless. We use advanced anesthesia techniques and latest dental technology to ensure comfortable and stress-free treatment."
  },
  {
    q: "How often should I visit a dentist for a check-up?",
    a: "Dental experts recommend visiting a dentist every 6 months for a routine dental check-up and professional teeth cleaning to maintain oral health."
  },
  {
    q: "Do you provide emergency dental treatment in Hyderabad?",
    a: "Yes, we offer emergency dental care for severe tooth pain, swelling, broken teeth, and dental injuries. Call us immediately for urgent assistance."
  },
  {
    q: "Do you offer cosmetic dentistry services?",
    a: "Yes, K denatl will provide cosmetic dental treatments including teeth whitening, smile designing, veneers, and dental crowns to enhance your smile."
  },
  {
    q: "Is teeth whitening safe?",
    a: "Professional teeth whitening performed by a qualified dentist is safe, effective, and provides long-lasting bright results."
  },
  {
    q: "Do you provide pediatric dental care for kids?",
    a: "Yes, we offer specialized pediatric dental care for children with a gentle and friendly approach to ensure a comfortable experience."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D5101A] text-center mb-6 sm:mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ ACCORDION */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left hover:bg-gray-50 transition-colors gap-3"
              >
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                  {item.q}
                </h4>

                {/* ICON */}
                <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#1960A7] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {openIndex === index
                    ? <Minus className="w-4 h-4" />
                    : <Plus className="w-4 h-4" />
                  }
                </div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 pb-4 pt-0">
                      <div className="border-t border-gray-100 pt-3">
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;