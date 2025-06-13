// app/components/city/PracticalInfo.tsx
'use client';

import { FC, useState } from 'react';

interface InfoCard {
  title: string;
  description: string;
  bullet_points: string[];
}

interface ReferenceLinks {
  openstreetmap: { relation_id: string; url: string };
  wikipedia: { page_id: string; url: string };
  wikivoyage: { url: string };
  wikidata: { entity_id: string };
}

interface PopulationData {
  latest_population: string;
  population_growth_rate: string;
  urban_area_population: string;
  metropolitan_area: string;
  population_density: string;
}

interface CulturalSignificance {
  notable_unesco_sites: string[];
  main_languages: string[];
  cultural_districts: string[];
  major_annual_events: string[];
}

interface EconomicIndicators {
  primary_industries: string[];
  development_classification: string;
  major_corporations: string[];
  tourism_significance: string;
}

interface EnvironmentalContext {
  climate_classification: string;
  avg_temp_range_f: string;
  environmental_features: string[];
  green_space_percentage: string;
}

interface UrbanCharacteristics {
  urban_layout: string;
  public_transportation: string[];
  major_landmarks: string[];
  airport_info: string;
}

interface InsightCard {
  title: string;
  description: string;
}

interface PracticalInfoData {
  info_cards: InfoCard[];
  reference_links: ReferenceLinks;
  population_data: PopulationData;
  cultural_significance: CulturalSignificance;
  economic_indicators: EconomicIndicators;
  environmental_context: EnvironmentalContext;
  urban_characteristics: UrbanCharacteristics;
  insight_cards: InsightCard[];
}

interface PracticalInfoProps {
  formattedCityName: string;
  practicalData: PracticalInfoData;
}

const PracticalInfo: FC<PracticalInfoProps> = ({ formattedCityName, practicalData }) => {
  const [activeTab, setActiveTab] = useState('essential-info');

  if (!practicalData) {
    return null;
  }

  return (
    <section id="practical-info" className="practical-insights py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header mb-8">
          <h2 className="section-title text-3xl font-bold mb-2">City Information & Resources</h2>
          <p className="section-subtitle text-gray-600">
            Essential details, data, and links to help you learn about {formattedCityName}.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex gap-2 bg-white p-2 rounded-full shadow-md overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('essential-info')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'essential-info'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Essential Info
            </button>
            <button
              onClick={() => setActiveTab('reference-links')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'reference-links'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Reference Links
            </button>
            <button
              onClick={() => setActiveTab('population')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'population'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Population
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'culture'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Culture
            </button>
            <button
              onClick={() => setActiveTab('economy')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'economy'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Economy
            </button>
            <button
              onClick={() => setActiveTab('environment')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'environment'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Environment
            </button>
            <button
              onClick={() => setActiveTab('urban')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'urban'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Urban Layout
            </button>
            <button
              onClick={() => setActiveTab('local-tips')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === 'local-tips'
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Local Tips
            </button>
          </div>
        </div>

        <div className="insights-content">
          {activeTab === 'essential-info' && (
            <div className="grid md:grid-cols-3 gap-8">
              {practicalData.info_cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                >
                  <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                      {card.title.split(' ').pop()}
                    </div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <ul className="space-y-3">
                      {card.bullet_points.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600 text-sm">
                          <span className="text-primary font-bold mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reference-links' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-4">
                    <strong className="text-gray-700">Wikipedia:</strong>
                    <a
                      href={practicalData.reference_links.wikipedia.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-2"
                    >
                      {practicalData.reference_links.wikipedia.url}
                    </a>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <strong className="text-gray-700">WikiVoyage:</strong>
                    <a
                      href={practicalData.reference_links.wikivoyage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-2"
                    >
                      {practicalData.reference_links.wikivoyage.url}
                    </a>
                  </li>
                  <li>
                    <strong className="text-gray-700">Wikidata:</strong>
                    <span className="text-gray-600 ml-2">
                      Entity ID: {practicalData.reference_links.wikidata.entity_id}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'population' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  {Object.entries(practicalData.population_data).map(([key, value]) => (
                    <li key={key} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <strong className="text-gray-700">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                      </strong>
                      <span className="text-gray-600 ml-2">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'culture' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  {Object.entries(practicalData.cultural_significance).map(([key, value]) => (
                    <li key={key} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <strong className="text-gray-700">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                      </strong>
                      <span className="text-gray-600 ml-2">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'economy' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  {Object.entries(practicalData.economic_indicators).map(([key, value]) => (
                    <li key={key} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <strong className="text-gray-700">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                      </strong>
                      <span className="text-gray-600 ml-2">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'environment' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  {Object.entries(practicalData.environmental_context).map(([key, value]) => (
                    <li key={key} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <strong className="text-gray-700">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                      </strong>
                      <span className="text-gray-600 ml-2">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'urban' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  {Object.entries(practicalData.urban_characteristics).map(([key, value]) => (
                    <li key={key} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <strong className="text-gray-700">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                      </strong>
                      <span className="text-gray-600 ml-2">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'local-tips' && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Local Insights & Hidden Gems</h3>
                <p className="text-gray-600">Tips from residents and frequent visitors.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {practicalData.insight_cards.map((insight, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-3">{insight.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;