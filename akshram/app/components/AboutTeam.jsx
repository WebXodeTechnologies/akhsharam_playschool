"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace with actual images
import founderImg from "@/public/assets/img3.jpeg";
import cofounderImg from "@/public/assets/founder1.jpg";
import teacherImg from "@/public/assets/img1.jpeg";

const teamMembers = [
  {
    name: "JFD C.R. Kirutika",
    role: "Founder of Akhsharam Play School",
    education: "B.E., B.Ed., Certified Neuro Psychologist",
    description:
      "With 15+ years in early childhood education, she excels in nurturing young minds and promoting cognitive development.",
    image: founderImg,
    alt: "JFD C.R. Kirutika - Founder of Akhsharam Play School",
  },
  {
    name: "P.C. Ramkumar",
    role: "Co-Founder",
    education: "B.B.A.",
    description:
      "A strategic leader managing child-focused operations and administration at Akhsharam Play School",
    image: cofounderImg,
    alt: "P.C. Ramkumar - Co-Founder at Akhsharam Play School",
  },
  {
    name: "Smt.G.P.S.Swarnum",
    role: "Senior Faculty",
    education: "M.A. English, Montessori Certified",
    description:
      "Specializes in English language development and creative learning experiences for kids.",
    image: teacherImg,
    alt: "Smt.G.P.S.Swarnum - Senior Faculty at Akhsharam Play School",
  },
];

const AboutTeam = () => {
  return (
    <section
      className="max-w-7xl mx-auto w-full py-20 px-4 sm:px-8 lg:px-24"
      aria-labelledby="team-heading"
    >
      <h2
        id="team-heading"
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-16"
      >
        Meet Our Team
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <motion.article
            key={idx}
            className="relative  rounded-4xl overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            aria-label={`Profile of ${member.name}`}
          >
            <div className="relative w-full h-[350px] rounded-3xl">
              <Image
                src={member.image}
                alt={member.alt}
                className="object-cover w-full h-full"
                priority
              />

              {/* Hover Overlay with Education & Experience */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-1">{member.education}</h3>
                <p className="text-sm text-gray-100">{member.description}</p>
              </motion.div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
