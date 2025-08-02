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
              width={400}
              height={400}
              className="w-full object-cover rounded-2xl"
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
      </div>
    </section>
  );
};

export default ImageBody;
