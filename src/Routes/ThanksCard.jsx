import React from "react";
import { Link } from "react-router-dom";

const ThanksCard = ({ setSubmitted }) => {
  return (
    <div className="bg-gray-800 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">Thank You!</h2>
      <p className="text-gray-300 mb-6 text-sm md:text-md">Your message has been successfully sent.</p>
      <button
        onClick={() => setSubmitted(false)}
        className="bg-green-500 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-green-600 transition"
      >
        Send Another Message
      </button>
      <div className="mt-4">
        <Link to="/" className="text-green-400 hover:underline text-sm md:text-md">Back to Home</Link>
      </div>
    </div>
  );
};

export default ThanksCard;
