import React, { useState } from "react";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image2 from "../images/AdobeStock_575552556.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";
import { Link } from "react-router-dom";

const Dining = () => {
  const [selectedOption, setSelectedOption] = useState("coffee");
  const [text, setText] = useState("");

  const images = {
    coffee: image1,
    highDining: image2,
    buffet: image3,
  };

  return (
    <div className="p-20 mx-20 relative">
      <div className="flex">
        <div className="w-1/2 flex flex-col mr-20 ml-20 relative">
          <p className="text-left text-4xl uppercase font-semibold font-body mt-4">
            Dining
          </p>
          <p className="text-left text-sm font-regular font-body mt-4">
            The 31th Hotel offers unforgettable food and drink options. Enjoy
            dinner at the award-winning 12-Gage Restaurant authentic New York
            cuisine influenced by the surrounding border region. Start your day
            with a cup of coffee from the V6 Coffee and then stop by the Brick
            Vault Brewery Barbeque for some beer and BBQ.
          </p>

          <button
            className="text-left text-xl uppercase font-semibold font-body mt-4 border-b-2 text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setSelectedOption("coffee")}
            onMouseDown={() => setText("Here")}
            onMouseUp={() => setText("")}
          >
            Coffee
          </button>
          <button
            className="text-left text-xl uppercase font-semibold font-body mt-4 border-b-2 text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setSelectedOption("highDining")}
            onMouseDown={() => setText("is")}
            onMouseUp={() => setText("")}
          >
            High Dining
          </button>
          <button
            className="text-left text-xl uppercase font-semibold font-body mt-4 border-b-2 text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setSelectedOption("buffet")}
            onMouseDown={() => setText("not safe")}
            onMouseUp={() => setText("")}
          >
            Buffet
          </button>
          <Link
            to="/SpecialOfferCode:<Code>"
            className="text-left text-xl uppercase font-semibold font-body mt-4 bg-transparent text-white hover:text-red-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setText("don't click this button")}
          >
            Special Offer
          </Link>
        </div>
        <div className="w-1/2 h-1/2 mx-20 relative">
          <img
            src={images[selectedOption]}
            alt={selectedOption}
            className="object-cover h-96 w-auto"
          />
          {text && (
            <div className="absolute top-0 left-0 w-full h-full">
              <p className="text-white text-xl">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dining;
