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
    <section className="relative w-full bg-[#f9fdf7] py-20 px-4 sm:px-6 lg:px-8 font-[Rubik] overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#89EA5F] opacity-10 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900/55 mb-4 leading-tight">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Real stories. Real savings. Discover how Clean Solar transforms lives across India — one rooftop at a time.
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white rounded-xl sm:rounded-3xl shadow-[0_12px_50px_-12px_rgba(0,0,0,0.2)] max-w-lg mx-auto px-6 py-10 sm:px-10 sm:py-12 border border-[#ebfbe2] dark:border-[#1f1f1f] backdrop-blur-md"
          >
            <Quote className="w-8 h-8 text-[#89EA5F] mx-auto mb-6" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
              className="relative w-20 h-20 mx-auto mb-5"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#89EA5F] to-yellow-300 opacity-40 blur-lg z-0" />
              <img
                src={current.image}
                alt={current.name}
                className="relative z-10 w-20 h-20  border-white object-cover shadow-lg"
              />
            </motion.div>

            <div className="flex justify-center gap-1 mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                ))}
            </div>

            <blockquote className="text-base sm:text-lg italic text-gray-300 leading-relaxed mb-6">
              “{current.message}”
            </blockquote>

            <h3 className="text-lg font-semibold text-gray-900 ">
              {current.name}
            </h3>
            <p className="text-sm text-[#89EA5F]">
              {current.role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === i
                  ? "bg-[#89EA5F] scale-110 shadow"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
