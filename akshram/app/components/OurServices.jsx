import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/comp-five/top-illustration-copyright.webp";
import image2 from "@/public/assets/comp-five/bottom-illustration-copyright.webp";

const OurServices = () => {
    return (
        <div className="relative w-full  overflow-hidden py-12 sm:py-16 md:py-20 xl:py-24">
            {/* Marquee Text */}
            <div className="w-full overflow-hidden whitespace-nowrap group cursor-pointer mb-8 sm:mb-10 lg:mb-12">
                <div className="animate-marquee group-hover:[animation-play-state:paused] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111]">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="inline-block mx-6">
                            First School Steps ✦
                        </span>
                    ))}
                </div>
            </div>

            {/* Images and Content */}
            <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 md:px-8 lg:px-10">
                {/* Top Illustration */}
                <div className="w-full relative z-10">
                    <Image
                        src={image1}
                        alt="Top Illustration"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* Bottom Illustration with overlayed content */}
                <div className="relative w-full">
                    <Image
                        src={image2}
                        alt="Bottom Illustration"
                        className="w-full h-auto object-contain mt-7"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 tracking-wider mb-2">
                            Learn & Play
                        </p>
                        <h2 className="text-sm sm:text-md md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Where Little Minds Grow Big
                        </h2>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm sm:text-base px-6 py-2 rounded-full shadow-md transition-all duration-300">
                            Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
