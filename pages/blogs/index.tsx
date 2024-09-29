import React from "react";
import { DataBlog } from "@/components/blogs-data/DataBlog";
import Navbar from "@/components/navbar/Navbar";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <DataBlog />
    </>
  );
};

export default Blogs;
