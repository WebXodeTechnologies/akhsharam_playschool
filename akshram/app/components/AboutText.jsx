'use client';
import React from 'react';

const AboutText = () => {
    return (
        <section className="w-full px-4 sm:px-8 md:px-16 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
                        About Us
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl max-w-md leading-relaxed">
                        Akshram Play School offers a caring, creative, and safe environment where every child feels valued and inspired to explore, play, and grow into confident learners.
                    </p>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-10">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className=" hidden md:block w-2 h-14 bg-indigo-600 rounded-sm" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                A Vibrant Learning Space
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Designed to spark creativity and wonder, our classrooms are lively, colorful, and filled with hands-on experiences that make learning joyful every day.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="hidden md:block  w-2 h-14 bg-indigo-600 rounded-sm" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Friendly & Caring Educators
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Our experienced and passionate teachers create a loving, nurturing atmosphere where every child receives attention, encouragement, and a smile every day.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* CTA Button */}
            <div className="mt-20 text-center">
                <a
                    href="/About"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Know More About Us
                </a>
            </div>
        </section>
    );
};

export default AboutText;
