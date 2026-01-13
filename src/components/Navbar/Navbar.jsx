import React, { useState } from "react";
import LOGO from "../../imgs/LOGO.png";
import { Link, useLocation } from "react-router-dom";

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
    <nav className="w-full bg-white shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.10)] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[5vw] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-12 md:h-16 w-auto object-contain"
            src={LOGO}
            alt="Logo"
          />
        </div>

        {/* navItems */}
        <div className="hidden md:flex items-center gap-[3vw]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-tight transition-all duration-300 border-b-2 py-1 ${
                  isActive
                    ? "text-blue-600 border-blue-600" // Blue if active
                    : "text-neutral-400 border-transparent hover:text-neutral-600" // Grey if not
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ... ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-8 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg text-left font-medium ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-neutral-400"
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
