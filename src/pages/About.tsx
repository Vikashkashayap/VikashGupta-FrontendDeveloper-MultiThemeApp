import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen transition-all duration-300 ease-in-out">
      {/* Theme 1: Simple About */}
      <div className="theme1-layout pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About Us</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Learn more about our company and mission
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Story</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              We are a passionate team dedicated to creating innovative solutions that enhance user experiences. 
              Our multi-theme application demonstrates the power of modern web technologies and responsive design.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              With years of experience in React development and UI/UX design, we strive to build applications 
              that are not only functional but also visually appealing and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme 2: Dark About */}
      <div className="theme2-layout pt-20 pb-8 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">About Us</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Discover our journey and expertise
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              We are committed to pushing the boundaries of web development by creating applications 
              that showcase the latest technologies and design trends. Our multi-theme approach 
              demonstrates the flexibility and power of modern React applications.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Every project we undertake is an opportunity to innovate and deliver exceptional 
              user experiences that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-sm sm:text-base text-gray-400">Happy Clients</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme 3: Colorful About */}
      <div className="theme3-layout pt-20 pb-8 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              About Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">
              Join us on our colorful journey
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-4 border-gradient-to-r from-purple-200 to-pink-200">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Our Vision</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              We believe in creating digital experiences that are not just functional, but also 
              delightful and engaging. Our multi-theme application showcases how design can 
              transform user interactions and create memorable experiences.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Through innovative design and cutting-edge technology, we bring ideas to life 
              in the most vibrant and creative ways possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 