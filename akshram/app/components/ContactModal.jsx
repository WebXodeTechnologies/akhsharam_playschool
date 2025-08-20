// components/ContactModal.jsx
"use client";
import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Icon */}
            <div className="hidden md:fixed md:top-6 md:right-6 md:block">
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 rounded-full transition"
                >
                    <RiMenu3Fill size={35} />
                </button>
            </div>

            {/* Modal Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Modal */}
            <div
                className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
                >
                    <X size={20} />
                </button>

                {/* Modal Content */}
                <div className="p-6 mt-10">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-blue-600" />
                            <span>9865732398</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-blue-600" />
                            <span>akhsharamplayschool@gmail.com</span>
                        </div>
                    </div>
                    <Link href="/contact">
                        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
