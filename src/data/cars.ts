import { Car } from '@/types/car';

export const CARS: Car[] = [
  {
    id: 'car1',
    name: 'Suzuki Alto Japan 2016',
    make: 'Suzuki',
    model: 'Alto Japan',
    year: 2016,
    condition: 'Used',
    owner: '1st Owner',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engineCc: 650,
    mileage: 45000,
    price: 'Negotiable',
    priceLkr: null,
    priceDisplay: 'Contact for Price (Negotiable)',
    features: [
      'Air Conditioning',
      'Power Steering',
      'Power Mirror',
      'Power Window',
      '1st Owner',
      'Service Records Available',
      'Fuel Efficient 650cc Engine',
      'Automatic Transmission'
    ],
    description: 'Suzuki Japan Alto 2016 / 2018 Registration. 1st owner, complete service records available. Excellent overall condition, highly fuel-efficient daily vehicle ideal for city driving. Price can be negotiated upon inspection.',
    images: [
      '/cars/car1/image_1.jpeg',
      '/cars/car1/image_2.jpeg',
      '/cars/car1/image_3.jpeg',
      '/cars/car1/image_4.jpeg',
      '/cars/car1/image_5.jpeg',
      '/cars/car1/image_6.jpeg',
      '/cars/car1/image_7.jpeg'
    ],
    featured: true,
    isSold: true
  },
  {
    id: 'car2',
    name: 'Suzuki Alto Japan 2015',
    make: 'Suzuki',
    model: 'Alto Japan',
    year: 2015,
    condition: 'Used',
    owner: '2nd Owner',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engineCc: 650,
    mileage: 58000,
    price: 'Negotiable',
    priceLkr: null,
    priceDisplay: 'Contact for Price (Negotiable)',
    features: [
      'Air Conditioning',
      'Power Steering',
      'Power Mirror',
      'Power Window',
      '2nd Owner',
      'Service Records Available',
      'Compact & Agile',
      'High Mileage Efficiency'
    ],
    description: 'Suzuki Japan Alto 2015 / 2018 Registration. 2nd owner, complete service records available. Well-maintained Japanese hatchback with superior fuel economy and low maintenance cost.',
    images: [
      '/cars/car2/image_1.jpeg',
      '/cars/car2/image_2.jpeg',
      '/cars/car2/image_3.jpeg',
      '/cars/car2/image_4.jpeg',
      '/cars/car2/image_5.jpeg',
      '/cars/car2/image_6.jpeg'
    ],
    featured: false
  },
  {
    id: 'car3',
    name: 'Toyota Aqua S Grade 2014',
    make: 'Toyota',
    model: 'Aqua S Grade',
    year: 2014,
    condition: 'Used',
    owner: '2nd Owner',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    engineCc: 1500,
    mileage: 95000,
    price: 'Negotiable',
    priceLkr: null,
    priceDisplay: 'Contact for Price (Negotiable)',
    features: [
      'Toyota Hybrid Synergy Drive',
      'S Grade Interior',
      'Air Conditioning',
      'Power Steering',
      'Power Mirror',
      'Power Window',
      'EV & ECO Driving Modes',
      'Service Records Available'
    ],
    description: 'Toyota Aqua S Grade 2014 / 2015 Registration. 2nd owner vehicle with full service records available. Outstanding hybrid performance, immaculate interior condition, smooth ride quality.',
    images: [
      '/cars/car3/image_1.jpeg',
      '/cars/car3/image_2.jpeg',
      '/cars/car3/image_3.jpeg',
      '/cars/car3/image_4.jpeg',
      '/cars/car3/image_5.jpeg'
    ],
    featured: true
  },
  {
    id: 'car4',
    name: 'Suzuki WagonR FX Safety 2017 Hybrid',
    make: 'Suzuki',
    model: 'WagonR FX',
    year: 2017,
    condition: 'Used',
    owner: '1st Owner',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    engineCc: 650,
    mileage: 97000,
    price: '66.50 Lakhs',
    priceLkr: 6650000,
    priceDisplay: 'Rs. 6,650,000 (Negotiable)',
    features: [
      'Head Up Display (HUD)',
      'Safety Radar Brake Package',
      '1st Registration 2018',
      'Air Conditioning',
      'Power Steering',
      'Power Mirror',
      'Power Window',
      '1st Owner',
      'Service Records Available'
    ],
    description: 'Suzuki WagonR FX Safety Package 2017 Hybrid with 1st Registration in 2018. 1st owner, HUD head-up display dashboard, radar safety braking system. Complete service records. Price negotiable.',
    images: [
      '/cars/car4/image_1.jpeg',
      '/cars/car4/image_2.jpeg',
      '/cars/car4/image_3.jpeg',
      '/cars/car4/image_4.jpeg'
    ],
    featured: true
  },
  {
    id: 'car5',
    name: 'Toyota Raize Z Grade 2026',
    make: 'Toyota',
    model: 'Raize Z Grade',
    year: 2026,
    condition: 'Brand New',
    owner: 'Unregistered',
    bodyType: 'Compact SUV',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    engineCc: 1200,
    mileage: 0,
    price: 'Contact for Price',
    priceLkr: null,
    priceDisplay: 'Contact for Best Deal',
    features: [
      '360 Degree Panoramic View Camera',
      'Blind Spot Monitor (BSM)',
      'Black Two-Tone Roof',
      'Z Grade Top Specification',
      'Push Start & Smart Entry',
      'Dynamic Stability Control',
      'Digital Cockpit Cluster',
      'Alloy Wheels'
    ],
    description: 'Brand New Toyota Raize Z Grade 2026 Hybrid (1200cc). Top of the line spec featuring 360 camera, Black Top dual-tone exterior, Blind Spot Monitoring, alloy wheels, and premium interior trim.',
    images: [
      '/cars/car5/image_1.jpeg',
      '/cars/car5/image_2.jpeg',
      '/cars/car5/image_3.jpeg',
      '/cars/car5/image_4.jpeg',
      '/cars/car5/image_5.jpeg',
      '/cars/car5/image_6.jpeg',
      '/cars/car5/image_7.jpeg',
      '/cars/car5/image_8.jpeg'
    ],
    featured: true
  },
  {
    id: 'car6',
    name: 'Suzuki WagonR Stingray 2018 Hybrid',
    make: 'Suzuki',
    model: 'WagonR Stingray',
    year: 2018,
    condition: 'Used',
    owner: '1st Owner',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    engineCc: 650,
    mileage: 108000,
    price: '72.90 Lakhs',
    priceLkr: 7290000,
    priceDisplay: 'Rs. 7,290,000 (Negotiable)',
    features: [
      'Stingray Aggressive Styling',
      'LED Projector Headlamps',
      'Mild Hybrid Assist System',
      'Air Conditioning',
      'Power Steering',
      'Power Mirror',
      'Power Window',
      '1st Owner'
    ],
    description: 'Suzuki WagonR Stingray 2018 Hybrid. 1st owner vehicle with 108,000 km mileage. Aggressive front grille, LED lamps, push start, and high fuel economy. Price negotiable.',
    images: [
      '/cars/car6/image_1.jpeg',
      '/cars/car6/image_2.jpeg',
      '/cars/car6/image_3.jpeg',
      '/cars/car6/image_4.jpeg',
      '/cars/car6/image_5.jpeg',
      '/cars/car6/image_6.jpeg'
    ],
    featured: false
  },
  {
    id: 'car7',
    name: 'Suzuki WagonR 2014 Hybrid',
    make: 'Suzuki',
    model: 'WagonR FX',
    year: 2014,
    condition: 'Used',
    owner: '3rd Owner',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    engineCc: 650,
    mileage: 93660,
    price: 'Negotiable',
    priceLkr: null,
    priceDisplay: 'Contact for Price (Negotiable)',
    features: [
      'Air Conditioning',
      'Power Steering',
      'Power Mirror',
      'Power Window',
      'Service Records Available',
      'Hybrid Eco-Assist',
      'Low Maintenance'
    ],
    description: 'Suzuki WagonR 2014 / 2015 Registration. 3rd owner, 93,660 km genuine mileage. Full service records available. Highly reliable hybrid hatchback. Price can be negotiated.',
    images: [
      '/cars/car7/image_1.jpeg',
      '/cars/car7/image_2.jpeg',
      '/cars/car7/image_3.jpeg',
      '/cars/car7/image_4.jpeg',
      '/cars/car7/image_5.jpeg',
      '/cars/car7/image_6.jpeg',
      '/cars/car7/image_7.jpeg'
    ],
    featured: false
  }
];

export function getCarById(id: string): Car | undefined {
  return CARS.find((car) => car.id.toLowerCase() === id.toLowerCase());
}

export function getFeaturedCars(): Car[] {
  return CARS.filter((car) => car.featured);
}
