"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664299616537-ebc871029dd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1671808063815-479a4a3e1d8e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const router = useRouter();

  const handleEstimateClick = () => {
    router.push("/calculate"); // or "/estimate-savings" if that's your route
  };

  
const handleEstimateClickEstimate = () => {
  router.push("/estimate");
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 200], [0, -100]);
  const yBg = useTransform(scrollY, [0, 200], [0, 50]); // subtle parallax

  return (
    <section className="relative w-full h-screen overflow-hidden pt-[130px]">
      {/* Parallax Background Image */}
     <div className="absolute inset-0 z-0">
  {images.map((img, i) => (
    <motion.img
      key={i}
      src={img}
      alt="Slide"
      className="w-full h-full object-cover absolute top-0 left-0"
      initial={false}
      animate={{
        opacity: i === current ? 1 : 0,
        scale: i === current ? 1 : 1.02,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  ))}
  
  {/* Optional: soft overlay */}
  <div className="absolute inset-0 bg-opacity-10 backdrop-blur-xs z-10 pointer-events-none"></div>
</div>


      {/* Animated Content */}
      <motion.div
        style={{ y: yText }}
        className="relative z-20 flex flex-col items-center justify-center text-center text-white px-6 h-full"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Power Your Life with{" "}
          <motion.span
            className="text-yellow-400 inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Clean Solar
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-md mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Reliable. Renewable. Rewarding. Let’s build a greener future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
          onClick={handleEstimateClickEstimate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Get Free Estimate
          </motion.button>
          <motion.button
            onClick={handleEstimateClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-yellow-400 text-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-100 hover:text-black transition duration-300"
          >
            Calculate Savings
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
