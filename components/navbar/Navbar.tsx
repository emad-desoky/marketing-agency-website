import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const [scrollY, setScrollY] = useState(0);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundOpacity = scrollY > 50 ? 1 : 0.5; // Adjust opacity based on scroll
  const backgroundColor = `rgba(255, 228, 0, ${backgroundOpacity})`;
  const gradientColor = `rgba(43, 43, 43, ${backgroundOpacity})`;

  return (
    <nav
      className={`fixed w-full flex justify-between items-center px-4 py-3 z-50 shadow-md`}
      style={{
        background: `linear-gradient(to bottom, ${backgroundColor}, ${gradientColor})`,
        transition: "background 0.3s ease",
      }}
    >
      {/* Left Icon */}
      <div className="flex items-center relative z-10">
        <Image src="/logo.ico" alt="Logo" width={100} height={100} />
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden cursor-pointer relative z-10"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <FaTimes size={24} className="text-black" />
        ) : (
          <FaBars size={24} className="text-black" />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex md:flex-row md:space-x-6 text-black text-sm md:static transition-all duration-300 ease-in-out relative z-10 ${
          isOpen ? "top-16 left-0 w-full p-4 z-50" : "top-[-200px]"
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
          <li
            key={link}
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <a href={`#${link.replace(/\s+/g, "")}`}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4 text-black px-16 z-50 relative">
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
