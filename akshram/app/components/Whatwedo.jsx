import React from 'react';
import Image from 'next/image';
import image1 from "@/public/assets/fourth-comp/cubes.svg";
import image2 from "@/public/assets/fourth-comp/playing.svg";
import image3 from "@/public/assets/fourth-comp/happy.svg";

const Whatwedo = () => {
  return (
    <div className="py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h4 className="text-sm font-bold tracking-widest text-gray-700 uppercase mb-4">What We Do</h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
            Inspiring young minds every day
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At Akshram, we nurture curiosity, creativity, and confidence through playful learning environments tailored for young learners.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            About Us
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-8">
          {/* CARD 1 */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-full shadow w-16 h-16 flex items-center justify-center">
                <Image src={image3} alt="Group" width={32} height={32} className="w-8 sm:w-10 h-auto" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Kids in group</h3>
                <p className="text-gray-500 text-sm">Fun-filled group learning that builds bonds and brains</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">12</div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-full shadow w-16 h-16 flex items-center justify-center">
                <Image src={image1} alt="Toys" width={32} height={32} className="w-8 sm:w-10 h-auto" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Smart toys</h3>
                <p className="text-gray-500 text-sm">Learning through play with smart tools</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">150</div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-full shadow w-16 h-16 flex items-center justify-center">
                <Image src={image2} alt="Play Area" width={32} height={32} className="w-8 sm:w-10 h-auto" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Play areas</h3>
                <p className="text-gray-500 text-sm">Spacious outdoor and indoor play spaces</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">15</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
