'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Image1 from '@/public/assets/third-comp/kid-1.png';
import Image2 from '@/public/assets/third-comp/teacher.png';

const ImageBody = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Images */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={Image1}
              alt="Happy student at Akshram"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={Image2}
              alt="Teachers with students"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight mb-6">
            About Akshram <br className="hidden md:block" /> Play School
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            A joyful learning environment where curiosity is encouraged and confidence is nurtured. Our dedicated educators ensure every child receives personalized attention to blossom into their best selves.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Learn More About Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ImageBody;
