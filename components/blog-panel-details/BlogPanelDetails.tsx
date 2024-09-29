import React, { useState } from "react";
import Dashboard from "./DashBoard";
import Blogs from "./Blogs";
import AddBlog from "./AddBlog";

// Define Blog type for better TypeScript support
interface Blog {
  id: number;
  title: string;
  description: string;
}

const BlogPanelDetails = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // Sample data to pass as props
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "First Blog Post",
      description: "This is the description of the first blog.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      description: "This is the description of the second blog.",
    },
    {
      id: 3,
      title: "Third Blog Post",
      description: "This is the description of the third blog.",
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      description: "This is the description of the fourth blog.",
    },
    {
      id: 5,
      title: "Fifth Blog Post",
      description: "This is the description of the fifth blog.",
    },
  ]);

  const totalBlogs = blogs.length; // Dynamic blog count
  const categories = ["Tech", "Business", "Health"]; // Example categories

  // Sample functions for refreshing data and downloading report
  const refreshData = () => {
    console.log("Data refreshed!");
    // Add your refresh logic here
  };

  const downloadReport = () => {
    console.log("Report downloaded!");
    // Add your download logic here
  };

  // Function to delete a blog
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmDelete) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-5">
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        {/* Menu Items */}
        <nav className="space-y-4">
          <button
            className={`block w-full text-left ${
              activePage === "dashboard" ? "bg-gray-700" : ""
            } p-2 rounded-lg transition duration-200`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`block w-full text-left ${
              activePage === "blogs" ? "bg-gray-700" : ""
            } p-2 rounded-lg transition duration-200`}
            onClick={() => setActivePage("blogs")}
          >
            Blogs
          </button>
          <button
            className={`block w-full text-left ${
              activePage === "addBlog" ? "bg-gray-700" : ""
            } p-2 rounded-lg transition duration-200`}
            onClick={() => setActivePage("addBlog")}
          >
            Add Blog
          </button>
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="w-4/5 bg-gray-100 p-10">
        {activePage === "dashboard" && (
          <Dashboard
            totalBlogs={totalBlogs}
            categories={categories}
            refreshData={refreshData}
            downloadReport={downloadReport}
          />
        )}
        {activePage === "blogs" && (
          <Blogs blogs={blogs} onDelete={handleDelete} />
        )}{" "}
        {/* Pass blog data and delete handler */}
        {activePage === "addBlog" && <AddBlog />}{" "}
        {/* You may want to implement AddBlog functionality */}
      </div>
    </div>
  );
};

export default BlogPanelDetails;
