"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

// Custom toast styles
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

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", timeSlot: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message, timeSlot } = form;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim() || !timeSlot.trim()) {
      toast.error("⚠️ Please fill in all fields.", toastStyles);
      return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      toast.error("📞 Please enter a valid 10-digit phone number.", toastStyles);
      return;
    }

    setIsSending(true);
    toast.loading("Sending message via WhatsApp...", toastStyles);

    const msg = `New Inquiry from Clean Solar Website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n⏰ Preferred Time: ${timeSlot}\n💬 Message: ${message}`;

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
      toast.dismiss();
      toast.success("✅ Message sent via WhatsApp!", toastStyles);
      setForm({ name: "", email: "", phone: "", message: "", timeSlot: "" });
      setIsSending(false);
    }, 2000);
  };

  return (
    <>
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Clean Solar Agency",
            url: "https://your-domain.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9876543210",
              contactType: "Customer Service",
              areaServed: "IN",
              availableLanguage: "Hindi, English"
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Solar Street",
              addressLocality: "Pune",
              addressRegion: "MH",
              postalCode: "411001",
              addressCountry: "IN"
            }
          })
        }}
      />
      <Toaster position="top-center" toastOptions={{ duration: 3500 }} containerStyle={{ top: 70 }} />
      <main className="min-h-screen pt-10 pb-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
            📬 Contact <span className="text-yellow-500">Clean Solar</span>
          </h1>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            We'd love to hear from you. Fill the form or reach out via the contact info below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]*"
                placeholder="e.g. 9876543210"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Preferred Time to Contact
              </label>
              <select
                name="timeSlot"
                value={form.timeSlot}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select a time slot</option>
                <option value="Morning (8AM - 11AM)">Morning (8AM - 11AM)</option>
                <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                <option value="After 8PM">After 8PM</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSending}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl transition-all disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              📍 <strong>Address:</strong> 123 Solar Street, Pune, MH, India
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              📞 <strong>Phone:</strong> +91-9876543210
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ✉️ <strong>Email:</strong> support@cleansolar.com
            </p>
          </div>

          <div className="mt-10">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-2xl border-0 shadow-xl"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </main>
    </>
  );
}
