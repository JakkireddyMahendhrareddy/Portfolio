import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ThanksCard from "../Routes/ThanksCard.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, company, message } = formData;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    const whatsappNumber = "917569850712";
    const whatsappMessage = `Hello, I received a new contact request!%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Company:* ${
      company || "N/A"
    }%0A*Message:* ${message}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section className="bg-black min-h-screen text-white flex justify-center items-center py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl w-full">
        {submitted ? (
          <ThanksCard setSubmitted={setSubmitted} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's <span className="text-green-400">Work Together</span>
              </h2>
              <p className="text-gray-400 mb-6">
                "Let's collaborate to create something amazing! Feel free to
                reach out for any projects, inquiries, or just to say hello."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <Phone className="text-green-400 w-6 h-6" />
                  <p className="break-all text-sm sm:text-base">
                    (+91) 7569850712
                  </p>
                </div>
                <div className="flex items-center gap-3 text-lg flex-wrap">
                  <Mail className="text-green-400 w-6 h-6 sm:w-5 sm:h-5" />
                  <p className="break-all text-sm sm:text-base">
                    jakkireddymahendrareddy@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-3 text-lg">
                  <MapPin className="text-green-400 w-6 h-6" />
                  <p className="break-all text-sm sm:text-base">
                    {" "}
                    Located in Hyderabad, Telangana, India – Let’s connect and
                    create something amazing!
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact <span className="text-green-400">Me!</span>
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
                  required
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
        )}
      </div>
    </section>
  );
};

export default Contact;
