import React from "react";
import {
  FaCode,
  FaPencilRuler,
  FaPaintBrush,
  FaSearch,
  FaVideo,
  FaCamera,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "border-green-500",
    hoverColor: "hover:bg-gray-500",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler />,
    color: "border-green-400",
    hoverColor: "hover:bg-gray-400",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush />,
    color: "border-green-400",
    hoverColor: "hover:bg-gray-400",
  },
  {
    title: "SEO",
    icon: <FaSearch />,
    color: "border-green-400",
    hoverColor: "hover:bg-gray-400",
  },
  {
    title: "Video Editing",
    icon: <FaVideo />,
    color: "border-green-400",
    hoverColor: "hover:bg-gray-400",
  },
  {
    title: "Photography",
    icon: <FaCamera />,
    color: "border-green-400",
    hoverColor: "hover:bg-gray-400",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">
        My <span className="text-green-500">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border-2 ${service.color} p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 ${service.hoverColor} hover:text-black cursor-pointer`}
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold">{service.title}</h3>
            {/* Description */}
            <p className="text-sm mt-2 opacity-70">
              "I am Mahireddy, a passionate developer specializing in web
              development, UI/UX design, and digital creativity, offering SEO,
              video editing, and photography services."
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
