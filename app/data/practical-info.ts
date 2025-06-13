export interface TabPanel {
  id: string;
  title: string;
  icon: string;
  content: {
    type: 'info-cards' | 'data-card' | 'insights';
    data: any;
  };
}

export const practicalInfoTabs: TabPanel[] = [
  {
    id: 'essential-info',
    title: 'Essential Info',
    icon: 'ℹ️',
    content: {
      type: 'info-cards',
      data: [
        {
          icon: '🚍',
          title: 'Getting There & Around',
          description: 'Redwood City is accessible by car, train, and public transport.',
          items: ['SFO Airport: 9 miles north', 'CalTrain: Downtown station'],
        },
        {
          icon: '📅',
          title: 'Best Times to Visit',
          description: 'Enjoyable year-round, with distinct seasonal advantages.',
          items: ['Apr-May: Wildflowers', 'Jun-Aug: Outdoor events'],
        },
        {
          icon: '📱',
          title: 'Useful Apps & Websites',
          description: 'Digital resources for your visit.',
          items: ['Redwood City Events Calendar', 'CalTrain Mobile App'],
        },
      ],
    },
  },
  {
    id: 'reference-links',
    title: 'Reference Links',
    icon: '🔗',
    content: {
      type: 'data-card',
      data: {
        items: [
          {
            title: 'OpenStreetMap',
            value: 'ID',
            links: [
              { text: '123456', url: 'https://www.openstreetmap.org/relation/123456' },
              { text: 'View Map', url: 'https://www.openstreetmap.org/relation/123456' },
            ],
          },
          {
            title: 'Wikipedia',
            value: 'Page ID',
            links: [
              { text: '67890', url: 'https://en.wikipedia.org/?curid=67890' },
              {
                text: 'Read Article',
                url: 'https://en.wikipedia.org/wiki/Redwood_City,_California',
              },
            ],
          },
          {
            title: 'Wikivoyage',
            value: '',
            links: [{ text: 'Travel Guide', url: 'https://en.wikivoyage.org/wiki/Redwood_City' }],
          },
          {
            title: 'Wikidata',
            value: 'Entity ID',
            links: [{ text: 'Q45678', url: 'https://www.wikidata.org/wiki/Q45678' }],
          },
        ],
      },
    },
  },
  {
    id: 'population-data',
    title: 'Population',
    icon: '📊',
    content: {
      type: 'data-card',
      data: {
        items: [
          { title: 'Latest Population (2023)', value: '86,754' },
          { title: 'Population Growth Rate', value: 'Approx. 0.5% annually' },
          { title: 'Urban Area Population', value: '~85,000' },
          { title: 'Metropolitan Area', value: '~7.7 million (Part of SF Bay Area)' },
          { title: 'Population Density', value: '~4,472 per sq mi / ~1,727 per sq km' },
        ],
      },
    },
  },
  {
    id: 'cultural-significance',
    title: 'Culture',
    icon: '🎭',
    content: {
      type: 'data-card',
      data: {
        items: [
          {
            title: 'UNESCO Sites',
            value: 'None directly in Redwood City (Note: Many CA sites nearby)',
          },
          {
            title: 'Main Languages Spoken',
            value: 'English, Spanish, Chinese (Mandarin/Cantonese), Tagalog',
          },
          {
            title: 'Major Cultural Districts',
            value: 'Downtown (Historic & Arts), Little Mexico (parts of North Fair Oaks)',
          },
          {
            title: 'Significant Annual Events',
            value: 'Salsa Festival, Music on the Square, Fourth of July Parade, Hometown Holidays',
          },
        ],
      },
    },
  },
  {
    id: 'economic-indicators',
    title: 'Economy',
    icon: '📈',
    content: {
      type: 'data-card',
      data: {
        items: [
          {
            title: 'Primary Industries',
            value: 'Technology (Software, Biotech), Healthcare, Retail, Professional Services',
          },
          { title: 'Development Classification', value: 'Developed / High-Income Economy' },
          {
            title: 'Major Corporations Headquartered',
            value: 'Oracle, Electronic Arts (EA), Box Inc.',
          },
          {
            title: 'Tourism Significance',
            value: 'Regional hub, business travel, gateway to Peninsula attractions',
          },
        ],
      },
    },
  },
  {
    id: 'environmental-context',
    title: 'Environment',
    icon: '☀️',
    content: {
      type: 'data-card',
      data: {
        items: [
          { title: 'Climate Classification', value: 'Mediterranean (Köppen: Csb)' },
          { title: 'Average Temperature Range (Annual)', value: '42°F - 78°F (5°C - 25°C)' },
          { title: 'Average Annual Rainfall', value: '~20 inches (508 mm)' },
          {
            title: 'Notable Natural Features',
            value:
              'Proximity to San Francisco Bay, Redwood Shores Lagoon system, nearby Santa Cruz Mountains',
          },
        ],
      },
    },
  },
  {
    id: 'urban-characteristics',
    title: 'Urban Layout',
    icon: '🏘️',
    content: {
      type: 'data-card',
      data: {
        items: [
          { title: 'Urban Layout Type', value: 'Mix of grid (Downtown) and suburban curvilinear' },
          {
            title: 'Public Transportation Systems',
            value:
              'CalTrain (commuter rail), SamTrans (bus), Redwood City Ferry Terminal (seasonal)',
          },
          {
            title: 'Major Landmarks',
            value:
              'San Mateo County History Museum (Historic Courthouse), Fox Theatre, Port of Redwood City, Oracle Headquarters',
          },
          {
            title: 'Airport Information',
            value:
              "Nearest major: San Francisco Int'l (SFO) - 9 miles. San Carlos Airport (SQL) for general aviation.",
          },
        ],
      },
    },
  },
  {
    id: 'local-tips',
    title: 'Local Tips',
    icon: '💡',
    content: {
      type: 'insights',
      data: [
        {
          title: 'Stulsaft Park',
          description:
            'A hidden gem for families and dog walkers, offering trails and off-leash areas.',
        },
        {
          title: 'Magical Bridge Playground',
          description: 'In Red Morton Park, an inclusive playground for all abilities.',
        },
      ],
    },
  },
];

export const localInsights = [
  {
    title: 'Stulsaft Park',
    description: 'A hidden gem for families and dog walkers, offering trails and off-leash areas.',
  },
  {
    title: 'Magical Bridge Playground',
    description: 'In Red Morton Park, an inclusive playground for all abilities.',
  },
];
