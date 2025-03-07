import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PortfolioLogo from "./PortfolioLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const pageTitles = {
    "/": "Home",
    "/services": "Services",
    "/resume": "My Resume",
    "/portfolio": "Portfolio",
    "/contact": "Contact",
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        <Link
          to="https://en.wikipedia.org/wiki/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PortfolioLogo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {Object.keys(pageTitles).map((route) => (
            <li key={route}>
              <Link
                to={route}
                className={`hover:text-green-400 transition-colors duration-300 ${
                  location.pathname === route ? "text-green-500 font-bold" : ""
                }`}
              >
                {pageTitles[route]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center justify-center transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className="space-y-6 text-center text-2xl">
          {Object.keys(pageTitles).map((route) => (
            <li key={route}>
              <Link
                to={route}
                className="block py-2 hover:text-green-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {pageTitles[route]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;