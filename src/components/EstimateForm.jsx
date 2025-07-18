"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const toastStyles = {
  style: {
    background: "#1f2937",
    color: "#facc15",
    padding: "16px 24px",
    fontSize: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    border: "1px solid #facc15",
  },
  iconTheme: {
    primary: "#facc15",
    secondary: "#1f2937",
  },
};

export default function EstimateForm() {
  const [form, setForm] = useState({ name: "", phone: "", location: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return; // Allow only numbers
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, location } = form;

    if (!name.trim() || !phone.trim() || !location.trim()) {
      toast.error("⚠️ Please fill in all fields.", toastStyles);
      return;
    }

    if (!/^[0-9]{10}$/.test(phone.trim())) {
      toast.error("📞 Enter a valid 10-digit phone number.", toastStyles);
      return;
    }

    setIsSending(true);
    toast.loading("Sending request via WhatsApp...", toastStyles);

    const msg = `🌞 Solar Estimate Request:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📍 Location: ${location}`;
    const whatsappURL = `https://wa.me/919067751221?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      toast.dismiss();
      toast.success("✅ Sent via WhatsApp!", toastStyles);
      setForm({ name: "", phone: "", location: "" });
      setIsSending(false);
    }, 2000);
  };

  return (
    <section className="px-4 pb-10 bg-white">
      <Toaster position="top-center" toastOptions={{ duration: 3500 }} containerStyle={{ top: 70 }} />

      <motion.div
        className="max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          📞 Get a <span className="text-yellow-500">Free Solar Estimate</span>
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Enter your details below and our experts will reach out to you on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            maxLength={10}
            inputMode="numeric"
            onChange={handleChange}
            placeholder="Phone Number"
            className="input"
          />

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="City / Location"
            className="input"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSending}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl transition-all"
          >
            {isSending ? "Sending..." : "Send via WhatsApp"}
          </motion.button>
        </form>
      </motion.div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid #ccc;
          background: #fff;
          color: #111827;
          font-size: 1rem;
          transition: border 0.3s;
        }
        .input:focus {
          border-color: #facc15;
          outline: none;
          box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.3);
        }
      `}</style>
    </section>
  );
}
