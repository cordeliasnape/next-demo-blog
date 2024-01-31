import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-indigo-300 text-white py-4 flex items-center justify-center space-x-10">
      <Navigation />
      <h1 className="text-2x1 font-bold">Cordelia's Next.js Website</h1>
      <div className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/projects">Projects</Link>
        <Link href="/blogs">Blog</Link>
      </div>
    </header>
  );
}

export default Header;
