"use client";
import React, { useState, useEffect } from "react";

function Skills() {
  const skillsList = [
    "SHOW ALL",
    "JAVASCRIPT",
    "HTML5",
    "NEXT-JS",
    "REACT",
    "MONGODB",
    "FIREBASE",
    "CSS",
    "FRONT-END",
    "BACK-END",
    "TAILWIND",
    "TYPESCRIPT",
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  if (isSmallScreen) {
    return (
      <div className="flex flex-col mt-5 items-center justify-center">
        <div className="grid grid-cols-3 gap-5">
          <h1 className="text-2xl font-bold col-span-3 mb-2 ml-2">
            Filter projects by skill or technology
          </h1>
          {skillsList.map((skill) => (
            <button
              key={skill}
              className={`group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border border-gray-200 rounded p-4 m-2 ${
                selectedSkill === skill ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSkillClick(skill)}
            >
              <h1>{skill}</h1>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex mt-5 items-center justify-center">
      <div className="grid grid-cols-6 gap-5">
        <h1 className="text-2xl font-bold col-span-6 mb-2 ml-2">
          Filter projects by skill or technology
        </h1>
        {skillsList.map((skill) => (
          <button
            key={skill}
            className={`group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border border-gray-200 rounded p-4 m-2 ${
              selectedSkill === skill ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSkillClick(skill)}
          >
            <h1>{skill}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Skills;
