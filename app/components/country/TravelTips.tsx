import React from 'react';

interface TravelTipsProps {
  countryName: string;
}

const TravelTips: React.FC<TravelTipsProps> = ({ countryName }) => {
  return (
    <section id="travel-tips" className="travel-tips py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="tips-container bg-white rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <h2 className="tips-title text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-3">
            <span className="tips-icon text-primary">✈️</span>
            Travel Tips for {countryName}
          </h2>

          <div className="tips-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tip-item flex gap-4">
              <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                💰
              </div>
              <div className="tip-content">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Money Saving</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Use local public transportation instead of taxis, visit museums on their free
                  days (often the first Sunday of the month), and eat at local markets for
                  authentic and affordable meals.
                </p>
              </div>
            </div>

            <div className="tip-item flex gap-4">
              <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                🗓️
              </div>
              <div className="tip-content">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Best Times to Visit</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The shoulder seasons (April-May and September-October) offer pleasant weather,
                  fewer crowds, and often lower prices. Avoid the peak summer season for a more
                  authentic experience.
                </p>
              </div>
            </div>

            <div className="tip-item flex gap-4">
              <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                🚆
              </div>
              <div className="tip-content">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Getting Around</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Purchase a transit pass for unlimited travel on public transportation. The
                  high-speed rail network connects major cities efficiently, while regional trains
                  offer scenic routes through the countryside.
                </p>
              </div>
            </div>

            <div className="tip-item flex gap-4">
              <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                🍽️
              </div>
              <div className="tip-content">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Local Cuisine</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore local food markets and try regional specialties. Most cities have
                  affordable lunch menus at restaurants during weekdays, offering a great value
                  for experiencing authentic cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips; 