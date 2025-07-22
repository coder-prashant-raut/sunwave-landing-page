'use client'

import { motion } from 'framer-motion'
import { ClipboardList, SearchCheck, PanelTopOpen } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    id: '01',
    title: 'Project Planning',
    desc: 'We assess your power usage and property design to create the most efficient and cost-effective solar setup for you.',
    icon: <ClipboardList className="w-10 h-10 text-white" />,
  },
  {
    id: '02',
    title: 'Research & Analysis',
    desc: 'Detailed feasibility analysis including cost projections, government incentives, and ROI to ensure maximum value.',
    icon: <SearchCheck className="w-10 h-10 text-white" />,
  },
  {
    id: '03',
    title: 'Expert Installation',
    desc: 'Certified professionals handle installation using industry-grade components and offer full post-installation support.',
    icon: <PanelTopOpen className="w-10 h-10 text-white" />,
  },
]

export default function WorkProcessSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-white font-sans">
      <div className="max-w-7xl mx-auto text-center shadow-lg px-4 py-12 bg-[#f3f5f2] rounded-3xl">
        {/* Subtitle */}
        <motion.p
          className="text-[#89EA5F] uppercase tracking-widest font-semibold mb-2 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⚡ Our Latest Process
        </motion.p>

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#0C2B0C] font-bold mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How We Work to Power Your Future
        </motion.h2>

        {/* Process Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center px-4 sm:px-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon Box */}
              <div className="bg-lime-500 p-6 rounded-2xl shadow-lg relative z-10 hover:scale-110 transition-all duration-300 group">
                <div className="transition-transform duration-300 group-hover:rotate-6">
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 bg-green-900 text-lime-300 text-xs w-8 h-8 rounded-full flex items-center justify-center font-bold shadow">
                  {step.id}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-xl font-semibold text-green-900 dark:text-lime-300">
                {step.title}
              </h3>
              <p className="text-black/60 mt-2 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:scale-105 hover:shadow-xl"
          >
            Book a Free Solar Consultation →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
