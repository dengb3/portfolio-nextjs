"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../Context/ThemeProvider";
import ThemeButton from "./ThemeButton";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <div className="p-2 flex flex-row items-center space-x-2 border-solid border-2 border-gray-100 rounded-3xl">
          <a href="/Deng's Resume.pdf" download="Deng's Resume">
            Download CV
          </a>
        </div>
        <ul className="hidden sm:flex">
          <Link href="/">
            <li className="p-4 hover:text-gray-600">Home</li>
          </Link>
          <Link href="/about">
            <li className="p-4 hover:text-gray-600">About</li>
          </Link>
          <Link href="/skills">
            <li className="p-4">Skills</li>
          </Link>
          <Link href="/projects">
            <li className="p-4 hover:text-gray-600">Projects</li>
          </Link>
          <Link href="/contact">
            <li className="p-4 hover:text-gray-600">Contact</li>
          </Link>
          <ThemeButton />
        </ul>
        <div className="block sm:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleNav}
          >
            {navOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </button>
        </div>
      </div>
      {navOpen && (
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex flex-col items-center justify-center w-64 shadow-2xl ${
            isDarkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-black"
          }`}
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl font-bold hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}

export default NavBar;
