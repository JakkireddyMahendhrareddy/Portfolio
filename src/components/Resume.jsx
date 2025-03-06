import React, { useState } from "react";
import Skill from "../Routes/Skill.jsx";
import AboutMe from "../Routes/AboutMe.jsx";
import Education from "../Routes/Education.jsx";

const experiences = [
  {
    role: "Frontend Developer",
    company: "RNIT AI Solution Pvt limited.",
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
    company: "RNIT AI Solution Pvt limited",
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
  const [activeTab, setActiveTab] = useState("Experience");

  const tabs = ["Experience", "Education", "Skills", "About Me"];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Why Hire Me?</h1>
        <p className="text-gray-400 mb-4 text-sm">
          As a passionate MERN Stack Developer, I specialize in building
          scalable, high-performance web applications with a keen eye for clean
          UI/UX, responsive design, and efficient backend systems.
        </p>
        <div className="flex gap-6">
          {/* Sidebar with buttons */}
          <div className="w-1/4 flex flex-col space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 rounded transition duration-300 ${
                  activeTab === tab
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="w-3/4">
            {activeTab === "Experience" && (
              <>
                <h2 className="text-3xl text-green-400 font-bold mb-4">
                  My Experience
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg space-y-2"
                    >
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-gray-400 text-xl">{exp.company}</p>
                      <p className="text-green-300 font-semibold">
                        {exp.project}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === "Education" && (
              <div className="space-y-2">
                <h2 className="text-3xl text-green-400 font-bold">
                  Education Section
                </h2>
                <Education />
              </div>
            )}
            {activeTab === "Skills" && (
              <div className="space-y-3">
                <h2 className="text-3xl text-green-400 font-bold">
                  Skills Section
                </h2>
                <Skill />
              </div>
            )}
            {activeTab === "About Me" && (
              <div className="gap-1">
                <h2 className="text-3xl text-green-400 font-bold">
                  About Section
                </h2>
                <AboutMe />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
