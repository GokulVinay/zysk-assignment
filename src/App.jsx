import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;