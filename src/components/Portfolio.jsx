import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Money from "../assets/Money.jpg";
import emoji from "../assets/emoji.png";
import youTube from "../assets/you-tube.png";
import todoList from "../assets/todo-list.png";
import hostel from "../assets/hostel.png";


const projects = [
  {
    image:hostel,
    title: "Hostel Management System",
    description:"A web-based hostel management application designed to streamline operations for both students and administrators. It enables easy room booking, complaint registration, and student record management. The system ensures transparency, reduces paperwork, and enhances communication within the hostel.",
    technologies: "React.js, Node js, Tailwind CSS",
    link: "https://hms-frontend-ecru.vercel.app/",
  },
  {
    image: youTube,
    title: "YouTube Clone",
    description:
      "A YouTube-like video-sharing platform that allows users to browse, search, and watch videos with ease. It features real-time search functionality, dynamic video rendering, and intelligent recommendations based on user interests. Designed for smooth performance and an engaging user experience.",
    technologies: "React.js, Tailwind CSS",
    link: "https://m-tube-clone.vercel.app/",
  },
  {
    image: Money,
    title: "Money-Manager",
    description: "A Money Manager application that helps users track expenses and income efficiently. It features secure login, easy-to-use forms for adding transactions, and the ability to export financial data for reporting. Ideal for personal budgeting and financial planning.",
    technologies: "React.js, Tailwind CSS, Node.js",
    link: "https://money-frontend-bice.vercel.app/",
  },
  {
    image: emoji,
    title: "Emoji Chat App",
    description:
      "An Emoji Chat App designed as a fun and interactive game that boosts creativity and cognitive skills. Users can engage in emoji-based conversations, enhancing both memory and pattern recognition. A great way to pass time while exercising the brain.",
    technologies: "React js,Html,Tailwind css",
    link: "https://emoji-game-navy.vercel.app/",
  },
  {
    image: todoList,
    title: "Todo List",
    description: "A simple and efficient Todo List application to help users organize daily tasks and stay productive. It supports adding, editing, deleting, and marking tasks as completed. Designed with a clean UI and responsive layout for all devices.",
    technologies: "React.js",
    link: "https://nxtwave-task.vercel.app/",
  },
];

const LatestProject = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 9000);
    return () => clearInterval(interval);
  }, [currentProject]);

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black min-h-screen text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Latest <span className="text-green-500">Projects</span>
        </h2>

        {/* Project Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-12 items-center">
          {/* Project Content */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {String(currentProject + 1).padStart(2, "0")}
            </h3>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
              {projects[currentProject].title}
            </h4>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {projects[currentProject].description}
            </p>

            <p className="text-green-400 text-sm sm:text-base">
              {projects[currentProject].technologies}
            </p>

            <p className="text-white text-sm sm:text-base">
              Project Link:{" "}
              <a
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-500 hover:text-white transition"
              >
                {projects[currentProject].link}
              </a>
            </p>
          </div>

          {/* Project Image with Navigation */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden relative rounded-lg shadow-lg h-64 sm:h-72 md:h-80">
              <img
                src={projects[currentProject].image}
                alt={`Project ${currentProject + 1}`}
                className="w-full h-full object-cover rounded-lg transition-all duration-500"
              />
            </div>

            {/* Prev Button */}
            <button
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 p-2 sm:p-3 rounded-full hover:bg-green-500 transition shadow-lg cursor-pointer"
              onClick={prevProject}
            >
              <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 p-2 sm:p-3 rounded-full hover:bg-green-500 transition shadow-lg cursor-pointer"
              onClick={nextProject}
            >
              <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
