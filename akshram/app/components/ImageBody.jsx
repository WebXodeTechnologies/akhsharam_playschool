'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Image1 from '@/public/assets/third-comp/kid-crop.png';
import Image2 from '@/public/assets/third-comp/teacher.png';

const ImageBody = () => {
  return (
    <section
      role="region"
      aria-labelledby="image-showcase-title"
      className="w-full py-16 px-4 sm:px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2
          id="image-showcase-title"
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Where Smiles & Learning Begin
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          At Akhsharam Play School Namakkal, we believe joyful learning begins in a nurturing space led by passionate educators. See our little learners and dedicated teachers in action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Image 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={Image1}
            alt="Preschooler learning joyfully at Akshram Play School Namakkal"
            width={600}
            height={400}
            className="w-full object-cover rounded-2xl"
            priority
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={Image2}
            alt="Akhsharam Play School teacher guiding kids in classroom – Namakkal preschool"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageBody;
