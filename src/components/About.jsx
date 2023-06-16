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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
          voluptate iste corrupti incidunt non labore recusandae distinctio
          reprehenderit repellat ipsa, nisi magni. Soluta corrupti iure aliquid
          nemo quaerat corporis eveniet assumenda vitae similique quos sequi
          libero dignissimos quam, voluptates fuga blanditiis? Veritatis
          pariatur libero, harum suscipit aliquam consectetur dolores!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          provident iste officiis repellendus temporibus? Ratione illo unde rem
          in nemo quod, veniam neque cupiditate similique a cum aperiam dolores
          impedit maiores nam, ut, ex explicabo doloremque. Dolore soluta ipsam
          ad impedit temporibus, hic ut nam molestias aperiam maiores blanditiis
          totam.
        </p>
      </div>
    </div>
  );
};

export default About;
