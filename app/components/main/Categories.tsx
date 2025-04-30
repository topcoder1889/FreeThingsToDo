'use client';

import { useState } from 'react';

const categories = [
  {
    icon: '🥾',
    title: 'Walks & Hiking Trails',
    description: 'Urban walks, nature trails, and scenic routes',
  },
  {
    icon: '🏛️',
    title: 'Museums & Galleries',
    description: 'Free entry days and exhibitions',
  },
  {
    icon: '🌳',
    title: 'Parks & Nature',
    description: 'Outdoor spaces and scenic spots',
  },
  {
    icon: '🏖️',
    title: 'Beaches & Waterfronts',
    description: 'Public beaches, lake shores, and riverfront areas',
  },
  {
    icon: '🎪',
    title: 'Festivals & Events',
    description: 'Seasonal celebrations and community gatherings',
  },
  {
    icon: '🏙️',
    title: 'Sightseeing',
    description: 'Landmarks and attractions',
  },
  {
    icon: '🎭',
    title: 'Arts & Culture',
    description: 'Performances and cultural events',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family & Kids',
    description: 'Playgrounds, splash pads, and family activities',
  },
];

const additionalCategories = [
  {
    icon: '🎵',
    title: 'Live Music',
    description: 'Free concerts and performances',
  },
  {
    icon: '🏛️',
    title: 'Historical Sites',
    description: 'Monuments, historical districts, and heritage locations',
  },
  {
    icon: '🛒',
    title: 'Markets & Street Food',
    description: 'Farmers markets and craft fairs (free to browse)',
  },
  {
    icon: '🎓',
    title: 'Educational',
    description: 'Free lectures, workshops, and learning opportunities',
  },
  {
    icon: '📸',
    title: 'Viewpoints & Photography',
    description: 'Scenic overlooks, skylines, and photo spots',
  },
  {
    icon: '⛪',
    title: 'Religious Sites',
    description: 'Churches, temples, and places of worship open to visitors',
  },
  {
    icon: '🧭',
    title: 'Self-Guided Tours',
    description: 'Downloadable walking routes and audio guides',
  },
  {
    icon: '🍁',
    title: 'Seasonal Activities',
    description: 'Leaf peeping, cherry blossoms, holiday displays',
  },
  {
    icon: '📚',
    title: 'Libraries & Reading Spaces',
    description: 'Public libraries with free access and programs',
  },
  {
    icon: '🏀',
    title: 'Sports & Recreation',
    description: 'Public courts, fields, and recreational facilities',
  },
];

export default function Categories() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-gray-50 mb-24">
      <div className="container">
        <div className="section-heading mb-12">
          <h3 className="text-[2.2rem] font-semibold mb-4">Browse By Category</h3>
          <p className="text-gray-600">Find free activities based on your interests</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card bg-white p-10 px-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center h-full"
            >
              <div
                className="category-icon w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10
                            text-primary text-4xl"
              >
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-dark">{category.title}</h4>
              <p className="text-[0.95rem] text-[#666]">{category.description}</p>
            </div>
          ))}
        </div>

        <div className={`${showAll ? 'block' : 'hidden'}`}>
          {additionalCategories.map((category, index) => (
            <div
              key={index}
              className="category-card bg-white p-10 px-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center h-full"
            >
              <div className="category-icon w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-4xl">
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-dark">{category.title}</h4>
              <p className="text-[0.95rem] text-[#666]">{category.description}</p>
            </div>
          ))}
        </div>

        <div>
          <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">
            {showAll ? 'Show fewer categories' : 'Show all categories'}
          </button>
        </div>
      </div>
    </section>
  );
}
