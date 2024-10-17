import React, { useState } from "react";
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
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLinkClick = (link: string) => {
    if (link === "Join Us") {
      router.push("/join-us");
    } else if (link === "About Us") {
      router.push("/about-us");
    } else if (link === "Home") {
      router.push("/");
    } else if (link === "Blogs") {
      router.push("/blogs");
    } else {
      const sectionId = link.replace(/\s+/g, "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`No section found for ID: ${sectionId}`);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center px-4 md:px-24 z-50 shadow-md transition-opacity duration-300 bg-[rgb(43,43,43,0.14)] font-nourd
      }`}
      style={{ height: "90px" }} // Fixed height to prevent overlap with content
    >
      {/* Logo */}
      <div className="flex items-center z-10">
        <Image src="/logo.ico" alt="Logo" width={200} height={100} />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-10" onClick={toggleNavbar}>
        {isOpen ? (
          <FaTimes
            size={24}
            className="text-white transition-transform duration-300 transform rotate-90"
          />
        ) : (
          <FaBars
            size={24}
            className="text-white transition-transform duration-300"
          />
        )}
      </div>

      {/* Nav Links */}
      <ul
        className={`flex-col md:flex md:flex-row md:space-x-6 text-black text-sm transition-all duration-300 ease-in-out relative z-10 ${
          isOpen
            ? "top-16 left-0 w-full p-4 absolute bg-[rgba(43,43,43,0.9)]"
            : "top-[-200px] md:top-0"
        }`}
      >
        {[
          "Home",
          "Our Story",
          "They Say",
          "Partners",
          "Contact Details",
          "Blogs",
          "Careers",
          "About Us",
        ].map((link) => (
          <li
            key={link}
            className="rounded-md px-2 py-2 text-sm font-medium text-white hover:bg-[rgb(255,228,0)] hover:text-slate-950 cursor-pointer"
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4 text-white z-50">
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
