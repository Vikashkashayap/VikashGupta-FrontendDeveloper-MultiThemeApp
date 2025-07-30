import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themeOptions = [
    { value: 'theme1', label: 'Theme 1 - Minimalist' },
    { value: 'theme2', label: 'Theme 2 - Dark Sidebar' },
    { value: 'theme3', label: 'Theme 3 - Colorful Cards' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      {/* Theme 1: Simple header */}
      <div className="theme1-header bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-lg sm:text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
                <Logo className="text-gray-800" size="md" />
                <span className="hidden sm:inline">MultiTheme App</span>
                <span className="sm:hidden">App</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <nav className="flex space-x-6 lg:space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Contact</Link>
              </nav>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-2 py-1 lg:px-3 lg:py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs lg:text-sm"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-2 py-1 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Theme 2: Dark header with sidebar indicator */}
      <div className="theme2-header bg-gray-900 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-lg sm:text-xl font-bold text-white hover:text-gray-300 transition-colors">
                <Logo className="text-white" size="md" />
                <span className="hidden sm:inline">MultiTheme App</span>
                <span className="sm:hidden">App</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6 lg:space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">About</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Contact</Link>
              </nav>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-3 py-2 lg:px-4 lg:py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-xs lg:text-sm"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-2 py-1 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-xs"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Theme 3: Colorful header */}
      <div className="theme3-header bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-yellow-200 transition-colors">
                <Logo className="text-white" size="lg" />
                <span className="hidden sm:inline">MultiTheme App</span>
                <span className="sm:hidden">App</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6 lg:space-x-8">
                <Link to="/" className="text-white hover:text-yellow-200 transition-colors font-medium text-sm lg:text-base">Home</Link>
                <Link to="/about" className="text-white hover:text-yellow-200 transition-colors font-medium text-sm lg:text-base">About</Link>
                <Link to="/contact" className="text-white hover:text-yellow-200 transition-colors font-medium text-sm lg:text-base">Contact</Link>
              </nav>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-3 py-2 lg:px-4 lg:py-2 border-2 border-white rounded-full bg-white/20 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-xs lg:text-sm"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-2 py-1 border-2 border-white rounded-full bg-white/20 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-xs"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:text-yellow-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-t border-white/20">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-200 hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-200 hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-200 hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 