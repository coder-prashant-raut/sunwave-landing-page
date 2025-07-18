'use client'

import { motion } from 'framer-motion'
import { ClipboardList, SearchCheck, PanelTopOpen } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    id: '01',
    title: 'Project Planning',
    desc: 'We analyze your energy usage and property layout to plan a perfect solar solution.',
    icon: <ClipboardList className="w-10 h-10 text-white" />,
  },
  {
    id: '02',
    title: 'Research & Analysis',
    desc: 'Our team conducts detailed feasibility, cost, and ROI analysis for maximum savings.',
    icon: <SearchCheck className="w-10 h-10 text-white" />,
  },
  {
    id: '03',
    title: 'Solar Installation',
    desc: 'Expert installation with premium solar panels and full post-installation support.',
    icon: <PanelTopOpen className="w-10 h-10 text-white" />,
  },
]

export default function WorkProcessSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white font-sans">
      <div className="max-w-7xl mx-auto text-center shadow-lg px-2 py-5 bg-[#f3f5f2]">
        <motion.p
          className="text-[#89EA5F] uppercase tracking-wider font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          ⚡ Our Latest Process
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl  text-[#0C2B0C]  mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work Process
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center px-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              

              {/* Icon container */}
              <div className="bg-lime-400 p-6 rounded-2xl shadow-xl relative z-10 hover:scale-105 transition-transform duration-300">
                {step.icon}
                <span className="absolute top-[-10px] right-[-10px] bg-green-900 text-lime-300 text-xs w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">
                  {step.id}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-green-900 dark:text-lime-300">
                {step.title}
              </h3>
              <p className="text-black/45 mt-2 text-sm max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md"
          >
            Contact Us for Consultation →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
