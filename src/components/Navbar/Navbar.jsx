import React, { useState } from "react";
import LOGO from "../../imgs/LOGO.svg";
import { Link, useLocation } from "react-router-dom";

/** * Navbar Component
 * Renders a responsive navigation bar with links to different sections of the app.
 */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "List", path: "/pokemon" },
    { name: "Game", path: "/game" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 shadow-2xl sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[5vw] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-500">
          <img
            className="h-12 md:h-16 w-auto object-contain drop-shadow-2xl"
            src={LOGO}
            alt="Logo"
          />
        </div>

        {/* navItems for Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-semibold tracking-tight transition-all duration-300 ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-white after:rounded-full"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none z-50"
          >
            <span className="block w-6 h-0.5 bg-white mb-1 rounded-full transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white mb-1 rounded-full transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-purple-400/80 backdrop-blur-md shadow-inner`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-white font-semibold text-lg transition-colors duration-300 ${
                location.pathname === item.path
                  ? "underline"
                  : "hover:text-yellow-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
