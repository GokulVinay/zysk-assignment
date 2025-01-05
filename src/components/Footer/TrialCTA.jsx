import React from 'react';

export default function TrialCTA() {
  return (
    <div className="bg-gray-50 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">Start your free trial</h2>
      <p className="text-gray-600 mb-6">Join over 4,000+ startups already growing with Untitled.</p>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          Learn more
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Get started
        </button>
      </div>
    </div>
  );
}