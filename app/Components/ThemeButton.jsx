import React, { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setThemeFromStorage();
    addThemeListener();
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
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-200"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 text-white" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
}

export default ThemeButton;
