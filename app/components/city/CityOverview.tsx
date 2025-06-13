import { FC } from 'react';

interface CityOverviewProps {
  formattedCityName: string;
  overviewData: {
    main_content: { [key: string]: string };
    essential_info_card: {
      best_time_to_visit: string;
      closest_airport: string;
      public_transit_options: string[];
      walkability_score: string;
      avg_summer_high_f: string;
      avg_winter_low_f: string;
    };
  };
}

const CityOverview: FC<CityOverviewProps> = ({ formattedCityName, overviewData }) => {
  const paragraphs = Object.values(overviewData.main_content);

  return (
    <section id="overview" className="py-12">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">City Overview</h2>
          <p className="section-subtitle text-gray-600">
            Discover what makes {formattedCityName} a unique destination on the San Francisco
            Peninsula.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-[-2rem]">
          <div className="flex-[2]">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="bg-primary text-white p-5">
                <h3 className="text-xl font-semibold">Essential Information</h3>
              </div>
              <div className="p-4">
                <ul className="text-sm">
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Best Time to Visit</span>
                    <span className="font-medium">{overviewData.essential_info_card.best_time_to_visit}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Closest Airport</span>
                    <span className="font-medium">{overviewData.essential_info_card.closest_airport}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Public Transit</span>
                    <span className="font-medium">{overviewData.essential_info_card.public_transit_options.join(', ')}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Walkability Score</span>
                    <span className="font-medium">{overviewData.essential_info_card.walkability_score}/100</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Avg. Summer High</span>
                    <span className="font-medium">{overviewData.essential_info_card.avg_summer_high_f}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Avg. Winter Low</span>
                    <span className="font-medium">{overviewData.essential_info_card.avg_winter_low_f}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityOverview; 