import { FC } from 'react';

interface FreeActivitiesProps {
  formattedCityName: string;
}

const FreeActivities: FC<FreeActivitiesProps> = ({ formattedCityName }) => {
  return (
    <section id="activities" className="py-12">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">
            Free Things To Do in {formattedCityName}
          </h2>
          <p className="section-subtitle text-gray-600">
            Explore the best cost-free activities and attractions in {formattedCityName}.
          </p>
        </div>

        <div className="activities-container">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="category-tab active px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-primary text-white">
              All Activities
            </div>
            <div className="category-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-accent text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Outdoor
            </div>
            <div className="category-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-accent text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Cultural
            </div>
            <div className="category-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-accent text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Community Events
            </div>
            <div className="category-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-accent text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Nature & Wildlife
            </div>
          </div>

          {/* Outdoor Activities */}
          <div className="activities-category mb-10">
            <div className="category-header mb-4 pb-2 border-b-2 border-primary">
              <h3 className="category-title text-2xl font-semibold text-primary">
                Outdoor Activities
              </h3>
            </div>
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="w-[40%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Activity
                  </th>
                  <th className="w-[60%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Redwood City Parks</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Explore local parks like Stafford Park, Red Morton Park, or Stulsaft Park,
                    which offer walking trails, picnic areas, and playgrounds.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">
                      Edgewood Park & Natural Preserve
                    </div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Hike through scenic trails and enjoy wildflower displays (free parking on
                    weekdays, small fee on weekends).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Bair Island Aquatic Center</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Walk or bike along the trails and enjoy views of the wetlands and wildlife.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Marina at Redwood City</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Stroll along the waterfront, watch boats, and enjoy the bay views.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Farmers' Market</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Visit the Redwood City Farmers' Market (Saturday mornings) for fresh produce,
                    live music, and a lively atmosphere.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cultural and Historical Activities */}
          <div className="activities-category mb-10">
            <div className="category-header mb-4 pb-2 border-b-2 border-primary">
              <h3 className="category-title text-2xl font-semibold text-primary">
                Cultural and Historical Activities
              </h3>
            </div>
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="w-[40%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Activity
                  </th>
                  <th className="w-[60%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">
                      San Mateo County History Museum
                    </div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Located in the historic courthouse, this museum offers free admission on the
                    first Friday of every month.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Public Art Walk</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Explore Redwood City's downtown area to see murals, sculptures, and other
                    public art installations.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Fox Theatre</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Check for free or low-cost community events, film screenings, or performances
                    at this historic venue.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Community Events */}
          <div className="activities-category mb-10">
            <div className="category-header mb-4 pb-2 border-b-2 border-primary">
              <h3 className="category-title text-2xl font-semibold text-primary">
                Community Events
              </h3>
            </div>
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="w-[40%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Activity
                  </th>
                  <th className="w-[60%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Concerts in the Park</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    During the summer, enjoy free outdoor concerts at Courthouse Square.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Library Programs</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    The Redwood City Public Library hosts free events, including storytimes,
                    workshops, and author talks.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Festivals and Street Fairs</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Look for free community events like the Redwood City Salsa Festival or Holiday
                    Parades.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Nature and Wildlife */}
          <div className="activities-category mb-10">
            <div className="category-header mb-4 pb-2 border-b-2 border-primary">
              <h3 className="category-title text-2xl font-semibold text-primary">
                Nature and Wildlife
              </h3>
            </div>
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="w-[40%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Activity
                  </th>
                  <th className="w-[60%] text-left p-4 font-semibold text-gray-900 text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">
                      Pulgas Ridge Open Space Preserve
                    </div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Hike the trails and enjoy panoramic views of the Bay Area.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Canoeing or Kayaking</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Rent an affordable kayak or paddleboard at the Marina for a fun day on the
                    water.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Downtown Exploration</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Window-shop, enjoy street performances, or grab an inexpensive treat at a
                    local café.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-200">
                    <div className="font-semibold text-gray-900">Geocaching</div>
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                    Explore the city and nearby areas by participating in this free
                    treasure-hunting activity.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeActivities; 