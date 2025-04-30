'use client';

import Link from 'next/link';

const continents = [
  {
    name: 'Europe',
    countries: [
      'France',
      'Italy',
      'Spain',
      'United Kingdom',
      'Germany',
      'Greece',
      'Portugal',
      'Netherlands',
      'Switzerland',
      'Austria',
      'Croatia',
      'Czech Republic',
      'Ireland',
      'Turkey',
      'Sweden',
      'Norway',
      'Denmark',
      'Hungary',
      'Iceland',
      'Belgium',
    ],
  },
  {
    name: 'Asia',
    countries: [
      'Japan',
      'Thailand',
      'Vietnam',
      'Indonesia',
      'China',
      'India',
      'Singapore',
      'Malaysia',
      'South Korea',
      'Philippines',
      'Taiwan',
      'UAE',
      'Nepal',
      'Cambodia',
      'Sri Lanka',
      'Jordan',
      'Israel',
      'Maldives',
      'Qatar',
      'Laos',
    ],
  },
  {
    name: 'North & Central America',
    countries: [
      'United States',
      'Mexico',
      'Canada',
      'Costa Rica',
      'Cuba',
      'Dominican Republic',
      'Jamaica',
      'Bahamas',
      'Panama',
      'Puerto Rico',
      'Belize',
      'Guatemala',
      'Honduras',
      'Nicaragua',
      'El Salvador',
    ],
  },
  {
    name: 'South America',
    countries: [
      'Brazil',
      'Peru',
      'Argentina',
      'Colombia',
      'Chile',
      'Ecuador',
      'Bolivia',
      'Uruguay',
      'Venezuela',
      'Paraguay',
    ],
  },
  {
    name: 'Africa',
    countries: [
      'South Africa',
      'Morocco',
      'Egypt',
      'Kenya',
      'Tanzania',
      'Tunisia',
      'Botswana',
      'Namibia',
      'Zimbabwe',
      'Mauritius',
      'Seychelles',
    ],
  },
  {
    name: 'Oceania',
    countries: [
      'Australia',
      'New Zealand',
      'Fiji',
      'French Polynesia',
      'Hawaii',
      'Cook Islands',
      'Samoa',
      'Vanuatu',
    ],
  },
];

export default function CountriesByContinent() {
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
          {continents.map(continent => (
            <div key={continent.name} className="continent flex-1 min-w-[280px]">
              <h4 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-primary text-dark">
                {continent.name}
              </h4>
              <ul className="country-list columns-2 gap-8 list-none">
                {continent.countries.map(country => (
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
                    href={`/countries/${continent.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#555] hover:text-primary transition-colors duration-300 flex items-center text-[0.95rem]"
                  >
                    <span className="text-primary mr-3">•</span>
                    More in {continent.name} →
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
