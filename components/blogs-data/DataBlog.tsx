"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

interface BlogData {
  id: string;
  title: string;
  brief: string;
  date: string;
  img1: string;
}

export function DataBlog() {
  const router = useRouter();
  const [data, setData] = useState<BlogData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogsData");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = data.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-16 bg-[rgb(43,43,43)]">
      <div className="container mx-auto flex gap-6">
        {/* Left Section (Blog Cards with Pagination) */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-3xl text-center text-white mb-10">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="transition-transform transform hover:scale-105"
              >
                <BackgroundGradient className="rounded-[22px] max-w-lg p-6 bg-[rgb(43,43,43)] dark:bg-zinc-900 shadow-lg hover:shadow-xl">
                  <Image
                    src={blog.img1}
                    alt={blog.title}
                    height="300"
                    width="500"
                    className="rounded-t-[22px] object-cover mb-4"
                  />
                  <p className="text-lg sm:text-xl font-semibold text-white mt-4 mb-1 dark:text-neutral-200">
                    {blog.title}
                  </p>
                  <p className="text-sm text-neutral-300 dark:text-neutral-400 mb-2">
                    {blog.brief}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-400 mb-4">
                    {blog.date}
                  </p>
                  <button
                    className="rounded-full pl-4 pr-1 py-2 text-white flex items-center space-x-1 bg-[rgb(43,43,43)] hover:bg-[rgb(255,228,0)] transition duration-200 ease-in-out mt-4 text-xs font-bold dark:bg-zinc-800"
                    onClick={() => router.push(`/blogs/${blog.id}`)}
                  >
                    <span>Show Blog</span>
                  </button>
                </BackgroundGradient>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[rgb(255,228,0)] text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-0">
          {/* Search Box */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded-md text-black"
            />
          </div>

          {/* Recent Posts */}
          <div className="bg-gray-800 p-4 rounded-md mb-6">
            <h3 className="text-white text-xl mb-4">Recent Posts</h3>
            {data.slice(0, 3).map((blog) => (
              <div
                key={blog.id}
                className="mb-3 cursor-pointer"
                onClick={() => router.push(`/blogs/${blog.id}`)}
              >
                <p className="text-sm text-neutral-300 hover:text-white">
                  {blog.title}
                </p>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-white text-xl mb-4">Categories</h3>
            <div className="text-neutral-300">
              <p className="cursor-pointer hover:text-white mb-2">
                Translation
              </p>
              <p className="cursor-pointer hover:text-white mb-2">Technology</p>
              <p className="cursor-pointer hover:text-white">Business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 mt-16 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-4">
            © {new Date().getFullYear()} Alpha Beto Translations. All rights
            reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="text-gray-400 hover:text-white"
            >
              <FaPinterestP size={20} />
            </a>
          </div>

          {/* Additional Links */}
          <div className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Contact Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Careers
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
