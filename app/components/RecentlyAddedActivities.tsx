'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';

const activities = [
    {
        title: 'Central Park Walking Tour',
        location: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=3000&auto=format&fit=crop',
        category: 'Nature'
    },
    {
        title: 'Louvre Museum Free Day',
        location: 'Paris, France',
        image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=3000&auto=format&fit=crop',
        category: 'Museums'
    },
    {
        title: 'Street Art Tour',
        location: 'London, UK',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=3000&auto=format&fit=crop',
        category: 'Art'
    }
];

export default function RecentlyAddedActivities() {
    return (
        <section className='py-20 bg-gray-50'>
            <div className='container'>
                <div className='text-center mb-16'>
                    <h3 className='text-3xl font-semibold mb-4'>Recently Added Activities</h3>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                    Check out the latest free activities added to our platform
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {activities.map((activity) => (
                        <div
                            key={activity.title}
                            className='bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow'
                        >
                            <div className='relative h-48'>
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className='object-cover'
                                />
                                <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm'>
                                    {activity.category}
                                </div>
                            </div>
                            <div className='p-6'>
                                <h4 className='text-xl font-semibold mb-2'>{activity.title}</h4>
                                <div className='flex items-center gap-4 text-gray-600 mb-4'>
                                    <div className='flex items-center gap-2'>
                                        <FaMapMarkedAlt />
                                        <span>{activity.location}</span>
                                    </div>
                                </div>
                                <Link
                                    href={`/activity/${activity.title.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-primary font-medium hover:underline"
                                >
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}