import { getFreeActivitiesData } from '../../data/city-free-activities';
import { useState } from 'react';
import Link from 'next/link';

interface FreeActivitiesProps {
  formattedCityName: string;
}

export default function FreeActivities({ formattedCityName }: FreeActivitiesProps) {
  const { categories } = getFreeActivitiesData(formattedCityName);
  const [activeCategory, setActiveCategory] = useState('All Activities');

  const formatTitleForUrl = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

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
            <button
              onClick={() => setActiveCategory('All Activities')}
              className={`px-6 py-3 rounded-[50px] text-[0.95rem] font-medium transition-colors ${
                activeCategory === 'All Activities'
                  ? 'bg-primary text-white'
                  : 'bg-accent text-gray-900 hover:bg-[#e5e5e5]'
              }`}
            >
              All Activities
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-[50px] text-[0.95rem] font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-primary text-white'
                    : 'bg-accent text-gray-900 hover:bg-[#e5e5e5]'
                }`}
              >
                {category.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {categories.map((category) => (
            <div
              key={category.name}
              className={`activities-category mb-10 ${
                activeCategory !== 'All Activities' && activeCategory !== category.name ? 'hidden' : ''
              }`}
            >
              <div className="category-header mb-4 pb-2 border-b-2 border-primary">
                <h3 className="category-title text-2xl font-semibold text-primary">
                  {category.name}
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
                  {category.activities.map((activity) => (
                    <tr key={activity.id}>
                      <td className="p-4 border-t border-gray-200">
                        <Link
                          href={`/activity/${formatTitleForUrl(activity.title)}`}
                          className="font-semibold text-gray-900 hover:text-primary transition-colors"
                        >
                          {activity.title}
                        </Link>
                      </td>
                      <td className="p-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                        {activity.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 