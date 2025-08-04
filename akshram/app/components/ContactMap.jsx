"use client";
import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Location
      </h2>
      <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[400px]">
        <iframe
          title="Akshram Play School Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3911.297365368764!2d78.16808172391141!3d11.211059998805228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692304359321!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
