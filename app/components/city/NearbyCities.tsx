import { FC, useRef } from 'react';
import { nearbyCities } from '../../data/nearby-cities';

interface NearbyCitiesProps {
  formattedCityName: string;
}

const NearbyCities: FC<NearbyCitiesProps> = ({ formattedCityName }) => {
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
  );
};

export default NearbyCities; 