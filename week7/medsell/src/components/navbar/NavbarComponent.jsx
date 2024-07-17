import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventRegistration from './../EventRegistration/EventRegistration';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">HealMe</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</Link>
              <Link to="/shop" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Shop</Link>
              <Link to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              <Link to="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
              <Link to="/product" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Product</Link>
              <Link to="/event" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Event Registration</Link>

            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">Log In</Link>
            <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="">
            <li><Link to="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
            <li><Link to="/shop" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Shop</Link></li>
            <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
            <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</Link></li>
            <li><Link to="/event" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Event Registration</Link></li>

            <li><Link to="/login" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Log In</Link></li>
            <li><Link to="/signup" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sign Up</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarComponent;