import React from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Blogs } from "@/lib/blog";
import Comments from "@/components/comments";

export default async function Blog({ params }: { params: Promise<{ blog: string }> }) {
  const blog = (await params).blog;
  const index = Blogs.findIndex((blogItem) => blogItem.url === `/${blog}`);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1280px] p-12">
        {index !== -1 && <h1 className="">{Blogs[index].heading}</h1>}
        {index !== -1 && (
          <article className="text-xl text-muted-foreground">
            {Blogs[index].subtext}
          </article>
        )}
        <div className="pt-4" />
        <AspectRatio ratio={16 / 9} className="w-full">
          {index !== -1 && <Image fill src={Blogs[index].imageUrl} alt="" />}
        </AspectRatio>
        {index !== -1 &&
          Blogs[index].paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        <Comments />
      </div>
    </div>
  );
}
