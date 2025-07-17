'use client'

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import Link from 'next/link';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="w-full z-50 absolute top-0 left-0">
      {/* Top Info Bar */}
      <div className="bg-green-700 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MdEmail className="text-lg" /> info@domain.com
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-lg" /> +01 248 248 2481
          </div>
        </div>
        <div className="flex gap-2 text-lg">
          <a href="#" className="bg-green-300 hover:bg-green-400 text-black p-2 rounded-md"><FaFacebookF /></a>
          <a href="#" className="bg-green-300 hover:bg-green-400 text-black p-2 rounded-md"><FaXTwitter /></a>
          <a href="#" className="bg-green-300 hover:bg-green-400 text-black p-2 rounded-md"><FaLinkedinIn /></a>
          <a href="#" className="bg-green-300 hover:bg-green-400 text-black p-2 rounded-md"><FaInstagram /></a>
        </div>
      </div>

      {/* Main Nav - Now visually grouped, not fixed */}
      <div className="relative mt-6">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl px-6 py-4 max-w-7xl mx-auto w-[95%] flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-500 flex items-center gap-1">
            <span className="text-3xl">⚡</span> Solar
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-green-500 transition">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-green-500 transition">About Us</Link>
            <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-green-500 transition">Services</Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-green-500 transition">Projects</Link>
            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-green-500 transition">Pages</Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-200 hover:text-green-500 transition">Blog</Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-green-300 hover:bg-green-400 text-black font-semibold py-2 px-6 rounded-full transition"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-6 space-y-4 z-30 rounded-b-xl">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#">Pages</Link>
          <Link href="/blog">Blog</Link>
          <Link
            href="/contact"
            className="inline-block w-full bg-green-300 hover:bg-green-400 text-black font-semibold py-2 text-center rounded-full transition"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}