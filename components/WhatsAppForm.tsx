"use client";

import { useState } from "react";
import { User, Phone, Stethoscope, MessageSquare, Send } from "lucide-react";

const WhatsAppForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");

  const WHATSAPP_NUMBER = "919573499789";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
New Appointment Request 🦷

Name: ${name}
Phone: ${phone}
Treatment: ${treatment}
Message: ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const inputClass = `
    w-full px-4 py-3 pl-11
    bg-white
    border-2 border-gray-400
    rounded-lg
    text-gray-900 font-medium
    placeholder:text-gray-600
    focus:outline-none focus:border-[#1960A7]
    transition-colors duration-200
  `;

  return (
    <div className="bg-gradient-to-br from-[#1960A7] to-[#D5101A] p-[2px] rounded-2xl shadow-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 sm:p-8"
      >

        {/* HEADING */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-xl font-black text-[#1960A7] uppercase tracking-wide">
            Book Free Consultation 
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Fill in your details and we'll contact you shortly
          </p>
        </div>

        <div className="space-y-4">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1960A7]" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1960A7]" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Treatment */}
          <div className="relative">
            <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1960A7]" />
            <select
              required
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" disabled>Select Treatment</option>
              <option>General Checkup</option>
              <option>Teeth Cleaning</option>
              <option>Root Canal</option>
              <option>Braces / Aligners</option>
              <option>Dental Implants</option>
              <option>Teeth Whitening</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#1960A7]" />
            <textarea
              placeholder="Message (optional)"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1960A7] hover:bg-[#D5101A]
                       text-white py-3.5 rounded-lg
                       font-bold text-base tracking-wide
                       active:scale-95
                       transition-all duration-300
                       flex items-center justify-center gap-2
                       shadow-lg"
          >
            <Send className="w-4 h-4" />
            Send on WhatsApp
          </button>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400">
            🔒 Your information is safe with us
          </p>

        </div>
      </form>
    </div>
  );
};

export default WhatsAppForm;