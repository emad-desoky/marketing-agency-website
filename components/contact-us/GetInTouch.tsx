"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { cn } from "@/lib/utils";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa"; // Icons for the form and social media

export function GetInTouch() {
  return (
    <div className="h-auto w-full bg-[rgb(43,43,43)] flex flex-col items-center justify-center overflow-hidden rounded-md py-10">
      {/* Wide Card */}
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-gradient-to-b from-[rgb(255,228,0)] to-[rgb(43,43,43)] rounded-lg shadow-xl overflow-hidden">
        {/* Title section - 1/4 width */}
        <div className="w-full md:w-1/4 bg-gradient-to-b from-[rgb(255,228,0)] to-[rgb(43,43,43)] border-4 border-black p-6 flex items-center justify-start md:justify-center">
          <h1 className={cn("text-4xl font-bold text-black-500 px-10")}>
            GET IN TOUCH
          </h1>
        </div>

        {/* Info section and Contact form - 3/4 width */}
        <div className="w-full md:w-3/4 p-8 flex flex-col justify-start space-y-6">
          {/* Contact Form */}
          <form className="space-y-6">
            {/* Input Fields */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {/* Name Input */}
              <div className="relative w-full md:w-1/2">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 pl-12 bg-black text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition-all"
                />
              </div>
              {/* Email Input */}
              <div className="relative w-full md:w-1/2">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 pl-12 bg-black text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            {/* Mobile Input */}
            <div className="relative">
              <FaPhone className="absolute top-4 left-4 text-gray-400" />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full p-3 pl-12 bg-black text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            {/* Message Input */}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-black text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition-all"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-950 text-white rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Sparkles and Gradient Section */}
      <div className="w-[40rem] h-40 relative mt-8">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgb(255,228,0)] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-600 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-600 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[rgb(43,43,43)] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-[rgb(43,43,43)] py-8 flex flex-col items-center">
        {/* Company Logos */}
        <div className="flex gap-6 mb-8">
          {/* Random company logos (replace with actual logos later) */}
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 1"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 2"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 3"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 4"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 5"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 6"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 7"
            className="object-contain"
          />
          <img
            src="https://via.placeholder.com/100x50"
            alt="Company 8"
            className="object-contain"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-gray-400 text-2xl mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-white">
            <FaTiktok />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
