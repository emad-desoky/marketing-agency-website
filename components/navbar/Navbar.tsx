import React, { useState } from "react";
import Image from "next/image"; // if you're using Next.js
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaBehance,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full flex justify-between items-center px-4 py-3 bg-opacity-0 z-10 bg-white">
      {/* Left Icon */}
      <div className="flex items-center">
        <Image src="/logo.ico" alt="Logo" width={100} height={100} />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
        {isOpen ? (
          <FaTimes size={24} className="text-black" />
        ) : (
          <FaBars size={24} className="text-black" />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex md:flex-row md:space-x-6 text-black text-sm absolute md:static bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 left-0 w-full p-4" : "top-[-200px]"
        } md:top-0`}
      >
        {[
          "Home",
          "Our Story",
          "They Say",
          "Our Edge",
          "Partners",
          "Our Mix",
          "Our Values",
          "Contact Details",
          "Get in Touch",
          "Join Us",
        ].map((link) => (
          <li key={link} className="hover:underline cursor-pointer">
            {link}
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4 text-black px-16">
        <FaFacebookF className="cursor-pointer hover:text-gray-400" />
        <FaInstagram className="cursor-pointer hover:text-gray-400" />
        <FaTiktok className="cursor-pointer hover:text-gray-400" />
        <FaYoutube className="cursor-pointer hover:text-gray-400" />
        <FaBehance className="cursor-pointer hover:text-gray-400" />
        <FaTwitter className="cursor-pointer hover:text-gray-400" />
      </div>
    </nav>
  );
};

export default Navbar;
