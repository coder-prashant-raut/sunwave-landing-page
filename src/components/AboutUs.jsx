"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  "Complete Solar Inverter Installation",
  "Flexible Financing for Solar Equipment",
  "High-Efficiency Battery Storage Options",
  "24x7 Dedicated Support via Call & Chat",
  "MNRE Approved Products & Services",
  "Net Metering Setup Assistance",
  "End-to-End Project Management",
  "5-Year Warranty & Maintenance Plans",
];

const image1 =
  "https://plus.unsplash.com/premium_photo-1663089778829-1a8939751803?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2 =
  "https://cdn.pixabay.com/photo/2023/07/28/22/36/photovoltaic-8156008_1280.jpg";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white font-[Rubik]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="relative w-full">
          {/* Dots background */}
          <div className="absolute top-6 left-6 w-40 h-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] z-0" />

          {/* Main image */}
          <img
            src={image1}
            alt="Solar Panels"
            className="rounded-2xl w-full shadow-lg relative z-10"
          />

          {/* Small image */}
          <img
            src={image2}
            alt="Solar Roof"
            className="w-48 h-32 md:w-64 md:h-40 object-cover rounded-xl shadow-md absolute -bottom-6 -right-6 z-20 border-4 border-white"
          />
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#89EA5F] font-semibold uppercase tracking-wide mb-2 flex items-center gap-2">
            ⚡ About Us
          </p>
          <h2 className="text-3xl md:text-5xl text-[#101010] mb-6 leading-tight">
            Empowering India with Clean Solar Energy
          </h2>

          <p className="text-gray-600 mb-4">
            <strong>SunWave Solar</strong> is a trusted name in solar energy solutions across Maharashtra.
            With over <strong>500+ successful installations</strong> and a growing network of satisfied clients,
            we are on a mission to make clean energy accessible and affordable to all.
          </p>
          <p className="text-gray-600 mb-6">
            We specialize in <strong>turnkey solar EPC projects</strong> for homes, businesses, and industries —
            from consultation and design to installation, maintenance, and support. Our solutions are 
            <span className="text-[#101010] font-medium"> MNRE-compliant</span> and aligned with government subsidy schemes.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-green-700"
              >
                <CheckCircle className="text-[#89EA5F] w-5 h-5" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block bg-[#89EA5F] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-green-500 transition"
          >
            Contact Our Experts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
