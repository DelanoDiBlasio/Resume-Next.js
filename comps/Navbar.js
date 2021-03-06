import React from "react";
import Link from "next/link";

//creating the Navbar component
const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

export default Navbar;
