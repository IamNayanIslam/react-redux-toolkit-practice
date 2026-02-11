import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Show Books", path: "/show-books" },
    { name: "Add Book", path: "/add-book" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-6 py-4 font-['Hind_Siliguri']">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black text-green-600 tracking-tighter"
        >
          CRUD<span className="text-gray-900">APP</span>
        </Link>

        <ul className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group px-4 py-2">
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {link.name}
              </Link>

              <div
                className="font-bold text-sm h-0 overflow-hidden invisible select-none pointer-events-none"
                aria-hidden="true"
              >
                {link.name}
              </div>

              {location.pathname === link.path && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 transition-all duration-300">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.path} onClick={() => setIsOpen(false)}>
                <Link
                  to={link.path}
                  className={`text-lg font-semibold ${
                    location.pathname === link.path
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
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
