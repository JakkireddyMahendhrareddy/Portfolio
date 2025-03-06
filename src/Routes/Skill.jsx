import React from "react";

const Skill = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg font-sans">
      <p className="text-gray-300 text-md leading-relaxed">
        As a MERN Stack Developer, I specialize in crafting high-performance,
        responsive web applications with a focus on clean UI/UX, scalable
        architecture, and optimized performance.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Frontend Skills */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg text-green-300 font-semibold mb-2">
            Frontend Development
          </h3>
          <ul className="text-gray-400 text-md list-disc list-inside space-y-1">
            <li>React.js, Next.js, Redux</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Responsive & Interactive UI</li>
            <li>API Integration & State Management</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg text-green-300 font-semibold mb-2">
            Backend Development
          </h3>
          <ul className="text-gray-400 text-md list-disc list-inside space-y-1">
            <li>Node.js, Express.js</li>
            <li>SQLite, MongoDB</li>
            <li>REST API Development</li>
            <li>Authentication & Security (JWT)</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg text-green-300 font-semibold mb-2">
            Additional Skills
          </h3>
          <ul className="text-gray-400 text-md list-disc list-inside space-y-1">
            <li>Data Structures & Algorithms (DSA)</li>
            <li>Problem Solving & Debugging</li>
            <li>Git, GitHub, Deployment (Vercel, Render)</li>
            <li>Web Performance Optimization</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg text-green-300 font-semibold mb-2">
            Soft Skills
          </h3>
          <ul className="text-gray-400 text-md list-disc list-inside space-y-1">
            <li>Team Collaboration & Communication</li>
            <li>Attention to Detail & Problem Solving</li>
            <li>Continuous Learning & Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
