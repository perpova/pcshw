'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DEALERSHIP } from '@/data/dealership';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#15595A] text-white shadow-md border-b border-[#1F7778]">
      {/* Top Banner Bar - Hidden on Mobile Screens (hidden md:block) */}
      <div className="hidden md:block bg-[#172325] text-xs py-2 px-4 border-b border-[#1F7778]/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
            <span className="font-medium text-slate-200">
              {DEALERSHIP.name} — Matara
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${DEALERSHIP.phoneHotlineRaw}`}
              className="hover:text-[#D6A84F] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span>Hotline: {DEALERSHIP.phoneHotline}</span>
            </a>
            <span className="text-[#1F7778]">|</span>
            <a
              href={`tel:${DEALERSHIP.phoneLandlineRaw}`}
              className="hover:text-[#D6A84F] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Tel: {DEALERSHIP.phoneLandline}</span>
            </a>
            <span className="text-[#1F7778]">|</span>
            <a
              href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20want%20to%20inquire%20about%20a%20vehicle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5 text-emerald-400 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo - Without "CAR SALE" text */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-white rounded-xl shadow-md p-1 flex items-center justify-center shrink-0 border border-[#D6A84F]/40 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.svg"
                alt="Priyankara Lanka Motor Traders Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-tight">
                PRIYANKARA <span className="text-[#D6A84F]">LANKA</span>
              </span>
              <span className="text-[11px] font-semibold text-teal-100 tracking-wider uppercase">
                MOTOR TRADERS (PVT) LTD
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 font-semibold text-sm">
            <Link
              href="/"
              className="text-white hover:text-[#D6A84F] transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/cars"
              className="text-white hover:text-[#D6A84F] transition-colors py-2"
            >
              Vehicle Inventory
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#D6A84F] transition-colors py-2"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#D6A84F] transition-colors py-2"
            >
              Contact & Location
            </Link>
          </nav>

          {/* WhatsApp Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20would%20like%20to%20inquire%20about%20vehicle%20listings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D6A84F] hover:bg-[#A77A25] text-[#172325] hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#172325] group-hover:text-white" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#D6A84F] rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#172325] border-t border-[#1F7778] px-4 pt-4 pb-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white font-medium hover:text-[#D6A84F]"
          >
            Home
          </Link>
          <Link
            href="/cars"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white font-medium hover:text-[#D6A84F]"
          >
            Vehicle Inventory
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white font-medium hover:text-[#D6A84F]"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white font-medium hover:text-[#D6A84F]"
          >
            Contact & Location
          </Link>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href={`tel:${DEALERSHIP.phoneHotlineRaw}`}
              className="w-full bg-[#1F7778] text-white py-2.5 rounded-xl font-bold text-center flex items-center justify-center gap-2 text-xs"
            >
              <Phone className="w-4 h-4 text-[#D6A84F]" />
              <span>Hotline: {DEALERSHIP.phoneHotline}</span>
            </a>
            <a
              href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20would%20like%20to%20inquire.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp ({DEALERSHIP.whatsapp})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
