import { FC } from 'react';

interface ActivitiesMapProps {
  formattedCityName: string;
}

const ActivitiesMap: FC<ActivitiesMapProps> = ({ formattedCityName }) => {
  return (
    <section className="py-8 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            Explore Free Activities in {formattedCityName}
          </h3>
          <div className="relative rounded-xl overflow-hidden mb-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            <img
              src="/api/placeholder/1200/500"
              alt={`Map of ${formattedCityName} Activities`}
              className="w-full h-auto"
            />
            <div className="absolute inset-0">
              <div className="absolute" style={{ top: '40%', left: '50%' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                  Downtown
                </div>
              </div>
              <div className="absolute" style={{ top: '30%', left: '30%' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                  Edgewood Park
                </div>
              </div>
              <div className="absolute" style={{ top: '60%', left: '70%' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                  Marina & Bair Island
                </div>
              </div>
              <div className="absolute" style={{ top: '20%', left: '65%' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                  Redwood Shores
                </div>
              </div>
              <div className="absolute" style={{ top: '50%', left: '20%' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                  Pulgas Ridge
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 flex-wrap mt-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#3a8bbb]"></span>
              <span className="text-sm text-gray-600">Outdoor Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e67e22]"></span>
              <span className="text-sm text-gray-600">Cultural & Historical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#27ae60]"></span>
              <span className="text-sm text-gray-600">Community Events</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9b59b6]"></span>
              <span className="text-sm text-gray-600">Nature & Wildlife</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesMap; 