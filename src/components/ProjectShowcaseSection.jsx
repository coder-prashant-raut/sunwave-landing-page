"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const projects = [
  {
    type: "Industrial",
    client: "Dukat Industries",
    city: "Pune, Maharashtra",
    image:
      "https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Industrial",
    client: "Galaxy Coatings",
    city: "Vadodara, Gujarat",
    image:
      "https://plus.unsplash.com/premium_photo-1664299624896-53ef61aedd35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Domestic",
    client: "Rajesh Sharma",
    city: "Indore, MP",
    image:
      "https://plus.unsplash.com/premium_photo-1682145578037-0369879262a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Domestic",
    client: "Priya Kulkarni",
    city: "Nashik, Maharashtra",
    image:
      "https://plus.unsplash.com/premium_photo-1682148014710-095131cd99a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Industrial",
    client: "Shakti Engineering",
    city: "Ahmedabad, Gujarat",
    image:
      "https://plus.unsplash.com/premium_photo-1664476714908-148eea2dd781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProjectShowcaseSection() {
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes((prev) => {
        const allIndexes = projects.map((_, i) => i);
        const remaining = allIndexes.filter(i => !prev.includes(i));
        const replaceIndex = Math.floor(Math.random() * 3);
        const newIndex = remaining.length > 0 ? remaining[Math.floor(Math.random() * remaining.length)] : prev[(replaceIndex + 1) % 3];
        const newVisible = [...prev];
        newVisible[replaceIndex] = newIndex;
        return [...newVisible];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-[#0f0f0f] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Our Successful Solar Installations
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Trusted by industries and households across India. Each project showcases our commitment to quality, innovation, and energy independence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleIndexes.map((index, i) => {
            const project = projects[index];
            return (
              <motion.div
                key={`${index}-${i}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition duration-500 group"
              >
                <img
                  src={project.image}
                  alt={`${project.type} project by ${project.client}`}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Verified
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-1">
                    <BadgeCheck className="w-4 h-4" />
                    {project.type} Project
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white leading-snug">
                    {project.client}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {project.city}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
