'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { RiMenu3Fill } from 'react-icons/ri'
import { CgMenuGridO } from 'react-icons/cg'
import Image from 'next/image'
import Logo from "@/public/assets/LogoMain/logo.png"
import ContactModal from './ContactModal'

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Primary Navigation */}
      <nav
        className="max-w-7xl mx-auto px-10 py-4"
        aria-label="Primary Navigation"
      >
        <div className="grid grid-cols-3 items-center">
          {/* Left Menu (Desktop) */}
          <div className="hidden md:flex gap-10 text-base font-medium text-gray-900">
            <Link href="/" className="hover:underline decoration-2 underline-offset-4 transition-all">
              Home
            </Link>
            <Link href="/about" className="hover:underline decoration-2 underline-offset-4 transition-all">
              About
            </Link>
            <Link href="/gallery" className="hover:underline decoration-2 underline-offset-4 transition-all">
              Gallery
            </Link>
            <Link href="/contact" className="hover:underline decoration-2 underline-offset-4 transition-all">
              Contact
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link href="/" aria-label="Go to Akshram Home Page">
              <Image src={Logo} alt="Akshram Logo" width={60} className="object-contain" />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="col-start-3 flex justify-end items-center gap-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-5">
              <ContactModal/>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-xl p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
              aria-label="Open Menu"
            >
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="bg-white z-[9999] h-screen flex flex-col items-center justify-center px-8 py-10 animate-slide-in-left transition-all duration-300 ease-in-out">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-gray-700"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <nav
            className="flex flex-col gap-6 text-lg font-medium text-gray-700 text-center"
            aria-label="Mobile Navigation"
          >
             <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">
              About Us
            </Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">
              Gallery
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default HeaderNav
