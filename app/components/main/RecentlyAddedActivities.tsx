'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export default function RecentlyAddedActivities() {
  const [activities] = useState<Activity[]>([
    {
      id: '1',
      title: 'Central Park Walking Tour',
      description:
        'Explore the iconic Central Park with a knowledgeable guide, discovering hidden gems and famous landmarks.',
      location: 'New York City, USA',
      rating: 4.8,
      reviewCount: 87,
      imageUrl:
        'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=3000&auto=format&fit=crop',
    },
    {
      id: '2',
      title: 'Louvre Museum Free Day',
      description: "Visit the world's largest art museum on its monthly free admission day.",
      location: 'Paris, France',
      rating: 4.9,
      reviewCount: 124,
      imageUrl:
        'https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=3000&auto=format&fit=crop',
    },
    {
      id: '3',
      title: 'Shibuya Crossing Experience',
      description:
        'Experience the famous Shibuya Crossing and explore the vibrant surrounding area.',
      location: 'Tokyo, Japan',
      rating: 4.7,
      reviewCount: 56,
      imageUrl:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=3000&auto=format&fit=crop',
    },
  ]);

  return (
    <section>
      <div className="container">
        <div className="mb-16">
          <h3 className="text-[2.2rem] font-semibold mb-4 tracking-[0.5px]">
            Recently Added Activities
          </h3>
          <p className="text-gray-600 max-w-2xl">
            Check out the latest free activities added to our platform
          </p>
        </div>

        <div className="activities-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map(activity => (
            <div
              key={activity.id}
              className="activity-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            >
              <div
                className="activity-image h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${activity.imageUrl})` }}
              />

              <div className="activity-content p-6">
                <h3 className="activity-title text-xl font-semibold mb-2 text-gray-900">
                  {activity.title}
                </h3>

                <p className="activity-location text-sm text-gray-600 mb-2 flex items-center gap-1">
                  📍 {activity.location}
                </p>

                <div className="activity-rating flex items-center gap-2 text-[#f5a623] text-sm mb-4">
                  {'★'.repeat(Math.floor(activity.rating))}
                  {'☆'.repeat(5 - Math.floor(activity.rating))}
                  <span className="text-gray-600">({activity.reviewCount} reviews)</span>
                </div>

                <Link
                  href={`/activity/${activity.title.toLowerCase().replace(/ /g, '-')}`}
                  className="text-primary font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
