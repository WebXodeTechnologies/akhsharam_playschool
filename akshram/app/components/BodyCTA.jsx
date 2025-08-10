'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import img1 from '@/public/assets/second-comp/self-improvement.svg';
import img2 from '@/public/assets/second-comp/reading-book.svg';
import img3 from '@/public/assets/second-comp/bear-toy.svg';

const steps = [
  {
    image: img1,
    title: 'Social Development Skills',
    description:
      'At Akshram Play School in Namakkal, children build social confidence through group play, communication games, and storytelling sessions.',
    href: '/about',
    alt: 'Children socializing in preschool activities',
  },
  {
    image: img2,
    title: 'Interactive & Activity-Based Learning',
    description:
      'Our curriculum promotes hands-on discovery and active participation—perfect for nurturing curiosity and early cognitive skills.',
    href: '/about',
    alt: 'Kid reading book in interactive classroom setting',
  },
  {
    image: img3,
    title: 'Safe & Friendly Learning Environment',
    description:
      'We offer a secure, hygienic, and emotionally supportive space where kids feel safe, valued, and inspired to grow.',
    href: '/about',
    alt: 'Soft toy representing comfort and child-friendly environment',
  },
];

const BodyCTA = () => {
  return (
    <section
      role="region"
      aria-labelledby="initial-steps-heading"
      className="py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base md:text-lg font-semibold text-indigo-600 tracking-wide uppercase">
          Why Choose Us
        </p>
        <h2
          id="initial-steps-heading"
          className="text-4xl sm:text-4xl md:text-5xl font-bold text-black mt-2"
        >
          Nurturing Young Minds in Namakkal
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map(({ image, title, description, href, alt }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full h-40 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 150 }}
                  className="w-[70%] h-[70%] relative"
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              <div className="p-6 text-left flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm"
                  aria-label={`Learn more about ${title.toLowerCase()}`}
                >
                  Learn More
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyCTA;
