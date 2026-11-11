import HomeInventory from '@/components/HomeInventory';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import { getVehicles } from '@/lib/wordpress';
import NewHeroSection from '@/components/NewHeroSection';

export default async function HomePage() {
  const cars = await getVehicles();
  const featuredCar = cars.find((car) => car.featured);

  return (
    <div className="space-y-12 pb-16">
      {/*<HeroSection/>*/}
      {featuredCar ? <NewHeroSection car={featuredCar} /> : <HeroSection />}
      <TrustBadges />
      <HomeInventory cars={cars} />
    </div>
  );
}
