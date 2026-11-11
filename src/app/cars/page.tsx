import type { Metadata } from 'next';
import CarsCatalogue from '@/components/CarsCatalogue';
import { DEALERSHIP } from '@/data/dealership';
import { getVehicles } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Cars for Sale in Matara',
  description: `Browse available vehicles at ${DEALERSHIP.altName} in Matara, Sri Lanka. Explore current stock, compare specifications, and contact the showroom about a vehicle.`,
  alternates: {
    canonical: '/cars',
  },
  openGraph: {
    title: `Cars for Sale in Matara | ${DEALERSHIP.altName}`,
    description: `Browse current vehicle stock at ${DEALERSHIP.altName} in Matara, Sri Lanka.`,
    url: '/cars',
    type: 'website',
    images: [
      {
        url: '/Priyankara-Lanka.jpg',
        width: 1200,
        height: 630,
        alt: `${DEALERSHIP.altName} vehicle showroom in Matara`,
      },
    ],
  },
};

export default async function CarsCataloguePage() {
  const cars = await getVehicles();
  return <CarsCatalogue cars={cars} />;
}
