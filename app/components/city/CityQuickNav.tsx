import { FC } from 'react';

const CityQuickNav: FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] -mt-8 mb-16 rounded-[16px] relative z-10">
        <div className="p-4 flex justify-between items-center">
          <ul className="flex gap-6 list-none overflow-x-auto py-5 scrollbar-none">
            <li>
              <a
                href="#overview"
                className="text-primary font-semibold bg-accent px-4 py-2 rounded-[50px] text-sm whitespace-nowrap"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#activities"
                className="text-dark hover:bg-accent px-4 py-2 rounded-[50px] text-sm whitespace-nowrap"
              >
                Free Things To Do
              </a>
            </li>
            <li>
              <a
                href="#itineraries"
                className="text-dark hover:bg-accent px-4 py-2 rounded-[50px] text-sm whitespace-nowrap"
              >
                Itineraries
              </a>
            </li>
            <li>
              <a
                href="#neighborhoods"
                className="text-dark hover:bg-accent px-4 py-2 rounded-[50px] text-sm whitespace-nowrap"
              >
                Neighborhoods
              </a>
            </li>
            <li>
              <a
                href="#practical-info"
                className="text-dark hover:bg-accent px-4 py-2 rounded-[50px] text-sm whitespace-nowrap"
              >
                Practical Info
              </a>
            </li>
            <li>
              <a
                href="#nearby"
                className="text-dark hover:bg-accent px-4 py-2 rounded-[50px] text-sm whitespace-nowrap"
              >
                Nearby Cities
              </a>
            </li>
          </ul>
          <div className="flex gap-4 pl-4 border-l border-gray-200">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-6 rounded-[50px] font-medium transition-all text-[0.9rem] tracking-[0.5px] bg-white text-primary border border-white hover:bg-primary hover:text-white hover:border-primary"
            >
              <span className="w-[18px] h-[18px] inline-block leading-none">▶</span>
              <span>Plan Your Trip</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityQuickNav; 