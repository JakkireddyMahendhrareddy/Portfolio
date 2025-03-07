import React from "react";
import { Link } from "react-router-dom";

const ThanksCard = ({ setSubmitted }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-4">Thank You!</h2>
      <p className="text-gray-300 mb-6">Your message has been successfully sent. I will get back to you soon.</p>
      <button
        onClick={() => setSubmitted(false)}
        className="bg-green-500 text-black font-bold py-3 px-6 rounded-md hover:bg-green-600 transition"
      >
        Send Another Message
      </button>
      <div className="mt-4">
        <Link to="/" className="text-green-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThanksCard;
