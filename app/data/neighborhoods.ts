export interface Neighborhood {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'downtown',
    name: 'Downtown',
    icon: '🏙️',
    description:
      'The vibrant heart of the city with historic architecture, entertainment venues, and diverse dining options.',
    features: ['Dining', 'Shopping', 'Nightlife', 'Historic'],
  },
  {
    id: 'port-area',
    name: 'Port Area',
    icon: '🚢',
    description:
      'Waterfront district with maritime history, walking paths, and access to Bair Island wildlife refuge.',
    features: ['Nature', 'Waterfront', 'Walking Trails'],
  },
  {
    id: 'redwood-shores',
    name: 'Redwood Shores',
    icon: '🌊',
    description:
      'A planned waterfront community with lagoons, tech campuses, and scenic bay trails.',
    features: ['Residential', 'Waterfront', 'Business District'],
  },
  {
    id: 'emerald-hills',
    name: 'Emerald Hills',
    icon: '⛰️',
    description:
      'Hillside neighborhood with panoramic views, parks, and proximity to natural preserves.',
    features: ['Scenic Views', 'Parks', 'Residential'],
  },
];
