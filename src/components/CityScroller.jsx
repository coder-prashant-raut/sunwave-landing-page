'use client'
import React from 'react'

const CityMarquee = () => {
  const cities = [
    'Mumbai',
    'Pune',
    'Nagpur',
    'Nashik',
    'Aurangabad',
    'Solapur',
    'Amravati',
    'Thane',
    'Kolhapur',
    'Latur',
  ]

  return (
    <div className="w-full py-10 bg-white">
      {/* Title */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Where We Provide Our Services
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl mx-auto">
          We proudly serve the top cities of Maharashtra with reliable, premium solutions tailored for every home and business.
        </p>
      </div>

      {/* Marquee Line */}
      <div className="overflow-hidden w-full">
        <div
          className="flex whitespace-nowrap animate-scroll font-extrabold text-[28px] sm:text-[48px] lg:text-[64px] outline-text"
          style={{ animation: 'scroll 40s linear infinite' }}
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              {cities.map((city, index) => (
                <span key={`${i}-${index}`} className="mx-6">
                  {city.toUpperCase()}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .outline-text {
          color: transparent;
          text-shadow:
            1px 0 0 #4ade80,
            -1px 0 0 #4ade80,
            0 1px 0 #4ade80,
            0 -1px 0 #4ade80,
            1px 1px 0 #4ade80,
            -1px -1px 0 #4ade80;
        }
      `}</style>
    </div>
  )
}

export default CityMarquee
