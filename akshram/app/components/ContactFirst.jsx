import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactFirst = () => {
  return (
    <section className="py-25 max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Let’s Connect</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Email */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white shadow-lg rounded-full p-4">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p>
            <a
              href="mailto:akhsharamplayschool@gmail.com"
              className="text-blue-600 hover:underline"
            >
              akhsharamplayschool@gmail.com
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white shadow-lg rounded-full p-4">
            <Phone className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p>
            <a
              href="tel:+919865732398"
              className="text-blue-600 hover:underline"
            >
              +91-98657-32398
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white shadow-lg rounded-full p-4">
            <MapPin className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Location</h3>
          <p className="text-blue-600 hover:underline" >Namakkal, Tamil Nadu</p>
        </div>
      </div>
    </section>
  );
};

export default ContactFirst;
