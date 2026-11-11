import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DEALERSHIP } from '@/data/dealership';
import { Search, Phone, ArrowRight, Star, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-[#172325]/90 backdrop-blur-md text-white overflow-hidden py-12 md:py-0 md:min-h-[calc(100vh-116px)] border-b border-[#1F7778] flex flex-col justify-center">
      {/* Background Video & Animated Ambient Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Loop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Priyankara-Lanka.jpg"
          className="w-full h-full object-cover opacity-30 scale-105 filter blur-[0.5px]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-on-a-road-at-night-41480-large.mp4" type="video/mp4" />
        </video>

        {/* Semi-transparent Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#172325] via-[#172325]/80 to-[#172325]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1F7778]/40 via-transparent to-[#172325]/90" />

        {/* Ambient Animated Light Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1F7778]/35 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D6A84F]/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Text Column */}
          <div className="md:col-span-7 space-y-5 lg:space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#15595A]/90 border border-[#1F7778] text-teal-100 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#D6A84F] fill-[#D6A84F]" />
              <span>Matara's Trusted Japanese Vehicle Dealer</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
              Priyankara Lanka <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A84F] via-[#E5BF6B] to-teal-200">
                Motor Traders
              </span>
            </h1>

            <p className="text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed mx-auto md:mx-0 font-normal drop-shadow-xs">
              Welcome to <strong>{DEALERSHIP.altName}</strong> in Matara. Explore our hand-picked inventory of Japanese hatchbacks, hybrids, and brand-new SUVs like Suzuki Alto, WagonR, Toyota Aqua, and Toyota Raize with verified service records.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-teal-200 font-medium">
              <MapPin className="w-4 h-4 text-[#D6A84F] shrink-0" />
              <span>{DEALERSHIP.address.fullFormatted}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <Link
                href="/cars"
                className="w-full sm:w-auto bg-[#1F7778] hover:bg-[#15595A] text-white px-7 py-3.5 rounded-xl font-bold text-xs shadow-xl hover:shadow-teal-700/30 transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Browse Inventory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${DEALERSHIP.phoneHotlineRaw}`}
                className="w-full sm:w-auto bg-[#15595A]/80 hover:bg-[#1F7778] text-white border border-[#1F7778] px-6 py-3.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 backdrop-blur-xs"
              >
                <Phone className="w-4 h-4 text-[#D6A84F]" />
                <span>Call Hotline: {DEALERSHIP.phoneHotline}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/60 text-center md:text-left">
              <div>
                <span className="block text-xl lg:text-2xl font-extrabold text-white">100%</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Inspected Cars</span>
              </div>
              <div>
                <span className="block text-xl lg:text-2xl font-extrabold text-[#D6A84F]">7+</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Ready in Stock</span>
              </div>
              <div>
                <span className="block text-xl lg:text-2xl font-extrabold text-white">Best</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Negotiable Rates</span>
              </div>
            </div>
          </div>

          {/* Right Visual Highlight Box */}
          <div className="md:col-span-5 relative">
            <div className="relative bg-gradient-to-b from-[#15595A]/90 to-[#172325]/90 border border-[#1F7778] p-5 lg:p-6 rounded-3xl shadow-2xl space-y-4 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-md p-0.5 flex items-center justify-center shadow-xs">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-xs text-white">Featured Showroom Stock</span>
                </div>
                <span className="text-[11px] bg-[#D6A84F]/20 text-[#D6A84F] font-extrabold px-2.5 py-0.5 rounded-full border border-[#D6A84F]/30">
                  Brand New 2026
                </span>
              </div>

              <div className="relative h-44 lg:h-48 w-full rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src="/cars/car5/image_1.jpeg"
                  alt="Toyota Raize Z Grade 2026 at Priyankara Lanka Motor Traders Matara"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-white">Toyota Raize Z Grade 2026 Hybrid</h3>
                <p className="text-xs text-slate-300">360 Camera • Black Top • 1200cc • Unregistered</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#D6A84F]">Contact for Price</span>
                  <Link
                    href="/cars/car5"
                    className="text-xs font-bold text-[#172325] bg-[#D6A84F] hover:bg-[#A77A25] hover:text-white px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
                  >
                    View Car
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
