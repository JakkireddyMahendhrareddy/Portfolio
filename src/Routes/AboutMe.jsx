import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg font-sans">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-sm md:text-md">
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Name</td>
              <td className="p-3 text-gray-400">Mahendhrareddy</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Role</td>
              <td className="p-3 text-gray-400">MERN Stack Developer</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Expertise</td>
              <td className="p-3 text-gray-400">Full-Stack Web Development</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Frontend Skills</td>
              <td className="p-3 text-gray-400">React.js, Next.js, Tailwind CSS, Bootstrap, Redux</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Backend Skills</td>
              <td className="p-3 text-gray-400">Node.js, Express.js, SQLite, MongoDB, REST APIs</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-green-300">Soft Skills</td>
              <td className="p-3 text-gray-400">Team collaboration, problem-solving, continuous learning</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutMe;