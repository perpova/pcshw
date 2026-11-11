'use client';

import React, { useState, useMemo } from 'react';
import CarCard from '@/components/CarCard';
import CarFilter from '@/components/CarFilter';
import { SearchX, Sparkles } from 'lucide-react';
import type { Car } from '@/types/car';

export default function CarsCatalogue({ cars }: { cars: Car[] }) {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Heading */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F7778] mb-1">
          <Sparkles className="w-4 h-4 text-[#D6A84F]" />
          <span>Vehicle Showroom Matara</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172325] tracking-tight">
          Vehicle Inventory for Sale
        </h1>
        <p className="text-xs sm:text-sm text-[#536466] mt-2 max-w-2xl">
          Browse our complete stock of Japanese cars, hatchbacks, hybrids, and compact SUVs available at Priyankara Lanka Motor Traders (Priyankara Car Sale) in Matara.
        </p>
      </div>

      {/* Filter Component */}
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
          <strong className="text-[#172325]">{cars.length}</strong> vehicles
        </span>
      </div>

      {/* Inventory Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12 shadow-sm">
          <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-[#172325] mb-2">No Vehicles Found</h3>
          <p className="text-xs text-[#536466] mb-6">
            No listings match your filter criteria. Try resetting search filters or checking back soon.
          </p>
          <button
            onClick={resetFilters}
            className="bg-[#1F7778] text-white font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-[#15595A] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
