import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';
import JsonLd from '@/components/JsonLd';
import CarCard from '@/components/CarCard';
import { getVehicleById, getVehicles } from '@/lib/wordpress';
import { DEALERSHIP } from '@/data/dealership';
import {
  ShieldCheck,
  Check,
  MessageSquare,
  Phone,
  ArrowLeft,
  Car as CarIcon,
  MapPin,
  Calendar,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const car = await getVehicleById(id);

  if (!car) {
    return {
      title: 'Vehicle Not Found',
    };
  }

  const title = car.isSold
    ? `Sold: ${car.year} ${car.make} ${car.model} in Matara`
    : `${car.year} ${car.make} ${car.model} for Sale in Matara`;
  const description = car.isSold
    ? `${car.name} is marked sold by ${DEALERSHIP.altName} in Matara. View its specifications and contact the showroom about similar vehicles.`
    : `${car.name} for sale at ${DEALERSHIP.altName} in Matara. ${car.fuelType}, ${car.engineCc}cc ${car.transmission.toLowerCase()} vehicle. Price: ${car.priceDisplay}. Contact the showroom to arrange an inspection.`;
  const canonicalUrl = new URL(
    `/cars/${encodeURIComponent(car.id)}`,
    'https://priyankaracarsale.lk',
  ).toString();
  const primaryImage = car.images[0]
    ? new URL(car.images[0], 'https://priyankaracarsale.lk').toString()
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: primaryImage ? [{ url: primaryImage }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: primaryImage ? [primaryImage] : [],
    },
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [car, cars] = await Promise.all([getVehicleById(id), getVehicles()]);

  if (!car) {
    notFound();
  }

  const relatedCars = cars.filter((c) => c.id !== car.id).slice(0, 3);
  const priceText = car.isSold ? 'SOLD' : car.priceDisplay;
  const whatsappMsg = encodeURIComponent(
    `Hi Priyankara Car Sale, I am interested in buying the ${car.year} ${car.make} ${car.model} (${priceText}) listed on your website. Please share more details.`
  );

  return (
    <div className="bg-[#F2F5F5] py-8">
      {/* Schema.org JSON-LD Structured Data */}
      <JsonLd type="Vehicle" car={car} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#536466]">
          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 font-semibold hover:text-[#1F7778] transition-colors bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Inventory</span>
          </Link>

          <span className="hidden sm:inline-block font-mono text-[#536466]">
            Stock ID: {car.id.toUpperCase()}
          </span>
        </div>

        {/* Top Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F7778]">
                {car.make}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-[#536466]">
                {car.condition} Vehicle
              </span>
              {car.isSold && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white shadow-sm uppercase tracking-wide">
                    SOLD
                  </span>
                </>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#172325] tracking-tight">
              {car.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#536466] mt-1 flex items-center gap-2">
              <span>{car.year} Model</span> • <span>{car.fuelType}</span> • <span>{car.transmission}</span> • <span>{car.owner}</span>
            </p>
          </div>

          <div className="md:text-right bg-[#F2F5F5] md:bg-transparent p-4 md:p-0 rounded-xl">
            <span className="text-xs text-[#536466] font-medium block">
              {car.isSold ? 'Vehicle Status' : 'Asking Price'}
            </span>
            {car.isSold ? (
              <span className="text-2xl sm:text-3xl font-extrabold text-red-600 uppercase tracking-wider block">
                SOLD
              </span>
            ) : (
              <span className="text-2xl sm:text-3xl font-extrabold text-[#D6A84F]">
                {car.priceDisplay}
              </span>
            )}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Gallery Component */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <ImageGallery images={car.images} carName={car.name} isSold={car.isSold} />
            </div>

            {/* Description Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-[#172325] border-b border-slate-100 pb-3 flex items-center gap-2">
                <CarIcon className="w-5 h-5 text-[#1F7778]" />
                <span>Vehicle Overview & Description</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#172325] leading-relaxed whitespace-pre-line font-normal">
                {car.description}
              </p>
            </div>

            {/* Key Features List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-[#172325] border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1F7778]" />
                <span>Features & Equipment</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#172325] bg-[#F2F5F5] p-2.5 rounded-xl border border-slate-100">
                    <Check className="w-4 h-4 text-[#1F7778] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Direct Inquiry Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Inquiry Action Box */}
            <div className="bg-[#172325] text-white p-6 rounded-2xl shadow-xl space-y-5 border border-[#1F7778]">
              <div>
                <span className="text-xs font-bold text-[#D6A84F] uppercase tracking-wider">
                  Showroom Inquiries
                </span>
                <h3 className="text-lg font-extrabold mt-1 text-white">
                  Interested in this vehicle?
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Contact Priyankara Car Sale directly in Matara for price negotiation, vehicle inspection, or test drives.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-4 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  <span>WhatsApp Inquiry ({DEALERSHIP.whatsapp})</span>
                </a>
                <a
                  href={`tel:${DEALERSHIP.phoneHotlineRaw}`}
                  className="w-full bg-[#1F7778] hover:bg-[#15595A] text-white py-3.5 px-4 rounded-xl font-bold text-xs border border-[#1F7778] transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-[#D6A84F]" />
                  <span>Call Hotline: {DEALERSHIP.phoneHotline}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-teal-200">
                  <MapPin className="w-3.5 h-3.5 text-[#D6A84F] shrink-0" />
                  <span>{DEALERSHIP.address.fullFormatted}</span>
                </div>
                <div className="flex justify-between pt-1 text-[11px] text-slate-400">
                  <span>Tel: {DEALERSHIP.phoneLandline}</span>
                  <span>Opening: {DEALERSHIP.openingHours}</span>
                </div>
              </div>
            </div>

            {/* Complete Specs Table */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-extrabold text-[#172325] border-b border-slate-100 pb-3">
                Technical Specifications
              </h3>
              <div className="divide-y divide-slate-100 text-xs text-[#172325]">
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Make / Brand</span>
                  <span className="font-bold">{car.make}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Model</span>
                  <span className="font-bold">{car.model}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Year of Manufacture</span>
                  <span className="font-bold">{car.year}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Condition</span>
                  <span className="font-bold">{car.condition}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Ownership</span>
                  <span className="font-bold">{car.owner}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Body Type</span>
                  <span className="font-bold">{car.bodyType}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Transmission</span>
                  <span className="font-bold">{car.transmission}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Fuel Type</span>
                  <span className="font-bold">{car.fuelType}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium">Engine Capacity</span>
                  <span className="font-bold">{car.engineCc} cc</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#536466] font-medium"> Mileage</span>
                  <span className="font-bold">
                    {car.mileage > 0 ? `${car.mileage.toLocaleString()} km` : '0 km (Brand New)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Inventory */}
        {relatedCars.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#172325] mb-6">
              Similar Vehicles You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
