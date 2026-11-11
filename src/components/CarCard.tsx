import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import { DEALERSHIP } from '@/data/dealership';
import { Fuel, Gauge, Calendar, MessageSquare, ArrowRight, ShieldCheck, User } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const primaryImage = car.images[0] || '/cars/placeholder.jpg';
  const priceText = car.isSold ? 'SOLD' : car.priceDisplay;
  const whatsappMsg = encodeURIComponent(
    `Hi Priyankara Car Sale, I am interested in the ${car.year} ${car.make} ${car.model} (${priceText}) listed on your website.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image & Badges */}
      <div className="relative h-56 w-full bg-[#F2F5F5] overflow-hidden">
        <Image
          src={primaryImage}
          alt={`${car.name} for sale at Priyankara Lanka Motor Traders Matara`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Angled Red SOLD Tag */}
        {car.isSold && (
          <div className="absolute top-0 right-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
            <div className="absolute top-6 -right-9 w-36 bg-red-600 text-white font-black text-xs tracking-wider uppercase text-center py-1 shadow-lg rotate-45 border-y border-red-400/50">
              SOLD
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          {car.isSold && (
            <span className="px-3 py-1 rounded-full text-xs font-black bg-red-600 text-white shadow-sm uppercase tracking-wide">
              SOLD
            </span>
          )}
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
              car.condition === 'Brand New'
                ? 'bg-[#1F7778] text-white'
                : 'bg-[#172325]/90 text-white backdrop-blur-md'
            }`}
          >
            {car.condition}
          </span>
          {car.fuelType === 'Hybrid' && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D6A84F] text-[#172325] shadow-sm">
              Hybrid
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-[#172325]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 z-10">
          <Calendar className="w-3.5 h-3.5 text-[#D6A84F]" />
          <span>{car.year}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F7778]">
              {car.make}
            </span>
            <h3 className="text-base font-extrabold text-[#172325] group-hover:text-[#1F7778] transition-colors line-clamp-1">
              <Link href={`/cars/${car.id}`}>{car.name}</Link>
            </h3>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#536466] bg-[#F2F5F5] p-3 rounded-xl mb-4">
            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-[#1F7778]" />
              <span>{car.fuelType} ({car.engineCc}cc)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-[#1F7778]" />
              <span>{car.mileage > 0 ? `${car.mileage.toLocaleString()} km` : '0 km'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#1F7778]" />
              <span>{car.owner}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F7778]" />
              <span>Verified</span>
            </div>
          </div>
        </div>

        {/* Footer & Price */}
        <div>
          <div className="flex items-baseline justify-between pt-2 pb-4 border-t border-slate-100">
            <span className="text-xs text-[#536466] font-medium">
              {car.isSold ? 'Status' : 'Asking Price'}
            </span>
            {car.isSold ? (
              <span className="text-base font-extrabold text-red-600 uppercase tracking-wider">
                SOLD
              </span>
            ) : (
              <span className="text-base font-extrabold text-[#D6A84F]">
               {car.priceDisplay}
              </span>
            )}
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/cars/${car.id}`}
              className="w-full bg-[#1F7778] hover:bg-[#15595A] text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1 text-center shadow-sm"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1 text-center shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
