import { FC } from 'react';
import { neighborhoods } from '../../data/neighborhoods';

interface CityNeighborhoodsProps {
  formattedCityName: string;
}

const CityNeighborhoods: FC<CityNeighborhoodsProps> = ({ formattedCityName }) => {
  return (
    <section id="neighborhoods" className="py-12">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">
            {formattedCityName} Neighborhoods
          </h2>
          <p className="section-subtitle text-gray-600">
            Discover the diverse districts that give {formattedCityName} its unique character.
          </p>
        </div>

        <div className="neighborhoods-summary">
          <p className="neighborhoods-intro text-gray-700 mb-12 max-w-3xl">
            {formattedCityName} is composed of distinctive neighborhoods, each with its own charm
            and personality. From the vibrant downtown core to peaceful residential hills, these
            areas offer different experiences for visitors exploring the city.
          </p>

          <div className="neighborhood-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map(neighborhood => (
              <div
                key={neighborhood.id}
                className="neighborhood-summary bg-white rounded-[16px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex gap-6">
                  <div className="neighborhood-icon w-12 h-12 rounded-full bg-[rgba(58,139,187,0.1)] flex items-center justify-center text-2xl">
                    {neighborhood.icon}
                  </div>
                  <div className="neighborhood-content flex-1">
                    <h3 className="neighborhood-name text-xl font-semibold mb-2">
                      {neighborhood.name}
                    </h3>
                    <p className="neighborhood-description text-gray-700 text-sm mb-4">
                      {neighborhood.description}
                    </p>
                    <div className="neighborhood-features flex flex-wrap gap-2">
                      {neighborhood.features.map((feature, index) => (
                        <span
                          key={index}
                          className="neighborhood-feature text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityNeighborhoods; 