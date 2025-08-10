"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/Testimonial/revathy-2.png";
import image2 from "@/public/assets/Testimonial/Suresh Kumar.png";
import image3 from "@/public/assets/Testimonial/Meena Chechi.png";
import image4 from "@/public/assets/Testimonial/last image.png";
import image5 from "@/public/assets/Testimonial/revathy.png";

const team = [
  {
    name: "Revathi Narayanan",
    location: "Namakkal, TN",
    image: image1,
  },
  {
    name: "Suresh Kumar",
    location: "Erode, TN",
    image: image2,
  },
  {
    name: "Meena Raj",
    location: "Salem, TN",
    image: image3,
  },
  {
    name: "Karthik Balamurugan",
    location: "Karur, TN",
    image: image4,
  },
  {
    name: "Divya Lakshmi",
    location: "Tiruchengode, TN",
    image: image5,
  },
];

const AnimatedTooltip = () => {
  return (
    <section
      className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-12"
      aria-labelledby="testimonial-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="testimonial-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900"
        >
          Loved by Parents, Trusted for Learning
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Real voices. True stories. Heartfelt experiences from Akhsharam Play School parents.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {team.map((person, index) => (
          <li
            key={index}
            className="relative group flex flex-col items-center list-none"
          >
            {/* Circular Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110">
              <Image
                src={person.image}
                alt={`Photo of ${person.name}, parent from ${person.location}`}
                width={112}
                height={112}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Tooltip */}
            <div
              role="tooltip"
              className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-1 bg-black text-white text-xs rounded px-3 py-2 whitespace-nowrap z-10 shadow-md pointer-events-none"
            >
              <div className="font-semibold text-sm">{person.name}</div>
              <div className="text-gray-300 text-[11px]">{person.location}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AnimatedTooltip;
