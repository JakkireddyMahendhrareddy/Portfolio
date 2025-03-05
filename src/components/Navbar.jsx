import { useState } from "react";
import PortfolioLogo from "./PortfolioLogo";

import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-gray-900 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="https://en.wikipedia.org/wiki/Allu_Arjun"
          target="_blank"
          rel="noopener noreferrer"
        >
        <PortfolioLogo/>

        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-600">
               Services
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-green-600">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-green-600">
              Protfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-4 text-center">
            <li>
              <Link to="/" className="block py-2 hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 hover:text-green-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/resume" className="block py-2 hover:text-green-600">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="block py-2 hover:text-green-600">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 hover:text-green-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 