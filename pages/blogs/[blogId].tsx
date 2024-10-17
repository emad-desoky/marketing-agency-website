// components/Blog.tsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

interface BlogData {
  id: string;
  title: string;
  description: string; // New field
  adminName: string; // New field
  content: string;
  date: string;
  images: string[]; // Updated to array for multiple images
}

const Blog = () => {
  const router = useRouter();
  const blogId = router.query.blogId as string;
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    if (blogId) {
      axios
        .get("/api/blogsData") // Ensure your API endpoint is correct
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
      {blog && (
        <Head>
          <title>{blog.title}</title>
          <meta name="description" content={blog.description} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={blog.title} />
          <meta property="og:description" content={blog.description} />
          <meta
            property="og:image"
            content={
              blog.images && blog.images.length > 0
                ? blog.images[0]
                : "/default-image.jpg"
            }
          />
          <meta
            property="og:url"
            content={`https://tactics-digital-agency.vercel.app/blogs/${blogId}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Your Website Name" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={blog.title} />
          <meta name="twitter:description" content={blog.description} />
          <meta
            name="twitter:image"
            content={
              blog.images && blog.images.length > 0
                ? blog.images[0]
                : "/default-image.jpg"
            }
          />
          <meta name="twitter:site" content="@yourtwitterhandle" />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href={`https://yourwebsite.com/blogs/${blogId}`}
          />
        </Head>
      )}

      {blog ? (
        <div className="bg-black text-green-600 shadow-lg min-h-dvh max-h-auto">
          {/* Admin name and date */}
          <p className="text-gray-400 text-sm">
            {blog.adminName} | {blog.date}
          </p>
          {/* Title */}
          <h1 className="text-4xl font-extrabold border-b-4 border-[rgb(255,228,0)] pb-2 mb-6">
            {blog.title}
          </h1>
          {/* Description */}
          <p className="font-semibold mb-3 text-gray-300">
            <strong className="text-gray-200">Description:</strong>{" "}
            {blog.description}
          </p>
          {/* Content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-lg leading-relaxed"
          />
        </div>
      ) : (
        <p className="text-center text-gray-400">Loading...</p>
      )}
    </>
  );
};

export default Blog;
