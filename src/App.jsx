import React, { useState, useEffect } from "react";
import image1 from "./images/AdobeStock_323023398.jpeg";
import image2 from "./images/AdobeStock_575552556.jpeg";
import image3 from "./images/AdobeStock_629069571.jpeg";

const images = [image1, image2, image3];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <a
                    href="#"
                    className="text-gray-800 text-xl italic font-body hover:text-gray-700 md:text-2xl"
                  >
                    The 31th Hotel
                  </a>
                </div>
                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden -mx-4 md:flex md:items-center">
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Dining
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Entertainment
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative w-full h-256">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-10000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute w-full h-full bg-black opacity-40" />
          </div>
        ))}
        <div className="text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-5xl font-bold uppercase md:text-12xl font-body mb-6">
            Where Every
          </div>
          <div className="text-white text-5xl font-bold uppercase md:text-12xl font-body ml-20 mb-6">
            Moment is
          </div>
          <div className="text-white text-5xl font-bold uppercase md:text-12xl font-body ml-10">
            Unforgettable
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
