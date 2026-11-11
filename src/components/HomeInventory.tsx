'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CarCard from '@/components/CarCard';
import CarFilter from '@/components/CarFilter';
import { DEALERSHIP } from '@/data/dealership';
import type { Car } from '@/types/car';
import { ArrowRight, Sparkles, MapPin, Phone, MessageSquare, SearchX } from 'lucide-react';

export default function HomeInventory({ cars }: { cars: Car[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(query);
        const matchesMake = car.make.toLowerCase().includes(query);
        const matchesModel = car.model.toLowerCase().includes(query);
        const matchesYear = String(car.year).includes(query);
        if (!matchesName && !matchesMake && !matchesModel && !matchesYear) {
          return false;
        }
      }

      if (selectedMake && car.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }

      if (selectedFuel && car.fuelType.toLowerCase() !== selectedFuel.toLowerCase()) {
        return false;
      }

      if (selectedCondition && car.condition.toLowerCase() !== selectedCondition.toLowerCase()) {
        return false;
      }

      return true;
    });
  }, [cars, searchQuery, selectedMake, selectedFuel, selectedCondition]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMake('');
    setSelectedFuel('');
    setSelectedCondition('');
  };

  return (
    <>
      {/* Open Filter Inventory Section - Always Open & Ready on Page Load */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4" id="inventory-filter">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[#1F7778] font-bold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-[#D6A84F]" />
            <span>Search & Filter Showroom Stock</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172325] tracking-tight">
            Explore Available Vehicles
          </h2>
          <p className="text-xs sm:text-sm text-[#536466] mt-1">
            Filter Japanese cars, hatchbacks, and hybrids by make, fuel type, or condition.
          </p>
        </div>

        {/* Filter Bar Component - Rendered Open Directly */}
        <CarFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          selectedFuel={selectedFuel}
          setSelectedFuel={setSelectedFuel}
          selectedCondition={selectedCondition}
          setSelectedCondition={setSelectedCondition}
          resetFilters={resetFilters}
        />

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-[#536466]">
          <span>
            Showing <strong className="text-[#172325]">{filteredCars.length}</strong> of{' '}
            <strong className="text-[#172325]">{cars.length}</strong> vehicles available
          </span>
          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 text-[#1F7778] hover:text-[#15595A] font-bold text-xs"
          >
            <span>Full Inventory View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Vehicle Cards Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto my-8 shadow-sm">
            <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#172325] mb-2">No Vehicles Found</h3>
            <p className="text-xs text-[#536466] mb-6">
              No listings match your search criteria. Try resetting filters.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#1F7778] text-white font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-[#15595A] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* Dealership Showroom Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-br from-[#15595A] to-[#172325] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-[#1F7778]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#D6A84F] text-[#172325] px-3 py-1 rounded-full">
                Visit Our Matara Showroom
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Looking for a Specific Model or Vehicle Inspection?
              </h2>
              <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
                At <strong>{DEALERSHIP.name}</strong> ({DEALERSHIP.altName}), our team in Matara is dedicated to providing transparent service records, fair negotiable rates, and trusted vehicle quality.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-teal-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D6A84F]" />
                  <span>{DEALERSHIP.address.fullFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D6A84F]" />
                  <span>Hotline: {DEALERSHIP.phoneHotline} | Tel: {DEALERSHIP.phoneLandline}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20am%20looking%20for%20a%20car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2 text-xs"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
              <Link
                href="/contact"
                className="w-full bg-[#D6A84F] hover:bg-[#A77A25] hover:text-white text-[#172325] font-bold py-3.5 px-6 rounded-xl text-center transition-colors text-xs"
              >
                View Contact & Location Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
