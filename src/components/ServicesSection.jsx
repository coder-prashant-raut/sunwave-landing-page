"use client";
import { motion } from "framer-motion";
import { Sun, Wrench, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Solar Panel Installation",
    desc: "Professional solar panel setup tailored to your roof design and energy needs. Includes full site inspection and energy simulation.",
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Maintenance & Repair",
    desc: "Real-time monitoring and annual maintenance to ensure 100% uptime and energy efficiency. Emergency support included.",
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Solar Consultation",
    desc: "Expert advice to help you choose the best solar solution. Understand payback periods, subsidies, and ROI for your property.",
    icon: <Lightbulb className="w-8 h-8 text-green-500" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-[#0e0e0e] dark:to-[#111] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Empowering India with Solar Energy
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore our solar energy services designed to help households and businesses transition to clean, renewable power.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="relative group bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl overflow-hidden border border-transparent hover:border-yellow-400"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-400 opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition" />
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
