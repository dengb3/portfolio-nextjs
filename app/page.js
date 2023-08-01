"use client";
import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "./Context/ThemeProvider";

function Home() {
  const { isDarkMode, isSmallScreen } = useContext(ThemeContext);

  return (
    <div
      className="md:h-[40vh]"
      style={{
        backgroundImage: isDarkMode ? "none" : "url(/profile.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: isSmallScreen ? "30vh" : "125vh",
        display: "flex",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] flex flex-col gap-[40px]">
          <div>
            <h1 className={isSmallScreen ? "text-sm" : "text-5xl"}>
              Hi! I&lsquo;m Deng Benjamin
            </h1>
            <h4
              className={
                isSmallScreen
                  ? "text-xs mt-3 text-orange-300"
                  : "text-2xl mt-3 text-orange-300"
              }
            >
              <Typewriter
                options={{
                  strings: ["Full stack developer", "Lifelong learner"],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className={isSmallScreen ? "text-xs" : "text-2xl"}>
            <p>
              I have a passion for software development that is efficient,
              functional, and delivers a good user experience. I am constantly
              challenging myself and never limit myself to what I can learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
