import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/client_images/img1.jpeg";
import img2 from "@/public/assets/client_images/img2.jpeg";

const RecentNews = () => {
    return (
        <section
            className="w-full bg-[#FFF6EB] py-16 px-4 sm:px-6 lg:px-20 xl:px-32 2xl:px-48"
            aria-labelledby="recent-news-heading"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <p className="text-sm text-pink-500 uppercase font-semibold mb-3">
                            Joyful Moments
                        </p>
                        <h2 id="recent-news-heading" className="text-4xl font-bold text-gray-900 mb-4">
                            Discover School Events at Akshram Play School Namakkal
                        </h2>
                    </div>
                    <div className="text-gray-600 text-base leading-relaxed">
                        <p className="mb-3">
                            Our events spark curiosity, creativity, and connection. From play-based
                            education to festive celebrations, every day is a memory in the making.
                        </p>
                        <p>
                            Get inspired by highlights from our preschool and kindergarten
                            programs—every moment supports your child's growth and confidence.
                        </p>
                    </div>
                </header>

                {/* Articles Section */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Article 1 */}
                    <article>
                        <div className="overflow-hidden rounded-xl shadow-sm">
                            <Image
                                src={img1}
                                alt="Preschool kids engaged in early learning at Akshram Play School Namakkal"
                                className="object-cover w-full h-[380px]"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                Kindergarten • May 9, 2025
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Why Early Childhood Education Matters More Than Ever
                            </h3>
                        </div>
                    </article>

                    {/* Article 2 */}
                    <article>
                        <div className="overflow-hidden rounded-xl shadow-sm">
                            <Image
                                src={img2}
                                alt="Children enjoying interactive and joyful learning experiences at Akshram Namakkal"
                                className="object-cover w-full h-[380px]"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                Learning • Jul 15, 2025
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Play and Grow: Creating Joyful Learning Experiences
                            </h3>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default RecentNews;
