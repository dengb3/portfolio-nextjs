import React from "react";
import Image from "next/image";
import DineEase from "../../Components/DineEase";

function Projects() {
  const projects = [
    {
      title: "DineEase",
      imageSrc: "/DineEase.PNG",
      description: "A restaurant management app",
      demoLink: "#",
      codeLink: "#",
      readMoreLink: "#",
    },
    {
      title: "World Wonders",
      imageSrc: "/worldWonders.PNG",
      description: "A cultural e-commerce website",
      demoLink: "#",
      codeLink: "#",
      readMoreLink: "#",
    },
  ];

  return (
    <div className="flex mt-5 screen items-center justify-center">
      <div className="flex flex-col gap-5">
        <DineEase />
      </div>
    </div>
  );
}

export default Projects;
