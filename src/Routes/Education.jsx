import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg font-sans">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-green-300">
              <th className="p-3 text-left">Degree</th>
              <th className="p-3 text-left">Institution</th>
              <th className="p-3 text-left">Year of Completion</th>
              <th className="p-3 text-left">CGPA/Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-3">Bachelor's in Computer Science</td>
              <td className="p-3">
                Kallam Harinadhareddy Institute of Technology
              </td>
              <td className="p-3">2020-2024</td>
              <td className="p-3">8.1 CGPA</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3">Intermediate (12th)</td>
              <td className="p-3">Jaya Bharathi Jr college</td>
              <td className="p-3">2018-2020</td>
              <td className="p-3">9.5 CGPA</td>
            </tr>
            <tr>
              <td className="p-3">High School (10th)</td>
              <td className="p-3">ST.Joseph's High School</td>
              <td className="p-3">2017-2018</td>
              <td className="p-3">8.7 CGPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
