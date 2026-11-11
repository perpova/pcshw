import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import { DEALERSHIP } from '@/data/dealership';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${DEALERSHIP.name} | ${DEALERSHIP.altName} Matara`,
    template: `%s | ${DEALERSHIP.name}`,
  },
  description:
    'Priyankara Lanka Motor Traders (Pvt) Ltd (Priyankara Car Sale) located at 60, Akuressa Road, Isadeen Town, Matara. Quality Japanese vehicles for sale in Sri Lanka including Suzuki Alto, WagonR, Toyota Aqua, and Toyota Raize.',
  keywords: [
    'Priyankara Lanka Motor Traders',
    'Priyankara Car Sale',
    'Car sale in Matara',
    'Priyankara Car Sale Matara',
    'Japanese car sale Matara',
    'Suzuki Alto Japan Matara',
    'Suzuki WagonR Hybrid Matara',
    'Toyota Aqua S Grade Matara',
    'Toyota Raize 2026 Matara',
    'Used vehicles for sale in Matara Sri Lanka',
  ],
  authors: [{ name: DEALERSHIP.name }],
  metadataBase: new URL('https://priyankaracarsale.lk'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  openGraph: {
    title: `${DEALERSHIP.name} (${DEALERSHIP.altName})`,
    description:
      'Premier Japanese vehicle importer & dealer at 60, Akuressa Road, Isadeen Town, Matara. Browse Suzuki Alto, WagonR, Toyota Aqua, and Toyota Raize.',
    url: 'https://priyankaracarsale.lk',
    siteName: DEALERSHIP.name,
    images: [
      {
        url: 'https://priyankaracarsale.lk/Priyankara-Lanka.jpg',
        width: 1200,
        height: 630,
        alt: 'Priyankara Lanka Motor Traders (Pvt) Ltd - Priyankara Car Sale Matara',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${DEALERSHIP.name} (${DEALERSHIP.altName})`,
    description:
      'Premier Japanese vehicle importer & dealer at 60, Akuressa Road, Isadeen Town, Matara.',
    images: ['https://priyankaracarsale.lk/Priyankara-Lanka.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} font-sans scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <JsonLd type="AutoDealer" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#F2F5F5] text-[#172325] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
