import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my portfolio website! I am P VAIBHAV, an ambitious student specializing in AI and ML. With expertise in full-stack web development, I create dynamic and engaging websites from front-end to back-end. As a YouTube tutor, I have the pleasure of sharing my knowledge on coding, DSA, and engineering subjects with a wide audience. 
        </p>

        <br />

        <p className="text-xl">
        Passionate about open-source collaboration, I actively contribute to projects, showcasing my skills and innovative ideas. Having secured two national-level hackathon victories, I demonstrate my ability to solve complex problems. In addition to my coding prowess, I indulge in graphic design, blogging, and video editing to unleash my creativity. Feel free to explore my portfolio and discover the intersection of technology and artistic expression.
        </p>
      </div>
    </div>
  );
};

export default About;
