"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import image1 from "@/public/assets/Testimonial/revathy-2.png";
import image2 from "@/public/assets/Testimonial/Suresh Kumar.png";
import image3 from "@/public/assets/Testimonial/Meena Chechi.png";
import image4 from "@/public/assets/Testimonial/last image.png";
import image5 from "@/public/assets/Testimonial/revathy.png";

const testimonials = [
    {
        quote:
            "Akshram has built a warm and joyful space where my daughter feels truly safe, encouraged, and eager to learn every single day.",
        name: "Revathi Narayanan",
        location: "Namakkal, TN",
        image: image1,
        rating: 5,
    },
    {
        name: "Suresh Kumar",
        location: "Erode, TN",
        text:
            "This school is bright, clean, and cheerful. My son loves the activities and enjoys learning far more than in traditional classrooms.",
        image: image2,
        rating: 5,
    },
    {
        name: "Meena Raj",
        location: "Salem, TN",
        text:
            "Teachers are calm, patient, and deeply attentive. My daughter has learned to speak English and Tamil fluently in a short time here.",
        image: image3,
        rating: 5,
    },
    {
        name: "Karthik Balamurugan",
        location: "Karur, TN",
        text:
            "I really appreciate how Akshram blends academics with creativity. Story time, weekly art, and structured play are my child's favorites.",
        image: image4,
        rating: 5,
    },
    {
        name: "Divya Lakshmi",
        location: "Tiruchengode, TN",
        text:
            "The Montessori teaching style is excellent. My child is more independent, active, and socially confident than ever before in school.",
        image: image5,
        rating: 5,
    },
];

const Testimonial = () => {
    return (
        <section className="py-20 px-6 lg:px-24" aria-labelledby="testimonial-heading">
            <h2 id="testimonial-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#333]">
                What Our Parents Say
            </h2>
            <Marquee
                speed={40}
                gradient={false}
                pauseOnHover
                direction="left"
                delay={0}
                aria-hidden="true"
            >
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="w-[320px] md:w-[380px] mx-4 p-6 bg-white rounded-2xl  flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                    >
                        {/* Circular Image */}
                        <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-orange-400">
                            <Image
                                src={t.image}
                                alt={t.name}
                                width={80}
                                height={80}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-sm md:text-base text-gray-700 mb-3 italic">
                            “{t.quote || t.text}”
                        </p>

                        {/* Star Rating */}
                        <div className="flex justify-center mb-3" role="img" aria-label={`${t.rating} star rating`}>
                            {Array(t.rating).fill().map((_, i) => (
                                <span key={i} className="text-yellow-400 text-lg">★</span>
                            ))}
                        </div>

                        {/* Name & Location */}
                        <div className="text-center">
                            <p className="font-semibold text-sm">{t.name}</p>
                            <p className="text-xs text-gray-500">{t.location}</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default Testimonial;
