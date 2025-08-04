'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import Logo from "@/public/assets/LogoMain/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1: Logo */}
        <div>
          <div className="flex items-center mb-4 ml-10">
            <Image
              src={Logo}
              alt="Akshram Play School Logo - Best Nursery School in Namakkal"
              width={100}
              className="mr-3 object-contain w-[50%] h-[50%]"
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-indigo-600">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-indigo-600">Gallery</Link></li>
            <li><Link href="/admissions" className="hover:text-indigo-600">Admissions</Link></li>
          </ul>
        </nav>

        {/* Column 3: Get in Touch */}
        <address className="not-italic">
          <h4 className="font-semibold text-lg mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact-us" className="hover:text-indigo-600">Contact Us</Link></li>
            <li><a href="tel:+919876543210" className="hover:text-indigo-600" aria-label="Call Akshram Play School">+91 98765 43210</a></li>
            <li><a href="mailto:info@akshramplayschool.com" className="hover:text-indigo-600" aria-label="Email Akshram Play School">info@akshramplayschool.com</a></li>
            <li><span>Namakkal, Tamil Nadu – Best Nursery & Play School</span></li>
          </ul>
        </address>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="font-semibold text-lg tracking-wider mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akshram Play School on Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akshram Play School on Instagram"
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Akshram Play School on WhatsApp"
              className="hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akshram Play School on YouTube"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Akshram Play School. All rights reserved. | Designed by <a href="https://webxode.com" className="hover:text-indigo-600" target="_blank" rel="noopener noreferrer">Webxode Technologies</a>
      </div>
    </footer>
  )
}

export default Footer
