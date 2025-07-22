"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
 {
  name: "Deepak Sharma",
  role: "School Principal, Nashik",
  message:
    "Our school made the switch to solar with Clean Solar and we've saved immensely on electricity bills. The kids also love learning about green energy firsthand!",
  image: "https://randomuser.me/api/portraits/men/58.jpg",
},
{
  name: "Meera Joshi",
  role: "Café Owner, Lonavala",
  message:
    "Solar energy helped reduce our operational costs. Clean Solar’s team was punctual, polite, and the system works flawlessly. Truly professional service.",
  image: "https://randomuser.me/api/portraits/women/68.jpg",
},
{
  name: "Anil Deshmukh",
  role: "Warehouse Manager, Aurangabad",
  message:
    "We needed a dependable solar partner, and Clean Solar delivered. Our monthly power expenses are down by 40%. Fantastic investment.",
  image: "https://randomuser.me/api/portraits/men/71.jpg",
},
{
  name: "Neha Patil",
  role: "Real Estate Developer, Kolhapur",
  message:
    "We integrated Clean Solar’s systems in all our premium villas. Buyers love the eco-conscious angle. Their installation is sleek and non-intrusive.",
  image: "https://randomuser.me/api/portraits/women/52.jpg",
},
{
  name: "Rahul Bansal",
  role: "Retail Store Owner, Nagpur",
  message:
    "Switching to solar was a big decision. Clean Solar made it easy with transparent pricing and smooth execution. Highly recommended for small businesses.",
  image: "https://randomuser.me/api/portraits/men/12.jpg",
},
{
  name: "Swati Pandey",
  role: "NGO Director, Satara",
  message:
    "We wanted to set an example in sustainability. Clean Solar guided us with patience and expertise. Our donors are impressed with the results.",
  image: "https://randomuser.me/api/portraits/women/30.jpg",
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900/75 mb-4 leading-tight">
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

            <blockquote className="text-base sm:text-lg italic text-gray-500 leading-relaxed mb-6">
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
