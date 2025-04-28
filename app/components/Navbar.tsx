'use client';

import Link from 'next/link';

export default function Navbar() {

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-5">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
              FreeThingsToDo
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-white hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse-by-city" className="text-white hover:text-accent transition-colors">
                  Browse by City
                </Link>
              </li>
              <li>
                <Link href="/submit-activity" className="text-white hover:text-accent transition-colors">
                  Submit Activity
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

        </nav>

      </div>
    </header>
  );
} 