// app/components/city/CityNeighborhoods.tsx
import { FC } from 'react';

interface Neighborhood {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
}

interface CityNeighborhoodsProps {
  formattedCityName: string;
  neighborhoodsData: Neighborhood[];
}

const CityNeighborhoods: FC<CityNeighborhoodsProps> = ({ formattedCityName, neighborhoodsData }) => {
  if (!neighborhoodsData) {
    return null;
  }

  return (
    <section id="neighborhoods" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">
            Neighborhoods in {formattedCityName}
          </h2>
          <p className="section-subtitle text-gray-600">
            Discover the unique character and attractions of each neighborhood.
          </p>
        </div>

        <div className="neighborhood-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {neighborhoodsData.map((neighborhood) => (
            <div 
              key={neighborhood.id}
              className="neighborhood-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{neighborhood.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {neighborhood.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {neighborhood.description}
                </p>

                {neighborhood.features && neighborhood.features.length > 0 && (
                  <div className="features-list">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {neighborhood.features.map((feature, index) => (
                        <li 
                          key={index}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityNeighborhoods;