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
import NearbyCities from '../../components/city/NearbyCities';
import CityCTA from '../../components/city/CityCTA';
import PracticalInfo from '../../components/city/PracticalInfo';

import { getCityData } from '../../lib/cities';
import { notFound } from 'next/navigation';

export default async function CityPage({ params }: { params: { city: string } }) {
  const cityName = decodeURIComponent(params.city)
    .split('-')
    .map(word => {
      if (word.startsWith("'")) {
        return "'" + word.charAt(1).toUpperCase() + word.slice(2);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  const cityData = await getCityData(cityName);

  if (!cityData) {
    notFound();
  }

  const metadata = cityData.metadata_json;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar variant="overlay" />
      <CityHero 
        formattedCityName={cityName} 
        heroData={metadata.city_hero_information}
      />
      <CityQuickNav />
      <CityOverview 
        formattedCityName={cityName}
        overviewData={metadata.city_overview}
      />
      <ActivitiesMap formattedCityName={cityName} />
      <FreeActivities 
        formattedCityName={cityName}
        activitiesData={metadata.free_activities}
        cityId={parseInt(cityData.id)}
      />
      <CityItineraries 
        formattedCityName={cityName}
        itinerariesData={metadata.itineraries}
      />
      <CityNeighborhoods formattedCityName={cityName} neighborhoodsData={metadata.neighborhoods} 
      />
      <PracticalInfo 
        formattedCityName={cityName}
        practicalData={metadata.practical_information}
      />
      <NearbyCities formattedCityName={cityName} nearbyCities={metadata.nearby_cities} />
      <CityCTA formattedCityName={cityName} />
      <Footer />
    </div>
  );
}
