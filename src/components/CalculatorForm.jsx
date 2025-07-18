"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CalculatorForm() {
  const router = useRouter();

  const [units, setUnits] = useState("");
  const [rate, setRate] = useState(7);
  const [efficiency, setEfficiency] = useState(75);
  const [savings, setSavings] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (e) => {
    e.preventDefault();

    if (!units || units <= 0 || !rate || !efficiency) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    toast.loading("🔄 Calculating savings...", { id: "calc" });

    setTimeout(() => {
      toast.dismiss("calc");

      const baseCost = units * rate;
      const monthly = baseCost * (efficiency / 100);
      setSavings({
        monthly: monthly.toFixed(2),
        yearly: (monthly * 12).toFixed(2),
      });

      toast.success("🎉 Savings calculated!");
      setLoading(false);
    }, 2000);
  };

  const handleEstimate = () => router.push("/estimate");
  const handleContact = () => {
    const section = document.getElementById("contact");
    section ? section.scrollIntoView({ behavior: "smooth" }) : router.push("/contact");
  };

  return (
    <section className="bg-white pb-14 px-4">
      <Toaster position="top-center" />

      <motion.div
        className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg p-8 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          🌞 Calculate Your <span className="text-yellow-500">Solar Savings</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Estimate your monthly and yearly savings by switching to solar.
        </p>

        <form onSubmit={handleCalculate} className="space-y-6">
          {/* Units Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Electricity Usage (kWh)
            </label>
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              placeholder="e.g. 350"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Rate Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Electricity Rate (₹ per kWh)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g. 7"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Efficiency Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Solar System Efficiency (%)
            </label>
            <input
              type="number"
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
              placeholder="e.g. 75"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition-all"
          >
            🔍 {loading ? "Calculating..." : "Calculate Now"}
          </motion.button>
        </form>

        {/* Results */}
        {savings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 bg-green-50 border border-green-300 p-6 rounded-2xl text-center shadow-md"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">
              💰 Your Estimated Savings
            </h3>
            <div className="text-2xl text-green-800 font-semibold">
              ₹{savings.monthly}/month &nbsp;|&nbsp; ₹{savings.yearly}/year
            </div>

            <p className="text-gray-600 mt-2 text-sm">
              Based on your usage and selected efficiency.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleEstimate}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2.5 rounded-xl shadow"
              >
                📈 Get Full Estimate
              </button>
              <button
                onClick={handleContact}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-5 py-2.5 rounded-xl shadow"
              >
                ✉️ Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
