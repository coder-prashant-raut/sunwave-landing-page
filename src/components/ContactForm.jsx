"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

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

    if (!/^[0-9]{10}$/.test(phone.trim())) {
      toast.error("📞 Please enter a valid 10-digit phone number.", toastStyles);
      return;
    }

    setIsSending(true);
    toast.loading("Sending message via WhatsApp...", toastStyles);

    const msg = `New Inquiry from Clean Solar Website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n⏰ Preferred Time: ${timeSlot}\n💬 Message: ${message}`;

    setTimeout(() => {
      window.open(`https://wa.me/918007333383?text=${encodeURIComponent(msg)}`, "_blank");
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
      "name": "Clean Solar Agency",
      "url": "https://www.cleansolar.in",
      "logo": "https://www.cleansolar.in/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9876543210",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"],
          "email": "support@cleansolar.in"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Solar Street",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/cleansolaragency",
        "https://www.instagram.com/cleansolaragency",
        "https://www.linkedin.com/company/cleansolaragency"
      ]
    })
  }}
/>


      <Toaster position="top-center" toastOptions={{ duration: 3500 }} containerStyle={{ top: 70 }} />

      <main className="min-h-screen pt-10 pb-20 px-4 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-3xl border border-gray-200 p-8 font-[Rubik] shadow-xl">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
              🚀 Reach <span className="text-[#89EA5F]">SunWave</span>
            </h1>
            <p className="text-center text-gray-500 mb-10">
              Let us light up your world. Fill in your details and we’ll get back to you via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="input" />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="input" />
              </div>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} inputMode="numeric" maxLength={10} placeholder="Phone Number" className="input" />
              <select name="timeSlot" value={form.timeSlot} onChange={handleChange} className="input">
                <option value="">Preferred Time to Contact</option>
                <option>Morning (8AM - 11AM)</option>
                <option>Afternoon (12PM - 4PM)</option>
                <option>Evening (4PM - 8PM)</option>
                <option>After 8PM</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Write your message here..." className="input"></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="w-full bg-[#89EA5F] hover:bg-green-500 text-black font-bold py-3 px-6 rounded-xl transition-all"
              >
                {isSending ? "Sending..." : "Send via WhatsApp"}
              </motion.button>
            </form>

            <div className="mt-10 text-sm text-center text-gray-500">
              We serve clients across <strong>Maharashtra</strong>. Let’s make solar energy accessible together.
            </div>

            <div className="mt-8">
             <iframe
    title="Sunwave Solar Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3520225305837!2d73.85731037519673!3d18.557743367687872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08c8c7c46df%3A0x46b74f5e376db084!2sSunwave%20Solar!5e0!3m2!1sen!2sin!4v1721554782503!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
            </div>
          </div>
        </motion.div>
      </main>

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
          border-color: #89EA5F;
          outline: none;
          box-shadow: 0 0 0 3px rgba(137, 234, 95, 0.3);
        }
      `}</style>
    </>
  );
}
