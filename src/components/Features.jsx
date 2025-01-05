import React from 'react';
import { ChatBubbleLeftIcon, ChartBarIcon, UserGroupIcon, CogIcon, LinkIcon, UserIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    icon: UserGroupIcon,
  },
  {
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: ChatBubbleLeftIcon,
  },
  {
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and customize them in a couple clicks.',
    icon: ChartBarIcon,
  },
  {
    title: 'Connect with customers',
    description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    icon: UserIcon,
  },
  {
    title: 'Connect the tools you already use',
    description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    icon: LinkIcon,
  },
  {
    title: 'Our people make the difference',
    description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    icon: CogIcon,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Analytics that feels like it's from the future
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative">
              <div className="flex items-center space-x-4">
                <feature.icon className="h-6 w-6 text-gray-600" />
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}