import React from "react";

function About() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex">
        <div>
          <h1 className="flex justify-center font-black text-xl lg:text-5xl">
            This is a little about me.
          </h1>
          <div className="mt-4 text-center flex flex-row justify-between">
            <p className="inline-block mt-5 text-center max-w-2xl">
              {/* Your paragraph content */}
            </p>

            <div>
              <img className="h-1080 w-1920" src="profile.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
