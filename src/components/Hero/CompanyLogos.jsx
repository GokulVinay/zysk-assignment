import React from 'react';

const companies = [
  { name: 'Boltshift', logo: '/images/company-logos/boltshift.svg' },
  { name: 'Lightbox', logo: '/images/company-logos/lightbox.svg' },
  { name: 'FeatherDev', logo: '/images/company-logos/featherdev.svg' },
  { name: 'Spherule', logo: '/images/company-logos/spherule.svg' },
  { name: 'GlobalBank', logo: '/images/company-logos/globalbank.svg' },
  { name: 'Nietzsche', logo: '/images/company-logos/nietzsche.svg' }
];

export default function CompanyLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {companies.map((company) => (
        <div key={company.name} className="flex justify-center">
          <img
            src={company.logo}
            alt={company.name}
            className="h-8 w-auto"
          />
        </div>
      ))}
    </div>
  );
}