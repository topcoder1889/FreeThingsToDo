export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  items: ItineraryItem[];
}

export const itineraries: Itinerary[] = [
  {
    id: 'half-day-explorer',
    title: 'Half-Day Explorer: Downtown Highlights',
    description:
      'Perfect for visitors with limited time, this itinerary covers the essential sights of downtown Redwood City in just 4 hours.',
    items: [
      {
        time: '9:00 AM - 10:00 AM',
        title: 'Courthouse Square & Historic Courthouse',
        description:
          'Begin at the heart of downtown where you can admire the 1910 courthouse architecture and take photos at the impressive square.',
      },
      {
        time: '10:00 AM - 11:30 AM',
        title: 'San Mateo County History Museum',
        description:
          "Explore the local history exhibits inside the historic courthouse building, including interactive displays about the Peninsula's development.",
      },
      {
        time: '11:30 AM - 12:30 PM',
        title: 'Public Art Walking Tour',
        description:
          'Follow the self-guided tour map to discover murals, sculptures, and art installations throughout the downtown area.',
      },
      {
        time: '12:30 PM - 1:30 PM',
        title: 'Lunch at Courthouse Square',
        description:
          'Enjoy lunch at one of the cafes or restaurants surrounding the square, or bring a picnic lunch to enjoy outdoors if weather permits.',
      },
    ],
  },
  {
    id: 'full-day-adventure',
    title: 'Full Day Adventure',
    description: 'Experience the best of Redwood City in a full day of exploration.',
    items: [],
  },
  {
    id: 'family-fun-day',
    title: 'Family Fun Day',
    description: 'A perfect day out for families with activities for all ages.',
    items: [],
  },
  {
    id: 'nature-outdoors',
    title: 'Nature & Outdoors',
    description: 'Explore the natural beauty surrounding Redwood City.',
    items: [],
  },
  {
    id: 'history-buffs-trail',
    title: "History Buff's Trail",
    description: 'Dive deep into the rich history of Redwood City.',
    items: [],
  },
];
