import { FC } from 'react';

interface CityCTAProps {
  formattedCityName: string;
}

const CityCTA: FC<CityCTAProps> = ({ formattedCityName }) => {
  return (
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
  );
};

export default CityCTA; 