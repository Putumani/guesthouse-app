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
      <div className="text-center  p-8 rounded-md">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

