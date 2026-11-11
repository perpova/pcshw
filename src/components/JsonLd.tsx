import { Car } from '@/types/car';
import { DEALERSHIP } from '@/data/dealership';

interface JsonLdProps {
  type: 'AutoDealer' | 'Vehicle';
  car?: Car;
  baseUrl?: string;
}

export default function JsonLd({ type, car, baseUrl = 'https://priyankaracarsale.lk' }: JsonLdProps) {
  if (type === 'AutoDealer') {
    const autoDealerSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoDealer',
      'name': DEALERSHIP.name,
      'alternateName': DEALERSHIP.altName,
      'legalName': DEALERSHIP.legalName,
      'description': DEALERSHIP.tagline,
      'url': baseUrl,
      'telephone': [DEALERSHIP.phoneHotline, DEALERSHIP.phoneLandline],
      'email': DEALERSHIP.email,
      'logo': `${baseUrl}/logo.svg`,
      'image': `${baseUrl}${DEALERSHIP.ogImageUrl}`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': DEALERSHIP.address.street,
        'addressLocality': DEALERSHIP.address.city,
        'postalCode': DEALERSHIP.address.postalCode,
        'addressRegion': DEALERSHIP.address.district,
        'addressCountry': DEALERSHIP.address.country,
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': DEALERSHIP.geo.latitude,
        'longitude': DEALERSHIP.geo.longitude,
      },
      'openingHours': DEALERSHIP.openingHours,
      'priceRange': '$$$',
      'sameAs': Object.values(DEALERSHIP.socials).filter(
        (url): url is string => Boolean(url),
      ),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(autoDealerSchema).replace(/</g, '\\u003c'),
        }}
      />
    );
  }

  if (type === 'Vehicle' && car) {
    const pageUrl = new URL(`/cars/${encodeURIComponent(car.id)}`, baseUrl).toString();
    const breadcrumbId = `${pageUrl}#breadcrumb`;
    const vehicleSchema = {
      '@type': 'Vehicle',
      '@id': `${pageUrl}#vehicle`,
      'name': `${car.make} ${car.model} ${car.year}`,
      'description': car.description,
      'brand': {
        '@type': 'Brand',
        'name': car.make,
      },
      'model': car.model,
      'productionDate': String(car.year),
      'vehicleTransmission': car.transmission,
      'fuelType': car.fuelType,
      'vehicleEngine': {
        '@type': 'EngineSpecification',
        'engineDisplacement': {
          '@type': 'QuantitativeValue',
          'value': car.engineCc,
          'unitCode': 'CMQ',
        },
      },
      'mileageFromOdometer': {
        '@type': 'QuantitativeValue',
        'value': car.mileage,
        'unitCode': 'KMT',
      },
      'itemCondition':
        car.condition === 'Brand New'
          ? 'https://schema.org/NewCondition'
          : car.condition === 'Reconditioned'
            ? 'https://schema.org/RefurbishedCondition'
            : 'https://schema.org/UsedCondition',
      ...(car.priceLkr != null
        ? {
            'offers': {
              '@type': 'Offer',
              'priceCurrency': 'LKR',
              'price': car.priceLkr,
              'availability': car.isSold
                ? 'https://schema.org/SoldOut'
                : 'https://schema.org/InStock',
              'seller': {
                '@type': 'AutoDealer',
                'name': DEALERSHIP.name,
                'telephone': DEALERSHIP.phoneHotline,
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': DEALERSHIP.address.street,
                  'addressLocality': DEALERSHIP.address.city,
                  'postalCode': DEALERSHIP.address.postalCode,
                },
              },
            },
          }
        : {}),
      'image': car.images.map((img) => new URL(img, baseUrl).toString()),
    };
    const pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': pageUrl,
          'url': pageUrl,
          'name': car.name,
          'mainEntity': { '@id': vehicleSchema['@id'] },
          'breadcrumb': { '@id': breadcrumbId },
        },
        vehicleSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': baseUrl,
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Cars',
              'item': `${baseUrl}/cars`,
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': car.name,
            },
          ],
        },
      ],
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, '\\u003c'),
        }}
      />
    );
  }

  return null;
}
