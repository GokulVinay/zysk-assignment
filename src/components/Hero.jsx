import React from 'react';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto pt-20 pb-12">
        <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-1 mb-6">
          <span className="text-sm text-red-500">New feature</span>
          <span className="text-sm text-gray-600">Check out the team dashboard</span>
          <span className="text-red-500">→</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Beautiful analytics to grow smarter
        </h1>
        
        <p className="text-gray-600 text-lg mb-8">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
        
        <div className="flex justify-center space-x-4 mb-16">
          <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
            Demo
          </button>
          <button className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium">
            Sign up
          </button>
        </div>

        {/* Main dashboard image */}
        <div className="rounded-2xl bg-gray-900 shadow-2xl overflow-hidden mb-20">
          <div className="relative aspect-[16/9]">
            <img 
              src="/images/Container.png" 
              alt="Dashboard Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Company logos section */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-8">Join 4,000+ companies already growing</p>
          <div className="flex justify-center items-center space-x-8">
            <img src="/images/Logos.png" alt="Company Logos" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}