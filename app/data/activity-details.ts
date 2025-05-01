export interface ActivityReview {
    id: string;
    reviewerName: string;
    reviewerAvatar: string;
    visitDate: string;
    rating: number;
    text: string;
  }
  
  export interface ActivityRating {
    overall: number;
    experience: number;
    value: number;
    facilities: number;
    staff: number;
    reviewCount: number;
  }
  
  export interface ActivityInfo {
    address: string;
    phone: string;
    website: string;
    openingHours: string;
    admission: string;
    recommendedDuration: string;
    ageSuitability: string;
  }
  
  export interface ActivityAmenity {
    label: string;
    value: string;
  }
  
  export interface ActivityEvent {
    date: string;
    title: string;
  }
  
  export interface ActivityHighlight {
    id: string;
    icon: string;
    title: string;
    description: string;
  }
  
  export interface ActivityDetail {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    quickInfo: {
      price: string;
      duration: string;
      rating: string;
    };
    highlights: ActivityHighlight[];
    rating: ActivityRating;
    reviews: ActivityReview[];
    info: ActivityInfo;
    amenities: ActivityAmenity[];
    events: ActivityEvent[];
    nearbyAttractions: {
      id: string;
      title: string;
      distance: string;
      type: string;
      imageUrl: string;
    }[];
  }
  
  const activities: Record<string, ActivityDetail> = {
    'san-mateo-county-history-museum': {
      id: '1',
      title: 'San Mateo County History Museum',
      subtitle:
        'Explore the rich heritage of the Peninsula in a magnificent 1910 courthouse building',
      description: `The San Mateo County History Museum is housed in the historic "Old Courthouse" in Redwood City, a stunning example of classical revival architecture completed in 1910. The building itself is a California Historical Landmark and is listed on the National Register of Historic Places.
    
    The museum's mission is to preserve and interpret the rich history of San Mateo County through engaging exhibits, educational programs, and research facilities. The museum is operated by the San Mateo County Historical Association, which was founded in 1935.
    
    Through artifacts, photographs, interactive displays, and storytelling, visitors can explore the diverse heritage of the Peninsula from its indigenous Ohlone inhabitants through Spanish colonization, Mexican independence, and American statehood to the present day.`,
      quickInfo: {
        price: 'Free on first Friday of each month',
        duration: '1-2 hours recommended',
        rating: '4.7/5 based on 125 reviews',
      },
      highlights: [
        {
          id: '1',
          icon: '🏛️',
          title: 'Courtroom A',
          description:
            'A meticulously restored 1910 courtroom with original furnishings that offers visitors a glimpse into the early 20th-century justice system.',
        },
        {
          id: '2',
          icon: '🚂',
          title: 'Transportation Gallery',
          description:
            "Exhibits detailing how transportation shaped the county's development, from stagecoaches to railways and the impact of automobiles.",
        },
        {
          id: '3',
          icon: '👑',
          title: 'The Atkinson Dome',
          description:
            'A stunning stained glass dome that crowns the rotunda and creates a dramatic architectural focal point.',
        },
        {
          id: '4',
          icon: '🏢',
          title: 'Living History',
          description:
            "Interactive exhibits that recreate historic businesses, including a general store, a barbershop, and other establishments from the county's past.",
        },
      ],
      rating: {
        overall: 4.7,
        experience: 4.8,
        value: 4.5,
        facilities: 4.6,
        staff: 4.9,
        reviewCount: 125,
      },
      reviews: [
        {
          id: '1',
          reviewerName: 'Susan M.',
          reviewerAvatar: '/api/placeholder/100/100',
          visitDate: 'March 2025',
          rating: 5,
          text: "What a hidden gem! The building itself is worth the visit, but the exhibits really bring the county's history to life. The volunteers were so knowledgeable and eager to share stories. Don't miss the stained glass dome in the rotunda - absolutely breathtaking. Definitely plan to visit on the first Friday of the month for free admission!",
        },
        {
          id: '2',
          reviewerName: 'James T.',
          reviewerAvatar: '/api/placeholder/100/100',
          visitDate: 'January 2025',
          rating: 4,
          text: "A great way to spend a rainy afternoon. The interactive exhibits were engaging for my kids, and I learned quite a bit about local history I hadn't known. The old courtroom was particularly interesting. My only minor complaint is that some of the text panels were a bit small to read. Otherwise, a fascinating museum that's definitely worth a visit.",
        },
      ],
      info: {
        address: '2200 Broadway, Redwood City, CA 94063',
        phone: '(650) 299-0104',
        website: 'https://historysmc.org',
        openingHours: 'Tue-Sun: 10am-4pm\nClosed on Mondays',
        admission:
          '$6 Adults\n$4 Seniors/Students\nFree for children under 5\nFree for all on first Friday of each month',
        recommendedDuration: '1-2 hours',
        ageSuitability: 'All ages; best for 8+',
      },
      amenities: [
        { label: 'Gift Shop', value: 'Yes' },
        { label: 'Restrooms', value: 'Available' },
        { label: 'Guided Tours', value: 'Available upon request' },
        { label: 'Wheelchair Access', value: 'Full access' },
        { label: 'Photography', value: 'Allowed (no flash)' },
        { label: 'Parking', value: 'Nearby public lots' },
        { label: 'Public Transit', value: 'Caltrain station within walking distance' },
      ],
      events: [
        { date: 'April 5, 2025', title: 'Free First Friday' },
        { date: 'April 12, 2025', title: 'Historic Photo Workshop' },
        { date: 'April 19, 2025', title: "Children's History Day" },
        { date: 'May 3, 2025', title: 'Free First Friday' },
        { date: 'May 15, 2025', title: 'Peninsula Heritage Lecture' },
      ],
      nearbyAttractions: [
        {
          id: '1',
          title: 'Courthouse Square',
          distance: '1 minute walk',
          type: 'Public Space',
          imageUrl: '/api/placeholder/200/200',
        },
        {
          id: '2',
          title: 'Fox Theatre',
          distance: '5 minute walk',
          type: 'Entertainment',
          imageUrl: '/api/placeholder/200/200',
        },
        {
          id: '3',
          title: 'Public Art Walk',
          distance: 'Starting nearby',
          type: 'Cultural',
          imageUrl: '/api/placeholder/200/200',
        },
        {
          id: '4',
          title: 'Redwood City Public Library',
          distance: '7 minute walk',
          type: 'Education',
          imageUrl: '/api/placeholder/200/200',
        },
      ],
    },
  };
  
  export const getActivityDetail = (title: string): ActivityDetail => {
    const activity = activities[title];
    if (!activity) {
      throw new Error(`Activity not found: ${title}`);
    }
    return activity;
  };
  