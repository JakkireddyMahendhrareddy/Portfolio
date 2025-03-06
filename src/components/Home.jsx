import React from "react";
import { useStat, useEffect } from "react";

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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 h-100 mb-0">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-4xl font-semibold mt-2 hover:text-green-400">
            Mahendhrareddy
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            I'm a{" "}
            <span
              className="text-green-400 transition-opacity duration-500"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {words[index]}
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            "A passionate and skilled Full Stack Developer with expertise in
            building responsive web applications using React.js, Node.js, and
            modern web technologies. Adept at developing scalable solutions,
            optimizing performance, and ensuring seamless user experiences."
          </p>

          {/* Download CV Button */}
          <div className="flex flex-row">
            <a
              href="https://drive.google.com/file/d/1MCqgYKDVrJLbvsUM8WozF4pwyi4DKWlK/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-black px-5 py-2 mt-4 rounded-lg font-semibold hover:bg-white"
            >
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-4 text-xl p-3">
              <a
                href="https://github.com/JakkireddyMahendhrareddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-green-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/jakkireddy-mahendhrareddy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-green-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-green-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-56 h-56 object-cover border-4 border-green-400"
            />
            <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
