"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import ThemeButton from "./ThemeButton";

function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <div className="p-2 flex flex-row items-center space-x-2 border-solid border-2 border-gray-100 rounded-3xl">
          <a href="/Deng's Resume.pdf" download="Deng's Resume">
            Download CV
          </a>
          <BsDownload />
        </div>
        <ul className="hidden sm:flex">
          <Link href="/">
            <li className="p-4  hover:text-gray-600">Home</li>
          </Link>
          <Link href="/about">
            <li className="p-4  hover:text-gray-600">About</li>
          </Link>
          <Link href="/skills">
            <li className="p-4">Skills</li>
          </Link>
          <Link href="/projects">
            <li className="p-4  hover:text-gray-600">Projects</li>
          </Link>
          <Link href="/contact">
            <li className="p-4  hover:text-gray-600">Contact</li>
          </Link>
          {mounted && <ThemeButton />}
        </ul>
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen ease-in duration-300"
              : "hidden"
          }
        >
          <ul className="text-[#c3bef7]">
            <Link href="/home">
              <li className="p-2 text-xl hover:text-gray-600 ">Home</li>
            </Link>
            <Link href="/about">
              <li className="p-2 text-xl hover:text-gray-600">About</li>
            </Link>
            <Link href="/skills">
              <li className="p-2 text-xl hover:text-gray-600">Skills</li>
            </Link>
            <Link href="/projects">
              <li className="p-2 text-xl hover:text-gray-600">Projects</li>
            </Link>
            <Link href="/contact">
              <li className="p-2 text-2xl hover:text-gray-600">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
