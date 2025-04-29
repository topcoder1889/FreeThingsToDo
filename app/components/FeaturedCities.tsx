'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cities = [
  { name: 'Bangkok', activities: 174, rating: 4.7 },
  { name: 'Paris', activities: 197, rating: 4.8 },
  { name: 'London', activities: 212, rating: 4.7 },
  { name: 'Dubai', activities: 134, rating: 4.6 },
  { name: 'Singapore', activities: 128, rating: 4.8 },
  { name: 'New York', activities: 205, rating: 4.7 },
  { name: 'Kuala Lumpur', activities: 115, rating: 4.5 },
  { name: 'Tokyo', activities: 162, rating: 4.8 },
  { name: 'Istanbul', activities: 136, rating: 4.7 },
  { name: 'Seoul', activities: 142, rating: 4.6 },
  { name: 'Hong Kong', activities: 128, rating: 4.6 },
  { name: 'Barcelona', activities: 156, rating: 4.7 },
  { name: 'Amsterdam', activities: 124, rating: 4.7 },
  { name: 'Milan', activities: 112, rating: 4.5 },
  { name: 'Taipei', activities: 108, rating: 4.6 },
  { name: 'Rome', activities: 145, rating: 4.8 },
  { name: 'Osaka', activities: 98, rating: 4.6 },
  { name: 'Vienna', activities: 116, rating: 4.7 },
  { name: 'Prague', activities: 122, rating: 4.7 }
];

export default function FeaturedCities() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400; // Adjust this value based on your card width
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-[2rem]">
      <div className="container">
        <div className="section-heading text-left mb-12">
          <h3 className="text-[2.2rem] font-semibold mb-4">Top 20 Cities Worldwide</h3>
          <p className="text-gray-600 max-w-2xl">
            Explore free activities in these popular global destinations
          </p>
        </div>
        
        <div className="cities-carousel-container relative">
          <h4 className="text-xl font-semibold mb-6">Popular Cities</h4>
          
          <div 
            ref={carouselRef}
            className="cities-carousel flex overflow-x-auto gap-8 px-2 py-4 scroll-smooth scrollbar-thin scrollbar-hide"
          >
            {cities.map((city) => (
              <div
                key={city.name}
                className="city-card min-w-[320px] bg-white rounded-2xl shadow-custom hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                    className="city-image w-[400px] h-[250px] bg-cover bg-center"
                    style={{ backgroundImage: "url('/api/placeholder/400/250')" }}
                ></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{city.name}</h4>
                  <div className="city-stats flex justify-between text-sm text-gray-600 mb-4">
                    <span>{city.activities} Activities</span>
                    <span>{city.rating} Rating</span>
                  </div>
                  <Link
                    href={`/city/${city.name.toLowerCase().replace(' ', '-')}`}
                    className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Explore <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls flex justify-end gap-4 mt-8">
            <button
              onClick={() => scroll('left')}
              className="carousel-control bg-white text-gray-800 border border-gray-200 rounded-full w-10 h-10 text-base flex items-center justify-center shadow hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="carousel-control bg-white text-gray-800 border border-gray-200 rounded-full w-10 h-10 text-base flex items-center justify-center shadow hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 