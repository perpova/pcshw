export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  condition: 'Brand New' | 'Used' | 'Reconditioned';
  owner: string;
  bodyType: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Hybrid' | 'Diesel' | 'Electric';
  engineCc: number;
  mileage: number;
  price: string;
  priceLkr: number | null;
  priceDisplay: string;
  features: string[];
  description: string;
  images: string[];
  featured?: boolean;
  isSold?: boolean;
}

export interface DealershipInfo {
  name: string;
  legalName: string;
  altName: string;
  tagline: string;
  phoneHotline: string;
  phoneHotlineRaw: string;
  phoneLandline: string;
  phoneLandlineRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    district: string;
    country: string;
    fullFormatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  socials: {
    facebook?: string;
    whatsappGroup?: string;
  };
  logoUrl: string;
  faviconUrl: string;
  ogImageUrl: string;
}
