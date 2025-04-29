export interface NearbyCity {
  name: string;
  description: string;
  distance: string;
  imageUrl: string;
}

export const nearbyCities: NearbyCity[] = [
  {
    name: 'San Francisco',
    description:
      'The iconic City by the Bay with world-famous attractions, diverse neighborhoods, and cultural experiences.',
    distance: '25 miles north',
    imageUrl: '/api/placeholder/400/200',
  },
  {
    name: 'Palo Alto',
    description:
      'Home to Stanford University, tech innovation, and beautiful tree-lined streets with upscale shopping.',
    distance: '7 miles south',
    imageUrl: '/api/placeholder/400/200',
  },
  {
    name: 'Half Moon Bay',
    description:
      'Charming coastal town with stunning beaches, seafood restaurants, and scenic coastal trails.',
    distance: '14 miles west',
    imageUrl: '/api/placeholder/400/200',
  },
  {
    name: 'San Jose',
    description:
      'The heart of Silicon Valley with tech museums, diverse dining, and cultural attractions.',
    distance: '27 miles southeast',
    imageUrl: '/api/placeholder/400/200',
  },
  {
    name: 'Berkeley',
    description:
      'University town with progressive culture, food scene, and beautiful hillside views.',
    distance: '30 miles north',
    imageUrl: '/api/placeholder/400/200',
  },
];
