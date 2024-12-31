import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
  url: string;
}

export default function BlogCard({ title, img, url }: Props) {
  return (
    <Card className="h-full w-full">
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9}>
          <Image fill className="rounded-md object-cover" src={img} alt="" />
        </AspectRatio>
      </CardContent>
      <CardFooter>
        <Link href={url}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
