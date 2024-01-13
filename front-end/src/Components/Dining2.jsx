import React, { useState } from "react";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image2 from "../images/AdobeStock_575552556.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";
import { Link } from "react-router-dom";

const Dining = (home2) => {
  const [selectedOption, setSelectedOption] = useState("coffee");
  const [text, setText] = useState("");

  const images = {
    coffee: image1,
    highDining: image2,
    buffet: image3,
  };
  console.log(home2);
  return (
    <div className="p-20 mx-[10%] relative">
      <div className="flex">
        <div className="w-1/2 flex flex-col pr-[10%] relative">
          <p className="text-left text-4xl uppercase font-semibold font-body mt-4">
            Dining
          </p>
          <p className="text-left text-sm font-regular font-body mt-4">
            The 31th Hotel offers unforgettable food and drink options. Start
            your day with spendid buffet in 31th Bistro and then stop by the
            Cafe for a cup of coffee and a pastry. Enjoy private dinner at the
            award-winning seafood cuisine at the club room.
          </p>
          <button
            className="text-left text-xl uppercase font-semibold font-body mt-[10%] border-gray-80   border-b-2 text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setSelectedOption("coffee")}
            onMouseDown={() => setText("The Club Room ")}
            onMouseUp={() => setText("")}
          >
            Cafe 31th
          </button>
          <button
            className="text-left text-xl uppercase font-semibold font-body mt-4 border-b-2 text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setSelectedOption("highDining")}
            onMouseDown={() => setText("and the bar")}
            onMouseUp={() => setText("")}
          >
            The Club Room
          </button>
          <button
            className="text-left text-xl uppercase font-semibold font-body mt-4 border-b-2 text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setSelectedOption("buffet")}
            onMouseDown={() => setText("are both dangerous")}
            onMouseUp={() => setText("")}
          >
            The 31th Bistro
          </button>

          <Link
            to="/DiningDetails"
            className="text-left text-xl uppercase font-semibold font-body mt-4 bg-transparent border-b-2 text-blac hover:text-red-500 transform transition duration-500 ease-in-out hover:-translate-y-1"
          >
            The most iconic night bar
          </Link>
        </div>
        <div className="w-1/2 h-1/2 pl-[10%] relative">
          <img
            src={images[selectedOption]}
            alt={selectedOption}
            className="object-cover h-96 w-auto"
          />
          {text && (
            <div className="absolute top-0 ">
              <p className="text-white text-4xl">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dining;
