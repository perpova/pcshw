'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  carName: string;
  isSold?: boolean;
}

export default function ImageGallery({ images, carName, isSold }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/cars/placeholder.jpg');

  return (
    <div className="space-y-4">
      {/* Featured Display Image */}
      <div className="relative h-80 sm:h-[450px] w-full bg-[#172325] rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <Image
          src={selectedImage}
          alt={`${carName} photo at Priyankara Lanka Motor Traders Matara`}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1200px) 100vw, 60vw"
        />
        {/* Angled Red SOLD Tag */}
        {isSold && (
          <div className="absolute top-0 right-0 z-20 w-36 sm:w-44 h-36 sm:h-44 overflow-hidden pointer-events-none">
            <div className="absolute top-8 sm:top-9 -right-11 sm:-right-12 w-44 sm:w-52 bg-red-600 text-white font-black text-xs sm:text-base tracking-widest uppercase text-center py-1.5 sm:py-2 shadow-xl rotate-45 border-y-2 border-white/40">
              SOLD
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`relative w-24 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
              selectedImage === img
                ? 'border-[#1F7778] scale-105 shadow-md'
                : 'border-slate-200 opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`${carName} thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
