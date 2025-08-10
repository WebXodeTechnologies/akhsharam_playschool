"use client";
import React from "react";


const Video = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Welcome to Akhsharam Play School
        </h2>
        <p className="mb-8 text-gray-600">
          Experience the joyful environment your child will be part of.
        </p>

        <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
          <video
            src="/assets/Final Comp_2.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
