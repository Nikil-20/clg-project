// src/Component/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              className="h-14 w-14"
              src="coep_logoBlack.png"
              alt="COEP Logo"
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 items-baseline space-x-4">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/About"
              onClick={handleLinkClick}
              className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </Link>
            <Link
              to="/Services"
              onClick={handleLinkClick}
              className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Campus
            </Link>
            <Link
              to="/AdmissionsPage"
              onClick={handleLinkClick}
              className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Academics
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Open mobile menu"
              className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              <img
                src="https://w7.pngwing.com/pngs/508/394/png-transparent-hamburger-button-computer-icons-menu-number-list-angle-text-rectangle.png"
                alt="Menu Icon"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-gray-700 hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/About"
            onClick={handleLinkClick}
            className="text-gray-700 hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/Services"
            onClick={handleLinkClick}
            className="text-gray-700 hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Campus
          </Link>
          <Link
            to="/AdmissionsPage"
            onClick={handleLinkClick}
            className="text-gray-700 hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Academics
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
