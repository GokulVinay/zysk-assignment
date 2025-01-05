import React from 'react';

const posts = [
  {
    category: 'Design',
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    image: '/images/Image.png',
    author: {
      name: 'Olivia Rhye',
      date: '20 Jan 2024',
      avatar: '/images/Avatar (1).png'
    }
  },
  {
    category: 'Product',
    title: 'Migrating to Linear 101',
    description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
    image: '/images/Image (1).png',
    author: {
      name: 'Phoenix Baker',
      date: '19 Jan 2024',
      avatar: '/images/Avatar (3).png'
    }
  },
  {
    category: 'Software Engineering',
    title: 'Building your API stack',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: '/images/Image (2).png',
    author: {
      name: 'Lana Steiner',
      date: '18 Jan 2024',
      avatar: '/images/Avatar (2).png'
    }
  }
];

export default function BlogSection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-red-500 text-sm">Our blog</span>
            <h2 className="text-3xl font-bold mt-1">Latest blog posts</h2>
            <p className="text-gray-600 mt-2">
              Tool and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className="text-red-500 hover:text-red-600">
            View all posts →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="text-sm text-red-500 mb-2">{post.category}</div>
              <h3 className="text-xl font-semibold group-hover:text-red-500 mb-2">
                {post.title} →
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-8 w-8 rounded-full mr-3"
                />
                <div>
                  <div className="text-sm font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}