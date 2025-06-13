// app/activity/[activity]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { getActivityData } from '../../lib/cities';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ActivityData {
  id: string;
  city_id: string;
  category: string;
  building_name: string;
  activity_description: string;
  metadata_json: {
    id: string;
    info: {
      phone: string;
      address: string;
      website: string;
      admission: string;
      openingHours: string;
      ageSuitability: string;
      recommendedDuration: string;
    };
    title: string;
    events: Array<{
      date: string;
      title: string;
    }>;
    images: Array<{
      alt: string;
      url: string;
    }>;
    rating: {
      staff: number;
      value: number;
      overall: number;
      experience: number;
      facilities: number;
      reviewCount: number;
    };
    reviews: Array<{
      id: string;
      text: string;
      rating: number;
      visitDate: string;
      reviewerName: string;
      reviewerAvatar: string;
    }>;
    subtitle: string;
    amenities: Array<{
      label: string;
      value: string;
    }>;
    quickInfo: {
      price: string;
      rating: string;
      duration: string;
    };
    highlights: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
    description: string;
    nearbyAttractions: Array<{
      id: string;
      type: string;
      title: string;
      distance: string;
      imageUrl: string;
    }>;
  };
}

export default function ActivityPage() {
  const params = useParams();
  const activityTitle = params.activity as string;
  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch(`/api/activities/${encodeURIComponent(activityTitle)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch activity data');
        }
        const data = await response.json();
        setActivity(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [activityTitle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar variant="default" />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !activity) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar variant="default" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-red-500">Error: {error || 'Activity not found'}</div>
        </div>
      </div>
    );
  }

  const metadata = activity.metadata_json;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar variant="default" />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/countries" className="hover:text-primary">
              USA
            </Link>
            <span>/</span>
            <Link href="/country/usa" className="hover:text-primary">
              California
            </Link>
            <span>/</span>
            <Link href="/city/redwood-city" className="hover:text-primary">
              Redwood City
            </Link>
            <span>/</span>
            <span className="text-gray-900">{metadata.title}</span>
          </div>
        </div>
      </div>

      <section
        className="relative h-[60vh] min-h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/api/placeholder/1200/600')`,
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">{metadata.title}</h1>
              <p className="text-xl mb-8">{metadata.subtitle}</p>

              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    💰
                  </div>
                  <div>
                    <p className="font-medium">{metadata.quickInfo.price}</p>
                    <p className="text-sm opacity-80">Regular: $6 Adults, $4 Seniors/Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    ⏱️
                  </div>
                  <div>
                    <p className="font-medium">{metadata.quickInfo.duration}</p>
                    <p className="text-sm opacity-80">Visit Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-medium">{metadata.quickInfo.rating}</p>
                    <p className="text-sm opacity-80">Visitor Rating</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#map" className="btn btn-primary">
                  Get Directions
                </a>
                <a
                  href={metadata.info.website}
                  target="_blank"
                  className="inline-flex items-center justify-center py-3 px-6 rounded-full font-medium transition-all text-[0.9rem] tracking-[0.5px] border border-white text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-white hover:text-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="bg-white rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">About the Museum</h2>
                <div className="prose max-w-none">
                  {metadata.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Museum Highlights</h2>
                <div className="grid grid-cols-2 gap-6">
                  {metadata.highlights.map(highlight => (
                    <div key={highlight.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="text-3xl mb-4">{highlight.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-primary">📷</span>
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {metadata.images.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Visitor Reviews</h2>
                <div className="flex items-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{metadata.rating.overall}</div>
                    <div className="text-yellow-500 text-2xl">★★★★★</div>
                    <div className="text-sm text-gray-600">
                      Based on {metadata.rating.reviewCount} reviews
                    </div>
                  </div>
                  <div className="flex-1">
                    {Object.entries(metadata.rating).map(([key, value]) => {
                      if (key === 'overall' || key === 'reviewCount') return null;
                      return (
                        <div key={key} className="flex items-center gap-4 mb-2">
                          <span className="w-24 text-sm text-gray-600 capitalize">{key}</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${(value / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="w-12 text-sm font-medium">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-6">
                  {metadata.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            <Image
                              src={review.reviewerAvatar}
                              alt={review.reviewerName}
                              width={48}
                              height={48}
                            />
                          </div>
                          <div>
                            <div className="font-semibold">{review.reviewerName}</div>
                            <div className="text-sm text-gray-600">Visited {review.visitDate}</div>
                          </div>
                        </div>
                        <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Nearby Attractions</h2>
                <div className="grid grid-cols-2 gap-6">
                  {metadata.nearbyAttractions.map(attraction => (
                    <div key={attraction.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={attraction.imageUrl}
                          alt={attraction.title}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{attraction.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{attraction.distance}</p>
                        <span className="inline-block px-2 py-1 text-xs bg-primary text-white rounded">
                          {attraction.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-lg font-semibold">Essential Information</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li>
                      <span className="text-sm text-gray-600 block">Address</span>
                      <span className="font-medium">{metadata.info.address}</span>
                    </li>
                    <li>
                      <span className="text-sm text-gray-600 block">Phone</span>
                      <span className="font-medium">{metadata.info.phone}</span>
                    </li>
                    <li>
                      <span className="text-sm text-gray-600 block">Website</span>
                      <a
                        href={metadata.info.website}
                        target="_blank"
                        className="font-medium text-primary hover:underline"
                      >
                        {metadata.info.website}
                      </a>
                    </li>
                    <li>
                      <span className="text-sm text-gray-600 block">Opening Hours</span>
                      <span className="font-medium whitespace-pre-line">
                        {metadata.info.openingHours}
                      </span>
                    </li>
                    <li>
                      <span className="text-sm text-gray-600 block">Admission</span>
                      <span className="font-medium whitespace-pre-line">
                        {metadata.info.admission}
                      </span>
                    </li>
                    <li>
                      <span className="text-sm text-gray-600 block">Recommended Duration</span>
                      <span className="font-medium">{metadata.info.recommendedDuration}</span>
                    </li>
                    <li>
                      <span className="text-sm text-gray-600 block">Age Suitability</span>
                      <span className="font-medium">{metadata.info.ageSuitability}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-lg font-semibold">Amenities & Accessibility</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {metadata.amenities.map((amenity, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-600">{amenity.label}</span>
                        <span className="font-medium">{amenity.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="map" className="bg-white rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Location & Directions</h3>
                </div>
                <div className="h-64 bg-gray-200">
                  <Image
                    src="https://static-maps.yandex.ru/1.x/?lang=en-US&ll=-122.2355,37.4885&z=15&l=map&size=800,400"
                    alt="Map showing museum location"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium mb-2">{metadata.info.address}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Located in the historic courthouse in downtown Redwood City, at the corner of
                    Broadway and Hamilton Street.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(metadata.info.address)}`}
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-lg font-semibold">Upcoming Special Events</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {metadata.events.map((event, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-600">{event.date}</span>
                        <span className="font-medium">{event.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
