'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, RotateCcw, ChevronDown, SlidersHorizontal, Check } from 'lucide-react';
import './filter.css'




interface CarFilterProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedMake: string;
  setSelectedMake: (val: string) => void;
  selectedFuel: string;
  setSelectedFuel: (val: string) => void;
  selectedCondition: string;
  setSelectedCondition: (val: string) => void;
  selectedTransmission: string;
  setSelectedTransmission: (val: string) => void;
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
  selectedTransmission,
  setSelectedTransmission,
  resetFilters,
}: CarFilterProps) {
  const activeFiltersCount =
    (searchQuery.trim() ? 1 : 0) +
    (selectedMake ? 1 : 0) +
    (selectedFuel ? 1 : 0) +
    (selectedCondition ? 1 : 0) +
    (selectedTransmission ? 1 : 0);

  const makes = ["All Makes (Brands)", "Suzuki", "Toyota"];
  const fuels = ["All fuel types", "Petrol", "Hybrid"];
  const conditions = ["All Conditions", "Used", "Brand New"];
  const transmissions = ["All Transmissions", "Automatic", "Manual"];
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [isFuelOpen, setIsFuelOpen] = useState(false);
  const [isConditionOpen, setIsConditionOpen] = useState(false);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(false);

  const makeDropdownRef = useRef<HTMLDivElement>(null);
  const fuelDropdownRef = useRef<HTMLDivElement>(null);
  const conditionDropdownRef = useRef<HTMLDivElement>(null);
  const transmissionDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickoutside(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;

      if (makeDropdownRef.current && !makeDropdownRef.current.contains(event.target)) {
        setIsMakeOpen(false);
      }
      if (fuelDropdownRef.current && !fuelDropdownRef.current.contains(event.target)) {
        setIsFuelOpen(false);
      }
      if (conditionDropdownRef.current && !conditionDropdownRef.current.contains(event.target)) {
        setIsConditionOpen(false);
      }
      if (transmissionDropdownRef.current && !transmissionDropdownRef.current.contains(event.target)) {
        setIsTransmissionOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickoutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickoutside);
    };
  }, []);



  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow mb-8">
      {/* Filter Bar Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
        <div className="flex justify-between flex-col sm:flex-row sm:items-center gap-4 flex-1">
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
              <p className="text-[11px] text-[#536466]">Search and filter vehicles by brand, fuel, condition, or transmission</p>
            </div>
          </div>

          <div className="relative group w-full sm:flex-1 sm:max-w-md">
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
        {/* Custom Styled Make Select Box */}
        <div className="relative group">
            <div ref={makeDropdownRef} className="relative w-full">
              <button type="button" onClick={()=>setIsMakeOpen(!isMakeOpen)}
                aria-expanded={isMakeOpen}
                className={`w-full rounded-xl border py-3 pl-4 pr-10 text-left text-xs font-semibold
                focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30
                transition-all shadow-xs cursor-pointer ${
                  selectedMake
                    ? "bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778]"
                    : "bg-[#F2F5F5] border-slate-200 text-[#172325]"
                }`}>{selectedMake || "All Makes (Brands)"}</button>

                {isMakeOpen && (
                  <ul className='absolute z-40 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg'>
                    {makes.map((make)=>(
                      <li key={make}><button type="button" onClick={()=>{
                        setSelectedMake(make==="All Makes (Brands)"?"":make);
                        setIsMakeOpen(false);
                      }} className='w-full px-4 py-2 text-left text-xs hover:bg-[#DCEEEE] hover:text-[#1F7778]'>
                        {make}</button></li>
                    ))}
                  </ul>
                )}
            </div>



          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedMake && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedMake ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>

        {/* Custom Styled Fuel Select Box */}
        <div className="relative group">
          <div ref={fuelDropdownRef} className="relative w-full">
              <button type="button" onClick={()=>setIsFuelOpen(!isFuelOpen)}
                aria-expanded={isFuelOpen}
                className={`w-full rounded-xl border py-3 pl-4 pr-10 text-left text-xs font-semibold
                focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30
                transition-all shadow-xs cursor-pointer ${
                  selectedFuel
                    ? "bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778]"
                    : "bg-[#F2F5F5] border-slate-200 text-[#172325]"
                }`}>{selectedFuel || "All fuel types"}</button>

                {isFuelOpen && (
                  <ul className='absolute z-40 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg'>
                    {fuels.map((fuel)=>(
                      <li key={fuel}><button type="button" onClick={()=>{
                        setSelectedFuel(fuel==="All fuel types"?"":fuel);
                        setIsFuelOpen(false);
                      }} className='w-full px-4 py-2 text-left text-xs hover:bg-[#DCEEEE] hover:text-[#1F7778]'>
                        {fuel}</button></li>
                    ))}
                  </ul>
                )}
            </div>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedFuel && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedFuel ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>

        {/* Custom Styled Condition Select Box */}
        <div className="relative group">
            <div ref={conditionDropdownRef} className="relative w-full">
              <button type="button" onClick={()=>setIsConditionOpen(!isConditionOpen)}
                aria-expanded={isConditionOpen}
                className={`w-full rounded-xl border py-3 pl-4 pr-10 text-left text-xs font-semibold
                focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30
                transition-all shadow-xs cursor-pointer ${
                  selectedCondition
                    ? "bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778]"
                    : "bg-[#F2F5F5] border-slate-200 text-[#172325]"
                }`}>{selectedCondition || "All Conditions"}</button>

                {isConditionOpen && (
                  <ul className='absolute z-40 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg'>
                    {conditions.map((condition)=>(
                      <li key={condition}><button type="button" onClick={()=>{
                        setSelectedCondition(condition==="All Conditions"?"":condition);
                        setIsConditionOpen(false);
                      }} className='w-full px-4 py-2 text-left text-xs hover:bg-[#DCEEEE] hover:text-[#1F7778]'>
                        {condition}</button></li>
                    ))}
                  </ul>
                )}
            </div>

          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedCondition && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedCondition ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>


        {/* Custom Styled Transmission Select Box */}
        <div className="relative group">
          <div ref={transmissionDropdownRef} className="relative w-full">
            <button
              type="button"
              onClick={() => setIsTransmissionOpen(!isTransmissionOpen)}
              aria-expanded={isTransmissionOpen}
              className={`w-full rounded-xl border py-3 pl-4 pr-10 text-left text-xs font-semibold
                focus:outline-none focus:ring-2 focus:ring-[#1F7778]/30
                transition-all shadow-xs cursor-pointer ${
                  selectedTransmission
                    ? "bg-[#DCEEEE]/40 border-[#1F7778] text-[#1F7778]"
                    : "bg-[#F2F5F5] border-slate-200 text-[#172325]"
                }`}
            >
              {selectedTransmission || "All Transmissions"}
            </button>

            {isTransmissionOpen && (
              <ul className='absolute z-40 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg'>
                {transmissions.map((transmission) => (
                  <li key={transmission}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTransmission(transmission === "All Transmissions" ? "" : transmission);
                        setIsTransmissionOpen(false);
                      }}
                      className='w-full px-4 py-2 text-left text-xs hover:bg-[#DCEEEE] hover:text-[#1F7778]'
                    >
                      {transmission}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {selectedTransmission && <Check className="w-3.5 h-3.5 text-[#1F7778]" />}
            <ChevronDown className={`w-4 h-4 transition-transform group-focus-within:rotate-180 ${
              selectedTransmission ? 'text-[#1F7778]' : 'text-[#536466] group-hover:text-[#1F7778]'
            }`} />
          </div>
        </div>
      </div>
    </div>
  );
}
