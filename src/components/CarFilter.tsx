'use client';

import React from 'react';
import { Search, RotateCcw, ChevronDown, SlidersHorizontal, Check } from 'lucide-react';

interface CarFilterProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedMake: string;
  setSelectedMake: (val: string) => void;
  selectedFuel: string;
  setSelectedFuel: (val: string) => void;
  selectedCondition: string;
  setSelectedCondition: (val: string) => void;
  resetFilters: () => void;
}

export default function CarFilter({
  searchQuery,
  setSearchQuery,
  selectedMake,
  setSelectedMake,
  selectedFuel,
  setSelectedFuel,
  selectedCondition,
  setSelectedCondition,
  resetFilters,
}: CarFilterProps) {
  const activeFiltersCount =
    (searchQuery.trim() ? 1 : 0) +
    (selectedMake ? 1 : 0) +
    (selectedFuel ? 1 : 0) +
    (selectedCondition ? 1 : 0);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow mb-8">
      {/* Filter Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#DCEEEE] flex items-center justify-center text-[#1F7778]">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-[#172325] flex items-center gap-2">
              <span>Filter Inventory</span>
              {activeFiltersCount > 0 && (
                <span className="bg-[#1F7778] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {activeFiltersCount} Active
                </span>
              )}
            </h2>
            <p className="text-[11px] text-[#536466]">Search and filter vehicles by brand, fuel, or condition</p>
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-xs text-[#1F7778] hover:text-[#15595A] bg-[#DCEEEE]/70 hover:bg-[#DCEEEE] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition-all self-start sm:self-auto border border-[#1F7778]/20"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* Filter Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search Bar Input */}
        <div className="relative group">
          <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
            searchQuery.trim() ? 'text-[#1F7778]' : 'text-[#536466] group-focus-within:text-[#1F7778]'
          }`} />
          <input
            type="text"
            placeholder="Search make, model, year..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30 focus:border-[#1F7778] focus:bg-white transition-all shadow-xs ${
              searchQuery.trim()
                ? 'bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778] font-bold'
                : 'bg-[#F2F5F5] hover:bg-white border-slate-200 hover:border-[#1F7778]/50 text-[#172325]'
            }`}
          />
        </div>

        {/* Custom Styled Make Select Box */}
        <div className="relative group">
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className={`w-full appearance-none pl-4 pr-10 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30 focus:border-[#1F7778] focus:bg-white transition-all shadow-xs cursor-pointer ${
              selectedMake
                ? 'bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778] font-extrabold'
                : 'bg-[#F2F5F5] hover:bg-white border-slate-200 hover:border-[#1F7778]/50 text-[#172325]'
            }`}
          >
            <option value="" className="text-slate-500 font-normal">All Makes (Brands)</option>
            <option value="Suzuki" className="text-[#172325] font-semibold py-1.5">Suzuki</option>
            <option value="Toyota" className="text-[#172325] font-semibold py-1.5">Toyota</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedMake && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedMake ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>

        {/* Custom Styled Fuel Select Box */}
        <div className="relative group">
          <select
            value={selectedFuel}
            onChange={(e) => setSelectedFuel(e.target.value)}
            className={`w-full appearance-none pl-4 pr-10 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30 focus:border-[#1F7778] focus:bg-white transition-all shadow-xs cursor-pointer ${
              selectedFuel
                ? 'bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778] font-extrabold'
                : 'bg-[#F2F5F5] hover:bg-white border-slate-200 hover:border-[#1F7778]/50 text-[#172325]'
            }`}
          >
            <option value="" className="text-slate-500 font-normal">All Fuel Types</option>
            <option value="Petrol" className="text-[#172325] font-semibold py-1.5">Petrol</option>
            <option value="Hybrid" className="text-[#172325] font-semibold py-1.5">Hybrid</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedFuel && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedFuel ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>

        {/* Custom Styled Condition Select Box */}
        <div className="relative group">
          <select
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
            className={`w-full appearance-none pl-4 pr-10 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30 focus:border-[#1F7778] focus:bg-white transition-all shadow-xs cursor-pointer ${
              selectedCondition
                ? 'bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778] font-extrabold'
                : 'bg-[#F2F5F5] hover:bg-white border-slate-200 hover:border-[#1F7778]/50 text-[#172325]'
            }`}
          >
            <option value="" className="text-slate-500 font-normal">All Conditions</option>
            <option value="Used" className="text-[#172325] font-semibold py-1.5">Used Vehicles</option>
            <option value="Brand New" className="text-[#172325] font-semibold py-1.5">Brand New Vehicles</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedCondition && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedCondition ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>
      </div>
    </div>
  );
}
