import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div>
      <div className="mb-6">
        <Icon className="h-7 w-7 text-gray-800" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </div>
  );
}