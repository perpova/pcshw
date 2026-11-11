import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DEALERSHIP } from '@/data/dealership';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#172325] text-slate-300 border-t border-[#1F7778] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 border border-[#D6A84F]/40 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Priyankara Lanka Motor Traders Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">
                  PRIYANKARA <span className="text-[#D6A84F]">LANKA</span>
                </span>
                <span className="text-[10px] text-teal-200 uppercase font-semibold">
                  Motor Traders (Pvt) Ltd
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>{DEALERSHIP.legalName}</strong> is Matara's leading dealership for high-grade Japanese hatchbacks, hybrids, and SUVs in Sri Lanka.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-teal-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
              <span>Verified Service Records & Pre-Inspection</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-[#D6A84F]">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D6A84F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-[#D6A84F] transition-colors">
                  All Vehicles Inventory
                </Link>
              </li>
              <li>
                <Link href="/cars?fuelType=Hybrid" className="hover:text-[#D6A84F] transition-colors">
                  Hybrid Vehicles for Sale
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D6A84F] transition-colors">
                  About Priyankara Car Sale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D6A84F] transition-colors">
                  Contact & Showroom Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Stock Models */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-[#D6A84F]">
              Featured Models
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7778]" />
                <Link href="/cars?make=Suzuki" className="hover:text-[#D6A84F] transition-colors">
                  Suzuki Alto Japan (2015 / 2016)
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7778]" />
                <Link href="/cars?make=Suzuki" className="hover:text-[#D6A84F] transition-colors">
                  Suzuki WagonR FX Safety Hybrid
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7778]" />
                <Link href="/cars?make=Suzuki" className="hover:text-[#D6A84F] transition-colors">
                  Suzuki WagonR Stingray 2018
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7778]" />
                <Link href="/cars?make=Toyota" className="hover:text-[#D6A84F] transition-colors">
                  Toyota Aqua S Grade Hybrid
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7778]" />
                <Link href="/cars?make=Toyota" className="hover:text-[#D6A84F] transition-colors">
                  Toyota Raize Z Grade Brand New
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom Info Column */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-[#D6A84F]">
              Showroom Info
            </h3>
            {/* Address */}
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#D6A84F] shrink-0 mt-0.5" />
              <span>60, Akuressa Road, Isadeen Town, Matara</span>
            </div>

            {/* Hotline */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#D6A84F] shrink-0" />
              <a href={`tel:${DEALERSHIP.phoneHotlineRaw}`} className="hover:text-white font-semibold">
                Hotline: {DEALERSHIP.phoneHotline}
              </a>
            </div>

            {/* Landline - Icon color updated to Warm Gold #D6A84F */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#D6A84F] shrink-0" />
              <a href={`tel:${DEALERSHIP.phoneLandlineRaw}`} className="hover:text-white">
                Landline: {DEALERSHIP.phoneLandline}
              </a>
            </div>

            {/* Email with Bot Protection CSS Trick (bidi-override rtl) */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#D6A84F] shrink-0" />
              <a href={`mailto:${DEALERSHIP.email}`} className="hover:text-white font-medium" title="Contact Email">
                <span className="[unicode-bidi:bidi-override] [direction:rtl] inline-block">
                  kl.elasracaraknayirp@ofni
                </span>
              </a>
            </div>

            {/* Operating Hours */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-[#D6A84F] shrink-0" />
              <span>Mo-Su 08:30-18:30</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Developer Credit - Centered on Mobile */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-slate-500 gap-3">
          <p className="w-full sm:w-auto text-center sm:text-left">
            &copy; {currentYear} {DEALERSHIP.legalName}. All rights reserved.
          </p>
          <p className="w-full sm:w-auto text-center sm:text-right">
            Web Development by{' '}
            <a
              href="https://perpova.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D6A84F] hover:underline font-bold transition-colors"
            >
              Perpova Developers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
