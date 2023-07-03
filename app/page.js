"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";

export default function Home() {
  const statements = [
    "Hi! I'm Deng!",
    "A full stack developer.",
    "A lifelong learner.",
  ];

  const additionalStatements = [
    "big picture thinker",
    "People focused",
    "collaborative",
    "outcome focused",
    "discipline driven",
    "a lover of solving problems",
  ];

  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatementIndex(
        (prevIndex) => (prevIndex + 1) % additionalStatements.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [additionalStatements.length]);

  const generateColor = (index) => {
    const hue = (index * 40) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex">
        <NavBar />
        <div className="lg:ml-0 mt-5 lg:mt-5 flex justify-center items-center">
          <div className="flex flex-col">
            <h2 className="flex justify-center font-black text-xl lg:text-5xl">
              {statements[currentStatementIndex]}
            </h2>
            <h3 className="inline-block mt-5 font-bold lg:text-xl max-w-2xl text-center">
              <span>
                {additionalStatements.map((statement, index) => {
                  const isCurrentStatement = index <= currentStatementIndex;
                  const statementClass = isCurrentStatement
                    ? "text-pink-500"
                    : "";
                  const color = generateColor(index);
                  const animationDelay = isCurrentStatement ? index * 0.2 : 0;

                  return (
                    <span
                      key={index}
                      className={`${statementClass} text-custom-color`}
                      style={{
                        color: isCurrentStatement ? color : "",
                        opacity:
                          isAnimationComplete && isCurrentStatement ? 1 : 0,
                        transition: `opacity 0.5s`,
                        animation: `fade-in 0.5s ${animationDelay}s both`,
                      }}
                    >
                      {statement}
                      {index !== additionalStatements.length - 1 && " "}
                    </span>
                  );
                })}
              </span>
            </h3>
            <div className="mt-4 text-center">
              <p className="font-normal inline-block max-w-2xl">
                I have a passion for software development that is efficient,
                functional, and delivers a good user experience. I am constantly
                challenging myself and never limit myself to what I can learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
