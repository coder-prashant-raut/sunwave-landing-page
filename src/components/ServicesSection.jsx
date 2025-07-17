'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  ShieldCheck,
  ThumbsUp,
  Headphones,
} from 'lucide-react'

// Service data
const services = [
  {
    title: 'Efficiency & Power',
    desc: 'Harness top-tier solar efficiency with cutting-edge technology and reliable systems.',
    icon: <Building2 className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: 'Trust & Warranty',
    desc: 'Enjoy peace of mind with our trusted service and long-term warranty support.',
    icon: <ShieldCheck className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: 'High Quality Work',
    desc: 'We ensure precision, reliability, and aesthetic quality in every installation.',
    icon: <ThumbsUp className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: '24*7 Support',
    desc: 'Round-the-clock assistance from our dedicated solar support experts.',
    icon: <Headphones className="w-10 h-10 text-[#89EA5F]" />,
  },
]

// Animation containers
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ServicesSection() {
  return (
    <section className="bg-white font-[Rubik] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subheading */}
        <motion.p
          className="text-[#89EA5F] font-semibold uppercase tracking-wide mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⚡ Why Choose Us
        </motion.p>

        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-5xl  mb-12 text-[#101010]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Providing Solar Energy Solutions
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="bg-amber-50/20 rounded-3xl p-8 text-left shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg  text-[#101010] mb-2">
                {service.title}
              </h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
