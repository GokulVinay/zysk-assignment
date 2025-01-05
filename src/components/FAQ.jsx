import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can change your plan at any time.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel your subscription at any time with no penalties.'
  },
  {
    question: 'Can other info be added to an invoice?',
    answer: 'Yes, you can add additional information to your invoices.'
  },
  {
    question: 'How does billing work?',
    answer: 'We offer monthly and annual billing options.'
  },
  {
    question: 'How do I change my account email?',
    answer: 'You can change your account email in your account settings.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need to know about the product and billing.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6">
                  <svg
                    className={`w-6 h-6 text-gray-400 transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

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
      </div>
    </div>
  );
}