"use client";
import React from "react";
import Image from "next/image";
import contactImg from "@/public/assets/about-hero/undraw_toy-car_ugyu.svg";

const ContactLead = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Lead Form */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question or feedback? Fill out the form below, and we’ll
            respond promptly!
          </p>

          <form className="space-y-6 p-6 rounded-xl shadow-md" aria-label="Contact form for Akshram Play School">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              aria-label="Submit contact form"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-2.5 rounded-md shadow"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block">
          <Image
            src={contactImg}
            alt="Akshram Play School contact form illustration with toy car"
            className="w-full h-auto max-w-sm mx-auto animate-fade-in"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLead;
