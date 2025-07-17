import React from "react";
import { PhoneCall } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      {/* Full-width responsive container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#f3f5f2] rounded-3xl relative shadow-lg gap-6 ">

        {/* Image Block */}
        <div className="w-full md:w-1/3">
          <img
            src="https://images.pexels.com/photos/8853536/pexels-photo-8853536.jpeg"
            alt="Solar Expert"
            className="rounded-2xl object-cover w-full h-full max-h-[280px] shadow-md"
          />
        </div>

        {/* Call Icon (centered for desktop, inline for mobile) */}
        <div className="absolute top-2/5 md:left-1/3 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2   z-10 flex justify-center mt-4 md:mt-0">
          <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center animate-pulse shadow-lg border-4 border-white">
            <PhoneCall size={28} />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[60%] text-center md:text-left mt-4 md:mt-0 px-4 py-3">
          <h2 className="text-2xl md:text-4xl font-[Rubik] text-gray-900 mb-4 leading-snug">
            Have Questions?{" "}
            <span className="text-green-600 font-semibold">Call Us 800-001-658</span>
          </h2>
          <p className="text-gray-600 text-base">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
