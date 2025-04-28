'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footerLinks = {
    Explore: [
        { name: 'Popular Cities', href: '/pupular-cities' },
        { name: 'Categories', href: '/categories' },
        { name: 'Seasonal Activities', href: '/sseasonal-activities' },
        { name: 'Travel Guides', href: '/travel-guides' },
        { name: 'User Reviews', href: '/user-reviews' }
    ],
    Community: [
        { name: 'Submit Activity', href: '/submit-activity' },
        { name: 'Become a Lcal Guide', href: '/local-guide' },
        { name: 'City Ambassadors', href: '/city-ambassadors' },
        { name: 'Forum', href: '/forum' },
        { name: 'Blog', href: '/blog' }
    ],
    Suport: [
        { name: 'Help Center', href: '/support/help' },
        { name: 'Contact Us', href: '/support/contact' },
        { name: 'Privacy Policy', href: '/support/privacy-policy' },
        { name: 'Terms of Service', href: '/support/termsofservice' },
        { name: 'About Us', href: '/support/about' }
    ]
};

const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com' },
    { icon: FaTwitter, href: 'https://twitter.com' },
    { icon: FaInstagram, href: 'https://instagram.com' },
    { icon: FaLinkedin, href: 'https://linkedin.com' }
];

export default function Footer() {
    return (
        <footer className='bg-secondary text-white'>
            <div className='container py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">FreeThingsToDo</h2>
                        <p className="text-gray-300 mb-6">
                            Discover amazing free activities and events in cities around the world.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                >
                                <social.icon className="text-xl" />
                                </a>
                            ))}
                        </div>              
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            {footerLinks.Explore.map((link) => (
                                <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Community</h3>
                        <ul className="space-y-2">
                            {footerLinks.Community.map((link) => (
                                <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.Suport.map((link) => (
                                <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

