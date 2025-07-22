'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  ShieldCheck,
  ThumbsUp,
  Headphones,
  PlugZap,
  LayoutDashboard,
  BatteryCharging,
  FileCheck,
} from 'lucide-react'



// Service data
const services = [
  {
    title: "Efficiency & Power",
    desc: "Harness maximum solar energy with our high-efficiency Tier-1 solar panels, optimized for both performance and durability. Ideal for Indian climates with excellent energy output even in low-light conditions.",
    icon: <Building2 className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: "Trust & Warranty",
    desc: "Backed by industry-leading warranties of up to 25 years, we offer trusted products, certified components, and end-to-end project assurance for your peace of mind.",
    icon: <ShieldCheck className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: "High Quality Work",
    desc: "Our expert technicians follow stringent safety and quality protocols, ensuring every solar setup is precise, long-lasting, and visually aesthetic.",
    icon: <ThumbsUp className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: "24×7 Support",
    desc: "Enjoy uninterrupted service with our dedicated helpline and remote monitoring tools. Our team is always ready to assist with queries, updates, and troubleshooting.",
    icon: <Headphones className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: "End-to-End Net Metering",
    desc: "From paperwork to grid synchronization, we handle the complete net metering process, helping you save more by exporting surplus electricity back to the grid.",
    icon: <PlugZap className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
  title: "Customized Solar System Design",
  desc: "We provide tailor-made solar designs based on your rooftop area, shadow analysis, and energy usage. Our experts ensure maximum output with the most efficient layout for your home or business.",
  icon: <LayoutDashboard className="w-10 h-10 text-[#89EA5F]" />,
},
  {
    title: "Battery Backup Solutions",
    desc: "Stay powered during outages with lithium-ion or lead-acid battery integration. Ideal for homes and businesses requiring uninterrupted energy supply.",
    icon: <BatteryCharging className="w-10 h-10 text-[#89EA5F]" />,
  },
  {
    title: "Government Subsidy Assistance",
    desc: "Get expert help in applying for MNRE and state subsidies. We manage end-to-end documentation to ensure faster approvals and maximum savings.",
    icon: <FileCheck className="w-10 h-10 text-[#89EA5F]" />,
  },
];


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
