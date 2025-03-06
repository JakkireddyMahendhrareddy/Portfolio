import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PortfolioLogo from "./PortfolioLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navbar titles based on the route
  const pageTitles = {
    "/": "Home",
    "/services": "Services",
    "/resume": "My Resume",
    "/portfolio": "Portfolio",
    "/contact": "Contact",
  };

  // Get the current page title

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="https://en.wikipedia.org/wiki/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PortfolioLogo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {Object.keys(pageTitles).map((route) => (
            <li key={route}>
              <Link
                to={route}
                className={`hover:text-green-600 ${
                  location.pathname === route ? "text-green-500 font-bold" : ""
                }`}
              >
                {pageTitles[route]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-4 text-center">
            {Object.keys(pageTitles).map((route) => (
              <li key={route}>
                <Link
                  to={route}
                  className={`block py-2 hover:text-green-600 ${
                    location.pathname === route
                      ? "text-green-500 text-lg font-bold"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {pageTitles[route]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
