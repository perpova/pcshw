'use client';

import React from 'react';
import { DEALERSHIP } from '@/data/dealership';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20would%20like%20to%20inquire%20about%20a%20car.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact Priyankara Car Sale on WhatsApp"
    >
      <MessageSquare className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 font-bold text-xs transition-all duration-300">
        Chat with Us
      </span>
    </a>
  );
}
