'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import FeaturedCities from './components/main/FeaturedCities';
import CountriesByContinent from './components/main/CountriesByContinent';
import Categories from './components/main/Categories';
import HowItWorks from './components/main/HowItWorks';
import RecentlyAddedActivities from './components/main/RecentlyAddedActivities';
import Footer from './components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {};

  return (
    <main>
      <Navbar variant="overlay" />

      {/* Hero Section */}
      <section className="hero relative h-screen min-h-[600px] flex items-center bg-gradient-to-b from-black/20 to-black/40 mb-16">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3000&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover object-center -z-10"
          priority
        />

        <div className="container text-center text-white pt-[6rem]">
          <h2 className="text-[3.5rem] mb-6 font-semibold tracking-wide leading-tight">
            Discover Free Things To Do Anywhere
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 font-light">
            Explore thousands of cost-free activities, attractions, and events in cities around the
            world.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-full p-2 shadow-lg overflow-hidden relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Enter a city name..."
                className="flex-1 px-6 py-3 border-none outline-none text-base bg-transparent text-black"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-[#2c7aa8] transition-colors"
              >
                Find Activities
              </button>
            </div>
          </form>
        </div>
      </section>

      <FeaturedCities />
      <Categories />
      <CountriesByContinent />
      <RecentlyAddedActivities />
      <HowItWorks />
      <Footer />
    </main>
  );
}
