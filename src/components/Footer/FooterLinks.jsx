import React from 'react';

const footerSections = {
  Product: [
    { name: 'Overview', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Solutions', href: '#', badge: 'New' },
    { name: 'Tutorials', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Releases', href: '#' },
  ],
  Company: [
    { name: 'About us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Media kit', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Help centre', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'Support', href: '#' },
  ],
  'Use cases': [
    { name: 'Startups', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'Government', href: '#' },
    { name: 'SaaS centre', href: '#' },
    { name: 'Marketplaces', href: '#' },
    { name: 'Ecommerce', href: '#' },
  ],
  Social: [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'AngelList', href: '#' },
    { name: 'Dribbble', href: '#' },
  ],
  Legal: [
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Licenses', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Contact', href: '#' },
  ],
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
      {Object.entries(footerSections).map(([title, links]) => (
        <div key={title}>
          <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
                  {link.name}
                  {link.badge && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded">
                      {link.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}