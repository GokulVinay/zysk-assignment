import React from 'react';

export default function Testimonial() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <img 
            src="/images/Fictional company logo.png" 
            alt="Sisyphus" 
            className="h-8 mx-auto mb-8" 
          />
          <h2 className="text-3xl font-bold max-w-2xl mx-auto mb-8">
            We've been using Untitled to kick start every new project and can't imagine working without it.
          </h2>
          <div className="flex items-center justify-center">
            <img 
              src="/images/Avatar.png" 
              alt="Candice Wu" 
              className="w-12 h-12 rounded-full" 
            />
            <div className="ml-4 text-left">
              <p className="font-semibold">Candice Wu</p>
              <p className="text-gray-600">Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}