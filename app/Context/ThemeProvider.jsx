"use client";
import React, { createContext, useState, useEffect, useRef } from "react";
import { Element, Link } from "react-scroll";
import About from "../Pages/about/page";
import Home from "../page";
import Skills from "../Pages/skills/page";
import Projects from "../Pages/projects/page";
import Contact from "../Pages/contact/page";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 1000;
      setIsSmallScreen(smallScreen);
      console.log("Window inner width:", window.innerWidth);
      console.log("isSmallScreen:", smallScreen);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setThemeFromStorage = () => {
    try {
      const d = document.documentElement;
      const c = d.classList;
      c.remove("light", "dark");
      const e = localStorage.getItem("theme");
      if (e === "system" || (!e && false)) {
        const t = "(prefers-color-scheme: dark)";
        const m = window.matchMedia(t);
        if (m.media !== t || m.matches) {
          d.style.colorScheme = "dark";
          c.add("dark");
          setIsDarkMode(true);
        } else {
          d.style.colorScheme = "light";
          c.add("light");
          setIsDarkMode(false);
        }
      } else if (e) {
        c.add(e);
        setIsDarkMode(e === "dark");
      } else {
        c.add("light");
        setIsDarkMode(false);
      }
      if (e === "light" || e === "dark" || !e)
        d.style.colorScheme = e || "light";
    } catch (e) {}
  };

  const addThemeListener = () => {
    const t = "(prefers-color-scheme: dark)";
    const m = window.matchMedia(t);
    const handleThemeChange = (e) => {
      setIsDarkMode(e.matches);
    };
    m.addEventListener("change", handleThemeChange);

    return () => {
      m.removeEventListener("change", handleThemeChange);
    };
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setThemeFromStorage();
  };

  useEffect(() => {
    setThemeFromStorage();
    const cleanupThemeListener = addThemeListener();

    return () => {
      cleanupThemeListener();
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, isSmallScreen, activeSection }}
    >
      <Element name="home" className="section">
        {children}
      </Element>
      <Link to="about" smooth={true} duration={500}></Link>
      <Element name="about" className="section">
        <About />
      </Element>
      <Link to="about" smooth={true} duration={500}></Link>
      <Element name="skills" className="section">
        <Skills />
      </Element>
      <Link to="about" smooth={true} duration={500}></Link>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Link to="projects" smooth={true} duration={500}></Link>
      <Element name="contact" className="section">
        <Contact />
      </Element>
      <Link to="contact" smooth={true} duration={500}></Link>
    </ThemeContext.Provider>
  );
};
