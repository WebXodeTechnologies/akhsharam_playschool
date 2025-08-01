'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { CgMenuGridO } from 'react-icons/cg'

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="grid grid-cols-3 items-center">
          {/* Left Menu (Desktop) */}
          <div className="hidden md:flex gap-10 text-base font-medium text-gray-900">
            <Link href="/about-us" className="hover:underline decoration-2 underline-offset-4 transition-all">About</Link>
            <Link href="/gallery" className="hover:underline decoration-2 underline-offset-4 transition-all">Gallery</Link>
            <Link href="/admissions" className="hover:underline decoration-2 underline-offset-4 transition-all">Admission</Link>
            <Link href="/Contact" className="hover:underline decoration-2 underline-offset-4 transition-all">Contact</Link>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <span className="text-2xl font-bold text-gray-700 tracking-wide">Akshram</span>
          </div>

          {/* Right Icons */}
          <div className="col-start-3 flex justify-end items-center gap-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-5">
              <FiSearch className="text-gray-600 cursor-pointer" size={25} />
              <CgMenuGridO className="text-gray-600 cursor-pointer" size={25} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-3xl text-gray-600"
              aria-label="Open Menu"
            >
              <CgMenuGridO />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[999] flex flex-col px-8 py-10 animate-slide-in-left transition-all duration-300 ease-in-out">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-gray-700"
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-medium text-gray-700">
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">About Us</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Gallery</Link>
            <Link href="/admission" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Admissions</Link>
            <Link href="https://wa.me/91xxxxxxxxxx" target="_blank" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default HeaderNav
