'use client';

import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CityHero from '../../components/city/CityHero';
import CityQuickNav from '../../components/city/CityQuickNav';
import CityOverview from '../../components/city/CityOverview';
import ActivitiesMap from '../../components/city/ActivitiesMap';
import FreeActivities from '../../components/city/FreeActivities';
import CityItineraries from '../../components/city/CityItineraries';
import CityNeighborhoods from '../../components/city/CityNeighborhoods';
import PracticalInfo from '../../components/city/PracticalInfo';
import NearbyCities from '../../components/city/NearbyCities';
import CityCTA from '../../components/city/CityCTA';

export default function CityPage() {
  const params = useParams();
  const cityName = params.city as string;
  const formattedCityName = cityName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar variant="overlay" />
      <CityHero formattedCityName={formattedCityName} />
      <CityQuickNav />
      <CityOverview formattedCityName={formattedCityName} />
      <ActivitiesMap formattedCityName={formattedCityName} />
      <FreeActivities formattedCityName={formattedCityName} />
      <CityItineraries formattedCityName={formattedCityName} />
      <CityNeighborhoods formattedCityName={formattedCityName} />
      <PracticalInfo formattedCityName={formattedCityName} />
      <NearbyCities formattedCityName={formattedCityName} />
      <CityCTA formattedCityName={formattedCityName} />
      <Footer />
    </div>
  );
}