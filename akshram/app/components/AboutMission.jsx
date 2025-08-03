"use client";
import React from "react";
import Image from "next/image";
import missionImg from "@/public/assets/about-hero/undraw_powerful_e1sw.svg";

const AboutMission = () => {
    return (
        <section id="mission-vision" className="max-w-7xl mx-auto w-full py-20 px-4 sm:px-8 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    src={missionImg}
                    alt="Illustration of Akshram Play School’s mission and vision for early childhood development"
                    width={500}
                    height={500}
                    className="rounded-2xl object-contain w-full h-auto"
                />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Our Mission & Vision
                </h2>

                {/* Mission Box */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        To help children discover their unique talents, build essential life skills,
                        and grow with values that foster empathy and thoughtful action. Our teachers
                        thrive in an empowering environment that supports continuous learning and growth.
                    </p>
                </div>

                {/* Vision Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        To provide a secure, creative, and balanced learning space that nurtures every
                        aspect of a child’s development—intellectual, emotional, physical, and social.
                        We aim to raise responsible global citizens who care deeply for people and the planet.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
