"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/assets/1920x1080-01.webp";
import img1 from "@/public/assets/hero/vector-group-1-copyright.svg";
import img2 from "@/public/assets/hero/vector-group-2-copyright.svg";
import img3 from "@/public/assets/hero/vector-group-3-copyright.svg";
import img4 from "@/public/assets/hero/vector-group-4-copyright.svg";

const decorativeImages = [
  {
    src: img1,
    alt: "Decorative Top Left",
    className: "top-30 left-[-30px] w-24 h-24 animate-spin-slow",
  },
  {
    src: img2,
    alt: "Decorative Top Right",
    className: "top-30 right-[-40px] w-24 h-24 animate-bounce-slow",
  },
  {
    src: img3,
    alt: "Decorative Bottom Left",
    className: "bottom-0 left-[-30px] w-20 h-20 animate-bounce-slow",
  },
  {
    src: img4,
    alt: "Decorative Bottom Right",
    className: "bottom-0 right-[-40px] w-24 h-24 animate-spin-slow",
  },
];

const HeroBody = () => {
  return (
    <section
      role="region"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-24 sm:py-28 md:py-32 xl:py-40"
    >
      {decorativeImages.map(({ src, alt, className }, index) => (
        <div key={index} className={`absolute ${className}`} aria-hidden="true">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
        <p className="mb-4 text-lg font-medium text-indigo-600 md:text-xl">
          Nurturing Little Learners in Namakkal
        </p>

        <h1
          id="hero-heading"
          className="mb-6 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl md:text-6xl"
        >
          Play. Learn. Grow
        </h1>

        <p className="mx-auto mb-10 text-base text-gray-700 sm:text-lg md:text-xl max-w-2xl">
          Akhsharam Play School provides a caring, creative, and joyful
          environment for early childhood education. Our preschool programs are
          designed to help children blossom through activity-based learning,
          Montessori methods, and child-centric care.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Link
            href="/contact"
            aria-label="Apply for admission to Akshram Play School"
            className="px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700 transition-all"
          >
            Enroll Now
          </Link>
          <a
            href="https://wa.me/9865732398"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Akhsharam Play School on WhatsApp"
            className="px-8 py-4 text-lg font-semibold text-indigo-700 border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src={HeroImage}
            alt="Happy children learning at Akhsharam Play School Namakkal"
            priority
            className="w-full max-w-[480px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBody;
