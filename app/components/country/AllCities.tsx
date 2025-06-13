import React from 'react';
import Link from 'next/link';
import { cities } from '../../data/cities';

interface AllCitiesProps {
  countryName: string;
}

const AllCities: React.FC<AllCitiesProps> = ({ countryName }) => {
  const citiesByLetter = cities.reduce(
    (acc, city) => {
      if (!acc[city.letter]) {
        acc[city.letter] = [];
      }
      acc[city.letter].push(city);
      return acc;
    },
    {} as Record<string, typeof cities>
  );

  const formatCityUrl = (cityName: string) => {
    return cityName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="all-cities py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="cities-container bg-white rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">All Cities</h2>
            <p className="section-subtitle text-gray-600">
              Complete directory of cities with free activities in {countryName}
            </p>
          </div>

          <div className="city-filters flex flex-col gap-4 mb-8">
            <div className="alphabet-filter flex flex-wrap gap-2 pb-4 border-b border-gray-200">
              {[
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
              ].map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter.toLowerCase()}`}
                  className={`letter w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-sm font-medium transition-colors hover:bg-primary hover:text-white ${
                    letter === 'A' ? 'bg-primary text-white' : 'text-gray-900'
                  }`}
                >
                  {letter}
                </a>
              ))}
            </div>

            <div className="filter-bar flex flex-wrap items-center justify-between gap-4 py-4">
              <div className="search-container relative flex-1 max-w-[250px]">
                <input
                  type="text"
                  className="search-input w-full px-4 py-2 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Search cities..."
                />
                <button className="search-button absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                  🔍
                </button>
              </div>

              <div className="filter-options flex gap-3 flex-wrap">
                <select className="filter-select px-4 py-2 border border-gray-300 rounded-full text-sm min-w-[120px] focus:outline-none focus:border-primary">
                  <option value="all">All Regions</option>
                  <option value="region1">[Region 1]</option>
                  <option value="region2">[Region 2]</option>
                  <option value="region3">[Region 3]</option>
                </select>

                <select className="filter-select px-4 py-2 border border-gray-300 rounded-full text-sm min-w-[120px] focus:outline-none focus:border-primary">
                  <option value="all">Any Size</option>
                  <option value="large">Large Cities</option>
                  <option value="medium">Medium Cities</option>
                  <option value="small">Small Cities</option>
                </select>

                <select className="filter-select px-4 py-2 border border-gray-300 rounded-full text-sm min-w-[120px] focus:outline-none focus:border-primary">
                  <option value="name">Sort: A-Z</option>
                  <option value="popular">Sort: Most Popular</option>
                  <option value="activities">Sort: Most Activities</option>
                </select>
              </div>
            </div>
          </div>

          <div className="cities-list">
            {Object.entries(citiesByLetter).map(([letter, letterCities]) => (
              <div
                key={letter}
                id={`letter-${letter.toLowerCase()}`}
                className="letter-section mb-10"
              >
                <h3 className="letter-heading text-xl font-semibold text-primary mb-4 pb-2 border-b-2 border-gray-200">
                  {letter}
                </h3>
                <div className="cities-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {letterCities.map(city => (
                    <Link
                      key={city.id}
                      href={`/city/${formatCityUrl(city.name)}`}
                      className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="city-name font-medium mb-1">{city.name}</div>
                      <div className="city-info text-sm opacity-80">
                        {city.activityCount} Activities
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Show More Button */}
            <div className="show-more-container text-center mt-8">
              <button
                className="show-more-btn px-8 py-3 bg-white border border-gray-300 rounded-full text-gray-900 font-medium text-sm transition-colors hover:bg-primary hover:text-white hover:border-primary"
                onClick={() => {
                  // Handle show more functionality
                  console.log('Show more cities clicked');
                }}
              >
                Show More Cities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCities;
