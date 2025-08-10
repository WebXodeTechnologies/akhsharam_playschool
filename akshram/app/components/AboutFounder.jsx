"use client";
import React from "react";
import Image from "next/image";
import founderImg from "@/public/assets/about-hero/undraw_working-together_r43a.svg"
const AboutFounder = () => {
   return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-24">
      {/* Founder's Words */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <Image
            src={founderImg}
            alt="Founder of Akshram Play School"
            width={500}
            height={500}
            className="rounded-3xl  object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From the Founder’s Desk
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            At Akhsharam Play School, we believe every child is born with unique talents waiting to be discovered.
            Our vision is to provide a joyful, secure, and stimulating environment where learning is natural,
            creativity blossoms, and every child grows with compassion and confidence.
          </p>
          <div>
            <p className="font-semibold text-gray-800">
              JFD C.R.Kirutika, B.E., B.Ed.
            </p>
            <p className="text-gray-600 text-sm mb-1">
              Certified Neuro Psychologist, Founder
            </p>
            <p className="font-semibold text-gray-800">
              P.C. Ramkumar, B.B.A.
            </p>
            <p className="text-gray-600 text-sm">Co-Founder</p>
          </div>
        </div>
      </div>

      {/* Agenda Section */}
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Agenda at Akhsharam
        </h3>
        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          Our mission is to help students discover their inner strengths, build skills
          that prepare them for the future, and instill deep-rooted values for thoughtful living.
          We foster a space where teachers grow with purpose, and children thrive in a world of discovery.
        </p>
        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          Akshram is more than a playschool — it's a nurturing ground for tomorrow’s changemakers.
          With balanced attention on academics, creativity, emotional wellness, and physical development,
          we guide each child to be a confident, responsible and compassionate global citizen.
        </p>
        <ul className="list-disc pl-6 text-gray-800 font-medium text-base sm:text-lg space-y-2">
          <li>Discovering innate talents with purpose</li>
          <li>Creating a safe, inclusive, and vibrant learning space</li>
          <li>Encouraging values, empathy, and lifelong curiosity</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutFounder


