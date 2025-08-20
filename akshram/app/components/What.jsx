import React from 'react';
import Image from 'next/image';
import image1 from "@/public/assets/fourth-comp/cubes.svg";
import image2 from "@/public/assets/fourth-comp/playing.png";
import image3 from "@/public/assets/fourth-comp/happy.svg";

const What = () => {
    return (
        <section
            className="py-20 px-6 sm:px-10 md:px-20"
            aria-labelledby="what-we-do"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <h2
                        id="what-we-do"
                        className="text-sm font-bold tracking-widest text-gray-700 uppercase mb-4"
                    >
                        What We Do
                    </h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
                        Inspiring Young Minds at Akhsharam Play School in Namakkal
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        At Akhsharam , we nurture curiosity, creativity, and confidence through playful
                        learning environments tailored for early childhood education. Our programs focus on
                        holistic development, helping children become confident and joyful learners.
                    </p>
                    <a
                        href="/about"
                        aria-label="Learn more about Akhsharam Play School"
                        className=" bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 inline-block"
                    >
                        Learn About Us
                    </a>
                </div>

                {/* RIGHT STATS */}
                <ul className="space-y-8" role="list">
                    {/* CARD 1 */}
                    <li className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 sm:p-4 rounded-full shadow w-16 h-16 flex items-center justify-center">
                                <Image src={image3} alt="Children in group activity" width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Kids in Group</h3>
                                <p className="text-gray-500 text-sm">Fun-filled group learning that builds bonds and brains.</p>
                            </div>
                        </div>
                        
                    </li>

                    {/* CARD 2 */}
                    <li className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 sm:p-4 rounded-full shadow w-16 h-16 flex items-center justify-center">
                                <Image src={image1} alt="Educational smart toys" width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Smart Toys</h3>
                                <p className="text-gray-500 text-sm">Learning through play with engaging tools and resources.</p>
                            </div>
                        </div>
                        
                    </li>

                    {/* CARD 3 */}
                    <li className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 sm:p-4 rounded-full shadow w-16 h-16 flex items-center justify-center">
                                <Image src={image2} alt="Children playing in playground" width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Play Areas</h3>
                                <p className="text-gray-500 text-sm">Indoor and outdoor zones designed for active fun and learning.</p>
                            </div>
                        </div>
                       
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default What;
