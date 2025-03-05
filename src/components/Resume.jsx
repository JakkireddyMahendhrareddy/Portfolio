import React from "react";

const experiences = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Abc Corp.",
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Google",
  },
  {
    year: "2021 - 2022",
    role: "Backend Developer",
    company: "YouTube",
  },
  {
    year: "2020 - 2021",
    role: "Frontend Developer",
    company: "Xyz Inc.",
  },
];

const Resume = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Why Hire Me?</h1>
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex gap-6">
          <div className="w-1/4 flex flex-col space-y-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Experience
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded">
              Education
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded">
              Skills
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded">
              About Me
            </button>
          </div>
          <div className="w-3/4">
            <h2 className="text-3xl text-green-400 font-bold mb-4">My Experience</h2>
            <div className="grid grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-green-400 font-semibold">{exp.year}</p>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
