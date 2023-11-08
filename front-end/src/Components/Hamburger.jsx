import React, { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{ zIndex: 10 }}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 13H5v-2h14v2zm0-5H5V6h14v2zm0 9H5v-2h14v2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-10">
          <div className="absolute top-0 right-0 p-4">
            <button
              className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              {/* Close Button */}
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close menu</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 11-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                />
              </svg>
            </button>
          </div>

          <div className="h-full flex flex-col justify-center items-center bg-white">
            <a
              href="#"
              className="text-black font-medium text-lg hover:text-gray-700 py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black font-medium text-lg hover:text-gray-700 py-2"
            >
              About
            </a>
            <a
              href="#"
              className="text-black font-medium text-lg hover:text-gray-700 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
