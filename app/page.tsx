'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import FeaturedCities from './components/FeaturedCities';
import CountriesByContinent from './components/CountriesByContinent';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import RecentlyAddedActivities from './components/RecentlyAddedActivities';
import Footer from './components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-r from-black/20 to-black/40">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3000&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover -z-10"
          priority
        />
        
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Discover Free Things To Do Anywhere
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Explore thousands of cost-free activities, attractions, and events in cities around the world.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2 bg-white rounded-full p-2 shadow-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter a city name"
                className="flex-1 px-6 py-3 border-none outline-none rounded-full text-dark"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
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