import { MetadataRoute } from 'next';
import { getVehicles } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://priyankaracarsale.lk';
  const cars = await getVehicles();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cars`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const vehiclePages: MetadataRoute.Sitemap = cars.map((car) => ({
    url: new URL(`/cars/${encodeURIComponent(car.id)}`, baseUrl).toString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...vehiclePages];
}
