import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  const words = ["Developer", "Coder", "Designer"];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setVisible(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-5xl flex flex-col md:flex-row items-center w-full">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 hover:text-green-400">
            Mahendhrareddy
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
            I'm a{" "}
            <span
              className="text-green-400 transition-opacity duration-500"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {words[index]}
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            "A passionate Full Stack Developer skilled in React.js, Node.js, and
            modern web technologies. I specialize in building scalable,
            high-performance web applications for seamless user experiences."
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-6 space-y-3 sm:space-y-0 sm:space-x-3">
            <a
              href="https://drive.google.com/file/d/1MCqgYKDVrJLbvsUM8WozF4pwyi4DKWlK/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-5 py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white transition"
            >
              Download CV
            </a>
            <a
              href="https://drive.google.com/file/d/1MCqgYKDVrJLbvsUM8WozF4pwyi4DKWlK/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-5 py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
            <a
              href="https://github.com/JakkireddyMahendhrareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jakkireddy-mahendhrareddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <img
              src="/mahi.jpeg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-green-400"
            />
            <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
