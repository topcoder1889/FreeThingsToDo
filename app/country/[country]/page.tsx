'use client';

import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CountryHero from '../../components/country/CountryHero';
import CountryInfo from '../../components/country/CountryInfo';
import TopDestinations from '../../components/country/TopDestinations';
import AllRegions from '../../components/country/AllRegions';
import AllCities from '../../components/country/AllCities';
import TravelTips from '../../components/country/TravelTips';
import CountryCTA from '../../components/country/CountryCTA';

export default function CountryPage() {
  const params = useParams();
  const countryName = params.country as string;
  const formattedCountryName = countryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar variant="default" />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <a href="/countries" className="hover:text-primary">
              Countries
            </a>
            <span className="text-gray-400">/</span>
            <span>{formattedCountryName}</span>
          </div>
        </div>
      </div>

      <CountryHero countryName={formattedCountryName} />
      <CountryInfo countryName={formattedCountryName} />
      <TopDestinations />
      <AllRegions countryName={formattedCountryName} />
      <AllCities countryName={formattedCountryName} />
      <TravelTips countryName={formattedCountryName} />
      <CountryCTA countryName={formattedCountryName} />

      <Footer />
    </div>
  );
}
