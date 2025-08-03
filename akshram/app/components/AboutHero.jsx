"use client";
import React from "react";
import Image from "next/image";
import heroImg from "@/public/assets/about-hero/undraw_family_6gj8.svg"; // Replace with your actual image

const AboutHero = () => {
    return (
        <section className="max-w-7xl mx-auto py-30 w-full  px-4 sm:px-8 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Left Text */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
                    Shaping Bright Futures,<br /> One Child at a Time
                </h1>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    At Akshram Play School, we believe early childhood is the foundation for lifelong learning.
                    With love, laughter, and guided discovery, we help every child grow with confidence and creativity.
                </p>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    src={heroImg}
                    alt="Happy children at Akshram Play School"
                    width={500}
                    height={500}
                    className="rounded-3xl object-contain w-full h-full"
                    priority
                />
            </div>
        </section>
    );
};

export default AboutHero;
