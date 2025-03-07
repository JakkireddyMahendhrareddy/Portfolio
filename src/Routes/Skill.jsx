import React from "react";

const Skill = () => {
  return (
    <div className="bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg font-sans">
      <p className="text-gray-300 text-sm md:text-md leading-relaxed">
        As a MERN Stack Developer, I specialize in crafting high-performance, responsive web applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg text-green-300 font-semibold">Frontend Development</h3>
          <ul className="text-gray-400 list-disc list-inside">
            <li>React.js, Next.js, Redux</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Responsive UI</li>
          </ul>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg text-green-300 font-semibold">Backend Development</h3>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Node.js, Express.js</li>
            <li>SQLite, MongoDB</li>
            <li>REST API Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;