export interface CityHeroData {
  population: string;
  area: string;
  visitorRating: string;
  distanceFromSF: string;
  description: string;
}

export const getCityHeroData = (cityName: string): CityHeroData => {
  // This will be replaced with database data in the future
  return {
    population: '86,754',
    area: '19.4 mi²',
    visitorRating: '4.7',
    distanceFromSF: '25 mi',
    description: "Silicon Valley's Historic Peninsula Hub"
  };
}; 