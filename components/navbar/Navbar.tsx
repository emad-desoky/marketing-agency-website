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
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    // Close the navbar on reload if it was open
    setIsOpen(false);

    // Fade in effect for the navbar
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay for smoother effect
    return () => clearTimeout(timer);
  }, []);

  const backgroundOpacity = scrollY > 50 ? 1 : 0.5;
  const backgroundColor = `rgba(43,43,43, ${backgroundOpacity})`;
  const gradientColor = `rgba(43, 43, 43, ${backgroundOpacity})`;

  const handleLinkClick = (link: string) => {
    if (link === "Join Us") {
      router.push("/join-us"); // Use router for page navigation
    } else if (link === "About Us") {
      router.push("/about-us"); // Use router for page navigation
    } else {
      const sectionId = link.replace(/\s+/g, ""); // Remove spaces for ID
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`No section found for ID: ${sectionId}`); // Debugging
      }
    }
    setIsOpen(false); // Close navbar on link click
  };

  return (
    <nav
      className={`fixed w-full flex justify-between items-center p-4 z-50 shadow-md transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `linear-gradient(to top, ${backgroundColor}, ${gradientColor})`,
      }}
    >
      <div className="flex items-center relative z-10">
        <Image src="/logo.ico" alt="Logo" width={100} height={100} />
      </div>

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
          "About Us",
        ].map((link) => (
          <li
            key={link}
            className="rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex space-x-4 text-black px-8 z-50 relative">
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
