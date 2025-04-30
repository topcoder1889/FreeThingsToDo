import React from 'react';

interface CountryInfoProps {
  countryName: string;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ countryName }) => {
  return (
    <section className="country-info py-12">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">
            About {countryName}
          </h2>
          <p className="section-subtitle text-gray-600">
            Essential information to help you plan your visit
          </p>
        </div>

        <div className="info-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Key Facts Card */}
          <div className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
            <div className="info-card-header bg-primary text-white p-5 flex items-center gap-4">
              <div className="info-icon w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                📊
              </div>
              <h3 className="text-xl font-semibold">Key Facts</h3>
            </div>
            <div className="info-card-body p-6">
              <ul className="info-list">
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Capital</span>
                  <span className="info-value font-medium">[Capital City]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Population</span>
                  <span className="info-value font-medium">[Population]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Language</span>
                  <span className="info-value font-medium">[Official Languages]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Currency</span>
                  <span className="info-value font-medium">[Currency]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Time Zone</span>
                  <span className="info-value font-medium">[Time Zone]</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Travel Essentials Card */}
          <div className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
            <div className="info-card-header bg-primary text-white p-5 flex items-center gap-4">
              <div className="info-icon w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                🌍
              </div>
              <h3 className="text-xl font-semibold">Travel Essentials</h3>
            </div>
            <div className="info-card-body p-6">
              <ul className="info-list">
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Best Time to Visit</span>
                  <span className="info-value font-medium">[Seasons]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Visa Requirements</span>
                  <span className="info-value font-medium">[Requirements]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Public Transport</span>
                  <span className="info-value font-medium">[Availability Rating]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Safety</span>
                  <span className="info-value font-medium">[Safety Rating]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Budget (Daily)</span>
                  <span className="info-value font-medium">[Budget Range]</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cultural Insights Card */}
          <div className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
            <div className="info-card-header bg-primary text-white p-5 flex items-center gap-4">
              <div className="info-icon w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                🎭
              </div>
              <h3 className="text-xl font-semibold">Cultural Insights</h3>
            </div>
            <div className="info-card-body p-6">
              <ul className="info-list">
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Traditional Cuisine</span>
                  <span className="info-value font-medium">[Key Dishes]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Annual Festivals</span>
                  <span className="info-value font-medium">[Major Festivals]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Cultural Etiquette</span>
                  <span className="info-value font-medium">[Key Customs]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Religion</span>
                  <span className="info-value font-medium">[Major Religions]</span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="info-label text-gray-600 text-sm">Local Arts</span>
                  <span className="info-value font-medium">[Traditional Arts]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryInfo; 