import React, { useState } from 'react';
import FAQHeader from './FAQHeader';
import FAQItem from './FAQItem';
import ContactCTA from './ContactCTA';
import { faqs } from './FAQData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        <FAQHeader />
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}