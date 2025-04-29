'use client';

import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { itineraries } from '../../data/itineraries';
import { useState, useRef } from 'react';
import { neighborhoods } from '../../data/neighborhoods';
import { infoCards, insightCards } from '../../data/practical-info';
import { nearbyCities } from '../../data/nearby-cities';

export default function CityPage() {
  const params = useParams();
  const cityName = params.city as string;
  const formattedCityName = cityName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const [activeItinerary, setActiveItinerary] = useState(itineraries[0].id);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('*');
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const gap = parseInt(window.getComputedStyle(carouselRef.current).gap);
        const scrollAmount = (cardWidth + gap) * 2;

        carouselRef.current.scrollBy({
          left: direction === 'prev' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar variant="overlay" />

      {/* Hero Section */}
      <section className="city-hero relative">
        <div
          className="bg-cover bg-center h-[70vh] min-h-[500px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/simpleview/image/upload/v1529100229/clients/sanmateoca/Downtown_RedwoodCity_Sign_SanMateoCounty_SiliconValley_a6da8469-e804-4c8d-9f87-fe77c733c027.jpg')`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex gap-2 text-sm text-white/80 mb-6">
                <a href="/" className="text-white hover:underline">
                  Home
                </a>
                <span className="text-white/60">/</span>
                <a href="/countries" className="text-white hover:underline">
                  USA
                </a>
                <span className="text-white/60">/</span>
                <a href="/country/usa" className="text-white hover:underline">
                  California
                </a>
                <span className="text-white/60">/</span>
                <span className="text-white">{formattedCityName}</span>
              </div>

              <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
                {formattedCityName}
              </h1>
              <p className="text-2xl font-light text-white/90 mb-8 max-w-[70%]">
                Silicon Valley's Historic Peninsula Hub
              </p>

              <div className="city-quick-stats flex flex-wrap gap-8 mb-10">
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-3xl font-bold text-white">86,754</span>
                  <span className="stat-label text-white/80 text-sm">Population</span>
                </div>
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-3xl font-bold text-white">19.4 mi²</span>
                  <span className="stat-label text-white/80 text-sm">Area</span>
                </div>
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-3xl font-bold text-white">4.7</span>
                  <span className="stat-label text-white/80 text-sm">Visitor Rating</span>
                </div>
                <div className="stat-item flex flex-col">
                  <span className="stat-value text-3xl font-bold text-white">25 mi</span>
                  <span className="stat-label text-white/80 text-sm">From San Francisco</span>
                </div>
              </div>

              <div className="city-actions flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-3 px-6 rounded-[50px] font-medium transition-all text-[0.9rem] tracking-[0.5px] bg-white text-primary border border-white hover:bg-primary hover:text-white hover:border-primary"
                >
                  <span className="w-[18px] h-[18px] inline-block leading-none">♥</span>
                  <span>Save to Favorites</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-3 px-6 rounded-[50px] font-medium transition-all text-[0.9rem] tracking-[0.5px] text-white border border-white bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] hover:bg-white hover:text-primary"
                >
                  <span className="w-[18px] h-[18px] inline-block leading-none">⟳</span>
                  <span>Share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
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

      {/* City Overview */}
      <section id="overview" className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">City Overview</h2>
            <p className="section-subtitle text-gray-600">
              Discover what makes {formattedCityName} a unique destination on the San Francisco
              Peninsula.
            </p>
          </div>

          <div className="flex gap-8 items-start mb-[-2rem]">
            <div className="flex-[2]">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Situated at the heart of the San Francisco Peninsula, {formattedCityName} offers a
                perfect blend of Silicon Valley innovation and rich California history. Named for
                the redwood lumber that was once shipped through its port, this vibrant city has
                emerged as a cultural and technological hub with a warm Mediterranean climate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The city's historic downtown features a beautifully restored courthouse and a lively
                theater scene, making it a popular destination for both residents and visitors. With
                its motto "Climate Best By Government Test" — the city enjoys sunny days perfect for
                exploring its numerous parks, trails, and bay shoreline.
              </p>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="bg-primary text-white p-5">
                  <h3 className="text-xl font-semibold">Essential Information</h3>
                </div>
                <div className="p-4">
                  <ul className="text-sm">
                    <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">Best Time to Visit</span>
                      <span className="font-medium">Apr-Oct</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">Closest Airport</span>
                      <span className="font-medium">SFO (9 miles)</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">Public Transit</span>
                      <span className="font-medium">CalTrain, SamTrans</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">Walkability Score</span>
                      <span className="font-medium">76/100</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">Avg. Summer High</span>
                      <span className="font-medium">78°F</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">Avg. Winter Low</span>
                      <span className="font-medium">42°F</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Map */}
      <section className="py-8 pb-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              Explore Free Activities in {formattedCityName}
            </h3>
            <div className="relative rounded-xl overflow-hidden mb-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
              <img
                src="/api/placeholder/1200/500"
                alt={`Map of ${formattedCityName} Activities`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0">
                <div className="absolute" style={{ top: '40%', left: '50%' }}>
                  <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                    Downtown
                  </div>
                </div>
                <div className="absolute" style={{ top: '30%', left: '30%' }}>
                  <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                    Edgewood Park
                  </div>
                </div>
                <div className="absolute" style={{ top: '60%', left: '70%' }}>
                  <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                    Marina & Bair Island
                  </div>
                </div>
                <div className="absolute" style={{ top: '20%', left: '65%' }}>
                  <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                    Redwood Shores
                  </div>
                </div>
                <div className="absolute" style={{ top: '50%', left: '20%' }}>
                  <div className="w-4 h-4 bg-primary rounded-full border-3 border-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] relative z-10"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                    Pulgas Ridge
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-8 flex-wrap mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#3a8bbb]"></span>
                <span className="text-sm text-gray-600">Outdoor Activities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e67e22]"></span>
                <span className="text-sm text-gray-600">Cultural & Historical</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#27ae60]"></span>
                <span className="text-sm text-gray-600">Community Events</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#9b59b6]"></span>
                <span className="text-sm text-gray-600">Nature & Wildlife</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Things To Do */}
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

      {/* Itineraries */}
      <section id="itineraries" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">Suggested Itineraries</h2>
            <p className="section-subtitle text-gray-600">
              Ready-made plans to help you make the most of your visit to {formattedCityName}.
            </p>
          </div>

          <div className="itinerary-tabs flex gap-8 border-b border-gray-200 mb-8">
            {itineraries.map(itinerary => (
              <button
                key={itinerary.id}
                className={`itinerary-tab py-4 font-medium text-gray-600 relative cursor-pointer transition-colors hover:text-primary ${
                  activeItinerary === itinerary.id ? 'text-primary' : ''
                }`}
                onClick={() => setActiveItinerary(itinerary.id)}
              >
                {itinerary.title.split(':')[0]}
                {activeItinerary === itinerary.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                )}
              </button>
            ))}
          </div>

          <div className="itinerary-content flex gap-12">
            <div className="itinerary-map flex-1 h-[400px] bg-gray-200 rounded-xl overflow-hidden">
              <img
                src="/images/demo-map.jpg"
                alt="Itinerary Map"
                className="w-full h-full object-cover"
                onError={e => {
                  e.currentTarget.src =
                    'https://placehold.co/600x400/3a8bbb/ffffff?text=Itinerary+Map';
                }}
              />
            </div>

            <div className="itinerary-details flex-1">
              {itineraries.map(itinerary => (
                <div
                  key={itinerary.id}
                  className={`${activeItinerary === itinerary.id ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-2xl font-semibold mb-6">{itinerary.title}</h3>
                  <p className="text-gray-700 mb-8">{itinerary.description}</p>

                  <ul className="itinerary-timeline relative pl-8">
                    <div className="absolute top-0 left-2 w-0.5 h-full bg-gray-200"></div>
                    {itinerary.items.map((item, index) => (
                      <li key={index} className="itinerary-item relative pb-8">
                        <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_2px_#3a8bbb]"></div>
                        <div className="text-sm text-gray-600 mb-1">{item.time}</div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">
              {formattedCityName} Neighborhoods
            </h2>
            <p className="section-subtitle text-gray-600">
              Discover the diverse districts that give {formattedCityName} its unique character.
            </p>
          </div>

          <div className="neighborhoods-summary">
            <p className="neighborhoods-intro text-gray-700 mb-12 max-w-3xl">
              {formattedCityName} is composed of distinctive neighborhoods, each with its own charm
              and personality. From the vibrant downtown core to peaceful residential hills, these
              areas offer different experiences for visitors exploring the city.
            </p>

            <div className="neighborhood-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {neighborhoods.map(neighborhood => (
                <div
                  key={neighborhood.id}
                  className="neighborhood-summary bg-white rounded-[16px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex gap-6">
                    <div className="neighborhood-icon w-12 h-12 rounded-full bg-[rgba(58,139,187,0.1)] flex items-center justify-center text-2xl">
                      {neighborhood.icon}
                    </div>
                    <div className="neighborhood-content flex-1">
                      <h3 className="neighborhood-name text-xl font-semibold mb-2">
                        {neighborhood.name}
                      </h3>
                      <p className="neighborhood-description text-gray-700 text-sm mb-4">
                        {neighborhood.description}
                      </p>
                      <div className="neighborhood-features flex flex-wrap gap-2">
                        {neighborhood.features.map((feature, index) => (
                          <span
                            key={index}
                            className="neighborhood-feature text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information & Local Insights */}
      <section id="practical-info" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">
              Practical Information & Local Insights
            </h2>
            <p className="section-subtitle text-gray-600">
              Essential details and insider tips to help you plan and enjoy your visit to{' '}
              {formattedCityName}.
            </p>
          </div>

          <div className="insights-tabs flex gap-4 mb-8">
            <div className="insights-tab active px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-primary text-white">
              Essential Info
            </div>
            <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Getting Around
            </div>
            <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Where to Stay
            </div>
            <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Hidden Gems
            </div>
            <div className="insights-tab px-6 py-3 rounded-[50px] text-[0.95rem] font-medium bg-white text-gray-900 hover:bg-[#e5e5e5] transition-colors">
              Local Tips
            </div>
          </div>

          <div className="practical-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="info-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="info-card-header p-6 border-b border-gray-200 flex items-center gap-4">
                  <div className="info-icon w-10 h-10 rounded-full bg-[rgba(58,139,187,0.1)] flex items-center justify-center text-xl">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
                <div className="info-card-body p-6">
                  <p className="text-gray-700 text-[0.95rem] mb-4">{card.description}</p>
                  <ul className="space-y-3">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 text-[0.95rem] flex items-start gap-3 border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <span className="text-primary font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header mb-12">
            <h3 className="text-[1.8rem] font-semibold mb-4">Local Insights</h3>
            <p className="text-gray-600 mb-8">
              Tips, recommendations, and insider knowledge from residents and frequent visitors.
            </p>
          </div>

          <div className="insights-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {insightCards.map((card, index) => (
              <div
                key={index}
                className="insight-card bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="insight-content p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{card.title}</h3>
                  <p className="text-gray-700 text-[0.95rem] leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section id="nearby" className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-4xl font-semibold mb-4">Nearby Cities</h2>
            <p className="section-subtitle text-gray-600">
              Explore more destinations within easy reach of {formattedCityName}.
            </p>
          </div>

          <div
            ref={carouselRef}
            className="related-cities-carousel flex gap-8 overflow-x-auto py-4 px-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {nearbyCities.map((city, index) => (
              <div
                key={index}
                className="related-city-card flex-none w-[280px] bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              >
                <div
                  className="related-city-image h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${city.imageUrl})` }}
                ></div>
                <div className="related-city-content p-5">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{city.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{city.description}</p>
                  <div className="city-distance text-gray-600 text-sm flex items-center gap-2">
                    {city.distance}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls flex justify-center gap-4 mt-8">
            <button
              onClick={() => scrollCarousel('prev')}
              className="carousel-control w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.05)] transition-all hover:bg-primary hover:text-white hover:border-primary"
            >
              ←
            </button>
            <button
              onClick={() => scrollCarousel('next')}
              className="carousel-control w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.05)] transition-all hover:bg-primary hover:text-white hover:border-primary"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container mx-auto px-4 my-16">
        <section
          className="cta rounded-[20px] py-24 text-center text-white"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1582767756089-a7a1158fad9e?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat`,
          }}
        >
          <h2 className="text-4xl font-semibold mb-6">Plan Your Visit to {formattedCityName}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 font-light">
            Ready to explore this vibrant Peninsula destination? Start planning your itinerary and
            discover the many free things to do in {formattedCityName}.
          </p>

          <div className="cta-buttons flex gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-6 rounded-[50px] font-medium transition-all text-[0.9rem] tracking-[0.5px] bg-primary text-white border border-primary hover:bg-white hover:text-primary"
            >
              <span className="w-[18px] h-[18px] inline-block leading-none mr-2">🗺️</span>
              Create Custom Itinerary
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
