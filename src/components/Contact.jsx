import React from "react";

const Contact = () => {
  return (
    <div name = "contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"> 
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/147f1cd2-a873-48ec-9c7a-6516cdf54e86" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus-within:outline-none my-4">
                </input>

                <input type="text" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus-within:outline-none">
                </input>

                <textarea name="message" rows="10" className="bg-transparent border-2  text-white focus-within:outline-none" placeholder="Enter your Message"></textarea>

                <button className = "text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md  flex items-center hover:scale-105 duration-500">
                    Let's Talk
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
