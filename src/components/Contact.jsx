// import React from "react";
// import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons

// const Contact = () => {
//   return (
//     <section className="bg-black min-h-screen text-white flex justify-center items-center py-16 px-6">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Side: Contact Info */}
//         <div>
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Let's <span className="text-green-400">Work Together</span>
//           </h2>
//           <p className="text-gray-400 mb-6">
//             "Let's collaborate to create something amazing! Feel free to reach
//             out for any projects, inquiries, or just to say hello."
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <Phone className="text-green-400 w-6 h-6" />
//               <p>(+91) 7569850712</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <Mail className="text-green-400 w-6 h-6" />
//               <p>jakkireddymahendrareddy@gmail.com</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <MapPin className="text-green-400 w-6 h-6" />
//               <p>Hyderabad, Telegana State</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Contact Form */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Contact <span className="text-green-400">Me!</span>
//           </h3>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Company"
//                 className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-black font-bold py-3 rounded-md hover:bg-green-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




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

    // WhatsApp Number to Receive Message (Your Number)
    const whatsappNumber = "917569850712"; // Replace with your WhatsApp number (Add country code without +)
    
    // Create WhatsApp Message
    const whatsappMessage = `Hello, I received a new contact request!%0A
      *Name:* ${name}%0A
      *Email:* ${email}%0A
      *Phone:* ${phone}%0A
      *Company:* ${company ? company : "N/A"}%0A
      *Message:* ${message}`;

    // Open WhatsApp Chat with Pre-Filled Message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    // Show ThanksCard
    setSubmitted(true);

    // Reset Form
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section className="bg-black min-h-screen text-white flex justify-center items-center py-16 px-6">
      <div className="max-w-6xl w-full">
        {submitted ? (
          <ThanksCard setSubmitted={setSubmitted} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Let's <span className="text-green-400">Work Together</span>
              </h2>
              <p className="text-gray-400 mb-6">
                "Let's collaborate to create something amazing! Feel free to
                reach out for any projects, inquiries, or just to say hello."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-green-400 w-6 h-6" />
                  <p>(+91) 7569850712</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-green-400 w-6 h-6" />
                  <p>jakkireddymahendrareddy@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-green-400 w-6 h-6" />
                  <p>"Located in Hyderabad, Telangana, India."</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
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
                    placeholder="Company"
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

