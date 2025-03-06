import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg font-sans">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Name</td>
              <td className="p-3 text-gray-400 text-md">Mahendhrareddy</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Role</td>
              <td className="p-3 text-gray-400 text-md">
                MERN Stack Developer
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Expertise</td>
              <td className="p-3 text-gray-400 text-md">
                Full-Stack Web Development (Frontend & Backend)
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">
                Frontend Skills
              </td>
              <td className="p-3 text-gray-400 text-md">
                React.js, Next.js, Tailwind CSS, Bootstrap, Redux
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">
                Backend Skills
              </td>
              <td className="p-3 text-gray-400 text-md">
                Node.js, Express.js, SQLite, MongoDB, REST APIs
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">
                Problem-Solving
              </td>
              <td className="p-3 text-gray-400 text-md">
                Strong foundation in Data Structures & Algorithms (DSA)
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Projects</td>
              <td className="p-3 text-gray-400 text-md">
                Video Sharing App, Trading Dashboard, Facial Recognition
                Attendance System, Customer Management App
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">
                DevOps & Deployment
              </td>
              <td className="p-3 text-gray-400 text-md">
                Git, GitHub, CI/CD, Vercel, Render
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold text-green-300">Strengths</td>
              <td className="p-3 text-gray-400 text-md">
                Scalable architecture, clean UI/UX, performance optimization
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-green-300">Soft Skills</td>
              <td className="p-3 text-gray-400 text-md">
                Team collaboration, problem-solving, continuous learning
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutMe;
