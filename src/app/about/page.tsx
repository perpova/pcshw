import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBadges from '@/components/TrustBadges';
import { DEALERSHIP } from '@/data/dealership';
import { Award, CheckCircle2, MessageSquare, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Priyankara Lanka Motor Traders (Pvt) Ltd (Priyankara Car Sale), located at 60, Akuressa Road, Isadeen Town, Matara 81000, Sri Lanka.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 py-10 bg-[#F2F5F5]">
      {/* Header Banner */}
      <div className="bg-[#172325] text-white py-16 border-b border-[#1F7778]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-[#D6A84F] uppercase tracking-wider bg-[#15595A] px-3.5 py-1 rounded-full border border-[#1F7778]">
            About Our Showroom
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
            Priyankara Lanka Motor Traders (Pvt) Ltd
          </h1>
          <p className="text-slate-300 text-xs sm:text-base mt-3 leading-relaxed">
            Known as <strong>{DEALERSHIP.altName}</strong> in Matara, we are dedicated to connecting Sri Lankan drivers with high-grade, reliable Japanese hatchbacks, hybrids, and SUVs with verified service histories.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-teal-200">
            <MapPin className="w-4 h-4 text-[#D6A84F]" />
            <span>{DEALERSHIP.address.fullFormatted}</span>
          </div>
        </div>
      </div>

      {/* Main Content & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172325] leading-tight">
              Your Premier Destination for Trusted Vehicle Sales in Matara
            </h2>
            <p className="text-xs sm:text-sm text-[#536466] leading-relaxed font-normal">
              At <strong>{DEALERSHIP.name}</strong>, we pride ourselves on transparency, customer satisfaction, and exceptional value. Whether you are looking for a fuel-efficient daily city car like the Suzuki Alto Japan or Suzuki WagonR, or a hybrid hatchback like the Toyota Aqua, we offer hand-picked cars with genuine service documentation.
            </p>
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#172325]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F7778] shrink-0" />
                <span>100% Genuine  Mileage & Verified Inspection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F7778] shrink-0" />
                <span>Fair Market Negotiable Rates for Buyers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F7778] shrink-0" />
                <span>Complete Service Records Provided Prior to Handover</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#172325] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-[#1F7778]">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Award className="w-8 h-8 text-[#D6A84F]" />
                <div>
                  <h3 className="font-extrabold text-base text-white">Why Choose Priyankara Car Sale?</h3>
                  <span className="text-xs text-slate-400">Quality Assured Matara Dealership</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe buying a car should be a transparent and rewarding experience. Every vehicle in our Matara yard undergoes detailed technical evaluation, and all pricing is open for fair negotiation.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cars"
                  className="w-full bg-[#1F7778] hover:bg-[#15595A] text-white font-bold py-3 px-4 rounded-xl text-center text-xs transition-colors"
                >
                  View Vehicle Stock
                </Link>
                <a
                  href={`https://wa.me/${DEALERSHIP.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-center text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk to Sales ({DEALERSHIP.whatsapp})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustBadges />
    </div>
  );
}
