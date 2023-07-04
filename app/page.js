"use client";
import React, { Component } from "react";
import Typewriter from "typewriter-effect";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/profile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-[450px] flex flex-col gap-[40px]">
            <div>
              <h1 className="text-5xl">Hi! I'm Deng Benjamin</h1>
              <h4 className="text-2xl mt-3 text-orange-300">
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
            <div className="bg-orange-300 h-[2px] w-[40px]"></div>
            <div>
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
}

export default Home;
