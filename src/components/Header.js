'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              MyWebsite
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
