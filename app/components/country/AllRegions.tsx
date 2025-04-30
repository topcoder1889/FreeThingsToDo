import React from 'react';

interface AllRegionsProps {
  countryName: string;
}

const AllRegions: React.FC<AllRegionsProps> = ({ countryName }) => {
  return (
    <section className="all-regions py-12">
      <div className="container mx-auto px-4">
        <div className="section-header mb-12">
          <h2 className="section-title text-4xl font-semibold mb-4">All Regions</h2>
          <p className="section-subtitle text-gray-600">
            Browse free activities by region across {countryName}
          </p>
        </div>

        <div className="regions-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 1]
            </h3>
            <p className="region-count text-sm text-gray-600">58 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 2]
            </h3>
            <p className="region-count text-sm text-gray-600">42 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 3]
            </h3>
            <p className="region-count text-sm text-gray-600">35 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 4]
            </h3>
            <p className="region-count text-sm text-gray-600">29 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 5]
            </h3>
            <p className="region-count text-sm text-gray-600">51 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 6]
            </h3>
            <p className="region-count text-sm text-gray-600">37 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 7]
            </h3>
            <p className="region-count text-sm text-gray-600">44 Activities</p>
          </div>

          <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
            <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">
              [Region Name 8]
            </h3>
            <p className="region-count text-sm text-gray-600">22 Activities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRegions; 