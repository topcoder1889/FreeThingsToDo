'use client';

import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CountryPage() {
  const params = useParams();
  const countryName = params.country as string;
  const formattedCountryName = countryName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar variant="default" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/countries" className="hover:text-primary">Countries</a>
            <span className="text-gray-400">/</span>
            <span>{formattedCountryName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="country-hero relative">
        <div 
          className="bg-cover bg-center h-[500px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/api/placeholder/1200/600')`
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-4">
                {formattedCountryName}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover free activities, attractions, and cultural experiences across this beautiful and diverse country
              </p>
              
              <div className="country-quick-stats flex flex-wrap gap-8 mb-8">
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-2xl font-bold text-white">45+</span>
                  <span className="stat-label text-white/80 text-sm">Cities</span>
                </div>
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-2xl font-bold text-white">1,200+</span>
                  <span className="stat-label text-white/80 text-sm">Free Activities</span>
                </div>
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-2xl font-bold text-white">4.8</span>
                  <span className="stat-label text-white/80 text-sm">Traveler Rating</span>
                </div>
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-2xl font-bold text-white">10M+</span>
                  <span className="stat-label text-white/80 text-sm">Annual Visitors</span>
                </div>
              </div>
              
              <div className="country-actions flex gap-4">
                <a href="#top-destinations" className="btn btn-primary">Explore Top Cities</a>
                <a href="#travel-tips" className="inline-flex items-center justify-center py-3 px-6 rounded-full font-medium transition-all text-[0.9rem] tracking-[0.5px] border border-white text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-white hover:text-primary">Travel Tips</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Information Section */}
      <section className="country-info py-12">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">About {formattedCountryName}</h2>
            <p className="section-subtitle text-gray-600">Essential information to help you plan your visit</p>
          </div>
          
          <div className="info-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Key Facts Card */}
            <div className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
              <div className="info-card-header bg-primary text-white p-5 flex items-center gap-4">
                <div className="info-icon w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">📊</div>
                <h3 className="text-xl font-semibold">Key Facts</h3>
              </div>
              <div className="info-card-body p-6">
                <ul className="info-list">
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Capital</span>
                    <span className="info-value font-medium">[Capital City]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Population</span>
                    <span className="info-value font-medium">[Population]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Language</span>
                    <span className="info-value font-medium">[Official Languages]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Currency</span>
                    <span className="info-value font-medium">[Currency]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Time Zone</span>
                    <span className="info-value font-medium">[Time Zone]</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Travel Essentials Card */}
            <div className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
              <div className="info-card-header bg-primary text-white p-5 flex items-center gap-4">
                <div className="info-icon w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">🌍</div>
                <h3 className="text-xl font-semibold">Travel Essentials</h3>
              </div>
              <div className="info-card-body p-6">
                <ul className="info-list">
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Best Time to Visit</span>
                    <span className="info-value font-medium">[Seasons]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Visa Requirements</span>
                    <span className="info-value font-medium">[Requirements]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Public Transport</span>
                    <span className="info-value font-medium">[Availability Rating]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Safety</span>
                    <span className="info-value font-medium">[Safety Rating]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Budget (Daily)</span>
                    <span className="info-value font-medium">[Budget Range]</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Cultural Insights Card */}
            <div className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
              <div className="info-card-header bg-primary text-white p-5 flex items-center gap-4">
                <div className="info-icon w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">🎭</div>
                <h3 className="text-xl font-semibold">Cultural Insights</h3>
              </div>
              <div className="info-card-body p-6">
                <ul className="info-list">
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Traditional Cuisine</span>
                    <span className="info-value font-medium">[Key Dishes]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Annual Festivals</span>
                    <span className="info-value font-medium">[Major Festivals]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Cultural Etiquette</span>
                    <span className="info-value font-medium">[Key Customs]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Religion</span>
                    <span className="info-value font-medium">[Major Religions]</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="info-label text-gray-600 text-sm">Local Arts</span>
                    <span className="info-value font-medium">[Traditional Arts]</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section id="top-destinations" className="top-destinations py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">Top Cities & Destinations</h2>
            <p className="section-subtitle text-gray-600">Explore the most popular cities and regions for free activities</p>
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
                <h3 className="destination-name text-xl font-semibold mb-2 text-gray-900">[City Name 1]</h3>
                <div className="destination-stats flex gap-6 mb-4 text-sm text-gray-600">
                  <div className="destination-stat flex items-center gap-2">
                    <span>📍 95 Activities</span>
                  </div>
                  <div className="destination-stat flex items-center gap-2">
                    <span>⭐ 4.9 Rating</span>
                  </div>
                </div>
                <p className="destination-description text-gray-700 text-sm mb-4 leading-relaxed">
                  Experience the vibrant culture and rich history of [City Name 1], known for its breathtaking architecture, lively markets, and stunning natural surroundings.
                </p>
                <a href="#" className="destination-link text-primary font-medium text-sm flex items-center gap-1 hover:underline">
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
                <h3 className="destination-name text-xl font-semibold mb-2 text-gray-900">[City Name 2]</h3>
                <div className="destination-stats flex gap-6 mb-4 text-sm text-gray-600">
                  <div className="destination-stat flex items-center gap-2">
                    <span>📍 78 Activities</span>
                  </div>
                  <div className="destination-stat flex items-center gap-2">
                    <span>⭐ 4.7 Rating</span>
                  </div>
                </div>
                <p className="destination-description text-gray-700 text-sm mb-4 leading-relaxed">
                  Discover the charm of [City Name 2] with its family-friendly attractions, cultural landmarks, and beautiful beaches that offer something for visitors of all ages.
                </p>
                <a href="#" className="destination-link text-primary font-medium text-sm flex items-center gap-1 hover:underline">
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
                <h3 className="destination-name text-xl font-semibold mb-2 text-gray-900">[City Name 3]</h3>
                <div className="destination-stats flex gap-6 mb-4 text-sm text-gray-600">
                  <div className="destination-stat flex items-center gap-2">
                    <span>📍 65 Activities</span>
                  </div>
                  <div className="destination-stat flex items-center gap-2">
                    <span>⭐ 4.8 Rating</span>
                  </div>
                </div>
                <p className="destination-description text-gray-700 text-sm mb-4 leading-relaxed">
                  Explore the natural wonders surrounding [City Name 3], from stunning mountain trails to pristine lakes and unique wildlife viewing opportunities.
                </p>
                <a href="#" className="destination-link text-primary font-medium text-sm flex items-center gap-1 hover:underline">
                  Explore activities →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Regions Section */}
      <section className="all-regions py-12">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">All Regions</h2>
            <p className="section-subtitle text-gray-600">Browse free activities by region across {formattedCountryName}</p>
          </div>
          
          <div className="regions-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 1]</h3>
              <p className="region-count text-sm text-gray-600">58 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 2]</h3>
              <p className="region-count text-sm text-gray-600">42 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 3]</h3>
              <p className="region-count text-sm text-gray-600">35 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 4]</h3>
              <p className="region-count text-sm text-gray-600">29 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 5]</h3>
              <p className="region-count text-sm text-gray-600">51 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 6]</h3>
              <p className="region-count text-sm text-gray-600">37 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 7]</h3>
              <p className="region-count text-sm text-gray-600">44 Activities</p>
            </div>
            
            <div className="region-item bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <h3 className="region-name text-lg font-semibold mb-2 text-gray-900">[Region Name 8]</h3>
              <p className="region-count text-sm text-gray-600">22 Activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Cities Section */}
      <section className="all-cities py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="cities-container bg-white rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="section-header mb-12">
              <h2 className="section-title text-4xl font-semibold mb-4">All Cities</h2>
              <p className="section-subtitle text-gray-600">Complete directory of cities with free activities in {formattedCountryName}</p>
            </div>
            
            <div className="city-filters flex flex-col gap-4 mb-8">
              <div className="alphabet-filter flex flex-wrap gap-2 pb-4 border-b border-gray-200">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
                  <a 
                    key={letter} 
                    href={`#letter-${letter.toLowerCase()}`} 
                    className={`letter w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-sm font-medium transition-colors hover:bg-primary hover:text-white ${letter === 'A' ? 'bg-primary text-white' : 'text-gray-900'}`}
                  >
                    {letter}
                  </a>
                ))}
              </div>
              
              <div className="filter-bar flex flex-wrap items-center justify-between gap-4 py-4">
                <div className="search-container relative flex-1 max-w-[250px]">
                  <input 
                    type="text" 
                    className="search-input w-full px-4 py-2 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" 
                    placeholder="Search cities..."
                  />
                  <button className="search-button absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                    🔍
                  </button>
                </div>
                
                <div className="filter-options flex gap-3 flex-wrap">
                  <select className="filter-select px-4 py-2 border border-gray-300 rounded-full text-sm min-w-[120px] focus:outline-none focus:border-primary">
                    <option value="all">All Regions</option>
                    <option value="region1">[Region 1]</option>
                    <option value="region2">[Region 2]</option>
                    <option value="region3">[Region 3]</option>
                  </select>
                  
                  <select className="filter-select px-4 py-2 border border-gray-300 rounded-full text-sm min-w-[120px] focus:outline-none focus:border-primary">
                    <option value="all">Any Size</option>
                    <option value="large">Large Cities</option>
                    <option value="medium">Medium Cities</option>
                    <option value="small">Small Cities</option>
                  </select>
                  
                  <select className="filter-select px-4 py-2 border border-gray-300 rounded-full text-sm min-w-[120px] focus:outline-none focus:border-primary">
                    <option value="name">Sort: A-Z</option>
                    <option value="popular">Sort: Most Popular</option>
                    <option value="activities">Sort: Most Activities</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="cities-list">
              {/* A Section */}
              <div id="letter-a" className="letter-section mb-10">
                <h3 className="letter-heading text-xl font-semibold text-primary mb-4 pb-2 border-b-2 border-gray-200">A</h3>
                <div className="cities-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Alicante</div>
                    <div className="city-info text-sm opacity-80">28 Activities</div>
                  </a>
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Almería</div>
                    <div className="city-info text-sm opacity-80">16 Activities</div>
                  </a>
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Avila</div>
                    <div className="city-info text-sm opacity-80">22 Activities</div>
                  </a>
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Algeciras</div>
                    <div className="city-info text-sm opacity-80">14 Activities</div>
                  </a>
                </div>
              </div>
              
              {/* B Section */}
              <div id="letter-b" className="letter-section mb-10">
                <h3 className="letter-heading text-xl font-semibold text-primary mb-4 pb-2 border-b-2 border-gray-200">B</h3>
                <div className="cities-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Barcelona</div>
                    <div className="city-info text-sm opacity-80">95 Activities</div>
                  </a>
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Bilbao</div>
                    <div className="city-info text-sm opacity-80">42 Activities</div>
                  </a>
                  <a href="#" className="city-item block p-4 bg-gray-100 rounded-lg transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
                    <div className="city-name font-medium mb-1">Burgos</div>
                    <div className="city-info text-sm opacity-80">31 Activities</div>
                  </a>
                </div>
              </div>
              
              {/* Show More Button */}
              <div className="show-more-container text-center mt-8">
                <button className="show-more-btn px-8 py-3 bg-white border border-gray-300 rounded-full text-gray-900 font-medium text-sm transition-colors hover:bg-primary hover:text-white hover:border-primary">
                  Show More Cities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section id="travel-tips" className="travel-tips py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="tips-container bg-white rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h2 className="tips-title text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-3">
              <span className="tips-icon text-primary">✈️</span>
              Travel Tips for {formattedCountryName}
            </h2>
            
            <div className="tips-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="tip-item flex gap-4">
                <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                  💰
                </div>
                <div className="tip-content">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Money Saving</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Use local public transportation instead of taxis, visit museums on their free days (often the first Sunday of the month), and eat at local markets for authentic and affordable meals.
                  </p>
                </div>
              </div>
              
              <div className="tip-item flex gap-4">
                <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                  🗓️
                </div>
                <div className="tip-content">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Best Times to Visit</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The shoulder seasons (April-May and September-October) offer pleasant weather, fewer crowds, and often lower prices. Avoid the peak summer season for a more authentic experience.
                  </p>
                </div>
              </div>
              
              <div className="tip-item flex gap-4">
                <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                  🚆
                </div>
                <div className="tip-content">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Getting Around</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Purchase a transit pass for unlimited travel on public transportation. The high-speed rail network connects major cities efficiently, while regional trains offer scenic routes through the countryside.
                  </p>
                </div>
              </div>
              
              <div className="tip-item flex gap-4">
                <div className="tip-icon w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary">
                  🍽️
                </div>
                <div className="tip-content">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Local Cuisine</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore local food markets and try regional specialties. Most cities have affordable lunch menus at restaurants during weekdays, offering a great value for experiencing authentic cuisine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 my-16">
        <section 
          className="cta rounded-[20px] py-24 text-center text-white"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/api/placeholder/1200/600') center/cover no-repeat`
          }}
        >
          <h2 className="text-4xl font-semibold mb-6">Start Planning Your {formattedCountryName} Adventure</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 font-light">
            Discover hundreds of free activities and experiences across {formattedCountryName}'s most beautiful cities and regions.
          </p>
          
          <div className="cta-buttons flex gap-4 justify-center">
            <a href="#top-destinations" className="btn btn-primary">Explore Top Cities</a>
            <a href="#" className="inline-flex items-center justify-center py-3 px-6 rounded-full font-medium transition-all text-[0.9rem] tracking-[0.5px] border border-white text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-white hover:text-primary">Create Custom Itinerary</a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
} 