import { FC, useState } from 'react';
import { itineraries } from '../../data/itineraries';

interface CityItinerariesProps {
  formattedCityName: string;
}

const CityItineraries: FC<CityItinerariesProps> = ({ formattedCityName }) => {
  const [activeItinerary, setActiveItinerary] = useState(itineraries[0].id);

  return (
    <section id="itineraries" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">Suggested Itineraries</h2>
          <p className="section-subtitle text-gray-600">
            Ready-made plans to help you make the most of your visit to {formattedCityName}.
          </p>
        </div>

        <div className="itinerary-tabs flex gap-8 border-b border-gray-200 mb-8">
          {itineraries.map(itinerary => (
            <button
              key={itinerary.id}
              className={`itinerary-tab py-4 font-medium text-gray-600 relative cursor-pointer transition-colors hover:text-primary ${
                activeItinerary === itinerary.id ? 'text-primary' : ''
              }`}
              onClick={() => setActiveItinerary(itinerary.id)}
            >
              {itinerary.title.split(':')[0]}
              {activeItinerary === itinerary.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        <div className="itinerary-content flex gap-12">
          <div className="itinerary-map flex-1 h-[400px] bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="/images/demo-map.jpg"
              alt="Itinerary Map"
              className="w-full h-full object-cover"
              onError={e => {
                e.currentTarget.src =
                  'https://placehold.co/600x400/3a8bbb/ffffff?text=Itinerary+Map';
              }}
            />
          </div>

          <div className="itinerary-details flex-1">
            {itineraries.map(itinerary => (
              <div
                key={itinerary.id}
                className={`${activeItinerary === itinerary.id ? 'block' : 'hidden'}`}
              >
                <h3 className="text-2xl font-semibold mb-6">{itinerary.title}</h3>
                <p className="text-gray-700 mb-8">{itinerary.description}</p>

                <ul className="itinerary-timeline relative pl-8">
                  <div className="absolute top-0 left-2 w-0.5 h-full bg-gray-200"></div>
                  {itinerary.items.map((item, index) => (
                    <li key={index} className="itinerary-item relative pb-8">
                      <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#3a8bbb]"></div>
                      <div className="text-sm text-gray-600 mb-1">{item.time}</div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityItineraries; 