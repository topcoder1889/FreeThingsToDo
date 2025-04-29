'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  variant?: 'default' | 'overlay';
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full z-[100] ${variant === 'overlay' ? 'absolute top-0 left-0 py-5' : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0'}`}>
      <div className="w-[90%] max-w-[1340px] mx-auto px-5">
        <nav className="flex justify-between items-center py-4 relative">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <h1 className={`m-0 text-[1.75rem] font-bold uppercase tracking-[1px] ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
              FreeThingsToDo
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10 list-none">
              <li>
                <Link href="/" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse-by-city" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  Browse by City
                </Link>
              </li>
              <li>
                <Link href="/submit-activity" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  Submit Activity
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className={`px-6 py-3 rounded-full border transition-all duration-300 text-[0.9rem] font-medium tracking-[0.5px] no-underline ${
                  variant === 'overlay' 
                    ? 'border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary' 
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className={`px-6 py-3 rounded-full transition-all duration-300 text-[0.9rem] font-medium tracking-[0.5px] no-underline ${
                  variant === 'overlay'
                    ? 'bg-white text-primary hover:bg-primary hover:text-white'
                    : 'bg-primary text-white hover:bg-dark'
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-[100]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-full h-[3px] rounded-[3px] transition-all duration-300 ${isMenuOpen ? 'translate-y-[9px] rotate-45' : ''} ${variant === 'overlay' ? 'bg-white' : 'bg-dark'}`} />
            <span className={`block w-full h-[3px] rounded-[3px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${variant === 'overlay' ? 'bg-white' : 'bg-dark'}`} />
            <span className={`block w-full h-[3px] rounded-[3px] transition-all duration-300 ${isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''} ${variant === 'overlay' ? 'bg-white' : 'bg-dark'}`} />
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-[-100%] w-[250px] h-screen z-40 transition-all duration-300 md:hidden ${
            isMenuOpen ? 'right-0' : ''
          } ${variant === 'overlay' ? 'bg-dark/95' : 'bg-white'}`}
        >
          <div className="w-[90%] max-w-[1340px] mx-auto px-5 h-full flex flex-col justify-start pt-20">
            <ul className="flex flex-col gap-6 list-none">
              <li>
                <Link href="/" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse-by-city" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  Browse by City
                </Link>
              </li>
              <li>
                <Link href="/submit-activity" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  Submit Activity
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:text-accent transition-all duration-300 text-[0.95rem] font-medium tracking-[0.5px] no-underline ${variant === 'overlay' ? 'text-white' : 'text-dark'}`}>
                  About
                </Link>
              </li>
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/login"
                className={`px-6 py-3 rounded-full border transition-all duration-300 text-[0.9rem] font-medium tracking-[0.5px] no-underline text-center ${
                  variant === 'overlay'
                    ? 'border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className={`px-6 py-3 rounded-full transition-all duration-300 text-[0.9rem] font-medium tracking-[0.5px] no-underline text-center ${
                  variant === 'overlay'
                    ? 'bg-white text-primary hover:bg-primary hover:text-white'
                    : 'bg-primary text-white hover:bg-dark'
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 