'use client';

import { FC, useState } from 'react';

interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

interface Itinerary {
  id: string;
  title: string;
  description: string;
  items: ItineraryItem[];
}

interface CityItinerariesProps {
  formattedCityName: string;
  itinerariesData: Itinerary[];
}

const CityItineraries: FC<CityItinerariesProps> = ({ formattedCityName, itinerariesData }) => {
  const [activeItineraryId, setActiveItineraryId] = useState(itinerariesData[0]?.id || '');

  if (!itinerariesData) {
    return null;
  }

  const activeItinerary = itinerariesData.find(itinerary => itinerary.id === activeItineraryId) || itinerariesData[0];

  return (
    <section id="itineraries" className="itineraries py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">
            Suggested Itineraries for {formattedCityName}
          </h2>
          <p className="section-subtitle text-gray-600">
            Explore our curated itineraries to make the most of your time in {formattedCityName}.
          </p>
        </div>

        <div className="itinerary-tabs flex overflow-x-auto whitespace-nowrap border-b border-gray-200 mb-8 gap-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
  {itinerariesData.map((itinerary) => (
    <div 
      key={itinerary.id}
      className={`itinerary-tab py-4 font-medium cursor-pointer relative whitespace-nowrap ${
        activeItineraryId === itinerary.id 
          ? 'text-primary' 
          : 'text-gray-600'
      }`}
      onClick={() => setActiveItineraryId(itinerary.id)}
    >
      {itinerary.title}
      {activeItineraryId === itinerary.id && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
      )}
    </div>
  ))}
</div>

        <div className="itinerary-content flex gap-12">
          <div className="itinerary-map flex-1 h-[400px] bg-gray-200 rounded-[16px] overflow-hidden">
            <img 
              src="https://placehold.co/600x400/ddeeff/333333?text=Itinerary+Map" 
              alt="Itinerary Map" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="itinerary-details flex-1">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {activeItinerary.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {activeItinerary.description}
              </p>

              {activeItinerary.items && activeItinerary.items.length > 0 && (
                <ul className="itinerary-timeline list-none relative pl-8">
                  {activeItinerary.items.map((item, index) => (
                    <li key={index} className="itinerary-item relative pb-8 last:pb-0">
                      <div className="itinerary-time text-sm text-gray-600 mb-1">
                        {item.time}
                      </div>
                      <h4 className="itinerary-item-title text-lg font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h4>
                      <p className="itinerary-description text-gray-600">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityItineraries; 