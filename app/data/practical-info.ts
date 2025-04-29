export interface InfoCard {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface InsightCard {
  title: string;
  description: string;
}

export const infoCards: InfoCard[] = [
  {
    icon: '🚍',
    title: 'Getting There & Around',
    description: 'Redwood City is easily accessible by car, train, and public transportation.',
    items: [
      'SFO International Airport is just 9 miles north',
      'CalTrain station located in downtown (serving SF to San Jose)',
      'SamTrans bus service throughout San Mateo County',
      'Free public parking available in downtown garages',
      'Rideshare services widely available',
      'Downtown area is highly walkable (Walk Score: 76)',
    ],
  },
  {
    icon: '📱',
    title: 'Useful Apps & Websites',
    description: 'Digital resources to enhance your visit to Redwood City.',
    items: [
      'Redwood City Events Calendar',
      'CalTrain Mobile for train schedules',
      'SamTrans app for bus routes',
      'AllTrails for hiking trail maps and reviews',
      'Redwood City Parking app for garage availability',
      'Weather Underground for accurate local forecasts',
    ],
  },
  {
    icon: '📅',
    title: 'Best Times to Visit',
    description:
      'Redwood City can be enjoyed year-round, but certain seasons offer distinct advantages.',
    items: [
      'April-May: Mild temperatures and wildflower blooms',
      'June-August: Warm, dry days perfect for outdoor events',
      'September-October: Indian summer with excellent weather',
      'December: Holiday events and festive downtown decorations',
      'Weekday visits recommended to avoid crowds',
    ],
  },
];

export const insightCards: InsightCard[] = [
  {
    title: 'Stulsaft Park',
    description:
      'This 42-acre community park is often overlooked by visitors but beloved by locals. Hidden in a residential area, it offers hiking trails, creeks, playgrounds, and picnic areas without the crowds of more well-known parks. The shaded trails are particularly refreshing during summer months.',
  },
  {
    title: 'Magical Bridge Playground',
    description:
      "Located in Red Morton Park, this inclusive playground goes beyond standard accessible design to create a truly magical experience for children of all abilities. With musical elements, swings, and innovative play structures, it's worth a visit even if you don't have children.",
  },
  {
    title: 'Dragon Productions Theatre',
    description:
      'This small, community-focused theater offers innovative performances, often at affordable prices or with pay-what-you-can options. Check their schedule for free preview nights and community events that provide cultural experiences without cost.',
  },
  {
    title: 'Redwood Creek Trail',
    description:
      "This urban trail follows Redwood Creek through the city and offers a peaceful escape with views of the waterway. It's less traveled than other trails and provides glimpses of local wildlife, particularly bird species that make their home along the restored creek areas.",
  },
];
