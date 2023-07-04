"use client";
import { ThemeContext } from "../Context/ThemeProvider";
import React, { useContext } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

function ThemeButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-color"
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
