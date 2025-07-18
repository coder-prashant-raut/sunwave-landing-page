'use client';
import React from 'react';

const CityScroller = () => {
  const cities = [
    'Pune',
    'Nagpur',
    'Beed',
    'Aurangabad',
    'Solapur',
    'Amravati',
    'Thane',
    'Kolhapur',
    'Latur',
  ];

  return (
    <div className="w-full py-12 bg-white">
      {/* Title */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl sm:text-5xl  font-[Rubik] text-gray-800">
          We Are Present Here
        </h2>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          We proudly serve the top cities of Maharashtra with reliable, premium solutions tailored for every home and business.
        </p>
      </div>

      {/* Marquee Scrolling Text */}
      <div className="overflow-hidden relative w-full h-[80px] sm:h-[100px] lg:h-[120px]">
        <div className="absolute flex animate-marquee whitespace-nowrap font-extrabold text-[28px] sm:text-[48px] lg:text-[64px] outline-text">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {cities.map((city, index) => (
                <span key={`${i}-${index}`} className="mx-8">
                  {city.toUpperCase()}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px #4ade80;
          text-stroke: 1px #4ade80; /* Fallback for some browsers */
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CityScroller;
