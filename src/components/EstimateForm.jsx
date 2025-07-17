"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EstimateForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ You can send this data to backend or store in localStorage
    setSubmitted(true);
  };

  return (
    <section className="px-4 py-12 md:py-20 bg-gradient-to-b from-yellow-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          📞 Get a <span className="text-yellow-500">Free Solar Estimate</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Fill out your details below and our solar experts will reach out with a custom estimate.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileFocus={{ scale: 1.02 }} className="transition-transform">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Rahul Sharma"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }} className="transition-transform">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Phone Number
              </label>
              <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  name="phone"
  maxLength={10}
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, phone: value }));
    }
  }}
  required
  placeholder="e.g. 9876543210"
  className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>

            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }} className="transition-transform">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                City / Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g. Pune, Maharashtra"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition-all"
            >
              📩 Request Estimate
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="mt-6 text-center text-green-600 dark:text-green-400 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Your request has been submitted! We'll contact you soon.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
