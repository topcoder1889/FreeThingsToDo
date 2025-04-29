export interface City {
  id: string;
  name: string;
  activityCount: number;
  letter: string;
}

export const cities: City[] = [
  {
    id: 'alicante',
    name: 'Alicante',
    activityCount: 28,
    letter: 'A',
  },
  {
    id: 'almeria',
    name: 'Almería',
    activityCount: 16,
    letter: 'A',
  },
  {
    id: 'avila',
    name: 'Avila',
    activityCount: 22,
    letter: 'A',
  },
  {
    id: 'algeciras',
    name: 'Algeciras',
    activityCount: 14,
    letter: 'A',
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    activityCount: 95,
    letter: 'B',
  },
  {
    id: 'bilbao',
    name: 'Bilbao',
    activityCount: 42,
    letter: 'B',
  },
  {
    id: 'burgos',
    name: 'Burgos',
    activityCount: 31,
    letter: 'B',
  },
];
