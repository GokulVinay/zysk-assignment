import React from 'react';

export default function Navbar() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center space-x-8">
        <img src="/images/Group 160.svg" alt="Zysk Logo" className="h-8" />
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <div className="relative group">
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          </div>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </div>
      </div>
      <div className="flex items-center">
        <img src="/images/_Navigation actions.png" alt="Navigation Actions" className="h-8" />
      </div>
    </nav>
  );
}