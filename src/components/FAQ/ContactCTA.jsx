import React from 'react';

export default function ContactCTA() {
  return (
    <div className="text-center mt-12">
      <img 
        src="/images/Avatar group.png" 
        alt="Our friendly team" 
        className="h-12 mx-auto mb-4"
      />
      <h3 className="text-lg font-medium mb-4">Still have questions?</h3>
      <p className="text-gray-600 mb-6">
        Can't find the answer you're looking for? Please chat to our friendly team.
      </p>
      <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
        Get in touch
      </button>
    </div>
  );
}