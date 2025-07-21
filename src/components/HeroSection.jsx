'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const router = useRouter()

  const handleEstimateClick = () => router.push('/calculate')
  const handleEstimateClickEstimate = () => router.push('/estimate')

  return (
    <section
      className="relative w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat pt-35"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 max-w-7xl mx-auto text-white gap-6">
        {/* Welcome Line */}
        <div className="flex items-center gap-2 text-green-400 text-sm sm:text-base font-semibold mb-2">
          <span>☀️</span>
          <span>Welcome to Solar SunWave</span>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight font-[Poppins]"
        >
          Power Your Future <br />
          with Clean Solar Energy
        </motion.h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg md:text-xl font-light max-w-2xl text-gray-200 font-[Poppins]">
          Save money, save the planet. Let’s bring sustainable power to your home or business with state-of-the-art solar solutions.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={handleEstimateClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all"
          >
            Calculate Savings
          </button>
          <button
            onClick={handleEstimateClickEstimate}
            className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}