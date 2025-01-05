import React from 'react';

export default function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <button
        className="flex justify-between items-center w-full text-left py-3"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        <span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
          <span className="text-gray-600 text-xl font-medium">
            {isOpen ? '−' : '+'}
          </span>
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}