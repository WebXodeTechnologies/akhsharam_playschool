"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the age group for admissions?",
    answer: "We accept children between the ages of 2 to 5 years for Playgroup, Nursery, LKG, and UKG programs.",
  },
  {
    question: "What are your school timings?",
    answer: "Our regular hours are from 9:00 AM to 12:30 PM, Monday through Friday.",
  },
  {
    question: "Is there a school transport facility?",
    answer: "Yes, we offer safe and reliable transport services with trained staff for most local areas.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain a low student-teacher ratio of 1:15 to ensure personalized attention.",
  },
  {
    question: "Are meals or snacks provided?",
    answer: "Parents are encouraged to send home-cooked snacks. However, we do guide on healthy eating habits.",
  },
  {
    question: "What curriculum do you follow?",
    answer: "We follow a blended play-based learning approach using Montessori and thematic methods.",
  },
  {
    question: "How do you ensure safety and hygiene?",
    answer: "We follow strict hygiene protocols, CCTV surveillance, trained staff, and regular sanitization.",
  },
  {
    question: "Do you provide progress reports?",
    answer: "Yes, we provide monthly progress reports and conduct parent-teacher meetings regularly.",
  },
  {
    question: "Can parents visit the school before admission?",
    answer: "Absolutely! We encourage walk-in visits and scheduled tours to understand our environment better.",
  },
  {
    question: "How do you handle emergency situations?",
    answer: "Our staff is trained in first-aid and emergency response. Parents are immediately informed as needed.",
  },
];

const ContactAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 bg-white hover:bg-gray-50 transition"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              {faq.question}
              <span className="ml-4 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className="px-6 pb-4 text-gray-700 transition-all duration-300 ease-in-out"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactAccordion;
