import { FC } from 'react';

interface CityOverviewProps {
  formattedCityName: string;
}

const CityOverview: FC<CityOverviewProps> = ({ formattedCityName }) => {
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

        <div className="flex gap-8 items-start mb-[-2rem]">
          <div className="flex-[2]">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Situated at the heart of the San Francisco Peninsula, {formattedCityName} offers a
              perfect blend of Silicon Valley innovation and rich California history. Named for
              the redwood lumber that was once shipped through its port, this vibrant city has
              emerged as a cultural and technological hub with a warm Mediterranean climate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The city's historic downtown features a beautifully restored courthouse and a lively
              theater scene, making it a popular destination for both residents and visitors. With
              its motto "Climate Best By Government Test" — the city enjoys sunny days perfect for
              exploring its numerous parks, trails, and bay shoreline.
            </p>
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
                    <span className="font-medium">Apr-Oct</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Closest Airport</span>
                    <span className="font-medium">SFO (9 miles)</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Public Transit</span>
                    <span className="font-medium">CalTrain, SamTrans</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Walkability Score</span>
                    <span className="font-medium">76/100</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Avg. Summer High</span>
                    <span className="font-medium">78°F</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600">Avg. Winter Low</span>
                    <span className="font-medium">42°F</span>
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