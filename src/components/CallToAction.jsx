import React from "react";
import { PhoneCall, MessageCircleMore } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#f3f5f2] rounded-3xl relative shadow-lg gap-6 overflow-hidden">

        {/* Image Block */}
        <div className="w-full md:w-1/3">
          <img
            src="https://images.pexels.com/photos/8853536/pexels-photo-8853536.jpeg"
            alt="Solar Expert"
            className="rounded-2xl object-cover w-full h-full max-h-[300px] shadow-md"
          />
        </div>

        {/* Call Icon */}
        <div className="absolute top-2/4 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex justify-center">
          <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center animate-ping-slow shadow-lg border-4 border-white">
            <PhoneCall size={28} />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[60%] text-center md:text-left px-4 py-4">
          <h2 className="text-2xl md:text-4xl font-[Rubik] text-gray-900 font-semibold mb-3">
            Need Help Going Solar?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Talk to our solar experts today. We'll guide you through the right system, savings, and everything you need to make an informed decision — hassle free!
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <a
              href="tel:8007333383"
              className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 rounded-full text-sm flex items-center gap-2 shadow-md"
            >
              <PhoneCall size={18} />
              Call Now: 80073 33383
            </a>
            <a
              href="https://wa.me/918007333383"
              className="border border-green-600 text-green-700 hover:bg-green-50 transition px-6 py-2 rounded-full text-sm flex items-center gap-2"
            >
              <MessageCircleMore size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
