import React, { useState } from "react";

// Define Blog type for better TypeScript support
interface Blog {
  id: number;
  title: string;
  description: string;
}

interface BlogsProps {
  blogs: Blog[];
  onDelete: (id: number) => void; // Function to delete a blog
}

const Blogs: React.FC<BlogsProps> = ({ blogs, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Handle delete confirmation
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Blogs</h2>
      <input
        type="text"
        placeholder="Search by title"
        className="mb-5 p-2 border border-gray-300 rounded-lg w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Blog list */}
      <div className="space-y-4">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-5 rounded-lg shadow-lg flex justify-between items-center transition-transform transform hover:scale-105"
            >
              <div>
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-500">{blog.description}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </div>

      {/* Pagination buttons */}
      <div className="mt-5 flex justify-center space-x-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } hover:bg-blue-400`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 rounded ${
            currentPage < totalPages
              ? "bg-gray-300"
              : "bg-gray-200 cursor-not-allowed"
          }`}
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
