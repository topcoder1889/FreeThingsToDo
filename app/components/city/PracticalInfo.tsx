import { FC } from 'react';
import { infoCards, insightCards } from '../../data/practical-info';

interface PracticalInfoProps {
  formattedCityName: string;
}

const PracticalInfo: FC<PracticalInfoProps> = ({ formattedCityName }) => {
  return (
    <section id="practical-info" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">
            Practical Information & Local Insights
          </h2>
          <p className="section-subtitle text-gray-600">
            Essential details and insider tips to help you plan and enjoy your visit to{' '}
            {formattedCityName}.
          </p>
        </div>

        <div className="insights-tabs flex gap-4 mb-8">
          <div className="insights-tab active px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-primary text-white">
            Essential Info
          </div>
          <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
            Getting Around
          </div>
          <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
            Where to Stay
          </div>
          <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
            Hidden Gems
          </div>
          <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
            Local Tips
          </div>
        </div>

        <div className="practical-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="info-card-header p-6 border-b border-gray-200 flex items-center gap-4">
                <div className="info-icon w-10 h-10 rounded-full bg-[rgba(58,139,187,0.1)] flex items-center justify-center text-xl">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <div className="info-card-body p-6">
                <p className="text-gray-700 text-[0.95rem] mb-4">{card.description}</p>
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-700 text-[0.95rem] flex items-start gap-3 border-b border-gray-200 pb-3 last:border-b-0"
                    >
                      <span className="text-primary font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="section-header mb-12">
          <h3 className="text-[1.8rem] font-semibold mb-4">Local Insights</h3>
          <p className="text-gray-600 mb-8">
            Tips, recommendations, and insider knowledge from residents and frequent visitors.
          </p>
        </div>

        <div className="insights-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {insightCards.map((card, index) => (
            <div
              key={index}
              className="insight-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="insight-content p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-700 text-[0.95rem] leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo; 