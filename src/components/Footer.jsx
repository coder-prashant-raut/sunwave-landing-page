import {
  Mail,
  PhoneCall,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import DeveloperCredit from "./DeveloperCredit";
import Image from "next/image";
import Link from "next/link";
import SunwaveLogo from '../../public/sunwave-logo.png'

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
            <p className="text-sm text-white/80">support@sunwavesolarenergy.in</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-4">
          <PhoneCall size={36} className="text-lime-400" />
          <div>
            <p className="font-semibold text-white">Customer Support</p>
            <p className="text-sm text-white/80">+91 80073 33383</p>
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center gap-4">
          <MapPin size={36} className="text-lime-400" />
          <div>
            <p className="font-semibold text-white">Our Location</p>
            <a
              href="https://maps.app.goo.gl/tzwyQWmTohgKmXTv5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-lime-400"
            >
              Sneha Residency ,52/4/2 ,Old Mundhwa rod , <br /> Galande Nagar, Near Mother Teressa
School, <br />
Vadgaon sheri ,Pune 411014
            </a>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 text-lime-400 text-2xl font-bold mb-4">
             <Link href="/" className="block w-[125px] md:w-[155px]">
        <Image
          src={SunwaveLogo}
          alt="SunWave Logo"
          className="w-full h-auto object-contain"
          priority
        />
      </Link>
          </div>
          <p className="text-white/80 mb-4">
            We bring sustainable solar solutions to homes and businesses for a greener tomorrow.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1FCT9Uu7P8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/sunwave_solar_energy?igsh=eHRqZ2UyMHh5ZDBp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://maps.app.goo.gl/tzwyQWmTohgKmXTv5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400"
            >
              <MapPin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/" className="flex items-center gap-2 hover:text-lime-400">
                <ArrowRight size={16} /> Home
              </a>
            </li>
            <li>
              <a href="/about" className="flex items-center gap-2 hover:text-lime-400">
                <ArrowRight size={16} /> About Us
              </a>
            </li>
            <li>
              <a href="/services" className="flex items-center gap-2 hover:text-lime-400">
                <ArrowRight size={16} /> Services
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center gap-2 hover:text-lime-400">
                <ArrowRight size={16} /> Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services (Text Only) */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2"><ArrowRight size={16} /> Hybrid Energy</li>
            <li className="flex items-center gap-2"><ArrowRight size={16} /> Renewable Energy</li>
            <li className="flex items-center gap-2"><ArrowRight size={16} /> Solar Maintenance</li>
            <li className="flex items-center gap-2"><ArrowRight size={16} /> Solar PV Systems</li>
            <li className="flex items-center gap-2"><ArrowRight size={16} /> Solar Solutions</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/privacy-policy" className="flex items-center gap-2 hover:text-lime-400">
                <ArrowRight size={16} /> Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="flex items-center gap-2 hover:text-lime-400">
                <ArrowRight size={16} /> Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      {/* Copyright */}
<div className="bg-lime-400 text-[#082f09] text-center text-sm font-semibold py-4 rounded-2xl">
  © {new Date().getFullYear()} SunWave. All rights reserved.
</div>


<DeveloperCredit/>
    </footer>
  );
}
