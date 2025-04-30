import { getCityHeroData } from '../../data/city-hero';

interface CityHeroProps {
  formattedCityName: string;
}

export default function CityHero({ formattedCityName }: CityHeroProps) {
  const heroData = getCityHeroData(formattedCityName);

  return (
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
              {heroData.description}
            </p>

            <div className="city-quick-stats flex flex-wrap gap-8 mb-10">
              <div className="stat-item flex flex-col">
                <span className="stat-value text-3xl font-bold text-white">{heroData.population}</span>
                <span className="stat-label text-white/80 text-sm">Population</span>
              </div>
              <div className="stat-item flex flex-col">
                <span className="stat-value text-3xl font-bold text-white">{heroData.area}</span>
                <span className="stat-label text-white/80 text-sm">Area</span>
              </div>
              <div className="stat-item flex flex-col">
                <span className="stat-value text-3xl font-bold text-white">{heroData.visitorRating}</span>
                <span className="stat-label text-white/80 text-sm">Visitor Rating</span>
              </div>
              <div className="stat-item flex flex-col">
                <span className="stat-value text-3xl font-bold text-white">{heroData.distanceFromSF}</span>
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
  );
};