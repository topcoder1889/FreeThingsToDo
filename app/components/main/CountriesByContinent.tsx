import Link from 'next/link';
import { getCountriesByContinent } from '../../lib/countries';

export default async function CountriesByContinent() {
  const countriesByContinent = await getCountriesByContinent() as Record<string, string[]>;
  return (
    <section className="py-16 bg-[#f9f9f9] rounded-[20px] mb-24">
      <div className="container">
        <div className="section-heading mb-12">
          <h3 className="text-3xl font-semibold mb-4">Browse By Country</h3>
          <p className="text-gray-600">
            Find free activities in top travel destinations around the world
          </p>
        </div>
        <div className="continents-container flex flex-wrap gap-12 mt-12">
          {Object.entries(countriesByContinent).map(([continent, countries]) => (
            <div key={continent} className="continent flex-1 min-w-[280px]">
              <h4 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-primary text-dark">
                {continent}
              </h4>
              <ul className="country-list columns-2 gap-8 list-none">
                {countries.map(country => (
                  <li key={country} className="mb-3 break-inside-avoid">
                    <Link
                      href={`/country/${country.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#555] hover:text-primary transition-colors duration-300 flex items-center text-[0.95rem]"
                    >
                      <span className="text-primary mr-3">•</span>
                      {country}
                    </Link>
                  </li>
                ))}
                <li className="mb-3 break-inside-avoid">
                  <Link
                    href={`/countries/${continent.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#555] hover:text-primary transition-colors duration-300 flex items-center text-[0.95rem]"
                  >
                    <span className="text-primary mr-3">•</span>
                    More in {continent} →
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/countries" className="btn btn-outline">
            See all countries
          </Link>
        </div>
      </div>
    </section>
  );
}
