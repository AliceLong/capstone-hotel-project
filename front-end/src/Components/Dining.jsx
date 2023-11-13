import React, { useState } from "react";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image2 from "../images/AdobeStock_575552556.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";

const Dining = () => {
  const [selectedOption, setSelectedOption] = useState("coffee");

  const images = {
    coffee: image1,
    highDining: image2,
    buffet: image3,
  };

  return (
    <div className="p-20">
      <div className="flex">
        <div className="w-1/3 flex flex-col mr-30 ml-10 relative">
          <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
            Dining
          </p>
          <p className="text-left text-sm font-regular font-body mt-4">
            The Gage Hotel offers unforgettable food and drink options. Enjoy
            dinner at the award-winning 12-Gage Restaurant authentic New York
            cuisine influenced by the surrounding border region. Grab drinks at
            one of Texas Monthly’s “Top Hotel Bars,” the White Buffalo Bar.
            Start your day with a cup of coffee from the V6 Coffee and then stop
            by the Brick Vault Brewery Barbeque for some beer and BBQ.
          </p>
          <button
            className="text-left text-xl uppercase font-semibold  font-body mt-4 border-b-2 hover:text-red-500"
            onMouseEnter={() => setSelectedOption("coffee")}
          >
            Coffee
          </button>
          <button
            className="text-left text-xl uppercase font-semibold  font-body mt-4 border-b-2 hover:text-red-500"
            onMouseEnter={() => setSelectedOption("highDining")}
          >
            High Dining
          </button>
          <button
            className="text-left text-xl uppercase font-semibold  font-body mt-4 border-b-2 hover:text-red-500"
            onMouseEnter={() => setSelectedOption("buffet")}
          >
            Buffet
          </button>
        </div>
        <div className="w-1/2 h-1/2 mx-20">
          <div className="w-100px h-100px">
            <img
              src={images[selectedOption]}
              alt={selectedOption}
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
