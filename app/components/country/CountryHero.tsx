import React from 'react';

interface CountryHeroProps {
  countryName: string;
}

const CountryHero: React.FC<CountryHeroProps> = ({ countryName }) => {
  return (
    <section className="country-hero relative">
      <div
        className="bg-cover bg-center h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/api/placeholder/1200/600')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-4">{countryName}</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover free activities, attractions, and cultural experiences across this
              beautiful and diverse country
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
              <a href="#top-destinations" className="btn btn-primary">
                Explore Top Cities
              </a>
              <a
                href="#travel-tips"
                className="inline-flex items-center justify-center py-3 px-6 rounded-full font-medium transition-all text-[0.9rem] tracking-[0.5px] border border-white text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-white hover:text-primary"
              >
                Travel Tips
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero; 