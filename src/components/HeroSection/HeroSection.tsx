import React from 'react';

const HeroSection = () => {
  return (
    <div
      id="booking"
      className="parallax-window flex items-center justify-center min-h-screen bg-cover relative"
      style={{ 
        backgroundImage: 'url(/assets/images/frontview.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="text-center bg-gray-800 bg-opacity-75 p-8 rounded-md">
        <h1 className="text-4xl font-bold text-white mb-4">Discover Your Perfect Getaway</h1>
        <p className="text-lg text-white mb-8">Unwind, relax, and create lasting memories in the most beautiful destinations around the world.</p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

