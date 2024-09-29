// components/Blog.tsx

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface BlogData {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
  companyNumber: string;
  website: string;
  address: string;
}

const Blog = () => {
  const router = useRouter();
  const blogId = router.query.blogId as string;
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    if (blogId) {
      axios
        .get("/api/blogs")
        .then((response) => {
          const blogData = response.data.find((b: BlogData) => b.id === blogId);
          setBlog(blogData || null);
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  }, [blogId]);

  return (
    <>
      <div className="w-full bg-gradient-to-b from-[rgb(43,43,43)] to-black dark:from-neutral-800 dark:to-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {blog ? (
            <div className="bg-gradient-to-b from-[rgb(43,43,43)] to-[rgba(43,43,43,0.49)] dark:from-neutral-900 dark:to-neutral-950 text-white shadow-lg rounded-lg p-8 mb-8">
              <h1 className="text-4xl font-extrabold border-b-4 border-green-500 pb-2 mb-6 text-right">
                {blog.title}
              </h1>
              <p className="text-gray-400 text-sm text-right mb-6">
                {blog.date}
              </p>
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full max-w-xs sm:max-w-md lg:max-w-xl mx-auto rounded-lg shadow-lg mb-8"
                />
              )}
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-lg leading-relaxed text-right mb-8"
              />
              <div className="text-right text-sm text-gray-300">
                <p className="font-semibold mb-3">
                  <strong className="text-gray-200">رقم الشركة:</strong>{" "}
                  {blog.companyNumber}
                </p>
                <p className="font-semibold mb-3">
                  <strong className="text-gray-200">الموقع الإلكتروني:</strong>{" "}
                  <a
                    href={`http://${blog.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {blog.website}
                  </a>
                </p>
                <p className="font-semibold">
                  <strong className="text-gray-200">العنوان:</strong>{" "}
                  {blog.address}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
