import React, { useState, useEffect } from "react";
import Skill from "../Routes/Skill.jsx";
import AboutMe from "../Routes/AboutMe.jsx";
import Education from "../Routes/Education.jsx";

const experiences = [
  {
    role: "Frontend Developer",
    company: "RNIT AI Solution Pvt Limited.",
    project:
      "Developed a responsive web application with React.js, enhancing user experience and performance.",
  },
  {
    role: "Full Stack Developer",
    company: "GIS",
    project:
      "Built a MERN stack project, integrating REST APIs and improving backend efficiency.",
  },
  {
    role: "Backend Developer",
    company: "RNIT AI Solution Pvt Limited",
    project:
      "Optimized backend services, improving API response time and data handling.",
  },
  {
    role: "Frontend Developer",
    company: "SELF",
    project:
      "Designed and implemented interactive UI components using React and Tailwind CSS.",
  },
];

const Resume = () => {
  const tabs = ["Experience", "Education", "Skills", "About Me"];
  const [activeTab, setActiveTab] = useState("Experience");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabs.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          return tabs[nextIndex];
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 30000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
          Why Hire Me?
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-6 text-center">
          Passionate MERN Stack Developer with expertise in scalable, high-performance web applications.
        </p>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full sm:w-auto text-center py-2 px-4 sm:py-3 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base md:text-lg font-medium ${
                activeTab === tab
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-white hover:bg-green-600"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full">
          {activeTab === "Experience" && (
            <>
              <h2 className="text-lg sm:text-xl text-green-400 font-bold mb-4 text-center">
                My Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-md space-y-2">
                    <h3 className="text-base sm:text-lg font-bold">{exp.role}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{exp.company}</p>
                    <p className="text-green-300 font-semibold text-sm sm:text-base">
                      {exp.project}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
          {activeTab === "Education" && (
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl text-green-400 font-bold text-center">
                Education
              </h2>
              <Education />
            </div>
          )}
          {activeTab === "Skills" && (
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl text-green-400 font-bold text-center">
                Skills
              </h2>
              <Skill />
            </div>
          )}
          {activeTab === "About Me" && (
            <div className="gap-1">
              <h2 className="text-lg sm:text-xl text-green-400 font-bold text-center">
                About Me
              </h2>
              <AboutMe />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
