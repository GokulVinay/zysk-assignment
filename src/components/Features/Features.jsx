import React from 'react';
import { features } from './featuresData';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
         <p className="feature-title text-sm font-medium text-red-500 uppercase tracking-wide mb-2">Features</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Analytics that feels like it's from the future
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}