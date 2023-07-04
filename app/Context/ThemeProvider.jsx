import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 1000;
      setIsSmallScreen(smallScreen);
      console.log("Window inner width:", window.innerWidth); // Log the inner width
      console.log("isSmallScreen:", smallScreen); // Log the updated value
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
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
    m.addEventListener("change", handleThemeChange);
  };

  const handleThemeChange = (e) => {
    setIsDarkMode(e.matches);
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setThemeFromStorage();
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isSmallScreen }}>
      {children}
    </ThemeContext.Provider>
  );
};
