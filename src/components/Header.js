'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

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
                href="/home" 
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
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:text-blue-400 flex items-center"
                >
                  Services
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="py-1">
                      <Link 
                        href="/services/creative-production" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Creative Production
                      </Link>
                      <Link 
                        href="/services/branding-design" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Branding & Design
                      </Link>
                      <Link 
                        href="/services/performance-marketing" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Performance Marketing
                      </Link>
                      <Link 
                        href="/services/digital-marketing" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Digital Marketing
                      </Link>
                      <Link 
                        href="/services/conversion-funnel" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Conversion & Funnel Optimization
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:text-blue-400 flex items-center"
                >
                  Projects
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isProjectsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="py-1">
                      <Link 
                        href="/projects/project1" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        Project 1
                      </Link>
                      <Link 
                        href="/projects/project2" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        Project 2
                      </Link>
                      <Link 
                        href="/projects/project3" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        Project 3
                      </Link>
                      <Link 
                        href="/projects/project4" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        Project 4
                      </Link>
                      <Link 
                        href="/projects/project5" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        Project 5
                      </Link>
                      <Link 
                        href="/projects/project6" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        Project 6
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
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
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-blue-400 flex items-center justify-between w-full"
                >
                  Services
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="mt-1 ml-4 space-y-1">
                    <Link 
                      href="/services/creative-production" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Creative Production
                    </Link>
                    <Link 
                      href="/services/branding-design" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Branding & Design
                    </Link>
                    <Link 
                      href="/services/performance-marketing" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Performance Marketing
                    </Link>
                    <Link 
                      href="/services/digital-marketing" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Digital Marketing
                    </Link>
                    <Link 
                      href="/services/conversion-funnel" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Conversion & Funnel Optimization
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Projects Dropdown */}
              <div>
                <button
                  onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-blue-400 flex items-center justify-between w-full"
                >
                  Projects
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isProjectsDropdownOpen && (
                  <div className="mt-1 ml-4 space-y-1">
                    <Link 
                      href="/projects/project1" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProjectsDropdownOpen(false);
                      }}
                    >
                      Project 1
                    </Link>
                    <Link 
                      href="/projects/project2" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProjectsDropdownOpen(false);
                      }}
                    >
                      Project 2
                    </Link>
                    <Link 
                      href="/projects/project3" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProjectsDropdownOpen(false);
                      }}
                    >
                      Project 3
                    </Link>
                    <Link 
                      href="/projects/project4" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProjectsDropdownOpen(false);
                      }}
                    >
                      Project 4
                    </Link>
                    <Link 
                      href="/projects/project5" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProjectsDropdownOpen(false);
                      }}
                    >
                      Project 5
                    </Link>
                    <Link 
                      href="/projects/project6" 
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProjectsDropdownOpen(false);
                      }}
                    >
                      Project 6
                    </Link>
                  </div>
                )}
              </div>
              
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
