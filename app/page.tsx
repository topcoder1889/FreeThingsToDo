// app/page.tsx

import Image from 'next/image';
import Navbar from './components/Navbar';
import FeaturedCities from './components/main/FeaturedCities';
import CountriesByContinent from './components/main/CountriesByContinent';
import Categories from './components/main/Categories';
import HowItWorks from './components/main/HowItWorks';
import RecentlyAddedActivities from './components/main/RecentlyAddedActivities';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <main>
      <Navbar variant="overlay" />

      <section className="hero relative h-screen min-h-[600px] flex items-center bg-gradient-to-b from-black/20 to-black/40 mb-16">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3000&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover object-center -z-10"
          priority
        />

        <div className="container text-center text-white pt-[6rem] px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] mb-4 sm:mb-6 font-semibold tracking-wide leading-tight">
            Discover Free Things To Do Anywhere
          </h2>
          <p className="text-lg sm:text-xl max-w-[700px] mx-auto mb-8 sm:mb-10 font-light px-4">
            Explore thousands of cost-free activities, attractions, and events in cities around the
            world.
          </p>

          <SearchBar />
        </div>
      </section>

      <div className="px-4 sm:px-6">
        <FeaturedCities />
        <Categories />
        <CountriesByContinent />
        <RecentlyAddedActivities />
        <HowItWorks />
      </div>
      
      <Footer />
    </main>
  );
}