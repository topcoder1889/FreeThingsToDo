// app/components/city/FreeActivities.tsx
'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

interface Activity {
  building_name: string;
  activity_description: string;
}

interface FreeActivitiesProps {
  formattedCityName: string;
  activitiesData: {
    outdoor_activities: Activity[];
    cultural_and_historical: Activity[];
    community_events: Activity[];
    nature_and_wildlife: Activity[];
  };
  cityId: number;
}

const FreeActivities: FC<FreeActivitiesProps> = ({ formattedCityName, activitiesData, cityId }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      id: 'all',
      title: 'All Activities',
      activities: [
        ...activitiesData.outdoor_activities,
        ...activitiesData.cultural_and_historical,
        ...activitiesData.community_events,
        ...activitiesData.nature_and_wildlife
      ]
    },
    {
      id: 'outdoor',
      title: 'Outdoor',
      activities: activitiesData.outdoor_activities
    },
    {
      id: 'cultural',
      title: 'Cultural',
      activities: activitiesData.cultural_and_historical
    },
    {
      id: 'community',
      title: 'Community Events',
      activities: activitiesData.community_events
    },
    {
      id: 'nature',
      title: 'Nature & Wildlife',
      activities: activitiesData.nature_and_wildlife
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? categories.slice(1) // Show all categories except 'all'
    : [categories.find(cat => cat.id === activeTab)!];

  const formatActivityUrl = (activityName: string): string => {
    return `/activity/${activityName.toLowerCase().replace(/ /g, '-')}`;
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
          <div className="category-tabs flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`category-tab px-6 py-3 rounded-full text-[0.95rem] font-medium whitespace-nowrap transition-all duration-300
                  ${activeTab === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {filteredCategories.map((category) => (
            <div key={category.id} className="activities-category mb-10">
              <div className="category-header mb-4">
                <h3 className="category-title text-xl font-semibold text-primary border-b-2 border-primary pb-2">
                  {category.title}
                </h3>
              </div>
              
              <table className="activities-table w-full border-collapse bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 w-[40%]">Activity</th>
                    <th className="text-left p-4 font-semibold text-gray-900 w-[60%]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {category.activities.map((activity, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <Link 
                          href={formatActivityUrl(activity.building_name)}
                          className="activity-name font-semibold text-gray-900 hover:text-primary transition-colors block"
                        >
                          {activity.building_name}
                        </Link>
                      </td>
                      <td className="p-4 text-gray-600">
                        {activity.activity_description}
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
};

export default FreeActivities;