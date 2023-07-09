import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const images = [
    { src: "/peoplePerson.jpg", title: "Imaginative" },
    { src: "/outcome.jpg", title: "Outcome focused" },
    { src: "/collaborate.jpg", title: "Collaborative" },
    { src: "/leadership.JPG", title: "Leadership" },
    { src: "/peopleFocused.jpg", title: "People Focused" },
    { src: "/logic.jpg", title: "Logical" },
  ];
  const paragraphs = [
    {
      title: "Imaginative",
      content: `I want to make improvements and shake up the status quo. 
      I will champion my ideas to bring dramatic changes.`,
    },
    {
      title: "Outcome focused",
      content: `When I am working on a clear goal I can access
      my competitive side due to a desire to get things done as well as
      possible`,
    },
    {
      title: "Collaborative",
      content: `I can tell when competition is not the correct
      motivation. I know that sometimes everyone involved is better off pooling resources and
      being united in a collaborative spirit`,
    },
    {
      title: "Leadership",
      content: `
      I lead with energy and enthusiasm, fostering collaboration and empathy. 
      My genuine approach builds camaraderie and inspires others to invest in our shared ideas. 
      With persuasive skills, I gather strong support for the collective vision.`,
    },
    {
      title: "People Focused",
      content: `I feel that other people are the most valuable thing
      to have around you. Working as a team I can get a lot more done
      than would be possible individually.`,
    },
    {
      title: "Logical",
      content: `When formulating my ideas, 
      I rely on a step-by-step logical process that allows me to bring clarity and structure to my thinkingical processes`,
    },
  ];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
  };

  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    // Render carousel on smaller screens
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt=""
                    src={image.src}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    {image.title}
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {paragraphs.find((p) => p.title === image.title)?.content}
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }

  // Render individual images on larger screens
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                alt=""
                src={image.src}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                {image.title}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {paragraphs.find((p) => p.title === image.title)?.content}
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
