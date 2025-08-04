"use client";
import React, { useState } from "react";
import Image from "next/image";

// Static image imports (optimize with next/image)
import img1 from "@/public/assets/client_images/img1.jpeg";
import img2 from "@/public/assets/client_images/img2.jpeg";
import img3 from "@/public/assets/client_images/img3.jpeg";
import img4 from "@/public/assets/client_images/img4.jpeg";
import img5 from "@/public/assets/client_images/img5.jpeg";
import img6 from "@/public/assets/client_images/img6.jpeg";
import img7 from "@/public/assets/client_images/img7.jpeg";
// Image data with category and alt text
const galleryImages = [
  {
    src: img1,
    alt: "Annual Day Dance Performance at Akshram Play School",
    category: "Best Moments",
  },
  {
    src: img2,
    alt: "Classroom Activity with Kids at Akshram",
    category: "Best Moments",
  },
  {
    src: img4,
    alt: "Fun Day at Playground – Outdoor Activities",
    category: "Others",
  },
  {
    src: img5,
    alt: "Fun Day at Playground – Outdoor Activities",
    category: "Others",
  },
  {
    src: img5,
    alt: "Fun Day at Playground – Outdoor Activities",
    category: "Others",
  },
  {
    src: img6,
    alt: "Fun Day at Playground – Outdoor Activities",
    category: "Others",
  },
  {
    src: img7,
    alt: "Fun Day at Playground – Outdoor Activities",
    category: "Others",
  },
];

const GalleryImages = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Best Moments", "Others"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section className="max-w-7xl mx-auto py-25 px-4 sm:px-8 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Our Gallery
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              filter === f
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-50 object-cover"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryImages;
