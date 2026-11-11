import React from 'react';
import type { Metadata } from 'next';
import { DEALERSHIP } from '@/data/dealership';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Priyankara Lanka Motor Traders (Pvt) Ltd (Priyankara Car Sale) at 60, Akuressa Road, Isadeen Town, Matara 81000. Hotline: 077 78 78 201, Tel: 041 22 32 282.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-[#F2F5F5] space-y-12">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#1F7778] uppercase tracking-wider bg-[#DCEEEE] px-3.5 py-1 rounded-full border border-[#1F7778]/30">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172325] mt-3 tracking-tight">
            Contact Priyankara Car Sale Matara
          </h1>
          <p className="text-xs sm:text-sm text-[#536466] mt-2">
            Have a question about a car listing or want to schedule a test drive? Visit or contact <strong>{DEALERSHIP.legalName}</strong> today.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#DCEEEE] text-[#1F7778] rounded-xl shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#172325] text-xs uppercase mb-1">Showroom Address</h3>
              <p className="text-xs text-[#536466] leading-relaxed">
                {DEALERSHIP.address.fullFormatted}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#DCEEEE] text-[#1F7778] rounded-xl shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#172325] text-xs uppercase mb-1">Telephone Contacts</h3>
              <a href={`tel:${DEALERSHIP.phoneHotlineRaw}`} className="text-xs text-[#1F7778] hover:underline font-bold block">
                Hotline: {DEALERSHIP.phoneHotline}
              </a>
              <a href={`tel:${DEALERSHIP.phoneLandlineRaw}`} className="text-xs text-[#536466] hover:underline font-semibold block mt-0.5">
                Landline: {DEALERSHIP.phoneLandline}
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#172325] text-xs uppercase mb-1">WhatsApp Instant</h3>
              <a
                href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 hover:underline font-bold block"
              >
                {DEALERSHIP.whatsapp}
              </a>
              <span className="text-[11px] text-[#536466]">Fast WhatsApp Response</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#DCEEEE] text-[#1F7778] rounded-xl shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#172325] text-xs uppercase mb-1">Opening Hours</h3>
              <p className="text-xs text-[#536466]">{DEALERSHIP.openingHours}</p>
            </div>
          </div>
        </div>

        {/* Form and Map Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-[#172325]">Send Us a Direct Message</h2>
              <p className="text-xs text-[#536466] mt-1">
                Fill out the form below and our sales representative in Matara will get back to you shortly.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#172325] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#1F7778] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172325] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="077 123 4567"
                    className="w-full px-4 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#1F7778] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172325] mb-1">Interested Vehicle / Query</label>
                <input
                  type="text"
                  placeholder="e.g. Suzuki Alto Japan 2016 or Suzuki WagonR Hybrid"
                  className="w-full px-4 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#1F7778] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172325] mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-4 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#1F7778] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F7778] hover:bg-[#15595A] text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          </div>

          {/* Business Info Sidebar */}
          <div className="lg:col-span-5 bg-[#172325] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6 border border-[#1F7778]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#D6A84F] font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Showroom Headquarters</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{DEALERSHIP.legalName}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Operating under the widely recognized name <strong>{DEALERSHIP.altName}</strong>, we welcome customers to visit our Matara showroom for physical vehicle inspection, test drives, and document verification.
              </p>
            </div>

            <div className="bg-[#15595A] p-5 rounded-2xl border border-[#1F7778] space-y-3 text-xs text-slate-200">
              <div className="font-bold text-white mb-1 border-b border-teal-700/60 pb-2">
                Official Contact Directory
              </div>
              <div className="flex justify-between py-1 border-b border-teal-700/60">
                <span>Hotline:</span>
                <span className="font-bold text-[#D6A84F]">{DEALERSHIP.phoneHotline}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-teal-700/60">
                <span>Landline:</span>
                <span className="font-bold text-white">{DEALERSHIP.phoneLandline}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-teal-700/60">
                <span>WhatsApp:</span>
                <span className="font-bold text-emerald-300">{DEALERSHIP.whatsapp}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Email:</span>
                <span className="font-bold text-white">{DEALERSHIP.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
