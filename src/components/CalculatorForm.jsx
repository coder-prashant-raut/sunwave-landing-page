"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CalculatorForm() {
  const [units, setUnits] = useState("");
  const [savings, setSavings] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const estimatedSavings = units * 7 * 0.6;
    setSavings(estimatedSavings.toFixed(2));
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
          🌞 Estimate Your Monthly <span className="text-yellow-500">Solar Savings</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Enter your average monthly electricity usage and discover how much you can save with solar energy.
        </p>

        <form onSubmit={handleCalculate} className="space-y-6">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            className="transition-transform duration-300"
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Average Electricity Units per Month (kWh)
            </label>
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              required
              placeholder="e.g. 300"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition-all"
          >
            🔍 Calculate Now
          </motion.button>
        </form>

        {savings !== null && (
          <motion.div
            className="mt-8 text-center text-lg font-medium text-green-600 dark:text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            💰 Estimated Monthly Savings: ₹{savings}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
