import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-screen-7xl mx-auto px-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo */}
        <div>
          <p className="text-sm">Akshram Play School is dedicated to nurturing creativity, care, and confidence in every child.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-indigo-600">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-indigo-600">Gallery</Link></li>
            <li><Link href="/admission" className="hover:text-indigo-600">Admission</Link></li>
          </ul>
        </div>

        {/* Column 3: More Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact-us" className="hover:text-indigo-600">Contact Us</Link></li>
            <li><a href="tel:+919876543210" className="hover:text-indigo-600">+91 98765 43210</a></li>
            <li><a href="mailto:info@akshramplayschool.com" className="hover:text-indigo-600">info@akshramplayschool.com</a></li>
            <li><span>Namakkal, Tamil Nadu</span></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" className="hover:text-green-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Akshram Play School. All rights reserved. | Designed by Webxode Technologies
      </div>
    </footer>
  )
}

export default Footer
