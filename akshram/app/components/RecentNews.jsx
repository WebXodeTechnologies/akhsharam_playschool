import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/client_images/img1.jpeg";
import img2 from "@/public/assets/client_images/img2.jpeg";

const RecentNews = () => {
    return (
        <section className="w-full bg-[#FFF6EB] py-16 px-4 sm:px-6 lg:px-20 xl:px-32 2xl:px-48">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <p className="text-sm text-pink-500 uppercase font-semibold mb-3">
                            Joyful Moments
                        </p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Discover Our Recent School Events
                        </h2>
                    </div>
                    <div className="text-gray-600 text-base leading-relaxed">
                        <p className="mb-3">
                            Our events capture curiosity, creativity, and collaboration. From
                            play-based learning to joyful celebrations, here's how our little
                            stars shine!
                        </p>
                        <p>
                            Stay inspired with glimpses into our classrooms and community —
                            every moment is a step forward in your child's growth journey.
                        </p>
                    </div>
                </div>

                {/* Articles Section */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Big Article */}
                    <div>
                        <div className="overflow-hidden rounded-xl shadow-sm">
                            <Image
                                src={img1}
                                alt="Early childhood education"
                                className="object-cover w-full h-[380px]"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                Kindergarten • May 9, 2025
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Why early childhood education matters more than ever
                            </h3>
                        </div>
                    </div>

                    {/* Small Article */}
                    <div>
                        <div className="overflow-hidden rounded-xl shadow-sm">
                            <Image
                                src={img2}
                                alt="Joyful learning"
                                className="object-cover w-full h-[380px]"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                Learning • Jul 15, 2025
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Play and grow: Creating joyful learning experiences
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentNews;
