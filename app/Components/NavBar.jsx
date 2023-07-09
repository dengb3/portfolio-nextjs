"use client";
import { useState, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../Context/ThemeProvider";
import ThemeButton from "./ThemeButton";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-0 font-semibold">
        <div className="flex border border-orange-300 px-4 py-1 text-orange-300 rounded-[5px] items-center gap-2 hover:bg-orange-300 hover:text-white transition duration-200">
          <a href="/Deng's Resume.pdf" download="Deng's Resume">
            Download CV
          </a>
        </div>
        <ul className="hidden sm:flex">
          <li className="p-4 hover:text-gray-600">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              Home
            </ScrollLink>
          </li>
          <li className="p-4 hover:text-gray-600">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              About
            </ScrollLink>
          </li>
          <li className="p-4">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              Skills
            </ScrollLink>
          </li>
          <li className="p-4 hover:text-gray-600">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="p-4 hover:text-gray-600">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              Contact
            </ScrollLink>
          </li>
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
          className={`fixed inset-y-0 left-0 z-50 flex flex-col items-center justify-center w-32 shadow-2xl ${
            isDarkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-black"
          }`}
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}

export default NavBar;
