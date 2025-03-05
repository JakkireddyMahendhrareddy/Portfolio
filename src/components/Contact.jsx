import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons

const Contact = () => {
  return (
    <section className="bg-black min-h-screen text-white flex justify-center items-center py-16 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's <span className="text-blue-400">Work Together</span>
          </h2>
          <p className="text-gray-400 mb-6">
            "Let's collaborate to create something amazing! Feel free to reach
            out for any projects, inquiries, or just to say hello."
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-green-400 w-6 h-6" />
              <p>(+91) 7569850711</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-400 w-6 h-6" />
              <p>jakkireddymahendrareddy@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-400 w-6 h-6" />
              <p>123 Anywhere Street, Any City</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Contact <span className="text-green-400">Me!</span>
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-black font-bold py-3 rounded-md hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
