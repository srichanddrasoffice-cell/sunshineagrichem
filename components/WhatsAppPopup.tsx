"use client";

import { useEffect, useState } from "react";
// Inline fallback WhatsAppForm to avoid import/module resolution errors
const WhatsAppForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Contact us on WhatsApp</h3>
      <p className="text-sm text-gray-600 mb-4">Enter your message and we'll get back to you.</p>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Message"
          className="w-full border rounded px-3 py-2"
          rows={3}
        />
        <button type="button" className="w-full bg-green-500 text-white rounded py-2">Send via WhatsApp</button>
      </form>
    </div>
  );
};
import { X } from "lucide-react";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 17000); // 17 seconds after load

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      {/* Popup Container */}
      <div className="relative w-full max-w-md animate-popup">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 bg-white text-gray-600 rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <X className="w-4 h-4" />
        </button>

        <WhatsAppForm />
      </div>
    </div>
  );
};

export default WhatsAppPopup;
