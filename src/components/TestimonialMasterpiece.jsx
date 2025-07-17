"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Factory Owner, Pune",
    message:
      "Clean Solar turned my factory into a power saver. In just months, my bills dropped significantly. Their team was efficient and respectful.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sonal Desai",
    role: "Homeowner, Ahmedabad",
    message:
      "I was skeptical about solar panels. But now I can proudly say, it’s the best decision I made for my family. Clean Solar delivered top-notch quality!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rakesh Singh",
    role: "Business Owner, Indore",
    message:
      "From consultation to installation – the process was smooth and transparent. Highly recommend Clean Solar for reliable service.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Priya Kulkarni",
    role: "Architect, Mumbai",
    message:
      "I recommend Clean Solar to my clients for smart, aesthetic and sustainable installations. Their solutions blend beautifully with modern architecture.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialMasterpiece() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full bg-gradient-to-b from-yellow-50 to-white dark:from-[#1f1f1f] dark:to-black py-28 px-4 md:px-8 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-yellow-300 dark:bg-yellow-500 rounded-full blur-[120px] opacity-30 z-0 animate-pulse"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          Real stories. Real savings. Hear how Clean Solar is changing lives and lowering electricity bills across India.
        </p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -80, scale: 0.95 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-3xl mx-auto px-10 py-14 relative overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.08, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500 dark:bg-yellow-400 rounded-full blur-3xl"
              />

              <Quote className="w-10 h-10 text-yellow-500 mx-auto mb-6" />
              <motion.img
                src={current.image}
                alt={current.name}
                className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mb-6 shadow-xl object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
              />

              <div className="flex justify-center gap-1 mb-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
              </div>

              <blockquote className="text-xl italic text-gray-700 dark:text-gray-100 leading-relaxed mb-8">
                “{current.message}”
              </blockquote>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {current.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{current.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}