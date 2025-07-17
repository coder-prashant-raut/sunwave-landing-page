import {
  Mail,
  PhoneCall,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#082f09] px-5 pb-12 text-white pt-10 font-[Rubik]">
      
      {/* Top Contact Info */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-6 pb-10 border-b border-green-800">
        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail size={36} className="text-lime-400" />
          <div>
            <p className="font-semibold text-white">Support & Email</p>
            <p className="text-sm text-white/80">info@domainname.com</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-4">
          <PhoneCall size={36} className="text-lime-400" />
          <div>
            <p className="font-semibold text-white">Customer Support</p>
            <p className="text-sm text-white/80">+01 547 547 5478</p>
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center gap-4">
          <MapPin size={36} className="text-lime-400" />
          <div>
            <p className="font-semibold text-white">Our Location</p>
            <p className="text-sm text-white/80">
              Street no, City, Country 123456
            </p>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 text-lime-400 text-2xl font-bold mb-4">
            ⚡ <span>Solor</span>
          </div>
          <p className="text-white/80 mb-4">
            Green Energy is a long established fact that a reader will be
            distracted by the readable content of a page when.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-lime-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-lime-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-lime-400"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Home</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> About Us</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Services</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Blog</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Hybrid Energy</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Renewable Energy</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Solar Maintenance</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Solar PV Systems</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Solar Solutions</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Privacy Policy</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Terms & Conditions</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Warranty</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Support</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-lime-400"><ArrowRight size={16} /> Damage Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-lime-400 text-[#082f09] text-center md:mx-30 md:py-8 md:text-2xl text-sm font-semibold py-4 rounded-2xl">
        Copyright © 2024 Solor. All rights reserved.
      </div>
    </footer>
  );
}
