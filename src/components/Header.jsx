'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Voices of Trust', href: '/testimonials' },
  ];

  return (
    <header className="w-full z-50 absolute top-0 left-0">
      {/* Top Info Bar */}
      <div className="bg-transparent text-white text-sm px-4 md:px-36 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-row flex-wrap gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl text-[#89EA5F]" />
            <a
              href="mailto:support@sunwavesolarenergy.in"
              className={isHome ? 'text-white' : 'text-black'}
            >
              support@sunwavesolarenergy.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-xl text-[#89EA5F]" />
            <a
              href="tel:+918007333383"
              className={isHome ? 'text-white' : 'text-black'}
            >
              +91 80073 33383
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 justify-center mt-2 sm:mt-0">
          <a
            href="https://www.facebook.com/share/1FCT9Uu7P8/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#89EA5F] hover:bg-green-400 text-black p-2 rounded-md transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sunwave_solar_energy?igsh=eHRqZ2UyMHh5ZDBp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#89EA5F] hover:bg-green-400 text-black p-2 rounded-md transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://maps.app.goo.gl/tzwyQWmTohgKmXTv5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#89EA5F] hover:bg-green-400 text-black p-2 rounded-md transition"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="relative">
        <div className="bg-white text-black shadow-md rounded-3xl px-6 py-4 max-w-7xl mx-auto w-[95%] flex justify-between items-center">
           <Link href="/" className="block w-[125px] md:w-[155px]">
       <img
  src="https://marathibatmya.in/wp-content/uploads/2025/07/sunwave-logo.png"
  alt="SunWave Logo"
  className="w-full h-auto object-contain"
  width={155}
  height={50}
  priority
/>
      </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-green-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#89EA5F] hover:bg-green-400 text-black/80 text-lg font-semibold py-2 px-4 rounded-full transition"
            >
              Contact us
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <div className="md:hidden z-50">
            <button onClick={() => setNavOpen(!navOpen)} aria-label="Toggle Menu">
              {navOpen ? (
                <FiX size={28} className="text-[#89EA5F] transition-transform rotate-90" />
              ) : (
                <FiMenu size={28} className="text-[#89EA5F]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-white z-40 transition-transform duration-500 ease-in-out ${
          navOpen ? 'translate-x-0 z-99' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between py-10 px-6">
          {/* Logo & Close */}
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="text-3xl font-bold text-[#89EA5F]"
              onClick={() => setNavOpen(false)}
            >
              SunWave
            </Link>
            <button onClick={() => setNavOpen(false)} aria-label="Close Menu">
              <FiX size={28} className="text-[#89EA5F]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 text-xl font-medium text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="text-[#89EA5F] hover:text-green-500 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setNavOpen(false)}
              className="bg-[#89EA5F] hover:bg-green-400 text-black font-semibold py-2 mt-6 rounded-full transition"
            >
              Contact us
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center mt-10">
            <a
              href="https://www.facebook.com/share/1FCT9Uu7P8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89EA5F] hover:bg-green-400 text-black p-2 rounded-md transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sunwave_solar_energy?igsh=eHRqZ2UyMHh5ZDBp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89EA5F] hover:bg-green-400 text-black p-2 rounded-md transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://maps.app.goo.gl/tzwyQWmTohgKmXTv5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89EA5F] hover:bg-green-400 text-black p-2 rounded-md transition"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
