// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/path-to-logo.png" alt="Medhavi Skills University Logo" className="w-36" />
        <span className="ml-2 text-2xl font-bold text-blue-600">MedHavi Skills University</span>
      </div>

      {/* Navbar Links */}
      <div className="flex space-x-6 text-lg">
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Academic</a>
        <a href="#" className="hover:text-blue-600">Admissions</a>
        <a href="#" className="hover:text-blue-600">Schools</a>
        <a href="#" className="hover:text-blue-600">Collaborations</a>
        <a href="#" className="hover:text-blue-600">Life @ MSU</a>
        <a href="#" className="hover:text-blue-600">Happenings</a>
      </div>

      {/* Apply Now Button */}
      <div>
        <a
          href="#"
          className="px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
        >
          APPLY NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
