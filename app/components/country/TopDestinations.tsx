import React from 'react';

const TopDestinations: React.FC = () => {
  return (
    <section id="top-destinations" className="top-destinations py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">Top Cities & Destinations</h2>
          <p className="section-subtitle text-gray-600">
            Explore the most popular cities and regions for free activities
          </p>
        </div>

        <div className="destinations-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* City 1 */}
          <div className="destination-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <div
              className="destination-image h-[200px] bg-cover bg-center relative"
              style={{ backgroundImage: "url('/api/placeholder/600/400')" }}
            >
              <div className="destination-badge absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                Most Popular
              </div>
            </div>
            <div className="destination-content p-6">
              <h3 className="destination-name text-xl font-semibold mb-2 text-gray-900">
                [City Name 1]
              </h3>
              <div className="destination-stats flex gap-6 mb-4 text-sm text-gray-600">
                <div className="destination-stat flex items-center gap-2">
                  <span>📍 95 Activities</span>
                </div>
                <div className="destination-stat flex items-center gap-2">
                  <span>⭐ 4.9 Rating</span>
                </div>
              </div>
              <p className="destination-description text-gray-700 text-sm mb-4 leading-relaxed">
                Experience the vibrant culture and rich history of [City Name 1], known for its
                breathtaking architecture, lively markets, and stunning natural surroundings.
              </p>
              <a
                href="#"
                className="destination-link text-primary font-medium text-sm flex items-center gap-1 hover:underline"
              >
                Explore activities →
              </a>
            </div>
          </div>

          {/* City 2 */}
          <div className="destination-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <div
              className="destination-image h-[200px] bg-cover bg-center relative"
              style={{ backgroundImage: "url('/api/placeholder/600/400')" }}
            >
              <div className="destination-badge absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                Family-Friendly
              </div>
            </div>
            <div className="destination-content p-6">
              <h3 className="destination-name text-xl font-semibold mb-2 text-gray-900">
                [City Name 2]
              </h3>
              <div className="destination-stats flex gap-6 mb-4 text-sm text-gray-600">
                <div className="destination-stat flex items-center gap-2">
                  <span>📍 78 Activities</span>
                </div>
                <div className="destination-stat flex items-center gap-2">
                  <span>⭐ 4.7 Rating</span>
                </div>
              </div>
              <p className="destination-description text-gray-700 text-sm mb-4 leading-relaxed">
                Discover the charm of [City Name 2] with its family-friendly attractions, cultural
                landmarks, and beautiful beaches that offer something for visitors of all ages.
              </p>
              <a
                href="#"
                className="destination-link text-primary font-medium text-sm flex items-center gap-1 hover:underline"
              >
                Explore activities →
              </a>
            </div>
          </div>

          {/* City 3 */}
          <div className="destination-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <div
              className="destination-image h-[200px] bg-cover bg-center relative"
              style={{ backgroundImage: "url('/api/placeholder/600/400')" }}
            >
              <div className="destination-badge absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                Nature Lovers
              </div>
            </div>
            <div className="destination-content p-6">
              <h3 className="destination-name text-xl font-semibold mb-2 text-gray-900">
                [City Name 3]
              </h3>
              <div className="destination-stats flex gap-6 mb-4 text-sm text-gray-600">
                <div className="destination-stat flex items-center gap-2">
                  <span>📍 65 Activities</span>
                </div>
                <div className="destination-stat flex items-center gap-2">
                  <span>⭐ 4.8 Rating</span>
                </div>
              </div>
              <p className="destination-description text-gray-700 text-sm mb-4 leading-relaxed">
                Explore the natural wonders surrounding [City Name 3], from stunning mountain
                trails to pristine lakes and unique wildlife viewing opportunities.
              </p>
              <a
                href="#"
                className="destination-link text-primary font-medium text-sm flex items-center gap-1 hover:underline"
              >
                Explore activities →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations; 