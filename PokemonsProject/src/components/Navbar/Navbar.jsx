import React, { useState } from "react";
import LOGO from "../imgs/LOGO.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "List", "Game", "About Us", "Contact Us"];

  return (
    <nav className="w-full bg-white shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.10)] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[5vw] py-4 flex justify-between items-center">
        {/* Logo  */}
        <div className="flex-shrink-0">
          <img
            className="h-12 md:h-16 w-auto object-contain"
            src={LOGO}
            alt="Logo"
          />
        </div>

        {/* navItems */}
        <div className="hidden md:flex items-center gap-[3vw]">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={`text-sm font-medium tracking-tight transition-all duration-300 border-b-2 py-1 ${
                activeItem === item
                  ? "text-blue-600 border-blue-600"
                  : "text-neutral-400 border-transparent hover:text-neutral-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button*/}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-500 p-2 focus:outline-none"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Menu Icon / Hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveItem(item);
                setIsOpen(false);
              }}
              className={`text-lg text-left font-medium ${
                activeItem === item ? "text-blue-600" : "text-neutral-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
