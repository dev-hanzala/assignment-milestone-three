import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sm:sticky top-0 z-50 flex py-4 sm:py-0 sm:h-14 w-full items-center border-b bg-background/95 px-8 backdrop-blur">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <span className="h-9 px-4 py-2 text-sm font-extrabold">Hanzala</span>
        <Link href="/">
          <Button variant={"secondary"}>Blogs</Button>
        </Link>

        <Link href="/contact">
          <Button variant={"secondary"}>Contact</Button>
        </Link>

        <Link href="/about">
          <Button variant={"secondary"}>About</Button>
        </Link>
      </div>
    </header>
  );
}
