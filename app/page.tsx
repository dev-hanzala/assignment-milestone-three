import React from "react";
import BlogCard from "@/components/blog-card";
import { Blogs } from "@/lib/blog";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Blogs.map((blog) => (
        <BlogCard
          key={blog.heading}
          img={blog.imageUrl}
          title={blog.heading}
          url={blog.url}
        />
      ))}
    </div>
  );
}
