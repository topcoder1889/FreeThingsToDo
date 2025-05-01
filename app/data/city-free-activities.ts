export interface FreeActivity {
  id: string;
  title: string;
  description: string;
  category: 'Outdoor' | 'Cultural' | 'Community Events' | 'Nature & Wildlife';
}

export interface FreeActivitiesData {
  categories: {
    name: string;
    activities: FreeActivity[];
  }[];
}

export const getFreeActivitiesData = (cityName: string): FreeActivitiesData => {
  return {
    categories: [
      {
        name: 'Outdoor Activities',
        activities: [
          {
            id: '1',
            title: 'Redwood City Parks',
            description: 'Explore local parks like Stafford Park, Red Morton Park, or Stulsaft Park, which offer walking trails, picnic areas, and playgrounds.',
            category: 'Outdoor'
          },
          {
            id: '2',
            title: 'Edgewood Park & Natural Preserve',
            description: 'Hike through scenic trails and enjoy wildflower displays (free parking on weekdays, small fee on weekends).',
            category: 'Outdoor'
          },
          {
            id: '3',
            title: 'Bair Island Aquatic Center',
            description: 'Walk or bike along the trails and enjoy views of the wetlands and wildlife.',
            category: 'Outdoor'
          },
          {
            id: '4',
            title: 'Marina at Redwood City',
            description: 'Stroll along the waterfront, watch boats, and enjoy the bay views.',
            category: 'Outdoor'
          },
          {
            id: '5',
            title: 'Farmers\' Market',
            description: 'Visit the Redwood City Farmers\' Market (Saturday mornings) for fresh produce, live music, and a lively atmosphere.',
            category: 'Outdoor'
          }
        ]
      },
      {
        name: 'Cultural and Historical Activities',
        activities: [
          {
            id: '6',
            title: 'San Mateo County History Museum',
            description: 'Located in the historic courthouse, this museum offers free admission on the first Friday of every month.',
            category: 'Cultural'
          },
          {
            id: '7',
            title: 'Public Art Walk',
            description: 'Explore Redwood City\'s downtown area to see murals, sculptures, and other public art installations.',
            category: 'Cultural'
          },
          {
            id: '8',
            title: 'Fox Theatre',
            description: 'Check for free or low-cost community events, film screenings, or performances at this historic venue.',
            category: 'Cultural'
          }
        ]
      },
      {
        name: 'Community Events',
        activities: [
          {
            id: '9',
            title: 'Concerts in the Park',
            description: 'During the summer, enjoy free outdoor concerts at Courthouse Square.',
            category: 'Community Events'
          },
          {
            id: '10',
            title: 'Library Programs',
            description: 'The Redwood City Public Library hosts free events, including storytimes, workshops, and author talks.',
            category: 'Community Events'
          },
          {
            id: '11',
            title: 'Festivals and Street Fairs',
            description: 'Look for free community events like the Redwood City Salsa Festival or Holiday Parades.',
            category: 'Community Events'
          }
        ]
      },
      {
        name: 'Nature and Wildlife',
        activities: [
          {
            id: '12',
            title: 'Pulgas Ridge Open Space Preserve',
            description: 'Hike the trails and enjoy panoramic views of the Bay Area.',
            category: 'Nature & Wildlife'
          },
          {
            id: '13',
            title: 'Canoeing or Kayaking',
            description: 'Rent an affordable kayak or paddleboard at the Marina for a fun day on the water.',
            category: 'Nature & Wildlife'
          },
          {
            id: '14',
            title: 'Downtown Exploration',
            description: 'Window-shop, enjoy street performances, or grab an inexpensive treat at a local café.',
            category: 'Nature & Wildlife'
          },
          {
            id: '15',
            title: 'Geocaching',
            description: 'Explore the city and nearby areas by participating in this free treasure-hunting activity.',
            category: 'Nature & Wildlife'
          }
        ]
      }
    ]
  };
}; 