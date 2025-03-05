import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 h-100">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-4xl font-semibold mt-2 hover:text-green-400">
            Allu Arjun
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            I'm a <span className="text-green-400">Actor</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Allu Arjun is an Indian actor known for his stylish performances and
            dance skills in Telugu cinema.
          </p>

          {/* Download CV Button */}
          <div className="flex flex-row">
            <Link
              to="/resume.pdf"
              target="_blank"
              className="inline-block bg-green-500 text-black px-5 py-2 mt-4 rounded-lg font-semibold hover:bg-white"
            >
              Download CV
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-4 text-xl p-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-green-400" />
              </a>
              <a
                href="https://linkedin.com"
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
