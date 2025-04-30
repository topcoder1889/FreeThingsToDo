import React from 'react';

interface CountryCTAProps {
  countryName: string;
}

const CountryCTA: React.FC<CountryCTAProps> = ({ countryName }) => {
  return (
    <div className="container mx-auto px-4 my-16">
      <section
        className="cta rounded-[20px] py-24 text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/api/placeholder/1200/600') center/cover no-repeat`,
        }}
      >
        <h2 className="text-4xl font-semibold mb-6">
          Start Planning Your {countryName} Adventure
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 font-light">
          Discover hundreds of free activities and experiences across {countryName}'s
          most beautiful cities and regions.
        </p>

        <div className="cta-buttons flex gap-4 justify-center">
          <a href="#top-destinations" className="btn btn-primary">
            Explore Top Cities
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center py-3 px-6 rounded-full font-medium transition-all text-[0.9rem] tracking-[0.5px] border border-white text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-white hover:text-primary"
          >
            Create Custom Itinerary
          </a>
        </div>
      </section>
    </div>
  );
};

export default CountryCTA; 