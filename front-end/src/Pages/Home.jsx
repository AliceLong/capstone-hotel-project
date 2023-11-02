import React, { useState, useEffect } from "react";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image2 from "../images/AdobeStock_575552556.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";

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
      <header className="fixed w-full z-10 bg-transparent transition-colors duration-500 hover:bg-white group">
        <nav className="shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">
                  <a
                    href="#"
                    className="text-white text-xl italic font-body md:text-2xl group-hover:text-black"
                  >
                    The 31th Hotel
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-center md:flex-grow">
                <div className="flex justify-center flex-grow">
                  <a
                    href="#"
                    className="block mx-4 mt-2 md:mt-0 text-sm font-body text-white capitalize group-hover:text-black"
                  >
                    Dining
                  </a>
                  <a
                    href="#"
                    className="block mx-4 mt-2 md:mt-0 text-sm font-body text-white capitalize group-hover:text-black"
                  >
                    Entertainment
                  </a>
                  <a
                    href="#"
                    className="block mx-4 mt-2 md:mt-0 text-sm font-body text-white capitalize group-hover:text-black"
                  >
                    Gallery
                  </a>
                </div>
                <div className="hidden md:block">
                  <a
                    href="#"
                    className="ml-4 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black group-hover:border-black group-hover:border group-hover:bg-white group-hover:text-black"
                  >
                    Book Now
                  </a>
                </div>
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
          <div className="text-white text-1xl font-regular italic md:text-12xl font-body mb-1">
            Where Every
          </div>
          <div className="text-white text-1xl font-regular italic md:text-12xl font-body ml-20 mb-2">
            Moment is
          </div>
          <div className="text-white text-6xl font-regular italic md:text-12xl font-title ml-10">
            Unforgettable
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
